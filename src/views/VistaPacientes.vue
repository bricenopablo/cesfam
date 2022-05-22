<template>
  <div class="preescripciones">
    <template v-if="!modalActive && !atenderActive">
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
          v-for="patient in patients"
          :key="patient.id"
        >
          <p>{{ patient.run }}</p>
          <p>{{ patient.nombre }}</p>
          <div class="action__buttons">
            <button @click="modalActive = true">Ver detalles</button>
            <button @click="atenderActive = true">Atender</button>
          </div>
        </div>
      </div>
    </template>

    <div class="add__modal" v-if="modalActive">
      <div class="close__btn" @click="modalActive = false">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 1024 1024"
        >
          <g transform="rotate(-90 512 512)">
            <path
              fill="currentColor"
              d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4l-66.1.3c-4.4 0-8-3.5-8-8c0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4l66-.3c4.4 0 8 3.5 8 8c0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2c0 4.4-3.6 8-8 8z"
            />
          </g>
        </svg>
      </div>
      <div class="modal__title">
        <h2>Detalles paciente</h2>
      </div>
      <form>
        <div class="form__body">
          <div class="form__field">
            <label>run</label>
            <input type="text" />
          </div>
          <div class="form__field">
            <label>Nombre</label>
            <input type="text" />
          </div>
          <div class="form__field">
            <label>edad</label>
            <input type="text" />
          </div>
          <div class="form__field">
            <label>dirección</label>
            <input type="text" />
          </div>
        </div>

        <button type="submit">Actualizar</button>
      </form>
    </div>
    <div class="add__modal" v-if="atenderActive">
      <div class="close__btn" @click="atenderActive = false">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 1024 1024"
        >
          <g transform="rotate(-90 512 512)">
            <path
              fill="currentColor"
              d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4l-66.1.3c-4.4 0-8-3.5-8-8c0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4l66-.3c4.4 0 8 3.5 8 8c0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2c0 4.4-3.6 8-8 8z"
            />
          </g>
        </svg>
      </div>
      <div class="modal__title">
        <h2>Nueva preescripción</h2>
      </div>
      <form>
        <div class="form__body">
          <div class="form__field">
            <label>Receta</label>
            <textarea></textarea>
          </div>
          <div class="form__field">
            <label>Observaciones</label>
            <textarea></textarea>
          </div>
        </div>

        <button type="submit">Generar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "VistaPreescripciones",
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
      modalActive: false,
      atenderActive: false,
    };
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
      width: 300px;
    }
    &:nth-child(2) {
      width: 700px;
    }
    &:nth-child(3) {
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
        width: 300px;
      }
      &:nth-child(2) {
        width: 700px;
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

.add__modal {
  background-color: #fff;
  width: 800px;
  height: 500px;
  border: 2px solid #44b6fe;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .modal__title {
    h2 {
      text-align: center;
    }
  }

  .close__btn {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;

    svg {
      width: 100%;
      height: 100%;
      path {
        fill: red;
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
      gap: 4rem;
      align-items: center;
      margin-bottom: 2rem;
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
      font-size: 18px;
      transition: all 300ms ease;

      &:hover {
        background-color: #fff;
        color: #44b6fe;
        border-color: #44b6fe;
      }
    }
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