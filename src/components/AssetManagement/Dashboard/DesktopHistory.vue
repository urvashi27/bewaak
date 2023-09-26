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
  <td>Desktops</td>
  <td>Capgemini Desktops</td>
  <td>
  <table>
  <tr>
  <td v-for="user in CapgeminiDesktop" :key="user.id">{{user.status}} : {{user.count}}</td>
  </tr>
  </table>
  </td>
  </tr>
  <tr>
  <td></td>
  <td>iMAC Desktops</td>
  <td>
  <table>
  <tr>
  <td v-for="user in iMacDesktop" :key="user.id">{{user.status}} : {{user.count}}</td>
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
        name: 'DesktopHistory',
        data(){
            return {desktops:[]}
        },
        async mounted ()
        {
            this.getDesktopHistory();
        },
        computed:
        {
        CapgeminiDesktop(){return this.desktops.filter(item=>item.assettype=="CapgeminiDesktop");},
        iMacDesktop(){return this.desktops.filter(item=>item.assettype=="iMacDesktop");},
        },
        methods:
        {
        getDesktopHistory() {axios.get('http://localhost:8083/addassetform/desktopcount').then(response => 
        {console.log(response);this.desktops=response.data;}).catch((error)=>{console.log(error)})},
        },
    }
</script>

<style scoped>
    table, th, td {
     border: 3px solid white;
     border-collapse: collapse;}
    th, td {
     background-color: #96D4D4;}
    </style>