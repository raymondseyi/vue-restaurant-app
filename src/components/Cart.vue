<template>
        <div class="container main-section">  
            <div class="row">  
                <div class="col-lg-12 pb-2">  
                    <h2> Welcome, {{userDetails.firstName}} </h2>
                </div>  
                <div class="col-lg-12 pl-3 pt-3">  
                    <table class="table table-hover border bg-white">  
                        <thead>  
                            <tr>  
                                <th> <h4>  Product Details </h4> </th>  
                                <th> <h4> Price </h4>  </th>  
                                <th style="width:10%;"> <h4> Quantity  </h4> </th>  
                                <th> <h4> Subtotal </h4> </th>  
                                <th> <h4> Action </h4> </th>  
                            </tr>  
                        </thead>  
                        <tbody>  
                            <tr  v-for="(item,index) in cart" :key='index'>  
                                <td>  
                                    <div class="row">  
                                        <div  class="col-lg-2 Product-img">  
                                            <img src="../assets/burgerfries.jpg" alt="..." class="img-responsive"/>  
                                        </div>  
                                        <div class="col-lg-10">  
                                            <h5 class="nomargin"><b>{{item.name}}</b> </h5>  
                                            <p>{{item.description}} </p>  
                                        </div>  
                                    </div>  
                                </td>  
                                <td> <strong>{{item.price}}</strong> </td>  
                                <td data-th="Quantity">  
                                    <b> <input type="number" class="form-control text-center" value="1"> </b>  
                                </td>  
                                <td> <strong> 50,000 </strong> </td>  
                                <td class="actions" data-th="" style="width:10%;">  
                                    <button class="btn btn-info btn-sm"> <span class="glyphicon glyphicon-shopping-cart"> </span> </button>  
                                    <button class="btn btn-danger btn-sm"> <i class="fa fa-trash-o"> </i> </button>                               
                                </td>  
                            </tr>  
                        </tbody>  
                        <tfoot>  
                            <tr>  
                                <td> <a href="#" class="btn btn-success "> <i class="fa fa-angle-left"> </i> Continue Shopping </a> </td>  
                                <td colspan="2" class="hidden-xs"> </td>  
                                <td class="hidden-xs text-center" style="width:10%;"> <strong> Total Price :</strong> </td>  
                                <td> <a href="#" class="btn btn-success btn-block"> Checkout <i class="fa fa-angle-right"> </i> </a> </td>  
                            </tr>  
                        </tfoot>  
                    </table>  
                </div>  
            </div>  
        </div>  
</template>
<script>
export default {
    data(){
        return {
            allUsers:JSON.parse(localStorage.getItem('allUsers')),
            indexOfUser:JSON.parse(localStorage.getItem('indexOfUser')),
            allFoods: JSON.parse(localStorage.getItem('allFoods')),
            cart:''
        }
    },
    created(){
        // this.allUsers=JSON.parse(localStorage.getItem('allUser'))
        // this.indexOfUser=JSON.parse(localStorage.getItem('indexOfUser')) ,
        this.userDetails= this.allUsers[this.indexOfUser]
        this.cart = this.allUsers[this.indexOfUser].cart
    }
}
</script>

<style scoped>
body {  
    background-color: #f5f5f5;  
}  
.Product-img img{  
    width: 100%;  
}  
.main-section{  
    font-family: 'Roboto Condensed', sans-serif;  
    margin-top:100px;  
}  
h2 {  
    color: green;  
}  
h4 {  
    color: red;  
}  
strong {  
    color: red;  
}  
p {  
    color: green;  
}  
h5 {  
    color: red;  
}  
</style>