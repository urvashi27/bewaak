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
  <td>Cards</td>
  <td>Edentifiers</td>
  <td>
  <table>
  <tr>
  <td v-for="user in Edentifer" :key="user.id">{{user.status}} : {{user.count}}</td>
  </tr>
  </table>
  </td>
  </tr>
  <tr>
  <td></td>
  <td>Test Cards</td>
  <td>
  <table>
  <tr>
  <td v-for="user in TestCards" :key="user.id">{{user.status}} : {{user.count}}</td>
  </tr>
  </table>
  </td>
  </tr>
  <tr>
  <td></td>
  <td>PR Cards</td>
  <td>
  <table>
  <tr>
  <td v-for="user in PRCards" :key="user.id">{{user.status}} : {{user.count}}</td>
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
        name: 'CardHistory',
        data()
    {
        return {cards:[]} 
    },

    async mounted (){
        this.getCardHistory();
    },
    computed:
    { Edentifer(){return this.cards.filter(item=>item.assettype=="Edentifer");},
   TestCards(){return this.cards.filter(item=>item.assettype=="TestCards");},
   PRCards(){return this.cards.filter(item=>item.assettype=="PRCards"); },

    },
    methods:
    {
        getCardHistory() {axios.get('http://localhost:8083/addassetform/cardcount').then(response => 
     {console.log(response);this.cards=response.data;}).catch((error)=>{console.log(error)})},
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