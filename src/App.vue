<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const lists = ref<any>();
const getData = async () => {
  try {
    console.log('位址',import.meta.env.VITE_API_URL)
    const api = `${import.meta.env.VITE_API_URL}/api/questions`
    
    await axios.get(api)
      .then((res: { data: any; }) => {
       lists.value  = res.data;
          console.log(  lists.value)
      })
  } catch (error) {
    console.log(error)
  }

}

onMounted(() => {
  getData();
});
</script>

<template>

</template>

<style scoped>
</style>
