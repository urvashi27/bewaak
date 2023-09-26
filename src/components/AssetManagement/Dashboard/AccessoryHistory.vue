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
  <td>Accessories</td>
  <td>HeadPhones</td>
  <td>
  <table>
  <tr>
  <td v-for="user in headPhone" :key="user.id">{{user.status}} : {{user.count}}</td>
  </tr>
  </table>
  </td>
  </tr>
  <tr>
  <td></td>
  <td>Webcam</td>
  <td>
  <table>
  <tr>
  <td v-for="user in webcam" :key="user.id">{{user.status}} : {{user.count}}</td>
  </tr>
  </table>
  </td>
  </tr>
  <tr>
  <td></td>
  <td>UPS</td>
  <td>
  <table>
  <tr>
  <td v-for="user in ups" :key="user.id">{{user.status}} : {{user.count}}</td>
  </tr>
  </table>
  </td>
  </tr> 
  <tr>
  <td></td>
  <td>Additional Monitors</td>
  <td>
  <table>
  <tr>
  <td v-for="user in  additionalMonitor" :key="user.id">{{user.status}} : {{user.count}}</td>
  </tr>
  </table>
  </td>
  </tr>
  <tr>
  <td></td>
  <td>Tripod Screen</td>
  <td>
  <table>
  <tr>
  <td v-for="user in tripodScreen" :key="user.id">{{user.status}} : {{user.count}}</td>
  </tr>
  </table>
  </td>
  </tr>   
  <tr>
  <td></td>
  <td>Projector</td>
  <td>
  <table>
  <tr>
  <td v-for="user in projector" :key="user.id">{{user.status}} : {{user.count}}</td>
  </tr>
  </table>
  </td>
  </tr>
  <tr>
  <td></td>
  <td>Play Station</td>
  <td>
  <table>
  <tr>
  <td v-for="user in playStation" :key="user.id">{{user.status}} : {{user.count}}</td>
  </tr>
  </table>
  </td>
  </tr>
  <tr>
  <td></td>
  <td>TV</td>
  <td>
  <table>
  <tr>
  <td v-for="user in tv" :key="user.id">{{user.status}} : {{user.count}}</td>
  </tr>
  </table>
  </td>
  </tr>
  <tr>
  <td></td>
  <td>Trolley</td>
  <td>
  <table>
  <tr>
  <td v-for="user in trolley" :key="user.id">{{user.status}} : {{user.count}}</td>
  </tr>
  </table>
  </td>
  </tr>
  <!-- <tr>
  <td></td>
  <td>White Table</td>
  <td>
  <table>
  <tr>
  <td v-for="user in prCards" :key="user.id">{{user.status}} : {{user.count}}</td>
  </tr>
  </table>
  </td>
  </tr>
  <tr>
  <td></td>
  <td>Speaker</td>
  <td>
  <table>
  <tr>
  <td v-for="user in prCards" :key="user.id">{{user.status}} : {{user.count}}</td>
  </tr>
  </table>
  </td>
  </tr>
  <tr>
  <td></td>
  <td>Spider</td>
  <td>
  <table border="2" bordercolor="blue">
  <tr>
  <td v-for="user in prCards" :key="user.id">{{user.status}} : {{user.count}}</td>
  </tr>
  </table>
  </td>
  </tr> --> 
  </table>

    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'AccessoryHistory',
        data()
  { 
    return {accessories:[]}
  },
  async mounted () 
  {
   this.getAccessoryHistory();
  },
  computed:
  {
   headPhone(){return this.accessories.filter(item=>item.assettype=="Headphones");},
   webcam(){return this.accessories.filter(item=>item.assettype=="TWebcam");},
   ups(){return this.accessories.filter(item=>item.assettype=="UPS");},
   additionalMonitor(){return this.accessories.filter(item=>item.assettype=="Additional_Monitor");},
   tripodScreen(){return this.accessories.filter(item=>item.assettype=="Tripod_Screen");},
   projector(){return this.accessories.filter(item=>item.assettype=="Projector");},
   playStation(){return this.accessories.filter(item=>item.assettype=="Play_Station");},
   tv(){return this.accessories.filter(item=>item.assettype=="TV");},
   trolley(){return this.accessories.filter(item=>item.assettype=="Trolley");},
   /* whiteTable(){return this.accessories.filter(item=>item.assettype=="PR_Cards");},
   speaker(){return this.accessories.filter(item=>item.assettype=="PR_Cards");},
   spider(){return this.accessories.filter(item=>item.assettype=="PR_Cards");},  */
  },
  methods:
  {
     getAccessoryHistory() {axios.get('http://localhost:8083/addassetform/accessoriescount').then(response => 
     {console.log(response);this.accessories=response.data;}).catch((error)=>{console.log(error)})},
   
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