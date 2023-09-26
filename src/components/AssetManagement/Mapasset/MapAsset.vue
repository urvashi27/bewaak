<template>
   <div>  <h2> Map Asset  </h2></div>
  
    
   <div class="container-xl" id="asset">
        <div class="row">
            <div class="col-lg-12">
                <div class="main-box no-header clearfix">
                    <div class="main-box-body clearfix">
                        <div class="table-responsive">
                            <table class="table user-list">
                              <thead>
          <tr>
            <th>GGID</th>
            <th>Category</th>
            <th>Asset Type</th>
            <th>Serial Number</th>
            <th>Asset Name</th>
            <th>Model</th>
            <th>Allocation Ticket Number</th>
            <th>Allocation Date</th>
            <th>Assigned To</th>
            <th>Surrender Ticket</th>
            <th>Surrender/Release Date</th>
            <th>Location</th>
            <!-- <th>IMEI Number</th>
            <th>DID Number</th>
            <th>OS/Android Version</th>
            <th>Function</th> -->
            <th>Team Name</th>
            <!-- <th>MAC Address</th>
            <th>ProcurementReference</th> -->
            <th>Comments</th>
            <th>Status</th>
             <th>Date</th>
            <th>Actions</th>

             <!-- <th class="text-center">&nbsp;</th> -->
          </tr>
        </thead>
        <tbody v-for="(A,index) in addassetform" :key="index">
          <tr>
            <td>{{A.ggid}}</td>
            <td>{{A.category}}</td>
            <td>{{A.assettype}}</td>
            <td>{{A.serialNumber}}</td>
            <td>{{A.assetName}}</td>
            <td>{{A.model}}</td>
            <td>{{A.allocationTicket}}</td>
            <td>{{A.allocationDate}}</td>
            <td>{{A.assignedTo}}</td>
            
            <td>{{A.surrenderTicket}}</td>
            <td>{{A.surrenderDate}}</td>
            <td>{{A.location}}</td>
            <!-- <td>{{A.imeiNumber}}</td>
            <td>{{A.didNumber}}</td>
            <td>{{A.osVersion}}</td>
            <td>{{A.function}}</td> -->
            <td>{{A.teamName}}</td>
            <!-- <td>{{A.macAddress}}</td>
            <td>{{A.procurementReference}}</td> -->
            <td>{{A.comment}}</td>
            <td><h4>{{A.status}}</h4> </td>
             <td>{{date}}</td>
            <td> <router-link
                :to="'/updateMapForm/' + A.id"
                type="button"
                class="btn btn-danger"
              >
                Edit
              </router-link></td>
          </tr>
          
        </tbody>
        
       
      </table>
    </div></div></div></div></div></div>
</template>

<script>


import AddAssetservice from '@/services/AddAssetservice'
/* eslint-disable */ 
export default {
    name: 'addassetform',
    data() {
        return {
            addassetform: [],
             date: new Date().toISOString().substr(0, 10),
            // status:''
        }
    },
    methods: 
    {
      
    
   retrieveaddassetform() {
            AddAssetservice.getAll()
                .then(response => {
                    this.addassetform = response.data
                    
                })
                .catch(e => {
                    alert(e)
                })
        },
            editAsset(data) {
                this.$router.push({name:'updateMapForm', params:data});
                }
      },

    
    mounted() {
        this.retrieveaddassetform()
    }
}
</script>
<style scoped>

</style>