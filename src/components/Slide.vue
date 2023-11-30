<script setup lang="ts">
defineProps<{
  itemKey: number
}>()
</script>

<template>
  <div :id="'slides__' + itemKey" :class="$style.slide">
    <div :class="$style.slide__content"><slot /></div>
    <a
      :class="$style.slide__prev"
      :href="'#slides__' + (itemKey - 1)"
      title="Prev"
    ></a>
    <a
      :class="$style.slide__next"
      :href="'#slides__' + (itemKey + 1)"
      title="Next"
    ></a>
  </div>
</template>

<style module>
.slide {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
  margin-right: 1rem;
  box-sizing: border-box;
  transform-origin: center center;
  transform: scale(1);
}

.slide a {
  background: none;
  border: none;
}

.slide__prev {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  left: 5%;
}

.slide__next {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  right: 5%;
}

.slide__prev,
.slide__next {
  position: absolute;
  top: 50%;
  width: 30px;
  height: 30px;
  border: solid red;
  border-width: 0 4px 4px 0;
  box-sizing: border-box;
  z-index: 10000;
}
.slide__content {
  height: 100%;
  overflow: hidden;
}
</style>
