<template>
  <div class="tree">
    <div id="graph">
      <div id="toolbox">
        <input type="file" id="hidden-file-upload">
        <input id="upload-input" type="image" title="upload graph" src="img/upload-icon.png" alt="upload graph">
        <input type="image" id="download-input" title="download graph" src="img/download-icon.png" alt="download graph">
        <input type="image" id="delete-graph" title="delete graph" src="img/trash-icon.png" alt="delete graph">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      tree: {},
      errors: []
    }
  },
  mounted () {
    //
    let axiosScript = document.createElement('script')
    axiosScript.setAttribute('src', 'js/axios.js')
    document.head.appendChild(axiosScript)

    let d3Script = document.createElement('script')
    d3Script.setAttribute('src', 'js/d3.js')
    document.head.appendChild(d3Script)

    let fileSaverScript = document.createElement('script')
    fileSaverScript.setAttribute('src', 'js/file-saver.js')
    document.head.appendChild(fileSaverScript)

    let graphCreatorScript = document.createElement('script')
    graphCreatorScript.setAttribute('src', 'js/graph-creator.js')
    document.head.appendChild(graphCreatorScript)
  }
}
</script>

<style src="./Tree.css"></style>
