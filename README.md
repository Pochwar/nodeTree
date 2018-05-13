# nodeTree

This project is about building tree maps of objects and browse them randomly.

Differents media will be implemented as objects of the tree :
- Videos - WIP
- Images - TODO
- Text - TODO

## Todo


### Nodes
* Update Node model so that nodes could have multiple parents
* Add graphic interface to manage nodes (VueJS ?)
* Handle node attachment to content (Video, Images, Text)

### Tree
* Rebuild depending on Nodes changes

### General
* Handle users
* Handle project per users

## Info
Using [AdonisJs](https://adonisjs.com) framework

Requirements :
- NodeJs >= 8.0
- NPM >= 3.0
- MySql
- ffmpeg >= 3.x

## Setup

* Clone the project
```
git clone https://github.com/Pochwar/nodeTree.git
```
* Go to the new folder
```
cd nodeTree
```
* Install dependencies
```
npm install
```
* Copy `.env.example` to `.env` and set your database credentials
* Start migrations
```
adonis migration:run
```

## Usage

Run the following command to launch the server.
```js
adonis serve
```
Server will be available at [http://127.0.0.1:2440](http://127.0.0.1:2440)

### Routes
* `/` : home.
* `/nodes` : manage nodes.
* `/videos` : manage videos.