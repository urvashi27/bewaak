<template>
<br/><br/>

<div class="table">
    <div class="col-lg-12" >
     <div class="container-xl">
         <div class="row">
              <div class="main-box no-header clearfix">
                  <div class="main-box-body clearfix">
                      <div class="table-responsive">
                          <table class="table user-list">
   
      
        <thead>
          <tr>
            <th>ID</th>
            <th>GGID</th>
            <th>Category</th>
            <th>AssetType</th>
            <th>SerialNumber</th>
            <th>AssetName</th>
            <th>Model</th>
            <th>Allocation Ticket Number</th>
            <th>Allocation Date</th>
            <th>Assigned To</th>
            <th>Surrender Ticket</th>
            <th>Surrender/Release Date</th>
            <th>Location</th>
           
            <th>Comments</th>
            <th>IMEI Number</th>
            <th>DID Number</th>
            <th>Function</th>
            <th>Team</th>
            <th>OS/Android Version</th>
            <th>MAC Address</th>
             <th>Status</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td ><input type="text" name="id" disabled v-model="asset.id"></td>
            <td ><input type="text" name="ggid" disabled v-model="asset.ggid"></td>
            <td><input type="text" name="category" disabled v-model="asset.category"></td>
            <td><input type="text" name="assettype" disabled v-model="asset.assettype"></td>
            <td><input type="text" name="serialNumber" disabled v-model="asset.serialNumber"></td>
            <td><input type="text" name="assetName" disabled v-model="asset.assetName"></td>
            <td><input type="text" name="model" disabled v-model="asset.model"></td>
            <td><input type="text" name="allocationTicket" disabled v-model="asset.allocationTicket"></td>
            <td><input type="text" name="allocationDate" disabled v-model="asset.allocationDate"></td>
            <td><input type="text" name="assignedTo" disabled v-model="asset.assignedTo"></td>
            <td><input type="text" name="surrenderTicket"  v-model="asset.surrenderTicket"></td>
            <td><input type="text" name="surrenderDate" v-model="asset.surrenderDate"></td>
            <td><input type="text" name="location" disabled v-model="asset.location"></td>
            <!-- <td><input type="text" name="status" v-model="asset.status"></td> -->
            <td><input type="text" name="comment" disabled v-model="asset.comment"></td>
            <td><input type="text" name="imeinumber" disabled v-model="asset.imeinumber"></td>
            <td><input type="text" name="didnumber" disabled v-model="asset.didnumber"></td>
            <td><input type="text" name="function" disabled v-model="asset.function"></td>
            <td><input type="text" name="teamName" disabled v-model="asset.teamName"></td>
            <td><input type="text" name="osVersion" disabled v-model="asset.osVersion"></td>
            <td><input type="text" name="macaddress" disabled v-model="asset.macaddress"></td>


            <td><select 
              name="status"
        id="status"
        @change="onChange($event)"
      >
      <option disabled selected hidden>{{asset.status}}</option>
         <option value="Available" type="button">Available</option>
        <option value="Allocated" type="button">Allocated</option>
        <option value="NotApplicable" type="button">Not Applicable</option>
        <option value="Surrendered" type="button">Surrendered</option>
        <option value="NotSurrendered" type="button">Not Surrendered</option>
        <option value="Transferred" type="button">Transferred</option>
        <option value="SrrenderedToODC" type="button">Surrendered To ODC</option>
        <option value="Deleted" type="button">Deleted</option>

      </select></td>

          
          </tr>
        </tbody>
      </table><br/><br/>
      <button class="btn-success" v-on:click="updateAsset">Save</button>
    </div></div></div></div></div></div>
    
         
    
    

    
  </div>

</template>

<script>
import Axios from "axios";



export default {
name: 'UpdateForm',
data(){
    return{
        asset:{
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
        status:'',
        location:'',
        
      }

    }
},
methods:{
 async updateAsset(){    
    console.log(this.asset.status); 
    console.log(this.$route.params.id);
    const result= await Axios.put(`http://localhost:8083/addassetform/update/`+this.$route.params.id, {
      allocationDate:this.asset.allocationDate,
allocationTicket:this.asset.allocationTicket,
assetName: this.asset.assetName,
assettype: this.asset.assettype,
assignedTo:this.asset.assignedTo, 
category: this.asset.category,
comment:this.asset.comment, 
ggid: this.asset.ggid,
id: this.asset.id,
killDiskNumber:this.asset.killDiskNumber, 
model: this.asset.model,
location:this.asset.location,
serialNumber
: this.asset.serialNumber,
status
: 
this.asset.status,
surrenderDate
: 
this.asset.surrenderDate,
surrenderTicket
: 
this.asset.surrenderTicket,

    });
    console.log(result);
    if(result.status==200)
    {alert("Updated successfully");
    window.location = '/';}
    // if(result.status==200)
    // {
    //   this.$router.push({path:'/AssetHistory/'+this.asset.category});
    //   this.reload();
    // }
    
// this.ggid=this.asset.ggid;
// if(this.ggid){
//   this.$router.push({name:'AssetHistory'});
// }
  },
  onChange(e){
    console.log("onchange"+e.target.value);
    this.asset.status=e.target.value;
  }
  // reload() {
  //     Axios.get("http://localhost:8083/getall" ).then((response) => {
  //       console.log(response.data);
  //       this.details = response.data;
  //     });
  //   },
},

async mounted()
    {
        const result= await Axios.get("http://localhost:8083/addassetform/assetsbyid/"+this.$route.params.id);
       
        console.log(result.data.id);
        this.asset=result.data; 
        console.log(result.data.id);
    }
}


</script>

<style>
@import url('@/styles/style.css');

</style>