<template>
  <div class="login">
    <div class="left">
      <img src="@/assets/img/login.png" alt="" />
    </div>
    <div class="right">
      <form>
        <div class="form__field">
          <label>RUN</label>
          <input type="text" />
        </div>
        <div class="form__field">
          <label>Contraseña</label>
          <input type="password" />
        </div>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "VistaLogin",
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding-top: 3rem;

  .left {
    img {
      width: 200px;
    }
  }
}

form {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;

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
