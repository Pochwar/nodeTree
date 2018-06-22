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

* Run `npm install` to install dependencies
* Copy `.env.example` to `.env` and set your database credentials
* Run `adonis migration:run` to start migrations

### Usage

Run `adonis serve` to launch the server.

Server will be available at [http://127.0.0.1:2440](http://127.0.0.1:2440)

### Routes
* `GET` `/` : home.


* `GET` `/tree` : view tree.
* `GET` `/tree/random-path` : view a random path of the tree.


* `GET` `/nodes` : view nodes and edges.
* `GET` `/nodes/:id` : view specific node.
* `POST` `/nodes` : create new node.
* `DELETE` `/nodes/:id` : delete specific node.


* `GET` `/videos` : view videos.
* `GET` `/videos/:id` : view specific video.
* `POST` `/videos` : create new video.
* `DELETE` `/video/:id` : delete specific node.


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

Front will be available at [http://localhost:2444](http://localhost:2444)


## Todo

### Nodes
* Handle node attachment to content (Videos, Images, Texts, Sounds)

### General
* Handle users
* Handle project per users