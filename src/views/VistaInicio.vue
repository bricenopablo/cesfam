<template>
  <div class="inicio">
    <div class="bienvenida">
      <h2>Bienvenid@</h2>
      <span>Juan Pablo Navarrete</span>
    </div>
    <div class="cards">
      <div
        class="cards__item"
        @click="$router.push({ name: 'Preescripciones' })"
      >
        <img src="@/assets/img/revisar.png" alt="" />
        <p>Revisar preescripciones</p>
      </div>
      <div class="cards__item" @click="$router.push({ name: 'Medicamentos' })">
        <img src="@/assets/img/control.png" alt="" />
        <p>Control de medicamentos</p>
      </div>
      <div class="cards__item" @click="salir">
        <img src="@/assets/img/cerrar.png" alt="" />
        <p>Cerrar sesión</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VistaInico",
  methods: {
    salir() {
      this.$router.push({ name: "Login" }).then(() => {
        this.$toast.success("Hasta la próxima :)");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.inicio {
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 250px);
}
.bienvenida {
  text-align: center;

  h2 {
    opacity: 0.75;
  }

  span {
    font-size: 25px;
    letter-spacing: 5px;
    font-weight: 600;
  }
}

.cards {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  column-gap: 4rem;

  &__item {
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;
    cursor: pointer;

    &:hover img,
    &:hover p {
      transform: scale(1.1);
    }

    img {
      background-color: #44b6fe;
      border-radius: 0.5rem;
      padding: 1rem;
      width: 125px;
      transition: all 300ms ease-in-out;
    }

    p {
      transition: all 300ms ease-in-out;
      opacity: 0.75;
      text-align: center;
      font-size: 20px;
    }
  }
}
</style>
