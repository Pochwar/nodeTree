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
    tree = tree.toJSON();

    // instanciate path
    const path = []

    let l = true;
    let c = tree
    while (l) {
      const i = _.random(0, _.size(c)-1)
      path.push({
        id : c[i].id,
        label : c[i].label,
      })

      if (_.size(c[i].children) != 0) {
        c = c[i].children
      } else {
        l = false
      }
    }

    return path
  }
}

module.exports = TreeController
