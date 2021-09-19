<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-4">
                <h4>Enter Details of Goods</h4>
                <input type="text" class="my-2 form-control" placeholder="Name of Food" v-model="name">
                <input type="number" class="my-2 form-control" placeholder="Price of food" v-model="price">
                <input type="number" class="my-2 form-control" placeholder="Quantity of Food" v-model="quantity">
                <input type="text" class="my-2 form-control" placeholder="Description of Food" v-model="description">
                <input type="text" class="my-2 form-control" placeholder="Image Location" v-model="image">
                 <span>
                    Available From
                    <input type="time" class="my-2 form-control w-25 d-inline" placeholder="Time Available From" v-model="timeFrom"> To
                    <input type="time" class="my-2 form-control w-25 d-inline" placeholder="Time Available To" v-model="timeTo">
                </span>
                <button @click="addFood" class="btn btn-success d-block w-100">Add Food</button>
                
            </div>
            <div class="col-8">
                <h4>Table of Goods</h4>
                <table border="1" class="table table-striped">
                    <thead class="thead-dark">
                        <tr>
                            <th>S/N</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Description</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(food,index) in allFoods" :key='index'>
                            <td>{{index+1}}</td>
                            <td><img class="imgsize" :src="food.image" ></td>
                            <td>{{food.name}}</td>
                            <td>{{food.price}}</td>
                            <td>{{food.quantity}}</td>
                            <td>{{food.description}}</td>
                            <td>{{food.timeFrom}}</td>
                            <td>{{food.timeTo}}</td>
                            <td><i data-toggle="modal" data-target="#exampleModal" @click="editFood(index)" class="fas fa-pen-square w-100 d-inline btn btn-info"></i>
                            <i @click="$emit('deleteFood',index)"  class="fas fa-trash-alt d-inline mx-2 btn btn-danger"></i>
                            </td>
                            
                        </tr>
                    </tbody>
                    
                </table>
                <!-- Modal for Edit Details -->
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <h4>Enter Details of Goods</h4>
                        <input type="text" class="my-2 form-control" placeholder="Name of Food" v-model="name">
                        <input type="number" class="my-2 form-control" placeholder="Price of food" v-model="price">
                        <input type="number" class="my-2 form-control" placeholder="Quantity of Food" v-model="quantity">
                        <input type="text" class="my-2 form-control" placeholder="Description of Food" v-model="description">
                        <input type="text" class="my-2 form-control" placeholder="Image Location" v-model="image">
                        <span>
                            <span>
                                <h4> Available From    To</h4>
                            </span>
                            <input type="time" class="my-2 form-control w-25 d-inline" placeholder="Time Available From" v-model="timeFrom">
                            <input type="time" class="my-2 form-control w-25 d-inline" placeholder="Time Available To" v-model="timeTo">
                        </span>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button  @click="getChanges" type="button" class="btn btn-primary" data-dismiss="modal">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
    <!-- End of Edit Details Modal -->
            </div>
        </div>
    </div>
     
</template>

<script>
export default {
    data(){
        return{
            name:'',
            price:'',
            quantity:'',
            image:'',
            timeTo:'',
            timeFrom:'',
            description:'',
            uniqueId:'',
            editedFood:'',
            editedIndex:'',

            // allFoods: JSON.parse(localStorage.getItem('allFoods')),
        }
    },
    methods:{
        addFood(){
            let {name,price,quantity,image,timeFrom,timeTo,description,uniqueId} = this
            this.uniqueId = Math.round(Math.random()*1000000)
            let food = {name,price,quantity,image,timeFrom,timeTo,description,uniqueId}
            this.$emit('addFood',food)
        },
        editFood(index){
            let currentFood = this.allFoods[index]
            this.name=currentFood.name
            this.price= currentFood.price
            this.quantity= currentFood.quantity
            this.image= currentFood.image
            this.timeTo= currentFood.timeTo
            this.timeFrom= currentFood.timeFrom
            this.description=currentFood.description
            this.uniqueId=currentFood.uniqueId
            // this.editedFood ={}
            this.editedIndex=index
        },
        getChanges(){
            let {name,price,quantity,image,timeFrom,timeTo,description,uniqueId}=this
            let editedFood = {name,price,quantity,image,timeFrom,timeTo,description,uniqueId}
            this.$emit('saveChanges',this.editedIndex,editedFood)
        },
    
    },
    props:['allFoods']
}
</script>
<style>
    .imgsize{
        width: 30%;
        height: 30%;
    }
</style>