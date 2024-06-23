import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
Hello, I'm Ayush, a passionate Java Full Stack developer with a keen eye for Spring boot, Hibernate , core java, Mysql, Servelt, JSP, React js
          Stack . With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education
        </h1>
        <span>
          [B.Tech Computer science Engineering], [2020-2024] ,
         
         
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills 
        </h1>
        <span>
        <ul>
            <li>
                 Core Java ,OOPS, Collections , JDBC 
            </li>

             <li>
                Spring Boot & Spring
            </li>


             <li>
                 Hibernate & MySql
            </li>
            <li>
                Servlet ,JSP
            </li>
            <li>
                 HTML ,CSS, JavaScript,Tawilind CSS, Bootstrap,React Js
            </li>
            <li>
                git & github  , Postman
            </li>
        </ul>
      
        </span>
        <br />
        <br />
       
        <h1 className="text-green-600 font-semibold text-xl">
          Projects
        </h1>
        <span>
          <ul>
            <li>
                ClassRoom Faculty Management
                <p className="text-gray-600"><span className="font-bold"> Project Summary</span> 
<br></br>
The Attendance and Faculty Management System is a web-based application BUilding RestApi, designed to streamline attendance tracking and faculty management in educational institutions. Its objectives include simplifying attendance recording, providing efficient course scheduling, and enhancing communication between faculty, classroom, courses,FacultyAttendance,ClassSchedule and students. The system features user authentication, course scheduling, attendance recording, and faculty profile management. It consists of three layers: Controller (handles HTTP requests and responses)

Controller (handles HTTP requests and responses), Service (implements business logic and coordinates actions), DAO (manages database interactions).

USE DataBase Use :- Mysql || Request Hit:- Postman</p>
<br />
<a href="https://github.com/Ayush7828/ClassRoom-FacultyManagement-Java-Project" className="font-bold text-blue-700">Github Link</a>


            </li>
            
<hr />
            <br />
             <li>
               Cricekt Former
                <p className="text-gray-600"><span className="font-bold"> Project Summary</span> 
<br></br>
Developed a comprehensive Cricketformer application using Spring framework. The project leveraged a layered architecture comprising Controller, Service, and DAO layers along with JPA Repository for seamless data management. Implemented data scraping techniques to extract real-time cricket data from various websites. ensuring efficient interaction with the database. Utilized Spring Boot for rapid development, Hibernate for ORM, and integrated RESTful APIs to facilitate smooth data exchange. The project demonstrated proficiency in backend development, data handling, and web scraping within the Spring ecosystem.

Developed and maintained Java-based applications using Spring Boot. Implemented and configured JPA repositories for data persistence. Ensured efficient dependency injection and service configuration. Resolved bean initialization issues and optimized component scanning. Collaborated with team members to troubleshoot and resolve application errors

Key Technologies: Spring Boot, Hibernate, JPA Repository, RESTful APIs, Web Scraping, Spring MVC, MySQL</p>
<br />
<a href="https://github.com/Ayush7828/Cricket-Live-Score-Project" className="font-bold text-blue-700">Github Link</a>


            </li>
            <hr />
            <br />
             <li>
              Blog Application
                <p className="text-gray-600"><span className="font-bold"> Project Summary</span> 
<br></br>
Designed and developed the Blog layout using Servelt,Hibernate and Jsp,various devices.
Tools & technology:
Servlet, JSp, Hibernate,MYSQl Core Java</p>
<br />
<a href="https://github.com/Ayush7828/Blog-Application  " className="font-bold text-blue-700">Github Link</a>


            </li>
          </ul>
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Certification
        </h1>
        <p>
         Java Full Stack [The kiran Academy Pune] [JAN-2020 - July-2024]
        </p>
      </div>
    </div>
  );
}

export default About;
