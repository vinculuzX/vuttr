<template>
  <div id="modalFormView" class="modal">
    <div class="modal__container  modal--primary">
      <div class="modal__header flex row">
        <h3 class="modal__title"><strong>+</strong> Add new Tool</h3>
        <i @click="$emit('close')"
          ><img src="../assets/images/Icon-Close-2px.svg"
        /></i>
      </div>
      <div class="modal__content">
        <form
          class="modal__form flex column"
          @submit.prevent="submitRegisterNewTool"
        >
          <label>Tool Name</label>
          <input
            type="text"
            placeholder="hotel"
            v-model="tool.title"
            name="toolname"
            v-validate="'required'"
          />
          <div
            v-if="submitted && errors.has('toolname')"
            class="invalid-feedback"
          >
            {{ errors.first("toolname") }}
          </div>

          <label>Tool Link</label>
          <input
            type="text"
            placeholder="https://gihub.com"
            v-model="tool.link"
          />
          <label>Tool Description</label>
          <textarea
            rows="5"
            v-model="tool.description"
            name="description"
            v-validate="'required'"
          ></textarea>
          <div
            v-if="submitted && errors.has('description')"
            class="invalid-feedback"
          >
            {{ errors.first("description") }}
          </div>
          <label>Tags</label>
          <input
            type="text"
            placeholder="tags1 tags2"
            v-model="tool.tags"
            @blur="convertString2Array"
            name="tags"
            v-validate="'required'"
          />
          <div v-if="submitted && errors.has('tags')" class="invalid-feedback">
            {{ errors.first("tags") }}
          </div>
          <button type="submit" class="primarySuccess">
            Add Tool
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ModalForm",
  data: function() {
    return {
      submitted: false,
      tool: {
        title: "",
        link: "",
        description: "",
        tags: ""
      }
    };
  },
  methods: {
    convertString2Array: function() {
      // converter tags string to tags string 2 array
      this.$data.tool.tags = this.$data.tool.tags.split(" ");
    },
    submitRegisterNewTool: function() {
      this.submitted = true;
      this.$validator.validateAll().then(valid => {
        if (valid) {
          this.$emit("inputDataTool", this.$data.tool);
          setTimeout(() => {
            this.$emit("close");
          }, 500);
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
#modalFormView
  label,input
      margin 10px 0px
  label
      font-weight bolder
  button
      margin-top 10px
      margin-left 69.5%
  i
    >img
        height 15px
        cursor pointer
  h3
    >img
        height 20px
        margin-right 7px
</style>
