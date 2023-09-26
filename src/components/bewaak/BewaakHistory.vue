<template>
  <!---<button type="submit" @click="Em">EM</button>-->
  <div class="container-xl" >
    <div class="row">
      <div class="col-lg-12">
          <div class="main-box no-header clearfix">
              <div class="main-box-body clearfix">
                  <div class="table-responsive">
                      <table class="table user-list">
          <thead>
            <tr>
              <!-- <th class="text-center">S.NO</th> -->
              <th class="text-center">GGID</th>
              <th class="text-center">CORP ID</th>
              <th class="text-center">NAME</th>
              
              <th class="text-center">Contract type</th>
              <th class="text-center">ASSOCIATE type</th>
              <th class="text-center">employment type</th>
              <th class="text-center">LOCATION</th>
                 <th class="text-center">residence</th>
              <th class="text-center">BLOCK ID</th>
           
              <th class="text-center">Project START DATE</th>
              <th class="text-center">Project END DATE</th>
              <th class="text-center">STATUS</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="onboard in status1" :key="onboard.ggid">
              <td>{{onboard.ggid}}</td>
              <td>{{onboard.corpid}}</td>
              <td>{{onboard.firstName}}</td>
              <td>{{onboard.amperit}}</td>
              <td>{{onboard.billable}}</td>
              <td>{{onboard.employmentType}}</td>
              <td>{{onboard.empLoc}}</td>
              <td>{{onboard.countryOfResidence}}</td>
              <td>{{onboard.blockId}}</td>
              <td>{{onboard.projectDetails.startDate}}</td>
              <td>{{onboard.projectDetails.endDate}}</td>
               <td  class="badge-danger">
                <span :class="onboard.status=== 'Onboarded' ? 'text-green' : 'text-red'">{{onboard.status}}</span>
              </td>
              <td> <router-link :to="{path:`/ViewBewaak/${onboard.ggid}`}" >
                  <i class="glyphicon glyphicon-eye-open"></i></router-link>
                  <!-- <router-link :to="{path:`/OffBoardingform/${onboard.ggid}`}" >
                  <i class="glyphicon glyphicon-edit"></i></router-link>
                  <router-link :to="{path:`/changeReqform/${onboard.ggid}`}" >

                  <span><i class="glyphicon glyphicon-edit"></i></span> </router-link> -->

             
               </td>
            </tr>
          </tbody>
        </table>
                  </div>
              </div>
        <br />
        <br />
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
      </div>
    </div>
  </div>
      </div>
   

 
</template>
<script>
  import OnboardingService from '@/services/OnboardingDetails'
  import OffBoardingServices from '@/services/OffBoardingServices'
export default {
  name: 'BewaakHistory',
  data(){
            return{
             onboarding:[],
             list: [],
             search:'',
             offsearch:'',
             em:true.value,
            // status:'onboarded',
           status:'Onboarded'
            }
        },
        methods: {
        retrieveOnboardingList() {
         OnboardingService.getAll().then(response => {
                    this.onboarding = response.data;
                    console.log(response.data.projectDetails);
                })
                .catch(e => {
                    alert(e)
                })
        },
        getOffBoardingStatus() {
      OffBoardingServices.getOffBoardingStatus().then((response) => {
        this.list = response.data;
        console.log(response);
      });
    },
  },
  created() {
    this.getOffBoardingStatus(),
    this.retrieveOnboardingList()
  },
        Em(){
          this.em = !this.em
        },
    computed:{
    /*filters(){
      return this.onboarding.filter((onboard)=>{
        return onboard.firstName.match(this.search);
      })
    },*/
    /*status1(){
     return  this.status='onboarded';
    }*/
    filterData() {
      return this.list.filter((offboardingstatus) => {
        return offboardingstatus.status.match('Offboarded') &&
        offboardingstatus.name.toLowerCase().match(this.offsearch)
      });
    },
    status1(){
      return this.onboarding.filter((onboard)=>{
          return onboard.status.match(this.status)
      && onboard.firstName.toLowerCase().match(this.search) || onboard.status.match('Offboarded')
      })
    }
  }
};
</script>
<style scoped>



</style>