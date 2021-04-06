<template>
  <div>
<div>
  counter Page
</div>
  <div>
   counter: {{counter}}
  </div>
    <div>
      <button @click="increment()">
        increment
      </button>
    </div>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import {computed} from "vue";
export default {
  setup(){
 const store=useStore()
    const counter=computed(()=>{
      return store.state.counter
    })
    function increment(){
store.dispatch('increment')
    }
    return{
   counter,
      increment
    }
  }
}
</script>

<style scoped>

</style>