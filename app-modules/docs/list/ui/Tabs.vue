<template>
  <div class="tabs-area scroll-y">
    <div class="tabs-body">
      <div class="items">
        <button
          class="item"
          :class="{ 'item--active': index === activeTab }"
          v-for="(item, index) in items"
          @click="$emit('update:activeTab', index)"
        >
          {{ item }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    items: string[],
    activeTab: number,
  }>();

  defineEmits<{
    (event: 'update:activeTab', index: number): void,
  }>();
</script>

<style scoped lang="scss">
  .tabs-area {
    overflow-y: hidden;
  }

  .tabs-body {
    padding-bottom: 12px;
  }

  .items {
    display: flex;
    gap: 20px;

    @include sm {
      gap: 16px;
    }
  }

  .item {
    padding: 14px 30px;
    border-radius: 20px;
    flex-shrink: 0;
    @apply tw-border tw-border-solid tw-border-text-gray tw-text-body-s-regular tw-text-text-gray;

    &:hover {
      opacity: 0.8;
    }

    @include sm {
      padding: 16px;
      font-size: 14px;
      line-height: 17px;
    }

    &--active {
      opacity: 1 !important;
      @apply tw-bg-white tw-text-text-dark tw-border-white;
    }
  }
</style>
