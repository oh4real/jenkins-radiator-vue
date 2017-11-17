<template>
    <div>
        <div class="header">
            <h3>{{ view }}</h3>
        </div>
        <radiator :viewProp="view"></radiator>
    </div>
</template>

<script>
  import Radiator from '@/components/Radiator'
  export default {
    name: 'menu',
    components: {
      Radiator
    },
    data () {
      return {
        views: [],
        view: '',
        viewIndex: 1
      }
    },
    methods: {
      loadData: function () {
        this.view = this.views[this.viewIndex].name
        this.viewIndex++
        console.log(this.view)
        setTimeout(this.loadData, 6000)
      }
    },
    mounted () {
      this.$http.get('/api/json').then((response) => {
        this.views = response.data.views
        this.loadData()
      })
    }
  }
</script>

<style></style>