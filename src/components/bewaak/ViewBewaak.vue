<template>
<form id="form-f" class="justify-content-center" @submit.prevent="submitForm">
    <h2>Onboarding Form</h2><br>
    <div class="row">
        <div class="col-md-4">
            <label class="form-label"> Name of the Employee <span class="text-danger">*</span></label>
            <input type="text" class="form-control form-control-lg" v-model="onboarding.firstName" disabled>
        </div>
        <div class="col-md-4 ">
            <p> <label class="form-label" for="ggid">GGID </label>
                <input type="text" id="ggid" class="form-control" v-model="onboarding.ggid" disabled>
            </p>
        </div>
        <div class="col-md-4">
            <label class="form-label "> Contract type <span class="text-danger">*</span></label>
            <input type="text" id="ggid" class="form-control" v-model="onboarding.amperit" disabled>
        </div>
        <div class="col-md-4">
            <label class="form-label">Billable or Non-Billable<span class="text-danger">*</span></label>
            <input type="text" id="ggid" class="form-control" v-model="onboarding.billable" disabled>
        </div>
        <div class="col-md-4">
            <label class="form-label"> CORP ID <span class="text-danger">*</span></label>
            <input type="text" class="form-control form-control-lg" placeholder="Enter your Answer" v-model="onboarding.corpid" disabled>
        </div>
        <div class="col-md-4">
            <label class="form-label"> Employee Type<span class="text-danger">*</span></label>
            <input type="text" class="form-control form-control-lg" placeholder="Enter your Answer" v-model="onboarding.employmentType" disabled>
        </div>
        <div class="col-md-4">
            <label class="form-label"> Employee Location<span class="text-danger">*</span></label>
            <input type="text" class="form-control form-control-lg" placeholder="Enter your Answer" v-model="onboarding.empLoc" disabled>
        </div>
        <div class="col-md-4">
            <label class="form-label" for="country">Current residence<span class="text-danger">*</span></label>
            <input type="text" class="form-control form-control-lg" placeholder="Enter your Answer" v-model="onboarding.countryOfResidence" disabled>
        </div>
        <div class="col-md-4">
            <label class="form-label" for="blockID"> Block ID and Team Name<span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="blockID" v-model="onboarding.blockId" disabled>
        </div>
        <div class="col-md-6">
            <label class="form-label" for="projectAllocation"> Percentage allocation of associate<span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="projectAllocation" v-model="onboarding.percentageOfAllocation" disabled>
        </div>
        <div class="col-md-6">
            <label class="form-label" for="cgProject"> Capgemini Project Code<span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="cgProject" v-model="projectDetails.projectId" disabled>
        </div>
        <div class="col-md-6">
            <label class="form-label" for="startDate"> Project Start Date<span class="text-danger">*</span></label>
            <Datepicker class="form-label" v-model="projectDetails.startDate" autoApply placeholder="Select Date" :minDate="new Date()" :disabledWeekDays="[6, 0]" :enableTimePicker="false" />
        </div>
        <div class="col-md-6">
            <label class="form-label" for="endDate"> Project End Date<span class="text-danger">*</span></label>
            <Datepicker class="form-label" v-model="projectDetails.endDate" autoApply placeholder="Select Date" :minDate="new Date()" :disabledWeekDays="[6, 0]" :enableTimePicker="false" />
        </div>
    </div>
    <div class="row py-5" v-if="onboarding.amperit === 'Non-Amperit' && onboarding.billable === 'Non-Billable' ">
        <div class="col-md-6">
            <label class="form-label" for="contractType">Contract type <span class="text-danger">*</span></label>
            <input type="text" class="form-control form-control-lg" placeholder="Enter your Answer" v-model="onboarding.contractType" disabled>
        </div>
        <div class="col-md-6">
            <label class="form-label" for="lob">Line of Business<span class="text-danger">*</span></label>
            <input type="text" class="form-control form-control-lg" placeholder="Enter your Answer" v-model="onboarding.lineOfBusiness" disabled>
        </div>
        <div class="col-md-6">
            <label class="form-label" for="role">Role for ABN<span class="text-danger">*</span></label>
            <input type="text" class="form-control form-control-lg" placeholder="Enter your Answer" v-model="onboarding.roleForAbn" disabled>
        </div>
        <div class="col-md-6">
            <label class="form-label" for="em">Engagement Manager<span class="text-danger">*</span></label>
            <input type="text" class="form-control form-control-lg" placeholder="Enter your Answer" v-model="onboarding.engagementManagers" disabled>
        </div>
    </div>
    <div class="row py-5" v-if="onboarding.amperit === 'Amperit' && onboarding.billable === 'Non-Billable' ">
        <div class="col-md-4">
            <label class="form-label" for="contType">Contract type<span class="text-danger">*</span></label>
            <input type="text" id="ggid" class="form-control" v-model="contractType" disabled>
        </div>
        <div class="col-md-4">
            <label class="form-label" for="corpid">ABN Corp ID <span class="text-danger">*</span></label>
            <input type="text" id="corpid" class="form-control" placeholder="Enter your answer" v-model="onboarding.abnCorpId" disabled>
        </div>
        <div class="col-md-4">
            <label class="form-label" for="contNum">Contact Number<span class="text-danger">*</span></label>
            <input type="text" id="contNum" class="form-control" placeholder="Enter your answer" v-model="onboarding.contractNumber" disabled>
        </div>
        <div class="col-md-6">
            <label class="form-label" for="domain">Domain <span class="text-danger">*</span></label>
            <input type="text" id="domain" class="form-control" placeholder="Enter your answer" v-model="onboarding.domain" disabled>
        </div>
        <div class="col-md-6">
            <label class="form-label" for="grid">Grid <span class="text-danger">*</span></label>
            <input type="text" id="grid" class="form-control form-control-lg" placeholder="Enter your answer" v-model="onboarding.grid" disabled>
        </div>
        <div class="col-md-6">
            <label class="form-label" for="Abn">Role for ABN <span class="text-danger">*</span></label>
            <input type="text" id="ggid" class="form-control" v-model="onboarding.roleForAbn" disabled>
        </div>
        <div class="col-md-6">
            <label class="form-label" for="EM">Engagement Manager<span class="text-danger">*</span></label>
            <input type="text" id="ggid" class="form-control" v-model="onboarding.engagementManagers" disabled>
        </div>
    </div>
    <div class="row py-5" v-if="onboarding.amperit === 'Non-Aperit' && onboarding.billable === 'Billable' ">
        <div class="col-md-4">
            <label class="form-label" for="Contracttype">Contract type<span class="text-danger">*</span></label>
            <input type="text" class="form-control form-control-lg" placeholder="Enter your Answer" v-model="onboarding.contractType">
        </div>
        <div class="col-md-4">
            <label class="form-label" for="lineB">Line of Business<span class="text-danger">*</span></label>
            <input type="text" id="ggid" class="form-control" v-model="onboarding.lineOfBusiness" disabled>
        </div>
        <div class="col-md-4">
            <label class="form-label">Role for ABN <span class="text-danger">*</span></label>
            <input type="text" id="ggid" class="form-control" v-model="onboarding.roleForAbn" disabled>
        </div>
        <div class="col-md-4">
            <label class="form-label">Level of Role with ABN <span class="text-danger">*</span></label>
            <input type="text" id="ggid" class="form-control" v-model="onboarding.levelOfRole" disabled>
        </div>
        <div class="col-md-4">
            <label class="form-label">Bill Rate<span class="text-danger">*</span></label>
            <input type="text" class="form-control" placeholder="Enter your answer" v-model="onboarding.billRate" disabled>
        </div>
        <div class="col-md-4">
            <label class="col-form-label" for="contLocation">Contract Location <span class="text-danger">*</span></label>
            <input type="text" id="ggid" class="form-control" v-model="onboarding.contractLocation" disabled>
        </div>
        <div class="col-md-4">
            <label class="form-label" for="SEMC">SEMC Applicable <span class="text-danger">*</span></label>
            <input type="text" id="ggid" class="form-control" v-model="onboarding.semc" disabled>
        </div>
        <div class="col-md-4">
            <label class="form-label" for="Sustainable">Sustainable Change - Applicable<span class="text-danger">*</span></label>
            <input type="text" id="ggid" class="form-control" v-model="onboarding.sustainableChange" disabled>
        </div>
        <div class="col-md-4">
            <label class="form-label">Engagement Manager <span class="text-danger">*</span></label>
            <input type="text" id="ggid" class="form-control" v-model="onboarding.engagementManagers" disabled>
        </div>
    </div>
    <div class="row py-5" v-if="onboarding.amperit === 'Amperit' && onboarding.billable === 'Billable' ">
        <div class="col-md-4">
            <label class="form-label" for="corpid"> ABN Corp ID<span class="text-danger">*</span></label>
            <input type="text" id="corpid" class="form-control" v-model="onboarding.abnCorpId" disabled>
        </div>
        <div class="col-md-4">
            <label class="form-label" for="ContractNumber"> Contact Number<span class="text-danger">*</span></label>
            <input type="text" id="ContractNumber" class="form-control" v-model="onboarding.contactNumber" disabled>
        </div>
        <div class="col-md-4">
            <label class="form-label" for="domain">Domain<span class="text-danger">*</span></label>
            <input type="text" id="domain" class="form-control" v-model="onboarding.domain" disabled>
        </div>
        <div class="col-md-4">
            <label class="form-label" for="griD">Grid<span class="text-danger">*</span></label>
            <input type="text" id="griD" class="form-control" v-model="onboarding.grid" disabled>
        </div>
        <div class="col-md-4">
            <label class="form-label">Level of Role with ABN <span class="text-danger">*</span></label>
            <input type="text" id="ggid" class="form-control" v-model="onboarding.levelofAbn" disabled>
        </div>
        <div class="col-md-4">
            <label class="form-label"> Bill Rate<span class="text-danger">*</span></label>
            <input type="text" class="form-control" v-model="onboarding.billRate" disabled>
        </div>
        <div class="col-md-6">
            <label class="form-label"> Contact Location<span class="text-danger">*</span></label>
            <input type="text" id="ggid" class="form-control" v-model="onboarding.contractLocation" disabled>
        </div>
        <div class="col-md-6">
            <label class="form-label">SEMC Applicable <span class="text-danger">*</span></label>
            <input type="text" id="ggid" class="form-control" v-model="onboarding.semc" disabled>
        </div>
        <div class="col-md-6">
            <label class="form-label">Sustainable Change - Applicable<span class="text-danger">*</span></label>
            <input type="text" id="ggid" class="form-control" v-model="onboarding.sustainableChange" disabled>
        </div>
        <div class="col-md-6">
            <label class="form-label">Engagement Manager <span class="text-danger">*</span></label>
            <input type="text" id="ggid" class="form-control" v-model="onboarding.engagementManagers" disabled>
        </div>
    </div>
    <div>
        <label class="form-label">Additional Notes <span class="text-danger">*</span></label>
        <input type="text" class="form-control" placeholder="Enter your answer" v-model="onboarding.additionalNotes" disabled>
    </div>
    <div class="row">
        <div class="text-center" v-if="user.role==='EM' && onboarding.status==='Onboarded'">
             <router-link :to="{path:`/OffBoardingform/${onboarding.ggid}`}" ><button class="custom-btn btn-7 mx-3" type="submit"><span>Offboard</span></button></router-link>
            <router-link :to="{path:`/changeReqform/${onboarding.ggid}`}" ><button class="custom-btn btn-8 mx-3" type="submit"><span>Change Request</span></button></router-link>
            <a class="custom-btn btn-9 text-dark mx-3"  @click="$router.go(-1)"><span>Cancel</span></a>
        </div>
         <div class="col-md-12 text-center" v-if="user.role==='EM' && onboarding.status==='Offboarded'">
               <a class="custom-btn btn-9 text-dark" @click="$router.go(-1)"><span>Cancel</span></a>
        </div>
        <div class="col-md-12 text-center" v-if="this.onboarding.status=='Approved'">
           <button class="custom-btn btn-7 me-5 " type="submit" @click="onboarded"><span>Onboarded</span></button>
             <a class="custom-btn btn-9 text-dark ms-5 "  @click="$router.go(-1)"><span>Cancel</span></a>
        </div>
        <div class="col-md-12 text-center" v-if="user.role==='Admin' || user.role==='Ops Team' ">
               <a class="custom-btn btn-9 text-dark" @click="$router.go(-1)"><span>Cancel</span></a>
        </div>
        




    </div>
</form>
</template>

<script>
import Datepicker from '@vuepic/vue-datepicker';
import OnboardingDetails from '@/services/OnboardingDetails'
import '@vuepic/vue-datepicker/dist/main.css';
export default {
    name: 'OnboardingForm',
    data() {
        return {
            id: this.$route.params.ggid,
            onboarding: '',
            projectDetails: '',
            status: '',
            AppButton: true,
            RejButton: true,
            clicked: true
        }
    },
    components: {
        Datepicker
    },
    mounted() {
        OnboardingDetails.get(this.id).then(response => {
            this.onboarding = response.data.body;
            this.projectDetails = response.data.body.projectDetails;
            console.log(response.data.body.projectDetails);
        })
    },
    methods: {


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
        computed: {
        user() {
            console.log(this.$store.state.users)
            return JSON.parse(localStorage.getItem('users'))
        },
       
    },
}
</script>

<style scoped>
@import url('@/styles/style.css');





</style>
