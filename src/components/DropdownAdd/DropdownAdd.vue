<template>
    <div class="" >
         <div class="row">
          <div class="col-md-12">
              <div class="drop-box no-header clearfix pt-3">
                  <div class="main-box-body clearfix">
                      <div class="table-responsive">
                          <table class="table user-list">
                              <thead>
                <tr>
                <th class="text-center">DropDowns</th>
                <th class="text-center"><span>ACTION</span></th>
                <th class="text-center">&nbsp;</th>
                </tr>
                </thead>
                <tbody>
              <tr v-for="field in fields" :key="field">
                 <td>{{ field }}</td>   
                <td>
                  <router-link
                    :to="{
                      path: `/addDropdowns/${field}`,
                    }"
                    ><i class="fa fa-plus-circle"></i>
                  </router-link>
                </td>
              </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
                      <br/>
              </div>
              
          </div>
          
      </div>
      </div>
  </template>
  
  <script>
  import FieldOptionsServices from '@/services/FieldOptionsServices';
  
  
  export default {
      name:'dropdownAdd',
      data(){
          return{
              fields:''
          }
      },
      created(){
          FieldOptionsServices.getAllKeys().then(response =>{
              this.fields= response.data;
              console.log(response.data);
          })
      }
  
  }
  </script>
  
  <style scoped>
  .fa-plus-circle{
      font-size:18px;
      color:#41aff9;
  }
  </style>