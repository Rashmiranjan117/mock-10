## Mock-10

<a href="https://sore-bee-lab-coat.cyclic.app/">Backend deployed Link</a>

<a href="https://drive.google.com/file/d/1U30lS4zqm8J_0dKFYbFUeAAwRiTilOow/view?usp=sharing">Output Presentation</a>

### Folder structure 
- config : containing db.js
- model : containing various data models and schema
- routes : contains routes for the application
- index.js : main structure of the application, wherething is being initgrated and running

### How to run locally?
- Clone the repo with this  link ```https://github.com/Rashmiranjan117/mock-10.git``` . <br/> In command line type ``` git clone https://github.com/Rashmiranjan117/mock-10.git ``` .
- Then run ``` npm i ``` or ``` npm install ``` . This will take a few minutes since the required dependancies will take a bit of time to install.
- Then ``` npm run server ``` . 

### Routes
- ```/api/user ``` : Contains links for ```/register``` where user can register and ```/login``` where user can login.

- ```/api/flights ```  :  Contains links to ```/get``` , ```/post```, ```/patch``` and ```/delete``` . <br/> On endpoint ```/api/flights ``` we get the data for all the available flights.  <br/> On endpoint ```/api/flights/:id ``` we all get the data for an indivisual flight. <br/> On endpoint ```/api/flights/:id ``` while also changing the type of request , we can achive  ```/post```, ```/patch``` and ```/delete```.    
