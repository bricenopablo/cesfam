<template>
  <div class="prescripciones">
    <div style="margin: 3rem auto; width: fit-content" v-if="loading">
      <h2>Cargando...</h2>
    </div>
    <template v-else-if="prescriptions.length">
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
          <p>{{ prescription.paciente.run }}</p>
          <p>
            {{ prescription.paciente.nombres }}
            {{ prescription.paciente.apellidos }}
          </p>
          <blue-button
            :to="{
              name: 'Detalle prescripción',
              params: { id: prescription._id },
            }"
            >Ver detalles</blue-button
          >
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
import PatientsService from "@/services/PatientsService";
import BlueButton from "@/components/BlueButton.vue";
export default {
  name: "VistaPrescripciones",
  components: { BlueButton },
  data() {
    return {
      prescriptions: [],
      loading: false,
    };
  },
  created() {
    this.obtenerPrescripciones();
  },
  methods: {
    async obtenerPrescripciones() {
      this.loading = true;
      try {
        const { data } = await PrescriptionsService.getPrescriptions();
        const prescripciones = await Promise.all(
          data.map(async (p) => ({
            ...p,
            paciente: (await PatientsService.getPatientById(p.paciente)).data,
          }))
        );

        this.prescriptions = prescripciones;
      } catch (err) {
        console.log(err);
      }
      this.loading = false;
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
