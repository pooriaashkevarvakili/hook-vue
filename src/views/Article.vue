<template>
<div>
  <div>Article page</div>
  <div>
    the id :{{id}}
  </div>
  <div>
    <router-link to="/article/lelele">go to leela</router-link>
  </div>
</div>
</template>

<script>
export default {
  props:['id'],
  name: "Article",
  setup(){

  }

}
</script>

<style scoped>

</style>