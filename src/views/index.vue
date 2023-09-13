
<template>
    <div>
    <el-row class="mb-4">
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
      </el-row>

      <el-row class="mb-4">
        <el-button plain>Plain</el-button>
        <el-button type="primary" plain>Primary</el-button>
        <el-button type="success" plain>Success</el-button>
        <el-button type="info" plain>Info</el-button>
        <el-button type="warning" plain>Warning</el-button>
        <el-button type="danger" plain>Danger</el-button>
      </el-row>

      <el-row class="mb-4">
        <el-button round>Round</el-button>
        <el-button type="primary" round>Primary</el-button>
        <el-button type="success" round>Success</el-button>
        <el-button type="info" round>Info</el-button>
        <el-button type="warning" round>Warning</el-button>
        <el-button type="danger" round>Danger</el-button>
      </el-row>

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const lists = ref<any>();
const getData = async () => {
    try {
        console.log('位址', import.meta.env.VITE_API_URL)
        const api = `${import.meta.env.VITE_API_URL}/api/questions`

        await axios.get(api)
            .then((res: { data: any; }) => {
                lists.value = res.data;
                console.log(lists.value)
            })
    } catch (error) {
        console.log(error)
    }

}

onMounted(() => {
    getData();
});
</script>
