<template>
<div id="offreq" >
    <form id="form-f" class="row justify-content-center" @submit.prevent>
        <h2>User Details</h2>
        <br />
        <br />
        <div class="row">
            <div class="col-md-4">
                <label class="">First Name</label>
                <input type="text" class="form-control" v-model="employee.firstName" />
            </div>
            <div class="col-md-4">
                <label class="form-label">Last Name</label>
              <input type="text" class="form-control" v-model="employee.lastName" disabled/>
            </div>
            <div class="col-md-4">
                <label>Email</label>
               <input type="email" class="form-control" v-model="employee.email" disabled/>
            </div>
            <div class="col-md-4">
                <label>Global ID(GGID)</label>
                 <input type="text" class="form-control" v-model="employee.ggid" disabled/>
            </div>
            <div class="col-md-4">
                 <label class="form-label">Gender <span class="text-danger">*</span></label>
               <input type="text" class="form-control" v-model="employee.gender" disabled/>
            </div>
      
             <div class="col-md-4">
                <label class="form-label">Contact <span class="text-danger">*</span></label>
              <input type="text" class="form-control" v-model="employee.contact" disabled/>
            </div>
             <div class="col-md-4">
                <label class="form-label">supervisor<span class="text-danger">*</span></label>
                   <input type="text" class="form-control" v-model="employee.supervisor" disabled/>
            </div>
             <div class="col-md-4">
                <label class="form-label">password<span class="text-danger">*</span></label>
                   <input type="password" class="form-control" v-model="employee.password" disabled/>
            </div>
            <div class="col-md-4">
                  <label for="elevel" class="input1">Role<span class="text-danger">*</span></label>
                        <select id="elevel" v-model="employee.role" v-if="this.employee.role===null">
                            <option value="undefined">Select Your Answer</option>
                            <option >Ops Team</option>
                            <option>Team member</option>
                            <option>EM</option>
                        </select>
                    <input type="text" class="form-control" v-model="employee.role" v-if="this.employee.role!==null" disabled/>
                    
            </div>
            <div class="">
            <div class=" text-center px-3" v-if="this.employee.status=='pending'">
              <button class="custom-btn btn-7" type="submit" data-toggle="modal" data-target="#myModal" ><span>Approved</span></button>
               <a class="custom-btn btn-9 text-dark text-center mx-3" @click="$router.go(-1)"><span>Cancel</span></a>
              </div>
              <div class=" text-center">
               <a class="custom-btn btn-9 text-dark text-center mx-3" v-if="this.employee.status=='approved'"  @click="$router.go(-1)"><span>Cancel</span></a>
         </div>
        </div>

        <div id="myModal"  class="modal fade">
	<div class="modal-dialog modal-confirm">
		<div class="modal-content">
			<div class="modal-header">			
				<h4 class="modal-title">Confirmation</h4>	
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			</div>
			<div class="modal-body">
                <p id="mode-font" class="text-muted" > Are you sure you wanna Approve this ?</p>
                         <!-- <p id="mode-font" class="text-muted " v-if="RejButton===true && clicked===true"> Are you sure you wanna Reject this ?</p> -->
                         <p id="mode-font" class="text-muted "> This change will reflect in your portal.</p>
			</div>
			<div class="modal-footer">
                <a href="#" class="btn btn-info" data-dismiss="modal">Cancel</a>
				<a href="#" class="btn btn-danger" data-dismiss="modal" @click="approvedUser">Yes, approve it!</a>
			<!-- <a href="#" class="btn btn-danger" data-dismiss="modal" v-if="RejButton===true && clicked===true" @click="Reject">Yes, reject it!</a> -->
            </div>
		</div>
	</div>
</div>  
        </div>
    </form>
</div>
</template>
      
<script>
 import UserService from '@/services/UserService'
export default {
    data() {
        return {
            employee: '',
            id: this.$route.params.id,
            status:'',
        }
    },
    methods: {
            approvedUser() {
                this.employee.status= 'approved';
                UserService.Update(this.id,this.employee.status, this.employee.role).then(() => {
                    console.log('Updated Successfully');
                  location.href = "/userstable"
                }).catch((e) => {
                    alert(e);
                });
            },
        },
    mounted() {
        UserService.get(this.id).then(response => {
                this.employee = response.data;
                this.status = response.data.status;
               console.log(response.data)
            })
        },
}
</script>
<style scoped>

</style>