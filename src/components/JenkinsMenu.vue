<template>
    <div>
        <span class="viewMenu">
            <div class="container">
            <form>
                <div class="form-group">
                <label for="selectView" class="col-sm-9 control-label viewMenuLabel">Select A Jenkins View</label>
                <div class="col-sm-3">
                    <select class="form-control viewMenuSelect" v-model="selected" v-on:change="navigateToRadiator">
                    <option v-for="view in views" :key="view.name" v-bind:value="view.name">{{ view.name }}</option>
                    </select>
                </div>
                </div>
            </form>
            </div>
        </span>
        <div v-if="selected" class="header">
            <h3>{{ decodeURI(selected) }}</h3>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'menu',
    data () {
      return {
        views: [],
        selected: ''
      }
    },
    methods: {
      navigateToRadiator: function () {
        this.$router.push({ name: 'Radiator', params: { view: this.selected } })
      }
    },
    mounted () {
      if (this.$route.params.view) {
        this.selected = this.$route.params.view
      }
      this.$http.get('/api/json').then((response) => {
        this.views = response.data.views
        this.views.unshift({name: 'Select One', value: ''})
      })
    }
  }
</script>

<style></style>