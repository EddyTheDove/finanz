export default {
    data: () => ({
        isOpen: false,
        ghost: {},
        categories: []
    }),

    methods: {
        open () {
            this.isOpen = true
        },

        close () {
            this.isOpen = false
        }
    }
}
