'use strict'

const Model = use('Model')

class Video extends Model {
  // set visible attributes
  static get visible () {
    return ['id', 'label', 'path']
  }

}

module.exports = Video
