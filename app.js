const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false
        };
    },
    methods: {
        boxSelected(box) {
            switch (box) {
                case 'A':
                    return this.boxASelected = !this.boxASelected
                case 'B':
                    return this.boxBSelected = !this.boxBSelected
                case 'C':
                    return this.boxCSelected = !this.boxCSelected
                default:
                    break;
            }
        }
    }
});

app.mount('#styling');
