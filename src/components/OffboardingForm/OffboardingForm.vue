<template>
    <form id="form-f" @submit.prevent="offBoardForm">
        <h2 >Offboarding Form</h2> 
        <div class="row">
            <div class="col-md-4">
               <label class="">Name of the Employee</label>
                <input type="text" class="form-control" v-model="employee.firstName">
               <span class="text-danger" v-if="v$.employee.firstName.$error">{{ v$.employee.firstName.$errors[0].$message }}</span>
            </div>
            <div class="col-md-4">
                <label class="form-label">Block ID</label>
                <input type="text" class="form-control" v-model="employee.blockId">
                <span class="text-danger" v-if="v$.employee.blockId.$error">{{ v$.employee.blockId.$errors[0].$message}}</span>
            </div>
            <div class="col-md-4">
                <label>Global ID(GGID)</label>
                <input type="Global ID(GGID)" class="form-control" v-model="employee.ggid">
                <span class="text-danger" v-if="v$.employee.ggid.$error">{{ v$.employee.ggid.$errors[0].$message}}</span>
            </div>
            <div class="col-md-4">
                <label>ABN Engineering Lead?</label>
                <input type="ABN Engineering Lead?" class="form-control" v-model="employee.abnEnggLead">
                <span class="text-danger" v-if="v$.employee.abnEnggLead.$error">{{ v$.employee.abnEnggLead.$errors[0].$message}}</span>
            </div>
            <div class="col-md-4">
                <label for="offboarding date">Offboarding Date:</label>
                <Datepicker class="form-label" v-model="employee.offboardingDate" autoApply placeholder="Select Date" :minDate="new Date()" :disabledWeekDays="[6, 0]" :enableTimePicker="false" />
                <span class="text-danger" v-if="v$.employee.offboardingDate.$error">{{ v$.employee.offboardingDate.$errors[0].$message}}</span>
            </div>
            <div class="col-md-4">
                 <label for="Who Initiated Offboarding?">Who Initiated Offboarding?</label>
                    <select v-model="employee.initiatedBy">
                        <option v-for="options in fields.initiatedBy" :key="options" :value="options">{{options}}</option>
                        <!-- <option value="abnamro">ABN AMRO</option>
                        <option value="capgemini">CAPGEMINI</option> -->
                    </select>
                    <span class="text-danger" v-if="v$.employee.initiatedBy.$error">{{ v$.employee.initiatedBy.$errors[0].$message}}</span>
            </div>
            <div class="col-md-6">
                <p>
                    <label for="Reason for Offboarding?">Reason for Offboarding?</label>
                    <select v-model="employee.reasonForOffboarding">
                        <option v-for="options in fields.reasonForOffboarding" :key="options" :value="options">{{options}}</option>
                        <!-- <option value="positionMovedToOffshore">Planned - Position moved to offshore (only applicable to local contracts)</option>
                        <option value="aabDecisionToRampDown">Planned - AAB decision to ramp down</option>
                        <option value="becomeInteralAAB">Planned - Became internal AAB</option>
                        <option value="higherSalarySomewhereElse">Unplanned - AAB not attractive for career and growth opportunities</option>
                        <option value="aabNotAttractive">Unplanned - Limited onsite possibility</option>
                        <option value="limitedOnsirePosibility">Unplanned - Poor performance</option>
                        <option value="poorPerformance">Unplanned - Temporary leave/sabbatical</option>
                        <option value="tempLeave">Unplanned - Pursuing higher studies</option>
                         <option value="pursuingHigherStudies">Unplanned - Higher Salary somewhere else</option> -->
                    </select>
                    <span class="text-danger" v-if="v$.employee.reasonForOffboarding.$error">{{ v$.employee.reasonForOffboarding.$errors[0].$message}}</span>
                </p>
            </div>
            <div class="col-md-6">
                <label>Engagement Manager initiating offboarding?</label>
                <input type="Engagement Manager initiating offboarding?" class="form-control" v-model="employee.engagementManager">
                 <span  class="text-danger" v-if="v$.employee.engagementManager.$error">{{ v$.employee.engagementManager.$errors[0].$message}}</span> 
            </div>
            <div>
                <label class="form-label">Additional Note <span class="text-danger">*</span></label>
                <input type="text" class="form-control" placeholder="Enter your answer" v-model="employee.additionalNotes">
                <!-- <span  class="text-danger" v-if="v$.additionalNotes.$error">{{ v$.additionalNotes.$errors[0].$message}}</span> -->
            </div>
            <div  class="col-md-12 text-center"> 
                <!-- <button class="btn bg-gradient-primary mb-0" onclick="argon.showSwal('success-message')">Try me!</button> -->
             <button type="submit" class="custom-btn btn-7"  ><span>Submit</span></button>
              <a class=" custom-btn btn-9 text-dark text-center mx-3"  @click="$router.go(-1)"><span>Cancel</span></a>
        </div>


        <!-- <div id="myModal" class="modal fade"  tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-dialog modal-confirm">
		<div class="modal-content">
			<div class="modal-header">			
				<h4 class="modal-title">Confirmation</h4>	
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			</div>
			<div class="modal-body">
                <p id="mode-font" class="text-muted" > jai balayya</p>
                         <p id="mode-font" class="text-muted "> form submitted</p>
                         <p id="mode-font" class="text-muted "> This change will reflect in your portal.</p>
			</div>
			<div class="modal-footer">
                <a href="#" class="btn btn-info" data-dismiss="modal" @click="offBoardForm">Ok</a>
				
            </div>
		</div>
	</div>
</div>  -->
        </div>
    </form>
    </template>
    <script>     
import '@vuepic/vue-datepicker/dist/main.css';
import Datepicker from '@vuepic/vue-datepicker';
    import OffBoardingServices from '@/services/OffBoardingServices'
    import OnboardingDetails from '@/services/OnboardingDetails';
import swal from 'sweetalert';  
    import Axios from 'axios'
    
        import useVuelidate from '@vuelidate/core'
        import {
            required
        } from '@vuelidate/validators'
       
        export default {
            components: {

        Datepicker

    },
          name:'OffBoarding',
          setup() {
        return {
            v$: useVuelidate()
        }
    },
           data() {
              return{
                employee: {
                   offboardingId:'',
                   firstName: '',
                    blockId: '',
                    ggid: '',
                    initiatedBy: '',
                    abnEnggLead: '',
                    offboardingDate: '',
                    reasonForOffboarding: "",
                    engagementManager: '',
                    additionalNotes: '',
                    status: 'Waiting for Offboarding'
                },
                id: this.$route.params.ggid,
                onboarding: '',
                projectDetails: '',
                fields:''
              }
           },
           
            validations() {
                return {
                    employee:{
                        firstName: { required },
                    blockId: { required  },
                    ggid: { required, },
                    abnEnggLead: { required },
                    initiatedBy: { required  },
                    offboardingDate: { required },
                    reasonForOffboarding: { required },
                    engagementManager: { required },
                    additionalNotes: { required }
                    }
                }
            },
            mounted() {
            OnboardingDetails.get(this.id).then(response => {
            this.employee = response.data.body;
            this.employee.status = 'Waiting for Offboarding';
            // this.status = response.data.status;
            // this.projectDetails = response.data.projectDetails;
            console.log(response.data.body);
        })
        
    },
    created(){
        Axios.get(`http://localhost:8083/fields/getallfields`).then(response=>{
          this.fields=response.data;
            console.log(response.data);
        })
    },
            methods: {

           offBoardForm() {
            var data = {
                offboardingId:this.employee.offboardingId,
                firstName: this.employee.firstName,
                    blockId: this.employee.blockId,
                    ggid: this.employee.ggid,
                    abnEnggLead: this.employee.abnEnggLead,
                    initiatedBy: this.employee.initiatedBy,
                    offboardingDate: this.employee.offboardingDate,
                    reasonForOffboarding: this.employee.reasonForOffboarding,
                    engagementManager: this.employee.engagementManager,
                    additionalNotes: this.employee.additionalNotes,
                    status: this.employee.status
            }
                    this.v$.$validate()
                    if (!this.v$.$error) {
                       
                        swal({  
  title: "Form Submitted!",    
  icon: "success",  
  button: "ok",  
  customClass: 'swal-wide'
});
                 OffBoardingServices.create(data).then((response) => {
                        console.log(response.data);
                        
                        this.$router.push({name: 'OffboardingTable'})
            }).catch(e => {
                        alert(e)
                    })
                    }
             
            
        },
      
            },
      
        }
    </script>
    <style>
       @import url(@/styles/style.css);
    </style>