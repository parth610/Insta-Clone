# Flixagram
Welcome to [Flixagram](https://flixtagram.herokuapp.com/) an Instgram clone made by [Jacob Chamberlain](https://github.com/JacobDChamberlain), [Parth Bhakta](https://github.com/parth610), [Mason Taylor](https://github.com/masontaylor7), [Gabriel Sitorus](https://github.com/GabeS97?tab=repositories)

# Index
[Database Schema](https://github.com/parth610/Insta-Clone/wiki/Database-Schema) | [Frontend routes](https://github.com/parth610/Insta-Clone/wiki/Frontend-Routes) | [MVP Features](https://github.com/parth610/Insta-Clone/wiki/MVP-Features) | [User Stories](https://github.com/parth610/Insta-Clone/wiki/User-Stories)

# Technologies Used
![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![JSON](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![ReactRouter](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

# Getting Started

Visit our app at [Flixagram](https://flixtagram.herokuapp.com/). To install and run `Flixagram` on your local machine, please go ahead an follow the steps below:

- Clone the repository, by copying and pasting the command below
```
HTPS: git clone https://github.com/parth610/Insta-Clone.git

    or

SSH: git clone git@github.com:parth610/Insta-Clone.git
```
- Create a database and a user in psql, follow the following steps in your terminal:
```
1. psql
2. CREATE UESR flixagram_user WITH PASSWORD '<password>'
3. CREATE DATABASE flixagram_db WITH OWNER 'flixagram_user'
```
- In the root directory install all our python dependencies by running the following command:
```
 pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
 ```
- After isntalling the dependencies, you will be prompted to enter the virtual enviornment with:
```
pipenv shell
```
- Create a migration files that will allow creation of tables for the database created above
```
flask db migrate
flask db upgrade
```
- Check postbird to view whether or not database has been updated properly (optional)
- Seed database with:
```
flask seed all
```
- Start the backend server with:
```
flask run
```
- Next `cd` into the react-app and run the following commands to install the npm dependencies:
```
npm install
```
- Start the app, it will automatically take you to `http://localhost:3000, with the following command:
```
npm start
```
- Happy browsing Flixagram! And thank you for visiting our app!

