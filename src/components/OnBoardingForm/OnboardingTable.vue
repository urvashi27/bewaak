<template>
        <div class="container-xl">
        <div class="row">
            <div class="col-lg-12">
                <div class="main-box no-header clearfix">
                    <div class="main-box-body clearfix">
                        <div class="table-responsive">
                            <table class="table user-list">
                    <thead>
                        <tr>
                            <th class="text-center">S.NO</th>
                            <th class="text-center">GGID</th>
                            <th class="text-center">NAME</th>
                            <th class="text-center">CONTRACT TYPE</th>
                            <th class="text-center">ASSOCIATE</th>
                            <th class="text-center">CORP ID</th>
                            <th class="text-center">LOCATION</th>
                            <th class="text-center">BLOCK ID</th>
                            <th class="text-center">PROJECT CODE</th>
                            <th class="text-center">PROJECT START DATE</th>
                            <th class="text-center">PROJECT END DATE</th>
                            <th class="text-center">STATUS</th>
                            <th v-if="em!==true">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="onboard in filters" :key="onboard.ggid">
                            <td>{{onboard.ggid}}</td>
                            <td>{{onboard.corpid}}</td>
                            <td>{{onboard.firstName}}</td>
                            <td>{{onboard.amperit}}</td>
                            <td>{{onboard.billable}}</td>
                            <td>{{onboard.contractType}}</td>
                            <td>{{onboard.empLoc}}</td>
                            <td>{{onboard.contactNumber}}</td>
                            <td>{{onboard.blockId}}</td>
                            <td>{{onboard.projectDetails.startDate}}</td>
                            <td>{{onboard.projectDetails.endDate}}</td>
                            <td>{{onboard.status}} </td>
                            <td v-if="em!==true">
                                <router-link :to="{path:`/OnboardingUpdate/${onboard.ggid}`}" class="btn btn-primary" id="eye">
                                    <i class="fa fa-eye"></i>
                                </router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
                        </div>
                    </div>
                <br />
                <br />
                <div class="clearfix">
                    <div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                    <ul class="pagination">
                        <li class="page-item disabled"><a href="#">Previous</a></li>
                        <li class="page-item"><a href="#" class="page-link">1</a></li>
                        <li class="page-item"><a href="#" class="page-link">2</a></li>
                        <li class="page-item active">
                            <a href="#" class="page-link">3</a>
                        </li>
                        <li class="page-item"><a href="#" class="page-link">4</a></li>
                        <li class="page-item"><a href="#" class="page-link">5</a></li>
                        <li class="page-item"><a href="#" class="page-link">Next</a></li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
        </div>
    
    </template>
    <script>
    import OnboardingDetails from '@/services/OnboardingDetails'
    export default {
        name: "OnboardingTable",
        data() {
            return {
                onboarding: [],
                search: '',
                em: true
            }
        },
        methods: {
            retrieveOnboardingList() {
                OnboardingDetails.getAll().then(response => {
                        this.onboarding = response.data;
                        console.log(response.data.projectDetails);
                    })
                    .catch(e => {
                        alert(e)
                    })
            },
            // Em() {
            //     this.em = !this.em
            // }
        },
        created() {
            this.retrieveOnboardingList()
        },
        computed: {
            filters() {
                return this.onboarding.filter((onboard) => {
                    return onboard.firstName.match(this.search);
                })
            }
        }
    };
    </script>
    <style scoped>
    
    </style>