<template>
  <div class="card">
    <div class="card__header flex row">
      <h4>
        <a :href="link">{{ title }}</a>
      </h4>
      <button class="quartiaryNeutral" @click="showModal = true">
        <img src="../assets/images/Icon-Close-2px.svg" /> remove
      </button>
    </div>
    <div class="card__content">
      <div class="small">
        {{ description }}
      </div>
      <div class="smallest">
        {{ breakTagsArray(tags) }}
      </div>
    </div>
    <transition name="slide-fade">
      <modal
        v-if="showModal"
        @close="showModal = false"
        @removeDataTool="updateDataTool(id)"
        >{{ title }}</modal
      >
    </transition>
  </div>
</template>

<script>
import Modal from "@/components/ModalComponent";
export default {
  name: "Card",
  components: {
    Modal
  },
  props: {
    id: Number,
    title: String,
    link: String,
    description: String,
    tags: Array
  },
  data: function() {
    return {
      showModal: false
    };
  },
  methods: {
    updateDataTool: function(data) {
      this.$emit("removeDataArray", data);
    },
    breakTagsArray: function(tags) {
      if (tags) {
        return tags
          .map(v => {
            return `#${v}`;
          })
          .join(" ");
      }
    }
  }
};
</script>

<style lang="stylus" scoped></style>
