const vm = Vue.createApp({
  data() {
    return {
      cards: {},
      tiles: [],
      brush: "♟️"
    };
  },
  methods: {
    generateCombat() {
      let width = 9;
      let height = 9;
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          this.tiles.push({ x: x, y: y, id: y * width + x });
        }
      }
    },
    spawnEntity(id) {
      this.tiles[id].occupied = this.brush;
    },
    clearTile(event, id) {
      event.preventDefault();
      delete this.tiles[id].occupied;
    },
    newCard() {
      let newID = Date.now().toString();
      this.cards[newID] = {
        id: newID,
        name: "Untitled",
        weaponType: "Blade",
        description: "Description",
        cost: 1,
        value: 1,
      };
    },
    deleteCard(id) {
      delete this.cards[id];
    },
  },
}).mount("#app-root");
