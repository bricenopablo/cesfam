<template>
  <div class="preescripciones">
    <template v-if="!detailsActive && !addPrescriptionActive">
      <div class="filters">
        <div class="filters__item">
          <input v-model="filters.run" type="text" placeholder="RUN" />
        </div>
        <div class="filters__item">
          <input v-model="filters.nombres" type="text" placeholder="NOMBRES" />
        </div>
        <div class="filters__item">
          <input
            v-model="filters.apellidos"
            type="text"
            placeholder="APELLIDOS"
          />
        </div>
        <div class="filters__item">
          <input type="text" placeholder="ACCIONES" disabled />
        </div>
      </div>
      <div class="results">
        <h2 v-if="loading" style="text-align: center">Cargando...</h2>
        <div v-else-if="!patients.length">
          <h2 style="text-align: center">No se encontraron pacientes.</h2>
          <blue-button>Crear ficha</blue-button>
        </div>
        <div
          v-else
          class="results__item"
          v-for="patient in patients"
          :key="patient._id"
        >
          <p>{{ patient.run }}</p>
          <p>{{ patient.nombres }}</p>
          <p>{{ patient.apellidos }}</p>
          <div class="action__buttons">
            <button type="button" @click="() => toggleDetails(patient)">
              Ver detalles
            </button>
            <button type="button" @click="() => togglePrescription(patient)">
              Atender
            </button>
          </div>
        </div>
      </div>
    </template>

    <modal
      title="Detalles paciente"
      v-if="detailsActive"
      @close="toggleDetails"
    >
      <form @submit.prevent="actualizarPaciente">
        <div class="form__body">
          <div class="form__field">
            <label>RUN</label>
            <input v-model="currentPatient.run" type="text" disabled />
          </div>
          <div class="form__field">
            <label>Nombres</label>
            <input v-model="currentPatient.nombres" type="text" />
          </div>
          <div class="form__field">
            <label>Apellidos</label>
            <input v-model="currentPatient.apellidos" type="text" />
          </div>
          <div class="form__field">
            <label>Fecha de nacimiento</label>
            <input
              v-model="currentPatient.fecha_nacimiento"
              type="date"
              disabled
            />
          </div>
          <div class="form__field">
            <label>Dirección</label>
            <input v-model="currentPatient.direccion" type="text" />
          </div>
          <div class="form__field">
            <label>Telefono</label>
            <input v-model="currentPatient.telefono" type="tel" />
          </div>
        </div>

        <blue-button type="submit">Actualizar</blue-button>
      </form>
    </modal>
    <modal
      inline
      title="Nueva prescripción"
      v-if="addPrescriptionActive"
      @close="togglePrescription"
    >
      <form @submit.prevent="atenderPaciente">
        <div class="form__body">
          <div class="form__field">
            <label>Receta</label>
            <textarea v-model="prescriptionForm.receta"></textarea>
          </div>
          <div class="form__field">
            <label>Observaciones</label>
            <textarea v-model="prescriptionForm.observaciones"></textarea>
          </div>
        </div>

        <blue-button type="submit">Generar</blue-button>
      </form>
    </modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import PatientsService from "@/services/PatientsService";
import BlueButton from "@/components/BlueButton.vue";
import PrescriptionsService from "@/services/PrescriptionsService";
export default {
  components: { Modal, BlueButton },
  name: "VistaPreescripciones",
  data() {
    return {
      patients: [],
      currentPatient: {},
      detailsActive: false,
      addPrescriptionActive: false,
      loading: false,
      prescriptionForm: this.prescription(),
      filters: {
        run: "",
        nombres: "",
        apellidos: "",
      },
    };
  },
  created() {
    this.obtenerPacientes();
  },
  watch: {
    filters: {
      handler() {
        this.buscarPaciente();
      },
      deep: true,
    },
  },
  methods: {
    async obtenerPacientes() {
      this.loading = true;
      try {
        const { data } = await PatientsService.getPatients();
        this.patients = data.map((p) => ({
          ...p,
          fecha_nacimiento: this.formatearFecha(p.fecha_nacimiento),
        }));
      } catch (err) {
        this.$toast.error(err.error);
      }
      this.loading = false;
    },
    async buscarPaciente() {
      this.loading = true;
      try {
        const { data } = await PatientsService.getPatients(this.filters);
        this.patients = data;
      } catch (err) {
        this.$toast.error(err.error);
      }
      this.loading = false;
    },
    async actualizarPaciente() {
      try {
        const { data } = await PatientsService.update(
          this.currentPatient._id,
          this.currentPatient
        );
        const pIndex = this.patients.findIndex(
          (p) => p._id === this.currentPatient._id
        );

        this.$set(this.patients, pIndex, data);
        this.$toast.success("Se ha actualizado el paciente.");
        this.toggleDetails();
      } catch (err) {
        this.$toast.error(err.error);
      }
    },
    async atenderPaciente() {
      try {
        this.$set(
          this.prescriptionForm,
          "medico",
          this.$store.state.userData._id
        );
        this.$set(this.prescriptionForm, "paciente", this.currentPatient._id);
        this.$set(this.prescriptionForm, "fecha", new Date());

        await PrescriptionsService.create(this.prescriptionForm);
        this.$toast.success("Se ha creado con exito la prescripción.");
        this.togglePrescription();
      } catch (err) {
        console.log(err);
        this.$toast.error(err.error);
      }
    },
    toggleDetails(patient) {
      this.currentPatient = patient;
      this.detailsActive = !this.detailsActive;
    },
    togglePrescription(patient) {
      this.prescriptionForm = this.prescription();
      this.currentPatient = patient;
      this.addPrescriptionActive = !this.addPrescriptionActive;
    },
    formatearFecha(fecha) {
      return new Date(fecha).toISOString().split("T")[0];
    },
    prescription() {
      return {
        medico: "",
        paciente: "",
        observaciones: "",
        receta: "",
        fecha: "",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.preescripciones {
  height: 450px;
  overflow-y: hidden;
  position: relative;
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
      width: 400px;
    }
    &:nth-child(4) {
      width: 100%;
      input {
        padding: 1rem 0;
      }
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
        width: 400px;
      }
    }

    .action__buttons {
      display: flex;
      gap: 0.5rem;
      width: 100%;
    }

    button {
      cursor: pointer;
      border: 2px solid transparent;
      text-transform: uppercase;
      display: block;
      width: 210px;
      border-radius: 0.7rem;
      background-color: #44b6fe;
      color: #fff;
      padding: 1rem;
      font-weight: 600;
      letter-spacing: 3px;
      transition: all 300ms ease;

      &:nth-child(2) {
        background-color: #0fe63e;

        &:hover {
          background-color: #fff;
          color: #0fe63e;
          border-color: #0fe63e;
        }
      }

      &:hover {
        background-color: #fff;
        color: #44b6fe;
        border-color: #44b6fe;
      }
    }
  }
}
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .form__body {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    align-items: center;
  }
}

.form__field {
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
}

textarea {
  resize: none;
  font-size: 18px;
  padding: 0.5rem;
  height: 250px;
}
</style>
