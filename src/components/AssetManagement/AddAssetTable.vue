<template>
 <div class="container" id="asset">
   <button  class="custom-btn btn-7 text-center"  @click="Addasset()" >Add New Asset
      </button>
 
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
            <th>Location</th>

            <th>Surrender Ticket</th>
            <th>Surrender/Release Date</th>
            <th>IMEI Number</th>
            <th>DID Number</th>
            <th>OS/Android Version</th>
            <th>Function</th>
            <th>Team Name</th>
            <th>MAC Address</th>
            <th>ProcurementReference</th>
            <th>Status</th>
            <th>Date</th>
            <!-- <th>Action</th> -->
            
          </tr>
        </thead>
         <tbody v-for="A in addassetform" :key="A.ggid">
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
            <td>{{A.location}}</td>
           

            <td>{{A.surrenderTicket}}</td>
            <td>{{A.surrenderDate}}</td>
            <td>{{A.imeiNumber}}</td>
            <td>{{A.didNumber}}</td>
            <td>{{A.osVersion}}</td>
            <td>{{A.function}}</td>
            <td>{{A.teamName}}</td>
            <td>{{A.macAddress}}</td>
            <td>{{A.procurementReference}}</td>
           <td><h4>{{A.status}}</h4> </td>
           <td>{{date}}</td>
            
                   <!-- <router-link :to="{path:`/viewdetails/${A.ggid}`}" class="btn btn-primary" id="eye">
                    <i class="fa fa-eye"></i>
                  </router-link> -->
              
            
            
          </tr>
          
        </tbody>
                            </table></div></div></div>
       
    <!-- <div class="clearfix">
                    <div class="hint-text">Showing <b>10</b> out of <b>25</b> entries</div>
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
                    </div>-->
                    <br/> </div>
    </div></div>
</template>

<script>


import AddAssetservice from '@/services/AddAssetservice'
/* eslint-disable */ 
export default {
    name: 'AddAssetTable',
    data() {
       
        return {
            addassetform: [],
            //  timestamp: ""
               date: new Date().toISOString().substr(0, 10),
            //    status:'New',
        }
    },
  
    methods: 
    {
      Addasset(){
      this.$router. push('/Assetform');
    },

    
   retrieveaddassetform() {
            AddAssetservice.getAll()
                .then(response => {
                    this.addassetform = response.data
                })
                .catch(e => {
                    alert(e)
                })
        }
    },
    created() {
        this.retrieveaddassetform();
    
    
        // setInterval(this.getNow, 1000);
    },
    
}
</script>
<style scoped>

   
</style>