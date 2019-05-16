<template>
  <div id="app">
    <main>
      <h1 class="title">VUTTR</h1>
      <h2>Very Useful Tools to Remember</h2>
      <div class="resources">
        <div class="resources__search">
          <input
            type="text"
            class="input--small"
            v-model="search"
            @keyup="filteringList"
            placeholder="search"
          />
          <input
            type="checkbox"
            v-model="filterByTagsChecked"
            checked
            id="checkboxInput"
          /><label for="checkboxInput"><span>search in tags only</span></label>
        </div>
        <div class="resources__newTool">
          <button
            type="submit"
            @click="showModal = true"
            class="primaryNeutral"
          >
            <span>+</span>
            Add
          </button>
        </div>
      </div>
      <div class="content">
        <card
          v-for="item in listItem"
          :key="item.id"
          :id="item.id"
          :description="item.description"
          :title="item.title"
          :tags="item.tags"
          :link="item.link"
          @removeDataArray="removeCard"
        >
        </card>
      </div>
    </main>
    <modal-form
      v-if="showModal"
      @close="showModal = false"
      @inputDataTool="updateDataTool"
    ></modal-form>
  </div>
</template>

<script>
import ModalForm from "@/components/ModalFormComponent";
import Card from "@/components/CardComponent";
import axios from "axios";
import { setTimeout } from "timers";
const URL = "http://localhost:3000";
export default {
  name: "app",
  components: { ModalForm, Card },
  data: function() {
    return {
      showModal: false,
      search: "",
      filterByTagsChecked: false,
      listItem: [
        {
          id: 0,
          title: "",
          link: "",
          description: "",
          tags: []
        }
      ]
    };
  },
  mounted() {
    axios
      .get(`${URL}/tools`)
      .then(res => (this.listItem = res.data))
      .catch(error => console.log(error));
  },
  methods: {
    updateDataTool: function(data) {
      axios.post(`${URL}/tools`, data).then(() => {
        axios.get(`${URL}/tools`).then(res => (this.listItem = res.data));
      });
    },
    removeCard: function(id) {
      axios.delete(`${URL}/tools/${id}`).then(() => {
        axios.get(`${URL}/tools`).then(res => (this.listItem = res.data));
      });
    },
    filteringList: function() {
      setTimeout(() => {
        if (this.filterByTagsChecked) {
          axios
            .get(`${URL}/tools?tags_like=${this.search}`)
            .then(res => (this.listItem = res.data));
        } else {
          axios
            .get(`${URL}/tools?q=${this.search}`)
            .then(res => (this.listItem = res.data));
        }
      }, 1500);
    }
  }
};
</script>
<style lang="stylus" scoped>
#app
  width 960px
  margin 10vh auto
  .title
    margin 2vw 0px
  .resources
    width 100%
    margin 5vw 0px
    display flex
    >div
      width 50%
    &__newTool
      display flex
      justify-content flex-end
      &>button
        span
          font-size 18px
          font-weight 900
  .content
    margin 10px 0px;
</style>
