<template>
  <div class="login">
    <div class="left">
      <img src="@/assets/img/login.png" alt="" />
    </div>
    <div class="right">
      <form @submit.prevent="entrar">
        <div class="form__field">
          <label for="run">RUN</label>
          <input id="run" type="text" v-model="run" />
        </div>
        <div class="form__field">
          <label for="password">CONTRASEÑA</label>
          <input id="password" type="password" v-model="clave" />
        </div>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "VistaLogin",
  data() {
    return {
      run: "",
      clave: "",
    };
  },
  methods: {
    async entrar() {
      try {
        await this.$store.dispatch("login", {
          run: this.run,
          clave: this.clave,
        });
        await this.$router.push({ name: "Inicio" });
        this.$toast.success("Bienvenido :)");
      } catch ({ error }) {
        this.$toast.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  height: calc(100vh - 200px);

  .left {
    img {
      height: 300px;
    }
  }
}

form {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  border: 3px solid #44b7fea9;
  border-radius: 1rem;
  padding: 2rem;

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

.form__field {
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

  input {
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border: none;
    font-size: 18px;
    border-radius: 0.4rem;
    padding: 0.75rem 1.5rem;
  }
}
</style>
