const app = Vue.createApp({
    // data, functions
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            url: 'https://evrysome.com',
            showBooks: 'true',
            books: [
                { title: 'name of the wind', author: 'patrick star' },
                { title: 'Gale slash', author: 'Fuu' },
                { title: 'Turning to piss', author: 'Possumpecker' },
            ]
            // title: 'The final template',
            // author: 'Brandon Rogers',
            // age: 45,
            //x: 0,
            //y: 0,
        }
    },
    methods: {
        //changeTitle(title) {
        //this.title = 'words of CUM'
        //this.title = title
        //}
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        // handleEvent(e, data) {
        //     console.log(e, e.type)
        //     if (data) {
        //         console.log(data)
        //     }
        // },
        // handleMousemove(e) {
        //     this.x = e.offsetX
        //     this.y = e.offsetY
        //}
    }
})

app.mount('#app')