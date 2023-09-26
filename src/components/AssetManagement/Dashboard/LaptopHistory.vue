<template>
     <div class="container">
  <h3><b>Asset Dashboard</b></h3> 
  <br>    
  <table class="table table-hover table-responsive">
  <thead class="thead-dark">
  <tr>
  <th>Category</th>
  <th>Asset Type</th>
  <th>Asset Status</th>
  </tr>
  </thead>
  <tr>
   <td>Laptops</td>
   <td>Capgemini Laptops</td>
   <td>
   <table>
   <tr>
   <td v-for="user in CapgeminiLaptop" :key="user.id">{{user.status}} : {{user.count}}</td>
   </tr>
   </table>
  </td>
  </tr>
  <tr>
  <td></td>
  <td>Abn Amro Laptops</td>
  <td>
  <table>
  <tr>
  <td v-for="user in ABNAMROLaptop" :key="user.id">{{user.status}} : {{user.count}}</td>
  </tr>
  </table>
  </td>
  </tr>
  <tr>
  <td></td>
  <td>ICS Laptops</td>
  <td>
  <table>
  <tr>
  <td v-for="user in ICSLaptop" :key="user.id">{{user.status}} : {{user.count}}</td>   
  </tr>
  </table>
  </td>
  </tr>
  <tr>
  <td></td>
  <td>iMAC Laptops</td>
  <td>
  <table>
  <tr>
  <td v-for="user in iMacLaptop" :key="user.id">{{user.status}} : {{user.count}}</td>
  </tr>
  </table>
  </td>
  </tr>
  </table>
  </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'LaptopHistory',

    data()
    {
        return {laptops:[]} 
    },

    async mounted (){
        this.getLaptopHistory();
    },
    computed:
    {CapgeminiLaptop(){return this.laptops.filter(item=>item.assettype=="CapgeminiLaptop");},
   ABNAMROLaptop(){return this.laptops.filter(item=>item.assettype=="ABNAMROLaptop");},
   ICSLaptop(){return this.laptops.filter(item=>item.assettype=="ICSLaptop");},
   iMacLaptop(){return this.laptops.filter(item=>item.assettype=="iMacLaptop");}, 

    },
    methods:
    {
        getLaptopHistory()
    { axios.get('http://localhost:8083/addassetform/laptopcount').then(response => 
     {console.log(response);this.laptops=response.data;}).catch((error)=>{console.log(error)})},
    }
    }
</script>

<style scoped>
    table, th, td {
     border: 3px solid white;
     border-collapse: collapse;}
    th, td {
     background-color: #96D4D4;}
    </style>