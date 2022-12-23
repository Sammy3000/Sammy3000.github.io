const projectContainer = document.querySelector(".work");

let projects = [
  {
    featuredImage: "./images/Snapshoot_zero.png",
    name: "Tonic",
    information: ["Canopy", "Back End Dev", "2015"],
    description:
      " A daily selection of privately personalized reads; no accounts or sign-ups required.",
    technologies: ["HTML", "CSS", "javascript"],
    demo: "https://sammy3000.github.io/",
    source: "https://github.com/Sammy3000/Sammy3000.github.io",
  },
  {
    featuredImage: "./images/Snapshoot_one.png",
    name: "Tonic",
    information: ["Canopy", "Back End Dev", "2015"],
    description:
      " A daily selection of privately personalized reads; no accounts or sign-ups required.",
    technologies: ["HTML", "CSS", "javascript"],
    demo: "https://sammy3000.github.io/",
    source: "https://github.com/Sammy3000/Sammy3000.github.io",
  },
  {
    featuredImage: "./images/Snapshoot_two.png",
    name: "Tonic",
    information: ["Canopy", "Back End Dev", "2015"],
    description:
      " A daily selection of privately personalized reads; no accounts or sign-ups required.",
    technologies: ["HTML", "CSS", "javascript"],
    demo: "https://sammy3000.github.io/",
    source: "https://github.com/Sammy3000/Sammy3000.github.io",
  },
  {
    featuredImage: "./images/Snapshoot_three.png",
    name: "Tonic",
    information: ["Canopy", "Back End Dev", "2015"],
    description:
      " A daily selection of privately personalized reads; no accounts or sign-ups required.",
    technologies: ["HTML", "CSS", "javascript"],
    demo: "https://sammy3000.github.io/",
    source: "https://github.com/Sammy3000/Sammy3000.github.io",
  },
];
{
  /* <div class="describe tonic-one">
<img
  src="images/Snapshoot Portfolio.png"
  alt="first-tonic-image"
  class="work-img"
/>
<article>
  <h1 class="head-name">Tonic</h1>
  <ul class="tonic-ul">
    <li class="canopy">CANOPY</li>
    <li>Back End Dev</li>
    <li>2015</li>
  </ul>
  <p class="tonic-p">
    A daily selection of privately personalized reads; no accounts or
    sign-ups required.
  </p>
  <ul class="lang">
    <li class="lang-li">html</li>
    <li class="lang-li">css</li>
    <li class="lang-li">javascript</li>
  </ul>
  <button class="work-btn">See Project</button>
</article>
</div> */
}

projects.forEach((project, index) => {
  let tech;
  project.technologies.forEach((techno) => {
    tech += `
    <li class="lang-li">
     ${techno}
    </li>`;
  });

  let info;
  project.information.forEach((info_item) => {
    info += `<li class="canopy">
     ${info_item}
    </li>`;
  });

  const each_project = `
  <div class="describe tonic-one">
    <img
      src=${project.featuredImage}
      alt="first-tonic-image"
      class="work-img"
    />
    <article>
      <h1 class="head-name">${project.name}</h1>
      <ul class="tonic-ul">${info}</ul>
      <p class="tonic-p">
       ${project.description}
      </p>
      <ul class="lang">${tech}</ul>
      <button class="work-btn" id=${index}>See Project</button>
    </article>  
  </div>
  `;
  projectContainer.innerHTML += each_project;
});

//Desktop Render

{
  /* <div class="describe desktop-post-one">
        <article>
          <h1 class="head-name">Multi Post Stories</h1>
          <ul class="tonic-ul">
            <li class="canopy">Facebook</li>
            <li>FullStack Dev</li>
            <li>2015</li>
          </ul>
          <p class="tonic-p">
            Experimental content creation feature that allows users to add to an
            existing story over the course of a day without spamming their
            friends.
          </p>
          <ul class="lang">
            <li class="lang-li">html</li>
            <li class="lang-li">Ruby on rails</li>
            <li class="lang-li">css</li>
            <li class="lang-li">javascript</li>
          </ul>
          <button class="work-btn">See Project</button>
        </article>
        <img
          src="images/Snapshoot Portfolio (5).png"
          alt="multipost"
          class="work-img"
        />
      </div> */
}

let desktopProjects = [
  {
    name: "Multi Post Stories",
    technologies: ["Facebook", "Fullstack Dev", "2015"],
    information:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    languages: ["html", "Ruby on rails", "css", "javascript"],
    desktopImages: "./images/Snapshoot_five.png",
  },
  {
    name: "Multi Post Stories",
    technologies: ["Facebook", "Fullstack Dev", "2015"],
    information:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    languages: ["html", "Ruby on rails", "css", "javascript"],
    desktopImages: "./images/Snapshoot_five.png",
  },
  {
    name: "Multi Post Stories",
    technologies: ["Facebook", "Fullstack Dev", "2015"],
    information:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    languages: ["html", "Ruby on rails", "css", "javascript"],
    desktopImages: "./images/Snapshoot_five.png",
  },
  {
    name: "Multi Post Stories",
    technologies: ["Facebook", "Fullstack Dev", "2015"],
    information:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    languages: ["html", "Ruby on rails", "css", "javascript"],
    desktopImages: "./images/Snapshoot_five.png",
  },
];
//here
desktopProjects.forEach((desktopProject, desktopIndex) => {
  let technology;
  desktopProject.technologies.forEach((tech_item) => {
    technology += ` <li class="canopy">${tech_item}</li>`;
  });
  let language;
  desktopProject.languages.forEach((lang) => {
    language += `<li class="lang-li">${lang}</li>`;
  });
  //here
  let each_desktopProject = `
  <div class="describe desktop-post-one">
  <article>
    <h1 class="head-name">${desktopProject.name}</h1>
    <ul class="tonic-ul">
    ${technology}
    </ul>
    <p class="tonic-p">
    ${desktopProject.information}
    </p>
    <ul class="lang">
    ${language}
    </ul>
    <button class="work-btn" id=${desktopIndex}>See Project</button>
  </article>
  <img
    src=${desktopProject.desktopImages}
    alt="multipost"
    class="work-img"
  />
</div>`;
  projectContainer.innerHTML += each_desktopProject;
});

{
  /* <div class="overlay">
<div class="modal-content">
  <div class="modal-header">
    <h1 class="modal-name">Tonic</h1>
    <p class="close-modal">&times;</p>
  </div>
  <div class="modal-information">
    <h2 class="modal-info">Canopy</h2>
    <h2 class="modal-info">Back end Dev</h2>
    <h2 class="modal-info">2015</h2>
  </div>
  <div class="modal-image">
    <img
      src="images/Snapshoot_mobile.png"
      alt="modal-image"
      width="250"
      height="200"
      class="modal-image-one"
    />
    <img
      src="images/Snapshoot_desktop.png"
      alt="modal-image"
      width="650"
      height="300"
      class="modal-image-two"
    />
  </div>
  <div class="modal-paragraph">
    <p class="paragraph">
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of
      type and scrambled it to make a type specimen book. It has
      survived not only five centuries, but also the leap into
      electronic typesetting, remaining essent
    </p>
    <p class="desktop-p">
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of
      type and scrambled it 1960s with the releaLorem Ipsum is simply
      dummy text of the printing and typesetting industry. Lorem Ipsum
      has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it
      1960s with the releorem Ipsum is simply dummy text of the printing
      and typesetting industry. Lorem Ipsum han printer took a galley of
      type and scrambled it 1960s with the releawn printer took a galley
      of type and scrambled it 1960s with the releaLorem Ipsum is simply
      dummy text of the printing and typesetting industry. Lorem Ipsum
      has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it
      1960s with the relea
    </p>
  </div>
  <div class="modal-technologies">
    <p class="tech">Html</p>
    <p class="tech">CSS</p>
    <p class="tech">Javascript</p>
  </div>
  <div class="modal-button">
    <a href="#" class="modal-btn">See Live</a>
    <a href="#" class="modal-btn">See Source</a>
  </div>
</div>
</div> */
}
let projectButtons = document.querySelectorAll(".work-btn");
let closeModalButton = document.querySelector(".close-modal");
let modalContainer = document.querySelector(".modal-window");
let mainModalContainer = document.querySelector(".main-modal-window");
//close window button
closeModalButton.addEventListener("click", () => {
  mainModalContainer.style.display = "none";
});

const modalContent = (project) => {
  const popup = `<div class="overlay">
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-name">Tonic</h1>
      <p class="close-modal">&times;</p>
    </div>
    <div class="modal-information">
      <h2 class="modal-info">Canopy</h2>
      <h2 class="modal-info">Back end Dev</h2>
      <h2 class="modal-info">2015</h2>
    </div>
    <div class="modal-image">
      <img
        src="images/Snapshoot_mobile.png"
        alt="modal-image"
        width="250"
        height="200"
        class="modal-image-one"
      />
      <img
        src="images/Snapshoot_desktop.png"
        alt="modal-image"
        width="650"
        height="300"
        class="modal-image-two"
      />
    </div>
    <div class="modal-paragraph">
      <p class="paragraph">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of
        type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into
        electronic typesetting, remaining essent
      </p>
      <p class="desktop-p">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of
        type and scrambled it 1960s with the releaLorem Ipsum is simply
        dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it
        1960s with the releorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum han printer took a galley of
        type and scrambled it 1960s with the releawn printer took a galley
        of type and scrambled it 1960s with the releaLorem Ipsum is simply
        dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it
        1960s with the relea
      </p>
    </div>
    <div class="modal-technologies">
      <p class="tech">Html</p>
      <p class="tech">CSS</p>
      <p class="tech">Javascript</p>
    </div>
    <div class="modal-button">
      <a href="#" class="modal-btn">${project.demo}</a>
      <a href="#" class="modal-btn">${project.source}</a>
    </div>
  </div>
  </div> `;
  modalContainer.innerHTML = popup;
  mainModalContainer.style.display = "block";
};
projectButtons.forEach((projectBtn) => {
  projectBtn.addEventListener("click", (e) => {
    const getBtnId = e.target.getAttribute("id");
    const projectObj = projects[getBtnId];
    modalContent(projectObj);
  });
});
