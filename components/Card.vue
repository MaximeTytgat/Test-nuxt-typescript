<script setup lang="ts">
  import { CardData } from '@/types';

  const props = defineProps<{
    cardData: CardData
  }>()

  
  const onDragStart = (event: DragEvent) => {
    if (!event.dataTransfer) {
      console.warn('DataTransfer is not available');
      return;
    }
    event.dataTransfer.setData('card', JSON.stringify(props.cardData));
  };
</script>

<template>
  <div class="card" draggable="true" @dragstart="onDragStart">
    <span>ID: {{ cardData.id }}</span> |
    <span>card: {{ cardData.text }}</span>
  </div>
</template>

<style lang="scss" scoped>
  .card {
    border: 1px solid red;
  }
</style>