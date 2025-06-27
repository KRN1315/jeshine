// Chapters data grouped by phases and weeks with next PYQ date (ISO format)
const studyPlanData = [
  {
    phase: "Phase 1: Initial Learning (June 28 - August 24)",
    weeks: [
      {
        week: "Week 1 (June 28 - July 4)",
        chapters: [
          { id: 1, name: "Basic Mathematics (Jun 28 - Jun 29)", nextPYQ: "2024-07-15" },
          { id: 2, name: "Some Basic Concepts of Chemistry (Jun 30 - Jul 1)", nextPYQ: "2024-07-16" },
          { id: 3, name: "Structure of Atom (Jul 1 - Jul 2)", nextPYQ: "2024-07-17" },
          { id: 4, name: "Chemical Bonding (Jul 2 - Jul 3)", nextPYQ: "2024-07-18" },
          { id: 5, name: "Solutions (Jul 3 - Jul 4)", nextPYQ: "2024-07-19" }
        ]
      },
      {
        week: "Week 2 (July 5 - July 11)",
        chapters: [
          { id: 6, name: "Motion in a Straight Line (Jul 4 - Jul 5)", nextPYQ: "2024-07-20" },
          { id: 7, name: "Motion in a Plane (Jul 5 - Jul 6)", nextPYQ: "2024-07-21" },
          { id: 8, name: "Laws of Motion (Jul 6 - Jul 7)", nextPYQ: "2024-07-22" },
          { id: 9, name: "Electrostatics: Charges & Fields (Jul 7 - Jul 9)", nextPYQ: "2024-07-23" },
          { id: 10, name: "Electrostatic Potential & Capacitance (Jul 9 - Jul 11)", nextPYQ: "2024-07-24" }
        ]
      },
      {
        week: "Week 3 (July 12 - July 18)",
        chapters: [
          { id: 11, name: "Electrochemistry (Jul 11 - Jul 13)", nextPYQ: "2024-07-25" },
          { id: 12, name: "Redox Reactions (Jul 13 - Jul 15)", nextPYQ: "2024-07-26" },
          { id: 13, name: "Thermodynamics (Chemistry) (Jul 15 - Jul 17)", nextPYQ: "2024-07-27" },
          { id: 14, name: "Equilibrium (Jul 17 - Jul 19)", nextPYQ: "2024-07-28" }
        ]
      },
      {
        week: "Week 4 (July 19 - July 25)",
        chapters: [
          { id: 15, name: "Kinetic Theory of Gases (Jul 19 - Jul 21)", nextPYQ: "2024-07-29" },
          { id: 16, name: "Thermodynamics (Physics) (Jul 21 - Jul 23)", nextPYQ: "2024-07-30" },
          { id: 17, name: "Work, Energy, Power (Jul 23 - Jul 25)", nextPYQ: "2024-07-31" }
        ]
      },
      {
        week: "Week 5 (July 26 - August 1)",
        chapters: [
          { id: 18, name: "System of Particles & Rotation (Jul 25 - Jul 27)", nextPYQ: "2024-08-01" },
          { id: 19, name: "Gravitation (Jul 27 - Jul 29)", nextPYQ: "2024-08-02" },
          { id: 20, name: "States of Matter (Jul 29 - Jul 31)", nextPYQ: "2024-08-03" }
        ]
      },
      {
        week: "Week 6 (August 2 - August 8)",
        chapters: [
          { id: 21, name: "Hydrogen (Jul 31 - Aug 2)", nextPYQ: "2024-08-04" },
          { id: 22, name: "The s-Block Element (Aug 2 - Aug 4)", nextPYQ: "2024-08-05" },
          { id: 23, name: "The p-Block Element (Group 13, 14) (Aug 4 - Aug 6)", nextPYQ: "2024-08-06" },
          { id: 24, name: "Organic Chemistry – Basics (Aug 6 - Aug 8)", nextPYQ: "2024-08-07" }
        ]
      },
      {
        week: "Week 7 (August 9 - August 15)",
        chapters: [
          { id: 25, name: "Hydrocarbons (Aug 8 - Aug 10)", nextPYQ: "2024-08-08" },
          { id: 26, name: "Haloalkanes and Haloarenes (Aug 10 - Aug 12)", nextPYQ: "2024-08-09" },
          { id: 27, name: "Alcohols, Phenols and Ethers (Aug 12 - Aug 14)", nextPYQ: "2024-08-10" },
          { id: 28, name: "Aldehydes, Ketones and Carboxylic Acids (Aug 14 - Aug 16)", nextPYQ: "2024-08-11" }
        ]
      },
      {
        week: "Week 8 (August 16 - August 24)",
        chapters: [
          { id: 29, name: "Amines (Aug 16 - Aug 18)", nextPYQ: "2024-08-12" },
          { id: 30, name: "Biomolecules (Aug 18 - Aug 20)", nextPYQ: "2024-08-13" },
          { id: 31, name: "Polymers (Aug 20 - Aug 22)", nextPYQ: "2024-08-14" },
          { id: 32, name: "Chemistry in Everyday Life (Aug 22 - Aug 24)", nextPYQ: "2024-08-15" }
        ]
      }
    ]
  },
  {
    phase: "Phase 2: Advanced Learning and Revision (August 25 - October 5)",
    weeks: [
      {
        week: "Week 9 (August 25 - August 31)",
        chapters: [
          { id: 33, name: "Sets, Relations & Functions (Math) (Aug 24 - Aug 26)", nextPYQ: "2024-08-16" },
          { id: 34, name: "Trigonometry (Aug 26 - Aug 28)", nextPYQ: "2024-08-17" },
          { id: 35, name: "Matrices & Determinants (Aug 28 - Aug 30)", nextPYQ: "2024-08-18" },
          { id: 36, name: "Calculus – Limits & Derivatives (Aug 30 - Sep 1)", nextPYQ: "2024-08-19" }
        ]
      },
      {
        week: "Week 10 (September 1 - September 7)",
        chapters: [
          { id: 37, name: "Calculus – Integration & Differentiation (Sep 1 - Sep 3)", nextPYQ: "2024-08-20" },
          { id: 38, name: "Vectors & 3D Geometry (Sep 3 - Sep 5)", nextPYQ: "2024-08-21" },
          { id: 39, name: "Probability & Statistics (Sep 5 - Sep 7)", nextPYQ: "2024-08-22" }
        ]
      },
      {
        week: "Week 11 (September 8 - September 14)",
        chapters: [
          { id: 40, name: "Current Electricity (Sep 7 - Sep 9)", nextPYQ: "2024-08-23" },
          { id: 41, name: "Magnetic Effects of Current & Magnetism (Sep 9 - Sep 11)", nextPYQ: "2024-08-24" },
          { id: 42, name: "Electromagnetic Induction & AC (Sep 11 - Sep 13)", nextPYQ: "2024-08-25" },
          { id: 43, name: "Modern Physics (Atoms, Nuclei, Dual Nature) (Sep 13 - Sep 15)", nextPYQ: "2024-08-26" }
        ]
      },
      {
        week: "Week 12 (September 15 - September 21)",
        chapters: [
          { id: 44, name: "Revision of all topics covered so far.", nextPYQ: "2024-08-27" },
          { id: 45, name: "Focus on solving previous years' JEE Mains papers.", nextPYQ: "2024-08-28" }
        ]
      },
      {
        week: "Week 13 (September 22 - September 28)",
        chapters: [
          { id: 46, name: "Mock Tests and Practice Papers.", nextPYQ: "2024-08-29" },
          { id: 47, name: "Identify weak areas and revise accordingly.", nextPYQ: "2024-08-30" }
        ]
      },
      {
        week: "Week 14 (September 29 - October 5)",
        chapters: [
          { id: 48, name: "Final Revision.", nextPYQ: "2024-08-31" },
          { id: 49, name: "Focus on important formulas, concepts, and quick problem-solving techniques.", nextPYQ: "2024-09-01" }
        ]
      }
    ]
  }
];

// Load saved progress from localStorage
function loadProgress() {
  const saved = localStorage.getItem("studyProgress");
  return saved ? JSON.parse(saved) : {};
}

// Save progress to localStorage
function saveProgress(progress) {
  localStorage.setItem("studyProgress", JSON.stringify(progress));
}

// Render study plan with phases, weeks, chapters, checkboxes, and PYQ dates
function renderStudyPlan() {
  const container = document.getElementById("chapterList");
  container.innerHTML = "";
  const progress = loadProgress();

  studyPlanData.forEach(phase => {
    const phaseDiv = document.createElement("div");
    phaseDiv.className = "phase";

    const phaseTitle = document.createElement("h2");
    phaseTitle.textContent = phase.phase;
    phaseDiv.appendChild(phaseTitle);

    phase.weeks.forEach(week => {
      const weekDiv = document.createElement("div");
      weekDiv.className = "week";

      const weekTitle = document.createElement("h3");
      weekTitle.textContent = week.week;
      weekDiv.appendChild(weekTitle);

      week.chapters.forEach(chapter => {
        const chapterDiv = document.createElement("div");
        chapterDiv.className = "chapter";
        if (progress[chapter.id]) {
          chapterDiv.classList.add("completed");
        }

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "chapter-" + chapter.id;
        checkbox.checked = !!progress[chapter.id];
        checkbox.addEventListener("change", () => {
          progress[chapter.id] = checkbox.checked;
          saveProgress(progress);
          if (checkbox.checked) {
            chapterDiv.classList.add("completed");
          } else {
            chapterDiv.classList.remove("completed");
          }
        });

        const label = document.createElement("label");
        label.htmlFor = checkbox.id;
        label.textContent = chapter.name;

        const pyqLink = document.createElement("a");
        pyqLink.href = "https://www.google.com/search?q=" + encodeURIComponent(chapter.name + " JEE Mains previous year questions");
        pyqLink.target = "_blank";
        pyqLink.textContent = " [PYQ]";
        pyqLink.className = "pyq-date";

        chapterDiv.appendChild(checkbox);
        chapterDiv.appendChild(label);
        chapterDiv.appendChild(pyqLink);

        weekDiv.appendChild(chapterDiv);
      });

      phaseDiv.appendChild(weekDiv);
    });

    container.appendChild(phaseDiv);
  });
}

// Initial render
renderStudyPlan();
