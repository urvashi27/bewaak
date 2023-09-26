<template>
<form class="justify-content-center" @submit.prevent=" SubmitForm()" id="form-f">
    <div class=" w-100">
        <h2>Change Request Form</h2>
        <div class="row">
            <div class="col-md-4">
                <label for="ename" class="input1">Employee Name <span class="text-danger">*</span></label>
                <input type="text" id="ename" class="form-control" v-model="changeReqForm.firstName" aria-describedby="passwordHelpInline" placeholder="Enter Your Answer">
                <!--   <span class="text-danger" v-if="v$.Empname.$error">{{ v$.Empname.$errors[0].$message}}</span> -->
            </div>
            <div class="col-md-4">
                <label for="ggid" class="input1">GGID <span class="text-danger">*</span></label>
                <input type="text" id="ggid" class="form-control" v-model="changeReqForm.ggid" placeholder="Enter Your Answer">
                <!--  <span class="text-danger" v-if="v$.ggid.$error">{{ v$.ggid.$errors[0].$message}}</span> -->
            </div>
            <div class="col-md-4">
                <label for="bid" class="input1">Block ID <span class="text-danger">*</span></label>
                <input type="text" id="bid" class="form-control" v-model="changeReqForm.blockId" aria-describedby="passwordHelpInline" placeholder="Enter Your Answer">
                <!--   <span class="text-danger" v-if="v$.Blockid.$error">{{ v$.Blockid.$errors[0].$message}}</span> -->
            </div>
            <div class="col-md-12">
                <label class="input1" for="select">Change being requested ?<span class="text-danger">*</span></label>
                <select id="select" placeholder="Select Your Answer" v-model="changeReqForm.changesreq">
                    <option value="billRate">Bill Rate Change</option>
                    <option value="allocation">Allocation</option>
                    <option value="blockID">Block ID</option>
                    <option value="projectEndDate">Project End Date</option>
                    <option value="empType">Employee Type</option>
                    <option value="empShortTerm">Employee Moved to Short Term Landed</option>
                    <option value="changeCode">Change in internal Capgemini Project Code</option>
                </select>
            </div>
            <div  id="submit2" v-if="changeReqForm.changesreq=== 'billRate'">
                <!-- <h2>Bill Rate Change</h2> -->
                <div class="col-md-4">
                    <label for="erole" class="input1">What is the new role ? <span class="text-danger">*</span></label>
                    <input type="text" id="erole" class="form-control" v-model="changeReqForm.newrole" aria-describedby="passwordHelpInline" placeholder="Enter Your Answer">
                </div>
                <div class="col-md-4">
                    <label for="elevel" class="input1">What is the new role level? <span class="text-danger">*</span></label>
                    <select id="elevel" v-model="changeReqForm.rolelevel">
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
                    <input type="text" id="ebrate" class="form-control" v-model="changeReqForm.newbillRate" aria-describedby="passwordHelpInline" placeholder="Enter Your Answer">
                </div>
            </div>
            <div  id="submit2" v-if="changeReqForm.changesreq === 'changeCode'">
                <div class="col-md-12">
                    <label for="epcode" class="input1">What is the Capgemini New Project code ? <span class="text-danger">*</span></label>
                    <input type="text" id="epcode" class="form-control" v-model="changeReqForm.newprojectcode" aria-describedby="passwordHelpInline" placeholder="Enter Your Answer">
                </div>
            </div>
            <div id="submit2" v-if="changeReqForm.changesreq === 'empType'">
                <div class="col-md-12">
                    <label for="etype" class="input1">Employee Type ? <span class="text-danger">*</span></label>
                    <select v-model="changeReqForm.empType" id="etype">
                        <option value="undefined">Select Your Answer</option>
                        <option value="FSemploee">Capgemini FS</option>
                        <option value="internalSubcon">Internal SubCon</option>
                        <option value="externalSubcon">External SubCon</option>
                    </select>
                </div>
            </div>
            <div  v-if="changeReqForm.changesreq === 'projectEndDate'">
                <div class="col-md-12">
                    <label for="pedate" class="input1">What is the Project End Date ? <span class="text-danger">*</span></label>
                    <Datepicker class="form-label" v-model="changeReqForm.projectEndDate" autoApply placeholder="Select Date" :minDate="new Date()" :disabledWeekDays="[6, 0]" :enableTimePicker="false" />
                <!-- <span class="text-danger" v-if="v$.changeReqForm.projectEndDate.$error">{{ v$.changeReqForm.projectEndDate.$errors[0].$message}}</span> -->
                    
                    
                </div>
            </div>
            <div id="submit2" v-if="changeReqForm.changesreq === 'blockID'">
                <div class="col-md-12">
                    <label for="nblockId" class="input1">What is the new Block ID ? <span class="text-danger">*</span></label>
                    <input type="text" id="nblockId" class="form-control" v-model="changeReqForm.newBlockId" aria-describedby="passwordHelpInline" placeholder="Enter Your Answer">
                </div>
            </div>
            <div id="submit2" v-if="changeReqForm.changesreq === 'allocation'">
                <div class="col-md-12">
                    <label for="pAllocate" class="input1">What is the new Percentage Allocation ? <span class="text-danger">*</span></label>
                    <input type="text" id="pAllocate" class="form-control" aria-describedby="passwordHelpInline" v-model="changeReqForm.newpercentageAllocated" placeholder="Enter Your Answer">
                </div>
            </div>
            <div  id="submit2" v-if="changeReqForm.changesreq === 'empShortTerm'">
                <div class="col-md-6">
                    <label for="emoving" class="input1">Where is the Employee moving ? <span class="text-danger">*</span></label>
                    <select v-model="changeReqForm.empmoving" id="emoving">
                        <option value="undefined">Select Your Answer</option>
                        <option value="Poland">Poland</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Portugal">Portugal</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label for="empnewBill" class="input1">New Bill rate during the transition ? <span class="text-danger">*</span></label>
                    <input type="text" id="empnewBill" v-model="changeReqForm.empBillRate" class="form-control" aria-describedby="passwordHelpInline" placeholder="Enter Your Answer">
                </div>
            </div>
            <div >
                <div class="col-md-6" id="submit2">
                    <label for="effectivedate" class="input1">Change - Effective Start Date ? <span class="text-danger">*</span></label>
                     <Datepicker class="form-label" v-model="changeReqForm.effectStartDate" autoApply placeholder="Select Date" :minDate="new Date()" :disabledWeekDays="[6, 0]" :enableTimePicker="false" />
                <span class="text-danger" v-if="v$.changeReqForm.effectStartDate.$error">{{ v$.changeReqForm.effectStartDate.$errors[0].$message}}</span>
                    
                    <!-- <span class="text-danger" v-if="v$.effectivedate.$error">{{ v$.effectivedate.$errors[0].$message}}</span> -->
                </div>
                <div class="col-md-6" id="submit2">
                    <label for="effectiveEnddate" class="input1">Change - Effective End Date ? <span class="text-danger">*</span></label>
                    <Datepicker class="form-label" v-model="changeReqForm.effectiveEndDate" autoApply placeholder="Select Date" :minDate="new Date()" :disabledWeekDays="[6, 0]" :enableTimePicker="false" />
                <span class="text-danger" v-if="v$.changeReqForm.effectStartDate.$error">{{ v$.changeReqForm.effectiveEndDate.$errors[0].$message}}</span>
                    <!-- <span class="text-danger" v-if="v$.effectiveEnddate.$error">{{ v$.effectiveEnddate.$errors[0].$message}}</span> -->
                </div>
            </div>
            <div class="col-md-12" id="submit2">
                <div class="submit2">
                    <label class="input1" for="comments">Comments</label>
                    <textarea class="form-control" placeholder="Leave a comment here" id="comments"  v-model="changeReqForm.comments"></textarea>
                </div>
            </div>
            </div>
            <div class="text-center">
                <button type="submit" class="custom-btn btn-7 text-center">
                  <span>Submit</span>
                </button>
                 <a class=" custom-btn btn-9 text-dark text-center mx-3"  @click="$router.go(-1)"><span>Cancel</span></a>
            </div>
        </div>
    
</form>
</template>

    
<script>
import ChangeRequestForm from '@/services/ChangeRequestForm'
import useVuelidate from '@vuelidate/core'
import OnboardingDetails from '@/services/OnboardingDetails'
import swal from 'sweetalert';  
import Datepicker from '@vuepic/vue-datepicker';
import {
    required
} from '@vuelidate/validators'
export default {
    name: 'ChangeRequest',
     components: {
        Datepicker
    },
    setup () {
    return { v$: useVuelidate() }
  },
    data(){
        return{
            changeReqForm:{
                changesreq: '',
                firstName: '',
                ggid: undefined,
                blockId: '',      
                newrole: '',
                rolelevel: 'undefined',
                newbillRate: undefined,
                newprojectcode: undefined,
                empType: 'undefined',
                projectEndDate: '',
                newBlockId: '',
                newpercentageAllocated: undefined,
                empmoving: 'undefined',
                empBillRate: undefined,
                effectStartDate: '',
                effectiveEndDate: '',
                comments: '',
                status:'Waiting for Approval'
                
            },
            id: this.$route.params.ggid
            
        }
    },
    validations() {
        return {
            changeReqForm: {
                firstName: {
                    required
                },
                ggid: {
                    required
                },
                blockId: {
                    required
                },
                changesreq: {
                    required
                },
                effectStartDate: {
                    required
                },
                effectiveEndDate: {
                    required
                },
            },

        }
    },

methods: {
        SubmitForm() {
            var data = {
                firstName: this.changeReqForm.firstName,
                ggid: this.changeReqForm.ggid,
                blockId: this.changeReqForm.blockId,
                changesreq: this.changeReqForm.changesreq,
                newrole: this.changeReqForm.newrole,
                rolelevel: this.changeReqForm.rolelevel,
                newbillRate: this.changeReqForm.newbillRate,
                newprojectcode: this.changeReqForm.newprojectcode,
                empType: this.changeReqForm.empType,
                projectEndDate: this.changeReqForm.projectEndDate,
                newBlockId: this.changeReqForm.newBlockId,
                newpercentageAllocated: this.changeReqForm.newpercentageAllocated,
                empmoving: this.changeReqForm.empmoving,
                empBillRate: this.changeReqForm.empBillRate,
                effectStartDate: this.changeReqForm.effectStartDate,
                effectiveEndDate: this.changeReqForm.effectiveEndDate,
                comments: this.changeReqForm.comments,
                status:this.changeReqForm.status
            }
            this.v$.$validate()
            if (!this.v$.$error) {
                  swal({  
  title: "Form Submitted!",    
  icon: "success",  
  button: "ok",  
  customClass: 'swal-wide'
});

                ChangeRequestForm.create(data)
                    .then(response => {
                        
                         this.changeReqForm.ggid = response.data.id
                         this.$router.push({name: 'ChangeRequest'})
                    })

                    .catch(e => {
                        alert(e)
                    })
            } else {
                alert('Invalid')
            }
            
        }
    },
    mounted() {

            OnboardingDetails.get(this.id).then(response => {

            this.changeReqForm = response.data.body;

            this.changeReqForm.status = 'Waiting for Approval';

            // this.status = response.data.status;

            // this.projectDetails = response.data.projectDetails;

            console.log(response.data.body);

        })

       

    },
}
</script>
    
<style>
@import url(@/styles/style.css);
</style>
