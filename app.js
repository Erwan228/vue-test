const app = Vue.createApp({
    // data, functions
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            showBooks: 'true',
            title: 'The final template',
            author: 'Brandon Rogers',
            age: 45,
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
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        }
    }
})

app.mount('#app')