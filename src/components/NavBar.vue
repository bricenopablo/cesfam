<template>
  <div class="navBar">
    <svg
      class="arrow"
      @click="$router.go(-1)"
      v-if="$route.name !== 'Inicio' && $route.name !== 'Login'"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20v-2z"
      />
    </svg>
    <h1 class="title">{{ pageTitle }}</h1>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.navBar {
  height: 100px;
  background: #44b6fe;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  margin-bottom: 3rem;
}

.title {
  color: #fff;
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 500px;
}

.arrow {
  width: 50px;
  height: 50px;
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translate(0, -50%);
  transition: all 300ms ease-in-out;
  border: 4px solid transparent;
  border-radius: 50%;
  cursor: pointer;
  path {
    fill: #fff;
  }

  &:hover {
    border-color: #fff;
  }
}
</style>
