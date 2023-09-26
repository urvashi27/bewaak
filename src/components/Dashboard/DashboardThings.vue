<template>
    <div class="container-xl">
          <div class="row">
        <div class="col-lg-3 col-sm-6">
            <div class="card-box bg-blue">
                <div class="inner">
                    <h3> {{pendingUsers.length}} </h3>
                    <p> New Users </p>
                </div>
                <div class="icon">
                    <i class="fa fa-users" aria-hidden="true"></i>
                </div>
                <a href="/userstable" class="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6">
            <div class="card-box bg-green">
                <div class="inner">
                    <h3> {{Onpending}} </h3>
                    <p>  Onboarding Requests </p>
                </div>
                <div class="icon">
                    <i class="fas fa-user-plus " aria-hidden="true"></i>
                </div>
                <a href="/onboardingrequests" class="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6">
            <div class="card-box bg-orange">
                <div class="inner">
                    <h3> {{Offboarding.length}} </h3>
                    <p> Offboarding Requests  </p>
                </div>
                <div class="icon">
                    <i class="fa fa-user-minus" aria-hidden="true"></i>
                </div>
                <a href="/offboardingrequests" class="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6">
            <div class="card-box bg-red">
                <div class="inner">
                    <h3> {{CrPending}} </h3>
                    <p> Change Requests </p>
                </div>
                <div class="icon">
                    <i class="fa fa-user-check"></i>
                </div>
                <a href="/changerequests" class="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
            </div>
        </div>
    </div>
                  
                    <div class="row">
                        <!-- Area Chart -->
                        <div class="col-xl-8 col-lg-7">
                            <div class="card shadow mb-4">
                                <!-- Card Header - Dropdown -->
                                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 class="m-0 font-weight-bold text-primary"> activity </h6>
                                </div>
                                <!-- Card Body -->
                                <div class="card-body">
                                    <div class="">
                                        <canvas id="myBar" ></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Pie Chart -->
                        <div class="col-xl-4 col-lg-5">
                            <div class="card shadow mb-4">
                                <!-- Card Header - Dropdown -->
                                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 class="m-0 font-weight-bold text-primary">Overview</h6>
                                </div>
                                <!-- Card Body -->
                                <div class="card-body">
                                         <pie-chart :data="chartData" :options="chartOptions"></pie-chart>
                                    <div class="">
                                        <canvas id="myChart"></canvas>
                                        <!-- <canvas id="myChart" style="width:100%;max-width:600px"></canvas> -->
                                    </div>
                                    <div class="mt-4 text-center small">
                                        <span class="mr-2">
                                            <i class="fas fa-circle text-danger"></i> change req
                                        </span>
                                        <span class="mr-2">
                                            <i class="fas fa-circle text-success"></i> onboarded
                                        </span>
                                        <span class="mr-2">
                                            <i class="fas fa-circle text-warning"></i> offboarded
                                        </span>
                                        <span class="mr-2">
                                            <i class="fas fa-circle text-info"></i> new users
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 
                 

 </div>
</template>
<script>
import OnboardingDetails from '@/services/OnboardingDetails'
import OffBoardingServices from '@/services/OffBoardingServices'
import ChangeRequestForm from '@/services/ChangeRequestForm'
import UserService from '@/services/UserService'
 import Chart from 'chart.js/auto';
export default {
    name: "DashboardThings",
    data() {
        return {
            onboarding: [],
            users:[],
          newuser:'',
            search: '',
            onboards: true,
            offboards:true,
            crf:true,
            list: [],
            clicked:false,
            pendinguser: 0,
             onpendings:0,
              offpendings: 0,
             crpendings: 0,
             flag:true
        }
    },
    computed:{
        pendingUsers(){
            return this.newuser.filter(({ status }) => status === "pending");
        },
        Onpending(){
            return this.onpendings;
        },
        Offboarding(){
            return  this.list.filter(({ status }) => status === "Waiting for Offboarding");
        },
        CrPending(){
            return this.crpendings;
        }
    },
    methods: {
         newusers() {
                  UserService.getAllUsers().then((response) => {
                this.newuser = response.data;
               const result = this.newuser.filter(({ status }) => status === "pending");
                localStorage.setItem('pendingusers', result.length);
                this.pendinguser = result.length;
            });
        },
        getOffBoardingStatus() {
            OffBoardingServices.getOffBoardingStatus().then((response) => {
                this.list = response.data;
              const offpending = this.list.filter(({ status }) => status === "Waiting for Offboarding");
                localStorage.setItem('offpending', offpending.length);
                this.offpendings = offpending.length;
            });
        },
        retrieveOnboardingList() {
            OnboardingDetails.getAll().then(response => {
                    this.onboarding = response.data;
                  const onpending = this.onboarding.filter(({ status }) => status === "Waiting for approval");
                localStorage.setItem('onpending', onpending.length);
                this.onpendings = onpending.length;
                })
                .catch(e => {
                    alert(e)
                })
        },
        getCrf() {
            ChangeRequestForm.getAll().then((response) => {
                this.users = response.data;
                const crpending = this.users.filter(({ status }) => status === "Waiting for Approval");
                localStorage.setItem('crpending', crpending.length);
                this.crpendings = crpending.length;
            })
             .catch(e => {
                    alert(e)
                });
                // this.den();
        },
        Onboard() {
            // this.onboards = !this.onboards
            this.offboards = false
            this.clicked = true
            this.onboards=true
              this.crf = false
        },
        Offbaord() {
            // this.offboards = !this.offboards
            this.clicked = true
            this.onboards = false
            this.offboards = true
              this.crf = false
        },
         Crf() {
            // this.offboards = !this.offboards
            this.clicked = true
            this.onboards = false
            this.offboards = false
            this.crf = true
        },

    },
    // computed: {
    // },
    created() {
        this.retrieveOnboardingList(),
        this.getOffBoardingStatus(),
        this.getCrf(),
        this.newusers()
    },
    mounted() {
        const ctx= document.getElementById('myChart')
   const data = {
  datasets: [{
    data: [this.pendingUsers.length, this.Offboarding.length, this.onpendings,  this.crpendings],
    backgroundColor: [
      '#3794FC',
      '#FCB41D',
      '#51C81C',
      '#FC381D'
    ],
    hoverOffset: 4,
  }]
};  
const myChart = new Chart(ctx, {
  type: 'doughnut',
  data: data,
});
myChart;
 const cty= document.getElementById('myBar')
 const myBar = new Chart(cty,{
 type: 'bar',
 data: {
    labels: ['new users','onboarding','offboarding','change req'],
datasets: [{
    data: [localStorage.pendingusers,  this.onpendings,this.offpendings, this.crpendings],
    backgroundColor: [
       '#3794FC',
        '#51C81C',
      '#FCB41D',
      '#FC381D'
    ],
   barThickness: 8,  
 borderRadius: 9,
  }]
 },
 options: {
            indexAxis: 'y',
            plugins:{
   legend: {
    display: false
   }
  },
  layout: {
        padding: 10,
    },
    scales: {
     x: {
    grid: {
      display: false,
    }
  },
  y: {
    grid: {
      display: false,
    },
  }
    },
  },
 })
myBar;
    },
}
</script>
<style scoped>
.card-body {
    flex: 1 1 auto;
    padding: 0.2rem 0.2rem;
}
.progress {
    height: 8px;
    margin-bottom: 20px;
    overflow: hidden;
    background-color: #f5f5f5;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 2px rgb(0 0 0 / 10%);
    box-shadow: inset 0 1px 2px rgb(0 0 0 / 10%);
}
.border-left-primary {
    border-left: 0.45rem solid #4e73df!important;
}
.border-left-success {
    border-left: 0.45rem solid #1cc88a!important;
}
.border-left-info {
    border-left: 0.45rem solid #36b9cc!important;
}
.border-left-warning {
    border-left: 0.45rem solid #f6c23e!important;
}
.card{
    border-radius: 10px;
    background-color: #F3F6F9;
}
.container-fluid{
    zoom: 80%;
}
.card {
    margin:0.8rem;
    padding:0;
    background-color: #fff;
    border-radius: 10px;
    border: none;
    position: relative;
    /* margin-bottom: 30px; */
    /* box-shadow: 0 0.46875rem 2.1875rem rgba(90,97,105,0.1), 0 0.9375rem 1.40625rem rgba(90,97,105,0.1), 0 0.25rem 0.53125rem rgba(90,97,105,0.12), 0 0.125rem 0.1875rem rgba(90,97,105,0.1); */
}
.l-bg-cherry {
    background: linear-gradient(to right, #493240, #f09) !important;
    color: #fff;
     background: #e74a3b;
}
.l-bg-blue-dark {
    background: linear-gradient(to right, #373b44, #4286f4) !important;
    color: #fff;
     background: #4e73df;
}
.l-bg-green-dark {
    background: linear-gradient(to right, #0a504a, #38ef7d) !important;
    background: #1cc88a;
    color: #fff;
}
.l-bg-orange-dark {
    background: linear-gradient(to right, #a86008, #ffba56) !important;
    color: #fff;
     background: #f6c23e;
}
.card .card-statistic-3 .card-icon-large .fas, .card .card-statistic-3 .card-icon-large .far, .card .card-statistic-3 .card-icon-large .fab, .card .card-statistic-3 .card-icon-large .fal {
    font-size: 110px;
}
/* 2nd styele */
.card-box {
    position: relative;
    color: #fff;
    padding: 20px 10px 40px;
    margin: 10px 0px;
    border-radius: 10px;
}
.card-box:hover {
    text-decoration: none;
    color: #f1f1f1;
}
.card-box:hover .icon i {
    font-size: 88px;
    transition: 1s;
    -webkit-transition: 1s;
}
.card-box .inner {
    padding: 5px 10px 0 10px;
}
.card-box h3 {
    font-size: 27px;
    font-weight: bold;
    margin: 0 0 8px 0;
    white-space: nowrap;
    padding: 0;
    text-align: left;
    color:white
}
.card-box p {
    font-size: 15px;
}
.card-box .icon {
    position: absolute;
    top: auto;
    bottom: 5px;
    right: 5px;
    z-index: 0;
    font-size: 72px;
    color: rgba(0, 0, 0, 0.15);
}
.card-box .card-box-footer {
    position: absolute;
    left: 0px;
    bottom: 0px;
    text-align: center;
    padding: 3px 0;
    color: rgba(255, 255, 255, 0.8);
    background: rgba(0, 0, 0, 0.1);
    width: 100%;
    text-decoration: none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
.card-box:hover .card-box-footer {
    background: rgba(0, 0, 0, 0.3);
}
.bg-blue {
    background-color: #00c0ef !important;
}
.bg-green {
    background-color: #00a65a !important;
}
.bg-orange {
    background-color: #f39c12 !important;
}
.bg-red {
    background-color: #d9534f !important;
}
#myChart{
    zoom:80%;
    margin-left: 80px;
}
</style>