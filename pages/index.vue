<template>
  <v-layout
          column
          justify-center
          align-center
  >
    <v-flex
            xs12
            sm8
            md6
    >
      <v-card min-width="600px">
        <v-card-title><h1>Войти в чат</h1></v-card-title>
        <v-card-text>
          <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
          >
            <v-text-field
                    v-model="name"
                    :counter="16"
                    :rules="nameRules"
                    label="Ваше имя"
                    required
            ></v-text-field>

            <v-text-field
                    v-model="room"
                    :rules="roomRules"
                    label="Введите комнату"
                    required
            ></v-text-field>
            <v-btn
                    :disabled="!valid"
                    color="primary"
                    class="mr-4"
                    @click="submit"
            >
              Ввойти
            </v-btn>

          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import {mapMutations} from 'vuex'
    export default {
        layout: 'empty',
        head : {
            title : 'Добро пожаловать в чат'
        },
        sockets: {
            connect: function () {
                console.log('Stas')
            }
        },
        data: () => ({
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Введите имя',
                v => (v && v.length <= 16) || 'Имя не должно превышать 16 символов',
            ],
            room: '',
            roomRules: [
                v => !!v || 'Введите комноту',
            ],
        }),

        methods: {
            ...mapMutations(["setUser"]),
            submit() {
                if (this.$refs.form.validate()) {
                    const user = {
                        name : this.name,
                        room : this.room
                    }
                    this.$socket.emit('userJoined', user, (data)=>{
                        if (typeof data === "string") {
                            console.error(data)
                        }else {
                            user.id = data.userId
                            this.setUser(user)
                            this.$router.push('/chat')
                        }
                    })
                }
            },
        },
    }
</script>
