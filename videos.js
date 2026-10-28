// =============================================================================
//  Everything the site can play lives in this file, organised as
//
//      Course  ->  Section  ->  Episode
//      Python  ->  Beginner ->  1 - Installing Python
//
//  HOW TO ADD THINGS
//   - New episode:  add one { id, title, url } block inside the right section's
//                   `episodes` list. The `id` must be unique across the whole file
//                   and must never change afterwards (watch progress and chat are
//                   saved under it). Titles that start with a number ("40 - ...")
//                   show that number on the episode tile; titles without one are
//                   numbered by their position inside the course.
//   - New section:  add { id, title, totalEpisodes, episodes: [] } to a course's
//                   `sections`. `totalEpisodes` is how many episodes the section has
//                   in total (even the ones you haven't added yet) - it is what the
//                   progress rings are calculated against. Section ids must be unique.
//   - New course:   add { id, title, logo, sections: [...] } to COURSES and put its
//                   logo image in the `assets` folder (`logo` is the path to it).
//                   Without a logo the course shows its first letter instead.
//                   Add `comingSoon: true` (and leave `sections: []`) for a course whose
//                   lessons aren't ready yet: it appears with a "Coming soon" tag and
//                   can't be opened. When you're ready, delete the `comingSoon` line
//                   and fill in the sections.
// =============================================================================

const COURSES = [
  {
    id: "python",
    title: "Python",
    logo: "assets/python.webp",
    sections: [
      {
        id: "python-beginner",
        title: "Beginner",
        totalEpisodes: 107,
        episodes: [
          {
            id: "py-install",
            title: "1 - Installing Python",
            url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/00a06eca-5779-4878-a2ab-f71e71345c40/1_pythoninstallation.mp4"
          },
          {
            id: "vscode-install",
            title: "2 - Installing VS Code",
            url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/344ff03e-8940-4053-b288-fca71280a97d/2_vscode_installation.mp4"
          },
          {
            id: "py-38",
            title: "38 - Training (Part 1)",
            url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/cfd69fc5-5dcb-4cf1-bc94-74086006a305/38_python(38).mp4"
          },
          {
            id: "py-39",
            title: "39 - Training (Part 2)",
            url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/75d108b2-d104-4804-a5a2-4cbd3d158980/39_python(39).mp4"
          },
          {
            id: "py-40",
            title: "40 - Training (Part 3)",
            url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/b36ce59d-af17-4194-8506-58bedf26f414/40_python(40).mp4"
          },
          {
            id: "py-41",
            title: "41 - Training (Part 4)",
            url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/815be941-9db5-4456-b892-0ec4e0644fa6/41_python(41).mp4"
          },
          {
            id: "py-42",
            title: "42 - Training (Part 5)",
            url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/f528778d-39ae-46d7-aa90-71f40ff51ac7/42_python(42).mp4"
          },
          {
            id: "py-for-loop-1",
            title: "43 - For Loops (Part 1)",
            url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/851e6995-d8ee-4e1f-9190-7234e3796b1c/43_pythonforloop(1).mp4"
          },
          {
            id: "py-for-loop-2",
            title: "44 - For Loops (Part 2)",
            url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/645ba18b-2394-45be-a6bf-4c6a79300d1c/44_python_for_loop(2).mp4"
          },
          {
            id: "py-for-loop-3",
            title: "45 - For Loops (Part 3)",
            url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/ae940f91-eeed-4fba-a0a2-7a7b276ff350/45_python_for_loop(3).mp4"
          },
          {
            id: "py-for-loop-4",
            title: "46 - For Loops (Part 4)",
            url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/d0e5e038-3de8-47cd-bbe6-fac3892642fe/46_pythonforloop(4).mp4"
          },
          {
            id: "py-for-loop-5",
            title: "47 - For Loops (Part 5)",
            url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/36d66227-6a6f-4914-941a-6df4ac79ee02/47_pythonforloop(5).mp4"
          },
          {
            id: "py-for-loop-6",
            title: "48 - For Loops (Part 6)",
            url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/fabdd10a-90c7-48ab-8873-7c00c41c28dd/48_pythonforloop(6).mp4"
          },
          {
            id: "py-49",
            title: "49 - Training (Part 1)",
            url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/f89e0575-e0ce-442d-98f5-40d2eeb0b6ec/49_python(49).mp4"
          },
          {
            id: "py-50",
            title: "50 - Training (Part 2)",
            url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/483db1af-8472-448e-aa49-fe32be3ac77c/50_python(50).mp4"
          },
          {
            id: "py-51",
            title: "51 - Training (Part 3)",
            url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/227a1760-1921-472b-a5f3-2f35a27e2138/51_python(51).mp4"
          },
          {
            id: "py-52",
            title: "52 - Training (Part 4)",
            url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/214a65d0-221c-4415-8c2c-64412faf6004/52_python(52).mp4"
          },
          {
            id: "py-53",
            title: "53 - Python Functions (Part 1)",
            url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/4e13fa11-ce6a-44b0-af7c-a2b749a05338/53_pythonfunctions(1).mp4"
          },
          {
            id: "py-54",
            title: "54 - Python Functions (Part 2)",
            url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/37d32f7b-468d-4f58-b46b-1f037e390773/54_pythonfunctions(2).mp4"
          },
          {
            id: "py-55",
            title: "55 - Python Functions (Part 3)",
            url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/16678cf0-aced-4a55-9fd1-e8a18f8fe383/55_pythonfunctions(3).mp4"
          },
          {
            id: "py-56",
            title: "56 - Training",
            url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/ca42f3e7-acc6-4f17-bae7-c344933fee6a/56_python(56).mp4"
          },
          {
            id: "py-57",
            title: "57 - Python Functions (Part 4)",
            url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/d6a94e17-002b-42d3-957d-c76dbf178b63/57_pythonfunctions(4).mp4"
          },
          {
            id: "py-58",
            title: "58 - Python Functions (Part 5)",
            url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/93fd428a-fe99-41a1-9aea-76e48c859f68/58_pythonfunctions(5).mp4"
          },
          {
            id: "py-59",
            title: "59 - Python Functions (Part 6)",
            url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/64d7bef6-8699-4fe0-adb8-749748f9bbf2/59_pythonfunctions(6).mp4"
          },
          {
            id: "py-60",
            title: "60 - Python Functions (Part 7)",
            url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/8859b519-8e33-4a73-8f58-2ed9b7ffb8de/60_pythonfunctions(7).mp4"
          },
          {
            id: "py-61",
            title: "61 - Python Functions (Part 8)",
            url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/2aef9957-504a-4550-bc62-beb13c904bb6/61_pythonfunctions(8).mp4"
          },
          {
            id: "py-62",
            title: "62 - Python Functions (Part 9)",
            url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/aec27c52-b2c2-4576-af09-34182a45cb68/62_pythonfunctions(9).mp4"
          },
          {
            id: "py-63",
            title: "63 - Training (Part 1)",
            url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/4e8e26c7-f7cf-4282-9918-eab7c57a4d0b/63_pythonfunctions(10).mp4"
          },
          {
            id: "py-64",
            title: "64 - Training (Part 2)",
            url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/ff986d6e-0cc6-4f1b-bdf7-4a2649975acb/64_pythonfunctions(11).mp4"
          },
          {
            id: "py-65",
            title: "65 - Training (Part 3)",
            url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/e6036534-48b1-4cb3-b801-bc74df674fd5/65_pythonfunctions(12).mp4"
          },
          {
            id: "py-66",
            title: "66 - VS Code theme and a few other tips",
            url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/d48cc30b-9730-46b3-8241-36e70f336c46/66_pythonfunctions(13).mp4"
          },
          {
            id: "py-67",
            title: "67 - Python Lambda (Part 1)",
            url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/ca87ce1e-fd93-4325-b9bb-656841c73ff6/67_pythonlambda(1).mp4"
          },
          {
            id: "py-68",
            title: "68 - Python Lambda (Part 2)",
            url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/a3d35b73-4bd5-4ff1-b762-cf56f4561946/68_pythonlambda(2).mp4"
          },
          {
            id: "py-69",
            title: "69 - Python Map Function",
            url: "https://dl.codeyad.com/videos/Courses/00b22ad1-7db1-4bf7-9125-075b7bdf2ccf/Episodes/b2a3921d-8d1b-498d-b08e-043f2eccabf4/69_pythonmapfunction.mp4"
          }
        ]
      },
      {
        id: "python-advanced",
        title: "Advanced",
        totalEpisodes: 45,
        episodes: []
      }
    ]
  },
  {
    id: "git",
    title: "Git",
    logo: "assets/git.png",
    sections: [
      {
        id: "git-overview",
        title: "Git Overview and Tutorial",
        totalEpisodes: 4,
        episodes: [
          {
            id: "git1",
            title: "Reviewing Git and Installing It on Windows",
            url: "https://dl.codeyad.com/videos/Courses/40aa9afb-10a5-4533-9922-f33ecccdf7f6/Episodes/f5492cd1-557b-4d40-ada9-bbf777700e52/1_install.mp4"
          },
          {
            id: "git2",
            title: "Examining Git Structure | Creating a New Repository",
            url: "https://dl.codeyad.com/videos/Courses/40aa9afb-10a5-4533-9922-f33ecccdf7f6/Episodes/f375103f-37c7-4cb4-bb63-816dc8bcfb3e/2_git-structure.mp4"
          },
          {
            id: "git3",
            title: "Exploring Branches | Working with Branch-Related Commands",
            url: "https://dl.codeyad.com/videos/Courses/40aa9afb-10a5-4533-9922-f33ecccdf7f6/Episodes/6d7eaa47-bfcf-4f88-aa1c-1e2936cd7877/3_branch.mp4"
          },
          {
            id: "git4",
            title: "Reviewing and creating a .gitignore file",
            url: "https://dl.codeyad.com/videos/Courses/40aa9afb-10a5-4533-9922-f33ecccdf7f6/Episodes/4af4034d-4076-476c-9880-47a38a5211bc/4_git-ignore.mp4"
          }
        ]
      },
      {
        id: "git-vscode",
        title: "Using Git in Visual Studio Code",
        totalEpisodes: 2,
        episodes: [
          {
            id: "git5",
            title: "How to work with Git in VS Code",
            url: "https://dl.codeyad.com/videos/Courses/40aa9afb-10a5-4533-9922-f33ecccdf7f6/Episodes/4435b4bb-624c-4c96-89bd-59cd5c9c934c/5_git-in-vs_code.mp4"
          },
          {
            id: "git6",
            title: "Examining conflicts and how to resolve them",
            url: "https://dl.codeyad.com/videos/Courses/40aa9afb-10a5-4533-9922-f33ecccdf7f6/Episodes/999c262c-b741-42a0-81f5-90e88427306c/6_conflicts.mp4"
          }
        ]
      },
      {
        id: "git-visual-studio",
        title: "Using Git in Visual Studio",
        totalEpisodes: 1,
        episodes: [
          {
            id: "git7",
            title: "Working with Git in Visual Studio",
            url: "https://dl.codeyad.com/videos/Courses/40aa9afb-10a5-4533-9922-f33ecccdf7f6/Episodes/586ee124-f6a8-4269-9eca-9c6b8c4b41cc/7_visual-studio.mp4"
          }
        ]
      },
      {
        id: "git-github",
        title: "Overview and Tutorial on Using GitHub",
        totalEpisodes: 5,
        episodes: [
          {
            id: "git8",
            title: "What is GitHub? | Signing up for GitHub",
            url: "https://dl.codeyad.com/videos/Courses/40aa9afb-10a5-4533-9922-f33ecccdf7f6/Episodes/92a2f493-e015-4b30-bc80-9a272f7c3469/8_register-in-github.mp4"
          },
          {
            id: "git9",
            title: "Creating a project on GitHub | Working with Git commands (remote, push, pull)",
            url: "https://dl.codeyad.com/videos/Courses/40aa9afb-10a5-4533-9922-f33ecccdf7f6/Episodes/02751b3e-92f0-42e7-aec4-c426a000d6b9/9_create-github-repository.mp4"
          },
          {
            id: "git10",
            title: "Working with GitHub in VS Code | How to clone projects",
            url: "https://dl.codeyad.com/videos/Courses/40aa9afb-10a5-4533-9922-f33ecccdf7f6/Episodes/b63dde8d-3a0c-4e4a-a634-ac5131b306f4/10_github-in-vs_code.mp4"
          },
          {
            id: "git11",
            title: "Working with GitHub in Visual Studio",
            url: "https://dl.codeyad.com/videos/Courses/40aa9afb-10a5-4533-9922-f33ecccdf7f6/Episodes/1f21f614-b5d8-4b8f-ab9f-32d31da184f2/11_github-in-visual_studio.mp4"
          },
          {
            id: "git12",
            title: "Pull Request",
            url: "https://dl.codeyad.com/videos/Courses/40aa9afb-10a5-4533-9922-f33ecccdf7f6/Episodes/3830bbc6-3603-46d0-9b67-666fa26df105/12_pull-request.mp4"
          }
        ]
      }
    ]
  },
  {
    id: "chatgpt",
    title: "ChatGPT",
    logo: "assets/chatgpt.svg",
    sections: [
      {
        id: "chatgpt-intro",
        title: "An Initial Introduction to ChatGPT",
        totalEpisodes: 9,
        episodes: [
        {
          id: "chatgpt1",
          title: "An Introduction to ChatGPT",
          url: "https://dl.codeyad.com/videos/Courses/c42c3fe0-ea53-42b7-a183-b4893f91b9da/Episodes/23e20288-b0f8-45d1-8194-ef693c45fcef/S1-E1_getting-started-with-chatgpt.mp4"
        },
        {
          id: "chatgpt2",
          title: "Initial settings for getting started with ChatGPT",
          url: "https://dl.codeyad.com/videos/Courses/c42c3fe0-ea53-42b7-a183-b4893f91b9da/Episodes/67511650-6d56-4034-b02d-b242ccadc1e6/S1-E2_initial-setup-for-using-chatgpt.mp4"
        },
        {
          id: "chatgpt3",
          title: "Fundamentals of Prompt Engineering",
          url: "https://dl.codeyad.com/videos/Courses/c42c3fe0-ea53-42b7-a183-b4893f91b9da/Episodes/3f6cd4b5-2467-43e8-92cd-ad0d7c58a872/S1-E3_fundamentals-of-prompt-writing.mp4"
        },
        {
          id: "chatgpt4",
          title: "Analyzing images and files with ChatGPT",
          url: "https://dl.codeyad.com/videos/Courses/c42c3fe0-ea53-42b7-a183-b4893f91b9da/Episodes/1c08724f-0ec3-487f-bbda-45cc067b675e/S1-E4_analyze-images-and-files-with-chatgpt.mp4"
        },
        {
          id: "chatgpt5",
          title: "Learning with ChatGPT",
          url: "https://dl.codeyad.com/videos/Courses/c42c3fe0-ea53-42b7-a183-b4893f91b9da/Episodes/b4250c39-a62a-4121-81ce-d81d7dc23c85/S1-E5_learn-with-chatgpt.mp4"
        },
        {
          id: "chatgpt6",
          title: "How to Create Images with ChatGPT",
          url: "https://dl.codeyad.com/videos/Courses/c42c3fe0-ea53-42b7-a183-b4893f91b9da/Episodes/17e28ccd-9420-4d8b-a437-a523b68be6e0/S1-E6_image-chatgpt.mp4"
        },
        {
          id: "chatgpt7",
          title: "Web Search in ChatGPT",
          url: "https://dl.codeyad.com/videos/Courses/c42c3fe0-ea53-42b7-a183-b4893f91b9da/Episodes/627571d1-4161-46bf-ac72-1ecaae1af364/S1-E7_web-search.mp4"
        },
        {
          id: "chatgpt8",
          title: "Deep Research",
          url: "https://dl.codeyad.com/videos/Courses/c42c3fe0-ea53-42b7-a183-b4893f91b9da/Episodes/9e4029dc-6dc6-4589-9058-fce31e3b473c/S1-E8_deep-research.mp4"
        },
        {
          id: "chatgpt9",
          title: "Canvas in ChatGPT",
          url: "https://dl.codeyad.com/videos/Courses/c42c3fe0-ea53-42b7-a183-b4893f91b9da/Episodes/ab6b8ea6-574d-4638-aa40-44d7a5fc1ebe/S1-E9_canvas.mp4"
        }
        ]
      },
      {
        id: "chatgpt-prompting",
        title: "Advanced Prompt Engineering Skills",
        totalEpisodes: 2,
        episodes: [
        {
          id: "chatgpt10",
          title: "Types of prompts",
          url: "https://dl.codeyad.com/videos/Courses/c42c3fe0-ea53-42b7-a183-b4893f91b9da/Episodes/ea6ed34d-7428-4f64-842e-2bdd36cb66b1/S2-E1_prompt-type.mp4"
        },
        {
          id: "chatgpt11",
          title: "Anatomy of a Professional Prompt",
          url: "https://dl.codeyad.com/videos/Courses/c42c3fe0-ea53-42b7-a183-b4893f91b9da/Episodes/2099c1f2-04cb-41d4-b715-93398aa0416e/S2-E2_anatomy-prompt.mp4"
        }
        ]
      }
    ]
  },
  {
    id: "html",
    title: "HTML",
    logo: "assets/html.svg",
    comingSoon: true,
    sections: []
  },
  {
    id: "css",
    title: "CSS",
    logo: "assets/css.svg",
    comingSoon: true,
    sections: []
  }
];

// -----------------------------------------------------------------------------
//  Do not edit below this line: it builds the flat lists the pages use from COURSES.
// -----------------------------------------------------------------------------

const SECTIONS = [];
const VIDEO_LIST = [];
const COURSE_BY_ID = {};
const SECTION_BY_ID = {};

COURSES.forEach((course) => {
  COURSE_BY_ID[course.id] = course;
  course.sections.forEach((section) => {
    section.course = course.id;
    SECTION_BY_ID[section.id] = section;
    SECTIONS.push(section);
    section.episodes.forEach((episode) => {
      VIDEO_LIST.push(Object.assign({}, episode, { section: section.id, course: course.id }));
    });
  });
});

// friendly warning in the browser console if an id is used twice
(function checkForDuplicateIds() {
  const seen = {};
  VIDEO_LIST.forEach((v) => {
    if (seen[v.id]) console.warn("videos.js: duplicate episode id \"" + v.id + "\"");
    seen[v.id] = true;
  });
  const seenSections = {};
  SECTIONS.forEach((s) => {
    if (seenSections[s.id]) console.warn("videos.js: duplicate section id \"" + s.id + "\"");
    seenSections[s.id] = true;
  });
})();
