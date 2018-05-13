'use strict'

const Schema = use('Schema')

class CreateNodesRelationsSchema extends Schema {
  up () {
    this.create('nodes_relations', (table) => {
      table.integer('parent').unsigned().references('id').inTable('nodes')
      table.integer('child').unsigned().references('id').inTable('nodes')
    })
  }

  down () {
    this.drop('nodes_relations')
  }
}

module.exports = CreateNodesRelationsSchema
