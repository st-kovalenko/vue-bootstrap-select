import VueBootstrapSelect from "./components/VueBootstrapSelect.vue";

export default {
    install: (app, options) => {
        app.component("VueBootstrapSelect", VueBootstrapSelect);
    },
};