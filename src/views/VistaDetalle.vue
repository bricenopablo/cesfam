<template>
  <div class="detalle">
    <div class="personas">
      <div class="personas__item">
        <div class="item__avatar">
          <img src="@/assets/img/male-doctor.png" alt="" />
        </div>
        <div class="item__info">
          <span>Médico</span>
          <p>Juan Pablo Navarrete</p>
          <p>20.984.103-7</p>
        </div>
      </div>
      <div class="personas__item">
        <div class="item__avatar">
          <img src="@/assets/img/patient.png" alt="" />
        </div>
        <div class="item__info">
          <span>Paciente</span>
          <p>Pablo Briceño</p>
          <p>19.572.740-6</p>
        </div>
      </div>
    </div>
    <div class="info">
      <div class="info__item">
        <label for="">Receta</label>
        <textarea readonly>asdfgahsdjfasdf</textarea>
      </div>
      <div class="info__item">
        <label for="">Observaciones</label>
        <textarea readonly>asdfgahsdjfasdf</textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VistaDetalle",
  data() {
    return {
      id: this.$route.params.id,
      patient: {},
    };
  },

  created() {},
};
</script>

<style lang="scss" scoped>
.detalle {
  width: 90%;
  margin-inline: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4rem;
}
.personas {
  display: flex;
  gap: 4rem;

  &__item {
    display: flex;
    gap: 2rem;
    width: 450px;

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

.item__avatar {
  img {
    width: 150px;
  }
}

.info {
  display: flex;
  gap: 4rem;

  &__item {
    width: 450px;
    display: flex;
    flex-direction: column;
    label {
      font-size: 20px;
      font-weight: 600;
    }
    input:focus,
    textarea:focus {
      outline: none !important;
    }
    textarea {
      resize: none;
      font-size: 18px;
      padding: 0.5rem;
      height: 250px;
    }
  }
}
</style>
