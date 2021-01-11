# projeto_atech

<img src="https://img.shields.io/github/languages/code-size/AllanRolli/projeto_atech?style=plastic"/> <img src="https://img.shields.io/github/license/AllanRolli/projeto_atech?style=plastic"/> <img src="https://img.shields.io/github/license/AllanRolli/projeto_atech">

This project has the purpose of making a test.

## :rocket: Technologies

- [NodeJs](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/)
- [Python](https://www.python.org/)

<img src="https://www.opus-software.com.br/wp-content/uploads/2018/09/nodejs.jpg" width="300" height="300">

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v12.17](https://nodejs.org/en/) or higher + [Npm v6.10.2](https://www.npmjs.com/get-npm) or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/AllanRolli/projeto_atech.git

# Go into the repository
$ cd projeto_atech

# Install dependencies
$ npm install
```

## Postgres

### Postgres script

I create a script in mongo language to make the tables, inside the folder src/config you can check the code, need only to change the parameters to your connection string

### Postgres config

Inside the root of the project exists one docker-compose.yml file, with him you can make the pull of the postgres and the pgadmin to administrate, change the user and password in line 25, 26 to access the pgadmin.
Remembering that you must have docker installed. From your command line:


```bash
# This command create a persistent volume in machine and the database instead
$ docker-compose up -d

# This command stops to provide the postgres
$ docker-compose down
```
After this you can access the database using localhost:16543 in your browser.
Tip.: to create a server connection you have to use the name of the image (postgres) in the host.

## Running Docker

<img src="https://www.mundodocker.com.br/wp-content/uploads/2015/06/docker_facebook_share.png" width="100" height="100">

If you'd like to, you may use Docker to test the application. I created a Dockerfile to build an image in the root of the repository.
You can make image by the following steps:

```bash
# Building the application
$ docker build -t <name_of_your_image> .

# After the build
$ docker run -p 3000:3000 -d <name_of_your_image>
```
To check if is running open your browser in localhost:3000

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/AllanRolli/projeto_atech/blob/master/LICENSE) for more information.

---

## Author

👤 **Allan Rolli**

- Github: [@AllanRolli](https://github.com/AllanRolli)
- LinkedIn: [@AllanRolli](https://www.linkedin.com/in/allan-rolli-a66198106/)
