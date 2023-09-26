<template>
  <form id="applyleave-form" justify-content-center>
    <div>
      <h2>Approval Page</h2>
    </div>
    <br />
    <div class="row">
      <div class="col-md-6" v-if="user.role != 'EM'">
        <p style="text-align: left">
          Supervisor: <b>{{ this.user.supervisor }}</b>
        </p>
      </div>
      <div class="col-md-6">
        <input
          class="form-control"
          type="text"
          v-model="searchValue"
          placeholder="Search By Employee Name"
        />
      </div>
    </div>
    <br />
    <div>
      <!-- <div class="col-md-12"> -->
      <table class="table user-list" v-if="details.length">
        <thead>
          <tr>
            <th scope="col">Emp Id</th>
            <th scope="col">Employee Name</th>
            <th scope="col">Leave Type</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>

            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="d in resultQuery" :key="(d.leaveId, index)">
            <td>{{ d.ggid }}</td>
            <td>{{ d.empName }}</td>
            <td>{{ d.leaveType }}</td>
            <td v-if="d.leaveType != 'Comp_Off'">{{ d.startDate }}</td>
            <td v-if="d.leaveType != 'Comp_Off'">{{ d.endDate }}</td>
            <td v-if="d.leaveType == 'Comp_Off'">
              {{ d.inLieuOfDate }}(lieu Date)
            </td>
            <td v-if="d.leaveType == 'Comp_Off'">
              {{ d.compOffDate }}(Comp off Date)
            </td>
            <td>{{ d.leaveStatus }}</td>
            <!-- <td><input type="checkbox"    id="approvalCheckbox" @change="onClickOfApproval(d.leaveId,'approve')"></td> -->
            <td
              v-if="
                d.leaveStatus != 'Cancelled' && d.leaveId != this.cancelLeaveId
              "
            >
              <input
                type="checkbox"
                :checked="d.leaveStatus == 'Approved'"
                :disabled="d.leaveStatus == 'Approved'"
                id="approvalCheckbox"
                @click="onClickOfApproval(d.leaveId, 'approve')"
              />
            </td>
            <td v-if="d.leaveStatus == 'Cancelled'">
              <button
                :disabled="d.leaveStatus == 'Cancelled'"
                @click.prevent="onClickOfApproval(d.leaveId, 'cancel')"
                id="cancelIcon"
              >
                <i class="fa fa-times" aria-hidden="true"></i>
              </button>
            </td>
            <td
              v-if="
                d.leaveId == this.cancelLeaveId && d.leaveStatus == 'Approved'
              "
            >
              <button
                id="cancelIcon"
                @click.prevent="onClickOfApproval(d.leaveId, 'cancel')"
                style="background-color: red; color: white"
              >
                <i class="fa fa-times" aria-hidden="true"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="row">
        <div class="text-right">
          <button
            class="custom-btn btn-7 text-center"
            @click.prevent="onSelectApprovalBtn"
          >
            Approve
          </button>
        </div>
      </div>

      <div class="m-4">
        <div id="myModal" class="modal" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Confirmation</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  @click="onClose"
                ></button>
              </div>
              <div class="modal-body">
                <p>Are you sure you want to {{ this.dialogValue }} leave?</p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-info"
                  @click="onSelectApprovalBtn"
                  data-bs-dismiss="modal"
                >
                  yes
                </button>
                <button type="button" class="btn btn-light" @click="onClose">
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import LmsService from "@/services/LmsService";

export default {
  props: ["sendId", "action"],
  data() {
    return {
      user: JSON.parse(localStorage.getItem("users")),
      supervisor: "",
      details: [],
      supervisorCheck: false,
      disabledCheck: false,
      empId: "",
      searchValue: "",
      cancelLeaveId: "",
      dialogValue: "",
      selected:[],
    };
  },
  mounted() {
    this.supervisor = this.user.firstName + " " + this.user.lastName;
    this.cancelLeaveId = localStorage.getItem("cancelLeaveID");
    LmsService.getLeavesBySupervisorName(this.supervisor).then((res) => {
      this.details = res.data;
    });
  },
  methods: {
    onSelectApprovalBtn() {
      if(this.dialogValue=='cancel')
        {
          this.onCancel();
        }
        else{
        LmsService.updateMultipleLeaves(this.selected).then((res) => {
        this.empId = res.data.empId;
          localStorage.setItem("empId", this.empId);
        });
      }
       window.location.reload();
       // LmsService.updateStatusBySupervisor(this.leaveId).then(res=>
        // {
        //   document.getElementById('approvalCheckbox').disabled=true;
        //   this.empId=res.data.empId;
        //   localStorage.setItem('empId',this.empId);

        //})
     
      // window.location.reload();
    },
    onClickOfApproval(leaveId, value) {
      this.dialogValue = value;
      this.leaveId = leaveId;
      this.selected.push(
        leaveId,
      );
      if(this.dialogValue=='cancel')
         {
          document.getElementById('myModal').style.display='block';
         }
       },
    onClose() {
      document.getElementById("myModal").style.display = "none";
    },
    onCancel() {
      LmsService.cancelLeaveByid(this.cancelLeaveId).then((res) => {
        console.log(res);
        alert("leave cancelled successfully");
        document.getElementsById("cancelIcon").style.background = "lightgray";
        window.location.reload();
      });
    },
  },
  computed: {
    resultQuery() {
      if (this.searchValue) {
        return this.details.filter((item) => {
          return this.searchValue
            .toLowerCase()
            .split(" ")
            .every((v) => item.empName.toLowerCase().includes(v));
        });
      } else {
        return this.details;
      }
    },
  },
};
</script>

<style>
@import url("@/styles/style.css");

input[type="checkbox"] {
  width: 20px;
  height: 20px;
  accent-color: green;
}

input[type="checkbox"]:checked {
  accent-color: green;
}
#cancelIcon {
  padding: 1px 5px;
  background-color: lightgray;
  border-radius: 0%;
  border: none;
}
#myModal {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  display: none;
}
</style>
