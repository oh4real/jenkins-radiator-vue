<template>
<div>
    <radiator-group :list="fails"></radiator-group>
    <radiator-group :list="aborted"></radiator-group>
    <radiator-group :list="stables"></radiator-group>
    <radiator-group :list="disableds"></radiator-group>
    <radiator-group :list="unknowns"></radiator-group>
</div>
</template>

<script>
  import RadiatorJob from '@/components/RadiatorJob'
  import RadiatorGroup from '@/components/RadiatorGroup'
  export default {
    name: 'radiator-view',
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
      RadiatorJob, RadiatorGroup
    },
    created () {
      // fetch the data when the view is created or when the data is
      // already being observed
      this.loadData()
    },
    watch: {
      // call again the method loadData if the route changes
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