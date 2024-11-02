<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const key = ref("")
const handleKey = ()=>{
  let required = "KU1YYP.IOA12H"
  if(required === key.value){
    router.push('key-verfied')
  } else {
    router.push("/faild-key")
  }
}

</script>

<template>
  <body>
    <div class="container">
      <header>
        <h1><span>Welcome</span> to iKurd</h1>
        <button class="connect-button">Connect</button>
      </header>
      <div class="login-box">
        <input v-model="key" type="text" placeholder="Enter the Key" class="input-field">
        <button @click.prevent="handleKey" class="login-button">Login</button>
      </div>
    </div>
  </body>
</template>

<style scoped>

</style>
