<template>
  <form id="applyleave-form" justify-content-center>
    <div>
      <h2>Leave Details</h2>
    </div>
    <br />
    <div class="row mb-2">
      <div class="col-md-6">
        <label for>Employee Name:</label>
        {{ details.empName }}
      </div>
      <div class="col-md-6">
        <label for>Leave Type:</label>
        {{ details.leaveType }}
        <!-- <a href="#" onclick="alert('Privilege Leave');">
          <i class="fa fa-question-circle fa-1x"></i>
          {{details.detail}}
        </a> -->
      </div>
    </div>
    <div class="row mb-2" v-if="details.leaveType == 'Miscarriage'">
      <div class="col-md-6">
        <label>Miscarriage Date:</label>
        {{ details.miscarriageDate }}
      </div>
    </div>
    <div class="row mb-2" v-if="details.leaveType == 'Privilege'">
      <div class="col-md-6">
        <label>Half Day Leave On Start Date</label>
        {{ details.halfDayStartLeave == true ? "Yes" : "No" }}
      </div>
      <div class="col-md-6">
        <label>Half Day Leave On End Date</label>
        {{ details.halfDayEndLeave == true ? "Yes" : "No" }}
      </div>
    </div>
    <div class="row mb-2" v-if="details.leaveType == 'Relocation'">
      <div class="col-md-6">
        <label>Relocation with family including child</label>
        <div>
          {{
              details.relocationWithFamilyIncludingChild == false ? "No" : "Yes"
          }}
        </div>
      </div>
      <div class="col-md-6">
        <label>Transfer date:</label>
        <div>{{ details.transferDate }}</div>
      </div>
    </div>
    <div class="row mb-2" v-if="details.leaveType == 'Comp_Off'">
      <div class="col-md-6">
        <label>In Lieu Of Date:</label>
        <div>{{ details.inLieuOfDate }}</div>
      </div>
      <div class="col-md-6">
        <label>Comp-Off Date:</label>
        <div>{{ details.compOffDate }}</div>
      </div>
    </div>
    <div class="row mb-2" v-if="details.leaveType == 'Sabbatical'">
      <div class="col-md-6">
        <label>Reason:</label>
        <div>{{ details.sabbaticalReason }}</div>
      </div>
    </div>
    <div class="row mb-2" v-if="details.leaveType == 'TubectomyLeave'">
      <div class="col-md-6">
        <label>Operation date:</label>
        <div>{{ details.operationDate }}</div>
      </div>
    </div>
    <div class="row mb-2" v-if="details.leaveType == 'Adoption'">
      <div class="col-md-6">
        <label for>Child's date of birth:</label>
        <div>{{ details.dateOfBirthOfChild }}</div>
      </div>
      <div class="col-md-6">
        <label for>Adoption Date:</label>
        <div>{{ details.adoptionDate }}</div>
      </div>
    </div>
    <div class="row mb-2" v-if="details.leaveType != 'Comp_Off'">
      <div class="col-md-6">
        <label for>Start Date:</label>
        {{ details.startDate }}
      </div>
      <div class="col-md-6">
        <label for>End Date:</label>
        {{ details.endDate }}
      </div>
    </div>
    <div class="row mb-2">
      <div class="col-md-6" v-if="details.leaveType == 'Privilege'">
        <label for>Reason For Privilege leave:</label>
        {{ details.privilegeLeaveReason }}
      </div>
    </div>
    <div class="row mb-2" v-if="details.leaveType == 'Bereavement'">
      <div class="col-md-6">
        <label>Bereavement Date: </label>
        {{ details.bereavementDate }}
      </div>
      <div class="col-md-6">
        <label>Name:</label>
        {{ details.nameOfTheBereavementPerson }}
      </div>
    </div>
    <div class="row mb-2" v-if="details.leaveType == 'Bereavement'">
      <div class="col-md-6">
        <label>Relationship: </label>
        {{ details.bereavementLeaveRelationship }}
      </div>
    </div>
    <div class="row mb-2" v-if="details.leaveType == 'Maternity'">
      <div class="col-md-6">
        <label>Expected Delivery Date</label>
        {{ details.expectedDeliveryDate }}
      </div>
      <div class="col-md-6">
        <label>Instance of Child</label>
        {{ details.childIns }}
      </div>
    </div>
    <div class="row mb-2">
      <div class="col-md-6">
        <label for>Description:</label>
        {{ details.description }}
      </div>
    </div>
    <div class="row mb-2" v-if="this.action == 'cancelLeave'">
      <div class="form-group">
        <label for="exampleFormControlTextarea2">Comments</label>
        <textarea class="form-control rounded-10" id="exampleFormControlTextarea2" rows="3"></textarea>
      </div>
      <!-- <div class="col-md-6">
        <label>Upload Documents</label>
        <input class="chooseFile" type="file" id="img" name="img" />
      </div> -->
    </div>
    <div class="row mb-2">
      <div class="text-center py-4">
        <button v-if="cancel" type="button"  class="custom-btn btn-7 text-center" data-toggle="modal" data-target="#myModal" >
          Cancel Leave
        </button>
      </div>
    </div>
    <div id="myModal" class="modal fade">
      <div class="modal-dialog modal-confirm">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Confirmation</h4>
            <button type="button"  class="close" data-dismiss="modal" aria-hidden="true">
              &times;
            </button>
          </div>
          <div class="modal-body text-dark">
            <p id="mode-font" class="font-weight-bold">
              <b> Do you want to cancel leave ?</b>
            </p>
          </div>
          <div class="modal-footer">
            <a href="#" class="btn btn-danger" data-dismiss="modal">Cancel</a>
            <a href="#"  class="btn btn-success" data-dismiss="modal" @click="cancelLeave">Yes</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <a href="#" class="link-dark" @click="$router.go(-1)">
        <button type="button" class="btn btn-default" aria-label="Left Align">
          <span class="glyphicon glyphicon-arrow-left  " aria-hidden="true" ></span>
          <span class="p-3">Previous</span>
        </button> </a>
    </div>
  </form>
</template>
<script>
import LmsService from "@/services/LmsService";
export default {
  name: "LeaveDetails",
  props: ["sendId", "action"],
  data() {
    return {
      details: [],
      cancel: "",
    };
  },
  mounted() {
    console.log(this.action);
    if (this.action == "cancelLeave") {
      this.cancel = true;
    } else {
      this.cancel = false;
    }
    LmsService.getLeaveDataById(this.sendId)
      .then((res) => {
        this.details = res.data;
        if (this.details.privilegeLeaveReason == "outOfStation") {
          this.details.privilegeLeaveReason = "Out of station";
        }
      })
      .catch(() => {
        this.$router.push("/cancel");
      });
  },
  methods: {
    cancelLeave() {
      if (this.details.leaveStatus != "Approved") {
        LmsService.cancelLeaveByid(this.sendId).then((res) => {
          // alert("leaveId" + " " + this.sendId + " " + "cancelled successfully");
          this.$router.push("/cancel");
          console.log(res);
        }); 
      } else {
        // alert("Request send to supervisor");
        this.$router.push("/cancel");
        localStorage.setItem("cancelLeaveID", this.sendId);
      }
    },
  },
};
</script>
<style>
@import url("@/styles/style.css");
</style>