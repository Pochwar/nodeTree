'use strict'

const Model = use('Model')

class Node extends Model {
  // override query method to return children by default
  // this achieve to get children recursively
  static query () {
    return super.query().with('children')
  }

  // set visible attributes
  static get visible () {
    return ['id', 'title', 'x', 'y']
  }

  // declare computed attribute
  static get computed () {
    return ['x', 'y']
  }

  parents () {
    return this
      .belongsToMany(
        'App/Models/Node',
        'child',
        'parent',
        'id',
        'id'
      )
      .pivotTable('nodes_relations')
  }

  children () {
    return this
      .belongsToMany(
        'App/Models/Node',
        'parent',
        'child',
        'id',
        'id'
      )
      .pivotTable('nodes_relations')
  }

  // computed attribute x
  getX({x_coord}) {
    return x_coord
  }

  // computed attribute x
  getY({y_coord}) {
    return y_coord
  }
}

module.exports = Node
