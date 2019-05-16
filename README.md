# bossabox
this project has to ideia to accomplish the challenge proposit to BossaBox, bellow you can follow the instruction.

## Project setup

Before to run this project, you need to keep attendion for something.

Node version should be 5.3 or high
Vue-CLI version 3 or high

to install Vue-CLI you need frist to be Node installed in your computer and execute the command

```
npm install -g @vue/cli-service-global

```
or Alternative (without install Vue-CLI)

```
npx vue-cli-service serve
```

First one to start the project needs to execute on CMD the command bellow:
The command will install all dependencies of the project. 

```
npm install
```
## API setup

We need install dependencies of API , to do this use the command bellow in the 
folder /api that stay inside of root project directory 

```
npm install
```
### Run Api Serve
Run the Api before the run main project, after to install dependencies on folder /api , run the command bellow:


```
npx json-serve api/db.json
```

or Alternative on root project

```
npm run api
```

### Compiles and hot-reloads for development
Run the project needs to exec command bellow:

Tips: Will be better run the API first than project.

```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
To execute the unit test run the command bellow:

```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
