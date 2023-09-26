<template>
  <form id="applyleave-form" justify-content-center>
    <div>
      <h2>Holiday List</h2>
    </div>
    <div class="row">
      <div class="col-md-5">
        <label>Holiday Location</label>
        <select autocomplete="0ff" v-model="location">
          <option value="ABN AMRO(Pune)">Pune</option>
          <option value="ABN AMRO(Hyderabad)">Hyderabad</option>
          <!-- <option value="Bhubaneswar">Bhubaneswar</option>
          <option value="Bangalore">Bangalore</option> -->
          <!-- <option value="Chennai">Chennai</option>
          <option value="Coimbatore">Coimbatore</option>
          <option value="Delhi">Delhi</option>
          <option value="Gandhinagar">Gandhinagar</option>
          <option value="Gurgaon">Gurgaon</option>
          <option value="Hyderbad">Hyderabad</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Trivandrum">Trivandrum</option> -->
          <!-- <option value="Newyork">Newyork</option> -->
        </select>
      </div>
      <div class="col-md-5">
        <label>Year</label>
        <select autocomplete="0ff" v-model="year">
          <option value="2022">2022</option>
          <!-- <option value="2021">2021</option> -->
        </select>
      </div>
      <div class="col-md-2">
        <button
          type="submit"
          @click.prevent="holiday(this.location)"
          class="custom-btn btn-7 text-center"
        >
          Search
        </button>
      </div>
    </div>

    <br />
    <div class="row">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Date</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="d in details" :key="d.id">
            <td>{{d.serialNumber}}</td>
            <td>{{d.date}} / {{d.day}}</td>
            <td>{{d.description}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </form>
</template>

<script>
import LmsService from "@/services/LmsService";
export default {
  name: "HolidayList",
  data() {
    return {
      location: "",
      year: "",
      details: [],
    };
  },
  methods: {
  

    holiday(location) {
      console.log(location);
      LmsService.getLocation(location).then((response) => {
        console.log(response.data);
        this.details = response.data;
      });
    },

  
  },
};
</script>

<style>
.select{
  height: 50px;
    overflow: scroll;
}
</style>