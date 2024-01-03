const app = Vue.createApp({
    data() {
        return {
            name: "Mohamed",
            age: "22",
            showData: 1,
            x: 0,
            y: 0,
            users: [
                {name: "Ahmed", age: 12, isFav: true},
                {name: "Ali", age: 13, isFav: false}
            ],
            color: "red"
        }
    },
    methods: {
        increaseAge() {
            this.age ++;
        },
        changeName(name) {
            this.name = name;
        },
        toggleData() {
            this.showData = !this.showData;
        },
        handleEvent(e, text) {
            console.log(text);
        },
        handleMouseMove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
        toggleFav(user) {
            user.isFav = !user.isFav
        }
    }
});

app.mount("#app")