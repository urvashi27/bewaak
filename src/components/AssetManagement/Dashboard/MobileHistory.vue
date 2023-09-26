<template>
    <div class="container">
        <table class="table table-hover table-responsive">
  <thead class="thead-dark">
  <tr>
  <th>Category</th>
  <th>Asset Type</th>
  <th>Asset Status</th>
  </tr>
  </thead>
  <tr>
  <td>Mobiles</td>
  <td>Support Phones</td>
  <td >
  <table>
  <tr  >
  <td v-for="user in SupportPhone" :key="user.id">{{user.status}} : {{user.count}}</td>
  </tr>
  </table>
  </td>
  </tr>
  <tr>
  <td></td>
  <td>Testing Phones</td>
  <td>
  <table>
  <tr>
  <td v-for="user in TestingPhone" :key="user.id">{{user.status}} : {{user.count}}</td>
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
        name: 'MobileHistory',
        data()
    {
        return {mobiles:[]} 
    },

    async mounted (){
        this.getMobileHistory();

    },
    computed:
    {SupportPhone(){return this.mobiles.filter(item=>item.assettype=="SupportPhone");},
   TestingPhone(){return this.mobiles.filter(item=>item.assettype=="TestingPhone");},

    },
    methods:
    {
     getMobileHistory() {axios.get('http://localhost:8083/addassetform/mobilecount').then(response => 
     {console.log(response);this.mobiles=response.data;}).catch((error)=>{console.log(error)})},
  
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