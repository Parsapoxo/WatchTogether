// The two sections of the course, with how many episodes each one has in total
// (including episodes not added to VIDEO_LIST yet).
const SECTIONS = [
  { id: "beginner", title: "Beginner", totalEpisodes: 107 },
  { id: "advanced", title: "Advanced", totalEpisodes: 45 }
];

// The list of videos people can pick from.
// To add a new one, add another line in this shape:
// { id: "a-unique-id", title: "Title shown in the list", section: "beginner" or "advanced", url: "direct link to the video file" }

const VIDEO_LIST = [
  {
    id: "py-install",
    title: "1 - Installing Python",
    section: "beginner",
    url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/00a06eca-5779-4878-a2ab-f71e71345c40/1_pythoninstallation.mp4"
  },
  {
    id: "vscode-install",
    title: "2 - Installing VS Code",
    section: "beginner",
    url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/344ff03e-8940-4053-b288-fca71280a97d/2_vscode_installation.mp4"
  },
  {
    id: "py-38",
    title: "38 - Training (Part 1)",
    section: "beginner",
    url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/cfd69fc5-5dcb-4cf1-bc94-74086006a305/38_python(38).mp4"
  },
  {
    id: "py-39",
    title: "39 - Training (Part 2)",
    section: "beginner",
    url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/75d108b2-d104-4804-a5a2-4cbd3d158980/39_python(39).mp4"
  },
  {
    id: "py-40",
    title: "40 - Training (Part 3)",
    section: "beginner",
    url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/b36ce59d-af17-4194-8506-58bedf26f414/40_python(40).mp4"
  },
  {
    id: "py-41",
    title: "41 - Training (Part 4)",
    section: "beginner",
    url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/815be941-9db5-4456-b892-0ec4e0644fa6/41_python(41).mp4"
  },
  {
    id: "py-42",
    title: "42 - Training (Part 5)",
    section: "beginner",
    url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/f528778d-39ae-46d7-aa90-71f40ff51ac7/42_python(42).mp4"
  },
  {
    id: "py-for-loop-1",
    title: "43 - For Loops (Part 1)",
    section: "beginner",
    url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/851e6995-d8ee-4e1f-9190-7234e3796b1c/43_pythonforloop(1).mp4"
  },
  {
    id: "py-for-loop-2",
    title: "44 - For Loops (Part 2)",
    section: "beginner",
    url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/645ba18b-2394-45be-a6bf-4c6a79300d1c/44_python_for_loop(2).mp4"
  },
  {
    id: "py-for-loop-3",
    title: "45 - For Loops (Part 3)",
    section: "beginner",
    url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/ae940f91-eeed-4fba-a0a2-7a7b276ff350/45_python_for_loop(3).mp4"
  },
  {
    id: "py-for-loop-4",
    title: "46 - For Loops (Part 4)",
    section: "beginner",
    url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/d0e5e038-3de8-47cd-bbe6-fac3892642fe/46_pythonforloop(4).mp4"
  },
  {
    id: "py-for-loop-5",
    title: "47 - For Loops (Part 5)",
    section: "beginner",
    url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/36d66227-6a6f-4914-941a-6df4ac79ee02/47_pythonforloop(5).mp4"
  },
  {
    id: "py-for-loop-6",
    title: "48 - For Loops (Part 6)",
    section: "beginner",
    url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/fabdd10a-90c7-48ab-8873-7c00c41c28dd/48_pythonforloop(6).mp4"
  },
  {
    id: "py-49",
    title: "49 - Training (Part 1)",
    section: "beginner",
    url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/f89e0575-e0ce-442d-98f5-40d2eeb0b6ec/49_python(49).mp4"
  },
  {
    id: "py-50",
    title: "50 - Training (Part 2)",
    section: "beginner",
    url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/483db1af-8472-448e-aa49-fe32be3ac77c/50_python(50).mp4"
  },
  {
    id: "py-51",
    title: "51 - Training (Part 3)",
    section: "beginner",
    url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/227a1760-1921-472b-a5f3-2f35a27e2138/51_python(51).mp4"
  },
  {
    id: "py-52",
    title: "52 - Training (Part 4)",
    section: "beginner",
    url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/214a65d0-221c-4415-8c2c-64412faf6004/52_python(52).mp4"
  },
  {
    id: "py-53",
    title: "53 - Python Functions (Part 1)",
    section: "beginner",
    url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/4e13fa11-ce6a-44b0-af7c-a2b749a05338/53_pythonfunctions(1).mp4"
  },
  {
    id: "py-54",
    title: "54 - Python Functions (Part 2)",
    section: "beginner",
    url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/37d32f7b-468d-4f58-b46b-1f037e390773/54_pythonfunctions(2).mp4"
  },
  {
    id: "py-55",
    title: "55 - Python Functions (Part 3)",
    section: "beginner",
    url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/16678cf0-aced-4a55-9fd1-e8a18f8fe383/55_pythonfunctions(3).mp4"
  },
  {
    id: "py-56",
    title: "56 - Training",
    section: "beginner",
    url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/ca42f3e7-acc6-4f17-bae7-c344933fee6a/56_python(56).mp4"
  },
  {
    id: "py-57",
    title: "57 - Python Functions (Part 4)",
    section: "beginner",
    url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/d6a94e17-002b-42d3-957d-c76dbf178b63/57_pythonfunctions(4).mp4"
  },
  {
    id: "py-58",
    title: "58 - Python Functions (Part 5)",
    section: "beginner",
    url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/93fd428a-fe99-41a1-9aea-76e48c859f68/58_pythonfunctions(5).mp4"
  },
  {
    id: "py-59",
    title: "59 - Python Functions (Part 6)",
    section: "beginner",
    url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/64d7bef6-8699-4fe0-adb8-749748f9bbf2/59_pythonfunctions(6).mp4"
  },
  {
    id: "py-60",
    title: "60 - Python Functions (Part 7)",
    section: "beginner",
    url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/8859b519-8e33-4a73-8f58-2ed9b7ffb8de/60_pythonfunctions(7).mp4"
  },
  {
    id: "py-61",
    title: "61 - Python Functions (Part 8)",
    section: "beginner",
    url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/2aef9957-504a-4550-bc62-beb13c904bb6/61_pythonfunctions(8).mp4"
  },
  {
    id: "py-62",
    title: "62 - Python Functions (Part 9)",
    section: "beginner",
    url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/aec27c52-b2c2-4576-af09-34182a45cb68/62_pythonfunctions(9).mp4"
  },
  {
    id: "py-63",
    title: "63 - Training (Part 1)",
    section: "beginner",
    url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/4e8e26c7-f7cf-4282-9918-eab7c57a4d0b/63_pythonfunctions(10).mp4"
  },
  {
    id: "py-64",
    title: "64 - Training (Part 2)",
    section: "beginner",
    url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/ff986d6e-0cc6-4f1b-bdf7-4a2649975acb/64_pythonfunctions(11).mp4"
  },
  {
    id: "py-65",
    title: "65 - Training (Part 3)",
    section: "beginner",
    url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/e6036534-48b1-4cb3-b801-bc74df674fd5/65_pythonfunctions(12).mp4"
  },
  {
    id: "py-66",
    title: "66 - VS Code theme and a few other tips",
    section: "beginner",
    url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/d48cc30b-9730-46b3-8241-36e70f336c46/66_pythonfunctions(13).mp4"
  },
  {
    id: "py-67",
    title: "67 - Python Lambda (Part 1)",
    section: "beginner",
    url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/ca87ce1e-fd93-4325-b9bb-656841c73ff6/67_pythonlambda(1).mp4"
  },
  {
    id: "py-68",
    title: "68 - Python Lambda (Part 2)",
    section: "beginner",
    url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/a3d35b73-4bd5-4ff1-b762-cf56f4561946/68_pythonlambda(2).mp4"
  },
  {
    id: "py-69",
    title: "69 - Python Map Function",
    section: "beginner",
    url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/b2a3921d-8d1b-498d-b08e-043f2eccabf4/69_pythonmapfunction.mp4"
  }
];
