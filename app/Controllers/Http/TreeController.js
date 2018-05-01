'use strict'

const Node = use('App/Models/Node')

const _ = use('lodash')

class TreeController {

  async tree () {
    const rootNodes = await Node
      .query()
      .where('pid', null)
      .fetch()

    return rootNodes
  }

  async randomPath () {
    // get tree
    let tree = await this.tree()
    tree = tree.toJSON()

    // instanciate path
    const path = []

    let loop = true;
    let current = tree
    while (loop) {
      const i = _.random(0, _.size(current)-1)
      path.push({
        id : current[i].id,
        label : current[i].label,
      })

      if (_.size(current[i].children) != 0) {
        current = current[i].children
      } else {
        loop = false
      }
    }

    return path
  }
}

module.exports = TreeController
