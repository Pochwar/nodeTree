'use strict'

const Video = use('App/Models/Video')
const Helpers = use('Helpers')
const { validate } = use('Validator')
const Drive = use('Drive')

class VideoController {
  async index ({view}) {
    const videos = await Video.all()

    return view.render('videos.index', {videos: videos.toJSON()})
  }

  async create () {
  }

  async store ({ request, response, session }) {

    const validation = await validate(request.all(), {
      label: 'required|min:3|max:140',
    })

    // show error messages upon validation fail
    if (validation.fails()) {
      session.withErrors(validation.messages())
        .flashAll()

      return response.redirect('back')
    }

    const video = request.file('video', {
      types: ['video'],
      size: '10mb'
    })

    await video.move(Helpers.tmpPath('uploads/videos'), {
      name: `${new Date().getTime()}.${video.subtype}`
    })

    if (!video.moved()) {
      return video.error()
    }

    // create video entity
    const videoEntity = new Video()
    videoEntity.label = request.input('label')
    videoEntity.path = video.fileName
    await videoEntity.save()

    // Fash success message to session
    session.flash({ notification: 'Video added!' })

    return response.redirect('back')
  }

  async show () {
  }

  async edit () {
  }

  async update () {
  }

  async destroy ({ params, session, response }) {
    let video = await Video.find(params.id)
    await video.delete()

    session.flash({ notification: 'Video deleted' })

    return response.redirect('back')
  }
}

module.exports = VideoController
