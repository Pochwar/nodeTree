'use strict'

const Video = use('App/Models/Video')
const Helpers = use('Helpers')
const { validate } = use('Validator')
const Drive = use('Drive')

class VideoController {
  async index ({response}) {
    const videos = await Video.all()

    return response.json({videos: videos.toJSON()})
  }

  async store ({ request, response }) {
    const validation = await validate(request.all(), {
      label: 'required|min:3|max:140',
    })

    // show error messages upon validation fail
    if (validation.fails()) {
      return response.json({ notification: validation.messages() })
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

    // return response with notification
    return response.json({ notification: 'Video added!' })
  }

  async update () {
  }

  async destroy ({ params, response }) {
    let video = await Video.find(params.id)
    await video.delete()

    // return response with notification
    return response.json({ notification: 'Video deleted' })
  }
}

module.exports = VideoController
