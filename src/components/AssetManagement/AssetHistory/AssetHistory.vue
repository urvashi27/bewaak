<template>
<div class="container-xl">
 <div>  <h2> Asset History  </h2></div><br/>
  <div class="filter"> <input type="radio" v-model="selectedItems" value="Reviewed" /> Reviewed
  <input type="radio" v-model="selectedItems" value="Available" /> Available
  <input type="radio" v-model="selectedItems" value="Allocated" /> Allocated
  <input type="radio" v-model="selectedItems" value="NotApplicable" /> Not Applicable
  <input type="radio" v-model="selectedItems" value="Surrendered" /> Surrendered
    <input type="radio" v-model="selectedItems" value="NotSurrendered" /> Not Surrendered
  <input type="radio" v-model="selectedItems" value="Transferred" /> Transferred
  <input type="radio" v-model="selectedItems" value="SrrenderedToODC" /> Surrendered To ODC


  </div>
   <div class="table">
    <div class="col-12">
      <table class="table-responsive table-sm table-bordered">
        <thead>
          <tr>
            <th>ID</th>
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

            <!-- <th>Surrender Ticket</th>
            <th>Surrender/Release Date</th>
            <th>IMEI Number</th>
            <th>DID Number</th>
            <th>OS/Android Version</th>
            <th>Function</th> -->
            <th>Team Name</th>
            <!-- <th>MAC Address</th>
            <th>Procurement Reference</th> -->
            <th>Status</th>
            <th>Date</th>
            <th>Reason</th>
             <th>Actions</th>
          </tr>
        </thead>

          <tbody >
            <tr v-for="detail in filter" v-bind:key="detail.ggid">
            <td>{{detail.id}}</td>
            <td>{{detail.ggid}}</td>
            <td>{{detail.category}}</td>
            <td>{{detail.assettype}}</td>
            <td>{{detail.serialNumber}}</td>
            <td>{{detail.assetName}}</td>
            <td>{{detail.model}}</td>
            <td>{{detail.allocationTicket}}</td>
            <td>{{detail.allocationDate}}</td>
            <td>{{detail.assignedTo}}</td>
            <td>{{detail.location}}</td>
           

            <!-- <td>{{detail.surrenderTicket}}</td>
            <td>{{detail.surrenderDate}}</td>
            <td>{{detail.imeiNumber}}</td>
            <td>{{detail.didNumber}}</td>
            <td>{{detail.osVersion}}</td>
            <td>{{detail.function}}</td> -->
            <td>{{detail.teamName}}</td>
            <!-- <td>{{detail.macAddress}}</td>
            <td>{{detail.procurementReference}}</td> -->
           <td><h4>{{detail.status}}</h4> </td>
           <td>{{date}}</td>
           <td>{{detail.Reason}}</td>
            <td>
               <router-link
                :to="'/UpdateForm/' + detail.id"
                type="button"
                class=" btn btn-primary mt-5"
              >
                  View/Edit
              </router-link>
              <br /> <br />
              <button
                type="button"
                class="btn btn-danger"
                v-on:click="deleteAsset(detail.id)"
              >
                Delete
              </button>
      
            </td>
            
          </tr></tbody></table></div></div>
      </div>   
</template>

<script>
import Axios from "axios";
// import AddAssetservice from '@/services/AddAssetservice'

export default {
  name: "AssetHistory",
  data() {
    return {
      details: [],
      selectedItems:'Reviewed',
      status:'',
      err:"",
    };
  },
 created(){
 
    Axios.get("http://localhost:8083/addassetform/getall" ).then(
        (response) => {
          console.log(response.data);
          this.details = response.data;
        }
      );
  
    },

    //   Axios.get("http://localhost:8083/addassetform/getallbystatus/" + this.Reviewed ).then(
    //     (response) => {
    //       console.log(response.data);
    //       this.details = response.data;
    //     }
    //   );
    // },
  methods: {

deleteAsset(id) {
     Axios.delete("http://localhost:8083/addassetform/deletebyId/"+ id);
}
  },
  // async deleteAsset(id) {
  //       let comment = prompt("Comment:");
  // if (comment == null || comment == "") {
  //   alert("Please enter the comment to delete");
  // } else {
  //   //url to store comment
  // console.log(comment);
  //     console.log(id);
  //     // console.log(e);
  //       console.log(this.$route.params.id);
  //    Axios.delete("http://localhost:8083/addassetform/deletebyId/"+this.$route.params.id);
       
        // console.log(result.data.id);
        // this.detail=result.data; 
        // console.log(result.data.id);
    

    //  } },
   
  //   async mounted()
  //   {
  //       const result= await Axios.get("http://localhost:8083/addassetform/deletebyId/"+this.$route.params.id);
       
  //       console.log(result.data.id);
  //       this.detail=result.data; 
  //       console.log(result.data.id);
  //   }


    computed: {
       filter: function() {
        var vm = this;
        var status = vm.selectedItems;
      
        return this.details.filter(function(detail) {
                console.log(detail)
                return detail.status === status;
            });
      },
     }
}




</script>
<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}
/* input{
  width: 10px;
  height: 10px;
} */
</style>