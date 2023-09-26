<template>
  <form id="applyleave-form" justify-content-center>
    <!-- @submit.prevent="submitForm()" -->
    <h2>Apply Leave</h2>
    <div class="row">
      <div class="col-md-6" v-if="this.user.role != 'EM'">
        <label class="form-label requiredError">Employee Name</label>
        <input readonly type="text" class="form-control" v-model="empName" />
      </div>
      <div class="col-md-6" v-if="this.user.role != 'Team member'">
        <label class="form-label requiredError">Employee Name</label>
        <select  @change="onSelectTeamMember($event)" >
          <option
            v-for="user in teamMembers"
            :value="user.ggid+' '+user.gender"
            :key="user.ggid"
            id="height"
          >
            {{ user.firstName }} {{ user.lastName }}
          </option>
        </select>
      </div>
     
     
     <div class="col-md-6" v-if="user.gender === 'male'">
      <label class="form-label requiredError">Leave Type</label>
        <select v-model="leaveType">
          <option v-for="options in leaveTypeArr.leaveType" :value="options" :key="options" id="height">
          {{options}}
          </option>
        </select>
        <button type="button" class="btn btn-default p-1" aria-label="Left Align" data-toggle="modal"
          data-target="#exampleModal1">
          <span class=" glyphicon glyphicon-question-sign" aria-hidden="true"></span>
        </button>
        <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h3 class="modal-title" id="exampleModalLabel">
                  Information on Leave Type
                </h3>
                <button type="button" class="close text-right" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body text-dark">
                <p v-if="leaveType === 'Privilege'">
                  <span class="glyphicon glyphicon-hand-right mt-4 me-2"  aria-hidden="true">
                  </span>
                  <b> {{ leaveType }} : </b>Privilege Leave
                </p>
                <p v-if="leaveType === 'Paternity'">
                  <span class="glyphicon glyphicon-hand-right mt-4 me-2"  aria-hidden="true"></span>
                  <b>{{ leaveType }} : </b>Only for male employees, within 6
                  months from the birth of the child, for five continuous (5)
                  working days. Paternity leave can be applied for a maximum of
                  two times in the entire tenure of employment
                </p>
                <p v-if="leaveType === 'Adoption'">
                  <span class="glyphicon glyphicon-hand-right mt-4 me-2"  aria-hidden="true"></span>
                  <b>{{ leaveType }} : </b> Only on legal adoption of child.
                  Legal documents to be attached while applying.For male
                  employees, five continuous (5) working days.
                </p>
                <p v-if="leaveType === 'Bereavement'">
                  <span class="glyphicon glyphicon-hand-right mt-4 me-2"  aria-hidden="true"></span>
                  <b>{{ leaveType }} : </b> In the event of an unfortunate death
                  in the immediate family, employees are eligible for five
                  continuous (5) working days leave. Immediate family means
                  parents, spouse, children, siblings, spouse's parents and
                  spouse's siblings.
                </p>
                <p v-if="leaveType === 'Leave_Without_Pay'">
                  <span class="glyphicon glyphicon-hand-right mt-4 me-2"  aria-hidden="true"></span>
                  <b>{{ leaveType }} : </b> When an employee does not have leave
                  balance, but wishes to avail leave, then he/she can avail
                  Leave without pay subject to the Reporting Manager’s approval.
                  LWP for a period exceeding one month to be approved by HR and
                  BU Head.
                </p>
                <p v-if="leaveType === 'Comp_Off'">
                  <span class="glyphicon glyphicon-hand-right mt-4 me-2"  aria-hidden="true"></span>
                  <b>{{ leaveType }} : </b> Employees are eligible for
                  compensatory off only if he/she works for the full day on
                  public holidays and / or during weekly off days.
                </p>
                <p v-if="leaveType === 'Relocation'">
                  <span class="glyphicon glyphicon-hand-right mt-4 me-2"  aria-hidden="true"></span>
                  <b>{{ leaveType }} : </b>When an employee is transferred from
                  base location to any other location within India for a period
                  exceeding six months, on business needs. Leave is allowed only
                  up to 7 days prior and 7 days post Transfer date, for five
                  continuous (5) working days if relocating with Spouse and
                  Children and for two continuous (2) working days if relocating
                  with Spouse or alone.
                </p>
                <p v-if="leaveType === 'Sabbatical'">
                  <span class="glyphicon glyphicon-hand-right mt-4 me-2"  aria-hidden="true"></span>
                  <b>{{ leaveType }} : </b>Sabbatical Leave is an approved
                  absence from workplace by employees to enable them to pursue
                  personal objectives such as studies, medical emergency or
                  treatment etc. (hereinafter called as “Sabbatical Leave”). An
                  employee can seek for Sabbatical Leave for a period between 6
                  months to 24 months.
                </p>
              </div>
              <div class="modal-footer d-flex justify-content-center">
                <button type="button" class="btn btn-primary" data-dismiss="modal">
                  Ok
                </button>
                <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div class="col-md-6" v-if="user.gender === 'female'">
       
        <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h3 class="modal-title" id="exampleModalLabel">
                  Information on Leave Type
                </h3>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body text-dark">
                <p v-if="leaveType === 'Privilege'">
                  <span class="glyphicon glyphicon-hand-right" aria-hidden="true">
                  </span>
                  <b> {{ leaveType }} : </b>Privilege Leave.
                </p>
                <p v-if="leaveType === 'Maternity'">
                  <span class="glyphicon glyphicon-hand-right mt-4 me-2"  aria-hidden="true"></span>
                  <b>{{ leaveType }} : </b>Female employees who have worked in the organization for at least 15 days
                  immediately preceding the Start date of the leave are entitled to a maximum of 184 calendar days paid
                  maternity leave.
                </p>
                <p v-if="leaveType === 'Miscarriage'">
                  <span class="glyphicon glyphicon-hand-right mt-4 me-2"  aria-hidden="true"></span>
                  <b>{{ leaveType }} : </b> Applicable only to female employees, maximum limit of 45 calendar days.
                </p>
                <p v-if="leaveType === 'Adoption'">
                  <span class="glyphicon glyphicon-hand-right mt-4 me-2"  aria-hidden="true"></span>
                  <b>{{ leaveType }} : </b> Only on legal adoption of child. Legal documents to be attached while
                  applying. For female employees, sixty (60) calendar days of leave if the child is below one year of
                  age, and thirty (30) calendar days of leave if the child is above one year of age. For male employees,
                  five continuous (5) working days.
                </p>
                <p v-if="leaveType === 'Bereavement'">
                  <span class="glyphicon glyphicon-hand-right mt-4 me-2"  aria-hidden="true"></span>
                  <b>{{ leaveType }} : </b> In the event of an unfortunate death
                  in the immediate family, employees are eligible for five
                  continuous (5) working days leave. Immediate family means
                  parents, spouse, children, siblings, spouse's parents and
                  spouse's siblings.
                </p>
                <p v-if="leaveType === 'Leave_Without_Pay'">
                  <span class="glyphicon glyphicon-hand-right mt-4 me-2"  aria-hidden="true"></span>
                  <b>{{ leaveType }} : </b> When an employee does not have leave
                  balance, but wishes to avail leave, then he/she can avail
                  Leave without pay subject to the Reporting Manager’s approval.
                  LWP for a period exceeding one month to be approved by HR and
                  BU Head.
                </p>
                <p v-if="leaveType === 'Comp_Off'">
                  <span class="glyphicon glyphicon-hand-right mt-4 me-2"  aria-hidden="true"></span>
                  <b>{{ leaveType }} : </b> Employees are eligible for
                  compensatory off only if he/she works for the full day on
                  public holidays and / or during weekly off days.
                </p>
                <p v-if="leaveType === 'Relocation'">
                  <span class="glyphicon glyphicon-hand-right mt-4 me-2"  aria-hidden="true"></span>
                  <b>{{ leaveType }} : </b>When an employee is transferred from
                  base location to any other location within India for a period
                  exceeding six months, on business needs. Leave is allowed only
                  up to 7 days prior and 7 days post Transfer date, for five
                  continuous (5) working days if relocating with Spouse and
                  Children and for two continuous (2) working days if relocating
                  with Spouse or alone.
                </p>
                <p v-if="leaveType === 'TubectomyLeave'">
                  <span class="glyphicon glyphicon-hand-right mt-4 me-2"  aria-hidden="true"></span>
                  <b>{{ leaveType }} : </b>14 days special casual leave to female employees who undergo non-peuperal
                  tubectomy operation.
                </p>
                <p v-if="leaveType === 'Sabbatical'">
                  <span class="glyphicon glyphicon-hand-right mt-4 me-2"  aria-hidden="true"></span>
                  <b>{{ leaveType }} : </b>Sabbatical Leave is an approved
                  absence from workplace by employees to enable them to pursue
                  personal objectives such as studies, medical emergency or
                  treatment etc. (hereinafter called as “Sabbatical Leave”). An
                  employee can seek for Sabbatical Leave for a period between 6
                  months to 24 months.
                </p>
              </div>
              <div class="modal-footer d-flex justify-content-center">
                <button type="button" class="btn btn-primary" data-dismiss="modal">
                  Ok
                </button>
                <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
    <div class="row" v-if="leaveType === 'Bereavement'">
      <div class="col-md-6">
        <label class="form-label requiredError">Bereavement Date</label>
        <Datepicker autoApply class="date" v-model="bereavementDate" format="dd/MM/yyyy" placeholder="Select Date"
          :maxDate="new Date()" :disabledWeekDays="[6, 0]" :enableTimePicker="false" />
        <!-- <input type="date" v-model="bereavementDate" :max="minDate" /> -->
        <span class="error-msg" v-if="v$.bereavementDate.$error && leaveType === 'Bereavement'">{{
            v$.bereavementDate.$errors[0].$message
        }}</span>
      </div>
    </div>
    <div class="row" v-if="leaveType === 'Relocation'">
      <div class="col-md-6 form-group from-check">
        <input type="checkbox" class="form-check-input" true-value="true" false-value="false" v-model="relocationCheck"
          id="check3" />
        <label class="form-check-label" for="check3">Relocation with family including child</label>
      </div>
      <!-- <div class="col-md-6">
        <div class="col-md-1">
          <input type="checkbox" class="checkboxSize" id="relocation" v-model="relocationCheck" />
        </div>
        <label class="checkboxLabel" for="relocation">Relocation with family including child</label>
      </div> -->
      <div class="col-md-6">
        <label class="form-label requiredError">Transferred Date</label>
        <Datepicker autoApply class="date" id="dp__input" v-model="transferDate" format="dd/MM/yyyy"
          placeholder="Select Date" :disabledWeekDays="[6, 0]" :enableTimePicker="false" />
        <!-- <input type="date" v-model="transferDate" /> -->
        <span class="error-msg" v-if="v$.transferDate.$error">{{
            v$.transferDate.$errors[0].$message
        }}</span>
      </div>
    </div>
    <div class="row" v-if="leaveType === 'Miscarriage'">
      <div class="col-md-6">
        <label class="form-label requiredError">Miscarriage Date</label>
        <Datepicker autoApply class="date" id="dp__input" v-model="miscarriageDate" format="dd/MM/yyyy"
          placeholder="Select Date" :disabledWeekDays="[6, 0]" :enableTimePicker="false" />
        <span class="error-msg" v-if="v$.miscarriageDate.$error">{{
            v$.miscarriageDate.$errors[0].$message
        }}</span>
      </div>
    </div>
    <div class="row" v-if="leaveType === 'Paternity' || leaveType === 'Adoption'">
      <div class="col-md-6">
        <label class="form-label requiredError">Child's date of birth</label>
        <Datepicker autoApply class="date" id="dp__input" v-model="childDate" format="dd/MM/yyyy"
          placeholder="Select Date" :maxDate="new Date()" :disabledWeekDays="[6, 0]" :enableTimePicker="false" />
        <span class="error-msg" v-if="v$.childDate.$error">{{
            v$.childDate.$errors[0].$message
        }}</span>
      </div>
    </div>
    <div class="row" v-if="leaveType === 'Maternity'">
      <div class="col-md-6">
        <label class="form-label requiredError">Instance of this child</label>
        <select v-model="instanceOfChild">
          <option>Select</option>
          <option v-for="child in leaveTypeArr.childIns" :key="child" :value="child">{{child}}</option>
        </select>
        <span class="error-msg" v-if="v$.instanceOfChild.$error">{{
            v$.instanceOfChild.$errors[0].$message
        }}</span>
      </div>
    </div>
    <div class="row" v-if="leaveType === 'Adoption'">
      <div class="col-md-6">
        <label class="form-label requiredError">Adoption Date</label>
        <Datepicker autoApply class="date" id="dp__input" v-model="adoptionDate" format="dd/MM/yyyy"
          placeholder="Select Date" :minDate="new Date()" :disabledWeekDays="[6, 0]" :enableTimePicker="false" />
        <span class="error-msg" v-if="v$.adoptionDate.$error">{{
            v$.adoptionDate.$errors[0].$message
        }}</span>
      </div>
    </div>
    <div class="row" v-if="leaveType === 'TubectomyLeave'">
      <div class="col-md-6">
        <label class="form-label requiredError">Operation Date</label>
        <Datepicker autoApply class="date" id="dp__input" v-model="operationDate" format="dd/MM/yyyy"
          placeholder="Select Date" :disabledWeekDays="[6, 0]" :enableTimePicker="false" />
        <span class="error-msg" v-if="v$.operationDate.$error">{{
            v$.operationDate.$errors[0].$message
        }}</span>
      </div>
    </div>
    <div class="row mb-2" v-if="leaveType && leaveType != 'Comp_Off'">
      <div class="col-md-6">
        <label class="form-label requiredError">Start Date</label>
        <Datepicker autoApply class="date" id="dp__input" v-model="startDate" format="dd/MM/yyyy"
          placeholder="Select Date" :minDate="new Date()" :disabledWeekDays="[6, 0]" :enableTimePicker="false"
          @update:modelValue="calculateLeaveCount(startDate, this.leaveType)" />
        <span class="error-msg" v-if="v$.startDate.$error">{{
            v$.startDate.$errors[0].$message
        }}</span>
      </div>
      <div class="col-md-6">
        <label class="form-label requiredError">End Date</label>
        <Datepicker autoApply class="date" id="dp__input" v-model="endDate" format="dd/MM/yyyy"
          @update:modelValue="onSelectDate(this.startDate, endDate)" :minDate="new Date()" placeholder="Select Date"
          :disabledWeekDays="[6, 0]" :enableTimePicker="false" />
        <!-- <input type="date" v-model="endDate" :min="minDate" @change="onSelectDate(endDate)" /> -->
        <span class="error-msg" v-if="v$.endDate.$error">{{
            v$.endDate.$errors[0].$message
        }}</span>
      </div>
    </div>
    <div class="row" v-if="leaveType === 'Privilege' || leaveType === 'Leave_Without_Pay'">
      <div class="col-md-6">
        <label>Current Balance : {{ daysAvailable }} day(s)</label>
      </div>
      <div class="col-md-6">
        <label>Effective leaves : {{ diffInDays }} day(s)</label>
      </div>
    </div>
    <div class="row" v-if="leaveType === 'Privilege'">
      <div class="row">
        <div class="col-md-6 form-group from-check">
          <input type="checkbox" class="form-check-input" true-value="true" false-value="false" v-model="startDateCheck"
            id="check1" />
          <label class="form-check-label" for="check1">Half Day Leave On Start Date</label>
        </div>
        <div class="col-md-6 form-group from-check">
          <input type="checkbox" class="form-check-input" v-model="endDateCheck" true-value="true" false-value="false"
            id="check2" />
          <label class="form-check-label" for="check2">Half Day Leave On End Date</label>
        </div>
      </div>
      <div class="col-md-6">
        <label class="form-label requiredError">Reason</label>
        <select v-model="reason">
        <option v-for="reason in leaveTypeArr.privilegeLeaveReason" :key="reason">{{reason}}</option>
        </select><span class="error-msg" v-if="v$.reason.$error">{{
            v$.reason.$errors[0].$message
        }}</span>
      </div>
    </div>
    <div class="row" v-if="leaveType === 'Bereavement'">
      <div class="col-md-6">
        <label class="form-label requiredError">Name</label>
        <input class="form-control" type="text" v-model="bereavementPersonName" />
        <span class="error-msg" v-if="v$.bereavementPersonName.$error">{{
            v$.bereavementPersonName.$errors[0].$message
        }}</span>
      </div>
      <div class="col-md-6">
        <label class="form-label requiredError">Relationship</label>
        <select v-model="relationship">
          <option>Select</option>
          <option v-for="reason in this.leaveType.bereavementLeaveRelationship" :key="reason">{{reason}}</option>
        </select>
        <span class="error-msg" v-if="v$.relationship.$error">{{
            v$.relationship.$errors[0].$message
        }}</span>
      </div>
    </div>
    <div class="row" v-if="leaveType === 'Maternity'">
      <div class="col-md-6">
        <label class="form-label requiredError">Expected Delivery Date</label>
        <Datepicker autoApply class="date" id="dp__input" v-model="expectedDate" placeholder="Select Date"
          :minDate="new Date()" :disabledWeekDays="[6, 0]" :enableTimePicker="false" />
        <span class="error-msg" v-if="v$.expectedDate.$error">{{
            v$.expectedDate.$errors[0].$message
        }}</span>
      </div>
    </div>
    <div class="row" v-if="leaveType === 'Comp_Off'">
      <div class="col-md-6">
        <label class="form-label requiredError">In Lieu Of Date</label>
        <Datepicker autoApply class="date" id="dp__input" v-model="lieuDate" format="dd/MM/yyyy"
          placeholder="Select Date" :maxDate="new Date()" @update:modelValue="onSelectLieuDate"
          :disabledWeekDays="[1, 2, 3, 4, 5]" :enableTimePicker="false" />
        <span class="error-msg" v-if="v$.lieuDate.$error">{{
            v$.lieuDate.$errors[0].$message
        }}</span>
      </div>
      <div class="col-md-6">
        <label class="form-label requiredError">COMP-OFF DATE</label>
        <Datepicker autoApply class="date" id="dp__input" v-model="compDate" format="dd/MM/yyyy"
          placeholder="Select Date" :maxDate="new Date()" @update:modelValue="onSelectLieuDate"
          :disabledWeekDays="[1, 2, 3, 4, 5]" :enableTimePicker="false" />
        <span class="error-msg" v-if="v$.compDate.$error">{{
            v$.compDate.$errors[0].$message
        }}</span>
      </div>
    </div>
    <div class="row" v-if="leaveType === 'Sabbatical'">
      <div class="col-md-6">
        <label class="form-label requiredError">Reason</label>
        <select v-model="sabaticalLeaveReason">
         <option v-for="options in leaveTypeArr.sabbaticalReason" :key="options" :value="options">{{options}}</option>
        </select>
        <span class="error-msg" v-if="v$.sabaticalLeaveReason.$error">{{
            v$.sabaticalLeaveReason.$errors[0].$message
        }}</span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-10">
        <label for class="form-label">Description</label>
        <textarea class="form-control" name id cols="25" rows="4" v-model="description"></textarea>
      </div>
    </div>
    <div class="row">
      <div class="col-md-7">
        <label class="form-label">Upload Documents</label>
        <input type="file" @change="handleFileUpload" />
      </div>
    </div>
    <!-- <div class="text-center py-2">
      <button type="submit" class="custom-btn btn-7 text-center">Submit</button>
    </div> -->
    <div class="text-center px-3">
      <button class="custom-btn btn-7" type="button" data-toggle="modal" data-target="#myModal">
        <span>Submit</span>
      </button>
    </div>
    <div id="myModal" class="modal fade">
      <div class="modal-dialog modal-confirm">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Confirmation</h4>
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              &times;
            </button>
          </div>
          <div class="modal-body text-dark">
            <p id="mode-font" class="font-weight-bold">
              <b> Do you want to apply leave ?</b>
            </p>
          </div>
          <div class="modal-footer">
            <a href="#" class="btn btn-danger" data-dismiss="modal">Cancel</a>
            <a href="#" class="btn btn-success" data-dismiss="modal" @click="submitForm">Yes</a>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
import UserService from "@/services/UserService";
import LmsService from "@/services/LmsService";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import useVuelidate from "@vuelidate/core";
import { requiredIf } from "@vuelidate/validators";

//import users from '@/stubs/users.json';
export default {
  name: "ApplyLeave",
  components: {
    Datepicker,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      user: JSON.parse(localStorage.getItem("users")),
      users: [],
      selected: "",
      gender: "",
      empId: "",
      leaveType:"",
      leaveTypeArr:[],
      leaveReason:[],
      supervisorName: "",
      startDate: "",
      endDate: "",
      startDateCheck: false,
      endDateCheck: false,
      reason: "",
      instanceOfChild: "",
      expectedDate: "",
      miscarriageDate: "",
      childDate: "",
      adoptionDate: "",
      bereavementDate: "",
      bereavementPersonName: "",
      relationship: "",
      lieuDate: "",
      compDate: "",
      relocationCheck: false,
      transferDate: "",
      operationDate: "",
      description: "",
      selectFile: "",
      sabaticalLeaveReason: "",
      sendId: "",
      minDate: "",
      halfDayEndLeaveCheckbox: false,
      diffInDays: "",
      weekendCheck: "",
      disabledCompoff: true,
      teamMembers: [],
      selectedValue: "",
      leaveDebit: 0,
      details: [],
      daysAvailable: 0,
    };
  },
  computed: {
    empName: {
      get() {
        return `${this.user.firstName} ${this.user.lastName}`;
      },
    },
  },
  validations() {
    return {
      startDate: {
        required: requiredIf(() => {
          return this.leaveType != "Comp_Off";
        }),
      },
      endDate: {
        required: requiredIf(() => {
          return this.leaveType != "Comp_Off";
        }),
      },
      childDate: {
        required: requiredIf(() => {
          return (
            this.leaveType === "Adoption" || this.leaveType === "Paternity"
          );
        }),
      },
      adoptionDate: {
        required: requiredIf(() => {
          return this.leaveType === "Adoption";
        }),
      },
      bereavementDate: {
        required: requiredIf(() => {
          return this.leaveType === "Bereavement";
        }),
      },
      bereavementPersonName: {
        required: requiredIf(() => {
          return this.leaveType === "Bereavement";
        }),
      },
      lieuDate: {
        required: requiredIf(() => {
          return this.leaveType === "Comp_Off";
        }),
      },
      compDate: {
        required: requiredIf(() => {
          return this.leaveType === "Comp_Off";
        }),
      },
      transferDate: {
        required: requiredIf(() => {
          return this.leaveType === "Relocation";
        }),
      },
      expectedDate: {
        required: requiredIf(() => {
          return this.leaveType === "Maternity";
        }),
      },
      operationDate: {
        required: requiredIf(() => {
          return this.leaveType === "TubectomyLeave";
        }),
      },
      miscarriageDate: {
        required: requiredIf(() => {
          return this.leaveType === "Miscarriage";
        }),
      },
      reason: {
        required: requiredIf(() => {
          return this.leaveType === "Privilege";
        }),
      },
      relationship: {
        required: requiredIf(() => {
          return this.leaveType === "Bereavement";
        }),
      },
      sabaticalLeaveReason: {
        required: requiredIf(() => {
          return this.leaveType === "Sabbatical";
        }),
      },
      instanceOfChild: {
        required: requiredIf(() => {
          return this.leaveType === "Maternity";
        }),
      },
    };
  },
  mounted()
  {
    this.getAllLeaveType()
  },
  created() {
    this.minDate = this.currentDate();
    this.retrieveUserList();
    LmsService.getLeavesByEmpId(this.user.ggid).then((res) => {
      var totalDebit = 0;
      this.details = res.data;
      this.details.forEach((element) => {
        if (
          element.leaveStatus == "Approved" &&
          element.leaveType == "Privilege"
        ) {
          totalDebit += element.countOfDays;
        }
      });
      this.daysAvailable = 22 - totalDebit;
    });
    
  },
  methods: {
   getAllLeaveType()
   {
    LmsService.getLeaveType().then((res) =>
        {
          console.log(res.data);
            this.leaveTypeArr=res.data;
            console.log(this.leaveTypeArr);
            this.leaveReason=res.data.privilegeLeaveReason;
        })
        LmsService.getLeaves().then((res) =>
        {
            console.log(res.data);
        })
   },
    alertDays() {
      if (this.daysAvailable <= 0) {
        alert(
          "No privilege leaves are avilable | You can apply for paid leaves"
        );
      }
    },
    retrieveUserList() {
      UserService.getAllUsers()
        .then((response) => {
          this.users = response.data;
          console.log(this.users);
          this.teamMembers = this.users.filter(
            (user) => user.supervisor == this.empName
          );
          this.teamMembers.unshift({
            firstName: this.user.firstName,
            lastName: this.user.lastName,
          });
          this.selectedValue = this.user.firstName + " " + this.user.lastName;
        })
        .catch((e) => {
          alert(e);
        });
    },
    onSelectTeamMember(event)
    {
     var str=event.target.value;
     str=str.split(" ");
     console.log(str);
     if(str[1]=='male')
     {
      this.user.gender='male'
     }else{
      this.user.gender='female'
     }
     LmsService.getLeavesByEmpId(str[0]).then((res) => {
      var totalDebit = 0;
      this.details = res.data;
      console.log(this.details);
      this.selectEmpName=this.details[0].empName;
      console.log(this.selectEmpName);
      this.details.forEach((element) => {
        if (
          element.leaveStatus == "Approved" &&
          element.leaveType == "Privilege"
        ) {
          totalDebit += element.countOfDays;
        }
      });
      this.daysAvailable= 22-totalDebit; 
    });
    this.clearAll();

    },
    onSelectLieuDate() {
      if (this.lieuDate == "") {
        this.disabledCompoff = true;
      } else {
        this.disabledCompoff = false;
      }
    },
    currentDate() {
      let date = new Date();
      let tdate = date.getDate();
      let month = date.getMonth() + 1;
      if (tdate < 10) {
        tdate = "0" + tdate;
      }
      if (month < 10) {
        month = "0" + month;
      }
      let year = date.getUTCFullYear();
      //  this.minDate = year + "-"+ month + "-" + tdate;
      return year + "-" + month + "-" + tdate;
      // console.log(this.minDate)
    },
    handleDate(s, e) {
      var temp1 = this.currentDate(s);
      console.log("temp1 start date", temp1);
      var temp2 = this.currentDate(e);
      console.log("temp2 end date", temp2);
      console.log(temp2);
      if (temp1 != "" && temp1 > temp2) {
        temp2 = "";
        alert("End Date sholud be greaterthan Start Date");
      }
    },
    clearAll() {
      this.v$.$reset();
      (this.startDate = ""),
        (this.endDate = ""),
        (this.bereavementPersonName = ""),
        (this.bereavementLeaveRelationship = ""),
        (this.bereavementDate = ""),
        (this.relationship = ""),
        (this.privilegeLeaveReason = ""),
        (this.reason = ""),
        (this.transferDate = ""),
        (this.operationDate = ""),
        (this.lieuDate = ""),
        (this.compDate = ""),
        (this.sabaticalLeaveReason = "");
    },
    convert(str) {
      var date = new Date(str),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
      return [date.getFullYear(), mnth, day].join("-");
    },
    onSelectDate(startDate, endDate) {
      let count = 0;
      const curDate = new Date(startDate.getTime());
      while (curDate <= endDate) {
        const dayOfWeek = curDate.getDay();
        if (dayOfWeek !== 0 && dayOfWeek !== 6) count++;
        curDate.setDate(curDate.getDate() + 1);
      }
      this.diffInDays = count;
      if (this.diffInDays == 1) {
        this.halfDayEndLeaveCheckbox = true;
      } else {
        this.halfDayEndLeaveCheckbox = false;
      }
    },
    calculateLeaveCount(startDate, leaveType) {
      let count;
      if (
        leaveType === "Paternity" ||
        leaveType === "Adoption" ||
        leaveType === "Bereavement"
      ) {
        count = 5;
        this.endDateUpdate(startDate, count);
      } else if (leaveType === "Maternity") {
        count = 184;
        this.endDateUpdate(startDate, count, leaveType);
      } else if (leaveType === "Miscarriage") {
        count = 45;
        this.endDateUpdate(startDate, count, leaveType);
      } else if (leaveType === "Relocation") {
        count = 2;
        this.endDateUpdate(startDate, count);
      } else if (leaveType === "Tubectomy") {
        count = 14;
        this.endDateUpdate(startDate, count, leaveType);
      }
    },
    endDateUpdate(startDate, count, leaveType) {
      this.diffInDays = count;
      const checkDate = new Date(startDate.getTime());
      if (
        leaveType === "Maternity" ||
        leaveType === "Miscarriage" ||
        leaveType === "Tubectomy" ||
        leaveType === "Adoption"
      ) {
        while (count > 1) {
          checkDate.setDate(checkDate.getDate() + 1);
          // const dayOfWeek = checkDate.getDay();
          count -= 1;
        }
        this.endDate = checkDate;
      } else {
        while (count > 1) {
          checkDate.setDate(checkDate.getDate() + 1);
          const dayOfWeek = checkDate.getDay();
          if (dayOfWeek !== 0 && dayOfWeek !== 6) {
            count -= 1;
          }
        }
        this.endDate = checkDate;
      }
    },
    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        // alert("Leave applied sucessfully");
        let formData = {
          leaveId: 123,
          empName: this.user.role!='EM'?this.empName:this.details[0].empName,
          ggid: this.user.role!='EM'?this.user.ggid:this.details[0].ggid,
          countOfDays: this.diffInDays == 0 ? 1 : this.diffInDays,
          gender: this.user.gender,
          leaveType: this.leaveType,
          startDate: this.startDate == "" ? null : this.convert(this.startDate),
          endDate: this.endDate == "" ? null : this.convert(this.endDate),
          halfDayStartLeave: !this.startDateCheck ? "" : this.startDateCheck,
          halfDayEndLeave: !this.endDateCheck ? "" : this.endDateCheck,
          // description: this.description,
          privilegeLeaveReason: !this.reason ? null : this.reason,
          leaveStatus: "Applied",
          childIns: this.instanceOfChild == "" ? null : this.instanceOfChild,
          expectedDate:
            this.expectedDate == "" ? "" : this.convert(this.expectedDate),
          miscarriageDate:
            this.miscarriageDate == ""
              ? ""
              : this.convert(this.miscarriageDate),
          dateOfBirthOfChild:
            this.childDate == "" ? "" : this.convert(this.childDate),
          adoptionDate:
            this.adoptionDate == "" ? "" : this.convert(this.adoptionDate),
          bereavementDate:
            this.bereavementDate == ""
              ? ""
              : this.convert(this.bereavementDate),
          nameOfTheBereavementPerson: this.bereavementPersonName,
          bereavementLeaveRelationship:
            this.relationship == "" ? null : this.relationship,
          inLieuOfDate: this.lieuDate == "" ? "" : this.convert(this.lieuDate),
          compOffDate: this.compDate == "" ? "" : this.convert(this.compDate),
          relocationWithFamilyIncludingChild: !this.relocationCheck
            ? ""
            : this.relocationCheck,
          transferDate:
            this.transferDate == "" ? "" : this.convert(this.transferDate),
          operationDate:
            this.operationDate == "" ? "" : this.convert(this.operationDate),
          description: !this.description ? "" : this.description,
          // selectFile: "file",
          sabbaticalReason: !this.sabaticalLeaveReason
            ? null
            : this.sabbaticalLeaveReason,
          supervisor:this.user.role!='EM'?this.user.supervisor:this.details[0].supervisor,
          supervisorApproval: false,
        };
        // console.log(formData);
        LmsService.applyLeave(formData).then((res) => {
          this.sendId = res.data.body.leaveId;
          this.$router.push({
            path: "/approval",
            query: { sendId: this.sendId },
          });
        });
      }
    },
  },
};
</script>
<style scoped>
.checkboxLabel {
  margin-top: 1em;
  margin-left: 0.5em;
}
.checkboxSize {
  width: 15px;
}
.error-msg {
  color: red;
}
.requiredError:after {
  content: " *";
  color: red;
}
.form-check-input {
  transform: scale(0.7);
  width: 22px;
  height: 23px;
  border-color: black;
  margin-right: 0.3rem;
}
@import url("@/styles/style.css");
</style>