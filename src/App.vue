<template>
  <div id="app">
    <a href="https://vitejs.dev" target="_blank">
      <img src="@/assets/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <hr>
    <h2>Example with array of strings</h2>
    <div class="options">
      <p>
        <b>Options:</b>
      </p>
      <div>
        <input type="checkbox" v-model="disabledName">
        disabled
      </div>
      <div>
        <input type="checkbox" v-model="searchableName">
        searchable
      </div>
    </div>
    <VueBootstrapSelect
      v-model="selectedName"
      :options="names"
      :disabled="disabledName"
      :searchable="searchableName"
    />
    <hr>
    <h2>Example with array of objects</h2>
    <div class="options">
      <p>
        <b>Options:</b>
      </p>
      <div>
        <input type="checkbox" v-model="disabledContinent">
        disabled
      </div>
      <div>
        <input type="checkbox" v-model="searchableContinent">
        searchable
      </div>
    </div>
    <VueBootstrapSelect
      v-model="selectedContinent"
      :options="contients"
      :disabled="disabledContinent"
      disabled-prop="inactive"
      :searchable="searchableContinent"
    />
  </div>
</template>

<script>
import VueBootstrapSelect from '@/components/VueBootstrapSelect.vue';

export default {
  name: "App",
  components: {
    VueBootstrapSelect
  },
  data() {
    return {
      names: [
        "John Doe",
        "Olive Yew",
        "Aida Bugg",
        "Teri Dactyl",
        "Paige Turner"
      ],
      contients: [
        { value: 0, text: "Africa" },
        { value: 1, text: "America" },
        { value: 2, text: "Asia" },
        { value: 3, text: "Europe" },
        { value: 4, text: "Oceania" },
        { value: 5, text: "Antartica" }
      ],
      selectedName: null,
      searchableName: false,
      disabledName: false,
      selectedContinent: null,
      searchableContinent: false,
      disabledContinent: false
    };
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #a1b3c5;
  padding: 2em 1em;
}

.options {
  text-align: left;
  padding: 1em 0em;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

hr {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
