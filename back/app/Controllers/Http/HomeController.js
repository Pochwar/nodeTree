'use strict'

const Video = use('App/Models/Video')
const Drive = use('Drive')
const path = use('path')
let videoStitch = use('video-stitch')
let videoConcat = videoStitch.concat

class HomeController {
  async index ({response}) {
    return response.json({})
  }

  async test ({response}) {
    return response.json({"nodes":[{"id":2,"title":"welsh","x":512,"y":155},{"id":3,"title":"alürs","x":826,"y":155}],"edges":[{"source":2,"target":3}]})
  }

  async project ({view}) {
    // get all videos
    const videos = await Video.all()

    // construct clips object
    const clips = videos.rows.map(video => {
      // get video path
      const videoPath = path.join(__dirname, '../../../tmp/uploads/videos/', video.path)

      // check if video exists and add to clips object
      if (Drive.exists(videoPath)) {
        return {"fileName": videoPath}
      }
    })

    const montage = await videoConcat({
      silent: true,
      overwrite: true,
    })
      .clips(clips)
      .output("public/merges/merged-2.mp4")
      .concat()
      .then(outputFileName => {
        console.log("videos successfully edited together into: ", outputFileName)
        return outputFileName
      })
      .catch((e) => {
        console.error("error: ", e)
      })

    return view.render('project', {montage: montage.substr(6)})
  }
}

module.exports = HomeController

