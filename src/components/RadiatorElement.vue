<template>
    <li v-if="job.lastBuild" class="list-group-item" v-bind:class="[status, colSize]">{{ job.name }} <a class="buildNumber" v-bind:href="job.lastBuild.url" target="_blank">#{{job.lastBuild.number}}</a></li>
    <li v-else class="list-group-item col-lg-4"  v-bind:class="status" >{{ job.name }} #</li>
</template>

<script>
  export default {
    name: 'radiator-element',
    props: {
      job: {}
    },
    data () {
      return {
        jobData: {},
        interval: {}
      }
    },
    computed: {
      status: function () {
        return this.job.color
      },
      colSize () {
        return this.job.color.indexOf('red') === 0 ? 'col-lg-12' : 'col-lg-4'
      }
    }
  }
</script>

<style>
</style>