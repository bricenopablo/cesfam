<template>
  <div class="prescripciones">
    <template v-if="prescriptions.length">
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
        <div
          class="results__item"
          v-for="prescription in prescriptions"
          :key="prescription._id"
        >
          <p>{{ prescription.patient.run }}</p>
          <p>
            {{ prescription.patient.nombres }}
            {{ prescription.patient.apellidos }}
          </p>
          <button>Ver detalles</button>
        </div>
      </div>
    </template>
    <div style="margin: 3rem auto; width: fit-content" v-else>
      <h2>No hay prescripciones disponibles.</h2>
    </div>
  </div>
</template>

<script>
import PrescriptionsService from "@/services/PrescriptionsService";
export default {
  name: "VistaPrescripciones",
  data() {
    return {
      prescriptions: [],
    };
  },
  created() {
    this.obtenerPrescripciones();
  },
  methods: {
    async obtenerPrescripciones() {
      const { data } = await PrescriptionsService.getPrescriptions();
      this.prescriptions = data;
    },
  },
};
</script>

<style lang="scss" scoped>
.prescripciones {
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

    button {
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
      transition: all 300ms ease;

      &:hover {
        background-color: #fff;
        color: #44b6fe;
        border-color: #44b6fe;
      }
    }
  }
}
</style>
