<script setup lang="ts">
  import { ref } from 'vue';
  import CardContainer from '@/components/CardContainer.vue';


  const props = defineProps<{
    cardData: CardData
  }>()

  const container1Cards = ref([{id: 1, text: "AS"}, {id: 2, text: "2S"}]);
  const container2Cards = ref([{id: 3, text: "3S"}, {id: 4, text: "4S"}, {id: 5, text: "5S"}, {id: 6, text: "6S"}]);  
</script>

<template>
  <div class="player-set">
    <CardContainer class="card-container" :initialCards="container1Cards" />
  </div>
</template>

<style lang="scss" scoped>
  .player-set {
    display: flex;
    justify-content: center;

    & > * {
      margin: 0 10px;
    }
  }
</style>