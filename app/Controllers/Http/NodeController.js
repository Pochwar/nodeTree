'use strict'

const Node = use('App/Models/Node')

const { validate } = use('Validator')

class NodeController {

  async index ({ view, response }) {
    const nodes = await await Node
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
      label: 'required|min:3|max:255',
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
    const node = await Node.find(params.id)
    await node.delete()

    // Fash success message to session
    session.flash({ notification: 'Node deleted!' })

    return response.redirect('back')
  }


}

module.exports = NodeController
