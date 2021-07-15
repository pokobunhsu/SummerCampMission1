const { reactive, onBeforeMount } = Vue;

Vue.createApp({
    setup() {
        const state = reactive({
            info: null,
        })
        onBeforeMount(() => {
            axios.get('https://randomuser.me/api/?results=10')
            .then(response => {
                state.info = response.data.results
                console.log(response)
            })
            .catch(function (response) {
                console.log(response);
            })
        })
        return { state };
    },
    data() {
        return {
            status : true,
            info: null
        }
    },
    methods: {
        
    },
    mounted() {
        console.log(this.state)
    },
}).mount('#all')


