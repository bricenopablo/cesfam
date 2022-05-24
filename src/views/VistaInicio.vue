<template>
  <div class="inicio">
    <template v-if="userData">
      <div class="bienvenida">
        <h2>Bienvenid@</h2>
        <span>{{ userData.nombres }} {{ userData.apellidos }}</span>
      </div>
      <div class="cards">
        <card-button
          v-if="esMedico"
          text="Pacientes"
          :icon="require('@/assets/img/patient.png')"
          :to="{ name: 'Pacientes' }"
        />
        <card-button
          v-else
          text="Revisar prescripciones"
          :icon="require('@/assets/img/revisar.png')"
          :to="{ name: 'prescripciones' }"
        />
        <card-button
          :text="
            esMedico ? 'Consultar medicamentos' : 'Control de medicamentos'
          "
          :icon="require('@/assets/img/control.png')"
          :to="{ name: 'Medicamentos' }"
        />
        <card-button
          text="Cerrar sesión"
          :icon="require('@/assets/img/cerrar.png')"
          @click="salir"
        />
      </div>
    </template>
    <template v-else>
      <h2>Cargando...</h2>
    </template>
  </div>
</template>

<script>
import CardButton from "@/components/CardButton.vue";
export default {
  name: "VistaInico",
  components: { CardButton },
  computed: {
    userData() {
      return this.$store.state.userData;
    },
    esMedico() {
      return this.userData.roles.includes("medico");
    },
  },
  methods: {
    async salir() {
      this.$toast.success("Hasta la próxima :)");
      await this.$store.dispatch("logout");
      await this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style lang="scss" scoped>
.inicio {
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 250px);
}
.bienvenida {
  text-align: center;

  h2 {
    opacity: 0.75;
  }

  span {
    font-size: 25px;
    letter-spacing: 5px;
    font-weight: 600;
  }
}

.cards {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  column-gap: 4rem;
}
</style>
