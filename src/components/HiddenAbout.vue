<script setup lang="ts">
import { onMounted, ref } from "vue";

const isVisible = ref(false);

defineProps<{
  content: string;
}>()

onMounted(() => 
  document.getElementById('tabAbout')?.addEventListener('click', () => {
		isVisible.value = !isVisible.value;
    if (isVisible.value) {
      document.getElementById('tabAbout')?.classList.add('tab-active');
    } else {
      document.getElementById('tabAbout')?.classList.remove('tab-active');
    }
}));
</script>

<template>
  <transition name="expand"><div v-if="isVisible" class="shelf-content" v-html="content"></div>
  </transition>
</template>

<style scoped>
.shelf-container {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 1rem;
}

.shelf-toggle {
  margin-bottom: 1rem;
}

.expand-enter-active,
.expand-leave-active {
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

.expand-enter-to,
.expand-leave-from {
  max-height: 1000px; /* Should be greater than the content height */
  opacity: 1;
}
</style>