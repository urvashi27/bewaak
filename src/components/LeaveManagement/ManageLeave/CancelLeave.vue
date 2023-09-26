<template>
  <form id="applyleave-form" justify-content-center>
    <div>
      <h2>Cancel leave</h2>
    </div>
   <br>

    <div class="row">
    <table class="table">
        <thead>
          <tr>
            
            <th scope="col">Emp ID</th>
            <th scope="col">Employee Name</th>
            <th scope="col">Detail</th>
            <th scope="col">Status</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col">View</th>
            <th scope="col">Cancel</th>
          </tr>
        </thead>
        <tbody >
          
          <tr v-for="d in details" :key="d.leaveId">
           
            
            <td>{{d.ggid}}</td>
            <td>{{ d.empName }}</td>
            <td>{{ d.leaveType }}</td>
            <td>{{ d.leaveStatus }}</td>
            <td>{{ d.startDate==null?d.inLieuOfDate:d.startDate }}</td>
            <td>{{ d.endDate==null?d.compOffDate:d.endDate }}</td>
            <td class="text-center">
              <router-link :to="{name:'LeaveDetails',params:{action:'viewDetails',sendId:d.leaveId}}">
                
                <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
              </router-link>
            </td>
                <td class="text-center">
              <router-link :to="{name:'LeaveDetails',params:{action:'cancelLeave',sendId:d.leaveId}}">
                  <span class="fa fa-times"></span>
                  </router-link>
              </td>
            
          </tr> 
        </tbody>

       
      </table>
    </div>
  </form>
</template>

<script>
  import LmsService from '@/services/LmsService'
// import { required } from 'vuelidate/lib/validators'
export default {
  name: "CancelLeave",
  data() {
    return {
      name: "sairam",
      leaveYear: "2022",
      details: [],
      empId:'',
      user: JSON.parse(localStorage.getItem('users')),
    };
  },
  created() {
    
    
    LmsService.getLeavesByEmpId(this.user.ggid).then(res =>
    {
      this.details=res.data;
    })
  },
  methods: {
   
  }
};
</script>

<style>
/* .cancelleave-form {
  background: rgb(230, 230, 250);
   width: 800px;
  font-weight: bold;
  font-size: 15px;
  padding-left: 50px; 
} */
/* input {
  width: 70%;
  border-radius: 5px;
  height: 40px;
} */


.required:after {
  content: " *";
  color: red;
}
@import url('@/styles/style.css');
</style>
