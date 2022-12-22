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

desktopProjects.forEach((desktopProject, desktopIndex) => {
  let technology;
  desktopProject.technologies.forEach((tech_item) => {
    technology += ` <li class="canopy">${tech_item}</li>`;
  });
  let language;
  desktopProject.languages.forEach((lang) => {
    language += `<li class="lang-li">${lang}</li>`;
  });
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
