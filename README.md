# projeto_atech

<img src="https://img.shields.io/github/languages/code-size/AllanRolli/projeto_atech?style=plastic"/> <img src="https://img.shields.io/github/license/AllanRolli/projeto_atech?style=plastic"/>

This project has the purpose of making a test.


## 👨🏾‍🏫 Documentation

The documentation can be accessed in [![desafiobossa Documentation](https://img.shields.io/badge/desafiobossa-APIBluePrint-blue.svg)](https://desafiobossa.docs.apiary.io/)

## :rocket: Technologies

- [NodeJs](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/)
- [Python](https://www.python.org/)

<img src="https://www.opus-software.com.br/wp-content/uploads/2018/09/nodejs.jpg">

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

Inside the root of the project exists one docker-compose.yml file, with him you can make the pull of the postgres and the pgadmin to administrate.
Remembering that you must have docker installed. From your command line:

```bash
# This command create a persistent volume in machine and the database instead
$ docker-compose up -d

# This command stops to provide the postgres
$ docker-compose down
```

## Deploying

### Deploying in Azure

Click the button below to automatically set up the desafiobossa API in an app
running on your Heroku account.

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/AllanRolli/desafiobossa)

Once you've deployed, you can easily clone the application and alter the
configuration to disable features:

```bash
$ heroku clone -a new-app-name
$ heroku config:set POLLS_CAN_VOTE_QUESTION=false
$ heroku config:set POLLS_CAN_CREATE_QUESTION=false
$ heroku config:set POLLS_CAN_DELETE_QUESTION=false
```

Remember that have to insert the MONGO_URL in heroku config vars to use your application.

### Deploying on Heroku using Docker

<img src="https://www.mundodocker.com.br/wp-content/uploads/2015/06/docker_facebook_share.png" width="100" height="100">

If you'd like to, you may use Docker on Heroku instead. I created a Dockerfile to build an image in the root of the repository.Refer to the [Heroku
Container Registry and Runtime
Guide](https://devcenter.heroku.com/articles/container-registry-and-runtime#getting-started)
for detailed instructions. Providing you have Docker installed you can follow
the following steps:

```bash
$ heroku container:login
$ heroku container:push web --app=name_of_your_app
$ heroku container:release web --app=name_of_your_app
```

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/AllanRolli/desafiobossa/blob/master/LICENSE) for more information.

---

## Author

👤 **Allan Rolli**

- Github: [@AllanRolli](https://github.com/AllanRolli)
- LinkedIn: [@AllanRolli](https://www.linkedin.com/in/allan-rolli-a66198106/)