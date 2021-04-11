# Auth Service with Firebase Backend

## Needed setups

Create a file called ".env" on the root folder, that has to contains all enviroment variables from ".env.example"

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

First build the app on docker

```
yarn build:docker or npm run build:docker
```

And then run the application running with vscode

```
CTRL + F5
```

Or you can use the docker run command

```
docker rm --force totem-auth-service && docker run -d -p 3000:3000 --env-file "$(pwd)"/.env --mount type=bind,source="$(pwd)"/package.json,target=/usr/totem/auth/package.json --mount type=bind,source="$(pwd)"/src,target=/usr/totem/auth/src --name totem-auth-service miguel-panuto/auth-totem
```
