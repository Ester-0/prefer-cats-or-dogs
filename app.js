import {
  createApp,
  ref,
  computed,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  setup() {
    const favoriteAnimal = ref("");

    const cats = computed(() => {
      return favoriteAnimal.value === "gatos";
    });


    const dogs = computed(() => {
      return favoriteAnimal.value === "perros";
    });





    return {
      favoriteAnimal,
      cats,
      dogs,


    };
  },
}).mount("#app");
