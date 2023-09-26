<template>
   <div class="container-xl" >
   
        <div class="row">
            <div class="col-lg-12">
                   <div class="d-flex top">
            <div class="p-3 me-auto justify-content-center">
                <h3>OFFBOARDING <b>STATUS</b></h3>
            </div>
            <div class="search-box">
                <i class="material-icons">&#xE8B6;</i>
                <input type="text" class="form-control" placeholder="Search&hellip;" v-model="offboardingsearch" />
            </div>

        </div>
                <div class="main-box no-header clearfix">
                    <div class="main-box-body clearfix">

                        <div class="table-responsive">

                            <table class="table user-list">

                                <thead>
                                    <tr>
                                        <th class="text-center">GGID</th>
                                        <th class="text-center"><span>NAME</span></th>
                                        <th class="text-center"><span>ABN LEAD?</span></th>
                                        <th class="text-center"><span>INTIATED BY</span></th>
                                        <th class="text-center"><span>EM MANAGER</span></th>
                                        <th class="text-center"><span>BLOCK ID</span></th>
                                        <th class="text-center"><span>REASON</span></th>
                                        <th class="text-center"><span>OFFBOARDING DATE</span></th>
                                        <th class="text-center"><span>STATUS</span></th>
                                        <th class="text-center"><span>ACTION</span></th>
                                        <!-- <th class="text-center">&nbsp;</th> -->
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="offboardingstatus in filterOffBoarding" v-bind:key="offboardingstatus.offboardingId">
                                        <td>{{ offboardingstatus.ggid }}</td>
                                        <td>{{ offboardingstatus.firstName }}</td>
                                        <td>{{ offboardingstatus.abnEnggLead }}</td>
                                        <td>{{ offboardingstatus.initiatedBy }}</td>
                                        <td>{{ offboardingstatus.engagementManager }}</td>
                                        <td>{{ offboardingstatus.blockId }}</td>
                                        <td>{{ offboardingstatus.reasonForOffboarding }}</td>
                                        <td>{{ offboardingstatus.offboardingDate }}</td>
                                        <!-- <td>{{ offboardingstatus.status }}</td> -->
                                         <td  class="badge-danger">
                <span v-if="offboardingstatus.status=== 'Waiting for Offboarding'" style="color:orange">{{offboardingstatus.status}}</span>
                 <span v-if="offboardingstatus.status=== 'Rejected'" style="color:red">{{offboardingstatus.status}}</span>
                 <span v-if="offboardingstatus.status=== 'Approved'" style="color:green">{{offboardingstatus.status}}</span>
                  <span v-if="offboardingstatus.status=== 'Offboarded'" style="color:blueviolet">{{offboardingstatus.status}}</span>
              </td>
                                        <!-- <td>
                                            <router-link :to="{
                        path: `/updateoffboardingform/${offboardingstatus.offboardingId}`,
                      }"><span class="glyphicon glyphicon-edit"></span></router-link>
                                        </td> -->
                                         <td v-if="role==='Admin' || role==='Ops Team'">
                                            <router-link :to="{ path: `/updateoffboardingform/${offboardingstatus.offboardingId}`}">
                                                <span class="glyphicon glyphicon-edit" ></span>
                                                <!-- <span class="glyphicon glyphicon-eye-open" v-if="user.role==='EM'"></span> -->
                                            </router-link>
                                        </td>
                                        <td v-if="role==='EM'">
                                            <router-link :to="{ path: `/updateoffboardingform/${offboardingstatus.offboardingId}` }">
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

import OffBoardingServices from '@/services/OffBoardingServices'

export default {
 
    data() {
        return {
          
            list:[],
            offboardingsearch: '',
        }
    },
    methods: {
        getOffBoardingStatus() {
            OffBoardingServices.getOffBoardingStatus().then((response) => {
                this.list = response.data;
                console.log(response.data);
            });
        },
       
       
       
    },
    created() {
       
        this.getOffBoardingStatus()
        
    },
    computed: {
        filterOffBoarding() {
            return this.list.filter((offboardingstatus) => {
                return offboardingstatus.firstName.includes(this.offboardingsearch)

            });
        },
       role() {
            return localStorage.getItem("role")
        }
   
    },
   
};

</script>
<style scoped>

</style>