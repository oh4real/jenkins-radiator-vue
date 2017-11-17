<template>
    <ul v-if="list.length" class="failed list-group row radiatorGroup">
        <radiator-job v-for="job in orderedJobs(list)" :job="job" :key="job.name"/></radiator-element>
    </ul>
</template>

<script>
import RadiatorJob from '@/components/RadiatorJob'
export default {
  data () {
    return {}
  },
  components: {
    RadiatorJob
  },
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  methods: {
    orderedJobs () {
      return this._.orderBy(this.list, ['lastBuild.timestamp'], ['desc'])
    }
  }
}
</script>

