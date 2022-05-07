<template>
  <div class="medicamentos">
    <div class="filters">
      <div class="filters__item">
        <input type="text" placeholder="CODIGO" />
      </div>
      <div class="filters__item">
        <input type="text" placeholder="NOMBRE" />
      </div>
      <div class="filters__item">
        <input type="text" placeholder="CANTIDAD" />
      </div>
      <div class="filters__item">
        <input type="text" placeholder="FABRICANTE" />
      </div>
      <div class="filters__item">
        <input type="text" placeholder="ACCIONES" disabled />
      </div>
    </div>
    <div class="results">
      <div class="results__item" v-for="drug in drugs" :key="drug.id">
        <p>{{ drug.codigo }}</p>
        <p>{{ drug.nombre }}</p>
        <p>{{ drug.cantidad }}</p>
        <p>{{ drug.fabricante }}</p>
        <button>Ver detalles</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VistaPreescripciones",
  data() {
    return {
      drugs: [
        {
          codigo: 1,
          nombre: "Paracetamol",
          cantidad: 2000,
          fabricante: "Bayer",
        },
        {
          codigo: 2,
          nombre: "Ketadol",
          cantidad: 5000,
          fabricante: "Que se cho",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.medicamentos {
  height: 450px;
  overflow-y: hidden;
}
.filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
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

  &__item {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
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
