<template>
    <div class="container-fluid">
        <jenkins-menu></jenkins-menu>
        <radiator></radiator>    
    </div>  
</template>

<script>
import JenkinsMenu from '@/components/JenkinsMenu'
import Radiator from '@/components/Radiator'
export default {
  components: {
    Radiator, JenkinsMenu
  }
}
</script>

