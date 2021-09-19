<template>
  <Navbar/>
  <!-- <SignUp @signUp='signUp'/> -->
  <router-view @signUp='signUp' @signIn='signIn' @addFood='addFood' :allFoods='allFoods' @deleteFood='deleteFood' @saveChanges='saveChanges' @addToCart='addToCart'  />
</template>

<script>
// import SignUp from "./components/SignUp.vue";
import Navbar from "./components/Navbar.vue";
export default {
  
  name: 'App',
  data(){
    return{
      allUsers: JSON.parse(localStorage.getItem('allUsers'))||[],
      allFoods: JSON.parse(localStorage.getItem('allFoods'))||[],
      indexOfUser:JSON.parse(localStorage.getItem('indexOfUser')),
    }
  },
  methods:{
    signUp(user){
      this.allUsers=[...this.allUsers,user]
      localStorage.setItem('allUsers',JSON.stringify(this.allUsers))
      console.log(this.allUsers);
      this.$router.push({name:'SignIn'})
    },
    signIn(enteredEmail,enteredPassword){
      let found=this.allUsers.find((val)=>enteredEmail==val.email&&enteredPassword==val.password)
      if (!found){
        alert('incorrect details')
      }
      else{
        alert('welcome')
        let indexOfUser=this.allUsers.indexOf(found)
        localStorage.setItem('indexOfUser',JSON.stringify(indexOfUser))
        console.log(indexOfUser);
        this.$router.push({name:'dashboard'})
      }
      console.log(found);
    },
    addFood(food){
      this.allFoods=[...this.allFoods,food]
      localStorage.setItem('allFoods',JSON.stringify(this.allFoods))
    },
    saveChanges(editedIndex,editedFood){
      this.allFoods[editedIndex] = editedFood
      localStorage.setItem('allFoods',JSON.stringify(this.allFoods))
      console.log(this.allFoods);
      alert(`Goods updated`)
    },
    // editFood(index){
    //   console.log(index);
    // },
    deleteFood(index){
      this.allFoods=this.allFoods.filter((_,i)=>i!=index)
      localStorage.setItem('allFoods',JSON.stringify(this.allFoods))
    },
    addToCart(food){
      this.allUsers[this.indexOfUser].cart=[...this.allUsers[this.indexOfUser].cart,food]
      localStorage.setItem('allUsers',JSON.stringify(this.allUsers))
      //console.log(food)
      //console.log(this.indexOfUser)
      console.log(this.allUsers[this.indexOfUser].cart)
      console.log(food)
    }
  },
  
  components:{Navbar}
}
</script>
