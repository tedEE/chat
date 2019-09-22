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
    }
}
export const actions = {
    SOCKET_newMassage(ctx, data){
        console.log('Massage received', data)
    }
}
