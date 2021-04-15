<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12">
                <h1>HTTP with Axios</h1>

                <div v-if="messeage" class="row my-4">
                    <div class="alert" :class="messageClass">
                        {{ messeage }}
                    </div>
                </div>

                <form>
                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input v-model="user.username" type="text" class="form-control" id="username" />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input v-model="user.email" type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <button @click.prevent="submit" type="submit" class="btn btn-primary">Submit</button>
                </form>
                <br> <hr>

                <button @click="fetchData" class="btn btn-primary">Get Data</button>
                <ul class="list-group my-4">
                    <li class="list-group-item" v-for="(user, index) in users" :key="index">{{ user.username }} - {{ user.email }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "App",
    data() {
        return {
            user: {
                username: "",
                email: "",
            },
            users: [],
            messeage: "",
            messageClass: "",
        };
    },
    methods: {
        submit() {
            if (this.user.username && this.user.email) {
                axios
                    .post('', this.user)
                    .then((response) => {
                        console.log(response);
                        this.messageClass = 'alert-success'
                        this.messeage = 'Data has been sent succefully'
                    })
                    .catch((error) => {
                        console.log(error);
                    });

                    this.user.username = '';
                    this.user.email = '';


            } else {
                this.messageClass = 'alert-danger'
                this.messeage = "Please Fill up the info";
            }
        },
        fetchData() {
            axios.get('')
                .then(response => {
                    const data = response.data
                    const resultArray = [];

                    for(let key in data) {
                        resultArray.push(data[key])
                    }
                    this.users = resultArray;
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },
};
</script>
