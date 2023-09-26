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
              <th class="text-center">Sr.No</th>
              <th class="text-center">EMPLOYEE NAME </th>
              <th class="text-center">GGID</th>
              <th class="text-center">BLOCK ID</th>
              <th class="text-center">STATUS</th>
              <th class="text-center">CHANGE-EFFECTIVE START DATE </th>
              <th class="text-center">CHANGE-EFFECTIVE END DATE </th>
              <th class="text-center">Action</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="user in users" v-bind:key="user.id">
              <td> {{user.id}} </td>
              <td> {{user. firstName}} </td>
              <td> {{user. ggid}} </td>
              <td> {{user.blockId}} </td>
              <td> {{user.status}} </td>
              <td> {{user.effectStartDate}} </td>
              <td> {{user. effectiveEndDate}} </td>
              <td>
                
                  <router-link :to="{ path: `/editchangeReqForm/${user.id}` }">
                     <span class="glyphicon glyphicon-edit"></span>
                  </router-link>
              </td>
          </tr>
      </tbody>
  </table>
                      </div>
                  </div>
                   <nav class="d-flex justify-content-center">
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
                      </nav>
                   </div>
                    </div>
                     </div>
                      </div>
  </template>
  <script>
  import ChangeRequestForm from '@/services/ChangeRequestForm'
  export default {
      name: 'ChangeRequest-app',
      data() {
          return {
              search: '',
              users: [],
          }
      },
      methods: {
          getAll() {
              ChangeRequestForm.getAll().then((response) => {
                  this.users = response.data;
              });
          }
      },
      
      created() {
          this.getAll();
      }
  }
  </script>
  <style scoped>
  
  </style>