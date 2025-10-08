/*
  Name: Lim Jie Ching
  Email: jc.lim.2024
*/

function loadMainSkills() {
  /*
    <div class="main-skill-card">
        <div class="main-skill-header">
            <h2>Skill Name</h2>
        </div>
    </div>
    */
  const mainSkillsContainer = document.getElementById("main-skills-container");
  /* Part A: Add code here to load and display main skills */
  while (mainSkillsContainer.lastChild) mainSkillsContainer.lastChild.remove();
  for (skill of learningPath) {
    console.log(skill.name);
    let card = document.createElement("div");
    card.className = "main-skill-card";
    mainSkillsContainer.appendChild(card);
    let header = document.createElement("div");
    header.className = "main-skill-header";
    card.appendChild(header);
    let h2 = document.createElement("h2");
    h2.innerText = skill.name;
    header.appendChild(h2);
    header.appendChild(createToggleButton(skill.id));
    let progress = updateMainSkillProgress(skill.id);
    let progressContainer = document.createElement("div");
    progressContainer.className = "main-skill-progress-bar-container";
    let progressBar = document.createElement("div");
    progressBar.className = "main-skill-progress-bar";
    progressBar.style.width = `${progress}%`;
    progressContainer.appendChild(progressBar)
    let p = document.createElement('p');
    p.innerText = `Progress: ${progress}%`
    card.appendChild(progressBar);
    card.appendChild(p)
  }
}

function createToggleButton(mainSkillId) {
  /*
    <button class="toggle-button">+</button>
    */
  /* Part B: Add code here to create a toggle button for sub-skills */
  let button = document.createElement("button");
  button.id = mainSkillId;
  button.className = "toggle-button";
  button.innerText = "+";

  button.addEventListener("click", function () {
    if ((button.innerText = "+")) {
      button.onclick = toggleSubSkills(false, mainSkillId);
      button.className = "toggle-button";
      button.innerText = "-";
    } else if ((button.innerText = "-")) {
      button.onclick = toggleSubSkills(true, mainSkillId);
      button.className = "toggle-button";
    }
  });
  return button;
}

function toggleSubSkills(evt, mainSkillId) {
  /* 
    <ul class="sub-skills-list">
        <li class="sub-skill-item">
            <p class="sub-skill-name">Sub-skill 1</p>
        </li> 
    </ul> 
    */
  /* Part C: Add code here to toggle the display of sub-skills */
}

function updateMainSkillProgress(mainSkillId) {
  /*
    <div class="main-skill-progress-bar-container">
        <div class="main-skill-progress-bar" style="width: 50%;"></div>
    </div>
	<p>Progress: 50%</p>
    */
  /* Part D: Add code here to display progress bar */
    var progress = 0;
    var subskillNo = 0;
    var avgProgress = 0;
  for (let skill of learningPath) {
    if (skill.id == mainSkillId) {
        for (let subskill of skill.subSkills){
            progress = progress + subskill.progress
            subskillNo ++
            // console.log(subskill.progress)
        }
    }
  }
//   console.log(progress)
  avgProgress = Math.round(progress/subskillNo);
  return avgProgress;
}
