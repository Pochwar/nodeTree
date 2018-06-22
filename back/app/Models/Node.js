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
    return ['id', 'label', 'labelid']
  }

  // declare computed attribute
  static get computed () {
    return ['labelid']
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

  // computed attribute labelid
  getLabelid({id, label}) {
    return `${id} - ${label}`
  }
}

module.exports = Node
