<template>
  <div id="modalContent" class="modal">
    <div class="modal__container  modal--primary">
      <div class="modal__header flex row">
        <h3 class="modal__title">Modal Header</h3>
        <i @click="$emit('close')"
          ><img src="../assets/images/Icon-Close-2px.svg"
        /></i>
      </div>
      <div class="modal__content">
        <p>Are you sure you want to remove <slot></slot> ?</p>
      </div>
      <div class="modal__action flex row">
        <button class="primaryDanger" @click="$emit('close')">cancel</button>
        <button class="primarySuccess" @click="removeTool" type="submit">
          Yes, remove
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  methods: {
    removeTool: function() {
      this.$emit("removeDataTool");
    }
  }
};
</script>

<style lang="stylus" scoped>
#modalContent
  i
    >img
        height 15px
        cursor pointer
</style>
