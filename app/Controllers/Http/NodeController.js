'use strict'

const Node = use('App/Models/Node')

const { validate } = use('Validator')
const _ = use('lodash')

class NodeController {

  async index ({ view, response }) {
    const nodes = await Node
      .query()
      .with('parent')
      .fetch()

    return view.render('nodes.index', { nodes: nodes.toJSON() })
  }

  async show ({ params, response }) {
    const node = await Node
      .query()
      .where('id', params.id)
      .with('parent')
      .with('children')
      .fetch()

    return response.json(node)
  }

  async store ({ request, response, session }) {
    // validate form input
    const validation = await validate(request.all(), {
      label: 'required|min:3|max:140',
    })

    // show error messages upon validation fail
    if (validation.fails()) {
      session.withErrors(validation.messages())
        .flashAll()

      return response.redirect('back')
    }

    // persist to database
    const node = new Node()
    node.label = request.input('label')
    node.pid = request.input('parent') ? request.input('parent') : null
    await node.save()

    // Fash success message to session
    session.flash({ notification: 'Node added!' })

    return response.redirect('back')
  }

  async destroy ({ params, session, response }) {
    // get node to delete
    let node = await Node.find(params.id)
    node = node.toJSON()

    // nodes to delete
    const trash = []

    // make loop to put all children recursively in trash
    let loop = true;
    let currents = []
    currents.push(node)
    while (loop) {
      const temp = []
      let stop = true
      currents.forEach(node => {
        trash.push(node)

        if (_.size(node.children) != 0) {
          node.children.forEach(child => {
            temp.push(child)
          })
          stop = false
        }
      })

      currents = temp

      if (stop) {
        loop = false
      }
    }

    trash.forEach(async n => {
      // await n.delete()
      const node = await Node.find(n.id)
      // console.log(node)
      await node.delete()
    })

    // Fash success message to session
    session.flash({ notification: 'Node and all children deleted' })

    return response.redirect('back')
  }


}

module.exports = NodeController
