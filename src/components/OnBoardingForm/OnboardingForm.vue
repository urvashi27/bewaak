<template>
<form id="form-f" class="justify-content-center" @submit.prevent="submitForm()">
    <h2>Onboarding Form</h2>
    <div class="row">
        <div class="col-md-4">
            <label class="form-label"> Name of the Employee <span class="text-danger">*</span></label>
            <input type="text" class="form-control" v-model="onboarding.firstName">
            <span class="text-danger" v-if="v$.onboarding.firstName.$error">{{ v$.onboarding.firstName.$errors[0].$message}}</span>
        </div>
        <div class="col-md-4">
            <label class="form-label" for="ggid">GGID </label>
            <input type="text" id="ggid" class="form-control" v-model="onboarding.ggid" />
            <span class="text-danger" v-if="v$.onboarding.ggid.$error">{{ v$.onboarding.ggid.$errors[0].$message}}*</span>

        </div>
        <div class="col-md-4">
            <label class="form-label " for="Contract Type">Amperit or Non-Amperit <span class="text-danger">*</span></label>
            <select id="Contract Type" name="Contract type" v-model="onboarding.amperit">
                <option v-for="options in fields.amperit" :key="options" :value="options">{{options}}</option>

            </select>
            <span class="text-danger" v-if="v$.onboarding.amperit.$error">{{ v$.onboarding.amperit.$errors[0].$message}}</span>
        </div>
        <div class="col-md-4">
            <label class="form-label">Billable or Non-Billable<span class="text-danger">*</span></label>
            <select id="Contract Type" name="Contract type" v-model="onboarding.billable">
                <option v-for="options in fields.billable" :key="options" :value="options">{{options}}</option>

            </select>
            <span class="text-danger" v-if="v$.onboarding.billable.$error">{{ v$.onboarding.billable.$errors[0].$message}}</span>
        </div>
        <div class="col-md-4">
            <label class="form-label"> CORP ID <span class="text-danger">*</span></label>
            <input type="text" class="form-control form-control-lg" placeholder="Enter your Answer" v-model="onboarding.corpid">
            <span class="text-danger" v-if="v$.onboarding.corpid.$error">{{ v$.onboarding.corpid.$errors[0].$message}}</span>
        </div>
        <div class="col-md-4">
            <label class="form-label"> Employee Type<span class="text-danger">*</span></label>
            <select id="Contract Type" name="Contract type" v-model="onboarding.employmentType">
                <option v-for="options in fields.employeeType" :key="options" :value="options">{{options}}</option>

            </select>

            <span class="text-danger" v-if="v$.onboarding.employmentType.$error">{{ v$.onboarding.employmentType.$errors[0].$message}}</span>
        </div>
        <div class="col-md-4">
            <label class="form-label"> Employee Location <span class="text-danger">*</span></label>
            <select id="Contract Type" name="Contract type" v-model="onboarding.empLoc">
                <option v-for="options in fields.employeeLocation" :key="options" :value="options">{{options}}</option>

            </select>
            <span class="text-danger" v-if="v$.onboarding.empLoc.$error">{{ v$.onboarding.empLoc.$errors[0].$message}}</span>
        </div>
        <div class="col-md-4">
            <label class="form-label" for="country">Current residence <span class="text-danger">*</span></label>
            <select id="country" name="Contract type" v-model="onboarding.countryOfResidence">
                <option v-for="options in fields.countryOfResidence" :key="options" :value="options">{{options}}</option>

            </select>
            <span class="text-danger" v-if="v$.onboarding.countryOfResidence.$error">{{ v$.onboarding.countryOfResidence.$errors[0].$message}}</span>
        </div>
        <div class="col-md-4">
            <label class="form-label" for="blockID"> BlockID and Team Name<span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="blockID" v-model="onboarding.blockId">
            <span class="text-danger" v-if="v$.onboarding.blockId.$error">{{ v$.onboarding.blockId.$errors[0].$message}}</span>
        </div>
        <div class="col-md-6">
            <label class="form-label" for="projectAllocation"> Percentage allocation ofproject <span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="projectAllocation" v-model="onboarding.percentageOfAllocation">
            <span class="text-danger" v-if="v$.onboarding.percentageOfAllocation.$error">{{ v$.onboarding.percentageOfAllocation.$errors[0].$message}}</span>
        </div>
        <div class="col-md-6">
            <label class="form-label" for="cgProject"> Capgemini Project Code<span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="cgProject" v-model="onboarding.projectDetails.projectId">
            <span class="text-danger" v-if="v$.onboarding.projectDetails.projectId.$error">{{ v$.onboarding.projectDetails.projectId.$errors[0].$message}}</span>
        </div>
        <div class="col-md-6">
            <label class="form-label" for="startDate"> Project Start Date <span class="text-danger">*</span></label>
            <!-- <input type="date" id="startDate" class="form-control form-control-lg" placeholder="Enter your answer" v-model="onboarding.projectDetails.startDate"> -->
            <Datepicker class="form-label" v-model="onboarding.projectDetails.startDate" autoApply placeholder="Select Date" :minDate="new Date()" :disabledWeekDays="[6, 0]" :enableTimePicker="false" />
            <span class="text-danger" v-if="v$.onboarding.projectDetails.startDate.$error">{{ v$.onboarding.projectDetails.startDate.$errors[0].$message}}</span>
        </div>
        <div class="col-md-6">
            <label class="form-label" for="endDate"> Project End Date <span class="text-danger">*</span></label>
            <!-- <input type="date" id="endDate" class="form-control form-control-lg" placeholder="Enter your answer" v-model="onboarding.projectDetails.endDate"> -->
            <Datepicker class="form-label" v-model="onboarding.projectDetails.endDate" autoApply placeholder="Select Date" :minDate="new Date()" :disabledWeekDays="[6, 0]" :enableTimePicker="false" />
            <span class="text-danger" v-if="v$.onboarding.projectDetails.endDate.$error">{{ v$.onboarding.projectDetails.endDate.$errors[0].$message}}</span>
        </div>

    </div>
    <div class="row py-5" v-if="onboarding.amperit === 'Non-Amperit' && onboarding.billable === 'Non-Billable' ">
        <div class="col-md-6">
            <label class="form-label" for="contractType"> What is the contract type <span class="text-danger">*</span></label>
            <select id="contractType" name="Contract type" v-model="onboarding.contractType">
                <option v-for="options in fields.contracttype" :key="options" :value="options">{{options}}</option>

            </select>
            <!-- <span class="text-danger" v-if="v$.contractType.$error">{{ v$.contractType.$errors[0].$message}}</span> -->
        </div>
        <div class="col-md-6">
            <label class="form-label" for="lob">Line of Business <span class="text-danger">*</span></label>
            <select id="lob" name="Contract type" v-model="onboarding.lineOfBusiness">
                <option v-for="options in fields.lineOfBusiness" :key="options" :value="options">{{options}}</option>

            </select>
            <!-- <span class="text-danger" v-if="v$.lineOfBuiseness.$error">{{ v$.lineOfBuiseness.$errors[0].$message}}</span> -->
        </div>
        <div class="col-md-6">
            <label class="form-label" for="role">Role for ABN<span class="text-danger">*</span></label>
            <select id="role" name="Contract type" v-model="onboarding.roleForAbn">
                <option v-for="options in fields.roleForAbn" :key="options" :value="options">{{options}}</option>

            </select>
            <!-- <span class="text-danger" v-if="v$.roleForAbn.$error">{{ v$.roleForAbn.$errors[0].$message}}</span> -->
        </div>
        <div class="col-md-6">
            <label class="form-label" for="em">Engagement Manager Responsible <span class="text-danger">*</span></label>
            <select id="em" name="Contract type" v-model="onboarding.engagementManagers">
                <option v-for="options in fields.engagementManager" :key="options" :value="options">{{options}}</option>

            </select>
        </div>
    </div>
    <div class="row py-5" v-if="onboarding.amperit === 'Amperit' && onboarding.billable === 'Non-Billable' ">
        <div class="row">
            <div class="col-md-4">
                <label class="form-label" for="contType"> What is the contract type <span class="text-danger">*</span></label>
                <select id="contType" name="Contract type" v-model="onboarding.contractType">
                    <option v-for="options in fields.contracttype" :key="options" :value="options">{{options}}</option>

                </select>
            </div>

            <div class="col-md-4">
                <label class="form-label" for="corpid">ABN Corp ID <span class="text-danger">*</span></label>
                <input type="text" id="corpid" class="form-control" placeholder="Enter your answer" v-model="onboarding.abnCorpId">
            </div>
            <div class="col-md-4">
                <label class="form-label" for="contNum">Contract Number <span class="text-danger">*</span></label>
                <input type="text" id="contNum" class="form-control" placeholder="Enter your answer" v-model="onboarding.contactNumber">
            </div>
        </div>
        <div class="col-md-6">
            <label class="form-label" for="domain">What is the domain <span class="text-danger">*</span></label>
            <input type="text" id="domain" class="form-control" placeholder="Enter your answer" v-model="onboarding.domain">
        </div>
        <div class="col-md-6">
            <label class="form-label" for="grid">What is the grid <span class="text-danger">*</span></label>
            <input type="text" id="grid" class="form-control form-control-lg" placeholder="Enter your answer" v-model="onboarding.grid">
        </div>

        <div class="col-md-6">
            <label class="form-label" for="Abn">Role for ABN <span class="text-danger">*</span></label>
            <select id="Abn" name="please select Role for ABN" v-model="onboarding.roleForAbn">
                <option v-for="options in fields.contracttype" :key="options" :value="options">{{options}}</option>
                <!-- <option value="Investment">Investment</option> -->
            </select>
        </div>
        <div class="col-md-6">
            <label class="form-label" for="EM">Engagement Manager Responsible<span class="text-danger">*</span></label>
            <select id="EM" name="please select Engagement Manager " v-model="onboarding.engagementManagers">
                <option v-for="options in fields.engagementManager" :key="options" :value="options">{{options}}</option>

            </select>
        </div>
    </div>
    <div class="row py-5" v-if="onboarding.amperit === 'Non-Amperit' && onboarding.billable === 'Billable' ">
        <div class="col-md-4">
            <label class="form-label" for="Contracttype">What is the contract type <span class="text-danger">*</span></label>
            <select id="Contracttype" name="please select contract type" v-model="onboarding.contractType">
                <option v-for="options in fields.contracttype" :key="options" :value="options">{{options}}</option>

            </select>
            <!-- <span class="text-danger" v-if="v$.contractType.$error">{{ v$.contractType.$errors[0].$message}}</span> -->
        </div>
        <div class="col-md-4">
            <label class="form-label" for="lineB">Line of Business  <span class="text-danger">*</span></label>
            <select id="lineB" name="Contract type" v-model="onboarding.lineOfBusiness">
                <option v-for="options in fields.lineOfBusiness" :key="options" :value="options">{{options}}</option>

            </select>
            <!-- <span class="text-danger" v-if="v$.lineOfBuiseness.$error">{{ v$.lineOfBuiseness.$errors[0].$message}}</span> -->
        </div>
        <div class="col-md-4">
            <label class="form-label">Role for ABN <span class="text-danger">*</span></label>
            <select id="Please Select Role for ABN" name="Please Select Role for ABN " v-model="onboarding.roleForAbn">
                <option v-for="options in fields.roleForAbn" :key="options" :value="options">{{options}}</option>

            </select>
        </div>

        <div class="col-md-4">
            <label class="form-label">Level of Role with ABN <span class="text-danger">*</span></label>
            <select id="Please Select Role  With ABN" name="Please Select Role  With ABN " v-model="onboarding.levelOfRole">
                <option v-for="options in fields.levelOfRole" :key="options" :value="options">{{options}}</option>

            </select>
        </div>
        <div class="col-md-4">
            <label class="form-label">Bill rate<span class="text-danger">*</span></label>
            <input type="text" class="form-control" placeholder="Enter your answer" v-model="onboarding.billRate">
            <!-- <span class="text-danger" v-if="v$.billRate.$error">{{ v$.billRate.$errors[0].$message}}</span> -->
        </div>

        <div class="col-md-4">
            <label class="form-label" for="contLocation">Contract Location <span class="text-danger">*</span></label>
            <select id="contLocation" name="Contract type" v-model="onboarding.contractLocation">
                <option v-for="options in fields.employeeLocation" :key="options" :value="options">{{options}}</option>

            </select>
            <!-- <span class="text-danger" v-if="v$.contractLocation.$error">{{ v$.contractLocation.$errors[0].$message}}</span> -->
        </div>
        <div class="col-md-4">
            <label class="form-label" for="SEMC">SEMC Applicable <span class="text-danger">*</span></label>
            <select id="SEMC" name="Contract type" v-model="onboarding.semc">
                <option value="undefined">Please Select SEMC Applicable</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>
            <!-- <span class="text-danger" v-if="v$.semc.$error">{{ v$.semc.$errors[0].$message}}</span> -->
        </div>
        <div class="col-md-4">
            <label class="form-label" for="Sustainable">Sustainable Change - Applicable<span class="text-danger">*</span></label>
            <select id="Sustainable" name="Contract type" v-model="onboarding.sustainableChange">
                <option value="undefined">Sustainable Change - Applicable</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>
            <!-- <span class="text-danger" v-if="v$.sustainableChange.$error">{{ v$.Sustainable.$errors[0].$message}}</span> -->
        </div>
        <div class="col-md-4">
            <label class="form-label">EM Responsible  <span class="text-danger">*</span></label>
            <select id="Contract Type" name="Contract type" v-model="onboarding.engagementManagers">
                <option v-for="options in fields.engagementManager" :key="options" :value="options">{{options}}</option>

            </select>
            <!-- <span class="text-danger" v-if="v$.engagementManager.$error">{{ v$.engagementManager.$errors[0].$message}}</span> -->
        </div>
    </div>
    <div class="row py-5" v-if="onboarding.amperit === 'Amperit' && onboarding.billable === 'Billable' ">
        <div class="col-md-4">
            <label class="form-label" for="abncorpid"> ABN Corp ID<span class="text-danger">*</span></label>
            <input type="text" id="abncorpid" class="form-control" v-model="onboarding.abnCorpId">
            <!-- <span class="text-danger" v-if="v$.abnCorpId.$error">{{ v$.abnCorpId.$errors[0].$message}}</span> -->
        </div>

        <div class="col-md-4">
            <label class="form-label" for="domain"> What is the domain<span class="text-danger">*</span></label>
            <input type="text" id="domain" class="form-control" v-model="onboarding.domain">
            <!-- <span class="text-danger" v-if="v$.domain.$error">{{ v$.domain.$errors[0].$message}}</span> -->
        </div>
        <div class="col-md-4">
            <label class="form-label" for="griD"> What is the grid<span class="text-danger">*</span></label>
            <input type="text" id="griD" class="form-control" v-model="onboarding.grid">
            <!-- <span class="text-danger" v-if="v$.grid.$error">{{ v$.grid.$errors[0].$message}}</span> -->
        </div>
        <div class="col-md-8">
            <label class="form-label">Level of Role with ABN  <span class="text-danger">*</span></label>
            <select id=" Contract Type" name=" Contract type" v-model="onboarding.levelofAbn">
                <option v-for="options in fields.levelOfRole" :key="options" :value="options">{{options}}</option>

            </select>
            <!-- <span class="text-danger" v-if="v$.levelOfAbn.$error">{{ v$.levelOfAbn.$errors[0].$message}}</span> -->
        </div>
        <div class="col-md-4">
            <label class="form-label"> Bill Rate<span class="text-danger">*</span></label>
            <input type="text" class="form-control" v-model="onboarding.billRate">
            <!-- <span class="text-danger" v-if="v$.billRate.$error">{{ v$.billRate.$errors[0].$message}}</span> -->
        </div>
        <div class="col-md-6">
            <label class="form-label"> Contract Location<span class="text-danger">*</span></label>
            <select id=" Contract Type" name=" Contract type" v-model="onboarding.contractLocation">
                <option v-for="options in fields.employeeLocation" :key="options" :value="options">{{options}}</option>

            </select>
            <!-- <span class="text-danger" v-if="v$.contractLocation.$error">{{ v$.contractLocation.$errors[0].$message}}</span> -->
        </div>
        <div class="col-md-6">
            <label class="form-label">SEMC Applicable <span class="text-danger">*</span></label>
            <select id="Contract Type" name="Contract type" v-model="onboarding.semc">
                <option value="undefined">Please Select SEMC Applicable</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>
            <!-- <span class="text-danger" v-if="v$.semc.$error">{{ v$.semc.$errors[0].$message}}</span> -->
        </div>
        <div class="col-md-6">
            <label class="form-label">Sustainable Change - Applicable<span class="text-danger">*</span></label>
            <select id="Contract Type" name="Contract type" v-model="onboarding.sustainableChange">
                <option value="undefined">Sustainable Change - Applicable</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>
            <!-- <span class="text-danger" v-if="v$.sustainableChange.$error">{{ v$.sustainableChange.$errors[0].$message}}</span> -->
        </div>
        <div class="col-md-6">
            <label class="form-label">Engagement Manager Responsible <span class="text-danger">*</span></label>
            <select id="please select Manager" name="please select Manager" v-model="onboarding.engagementManagers">
                <option v-for="options in fields.engagementManager" :key="options" :value="options">{{options}}</option>
                <!-- <option value="ToonenLoes">Toonen( Capgemini )</option>
                    <option value="Ganbold">Loes Ganbold </option>
                    <option value="Enkhtur">Enkhtur</option> -->
            </select>
            <!-- <span class="text-danger" v-if="v$.engagementManager.$error">{{ v$.engagementManager.$errors[0].$message}}</span> -->
        </div>
    </div>
    <div class="col-md-12">
        <label class="form-label">Additional Note <span class="text-danger">*</span></label>
        <input type="text" class="form-control" placeholder="Enter your answer" v-model="onboarding.additionalNotes">
        <!-- <span class="text-danger" v-if="v$.additionalNotes.$error">{{ v$.additionalNotes.$errors[0].$message}}</span> -->
    </div>
    <div class="text-center">
        <button class="custom-btn btn-7"><span>submit</span></button>
    </div>
</form>
</template>

    
<script>
import useVuelidate from '@vuelidate/core'
import Datepicker from '@vuepic/vue-datepicker';

import '@vuepic/vue-datepicker/dist/main.css';
import {
    required
} from '@vuelidate/validators'

import OnboardingDetails from '@/services/OnboardingDetails'
import swal from 'sweetalert';  
import Axios from 'axios'
export default {
    name: 'OnboardingForm',
    components: {
        Datepicker
    },
    setup() {
        return {
            v$: useVuelidate()
        }
    },
    data() {
        return {
            onboarding: {
                ggid: undefined,
                amperit: '',
                billable: '',
                firstName: '',
                abnCorpId: undefined,
                roleForAbn: 'undefined',
                lineOfBusiness: 'undefined',
                corpid: '',
                employmentType: '',
                empLoc: '',
                sustainableChange: undefined,
                countryOfResidence: '',
                domain: '',
                semc: undefined,
                contractType: 'undefined',
                contractLocation: 'undefined',
                contactNumber: undefined,
                engagementManagers: 'undefined',
                blockId: '',
                status: 'Waiting for approval',
                percentageOfAllocation: undefined,
                additionalNotes: undefined,
                projectDetails: {
                    endDate: '',
                    startDate: '',
                    projectId: undefined

                },

            },
            fields: '',
            employeeType: ''
        }
    },

    validations() {
        return {

            onboarding: {
                ggid: {
                    required
                },
                amperit: {
                    required
                },
                billable: {
                    required
                },
                firstName: {
                    required
                },
                empLoc: {
                    required
                },
                countryOfResidence: {
                    required
                },
                percentageOfAllocation: {
                    required
                },
                employmentType: {
                    required
                },
                blockId: {
                    required
                },
                corpid: {
                    required
                },
                projectDetails: {
                    endDate: {
                        required
                    },
                    startDate: {
                        required
                    },
                    projectId: {
                        required
                    }
                }
            },

        }
    },
    mounted() {
        Axios.get(`http://localhost:8083/fields/getallfields`).then(response => {
            this.fields = response.data;
            console.log(this.fields);
            console.log(response.data.lineOfBusiness);
        })

    },
    methods: {
        submitForm() {
            var data = {
                ggid: this.onboarding.ggid,
                amperit: this.onboarding.amperit,
                billable: this.onboarding.billable,
                firstName: this.onboarding.firstName,
                abnCorpId: this.onboarding.abnCorpId,
                roleForAbn: this.onboarding.roleForAbn,
                lineOfBusiness: this.onboarding.lineOfBusiness,
                corpid: this.onboarding.corpid,
                employmentType: this.onboarding.employmentType,
                empLoc: this.onboarding.empLoc,
                sustainableChange: this.onboarding.sustainableChange,
                domain: this.onboarding.domain,
                semc: this.onboarding.semc,
                contractType: this.onboarding.contractType,
                contractLocation: this.onboarding.contractLocation,
                contactNumber: this.onboarding.contactNumber,
                countryOfResidence: this.onboarding.countryOfResidence,
                engagementManagers: this.onboarding.engagementManagers,
                blockId: this.onboarding.blockId,
                status: this.onboarding.status,
                percentageOfAllocation: this.onboarding.percentageOfAllocation,
                projectDetails: this.onboarding.projectDetails,
                startDate: this.onboarding.projectDetails.startDate,
                endDate: this.onboarding.projectDetails.endDate,
                projectId: this.onboarding.projectDetails.projectId,

            }
            this.v$.$validate()
            if (!this.v$.$error) {
                swal({  
  title: "Form Submitted!",    
  icon: "success",  
  button: "ok",  
  customClass: 'swal-wide'
});

                OnboardingDetails.create(data)
                    .then(response => {

                        this.$router.push({
                            name: 'OnboardingTable'
                        });
                        this.onboarding.ggid = response.data.id;
                    })
                    .catch(e => {
                        alert(e)
                    })
            } else {
                alert('Invalid')
            }

        }
    }

}
</script>

    
<style scoped>
@import url('@/styles/style.css');
</style>
