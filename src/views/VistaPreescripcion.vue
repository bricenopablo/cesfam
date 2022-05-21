<template>
  <div class="preescripciones">
    <div class="filters">
      <div class="filters__item"><input type="text" placeholder="RUN" /></div>
      <div class="filters__item">
        <input type="text" placeholder="NOMBRE" />
      </div>
      <div class="filters__item">
        <input type="text" placeholder="ACCIONES" disabled />
      </div>
    </div>
    <div class="results">
      <div class="results__item" v-for="patient in patients" :key="patient.id">
        <p>{{ patient.run }}</p>
        <p>{{ patient.nombre }}</p>
        <blue-button :to="{ name: 'Detalle prescripción' }"
          >Ver detalles</blue-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import BlueButton from "@/components/BlueButton.vue";

export default {
  name: "VistaPreescripciones",
  components: { BlueButton },
  data() {
    return {
      patients: [
        {
          id: 1,
          run: "19.572.740-6",
          nombre: "Pablo Briceño",
        },
        {
          id: 2,
          run: "20.984.103-7",
          nombre: "Juan Pablo Navarrete",
        },
        {
          id: 1,
          run: "19.572.740-6",
          nombre: "Pablo Briceño",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.preescripciones {
  height: 450px;
  overflow-y: hidden;
}
.filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.25rem;
  border: 2px solid gray;
  width: 90%;
  margin-inline: auto;
  margin-bottom: 2rem;

  &__item {
    &:first-child {
      width: 200px;
    }
    &:nth-child(2) {
      width: 400px;
    }
    &:nth-child(3) {
      width: auto;
    }
  }

  input:disabled,
  input {
    background-color: #fff;
    border: none;
    outline: none;
    padding: 1rem 2rem;
    font-size: 18px;
  }
}

.results {
  width: 90%;
  margin: 0 auto;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  &__item {
    border: 2px solid gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    border-radius: 0.5rem;
    padding-right: 3rem;

    p {
      font-size: 18px;
      text-transform: uppercase;
      padding-left: 2rem;

      &:first-child {
        width: 200px;
      }
      &:nth-child(2) {
        width: 400px;
      }
      &:nth-child(3) {
        width: auto;
      }
    }
  }
}
</style>
