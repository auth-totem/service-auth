# Auth Service

## Needed setups

Create a file called ".env" on the root folder, that has to contains all enviroment variables from ".env.example", and a file called "db_env.env" with the variables from "db_env.env.example"

## Running the project as devlopment

There is 2 ways to run as devlopment mode, local or with docker

### Local

First install all the packages that is needed

```
yarn or npm install
```

And then run the project

```
yarn dev:watch or npm run dev:watch
```

### Docker

Run the application running with vscode

```
CTRL + F5
```

Or you can use the docker run command

```
docker-compose up -d
```
