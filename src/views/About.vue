<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="goToContact()">go to contact Page</button>
  </div>


</template>
<script>
import {useRouter} from 'vue-router'
export default {
  setup(){
    const router=useRouter()
function goToContact() {
  router.push('/contact')
}
return{
  goToContact
}
  }
}
</script>
<style>

</style>