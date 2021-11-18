const app = Vue.createApp({
    data() {
        return {
            firstName: 'Bibhu',
            lastName: 'Padhy',
            email: 'test@test.com',
            gender: 'female',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
})

app.mount('#app')