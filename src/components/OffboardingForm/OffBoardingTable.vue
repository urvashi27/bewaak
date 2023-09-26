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
                                    <th class="text-center">GGID</th>
                                    <th class="text-center"><span>NAME</span></th>
                                    <th class="text-center"><span>ABN LEAD?</span></th>
                                    <th class="text-center"><span>INTIATED BY</span></th>
                                    <th class="text-center"><span>EM MANAGER</span></th>
                                    <th class="text-center"><span>BLOCK ID</span></th>
                                    <th class="text-center"><span>REASON</span></th>
                                    <th><span>OFFBOARDING DATE</span></th>
                                    <th class="text-center"><span>STATUS</span></th>
                                    <!-- <th class="text-center"><span>ACTION</span></th> -->
                                    <th class="text-center">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="offboardingstatus in filterData" v-bind:key="offboardingstatus.offboardingId">
                                    <td>{{ offboardingstatus.ggid }}</td>
                                    <td>{{ offboardingstatus.firstName }}</td>
                                    <td>{{ offboardingstatus.abnEnggLead }}</td>
                                    <td>{{ offboardingstatus.initiatedBy }}</td>
                                    <td>{{ offboardingstatus.engagementManager }}</td>
                                    <td>{{ offboardingstatus.blockId }}</td>
                                    <td>{{ offboardingstatus.reasonForOffboarding }}</td>
                                    <td>{{ offboardingstatus.offboardingDate }}</td>
                                    <td>{{ offboardingstatus.status }}</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- <nav class="d-flex justify-content-center">
                    <ul class="pagination pagination-base pagination-boxed pagination-square mb-0">
                        <li class="page-item">
                            <a class="page-link no-border" href="#">
                                <span aria-hidden="true">«</span>
                                <span class="sr-only">Previous</span>
                            </a>
                        </li>
                        <li class="page-item active"><a class="page-link no-border" href="#">1</a></li>
                        <li class="page-item"><a class="page-link no-border" href="#">2</a></li>
                        <li class="page-item"><a class="page-link no-border" href="#">3</a></li>
                        <li class="page-item"><a class="page-link no-border" href="#">4</a></li>
                        <li class="page-item">
                            <a class="page-link no-border" href="#">
                                <span aria-hidden="true">»</span>
                                <span class="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav> -->
                <br />
            </div>

        </div>

    </div>
</div>
</template>

  
<script>
import OffBoardingServices from "@/services/OffBoardingServices";
export default {
    name: "OffboardingTable",
    data() {
        return {
            list: [],
            search: "",
            em: true
        };
    },
    methods: {
        getOffBoardingStatus() {
            OffBoardingServices.getOffBoardingStatus().then((response) => {
                this.list = response.data;
                console.log(response);
            });
        },

    },
    created() {
        this.getOffBoardingStatus();
    },
    computed: {
        filterData() {
            return this.list.filter((offboardingstatus) => {
                return offboardingstatus.firstName.match(this.search);
            });
        },
    },
};
</script>
  
<style scoped>

  </style>
