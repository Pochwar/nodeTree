'use strict'

const Video = use('App/Models/Video')
const Drive = use('Drive')
const path = use('path')
let videoStitch = use('video-stitch')
let videoConcat = videoStitch.concat

class HomeController {
  async index ({view}) {
    const videos = await Video.all()

    const clips = videos.rows.map(video => {
      const videoPath = path.join(__dirname, '../../../tmp/uploads/videos/', video.path)
      const exists = Drive.exists(videoPath)

      if (exists) {
        return {"fileName": videoPath}
      }
    })
    this.concat(clips, view)
  }

  concat(clips, view) {
    videoConcat({
      silent: false,
      overwrite: true,
    })
      .clips(clips)
      .output("public/merges/merged.mp4")
      .concat()
      .then((outputFileName) => {
        console.log(outputFileName)
        return view.render('welcome', {videos: "coucou"})
      })
      .catch((e) => {
        console.log("error:", e)
      })
  }
}

module.exports = HomeController


