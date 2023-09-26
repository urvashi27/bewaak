<template>
  <form
    id="applyleave-form"
    justify-content-center
    @submit.prevent="submitForm()"
  >
    <div>
      <h2>Holiday Form</h2>
    </div>
    <div class="row">
      <div class="col-md-6">
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
      <div class="col-md-6">
        <label>Year</label>
        <select autocomplete="0ff" v-model="year">
          <option value="2022">2022</option>
          <!-- <option value="2021">2021</option> -->
        </select>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4">
        <label class="form-label requiredError">S.NO</label>
        <div><input class="number" type="number" v-model="serialNumber" /></div>
      </div>

      <div class="col-md-4">
        <label class="form-label requiredError">Date</label>
        <Datepicker
          autoApply
          class="date"
          id="dp__input"
          v-model="date"
          format="dd/MM/yyyy"
          placeholder="Select Date"
        />
      </div>

      <div class="col-md-4">
        <label>Day</label>
        <select autocomplete="0ff" v-model="day">
          <option value="Sunday">Sunday</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-md-10">
        <label for class="form-label">Description</label>
        <textarea
          class="form-control"
          name
          id
          cols="25"
          rows="4"
          v-model="description"
        ></textarea>
      </div>
    </div>

    <div class="text-center py-2">
      <button
        type="submit"
        @click="submit()"
        class="custom-btn btn-7 text-center"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import LmsService from "@/services/LmsService";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
export default {
  name: "HolidayForm",
  components: {
    Datepicker,
  },
  data() {
    return {
      location: "",
      year: "",
      date: "",
      day: "",
      description: "",
      serialNumber: "",
      details: [],
    };
  },
  methods: {
    clearAll() {
      (this.location = ""),
        (this.date = ""),
        (this.year = ""),
        (this.day = ""),
        (this.description = ""),
        (this.serialNumber = "");
    },
    convert(str) {
      var date = new Date(str),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
      return [date.getFullYear(), mnth, day].join("-");
    },
    submit() {
      alert("Submited Successfully");
    },

    submitForm() {
      let formData = {
        location: this.location,
        year: this.year,
        date: this.convert(this.date),
        day: this.day,
        description: this.description,
        serialNumber: this.serialNumber,
      };
      LmsService.applyHoliday(formData)
        .then((res) => console.log(res.data))
        .catch((error) => {
          console.log(error);
        });
      this.clearAll();
    },
  },
};
</script>

<style>
.number {
  background: #e5eaee;
  padding-left: 80px;
  height: 30px;
  width: 100%;
  font-size: 14px;
  border-radius: 40px;
  box-shadow: inset 6px 6px 6px #cbced1;
  border: none;
}
.wrapper {
  max-height: 200px;
  overflow-y: scroll;
}
</style>