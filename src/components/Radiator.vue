<template>
<div>
    <ul v-if="fails.length" class="failed list-group row radiatorGroup">
        <radiator-element v-for="job in orderedJobs(fails)" :job="job" :key="job.name"/></radiator-element>
    </ul>
    <ul v-if="aborted.length" class="list-group row radiatorGroup">
        <radiator-element v-for="job in orderedJobs(aborted)" :job="job" :key="job.name" /></radiator-element>
    </ul>
    <ul v-if="stables.length" class="list-group row radiatorGroup">
        <radiator-element v-for="job in orderedJobs(stables)" :job="job" :key="job.name" /></radiator-element>
    </ul>
    <ul v-if="disableds.length" class="list-group row radiatorGroup">
        <radiator-element v-for="job in orderedJobs(disableds)" :job="job" :key="job.name" /></radiator-element>
    </ul>
    <ul v-if="unknowns.length" class="list-group row radiatorGroup">
        <radiator-element v-for="job in orderedJobs(unknowns)" :job="job" :key="job.name" /></radiator-element>
    </ul>
</div>
</template>

<script>
  import RadiatorElement from '@/components/RadiatorElement'
  export default {
    name: 'radiator-vue',
    data () {
      return {
        view: 'Jenkins Radiator',
        jobs: [],
        fails: [],
        stables: [],
        disableds: [],
        aborted: [],
        unknowns: [],
        interval: ''
      }
    },
    components: {
      RadiatorElement
    },
    created () {
      // fetch the data when the view is created and the data is
      // already being observed
      this.loadData()
    },
    watch: {
      // call again the method if the route changes
      '$route': 'loadData'
    },
    computed: {
    },
    methods: {
      orderedJobs (jobs) {
        return this._.orderBy(jobs, ['lastBuild.timestamp'], ['desc'])
      },
      loadData () {
        this.view = this.$route.params.view
        this.$http.get('/view/%s/api/json?depth=1&tree=jobs[name,color,url,lastBuild[number,url,timestamp]]'.replace('%s', this.view)).then((response) => {
          var stables = []
          var disableds = []
          var fails = []
          var aborted = []
          var unknowns = []
          response.data.jobs.forEach((job) => {
            switch (job.color) {
              case 'blue':
              case 'blue_anime':
                stables.push(job)
                break
              case 'disabled':
              case 'disabled_anime':
                job.color = job.color.replace('disabled', 'disabledJob')
                console.log(job)
                disableds.push(job)
                break
              case 'red':
              case 'red_anime':
                fails.push(job)
                break
              case 'aborted':
              case 'aborted_anime':
                aborted.push(job)
                break
              default:
                unknowns.push(job)
                break
            }
          })
          this.stables = stables
          this.disableds = disableds
          this.fails = fails
          this.aborted = aborted
          this.unknowns = unknowns
          if (this.interval === '') {
            this.interval = setInterval(this.loadData, 15000)
          }
        })
      }
    },
    beforeDestroy () {
      clearInterval(this.interval)
    }
  }
</script>

<style></style>