<template>
    <div class="container-fluid">
        <jenkins-menu></jenkins-menu>
        <radiator-view></radiator-view>    
    </div>  
</template>

<script>
import JenkinsMenu from '@/components/JenkinsMenu'
import RadiatorView from '@/components/RadiatorView'
export default {
  name: 'radiator',
  components: {
    RadiatorView, JenkinsMenu
  }
}
</script>