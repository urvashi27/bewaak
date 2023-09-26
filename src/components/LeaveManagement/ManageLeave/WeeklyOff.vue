<template>
    <form class="weeklyoffForm">
        <div>
            <h2>
                View/Change Weekly Off
            </h2>
        </div>
        <div class="row">
           <div class="col-md-6">
        <label class="required">Employee Name</label>
        <input class="weekinput" type="text"  />
         <span
          class="error-msg"
          v-if="v$.employee.$error"
        >{{v$.employee.$errors[0].$message}}</span>
        </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <label class="required">Start Date</label>
                <input class="weekinput" type="date" v-model="startDate" />
                 <span
          class="error-msg"
          v-if="v$.startDate.$error"
        >{{v$.startDate.$errors[0].$message}}</span>
            </div>
            <div class="col-md-6">
                 <label class="required">End Date</label>
                  <input class="weekinput" type="date" v-model="endDate" />
                   <span
          class="error-msg"
          v-if="v$.endDate.$error"
        >{{v$.endDate.$errors[0].$message}}</span>
            </div>
        </div>
        
        <div class="row">
            <div class="col-md-6">
              <div text-align="left"><label>Select days</label></div>
            <div class="col-md-3">
               <div>
               <input  class="weekdays" type="checkbox"  name="monday">
                <label for="monday">Monday</label></div>

                <input class="weekdays"  type="checkbox"  name="wednesday">
                <label for="wednesday">Wednesday</label>

                 <input class="weekdays"  type="checkbox" name="friday">
                <label for="friday">Friday</label>
                  <input class="weekdays"  type="checkbox" name="sunday">
                <label for="sunday">Sunday</label>
            </div>
            <div class="col-md-3">
              <input class="weekdays"  type="checkbox"  name="tuesday">
                <label for="tuesday">Tuesday</label>

                 <input class="weekdays"  type="checkbox"  name="thursday">
                <label for="thursday">Thursday</label>

                 <input class="weekdays"  type="checkbox"  name="saturday">
                <label for="saturday">Saturday</label>
            </div>
            
         
    </div> 
    
                 <span
          class="error-msg"
          v-if="v$.weeklyoff.$error"
        >{{v$.weeklyoff.$errors[0].$message}}</span>  
        
            
            <div class="col-md-6">
                <label class="required">Comments</label>
                  <input class="weekinput" type="textarea" v-model="comment" />
            </div>
          </div>  
        
        <div class="text-center py-4">
            <button class="submitBtn" type="button" @click="submit">Submit</button>
        </div>

    </form>
</template>
<script>


import useVuelidate from "@vuelidate/core";
import { required } from '@vuelidate/validators'


export default {
  name: "WeeklyOff",
   setup() {
    return { v$: useVuelidate() };
  },
  
  data() {
    return{
        weeklyoff:'',
         employee: "",
      startDate: "",
      endDate: "",
      comment:"",
      showDropDown:false,
      checkedList: [],
     
      weekDays:[
        {
            day:"Monday",
            checked:false
        },
        {
            day:"Tuesday",
            checked:false
        },
        {
            day:"Wednesday",
            checked:false
        },
        {
            day:"Thursday",
            checked:false
        },
        {
            day:"Friday",
            checked:false
        },
        {
            day:"Saturday",
            checked:false
        },
        {
            day:"Sunday",
            checked:false
        }

    ]
    }
},
validations: {
    employee: {
      required
      
    },
    startDate:{
        required
    },
    endDate:{
        required
    },
    weeklyoff:{
        required
    }

},
methods:{
    submit()
    {
        this.v$.$validate();
    },
    
}
}
</script>

<style scoped>
form {
  background: lavender;
}
.submitBtn {
  margin-top: 1em;
  width: 20%;
  background-color: #183adcd4;
  color: white;
  border: none;
}
select {
  width: 70%;
  height: 40px;
}
.weekinput {
  width: 70%;
  border-radius: 5px;
  height: 40px;
}
.weekdays
{
width:20%;
}
</style>