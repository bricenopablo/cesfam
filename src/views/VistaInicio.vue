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
      <div class="cards__item">
        <img src="@/assets/img/control.png" alt="" />
        <p>Control de medicamentos</p>
      </div>
      <div class="cards__item" @click="$router.push({ name: 'Login' })">
        <img src="@/assets/img/cerrar.png" alt="" />
        <p>Cerrar sesión</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VistaInico",
};
</script>

<style lang="scss" scoped>
.inicio {
  padding: 0 5%;
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
      width: 100px;
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
