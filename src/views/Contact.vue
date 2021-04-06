<template>
<div>
 <div> contact Page</div>
<button @click="goToAbout()">go to about Page</button>
</div>
</template>

<script>
import {useRouter} from "vue-router"
export default {
  name: "Contact",
 setup(){
    const router=useRouter()
    function goToAbout() {

      router.push('/about')
    }
    return{
      goToAbout
    }
 }
}
</script>

<style scoped>

</style>