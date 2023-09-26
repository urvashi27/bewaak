<template>
<div class="container-xl">
     
        <div class="row">
            <div class="col-lg-12">
                 <div class="d-flex top">
                <div class="p-3 me-auto justify-content-center">
                    <h3>ONBOARDING <b>STATUS</b></h3>
                </div>
                <span class="search-box ">
                    <i class="material-icons">&#xE8B6;</i>
                    <input type="text" class="form-control" placeholder="Search&hellip;" v-model="onboardingsearch" />
                </span>

            </div>
                <div class="main-box no-header clearfix">
                    <div class="main-box-body clearfix">
                        <div class="table-responsive">

                            <table class="table user-list">
                                <thead>
                                    <tr>
                                        <!-- <th class="text-center">S.NO</th> -->
                                        <th class="text-center">GGID</th>
                                        <th class="text-center">NAME</th>
                                        <th class="text-center">CONTRACT TYPE</th>
                                        <th class="text-center">ASSOCIATE</th>
                                        <th class="text-center">CONTRACT TYPE</th>
                                        <th class="text-center">LOCATION</th>
                                        <!-- <th class="text-center">BLOCK ID</th> -->
                                        <!-- <th class="text-center">PROJECT CODE</th> -->
                                        <th class="text-center">PROJECT START DATE</th>
                                        <th class="text-center">PROJECT END DATE</th>
                                        <th class="text-center">STATUS</th>
                                        <th v-if="em!==true">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="onboard in filterOnBoarding" :key="onboard.ggid">
                                        <!-- <td>{{onboard.ggid}}</td> -->
                                        <td>{{onboard.ggid}}</td>
                                        <td>{{onboard.firstName}}</td>
                                        <td>{{onboard.amperit}}</td>
                                        <td>{{onboard.billable}}</td>
                                        <td>{{onboard.contractType}}</td>
                                        <td>{{onboard.empLoc}}</td>
                                        <!-- <td>{{onboard.contactNumber}}</td> -->
                                        <!-- <td>{{onboard.blockId}}</td> -->
                                        <td>{{onboard.projectDetails.startDate}}</td>
                                        <td>{{onboard.projectDetails.endDate}}</td>
                                        <td>{{onboard.status}} </td>
                                        <!-- <td>
                                            <router-link :to="{path:`/OnboardingUpdate/${onboard.ggid}`}">
                                                <span class="glyphicon glyphicon-edit"></span>
                                            </router-link>
                                        </td> -->
                                         <td v-if="role==='Admin' || role==='Ops Team'">
                                            <router-link :to="{ path: `/OnboardingUpdate/${onboard.ggid}` }">
                                                <span class="glyphicon glyphicon-edit" ></span>
                                                <!-- <span class="glyphicon glyphicon-eye-open" v-if="user.role==='EM'"></span> -->
                                            </router-link>
                                        </td>
                                        <td v-if="role==='EM'">
                                            <router-link :to="{ path: `/OnboardingUpdate/${onboard.ggid}` }">
                                                <span class="glyphicon glyphicon-eye-open"></span>
                                            </router-link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
       
</template>

<script>
import OnboardingDetails from '@/services/OnboardingDetails'
export default {
    data() {
        return {
            onboarding: [],
          onboardingsearch: '',
        }
    },
    methods: {
        retrieveOnboardingList() {
            OnboardingDetails.getAll().then(response => {
                    this.onboarding = response.data;
                })
                .catch(e => {
                    alert(e)
                })
        },
      
    },
    created() {
this.retrieveOnboardingList()
    },
    computed: {
        filterOnBoarding() {
            return this.onboarding.filter((onboard) => {
                return onboard.firstName.includes(this.onboardingsearch) ||
                    onboard.status.includes(this.onboardingsearch)
            });
        },
          role() {
            return localStorage.getItem("role")
        }
      
   
    },
}
</script>

<style>

</style>