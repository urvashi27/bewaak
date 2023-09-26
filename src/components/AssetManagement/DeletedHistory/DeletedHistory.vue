<template>
<div class="container-xl" id="asset">
 <div>  <h2> Deleted History  </h2></div><br/>

  <!-- <div> <input type="radio" v-model="selectedItems" value="Reviewed" /> Reviewed</div> -->
   <div class="table">
    <div class="col-xl-12">
      <table class="table-responsive table-sm table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>GGID</th>
            <th>Category</th>
            <th>Asset Type</th>
            <th>S Number</th>
            <th>Asset Name</th>
            <th>Model</th>
            <th>Ticket Number</th>
            <th> Date</th>
            <th>Assigned To</th>
            <th>Location</th>

            <th>S Ticket</th>
            <th>S/R Date</th>
            <th>IMEI Number</th>
            <th>DID Number</th>
            <th>Version</th>
            <th>Function</th>
            <th>Team Name</th>
            <th>MAC Address</th>
            <th>P Reference</th>
            <th>Status</th>
            <th>Date</th>
            <th>Reason</th>
          </tr>
        </thead>

          <tbody >
          <!-- <tr v-for="DH in selectedUser" v-bind:key="DH.ggid"> -->
             <tr v-for="DH in deleteAsset" v-bind:key="DH.ggid">
            <td>{{DH.id}}</td>
            <td>{{DH.ggid}}</td>
            <td>{{DH.category}}</td>
            <td>{{DH.assettype}}</td>
            <td>{{DH.serialNumber}}</td>
            <td>{{DH.assetName}}</td>
            <td>{{DH.model}}</td>
            <td>{{DH.allocationTicket}}</td>
            <td>{{DH.allocationDate}}</td>
            <td>{{DH.assignedTo}}</td>
            <td>{{DH.location}}</td>
           

            <td>{{DH.surrenderTicket}}</td>
            <td>{{DH.surrenderDate}}</td>
            <td>{{DH.imeiNumber}}</td>
            <td>{{DH.didNumber}}</td>
            <td>{{DH.osVersion}}</td>
            <td>{{DH.function}}</td>
            <td>{{DH.teamName}}</td>
            <td>{{DH.macAddress}}</td>
            <td>{{DH.procurementReference}}</td>
           <td><h4>{{DH.status}}</h4> </td>
           <td>{{date}}</td>
           <td>{{DH.Reason}}</td>
            
          </tr></tbody></table></div></div>
         </div>
</template>

<script>

// import Axios from "axios";
import AddAssetservice from '@/services/AddAssetservice'
export default {
  name: "DeletedHistory",

  data() {
    return {
         deleteAsset:[]  ,
        //  selectedItems:'Reviewed' 
      }
  },
  methods:{
    retrievedeleteAsset() {
            AddAssetservice.getalldeletehistory()
                .then(response => {
                    this.deleteAsset = response.data
                })
                .catch(e => {
                    alert(e)
                })
        }

    },
    //    Axios.get("http://localhost:8083/addassetform/getallbystatus/" + Reviewed).then(
    //     (response) => {
    //       console.log(response.data);
    //       this.DH = response.data;
    //        this.status=response.status;
    //     }
    //   )
    // },
  //    getallByStatus(status) {
  //           AddAssetservice.getallByStatus(status)
  //               .then(response => {
  //                   this.status = response.data
  //               })
  //               .catch(e => {
  //                   alert(e)
  //               })
  //       },
  // }

  
    created() {
        this.retrievedeleteAsset();
    
    
        // setInterval(this.getNow, 1000);
    },
    //  computed: {
    //    selectedUser: function() {
    //     return this.deleteAsset.filter(function(DH) {
    //             console.log(DH)
    //             return DH.Reviewed === this.selectedItems;
    //         });
    //   },
    //  }
}
  
</script>

<style>

</style>