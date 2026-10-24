// Helpers shared between the landing page and the room page

const APP_VERSION = "3.0.0";

let _sbClient = null;

function initSupabase() {
  if (!_sbClient) {
    _sbClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return _sbClient;
}

function getMyName() {
  return localStorage.getItem("watchtogether_name") || "";
}

function setMyName(name) {
  localStorage.setItem("watchtogether_name", name);
}

function getMyClientId() {
  let id = localStorage.getItem("watchtogether_client_id");
  if (!id) {
    id = "c-" + Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem("watchtogether_client_id", id);
  }
  return id;
}

// --- episode labels (shared by the home page and the watch page) ---

// "40 - Training (Part 3)" -> "40". Titles without a leading number are numbered
// by their position inside their course (so a course of 12 unnumbered episodes
// shows 1..12 even when the episodes are split into several sections).
function episodeNumber(video) {
  const m = video.title.match(/^(\d+)/);
  if (m) return m[1];
  const sameCourse = VIDEO_LIST.filter((v) => v.course === video.course);
  const pos = sameCourse.findIndex((v) => v.id === video.id);
  return pos >= 0 ? String(pos + 1) : "•";
}

// "40 - Training (Part 3)" -> "Training (Part 3)"
function episodeName(video) {
  return video.title.replace(/^\d+\s*[-–—:]\s*/, "");
}

// --- per-video watch progress, shared between everyone via Supabase ---

async function fetchProgressMap(videoIds) {
  const sb = initSupabase();
  const map = {};
  videoIds.forEach((id) => { map[id] = 0; });
  try {
    const { data, error } = await sb.from("progress").select("video_id, fraction").in("video_id", videoIds);
    if (error) throw error;
    (data || []).forEach((row) => { map[row.video_id] = row.fraction; });
  } catch (e) {
    console.error("Couldn't load shared progress:", e);
  }
  return map;
}

async function saveSharedProgress(videoId, fraction) {
  const sb = initSupabase();
  const clamped = Math.max(0, Math.min(1, fraction));
  try {
    const { error } = await sb.from("progress").upsert({
      video_id: videoId,
      fraction: clamped,
      updated_at: new Date().toISOString()
    });
    if (error) throw error;
  } catch (e) {
    console.error("Couldn't save shared progress:", e);
  }
}

// --- chat, shared per episode ---

async function fetchChatHistory(videoId, limit) {
  const sb = initSupabase();
  try {
    const { data, error } = await sb
      .from("messages")
      .select("sender_id, name, body, created_at")
      .eq("video_id", videoId)
      .order("created_at", { ascending: true })
      .limit(limit || 50);
    if (error) throw error;
    return data || [];
  } catch (e) {
    console.error("Couldn't load chat history:", e);
    return [];
  }
}

async function sendChatMessage(videoId, senderId, name, body) {
  const sb = initSupabase();
  try {
    const { error } = await sb.from("messages").insert({
      video_id: videoId,
      sender_id: senderId,
      name: name,
      body: body
    });
    if (error) throw error;
  } catch (e) {
    console.error("Couldn't send chat message:", e);
  }
}

function applyVersionBadge() {
  const el = document.getElementById("versionBadge");
  if (el) el.textContent = "v" + APP_VERSION;
}
