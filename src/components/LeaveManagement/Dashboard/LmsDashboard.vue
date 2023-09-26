<template>
  <div class="container-xl">
  <div class="row">
    <div>
    <h3 class="float-start ms-2 mt-2">My Leave Planner</h3>
    </div>
  </div>
  <hr />
  <div class="row">
    <div class="col-md-6">
      <i class="far fa-calendar-check text-dark"></i>
      <p class="text-dark fw-bold">Privilege Leave Available</p>
      <h3>{{this.daysAvailable}} days</h3>
    </div>
    <div class="col-md-6">
     <router-link to="/apply"> <button class="applyButton">Apply Leave</button></router-link>
    </div>
  </div>
  <hr />
  <div class="row">
    <div class="col-md-6">
      <h4 class="fw-bold">Pending Requests</h4>
      <div class="card">
        <div class="row justify-content-center">
        
         <div class="col-xs-7 text-center">
         <div class="text-dark fw-bold">Leave Requests</div>
        
         <div class="huge">{{this.leaveRequests}}</div>
         </div>
        </div>
        
          </div>
      </div>
    
   
    <div class="col-md-6">
      <h4>Upcoming Holidays ( Hyderabad )</h4>
      <div class="card">
        <div class="container-sm my-3">
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <!-- Carousel indicators -->
        <ol class="carousel-indicators">
            <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
        </ol>
        <!-- Wrapper for carousel items -->
        <div class="carousel-inner">
            <div class="carousel-item active">
              
                <h1>Diwali kali pooja</h1>
            </div>
            <div class="carousel-item">
               
                <h1>Happy new year</h1>
            </div>
            <div class="carousel-item">
              
                <h1>Gandhi Jayanti</h1>
            </div>
        </div>
        <!-- Carousel controls -->
        <a class="carousel-control-prev" href="#myCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </a>
    </div>
      </div>
    </div>
   
  </div>
  
    <div>
    <h3 class="text-start ms-2 mt-2">My Leave Record</h3>
    </div>
    <div class="row px-2">
    <div class="col-md-3 text-center" style="background-color:bisque">
      <div>
      <h4>Leave Credit</h4>
      
      <div class="leaveCount">22</div>
      </div>
      <!-- <div class="leaveCount">22</div> -->
      </div>
      <div class="col-md-1" style="background-color:bisque">
      <div class="mt-5"><span class="huge">-</span></div>
    </div>
    <div class="col-md-3 text-center" style="background-color:bisque">
    <h4>Leave Debit</h4>
      
      <div class="leaveCount">{{this.leaveDebit}}</div>
      </div>
       <div class="col-md-1" style="background-color:bisque">
        <div class="mt-5">
      <span class="huge">=</span>
      </div>
      </div> 
    
    <div class="col-md-4 text-center" style="background-color:antiquewhite">
    <h4>Days Available</h4>
      
      <div class="leaveCount">{{this.daysAvailable}}</div>
      
     </div> 
    </div>
    </div>
  </div>
  
</template>

<script>
  import LmsService from '@/services/LmsService'

export default {
  name:'LmsDashBoard',
  data() {
    return {
     details: [],
     leaveRequests:0,
     daysAvailable:22,
     leaveDebit:0,
     empId:'',
     user: JSON.parse(localStorage.getItem('users')),
    };
  },
  mounted() {
  LmsService.getLeavesByEmpId(this.user.ggid).then(res =>
    {
      
      var totalDebit=0;
      this.details=res.data;
      this.details.forEach((element)=>
      {
        if(element.leaveStatus=='Approved' && element.leaveType == "Privilege")
        {
       totalDebit += element.countOfDays
        }
      });
      
       this.leaveDebit=totalDebit;
       this.details=this.details.filter((item)=>
       item.leaveStatus=='Applied'
       );
       
       this.leaveRequests= this.details.length;
       this.daysAvailable= 22-this.leaveDebit
    })
  },

};
</script>

<style>
h3 {
color: #00416D;


}
h4 {
 
 /* margin-left: 1em; */
  color: #00416D;
}


.leaveCount
{
  font-size: 40px;
}
.applyButton {
  margin-top: 3em;
  background-color:#00416D;
  color: white;
  border: none;
  border-radius: 0px;
  width: 35%;
}
.carousel-item{
    min-height: 103px;
}

.huge {
  font-size: 40px;
}

</style>
