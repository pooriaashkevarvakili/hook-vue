<template>
<div>
  <p>post Page</p>
</div>
  <div>
    <p>
      post id:{{id}}
    </p>
  </div>
</template>

<script>
import {ref, watch} from 'vue'
import {useRoute} from "vue-router"
export default {
  name: "Post",
  setup(){
    const id=ref('')
const route=useRoute()
    console.log(route.params)
    id.value=route.params.id
 watch(()=>route.params.id,()=>{
   id.value=route.params.id
 },)
    return {id}
  }
}
</script>

<style scoped>

</style>