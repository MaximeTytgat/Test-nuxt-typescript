<script setup lang="ts">
  import { ref } from 'vue';
  import Card from '@/components/Card.vue';
  import { CardData } from '@/types';

  const props = defineProps<{
    initialCards?: CardData[]
  }>()

  const cards = ref(props.initialCards);

  const onDrop = (event: DragEvent) => {
    if (!event.dataTransfer) {
      console.warn('DataTransfer is not available');
      return;
    }
    
    const cardData: CardData = JSON.parse(event.dataTransfer.getData('card'));
    if (cards.value) {
      cards.value.push(cardData);
      cards.value = cards.value.filter(card => card.id !== cardData.id);
    }
  };
</script>


<template>
  <div class="card-container" @dragover.prevent @drop="onDrop">
    <Card v-for="card in cards" :key="card.id" :cardData="card" />
  </div>
</template>

<style lang="scss" scoped>
  .card-container{
    border: blue solid 1px;
    width: 150px;
    height: 250px;
  }
</style>