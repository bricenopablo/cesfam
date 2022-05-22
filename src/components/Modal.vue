<template>
  <div class="add__modal" :class="{ inline: inline }">
    <div class="close__btn" @click="closeModal">
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
      <h2>{{ title }}</h2>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
  props: {
    title: {
      type: String,
      required: true,
    },
    inline: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.add__modal {
  background-color: #fff;
  width: 90%;
  max-width: 800px;
  max-height: 531px;
  overflow-y: auto;
  border: 2px solid #44b6fe;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
  padding: 1rem 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  &.inline {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .modal__title {
    h2 {
      text-align: center;
      padding-bottom: 2rem;
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
}
</style>
