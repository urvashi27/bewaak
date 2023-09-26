<template>

<form id="form-f" class="justify-content-center" @submit.prevent="addAssetForm()">
    <h2> Add Asset From </h2><br>
   
    <div class="row">
         <div class="col-md-4">
                <label for="ggid">GGID <span class="text-danger">*</span></label>
                <input type="text" id="ggid" class="form-control" v-model="addasset.ggid" aria-describedby="passwordHelpInline" placeholder="Enter Your Answer">
            <span class="text-danger" v-if="v$.addasset.ggid.$error">{{ v$.addasset.ggid.$errors[0].$message}}</span>
            </div>

         <div class="col-md-4">
        <label class="form-label" for="category"> Category <span class="text-danger">*</span></label>
         <select id=" Category" name="category" v-model="addasset.category">
            <option value="undefined"> please select Category</option>
            <option value="Laptops">Laptops</option>
            <option value="Desktops">Desktops</option>
            <option value="Mobiles">Mobiles</option>
            <option value="Cards">Cards</option>
            <option value="Accessories">Accessories</option>
         </select>
         </div>
            
            <div class="col-md-4">
           <div v-if="addasset.category === 'Laptops' ">
          <label class="form-label " for="Assettype">AssetType<span class="text-danger">*</span></label>
            <select id="Assettype" name="Assettype" v-model="addasset.assettype">
                <option value="undefined">Please Select Asset Type</option>
                <option value="CapgeminiLaptop">Capgemini Laptop</option>
                <option value="ABNAMROLaptop">ABNAMRO Laptop </option>
                <option value="ICSLaptop">ICS Laptop</option>
                <option value="iMacLaptop">iMac Laptop </option>
            </select></div>

             <div v-if="addasset.category === 'Desktops' ">
             <label class="form-label" for="Assettype">AssetType<span class="text-danger">*</span></label>
             <select id="Assettype" name="Assettype" v-model="addasset.assettype">
                <option value="undefined">Please Select Asset Type</option>
                <option value="CapgeminiDesktop">Capgemini Desktop</option>
                <option value="iMacDesktop">iMac Desktop </option>
             </select></div>

             <div v-if="addasset.category === 'Mobiles' ">
             <label class="form-label" for="Assettype">Asset Type<span class="text-danger">*</span></label>
             <select id="Assettype" name="Assettype" v-model="addasset.assettype">
                <option value="undefined">Please Select Mobiles</option>
                <option value="SupportPhone">Support Phone</option>
                <option value="TestingPhone">Testing Phone </option>
             </select></div>

             <div v-if="addasset.category === 'Cards' ">
             <label class="form-label" for="assettype">Asset Type<span class="text-danger">*</span></label>
             <select id="Assettype" name="Assettype" v-model="addasset.assettype">
                <option value="undefined">Please Select Cards</option>
                <option value="Edentifer">Edentifer</option>
                <option value="TestCards">Test Cards </option>
                <option value="PRCards">PR Cards </option>
             </select></div>

            <div v-if="addasset.category === 'Accessories' ">
            <label class="form-label" for="asset type">Asset Type<span class="text-danger">*</span></label>
            <select id="Assettype" name="Assettype" v-model="addasset.assettype">
                <option value="undefined">Please Select Accessories</option>
                <option value="Headphones">Head phones</option>
                <option value="TWebCam">TWebCam</option>
                <option value="UPS">UPS </option>
                <option value="Additional Monitor">Additional Monitor</option>
                <option value="Projector">Projector </option>
                <option value="TripodScreen">Tripod Screen </option>
                <option value="PlayStation">Play Station</option>
                <option value="TV">TV </option>
                <option value="Trolley">Trolley </option>
                <option value="WhiteTable">Edentifer</option>
                <option value="Speaker">Test Cards </option>
                <option value="Spider">PR Cards </option>
            </select>
              </div></div>

               <div class="col-md-4">
                <label for="serialNumber" class="form-label">Serial Number<span class="text-danger">*</span></label>
                <input type="text" id="serialNumber" class="form-control" v-model="addasset.serialNumber" aria-describedby="passwordHelpInline" placeholder="Enter Your Answer">
            <span class="text-danger" v-if="v$.addasset.serialNumber.$error">{{ v$.addasset.serialNumber.$errors[0].$message}}</span>
            </div>

        
             <div class="col-md-4">
            <label for="assetName" class="form-label"> Asset Name <span class="text-danger">*</span></label>
 <input type="text" id="assetName" class="form-control" v-model="addasset.assetName" aria-describedby="passwordHelpInline" placeholder="Enter your Answer" >
             <span  class="text-danger" v-if="v$.addasset.assetName.$error">{{ v$.addasset.assetName.$errors[0].$message}}</span>          </div> <br><br>

         <div class="col-md-4">
            <label class="form-label" for="model"> Model <span class="text-danger">*</span></label>
 <input type="text" id="model" class="form-control" v-model="addasset.model" aria-describedby="passwordHelpInline" placeholder="Enter your Answer">
             <span  class="text-danger" v-if="v$.addasset.model.$error">{{ v$.addasset.model.$errors[0].$message}}</span>         </div> <br><br>

         <div class="col-md-4">
            <label class="form-label" for="allocationTicket"> Allocation Ticket Number <span class="text-danger">*</span></label>
 <input type="text" id="allocationTicket" class="form-control"  v-model="addasset.allocationTicket" aria-describedby="passwordHelpInline" placeholder="Enter your Answer">
             <span  class="text-danger" v-if="v$.addasset.allocationTicket.$error">{{ v$.addasset.allocationTicket.$errors[0].$message}}</span>        
              </div> <br><br>

              <div class="col-md-4" >
                    <label for="allocationDate" class="form-label">Allocation Date <span class="text-danger">*</span></label>
                    <input type="date" id="allocationDate" v-model="addasset.allocationDate" class="form-control" date-date-format="mm/dd/yyyy" aria-describedby="passwordHelpInline">
               <span class="text-danger" v-if="v$.addasset.allocationDate.$error">{{ v$.addasset.allocationDate.$errors[0].$message}}</span>
               </div>

        
             <div class="col-md-4">
           <label class="form-label" for="assignedTo"> Assigned To <span class="text-danger">*</span></label>
        <input type="text" id="assignedTo" class="form-control"  v-model="addasset.assignedTo" aria-describedby="passwordHelpInline" placeholder="Enter your Answer">
             <span  class="text-danger" v-if="v$.addasset.assignedTo.$error">{{ v$.addasset.assignedTo.$errors[0].$message}}</span>        
         </div> 

           <!-- <div v-if="addasset.category === 'Cards' "> -->
            
             <div class="col-md-4">
           <label class="form-label" for="teamName">Team Name<span class="text-danger">*</span></label>
           <input type="text" id="teamName" class="form-control " v-model="addasset.teamName" aria-describedby="passwordHelpInline" placeholder="Enter your Answer">
           
         </div>

        
        
             <div class="col-md-4">
           <label class="form-label" for="location"> Location <span class="text-danger">*</span></label>
          <input type="text" id="location" class="form-control" v-model="addasset.location" aria-describedby="passwordHelpInline" placeholder="Enter your Answer">
             <span  class="text-danger" v-if="v$.addasset.location.$error">{{ v$.addasset.location.$errors[0].$message}}</span> 
         </div> 

             <div v-if="addasset.category === 'Mobiles' ">
                
             <div class="col-md-4">
           <label class="form-label" for="imeiNumber"> IMEI Number <span class="text-danger">*</span></label>
           <input type="text" id="imeiNumber" class="form-control"  v-model="addasset.imeiNumber">
           
         </div> 
          
           
             <div class="col-md-4">
           <label class="form-label" for="didNumber"> DID Number <span class="text-danger">*</span></label>
           <input type="text" id="didNumber" class="form-control" v-model="addasset.didNumber">
           
         </div> 

          
             <div class="col-md-4">
           <label class="form-label" for="function"> Function <span class="text-danger">*</span></label>
           <input type="text" id="function" class="form-control" v-model="addasset.function">
         
         </div> 

          
             <div class="col-md-4">
           <label class="form-label" for="osVersion">OS/Android Version<span class="text-danger">*</span></label>
           <input type="text" id="osVersion" class="form-control" v-model="addasset.osVersion">
           
         </div> 

          
             <div class="col-md-4">
           <label class="form-label" for="macAddress"> MAC Address <span class="text-danger">*</span></label>
           <input type="text" id="macAddress" class="form-control" v-model="addasset.macAddress">
         
         </div>
             </div>

              <div v-if="addasset.category === 'Accessories' ">
                <div class="col-md-4">
           <label class="form-label" for="procurementReference"> Procurement Reference <span class="text-danger">*</span></label>
           <input type="text" id="procurementReference" class="form-control" v-model="addasset.procurementReference">
         </div></div> 
            
             <div class="col-md-12" id="submit2">
                <div class="submit2">
                    <label class="form-label" for="comment">Comments</label>
                    <textarea  class="form-control" placeholder="Leave a comment here" id="comment" v-model="addasset.comment"></textarea>
                </div>
            </div><br>

            <div class="text-center">
                <button type="submit" class="custom-btn btn-7 text-center">
                  <span>Submit</span>
                </button>
            </div>
    </div>

    </form>
</template>

<script>
/* eslint-disable */
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
// import { reactive } from '@vue/reactivity'
// import { computed } from '@vue/runtime-core'
import AddAssetservice from '@/services/AddAssetservice'
// import axios from 'axios'
export default {
    name: 'AssetForm',
    setup() {
       return {
            v$: useVuelidate()
        }
    },
        data(){
          return{
       
          addasset:{
            ggid: undefined,
            //  C:'',
            //  D:'',
            serialNumber: undefined,
            assetName: '',
            model: '',
            allocationTicket: undefined,
            allocationDate: '',
            assignedTo: '',
            location: '',
            category:'undefined',
            assettype:'undefined',
            teamName:'',
            surrenderTicket:'',
            surrenderDate:'',
            imeiNumber:'',
            didNumber:'',
            function:'',
            osVersion:'',
            macAddress:'',
            procurementReference:'',
            comment:'',
            status:'New',
             date: new Date().toISOString().substr(0, 10),
          
          }
          }
        },
    
    //     const rules = computed(() => {
    //         return {
    //           addasset:{
    //             ggid: { required },
    //             // C: { required },
    //             D: { required },
    //             serialNumber: { required },
    //             assetName: { required },
    //             model: { required },
    //             allocationTicket: { required },
    //             allocationDate: { required },
    //             assignedTo: { required },
    //             location: { required }

    //           }
    //         }
    //     })
      
    // },
    validations() {
        return {
           addasset:{
           ggid: { required },
              //  C: { required },
              //  D: { required },
               serialNumber: { required },
               assetName: { required },
                model: { required },
                allocationTicket: { required },
                allocationDate: { required },
               assignedTo: { required },
                location: { required },
                teamName:{ required }
          
           }
        }
    },
    methods: {
       

        addAssetForm() {
            var data = {
            ggid            : this.addasset.ggid,
            category        : this.addasset.category,
            // D               : this.addasset.D,
            serialNumber    : this.addasset.serialNumber,
            assetName       : this.addasset.assetName,
            model           : this.addasset.model,
            allocationTicket: this.addasset.allocationTicket,
            allocationDate  : this.addasset.allocationDate,
            assignedTo      : this.addasset.assignedTo,
            location        : this.addasset.location,
            assettype       : this.addasset.assettype,
            teamName        : this.addasset.teamName,
            surrenderTicket : this.addasset.surrenderTicket,
            surrenderDate   : this.addasset.surrenderDate,
            imeiNumber      : this.addasset.imeiNumber,
            didNumber       : this.addasset.didNumber,
            function        : this.addasset.function,
            osVersion       : this.addasset.osVersion,
            macAddress      : this.addasset.macAddress,
            procurementReference: this.addasset.procurementReference,
            comment        : this.addasset.comment,
            status:this.addasset.status,
            date:this.addasset.date
            }

           this.v$.$validate()
                    if (!this.v$.$error) {
                        alert("Form Submitted Sucessfully");
            //  axios.post(`http://localhost:8083/addasset`, data).then((response) => {
            //             console.log(response.data);
             AddAssetservice.create(data)
             .then(response => {
              this.addasset.ggid=response.data.id
               this.$router.push({name: 'AddAssetTable'})
              
             })
                    
             .catch( e => {
              alert(e)
             })
        }
             else {
                     alert('Invalid')
                }
               
                    
          
        }
    }
        
        }
       

    

</script>
<style scoped>
@import url('@/styles/style.css');
</style>