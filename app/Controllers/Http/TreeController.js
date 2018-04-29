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

  async random () {
    const tree = await this.tree()

    console.log(_.random(1, _.size(tree.rows)))

    return tree.rows[0]
  }
}

module.exports = TreeController
