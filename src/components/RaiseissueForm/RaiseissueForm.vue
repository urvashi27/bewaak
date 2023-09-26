<template>
    <form
      class="justify-content-center"
      @submit.prevent="SubmitForm()"
      id="form-f"
    >
      <div class="w-100">
        <h2>Report An Issue</h2>
        <div class="row">
          <div class="col-md-12">
            <label class="input1" for="select">Severity <span class="text-danger">*</span></label>
            <select id="select" placeholder="Select Your Answer" v-model="raiseissueForm.severity">
              <option>Critical</option>
              <option>Major</option>
              <option>Moderate</option>
              <option>Minor</option>
              <option>Cosmetic</option>
            </select>
          </div>
  
          <div class="col-md-12">
            <label class="input1" for="select">Priority <span class="text-danger">*</span></label>
            <select id="select" placeholder="Select Your Answer" v-model="raiseissueForm.priority">
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
  
          <div class="col-md-12">
            <label class="input1" for="select"
              >Where was this bug found in Bewaak ? <span class="text-danger">*</span></label
            >
            <select id="select" placeholder="Select Your Answer" v-model="raiseissueForm.bugfound">
              <option>Login</option>
              <option>Registration</option>
              <option>ToDoOps</option>
              <option>Onboarding Form</option>
              <option>Offboarding Form</option>
              <option>Change Request Form</option>
              <option>Feedback Form</option>
              <option>Raise Issue Form</option>
              <option>Any Bewaak Tables</option>
              <option>Others</option>
            </select>
          </div>
  
          <div class="col-md-12">
            <label for="ename" class="input1">Summary</label>
            <input type="text" id="ename" class="form-control" v-model="raiseissueForm.summary">
          </div>
  
          <div class="col-md-12" id="submit2">
            <div class="submit2">
              <label class="input1" for="comments">Description</label>
              <textarea class="form-control" v-model="raiseissueForm.description"></textarea>
            </div>
          </div>
          <br />
  
          <div class="text-center">
            <button type="submit" class="custom-btn btn-7 text-center">
              <span>Submit</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  </template>
    
    <script>
      import RaiseissueService from "@/services/RaiseissueService";
      import swal from 'sweetalert';  
        export default {
           name: 'RaiseissueForm',
  
      data() {
      return {
        user:JSON.parse(localStorage.getItem('users')),
        raiseissueForm: {
          severity: '',
          priority: '',
          bugfound: '',
          summary: '',
          description: ''
        },
      };
    },
  
    methods: {
      SubmitForm() {
        var data = {
          ggid: this.user.ggid,
          employeename: this.user.userName,
          severity: this.raiseissueForm.severity,
          priority: this.raiseissueForm.priority,
          bugfound: this.raiseissueForm.bugfound,
          summary: this.raiseissueForm.summary,
          description: this.raiseissueForm.description  
        };
  
          RaiseissueService.create(data)
            .then((response) => {
              this.raiseissueForm.ggid = response.data.id;
              swal({  
title: "Form Submitted!",    
icon: "success",  
button: "ok",  
customClass: 'swal-wide'
});
              
            })
  
            .catch((e) => {
              alert(e);
            });
       
      },
    },
    }
    </script>
    <style>
  @import url(@/styles/style.css);
  </style>