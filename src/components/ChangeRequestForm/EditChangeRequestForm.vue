<template>
<form class="justify-content-center" id="form-f" @submit.prevent="SubmitForm()">
    <div class=" w-100">
        <h2>Change Request Form</h2>
        <div class="row">
            <div class="col-md-4">
                <label for="ename" class="input1">Employee Name <span class="text-danger">*</span></label>
                <input type="text" id="ename" class="form-control" v-model="employee.firstName" aria-describedby="passwordHelpInline" placeholder="Enter Your Answer">
                <!--   <span class="text-danger" v-if="v$.Empname.$error">{{ v$.Empname.$errors[0].$message}}</span> -->
            </div>
            <div class="col-md-4">
                <label for="ggid" class="input1">GGID <span class="text-danger">*</span></label>
                <input type="text" id="ggid" class="form-control" v-model="employee.ggid" placeholder="Enter Your Answer">
                <!--  <span class="text-danger" v-if="v$.ggid.$error">{{ v$.ggid.$errors[0].$message}}</span> -->
            </div>
            <div class="col-md-4">
                <label for="bid" class="input1">Block ID <span class="text-danger">*</span></label>
                <input type="text" id="bid" class="form-control" v-model="employee.blockId" aria-describedby="passwordHelpInline" placeholder="Enter Your Answer">
                <!--   <span class="text-danger" v-if="v$.Blockid.$error">{{ v$.Blockid.$errors[0].$message}}</span> -->
            </div>
            <div class="col-md-12">
                <label class="input1" for="select">Change being requested ?<span class="text-danger">*</span></label>
                <select id="select" placeholder="Select Your Answer" v-model="employee.changesreq">
                    <option value="billRate">Bill Rate Change</option>
                    <option value="allocation">Allocation</option>
                    <option value="blockID">Block ID</option>
                    <option value="projectEndDate">Project End Date</option>
                    <option value="empType">Employee Type</option>
                    <option value="empShortTerm">Employee Moved to Short Term Landed</option>
                    <option value="changeCode">Change in internal Capgemini Project Code</option>
                </select>
            </div>
            <div  id="submit2" v-if="employee.changesreq=== 'billRate'">
                <!-- <h2>Bill Rate Change</h2> -->
                <div class="col-md-4">
                    <label for="erole" class="input1">What is the new role ? <span class="text-danger">*</span></label>
                    <input type="text" id="erole" class="form-control" v-model="employee.newrole" aria-describedby="passwordHelpInline" placeholder="Enter Your Answer">
                </div>
                <div class="col-md-4">
                    <label for="elevel" class="input1">What is the new role level? <span class="text-danger">*</span></label>
                    <select id="elevel" v-model="employee.rolelevel">
                        <option value="undefined">Select Your Answer</option>
                        <option value="Junior">Junior</option>
                        <option value="Senior">Senior</option>
                        <option value="Expert">Expert</option>
                        <option value="Specialist">Specialist</option>
                        <option value="Niche">Valid for Amperit</option>
                    </select>
                </div>
                <div class="col-md-4">
                    <label for="ebrate" class="input1">What is the new Bill Rate ? <span class="text-danger">*</span></label>
                    <input type="text" id="ebrate" class="form-control" v-model="employee.newbillRate" aria-describedby="passwordHelpInline" placeholder="Enter Your Answer">
                </div>
            </div>
            <div  id="submit2" v-if="employee.changesreq === 'changeCode'">
                <div class="col-md-12">
                    <label for="epcode" class="input1">What is the Capgemini New Project code ? <span class="text-danger">*</span></label>
                    <input type="text" id="epcode" class="form-control" v-model="employee.newprojectcode" aria-describedby="passwordHelpInline" placeholder="Enter Your Answer">
                </div>
            </div>
            <div id="submit2" v-if="employee.changesreq === 'empType'">
                <div class="col-md-12">
                    <label for="etype" class="input1">Employee Type ? <span class="text-danger">*</span></label>
                    <select v-model="employee.empType" id="etype">
                        <option value="undefined">Select Your Answer</option>
                        <option value="FSemploee">Capgemini FS</option>
                        <option value="internalSubcon">Internal SubCon</option>
                        <option value="externalSubcon">External SubCon</option>
                    </select>
                </div>
            </div>
            <div  v-if="employee.changesreq === 'projectEndDate'">
                <div class="col-md-12">
                    <label for="pedate" class="input1">What is the Project End Date ? <span class="text-danger">*</span></label>
                    <input type="date" id="pedate" class="form-control" v-model="employee.projectEndDate" date-date-format="mm/dd/yyyy" aria-describedby="passwordHelpInline">
                </div>
            </div>
            <div id="submit2" v-if="employee.changesreq === 'blockID'">
                <div class="col-md-12">
                    <label for="nblockId" class="input1">What is the new Block ID ? <span class="text-danger">*</span></label>
                    <input type="text" id="nblockId" class="form-control" v-model="employee.newBlockId" aria-describedby="passwordHelpInline" placeholder="Enter Your Answer">
                </div>
            </div>
            <div id="submit2" v-if="employee.changesreq === 'allocation'">
                <div class="col-md-12">
                    <label for="pAllocate" class="input1">What is the new Percentage Allocation ? <span class="text-danger">*</span></label>
                    <input type="text" id="pAllocate" class="form-control" aria-describedby="passwordHelpInline" v-model="employee.newpercentageAllocated" placeholder="Enter Your Answer">
                </div>
            </div>
            <div  id="submit2" v-if="employee.changesreq === 'empShortTerm'">
                <div class="col-md-6">
                    <label for="emoving" class="input1">Where is the Employee moving ? <span class="text-danger">*</span></label>
                    <select v-model="employee.empmoving" id="emoving">
                        <option value="undefined">Select Your Answer</option>
                        <option value="Poland">Poland</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Portugal">Portugal</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label for="empnewBill" class="input1">New Bill rate during the transition ? <span class="text-danger">*</span></label>
                    <input type="text" id="empnewBill" v-model="employee.empBillRate" class="form-control" aria-describedby="passwordHelpInline" placeholder="Enter Your Answer">
                </div>
            </div>
            <div >
                <div class="col-md-6" id="submit2">
                    <label for="effectivedate" class="input1">Change - Effective Start Date ? <span class="text-danger">*</span></label>
                    <input type="date" id="effectivedate" v-model="employee.effectStartDate" class="form-control" date-date-format="mm/dd/yyyy" aria-describedby="passwordHelpInline">
                    <!-- <span class="text-danger" v-if="v$.effectivedate.$error">{{ v$.effectivedate.$errors[0].$message}}</span> -->
                </div>
                <div class="col-md-6" id="submit2">
                    <label for="effectiveEnddate" class="input1">Change - Effective End Date ? <span class="text-danger">*</span></label>
                    <input type="date" id="effectiveEnddate" v-model="employee.effectiveEndDate" class="form-control" date-date-format="mm/dd/yyyy" aria-describedby="passwordHelpInline">
                    <!-- <span class="text-danger" v-if="v$.effectiveEnddate.$error">{{ v$.effectiveEnddate.$errors[0].$message}}</span> -->
                </div>
            </div>
            <div class="col-md-12" id="submit2">
                <div class="submit2">
                    <label class="input1" for="comments">Comments</label>
                    <textarea class="form-control" placeholder="Leave a comment here" id="comments"  v-model="employee.comments"></textarea>
                </div>
            </div>
            <div class="text-center" v-if="this.employee.status=='Waiting for Approval' && role =='Ops Team' || role== 'Admin' && this.employee.status=='Waiting for Approval'">
               <a class="custom-btn btn-7 mx-3" type="submit" data-toggle="modal" href="#myModal"  @click="ApproveButton">
                            <span>Approve</span>
                        </a>
                        <a class="custom-btn btn-8 mx-3" type="submit" data-toggle="modal" href="#myModal"  @click="RejectButton" >
                            <span>Reject</span>
                        </a>
                        <a class=" custom-btn btn-9 text-dark text-center mx-3"  @click="$router.go(-1)"><span>Cancel</span></a>
            </div>
            <a class=" text-center" v-if="this.employee.status=='Rejected' || this.employee.status=='Approved' || role =='EM'">
                     <a class=" custom-btn btn-9 text-dark text-center mx-3"  @click="$router.go(-1)"><span>Cancel</span></a>
                </a>
           
        </div>

        <div id="myModal" style="padding:0;" class="modal fade"  tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-dialog modal-confirm">
		<div class="modal-content">
			<div class="modal-header">			
				<h4 class="modal-title">Confirmation</h4>	
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			</div>
			<div class="modal-body">
                <p id="mode-font" class="text-muted" v-if="AppButton===true && clicked===true"> Are you sure you wanna Approve this ?</p>
                         <p id="mode-font" class="text-muted " v-if="RejButton===true && clicked===true"> Are you sure you wanna Reject this ?</p>
                         <p id="mode-font" class="text-muted "> This change will reflect in your portal.</p>
			</div>
			<div class="modal-footer">
                <a href="#" class="btn btn-info" data-dismiss="modal">Cancel</a>
				<a href="#" class="btn btn-danger" data-dismiss="modal" v-if="AppButton===true && clicked===true" @click="update();onboarded();">Yes, approve it!</a>
			<a href="#" class="btn btn-danger" data-dismiss="modal" v-if="RejButton===true && clicked===true" @click="deleteData">Yes, reject it!</a>
            </div>
		</div>
	</div>
</div> 
        
   
    </div>
</form>
</template>
<script>
import ChangeRequestForm from '@/services/ChangeRequestForm'
import OnboardingDetails from '@/services/OnboardingDetails'
import axios from 'axios'
export default {
    name: 'EditForm',
    data() {
        return {
            employee: '',
            emp: this.$route.params.emp,
            id:this.$route.params.emp,
            onboarding:'',
            projectDetails:'',
             AppButton: true,
            RejButton: true,
            clicked: true
        }
    },
    methods: {
        update() {
            this.employee.status='Approved';
            ChangeRequestForm.update(this.emp, this.employee)
                .then(() => {
                    this.message = 'The customer was updated successfully!'
                    this.$router.push({name: 'ChangeRequests'})
                })
                .catch(e => {
                    alert(e)
                })
        },
        deleteData() {
            this.employee.status='Rejected';
            ChangeRequestForm.update(this.emp, this.employee)
                .then(() => {
                    this.message = 'The customer was updated successfully!'
                    this.$router.push({name: 'ChangeRequests'})
                })
                .catch(e => {
                    alert(e)
                })
        },
        onboarded() {
            if(this.employee.changesreq==='billRate'){
                this.onboarding.billRate = this.employee.newbillRate;
                this.onboarding.roleForAbn = this.employee.newrole;
                this.onboarding.levelofAbn = this.employee.rolelevel;
                this.crf();
            }else if(this.employee.changesreq==='allocation'){
                this.onboarding.percentageOfAllocation = this.employee.newpercentageAllocated;
                this.crf();
            }else if(this.employee.changesreq==='blockID'){
                this.onboarding.blockId = this.employee.newBlockId;
                this.crf();
            }else if(this.employee.changesreq === 'empType'){
                this.onboarding.employmentType = this.employee.empType;
                this.crf();
            }else if(this.employee.changesreq ==='projectEndDate'){
                this.projectDetails.endDate = this.employee.projectEndDate;
                this.crf();
            }else if(this.employee.changesreq === 'empShortTerm'){
                this.onboarding.countryOfResidence = this.employee.empmoving;
                this.onboarding.billRate = this.employee.empBillRate;
                this.crf();
            }else{
                this.projectDetails.projectId = this.employee.newprojectcode;
                this.crf();
            }
        },
        crf(){
            OnboardingDetails.update(this.employee.ggid, this.onboarding).then(() => {
                console.log('Updated Successfully');
                console.log(this.status)
            }).catch((e) => {
                alert(e);
            }); 
        },
          ApproveButton() {
                
                this.AppButton = true
                this.clicked = true
                this.RejButton=false
                  
            },
            RejectButton() {
               
                this.clicked = true
                this.RejButton = true
                this.AppButton = false
                 
            },
    },
    async created() {
        console.log(localStorage.getItem('role'))
        await axios.get("http://localhost:8083/requestchange/getbyid/" + this.emp).then((response) => {
            console.log(response.data)
            this.employee = response.data;
        })
        await OnboardingDetails.get(this.employee.ggid).then(response => {
            this.onboarding = response.data.body;
             this.projectDetails = response.data.body.projectDetails;
            console.log(response.data.body.projectDetails);
        })
    },
    computed: {
        role(){
            return localStorage.getItem('role')
        }
    }
}
</script>
<style>
@import url(@/styles/style.css);
</style>