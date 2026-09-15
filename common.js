// Helpers shared between the landing page and the room page

const APP_VERSION = "2.1.1";

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

function applyVersionBadge() {
  const el = document.getElementById("versionBadge");
  if (el) el.textContent = "v" + APP_VERSION;
}
