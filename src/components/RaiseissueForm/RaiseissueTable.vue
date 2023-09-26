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
                      <th class="text-center">USERNAME</th>
                      <th class="text-center">GGID</th>
                      <th class="text-center">SEVERITY</th>
                      <th class="text-center">PRIORITY</th>
                      <th class="text-center">BUG MODULE</th>
                      <th class="text-center">SUMMARY</th>
                      <th class="text-center">DESCRIPTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for = "user in users" v-bind:key = "user.id">
                      <td> {{user.id}} </td>
                      <td> {{user.employeename}} </td>
                      <td> {{user.ggid}} </td>
                      <td> {{user.severity}} </td>
                      <td> {{user.priority}} </td>
                      <td> {{user.bugfound}} </td>
                      <td> {{user.summary}} </td>
                      <td> {{user.description}} </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- <nav class="d-flex justify-content-center">
              <ul
                class="
                  pagination pagination-base pagination-boxed pagination-square
                  mb-0
                "
              >
                <li class="page-item">
                  <a class="page-link no-border" href="#">
                    <span aria-hidden="true">«</span>
                    <span class="sr-only">Previous</span>
                  </a>
                </li>
                <li class="page-item active">
                  <a class="page-link no-border" href="#">1</a>
                </li>
                <li class="page-item">
                  <a class="page-link no-border" href="#">2</a>
                </li>
                <li class="page-item">
                  <a class="page-link no-border" href="#">3</a>
                </li>
                <li class="page-item">
                  <a class="page-link no-border" href="#">4</a>
                </li>
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
    import RaiseissueService from '@/services/RaiseissueService';
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Users',
  
    data(){
          return{
            users : ''
          }
        }, 
    
        methods: {
            getRaiseIssueForm(){
            RaiseissueService.getRaiseIssueForm().then((response)=> {
              this.users = response.data;
            });
          },
          
        },
    
        created() {
          this.getRaiseIssueForm()
          
        }
    
  };
  
  </script>
    <style scoped>
  </style>