<template>
  <router-link v-if="to" class="card-btn" :to="to">
    <img :src="icon" alt="" />
    <p>{{ text }}</p>
  </router-link>
  <button @click="$emit('click')" v-else class="card-btn">
    <img :src="icon" alt="" />
    <p>{{ text }}</p>
  </button>
</template>

<script>
export default {
  name: "CardButton",
  props: {
    icon: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    to: {
      type: [String, Object],
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.card-btn {
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
  cursor: pointer;
  text-decoration: none;
  background: none;
  border: none;
  color: #333;

  &:hover img,
  &:hover p {
    transform: scale(1.1);
  }

  img {
    background-image: linear-gradient(
      to bottom,
      rgba(68, 182, 254, 0.85),
      #47bae3
    );
    border-radius: 0.5rem;
    padding: 1rem;
    width: 125px;
    transition: all 300ms ease-in-out;
    box-shadow: 0 5px 6px rgba(0, 0, 0, 0.3);
  }

  p {
    transition: all 300ms ease-in-out;
    opacity: 0.75;
    text-align: center;
    font-size: 20px;
  }
}
</style>
