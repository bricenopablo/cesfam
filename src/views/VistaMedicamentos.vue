<template>
  <div class="medicamentos">
    <div class="filters">
      <div class="filters__item">
        <input v-model="filtros.codigo" type="text" placeholder="CODIGO" />
      </div>
      <div class="filters__item">
        <input v-model="filtros.nombre" type="text" placeholder="NOMBRE" />
      </div>
      <div class="filters__item">
        <input v-model="filtros.cantidad" type="text" placeholder="CANTIDAD" />
      </div>
      <div class="filters__item">
        <input
          v-model="filtros.fabricante"
          type="text"
          placeholder="FABRICANTE"
        />
      </div>
      <div class="filters__item">
        <input type="text" placeholder="ACCIONES" disabled />
      </div>
    </div>
    <div style="margin: 3rem auto; width: fit-content" v-if="loading">
      <h2>Cargando...</h2>
    </div>
    <template v-else-if="drugs.length">
      <div class="results">
        <div class="results__item" v-for="drug in drugs" :key="drug._id">
          <p>{{ drug.codigo }}</p>
          <p>{{ drug.nombre }}</p>
          <p>{{ drug.cantidad }}</p>
          <p>{{ drug.fabricante }}</p>
          <blue-button type="button">Ver detalles</blue-button>
        </div>
      </div>
    </template>
    <div style="margin: 3rem auto; width: fit-content" v-else>
      <h2>No hay medicamentos disponibles.</h2>
    </div>

    <div class="add__btn" @click="toggleModal" v-if="!modalActive && !esMedico">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      </svg>
    </div>
    <modal
      title="Nuevo medicamento"
      :modalActive="modalActive"
      @close="toggleModal"
    >
      <form @submit.prevent="agregarMedicamento">
        <div class="form__body">
          <div class="form__field">
            <label>Código</label>
            <input type="text" v-model="drugForm.codigo" />
          </div>
          <div class="form__field">
            <label>Nombre</label>
            <input type="text" v-model="drugForm.nombre" />
          </div>
          <div class="form__field">
            <label>Descripción</label>
            <input type="text" v-model="drugForm.descripcion" />
          </div>
          <div class="form__field">
            <label>Fabricante</label>
            <input type="text" v-model="drugForm.fabricante" />
          </div>
          <div class="form__field">
            <label>Gramaje</label>
            <input type="text" v-model="drugForm.gramaje" />
          </div>
          <div class="form__field">
            <label>Cantidad</label>
            <input type="number" v-model="drugForm.cantidad" />
          </div>
          <div class="form__field">
            <label>Precio</label>
            <input type="number" v-model="drugForm.precio" />
          </div>
        </div>

        <blue-button type="submit">Agregar</blue-button>
      </form>
    </modal>
  </div>
</template>

<script>
import MedicinesService from "@/services/MedicinesService";
import BlueButton from "@/components/BlueButton.vue";
import Modal from "@/components/Modal.vue";

export default {
  name: "VistaMedicamentos",
  components: { BlueButton, Modal },
  computed: {
    esMedico() {
      return this.$store.state.userData.roles.includes("medico");
    },
  },
  data() {
    return {
      drugs: [],
      modalActive: false,
      waitingResponse: false,
      loading: false,
      drugForm: {
        codigo: "",
        descripcion: "",
        fabricante: "",
        nombre: "",
        cantidad: 0,
        gramaje: "",
        precio: 0,
      },
      filtros: {
        codigo: "",
        nombre: "",
        cantidad: "",
        fabricante: "",
      },
    };
  },
  created() {
    this.obtenerMedicamentos();
  },
  watch: {
    filtros: {
      handler() {
        this.buscarMedicamentos();
      },
      deep: true,
    },
  },
  methods: {
    async obtenerMedicamentos() {
      this.loading = true;
      const { data } = await MedicinesService.getMedicines();

      this.drugs = data;
      this.loading = false;
    },
    async agregarMedicamento() {
      this.waitingResponse = true;
      try {
        const { data } = await MedicinesService.create(this.drugForm);
        this.drugs.unshift(data);

        this.$toast.success("Se ha agregado el medicamento exitosamente.");
        this.toggleModal();
      } catch (err) {
        this.$toast.error(err.error);
      }
      this.waitingResponse = false;
    },
    async buscarMedicamentos() {
      this.loading = true;
      const { data } = await MedicinesService.getMedicines(this.filtros);

      this.drugs = data;
      this.loading = false;
    },
    toggleModal() {
      this.modalActive = !this.modalActive;
    },
  },
};
</script>

<style lang="scss" scoped>
.medicamentos {
  height: 450px;
  overflow-y: hidden;
  position: relative;
}

.add__btn {
  background-color: #44b6fe;
  border-radius: 50%;
  position: fixed;
  bottom: 1rem;
  right: 5%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    width: 2rem;
    height: 2rem;
    path {
      fill: #fff;
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
      width: 140px;
    }
    &:nth-child(2) {
      width: 200px;
    }
    &:nth-child(3) {
      width: 150px;
    }
    &:nth-child(4) {
      width: 180px;
    }
    &:nth-child(5) {
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    border-radius: 0.5rem;
    border: 2px solid gray;
    padding-right: 3rem;

    p {
      font-size: 18px;
      text-transform: uppercase;
      padding-left: 2rem;

      &:first-child {
        width: 140px;
      }
      &:nth-child(2) {
        width: 200px;
      }
      &:nth-child(3) {
        width: 150px;
      }
      &:nth-child(4) {
        width: 180px;
      }
      &:nth-child(5) {
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
