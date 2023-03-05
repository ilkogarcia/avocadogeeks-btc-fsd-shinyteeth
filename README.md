# Welcome to my backend app "Shinny Teeth"

<details>
  <summary>Contenido 📝</summary>
  <ol>
    <li><a href="#aim">Aim</a></li>
    <li><a href="#about-the-project">About the project</a></li>
    <li><a href="#deploy">Deploy</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#diagram-db">Diagram DB</a></li>
    <li><a href="#local-installation">Local Installation</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#next-implementations">Next implementations</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#developers">Developers</a></li>
  </ol>
</details>

## Aim
In this project we build a functional API for a dental clinic. The API is connected to a relational database.

## About the project.
This API was created to manage a dental clinic, where patients and professionals could register as users. Among the objectives was that patients could access to see the information of the dental clinic treatments, and be able to make an appointment. Professionals can also access to view the patients they must attend. We wanted to ensure that user information was protected, so the necessary middleware was implemented to meet this goal.   

## Deploy 
<div align="center">
    <a href="https://www.google.com"><strong>Url a producción </strong></a>
</div>

## Stack
Technologies:
<div align="center">
<a href="https://www.mysql.com/">
    <img src= "https://img.shields.io/badge/mysql-3E6E93?style=for-the-badge&logo=mysql&logoColor=white"/>
</a>
<a href="https://www.mysql.com/"> 
    <img src= ""/> 
</a>
<a href="https://www.expressjs.com/">
    <img src= "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
</a>
<a href="https://nodejs.org/es/">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white"/>
</a>
<a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src= "https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black"/>
</a>
 </div>


## Diagram DB
!['imagen-db'](./images/sampleDb.png)

## local installation
1. We need to have NodeJS installed
1. Clone the repository
2. we execute the ` $ npm install ` command to install the dependencies
3. We connect our repository with the database 
4. We execute the migrations ` $ npx sequelize-cli db:migrate ` 
5. We run the seeders ` $ npx sequelize-cli db:seed:all ` 
6. We make sure we have the correct port, and we proceed to lift it ` $ npm run dev `


## Endpoints
To visualize the information of the endpoints, we will use the postman tool https://www.postman.com/
Some of the endpoints can only be viewed if you have an administrator role
<details>
<summary>Endpoints</summary>

- AUTH
    - WELCOME
    
            GET http://localhost:3000/api/

    - COMPLETE THE PROFILE
    
            PUT http://localhost:3000/api/updateprofile

    - RESET PASSWORD
    
            PUT http://localhost:3000/api/resetpass
    
    - REGISTER

            POST http://localhost:3000/api/signup
        body:
        ``` js
            {
                "email": "ejemplo.ejemplo@gmail.com",
                "password": "abc123"
            }
        ```

    - LOGIN

            POST http://localhost:3000/api/signin  
        body:
        ``` js
            {
                "email": "ejemplo.ejemplo@gmail.com",
                "password": "abc123"
            }
        ```
-USERS
    
          POST http://localhost:3000/api/users/
        body:
        ``` js
            {
                "role_id": 2,
                "patient_id": 6,
                "professional_id": null,
                "first_name": "Ilko",
                "middle_name": "García",
                "last_name": "Perez",
                "mobile_phone": "607555333",
                "email": "nombre@hotmail.com",
                "password_hash": "X3qUgMAJJk72akja62JY"
            }
        ```
        
            GET http://localhost:3000/api/users/31
            
            PUT http://localhost:3000/api/users/18
         body:
        ``` js
            {
                "role_id": 2,
                "patient_id": 6,
                "professional_id": null,
                "first_name": "Ilko",
                "middle_name": "García",
                "last_name": "",
                "mobile_phone": "607555333",
                "email": "kiko@hotmail.com",
                "password_hash": "XqUgMAJJk7Y"
            }
        ```
        
            DELETE http://localhost:3000/api/users/20
            
            GET http://localhost:3000/api/users/ 
         
- DENTAL SPECIALTIES

            POST http://localhost:3000/api/dentalspecialties
         body:
        ``` js
            {
                "name": "Prostodoncia",
                "description": "La disciplina que se encarga de reemplazar o restaurar las piezas dentales perdidas es la prostodoncia. Para ello el profesional            
                 utiliza coronas, puentes, implantes y prótesis fijas o removibles."
            }
        ```
        
            PUT http://localhost:3000/api/dentalspecialties/14
         body:
        ``` js
            {
                "name": "ProstodonciaSSSSS",
                "description": "La disciplina que se encarga de reemplazar o restaurar las piezas dentales perdidas es la prostodoncia. Para ello el profesional            
                 utiliza coronas, puentes, implantes y prótesis fijas o removibles."
            }
        ```
        
            GET http://localhost:3000/api/dentalspecialties/10
            
            DELETE http://localhost:3000/api/dentalspecialties/15
            

            GET http://localhost:3000/api/dentalspecialties
            
- MAKE AN APPOINTMENT

            POST http://localhost:3000/api/patient/appointments/
         body:
        ``` js
            {
                "professional_id": 7,
                "treatment_id": 14,
                "appointment_on": "2023-04-10",
                "start_at": "12:00:00",
                "end_at": "12:45:00"
            }
        ```
        
            POST http://localhost:3000/api/professional/appointments/
         body:
        ``` js
            {
                "patient_id": 3,
                "professional_id": 7,
                "treatment_id": 14,
                "appointment_on": "2023-04-10",
                "start_at": "12:00:00",
                "end_at": "12:45:00"
            }
        ```
        
            PUT http://localhost:3000/api/patient/appointments/12
         body:
        ``` js
            {
                "professional_id": 3,
                "treatment_id": 15,
                "appointment_on": "2023-04-22",
                "start_at": "17:30:00",
                "end_at": "18:45:00"
            }
        ```
        
            GET http://localhost:3000/api/patient/appointments/12
            
            GET http://localhost:3000/api/professional/appointments/12
            
            DELETE http://localhost:3000/api/patient/appointments/12

    - ...
</details>

## Next implementations
[ ] Assign schedules to Professionals.  
[ ] Assign appointments depending on availability.  
[ ] Ensure that appointments are not booked with the same hours and the same professional.

## License 
This project is licensed under "MIT License"

## Developers:

- *Ilko García*  
<a href="https://github.com/ilkogarcia" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a> 

- **Mario Aguilar**  
<a href="https://github.com/MarioAAT" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=red" target="_blank"></a>

