# <div align="center"> wsp - clone  :hotsprings: </div>

## Getting Started

 Clone project - first, run install dependencies  / install yarn in your local machine :

```bash
# frontend server 
1) enter client folder run : yarn 
2) run : yarn dev

#  backend server 
1) enter client folder server : yarn
2) run : yarn dev
```
## Config Firebase 

- Create account  [Firebase](https://firebase.google.com/)
- Create project , configure for login by email

STEPS:exclamation:
1) Logged in click console
2) Click create a project - enter your project name 
3) click in continue x3
4) then click on the web button and register your app
5) it will show - your credentials

```js
const firebaseConfig = {
  apiKey: "xxxxxxxxxxx",
  authDomain: "xxxxxxxxxxxxxxxxxxx",
  projectId: "xxxxxxxxxxxxxxxxxxxxxxxxx",
  storageBucket: "xxxxxxxxxxxxxxxxxxxxxxx",
  messagingSenderId: "xxxxxxxxxxxxxxxxx",
  appId: "xxxxxxxxxxxxxxxxxxx",
  measurementId: "xxxxxxxxxxxxxx"
};
```
6) replace your credentials in the file client/utils/firebase.js
7) now in the sidebar in the option build click then choose the option authentication and click get started
8) select option google  / enable option top or bottom
9) select your email and save

## Config your database localhost (postgresql)
docker image postgres :

```js
docker run -d --name yournameContainer -p 5432:5432 -e POSTGRES_PASSWORD=yourpassword postgres
```

docker pgadmin4:
```js
docker pull dpage/pgadmin4:latest
docker run -p 80:80 \
-e 'PGADMIN_DEFAULT_EMAIL=youremailadmin' \

```

- run comands:

docker start ...yourIDCONTAINER(PGADMIN4)...... <br>
docker start ...yourIDCONTAINER(POSTGRESBD)...... 

connect localhost docker - db:
```js
docker exec -it nameyourcontainer bash
```

```js
psql -h localhost -U postgres
```

## Initalize prisma 
run: 
- prisma init
- npx prisma generate
- npx prisma db push

## Config zgCloud
- create account [zgCloud](https://www.zegocloud.com/)
- click in dashboard
- select the option create new project
- select option voice and videocall
- bottom , click on the next option
- write the name of your project and click option (start with custom SDKs) <br>

- dashboard project image
- ![Captura de pantalla 2023-08-26 173115](https://github.com/hermezHK/WSP-APP-NEXTJS-NODEJS-FIREBASE/assets/113315995/f2c01aea-cd77-4f70-97b6-e4a02fc9576b)

- select option AppID copy
- select option ServerSecret copy
- edit file in client/next.config.js
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_ZEGO_APP_ID : YOUR APPID,
    NEXT_PUBLIC_ZEGO_SERVER_ID : "YOURSERVERID"
  },
  images : {
    domains: ["localhost"],
  }
};

module.exports = nextConfig;
```

# env.example  folder server
```bash
DATABASE_URL="postgresql://postgres:yourpass@localhost:5432/yournamedb?schema=public"
PORT=3005


ZEGO_APP_ID = YOURID,
ZEGO_SERVER_ID = "YOURIDSERVER"
```
## WSP APP IMAGE

![Captura de pantalla 2023-08-26 180021](https://github.com/hermezHK/WSP-APP-NEXTJS-NODEJS-FIREBASE/assets/113315995/04583e40-88e5-4076-ad9b-995b44b2d0fd)




  
