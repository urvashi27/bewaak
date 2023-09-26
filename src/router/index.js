import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
import ChangeRequestForm from '@/components/ChangeRequestForm/ChangeRequestForm.vue'
import OffboardingForm from '@/components/OffboardingForm/OffboardingForm.vue'
import OnboardingForm from '@/components/OnBoardingForm/OnboardingForm.vue'
import Login from '@/components/Registration/LoginPage.vue'
import OnboardingTable from '@/components/OnBoardingForm/OnboardingTable.vue'
import Onboardingupdate from '@/components/OnBoardingForm/OnboardingUpdate.vue'
import OffboardingTable from '@/components/OffboardingForm/OffBoardingTable.vue'
import Updateoffboardingform from '@/components/OffboardingForm/UpdateOffBoardingForm.vue'
import ChangeRequest from '@/components/ChangeRequestForm/ChangeRequestTable.vue'
import EditChangeRequest from '@/components/ChangeRequestForm/EditChangeRequestForm.vue'
import UsersTable from '@/components/Users/UsersTable.vue'
import TodoOps from '@/components/ToDoOps/ToDoOps.vue'
import BewaakHistory from '@/components/bewaak/BewaakHistory.vue'
import ViewBewaak from '@/components/bewaak/ViewBewaak.vue'
import Dropdowns from '@/components/DropdownAdd/DropdownAdd.vue'
import AddDropdowns from '@/components/DropdownAdd/AddDropdown.vue'
import Usersupdate from '@/components//Users/UpdateUser.vue'
import ProfileUpdate from '@/components/Users/ProfileUpdate.vue'
import DashboardThings from '@/components/Dashboard/DashboardThings.vue'
import OnboardingRequests from '@/components/Dashboard/OnboardingRequests.vue'
import OffboardingRequests from '@/components/Dashboard/OffboardingRequests.vue'
import ChangeRequests from '@/components/Dashboard/ChangeRequests.vue'
import AssetForm from '@/components/AssetManagement/AssetForm.vue'
import MapAsset from '@/components/AssetManagement/Mapasset/MapAsset.vue'
import AddAssetTable from '@/components/AssetManagement/AddAssetTable.vue'
// import ViewDetails from '@/components/AssetManagement/ViewDetails.vue'
import RaiseissueForm from '@/components/RaiseissueForm/RaiseissueForm.vue'
import RaiseissueTable from '@/components/RaiseissueForm/RaiseissueTable.vue'
import AssetHistory from '@/components/AssetManagement/AssetHistory/AssetHistory.vue'
import AssetDashboard from '@/components/AssetManagement/Dashboard/AssetDashboard.vue'
import UpdateForm from '@/components/AssetManagement/AssetHistory/UpdateForm.vue'
// import CategoryList from '@/components/AssetManagement/CategoryList.vue'
import DeletedHistory from '@/components/AssetManagement/DeletedHistory/DeletedHistory.vue'
import UpdateMapForm from '@/components/AssetManagement/Mapasset/UpdateMapForm.vue'
import CancelLeave from '@/components/LeaveManagement/ManageLeave/CancelLeave.vue'
import LeaveDetails from '@/components/LeaveManagement/ManageLeave/LeaveDetails.vue'
import ApplyLeave from '@/components/LeaveManagement/ManageLeave/ApplyLeave.vue'
import LmsDashboard from '@/components/LeaveManagement/Dashboard/LmsDashboard.vue'
import LeaveApproval from '@/components/LeaveManagement/ManageLeave/LeaveApproval.vue'
import SupervisorApproval from '@/components/LeaveManagement/ManageLeave/SupervisorApproval'
import FeedbackForm from '@/components/RaiseissueForm/FeedbackForm.vue'
import FeedbackTable from '@/components/RaiseissueForm/FeedbackTable.vue'
const routes = [{
        path: '/dashboard',
        name: 'DashboardThings',
        component: DashboardThings
    },
    {
        path: '/home',
        name: 'home',
        component: HomeView
    },
    {
        path: '/ViewBewaak/:ggid',
        name: 'ViewBewaak',
        component: ViewBewaak
    },
    {
        path: '/changeReqform/:ggid',
        name: 'ChangeRequestForm',
        component: ChangeRequestForm
    },
    {
        path: '/OffBoardingform/:ggid',
        name: 'OffboardingForm',
        component: OffboardingForm
    },
    {
        path: '/OnboardingForm',
        name: 'OnboardingForm',
        component: OnboardingForm
    },
    {
        path: '/OnboardingTable',
        name: 'OnboardingTable',
        component: OnboardingTable
    },
    {
        path: '/OffboardingTable',
        name: 'OffboardingTable',
        component: OffboardingTable
    },
    {
        path: '/updateoffboardingform/:emp',
        name: 'Updateoffboardingform',
        component: Updateoffboardingform
    },
    {
        path: '/OnboardingUpdate/:ggid',
        name: 'Onboardingupdate',
        component: Onboardingupdate
    },
    {
        path: '/changeReqTable',
        name: 'ChangeRequest',
        component: ChangeRequest
    },
    {
        path: '/editchangeReqForm/:emp',
        name: 'EditChangeRequestForm',
        component: EditChangeRequest
    },
    {
        path: '/todoops',
        name: 'TodoOps',
        component: TodoOps
    },
    {
        path: '/dropdowns',
        name: 'Dropdowns',
        component: Dropdowns
    },
    {
        path: '/addDropdowns/:field',
        name: 'AddDropdowns',
        component: AddDropdowns
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/profile',
        name: 'ProfileUpdate',
        component: ProfileUpdate
    },
    {
        path: '/bewaakHistory',
        name: 'BewaakHistory',
        component: BewaakHistory
    },
    {
        path: '/userstable',
        name: 'UsersTable',
        component: UsersTable
    },
    {
        path: '/usersupdate/:id',
        name: 'Usersupdate',
        component: Usersupdate
    },
    {
        path: '/onboardingrequests',
        name: 'OnboardingRequests',
        component: OnboardingRequests
    },
    {
        path: '/offboardingrequests',
        name: 'OffboardingRequests',
        component: OffboardingRequests
    },
    {
        path: '/changerequests',
        name: 'ChangeRequests',
        component: ChangeRequests
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About/AboutView.vue')
    },
    {
        path: '/Assetform',
        name: 'AssetForm',
        component: AssetForm
    },
    {
        path: '/Mapasset',
        name: 'MapAsset',
        component: MapAsset
    },



    // {
    //   path: '/AssetHistory',
    //   name:'AssetHistory',
    //   component:AssetHistory
    // },

    {

        path: '/Addassettable',
        name: 'AddAssetTable',
        component: AddAssetTable
    },
    // {
    //   path:'/viewdetails/:ggid',
    //   name:'ViewDetails',
    //   component:ViewDetails,
    //   props:true
    // },

    {
        path: '/AssetHistory',
        name: 'AssetHistory',
        component: AssetHistory

    },
    {
        path: '/AssetDashboard',
        name: 'AssetDashboard',
        component: AssetDashboard

    },


    {
        path: '/UpdateForm/:id',
        name: 'UpdateForm',
        component: UpdateForm
    },
    // {
    //   path: '/CategoryList/:value',
    //   name:'CategoryList',
    //   component:CategoryList
    // },

    {
        path: '/deletedHistory',
        name: 'DeletedHistory',
        component: DeletedHistory

    },
    {
        path: '/updateMapForm/:id',
        name: 'UpdateMapForm',
        component: UpdateMapForm
    },
    {

        path: '/cancel',
        name: 'CancelLeave',
        component: CancelLeave,

    },
    {

        path: '/details',
        name: 'LeaveDetails',
        component: LeaveDetails,
        props: true
    },
    {
        path: '/apply',
        name: 'ApplyLeave',
        component: ApplyLeave

    },
    {
        path: '/lmsdashboard',
        name: 'LmsDashboard',
        component: LmsDashboard
    },
    {
        path: '/approval',
        name: 'LeaveApproval',
        component: LeaveApproval,

    },
    {
        path: '/supervisor',
        name: 'SupervisorApproval',
        component: SupervisorApproval,
        props: true

    },
    {
        path: '/RaiseissueForm',
        name: '/RaiseissueForm',
        component: RaiseissueForm
    },
    {
        path: '/RaiseissueTable',
        name: 'RaiseissueTable',
        component: RaiseissueTable
    },
    {
        path: '/FeedbackForm',
        name: 'FeedbackForm',
        component: FeedbackForm
    },
    {
        path: '/FeedbackTable',
        name: 'FeedbackTable',
        component: FeedbackTable
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router