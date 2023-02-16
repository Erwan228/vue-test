const app = Vue.createApp({
    // data, functions
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            title: 'The final template',
            author: 'Brandon Rogers',
            Age: 45,
        }
    }
})

app.mount('#app')