<template>
  <main>
    <div>
      <h1>{{ message }}</h1>
    </div>
  </main>
</template>


<script>
import { ref, onMounted } from 'vue';
import api from '../api.js';

export default {
  setup() {
    const message = ref('');

    onMounted(async () => {
      try {
        const response = await api.get('/');
        message.value = response.data;
      } catch (err) {
        console.error(err);
      }
    });

    return { message };
  },
};
</script>
