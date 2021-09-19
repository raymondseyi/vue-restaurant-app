<template>
    <h4>Sign Up</h4>
    <input type="text" class="my-2 form-control" placeholder="First Name" v-model="firstName">
    <input type="text" class="my-2 form-control" placeholder="Last Name" v-model="lastName">
    <input type="text" class="my-2 form-control" placeholder="Phone Number" v-model="phoneNumber">
    <input type="email" class="my-2 form-control" placeholder="Email" v-model="email">
    <input type="text" class="my-2 form-control" placeholder="Password" v-model="password">
    <button class="btn btn-success my-2" @click="signUp">Sign Up</button>
</template>

<script>
export default {
    data(){
        return{
            firstName:'',
            lastName:'',
            phoneNumber:'',
            email:'',
            password:'',
            cart:[],
            date:'',
            time:''

        }
    },
    methods:{
        signUp(){
            var myDate = new Date;
            let allTime = myDate.toLocaleTimeString()
            let allDate =  myDate.toLocaleDateString()
            let uniqueId = Math.round(Math.random() * 1000000000000)
            let {firstName,lastName,email,phoneNumber,password,cart}=this
            let user = {firstName,lastName,email,phoneNumber,password,allTime,allDate,uniqueId,cart}
            this.$emit('signUp',user)
        }
    }
}
</script>