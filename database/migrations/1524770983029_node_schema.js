'use strict'

const Schema = use('Schema')

class NodeSchema extends Schema {
  up () {
    this.create('nodes', (table) => {
      table.increments()
      table.string('label')
      table.integer('pid')
      table.timestamps()
    })
  }

  down () {
    this.drop('nodes')
  }
}

module.exports = NodeSchema
