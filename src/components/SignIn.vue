<template>
    <h4>Sign In</h4>
    <input type="text" class="my-2 form-control" placeholder="Email" v-model="enteredEmail">
    <input type="password" class="my-2 form-control" placeholder="Password" v-model="enteredPassword">
    <button class="btn btn-success my-2" @click="this.$emit('signIn',enteredEmail,enteredPassword)">Sign In</button>
</template>
<script>
export default {
    data(){
        return{
            enteredEmail:'',
            enteredPassword:''
        }
    }
}
</script>