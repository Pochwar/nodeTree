<template>
  <div>
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

    <ul v-if="errors && errors.length">
      <li v-for="error of errors" :key="error.columnNumber">
        {{error.message}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      errors: []
    }
  },
  created () {
    this.$loadScript('js/graph-creator.js')
      .then(() => {
        // Script is loaded, do something
        console.log('GRAPH3', window.graphCreator)

        axios.get(`${process.env.VUE_APP_API_URL}/test`)
          .then(response => {
            console.log('DATA', response.data)

            var jsonObj = response.data
            var thisGraph = window.graphCreator

            thisGraph.deleteGraph(true)
            thisGraph.nodes = jsonObj.nodes
            thisGraph.setIdCt(jsonObj.nodes.length + 1)
            var newEdges = jsonObj.edges
            newEdges.forEach(function (e, i) {
              newEdges[i] = {
                source: thisGraph.nodes.filter(function (n) {
                  return n.id === e.source
                })[0],
                target: thisGraph.nodes.filter(function (n) {
                  return n.id === e.target
                })[0]}
            })
            thisGraph.edges = newEdges
            thisGraph.updateGraph()
          })
          .catch(e => {
            this.errors.push(e)
          })
      })
      .catch(() => {
        // Failed to fetch script
      })
  },
  methods: {
  }
}
</script>

<style src="./Tree.css"></style>
