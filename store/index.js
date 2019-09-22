export const state = () =>({
    user : {},
    messages : []
})
export const mutations = {
    setUser(state, user){
        state.user = user
    },
    clearData(state){
        state.user = {}
        state.messages = []
    },
    SOCKET_newMassage(state, message) {
        state.messages.push(message)
    }

}

