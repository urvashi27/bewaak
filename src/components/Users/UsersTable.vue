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
                           <th class="text-center">S.NO</th>
                           <th class="text-center">FirstNAME</th>
                           <th class="text-center">LASTNAME</th>
                           <th class="text-center">GENDER</th>
                           <th class="text-center">SUPERVISOR</th>
                           <th class="text-center">CONTACT</th>
                           <th class="text-center">EMAIL</th>
                           <th class="text-center">GGID</th>
                           <th class="text-center">PASSWORD</th>
                           <th class="text-center">Role</th>
                           <th class="text-center">isActive</th>
                           <th class="text-center">Status</th>
                           <th class="text-center">Action</th>
                       </tr>
                   </thead>
                   <tbody>
                       <tr v-for="user in users" :key="user.ggid" id="height">
                        <td>{{user.userid}}</td>
                           <td>{{user.firstName}}</td>
                           <td>{{user.lastName}}</td>
                           <td>{{user.gender}}</td>
                           <td>{{user.supervisor}}</td>
                           <td>{{user.contact}}</td>
                           <td>{{user.email}}</td>
                           <td>{{user.ggid}}</td>
                           <td>{{user.password}}</td>
                           <td>{{user.role}}</td>
                           <td>{{user.active}}</td>

                <td  class="badge-danger">
                <span :class="user.status=== 'pending' ?  'text-red' :'text-green' ">{{user.status}}</span>
              </td>
                           <td >
                            <router-link :to="{ path: `/usersupdate/${user.userid}` }">
                     <span class="glyphicon glyphicon-edit"></span>
                  </router-link>
                          </td>
                       </tr>
                   </tbody>
               </table>
                       </div>
                   </div>
               <br />
               <br />
           </div>
       </div>
       </div>
       </div>
   </template>
   <script>
   import UserService from '@/services/UserService'
   export default {
       name: "UsersTable",
       data() {
           return {
               users: [],
               search: '',
               em: true,
               user: JSON.parse(localStorage.getItem('users')),
              }
        },
        methods: {
            retrieveUserList() {
                
                UserService.getAllUsers().then(response => {
                        this.users = response.data;
                        console.log(this.users);
                        var fullName=this.user.firstName+' '+this.user.lastName
                        console.log(fullName);
                var a=this.users.filter((user)=>
                user.supervisor==fullName);
               
                console.log(a);
                    })
                    .catch(e => {
                        alert(e)
                    })
            },
            // Em() {
            //     this.em = !this.em
            // }
        },
        created() {
            this.retrieveUserList()
        },
        computed: {
    itemsWithSno() {
      return this.users.map((d, index) => ({ ...d, sno: index + 1 }))
    }
  },
    };
    </script>
    <style scoped>
   


   </style>