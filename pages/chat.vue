<template>
  <div>
    <ul>
      <li v-for="m in messages" :key="m.text" >{{m.text}}</li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
      middleware : ['chat'],
        head(){
          return{
            title : `Комната ${this.user.room}`
          }
        },
        name: "chat",
        computed : mapState(['user', 'messages'])
    }
</script>

<style scoped>

</style>
