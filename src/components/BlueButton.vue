<template>
  <router-link v-if="to" :to="to" class="blue-btn"><slot></slot></router-link>
  <button :type="type" v-else class="blue-btn"><slot></slot></button>
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
  text-transform: uppercase;
  display: block;
  border-radius: 0.7rem;
  background-color: #44b6fe;
  color: #fff;
  padding: 1rem 3rem;
  font-weight: 600;
  letter-spacing: 3px;
  font-size: 18px;
  transition: all 300ms ease;
  text-decoration: none;

  &:hover {
    background-color: #fff;
    color: #44b6fe;
    border-color: #44b6fe;
  }
}
</style>
