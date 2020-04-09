# Quick Full Stack Kit

A quick starter kit that utilizes modern web technologies for full stack app using `react`, `redux`, `react-router`, `express` and `webpack`. It is designed to setup as simple as possible to extend easily, and to be used for different cases.


### Usage:
- Clone the repository
- Extend / Add more dependencies for suitable needs
- rename `.env.example` to `.env` and other necessary variables needed
- run at least once `npm run build` to have the `dist` folder created for server to have the client source compiled and be served


### Requirements
```
node >= v12.13.0
npm >= v6.12.0
```


### Commands:
- `npm run server` - open terminal and run it on root project to start the server
- `npm run start` - open another terminal and run it on root project as well to start the development on client 
- `npm run build` - to compile client assets to be deployed, it will create `dist` folder on server


### Frameworks and Tools
- Webpack
- Gulp
- ReactJS
- Redux
- React Router
- Redux Saga
- Express
- PostCSS / CSS Modules


### Client Workflow
- an action will be dispatched through actions defined in each action types.
- saga will listen to any actions to fire side effects, call apis, etc...
- saga will dispatch success / fail which will receive then through reducers


### Using As Front-End Source Code Only
- Delete `src/server`
- Copy all the files inside `src/client` and paste it in `src`, after delete `src/client` folder
- Adjust / remove paths in `webpack.config.js`
- Remove dependencies used for `server`
