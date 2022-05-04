<template>
  <div class="detalle">
    <div class="personas">
      <div class="personas__item">
        <span>Médico</span>
        <p>Juan Pablo Navarrete</p>
        <p>20.984.103-7</p>
      </div>
      <div class="personas__item">
        <span>Paciente</span>
        <p>Pablo Briceño</p>
        <p>19.572.740-6</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VistaDetalle",
};
</script>

<style lang="scss" scoped>
.personas {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  &__item {
    letter-spacing: 2px;
    span {
      margin-bottom: 2rem;
      font-weight: 700;
      font-size: 20px;
    }
    p {
      opacity: 0.75;
      font-size: 18px;
    }
  }
}
</style>
