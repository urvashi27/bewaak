<template>
 <div class="container-xl">
        
        <div class="row">
            <div class="col-lg-12">
                <div class="d-flex top">
            <div class="p-3 me-auto justify-content-center">
                <h3>CRF <b>STATUS</b></h3>
            </div>
            <div class="search-box">
                <i class="material-icons">&#xE8B6;</i>
                <input type="text" class="form-control" placeholder="Search&hellip;" v-model="crfsearch"/>
            </div>

        </div>
                <div class="main-box no-header clearfix">
                    <div class="main-box-body clearfix">
                        <div class="table-responsive">

                            <table class="table user-list">

                                <thead>
                                    <tr>
                                        <th class="text-center">Sr.No</th>
                                        <th class="text-center">EMPLOYEE NAME </th>
                                        <th class="text-center">GGID</th>
                                        <th class="text-center">BLOCK ID</th>
                                        <!-- <th class="text-center">STATUS</th> -->
                                        <th class="text-center">CHANGE-EFFECTIVE START DATE </th>
                                        <th class="text-center">CHANGE-EFFECTIVE END DATE </th>
                                        <th class="text-center"><span>STATUS</span></th>
                                        <th class="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="user in filterCrf" v-bind:key="user.id">
                                        <td> {{user.id}} </td>
                                        <td> {{user. firstName}} </td>
                                        <td> {{user. ggid}} </td>
                                        <td> {{user.blockId}} </td>
                                        <!-- <td> {{user.status}} </td> -->
                                        <td> {{user.effectStartDate}} </td>
                                        <td> {{user. effectiveEndDate}} </td>
                                        <td>{{ user.status }}</td>
                                        <td v-if="role==='Admin' || role==='Ops Team'">
                                            <router-link :to="{ path: `/editchangeReqForm/${user.id}` }">
                                                <span class="glyphicon glyphicon-edit" ></span>
                                                <!-- <span class="glyphicon glyphicon-eye-open" v-if="user.role==='EM'"></span> -->
                                            </router-link>
                                        </td>
                                        <td v-if="role==='EM'">
                                            <router-link :to="{ path: `/editchangeReqForm/${user.id}` }">
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

import ChangeRequestForm from '@/services/ChangeRequestForm'
export default {
    name: "OnboardingTable",
    data() {
        return {
           
            users:[],
            crfsearch: '',
           

            
          
        }
    },
    methods: {
        getCrf() {
            ChangeRequestForm.getAll().then((response) => {
                this.users = response.data;

            })
             .catch(e => {
                    alert(e)
                })
        },
       
    },
    created() {
       
        this.getCrf()
        console.log(this.user)
    },
     computed: {
        filterCrf() {
            return this.users.filter((user) => {
                return user.firstName.includes(this.crfsearch)

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