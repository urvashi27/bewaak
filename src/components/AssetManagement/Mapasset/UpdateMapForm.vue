<template>
   <div class="table">
    <div class="col-12">
      <table class="table-responsive table-sm table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>GGID</th>
            <th>Asset Type</th>
            <th>Serial Number</th>
            <th>Asset Name</th>
            <th>Model</th>
            <th>Allocation Ticket Number</th>
            <th>Allocation Date</th>
            <th>Assigned To</th>
            <th>Surrender Ticket</th>
            <th>Surrender/Release Date</th>
            <th>KillDisk Number</th>
            <th>Location</th>
            <th>Status</th>
            <th>Comments</th>
           </tr>
        </thead>
        <tbody>
          <tr >
            <td ><input type="text" name="id" disabled v-model="D.id"></td>
            <td ><input type="text" name="ggid" disabled v-model="D.ggid"></td>
            <td><input type="text" name="category" disabled v-model="D.category"></td>
            <td><input type="text" name="assettype" disabled v-model="D.assettype"></td>
            <td><input type="text" name="serialNumber" disabled v-model="D.serialNumber"></td>
            <td><input type="text" name="assetName" disabled v-model="D.assetName"></td>
            <td><input type="text" name="model" disabled v-model="D.model"></td>
            <td><input type="text" name="allocationTicket" disabled v-model="D.allocationTicket"></td>
            <td><input type="text" name="allocationDate" disabled v-model="D.allocationDate"></td>
            <td><input type="text" name="assignedTo" disabled v-model="D.assignedTo"></td>
            <td><input type="text" name="surrenderTicket" v-model="D.surrenderTicket"></td>
            <td><input type="text" name="surrenderDate"  v-model="D.surrenderDate"></td>
            <td><input type="text" name="location" disabled v-model="D.location"></td>
         
       <td><select name="status" id="status"  @change="onChange($event)">
      <option disabled selected hidden>{{D.status}}</option>
        <option value="Reviewed" type="button">Reviewed</option>
          </select> </td>
          </tr></tbody></table></div></div>
          <button class="btn-success" v-on:click="updateAsset(id,data)">Save</button>
</template>

<script>

import Axios from "axios";
export default {
  name: "UpdateMapForm",
  data() {
    return {
         D:{
        id:'',
        ggid:'',
        allocationTicket:'',
        allocationDate:'',
        assetName:'',
        assettype:'',
        assignedTo:'',
        category:'',
        comment:'',
        killDiskNumber:'',
        model:'',
        serialNumber:'',
        surrenderDate:'',
        surrenderTicket:'',
        location:'',
         status:'',
         }
      }
  },
  methods:{
      
       onChange(e){
    console.log("onchange"+e.target.value);
    this.D.status=e.target.value;
  },

   async updateAsset(){    
  console.log(this.$route.params.id);
  const result= await Axios.put(`http://localhost:8083/addassetform/update/`+this.$route.params.id, {
 allocationDate:this.D.allocationDate,
allocationTicket:this.D.allocationTicket,
assetName: this.D.assetName,
assettype: this.D.assettype,
assignedTo:this.D.assignedTo, 
category: this.D.category,
comment:this.D.comment, 
ggid: this.D.ggid,
id: this.D.id,
killDiskNumber:this.D.killDiskNumber, 
model: this.D.model,
location:this.D.location,
serialNumber: this.D.serialNumber,
status: this.D.status,
surrenderDate: this.D.surrenderDate,
surrenderTicket: this.D.surrenderTicket,

    });
    console.log(result);
    if(result.status==200)
    {alert("Updated successfully");
     this.$router.push({name: 'MapAsset'})
    }
   }
  },
   async mounted()
    {
        const result= await Axios.get("http://localhost:8083/addassetform/assetsbyid/"+this.$route.params.id);
        console.log(result.data.id);
        this.D=result.data; 
       }
  }
  
</script>

<style>

</style>