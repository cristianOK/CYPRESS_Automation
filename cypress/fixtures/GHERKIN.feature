Feature: Validar el correcto logeo de los usuarios ya registrados.

Background: El usuario debe estar registrado.
  Given que el usuario de encuentra en la home pague del sitio.
Scenario Outline: US 1 | TS 1 | TC 1 | CHECK EL CORRECTO LOGEO DEL USUARIO ya registrado.
   
   When el usuario escribe su '<username>' y su '<password>' correctamente.
   And  hace click en el boton SIGN IN.
   Then el usuario debe poder iniciar session correctamente.
   Examples:
       | username | password |
       | pablo222@gmail.com  | losloros222  | 

Scenario Outline: US 1 | TS 2 | TC 2 | CHECK que NO SE PUEDA INICIAR SESSION CON DATOS INCORRECTOS.
   
   When el usuario escribe un '<username>' y un '<password>' invalidos
   And  hace click en el boton SIGN IN.-
   Then el usuario NO DEBE PODER INICIAR SESSION.
   And aparece un mensaje de "Your email or password is incorrect!"
   Examples:
       | username | password |
       | pablo222@gmail.com  | nadamesmo  | 
