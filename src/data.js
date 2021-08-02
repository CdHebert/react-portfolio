
import {
  profilePic,
  budgeter,
  benefactor,
  notes,
  crypto,
  heroBlog,
  workDay,
  roles
} from "./assets/images/portfolio"


export const aboutMe = {

  name: "Cody Hebert",
  occupation: "(Your Occupation Here)",
  description: "Here will be your description. Use this to describe what you do or whatever you feel best describes yourself to a potential employer",
  image: profilePic,
  bio: `I am currently a student enrolled in the University of Arizona Coding Bootcamp for full stack development. I am so glad I had this opportunity because it helped me discover just how much I love coding. I think it's amazing to be able to create something from the ground up and learn new things everyday as you work. It gives me such an incredible feeling of accomplishment to create something new, and being able to see people actually enjoy using it. I've loved working in groups because it really helps to get different perspectives and feedback.
    With my skill set I could easily work as a front-end, back-end or even a full stack developer as they are all incredibly interesting to me. I know I will always find something to enjoy when I am working with coding.`,
  github: "https://github.com/CdHebert",
  email: "chebert222@gmail.com",

  website: "http://www.timbakerdev.com",
  resume: "https://www.canva.com/design/DAEkTNPl9sw/Kyc9njbwB7JmmnJUaidORA/view?utm_content=DAEkTNPl9sw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",

}


export const socialMedia = {
  social: [
    {
      name: "facebook",
      url: "https://www.facebook.com/profile.php?id=100070969386064",
      className: "fa fa-facebook"
    },
    {
      name: "twitter",
      url: "https://twitter.com/CodyHebert17",
      className: "fa fa-twitter"
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/cody-hebert-52186276/",
      className: "fa fa-linkedin"
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/bercreations/",
      className: "fa fa-instagram"
    },
    {
      name: "github",
      url: "https://github.com/CdHebert",
      className: "fa fa-github"
    }
  ]
}


export const portfolio = {
  projects: [
    {
      title: "Benefactor - A Gift List application where you can make a list for every occation",
      category: "Full Stack application that Uses HTML, JavaScript, CSS, Sass, Fontawesome, mySQL, Express and Handlebars",
      image: benefactor,
      url: "https://floating-gorge-84080.herokuapp.com/",
      git: "https://github.com/CdHebert/benefactor"
    },
    {
      title: "Note Taker - A app where you can make notes edit what you said and delete those notes",
      category: "Using Restful api's to build CRUD routes that handle all the notes",
      image: notes,
      url: "https://floating-sands-82311.herokuapp.com/",
      git: "https://github.com/CdHebert/note-taker"
    },
    {
      title: "CryptoKnight - Is an app that will keep track of crypto currencies",
      category: "Uses HTML, JavaScript and CSS",
      image: crypto,
      url: "https://noreaster24.github.io/team-project-1/",
      git: "https://github.com/noreaster24/team-project-1"
    },
    {
      title: "Budget Tracker - is a Progressive Web App where you can input your own budget info and it will return your budget info in a graph",
      category: "A full stack app that uses A service Worker for offline work",
      image: budgeter,
      url: "https://floating-brushlands-08154.herokuapp.com/",
      git: "https://github.com/CdHebert/transaction-budgeter"
    },
    {
      title: "Hero Blog - Is a blog based off of the anime One Punch Man",
      category: "Full Stack application that Uses HTML, JavaScript, CSS, Sass, Fontawesome, mySQL, Express and Handlebars",
      image: heroBlog,
      url: "https://polar-dusk-68607.herokuapp.com/",
      git: "https://github.com/CdHebert/hero-blog"
    },
    {
      title: "Role Call - Is a employee tracker app that tracks the Heroes employed by the Heroes Association",
      category: "Back End project using Node.js, npm packages, inquirer, mySQL2, chalk and console.table  ",
      image: roles,
      url: "https://github.com/CdHebert/roll-call",
      git: "https://github.com/CdHebert/roll-call"
    },
    {
      title: "Work Day Scheduler - an app where you can schedule out your 9 to 5 work day",
      category: "Uses HTML, CSS and JavaScript",
      image: workDay,
      url: "https://cdhebert.github.io/work-scheduler/",
      git: "https://github.com/CdHebert/work-scheduler"
    }
  ]
}