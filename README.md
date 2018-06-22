# nodeTree

This project is about building tree maps of nodes.
Each node can be linked to a media, then the purpose is to browse randomly a branch of the tree to construct a new different story each time.

Differents media will be implemented as objects of the tree :
- Videos
- Images
- Texts
- Sounds

## Back

### Info
Using [AdonisJs](https://adonisjs.com) framework

Requirements :
- NodeJs >= 8.0
- NPM >= 3.0
- MySql
- ffmpeg >= 3.x

### Setup

* Got to `back` folder

* Install dependencies
```
npm install
```
* Copy `.env.example` to `.env` and set your database credentials
* Start migrations
```
adonis migration:run
```

### Usage

Run the following command to launch the server.
```js
adonis serve
```
Server will be available at [http://127.0.0.1:2440](http://127.0.0.1:2440)

### Routes
* `/` : home.
* `/nodes` : manage nodes.
* `/videos` : manage videos.


## Front

### Info
Using [VueJs](https://vuejs.org) framework

Requirements :
- NodeJs
- NPM

### Setup

* Got to `front` folder
* Run `npm install` to install dependencies
* Run `npm run dev` to compile assets
* Copy `.env.example` to `.env.local`

### Usage

* Run `npm run serve` to serve front

Front will be available at [http://127.0.0.1:8080](http://127.0.0.1:8080)


## Todo

- change port in front
- combine scripts (d3, file-saver, axios)

### Nodes
* Update Node model so that nodes could have multiple parents
* Add graphic interface to manage nodes (VueJS ?)
* Handle node attachment to content (Video, Images, Text)

### Tree
* Rebuild depending on Nodes changes

### General
* Handle users
* Handle project per users