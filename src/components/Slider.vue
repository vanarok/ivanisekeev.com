<script setup lang="ts">
defineProps<{
  items: Array<unknown>
}>()
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.slider">
      <div :class="$style.slides"><slot /></div>
      <div :class="$style.slider__nav">
        <a
          v-for="(item, index) in items"
          :class="$style.slider__navlink"
          :href="'#slides__' + (index + 1)"
        ></a>
      </div>
    </div>
  </div>
</template>

<style module>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.slider {
  width: 100%;
  max-width: 600px;
  height: 100%;
  margin: 20px;
  text-align: center;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
}

.slides {
  display: flex;
  overflow-x: scroll;
  position: relative;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
}

.slider::before {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  left: 5%;
}

.slider::after {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  right: 5%;
}

.slider::before,
.slider::after {
  position: absolute;
  top: 50%;
  width: 30px;
  height: 30px;
  border: solid lightgray;
  border-width: 0 2px 2px 0;
  box-sizing: border-box;
  z-index: 2;
}

.slider::before,
.slider::after {
  content: '';
  background: none;
  pointer-events: none;
}

.slider__nav {
  box-sizing: border-box;
  position: absolute;
  bottom: 5%;
  left: 50%;
  width: 350px;
  margin-left: -175px;
  text-align: center;
}

.slider__navlink {
  display: inline-block;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: lightblue;
  margin: 0 10px 0 10px;
}
</style>
