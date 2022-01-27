const vm = Vue.createApp({
  data() {
    return {
      cards: {},
      hand: [],
    };
  },
  methods: {
      newCard() {
          let newID = Date.now().toString();
          this.cards[newID] = {
              id: newID,
              name: "Untitled",
              weaponType: "Blade",
              description: "Description",
              cost: 1,
              value: 1
          }
      },
      deleteCard(id) {
          delete this.cards[id];
      }
  },
}).mount("#app-root");
