import axios from 'axios';

class LmsService {


    applyLeave(data) {
        console.log('api', data);
        return axios.post('http://localhost:8083/leave/applyLeave', data)
    }

    getAllLeaveType() {
        return axios.get('http://localhost:8083/leave/getAllLeaves')
    }
    getLeaveDataById(id) {
        return axios.get('http://localhost:8083/leave/get/' + id)
    }
    cancelLeaveByid(id) {
        // return axios.delete('http://localhost:8083/leave/cancelLeave/'+ id)
        return axios.put('http://localhost:8083/leave/updateCancelLeaveStatus/' + id)
    }
    getLeavesBySupervisorName(supervisor) {
        return axios.get('http://localhost:8083/leave/getLeavesBySupervisorName/' + supervisor)
    }
    updateStatusBySupervisor(leaveId) {
        return axios.put('http://localhost:8083/leave/updateApprovalLeaveStatus/' + leaveId)
    }
    getLeavesByEmpId(empId) {
        return axios.get('http://localhost:8083/leave/getLeavesByGgid/' + empId)
    }
    updateMultipleLeaves(leaveId)
    {
        console.log(leaveId);
        return axios.put('http://localhost:8083/leave/updateMultipleLeaves',leaveId);
    }
    getLeaveType()
    {
    return axios.get('http://localhost:8083/leave/dataFields/getAllLeaveDatafields');
    }
    getLeaves()
    {
        return axios.get('http://localhost:8083/leave/dataFields/getAllKeys');
    }



}

export default new LmsService()