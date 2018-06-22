'use strict'

const Schema = use('Schema')

class AddCoordinatesToNodesSchema extends Schema {
  up () {
    this.alter('nodes', (table) => {
      table.integer('x_coord').after('label')
      table.integer('y_coord').after('label')
    })
  }

  down () {
    this.alter('add_coordinates_to_nodes', (table) => {
      table.dropColumn('x_coord')
      table.dropColumn('y_coord')
    })
  }
}

module.exports = AddCoordinatesToNodesSchema
