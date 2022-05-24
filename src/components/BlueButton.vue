<template>
  <router-link v-if="to" :to="to" class="blue-btn"><slot></slot></router-link>
  <button @click="$emit('click')" :type="type" v-else class="blue-btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BlueButton",
  props: {
    to: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped lang="scss">
.blue-btn {
  cursor: pointer;
  border: 2px solid transparent;
  display: block;
  border-radius: 0.7rem;
  background-image: linear-gradient(
    to bottom,
    rgba(68, 182, 254, 0.85),
    #47bae3
  );
  color: #fff;
  padding: 1rem 3rem;
  font-weight: 400;
  font-size: 18px;
  transition: all 300ms ease;
  text-decoration: none;
  box-shadow: 0 5px 6px rgba(0, 0, 0, 0.3);

  &:hover {
    background: #fff;
    color: #44b6fe;
    border-color: #44b6fe;
  }
}
</style>
