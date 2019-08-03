# Quick Full Stack Kit

A quick starter kit that utilizes modern web technologies for full stack app using `react`, `redux`, `react-router`, `express` and `webpack`. It is designed to setup as simple as possible to extend easily, and to be used for different cases.


### Usage:
- Clone the repository
- Extend / Add more dependencies for suitable needs
- rename `.env.example` to `.env` and other necessary variables needed
- run at least once `npm run build` to have the `dist` folder created for server to have the client source compiled and be served


### Requirements
```
node >= v11.4.0
npm >= v6.4.1
```

### Commands:
`npm run server` - to start the server

`npm run client` - to start the development on client 

`npm run dev` - to start the server and client development at the same time

`npm run build` - to compile client assets to be deployed


### Frameworks and Tools
- Webpack
- Gulp
- ReactJS
- Redux
- React Router
- Express
- PostCSS / CSS Modules


### Using As Front-End Source Code Only
- Delete `src/server`
- Copy all the files inside `src/client` and paste it in `src`, after delete `src/client` folder
- Adjust / remove paths in `webpack.config.js`
- Remove dependencies used for `server`
