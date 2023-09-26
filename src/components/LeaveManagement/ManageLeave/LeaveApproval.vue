<template>
<form id="applyleave-form" justify-content-center>
    <div>
        <h2>Leave Status</h2>
    </div>
    <div class="row">
        <div class="col-md-6">
            <label class="form-label required">Employee Name</label>
            <input class="form-control" readonly type="text" v-model="employee" />
            <br>
        </div>
    </div>

    <div class="row">
        <!-- <div class="col-md-12"> -->
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Emp Id</th>
                    <th scope="col">Leave Type</th>
                    <!-- <th scope="col">Leave Type</th> -->
                    <th scope="col">Start Date</th>
                    <th scope="col">End Date</th>
                    <th scope="col">Supervisor</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ this.details.ggid }}</td>
                    <td>{{ this.details.leaveType}}</td>
                    <td v-if="details.leaveType != 'Comp_Off'">{{ this.details.startDate}}</td>
                    <td v-if="details.leaveType != 'Comp_Off'">{{ this.details.endDate }}</td>
                    <td v-if="details.leaveType == 'Comp_Off'">{{ this.details.inLieuOfDate}}(lieu Date)</td>
                    <td v-if="details.leaveType == 'Comp_Off'">{{ this.details.compOffDate }}(Comp off Date)</td>
                    <td>{{this.details.supervisor}}</td>
                    <td>{{this.details.leaveStatus}}</td>
                </tr>
            </tbody>

        </table>
    </div>
</form>
</template>

<script>
import LmsService from '@/services/LmsService'
export default {
    name: "LeaveApproval",

    data() {
        return {
            user: JSON.parse(localStorage.getItem('users')),
            employee: "",
            details: [],
            leaveId: ''
        }
    },
    computed: {
        empName: {
            get() {
                return `${this.user.firstName} ${this.user.lastName}`;
            }
        },
    },
    mounted() {
        this.leaveId = this.$route.query.sendId;
        LmsService.getLeaveDataById(this.leaveId).then((res) => {
            this.details = res.data;
            console.log(this.details);
            this.employee = this.details.empName;
        })
       
    }
};
</script>

<style scoped>

@import url('@/styles/style.css');
</style>
