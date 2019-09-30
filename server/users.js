class Users {
    constructor(){
        this.users = []
    }

    add(user){
        this.users.push(user)
    }

    get(id){
        return this.users.find((user)=>user.id === id)
    }

    remove(id){
        const user = this.get(id)

        if (user) {
            this.users = this.users.filter((user)=>user.id !== id)
        }

        return user
    }

    // получение всех пользователе находящихся в данной комнате
    getByRoom(room){
        return this.users.filter((user)=> user.room === room)
    }
}

module.exports = function () {
    // будет вызываться также как и express
    return new Users()
}
