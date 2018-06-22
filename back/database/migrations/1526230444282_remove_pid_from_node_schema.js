'use strict'

const Schema = use('Schema')

class RemovePidFromNodeSchema extends Schema {
  up () {
    this.alter('nodes', (table) => {
      table.dropColumn('pid')
    })
  }

  down () {
    this.table('nodes', (table) => {
      table.integer('pid')
    })
  }
}

module.exports = RemovePidFromNodeSchema
