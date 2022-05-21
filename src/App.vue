<template>
  <div id="app">
    <NavBar :pageTitle="$route.name" />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <div class="logo">
      <img src="@/assets/img/logo-cesfam.png" alt="" />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "App",
  components: { NavBar },
  async created() {
    try {
      await this.$store.dispatch("fetchUserData");
    } catch (err) {
      console.log("Debe iniciar sesión.");
    }
  },
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  .logo {
    position: fixed;
    bottom: 1rem;
    left: 1rem;
    width: 150px;

    img {
      width: 100%;
    }
  }
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(2em);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 300ms ease-out;
}
</style>
