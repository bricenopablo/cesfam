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
    <div class="info">
      <div class="info__item">
        <label for="">Receta</label>
        <textarea name="" id="" cols="30" rows="10">asdfgahsdjfasdf</textarea>
      </div>
      <div class="info__item">
        <label for="">Observaciones</label>
        <textarea name="" id="" cols="30" rows="10">asdfgahsdjfasdf</textarea>
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
.detalle {
  width: 90%;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.personas {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;

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

.info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;

  &__item {
    display: flex;
    flex-direction: column;
    label {
      font-size: 20px;
      font-weight: 600;
    }
    input:focus,
    textarea:focus {
      outline: none !important;
      border-color: #44b6fe;
      box-shadow: 0 0 10px #44b6fe;
    }
    textarea {
      resize: none;
      font-size: 18px;
      padding: 0.5rem;
    }
  }
}
</style>
