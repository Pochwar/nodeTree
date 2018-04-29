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

  // declare parent relashionship
  parent() {
    return this.hasOne('App/Models/Node', 'pid', 'id')
  }

  // declare children relashionship
  children() {
    return this.hasMany('App/Models/Node', 'id', 'pid')
  }

  // computed attribute labelid
  getLabelid({id, label}) {
    return `${id} - ${label}`
  }
}

module.exports = Node
