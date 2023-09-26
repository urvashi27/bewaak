<template>
<form @submit.prevent="addDropdown">
<div class="card " >
  <img src="@/assets/d2.jpg" class="card-img" alt="...">
  <div class="card-img-overlay">
    <div class="col-md-8">
               <label class="text-center">Name</label>
                <input type="text" class="form-control" v-model="field">
               <!-- <span class="text-danger" v-if="v$.employee.firstName.$error">{{ v$.employee.firstName.$errors[0].$message }}</span> -->
            </div>
     <div class="col-md-8">
                <label class="form-label">New Dropdown</label>
                <input type="text" class="form-control" v-model="newDropdown">
                <!-- <span class="text-danger" v-if="v$.employee.blockId.$error">{{ v$.employee.blockId.$errors[0].$message}}</span> -->
            </div>
            <div  class="col-md-8 text-center"> 
             <button type="submit" class="custom-btn btn-7" ><span>Add</span></button>
  </div>
  </div>
</div>
</form>
   <!-- <form id="form-f" @submit.prevent="addDropdown">
        <h2 >Offboarding Form</h2> 
        <div class="row">
            <div class="col-md-4">
               <label class="">Name</label>
                <input type="text" class="form-control" v-model="field">
               
            </div>
            <div class="col-md-4">
                <label class="form-label">New Dropdown</label>
                <input type="text" class="form-control" v-model="newDropdown">
                
            </div>
            <div  class="col-md-12 text-center"> 
             <button type="submit" class="custom-btn btn-7" data-toggle="modal" ><span>Submit</span></button>
             <div id="myModal" class="modal fade">
	<div class="modal-dialog modal-confirm">
		<div class="modal-content">
			<div class="modal-header">
				<div class="icon-box">
					<i class="material-icons">&#xE876;</i>
				</div>				
				<h4 class="modal-title">Awesome!</h4>
                
			</div>
			<div class="modal-body">
				<p class="text-center">Your offboardingform has been submitted. Check your email for detials.</p>
			</div>
			<div class="modal-footer">
				<button @click="goToTable" class="btn btn-success btn-block"  data-dismiss="modal">OK</button>
			</div>
		</div>
	</div>
</div> 
        </div>
        </div>
    </form> -->
</template>

<script>
import FieldOptionsServices from '@/services/FieldOptionsServices'
// import Axios from 'axios'
export default {
    name:'AddDropdown',
    data(){
        return{
            fields:'',
            newDropdown:'',
            field:this.$route.params.field,
        }
    },
    created(){
        FieldOptionsServices.get(this.field).then(response=>{
            this.fields=response.data;
            console.log(response.data)
        })
            // Axios.get('http://localhost:8080/fields/get/'+this.field).then((response)=>{
            //     this.fields=response.data;
            //     console.log(response);
            // })
    },
    methods:{
        addDropdown(){
            FieldOptionsServices.create(this.field,this.newDropdown).then(response=>{
                console.log(response.data);
                console.log(this.field);
                alert('added successfully');
            })
        }
    }

}
</script>

<style scoped>
.card-img{
  height: 550px;
}
.card{
   
    max-width: 450px;
  margin: auto;
  position: relative;
  /* background: rgb(67, 142, 239); */
border: none;

  background: white;

  zoom: 80%;
}
@media screen and (min-width: 768px){
.card-img-overlay{
 /* margin-top: 310px; */
 margin-right: -150px;
 padding-left: 30px;

}
}
.card-img-overlay{
 margin-top: 310px;
 margin-left: 10px;
}
</style>