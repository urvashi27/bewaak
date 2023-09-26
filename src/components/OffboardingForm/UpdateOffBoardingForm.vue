<template>
    <div id="offreq">
        <form id="form-f" class="row">
            <h2>Offboarding Form</h2>
            <br />
            <br />
            <div class="row">
                <div class="col-md-4">
                    <label class="">Name of the Employee</label>
                    <input type="text" class="form-control" v-model="employee.firstName" disabled>
                </div>
                <div class="col-md-4">
                    <label class="form-label">Block ID</label>
                    <input type="text" class="form-control" v-model="employee.blockId" disabled>
                </div>
                <div class="col-md-4">
                    <label>Global ID(GGID)</label>
                    <input type="Global ID(GGID)" class="form-control" v-model="employee.ggid" disabled>
                </div>
                <div class="col-md-4">
                    <label>ABN Engineering Lead?</label>
                    <input type="ABN Engineering Lead?" class="form-control" v-model="employee.abnEnggLead" disabled>
                </div>
                <div class="col-md-4">
                    <label for="offboarding date">Offboarding Date:</label>
                    <!-- <input type="date" id="offboarding date" name="offboarding date" class="form-control" v-model="employee.offboardingDate" /> -->
                    <Datepicker class="form-label" v-model="employee.offboardingDate" autoApply placeholder="Select Date" :minDate="new Date()" :disabledWeekDays="[6, 0]" :enableTimePicker="false" />
                </div>
                <div class="col-md-4">
                    <label for="Who Initiated Offboarding?">Who Initiated Offboarding?</label>
                    <!-- <select v-model="employee.initiatedBy">
                        <option value="select">Select</option>
                        <option value="abnamro">ABN AMRO</option>
                        <option value="capgemini">CAPGEMINI</option>
                    </select> -->
                    <input type="ABN Engineering Lead?" class="form-control" v-model="employee.initiatedBy" disabled>
                </div>
                <div class="col-md-6">
                    <p>
                        <label for="Reason for Offboarding?">Reason for Offboarding?</label>
                      
                        <input type="ABN Engineering Lead?" class="form-control" v-model="employee.reasonForOffboarding" disabled>
                    </p>
                </div>
                <div class="col-md-6">
                    <label>Engagement Manager initiating offboarding?</label>
                    <input type="Engagement Manager initiating offboarding?" class="form-control" v-model="employee.engagementManager" disabled>
                </div>
                <div>
                    <label class="form-label">Additional Note <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" placeholder="Enter your answer" v-model="employee.additionalNotes" disabled>
                </div>
                <div class="row">
                    <div class="text-center" v-if="this.employee.status=='Waiting for Offboarding' && role =='Ops Team' || role== 'Admin' && this.employee.status=='Waiting for Offboarding'">
                            <a class="custom-btn btn-7 mx-3" type="submit" data-toggle="modal" href="#myModal"  @click="ApproveButton">
                                <span>Approve</span>
                            </a>
                            <a class="custom-btn btn-8 mx-3" type="submit" data-toggle="modal" href="#myModal"  @click="RejectButton" >
                                <span>Reject</span>
                            </a>
                           <a class=" custom-btn btn-9 text-dark text-center mx-3"  @click="$router.go(-1)"><span>Cancel</span></a>
                    </div>
                    <a class=" text-center" v-if="this.employee.status=='Approved'  && role !=='EM'">
                        <button class="custom-btn btn-7 mx-3" @click="offboard();onboarded()">
                            <span>Offboard</span>
                        </button>
                        <a class=" custom-btn btn-9 text-dark text-center mx-3 "  @click="$router.go(-1)"><span>Cancel</span></a>
                    </a>
                     <a class=" text-center" v-if="this.employee.status=='Rejected' || this.employee.status=='Offboarded' || role =='EM'">
                         <a class=" custom-btn btn-9 text-dark text-center mx-3"  @click="$router.go(-1)"><span>Cancel</span></a>
                    </a>
                </div>
                <div id="myModal" class="modal fade"  >
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
                    <a href="#" class="btn btn-danger" data-dismiss="modal" v-if="AppButton===true && clicked===true" @click="updateCustomer">Yes, approve it!</a>
                <a href="#" class="btn btn-danger" data-dismiss="modal" v-if="RejButton===true && clicked===true"  @click="deleteData($router.go(-1))">Yes, reject it!</a>
                </div>
            </div>
        </div>
    </div>          
          
            </div>
        </form>
    </div>
    </template>
    <script>
    import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css';
    import axios from "axios";
    import OffBoardingServices from "@/services/OffBoardingServices";
    import OnboardingDetails from '@/services/OnboardingDetails';
    export default {
        name: "OffboardingTable",
        components: {
            Datepicker
        },
        data() {
            return {
                employee: "",
                emp: this.$route.params.emp,
                onboarding:'',
                id:'',
                projectDetails:'',
                 AppButton: true,
                RejButton: true,
                clicked: true
            };
        },
        methods: {
            updateCustomer() {
                this.employee.status = 'Approved'
                OffBoardingServices.update(this.emp, this.employee)
                    .then(() => {
                        OffBoardingServices.getOffBoardingStatus();
                        this.message = "The customer was updated successfully!";
                        this.$router.push({
                            name: 'OffboardingRequests'
                        })
                    })
                    .catch((e) => {
                        alert(e);
                    });
            },
            offboard() {
                this.employee.status = 'Offboarded'
                OffBoardingServices.update(this.emp, this.employee)
                    .then(() => {
                        OffBoardingServices.getOffBoardingStatus();
                        this.message = "The customer was updated successfully!";
                        this.$router.push({
                            name: 'OffboardingRequests'
                        })
                    })
                    .catch((e) => {
                        alert(e);
                    });
            },
            onboarded() {
                this.onboarding.status = 'Offboarded';
                OnboardingDetails.update(this.id, this.onboarding).then(() => {
                    // this.$router.push({
                    //     name: 'OnboardingTable'
                    // })
                    console.log('Updated Successfully');
                    console.log(this.onboarding.status);
                    // this.message = 'Updated Successfully';
                }).catch((e) => {
                    alert(e);
                });
            },
            deleteData() {
                this.employee.status = 'Rejected'
                OffBoardingServices.update(this.emp, this.employee)
                    .then(() => {
                        OffBoardingServices.getOffBoardingStatus();
                        this.message = "The customer was updated successfully!";
                        this.$router.push({
                            name: 'OffboardingRequests'
                        })
                    })
                    .catch((e) => {
                        alert(e);
                    });
            },
             ApproveButton() {
                    this.AppButton = true;
                    this.clicked = true;
                    this.RejButton=false ;
                   
                },
                RejectButton() {
                    this.clicked = true
                    this.RejButton = true
                    this.AppButton = false
                     
                },
        },
        async mounted() {
            await axios
                .get("http://localhost:8080/offboarding/getbyid/" + this.emp)
                .then((resp) => {
                    console.log(resp.data.ggid);
                    this.employee = resp.data;
                    this.id = resp.data.ggid
                });
              await OnboardingDetails.get(this.id).then(response => {
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
       
    };
    </script>
    <style>
    </style>