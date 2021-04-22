import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private skills : Array<object>;
  private experience : Array<object>;
  constructor() { 
    this.skills = [
      {
        name : "Programming Languages",
        icono: environment.url + "/assets/img/algoritmo.png",
        img: environment.url+ "/assets/img/programming.png",
        content: "Knowledge of Java, C #, JavaScript (Node, React, React Native with Expo, Express, Angular, JQuery, Promises, Ajax), HTML, CSS, Sass (BEM)"
      },
      {
        name : "Data Bases",
        icono: environment.url+ "/assets/img/db-icon.png",
        img: environment.url+ "/assets/img/db-img.png",
        content: "Knowledge of SQL Server, PostgreSQL, Oracle (PL / SQL), MongoDB databases, Business Intelligence (Pentaho)."
      },
      {
        name : "Business Inteligence",
        icono: environment.url+"/assets/img/bi-icon.png",
        img: environment.url+ "/assets/img/bi-img.png",
        content: "knowledge of business intelligence (Pentaho)."
      },
      {
        name : "Repositories",
        icono: environment.url+ "/assets/img/repo-icon.png",
        img: environment.url+ "/assets/img/repo-img.png",
        content: "Knowledge of Git, Github, Bitbucket. Link: https://github.com/HaroldMaster"
      },
      {
        name : "Courses and Other Skills",
        icono: environment.url+"/assets/img/other-icon.png",
        img: environment.url+"/assets/img/other-img.png",
        content: "I have had the oportunity to study udemy courses as Advanced Sass and Css, Typescript, Angular, JQuery, Javascript, React. Also because of my work experience I have managed to obtain knowledge of computer manteinance, Wordpress, SEO, Digital Marketing, Networks, Linux, BPMN, etc."
      }
    ];
    this.experience = [
      {
        enterprise: "Grupo TVCable",
        img: environment.url+ "/assets/img/tvcable.jfif",
        content: "Intern in the company Grupo TVCable in the systems area, in the scrum of emerging projects.  In this job, I carried out quality control activities and support in the development of new company plans handling PL / SQL."
      },
      {
        enterprise: "Imprenta Mariscal",
        img: environment.url+ "/assets/img/imprenta.png",
        content: "Intern at the company Imprenta Mariscal in the area of systems and databases. I carried out activities such as network management, computer and printer maintenance, user support, backup management, database management, among others."
      },
      {
        enterprise: "PACO",
        img: environment.url+"/assets/img/paco.png",
        content: "Developer analyst at PACO comercial. I managed the billing system developed in Java with PostgreSQL database, also handling stored procedures in the SQL Server database."
      },
      {
        enterprise: "CLEARMINDS",
        img: environment.url+"/assets/img/clearminds.jfif",
        content: "Software Developer at Clearminds. I worked in banking software consulting services where I used tools such as Angular, Javascript, Java, Sql Server as well as the company's own tools."
      }
    ]
  }
}