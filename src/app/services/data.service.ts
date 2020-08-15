import { Injectable } from '@angular/core';

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
        icono: "../../assets/img/algoritmo.png",
        img: "../../assets/img/programming.jpg",
        content: "Knowledge of Java, C #, JavaScript (Node, React, React Native with Expo, Express, Angular, JQuery, Promises, Ajax), HTML, CSS, Sass (BEM)"
      },
      {
        name : "Data Bases",
        icono: "../../assets/img/db-icon.png",
        img: "../../assets/img/db-img.png",
        content: "Knowledge of SQL Server, PostgreSQL, Oracle (PL / SQL), MongoDB databases."
      },
      {
        name : "Business Inteligence",
        icono: "../../assets/img/bi-icon.png",
        img: "../../assets/img/bi-img.png",
        content: "knowledge of business intelligence (Pentaho)."
      },
      {
        name : "Repositories",
        icono: "../../assets/img/repo-icon.png",
        img: "../../assets/img/repo-img.png",
        content: "Knowledge of Git, Github, Bitbucket. Link: https://github.com/HaroldMaster"
      },
      {
        name : "Others",
        icono: "../../assets/img/other-icon.png",
        img: "../../assets/img/other-img.png",
        content: "Knowledge of computer and printer maintenance - Knowledge of computer architecture - Knowledge in networks (Certificate of the CEC EPN of CCNA module 1) - Knowledge of Windows, Windows Server and Linux operating systems (Ubuntu, CentOs) - Knowledge in BPMN - Knowledge of Software Quality"
      }
    ];
    this.experience = [
      {
        enterprise: "Grupo TVCable",
        img: "../../assets/img/tvcable.png",
        content: "Intern in the company Grupo TVCable in the systems area, in the scrum of emerging projects. The internship lasted from September 1, 2016 to February 2017. In this job, I carried out quality control activities and support in the development of new company plans handling PL / SQL."
      },
      {
        enterprise: "Imprenta Mariscal",
        img: "../../assets/img/imprenta.png",
        content: "Intern at the company Imprenta Mariscal in the area of systems and databases. The internship lasted 4 months from August 2017 to November 2017. During this period, I carried out activities such as network management, computer and printer maintenance, user support, backup management, database management, among others."
      },
      {
        enterprise: "PACO",
        img: "../../assets/img/paco.png",
        content: "Developer analyst at PACO comercial. The contract lasted one month in June 2019. In this period I managed the billing system developed in Java with PostgreSQL database, also handling stored procedures in the SQL Server database."
      }
    ]
  }
}