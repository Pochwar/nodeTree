'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

/*******************
 *       HOME      *
 *******************/
Route.on('/').render('welcome')

/********************
 *       NODES      *
 ********************/
Route.get('nodes', 'NodeController.index')
Route.get('nodes/:id', 'NodeController.show')
Route.post('nodes', 'NodeController.store')
Route.delete('nodes/:id', 'NodeController.destroy')

/*******************
 *       TREE      *
 *******************/
Route.get('tree', 'TreeController.tree')
Route.get('tree/random-path', 'TreeController.randomPath')