<template>
  <div v-if="token === null">
    <div class="land">
      <HeadView></HeadView>
    </div>
    <div class="landing">
      <LoginPage></LoginPage>
    </div>
  </div>

  <div id="fontstyle" v-if="token !== null">
    <div class="sidebar scrollbar pe-2" :class="{ active: flag }" id="style-5">
      <nav class="navbar">
        <a href="/home" class="navbar-brand mb-5">
          <h3 id="bewaak">
            <i class="fa fa-hashtag fa-rotate-30 me-2"></i>BEWAAK
          </h3>
        </a>
        <div class="d-flex align-items-left my-2 mx-5 mb-2">
          <div class="position-relative">
            <img
              class="rounded-circle"
              src="https://www.citypng.com/public/uploads/preview/hd-profile-user-round-blue-icon-symbol-transparent-png-11639594354dzabzsbpuv.png"
              alt=""
              style="width: 40px; height: 40px"
            />
          </div>
          <div class="ms-3 text-left">
            <h5 class="mb-0">{{ user.firstName }} {{ user.lastName }}</h5>
            <span>{{ user.role }}</span>
          </div>
        </div>
        <div class="navbar-nav w-100 py-3">
          <a
            href="/todoops"
            class="nav-item nav-link active"
            v-if="user.role === 'Admin' || user.role === 'Ops Team'"
            ><i class="fa fa-tachometer-alt me-2"></i>ToDoOps</a
          >
          <div class="nav-item dropdown" v-if="user.role === 'EM'">
            <a
              href="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              ><i class="fa fa-pen me-2"></i> Request</a
            >
            <div class="dropdown-menu" id="d-menu">
              <a href="/OnboardingForm" class="dropdown-item">Onboarding</a>
            </div>
            <a href="/todoops" class="nav-link"
              ><i class="fa fa-pen me-2"></i> Tables</a
            >
          </div>
          <a class="nav-item nav-link" v-if="user.role === 'Admin'"
            ><i class="fa fa-user me-2"></i>Admin</a
          >
          <div
            class="nav-item dropdown"
            v-if="
              user.role === 'Admin' ||
              user.role === 'Ops Team' ||
              user.role === 'EM'
            "
          >
            <a href="/bewaakhistory" class="nav-link"
              ><i class="fa fa-table me-2"></i> Bewaak</a
            >
          </div>
          <div class="nav-item dropdown">
            <a
              href="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              ><i class="fa fa-users me-2"></i> Users</a
            >
            <div class="dropdown-menu" id="d-menu">
              <a href="/userstable" class="dropdown-item">UsersTable</a>
            </div>
          </div>
          <div class="nav-item dropdown">
            <a
              href="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              ><i class="fa fa-laptop me-2"></i> Asset</a
            >
            <div class="dropdown-menu" v-if="user.role === 'Admin'">
              <a href="/Addassettable" class="dropdown-item">Tag Asset</a>
              <a href="/Mapasset" class="dropdown-item">Map Asset</a>
              <a href="/AssetHistory" class="dropdown-item">Asset History</a>
              <a href="/deletedHistory" class="dropdown-item"
                >Deleted History</a
              >
              <a href="/AssetDashboard" class="dropdown-item"
                >Asset Dashboard</a
              >
            </div>
            <div class="dropdown-menu" v-if="user.role === 'Ops Team'">
              <a href="/Mapasset" class="dropdown-item">Map Asset</a>
              <a href="/AssetHistory" class="dropdown-item">Asset History</a>
              <!-- <a href="/deletedHistory" class="dropdown-item">Deleted History</a> -->
              <a href="/AssetDashboard" class="dropdown-item"
                >Asset Dashboard</a
              >
            </div>
            <div class="dropdown-menu" v-if="user.role === 'EM'">
              <a href="/AssetDashboard" class="dropdown-item"
                >Asset Dashboard</a
              >
            </div>
            <div class="dropdown-menu" v-if="user.role === 'Team member'">
              <a href="/Addassettable" class="dropdown-item">Tag Asset</a>
            </div>
          </div>
          <div class="nav-item dropdown">
            <a
              href="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              ><i class="fa fa-laptop me-2"></i>LMS</a
            >
            <div class="dropdown-menu" id="d-menu">
              <li>
                <router-link
                  :to="{ path: '/lmsdashboard' }"
                  class="dropdown-item"
                  >Dashboard</router-link
                >
              </li>
              <li>
                <router-link :to="{ path: `/apply` }" class="dropdown-item"
                  >Apply Leave</router-link
                >
              </li>
              <li>
                <router-link :to="{ path: `/cancel` }" class="dropdown-item"
                  >View/Cancel Leave</router-link
                >
              </li>

              <div v-if="user.role == 'EM'">
                <li>
                  <router-link
                    :to="{ path: `/supervisor` }"
                    class="dropdown-item"
                    >Leave Approval</router-link
                  >
                </li>
              </div>
            </div>
          </div>
          <a href="/OffboardingTable" class="nav-item nav-link"
            ><i class="fa fa-file-text me-2"></i>Reports</a
          >
          <a
            href="/dropdowns"
            class="nav-item nav-link"
            v-if="user.role === 'Admin' || user.role === 'Ops Team'"
            ><i class="fa fa-caret-down me-2" style="font-size: 23px"></i
            >DropDowns</a
          >
          <a href="/changeReqTable" class="nav-item nav-link"
            ><i class="fa fa-line-chart me-2"></i>Forecasting</a
          >
          <div class="nav-item dropdown">
            <!-- <a href="table.html" class="nav-item nav-link "><i class="fa fa-support fa-spin me-2" style="font-size:23px"></i> Support</a> -->
            <a
              href="table.html"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              ><i
                class="fa fa-support fa-spin me-2"
                style="font-size: 23px"
              ></i>
              Support</a
            >
            <div class="dropdown-menu" id="d-menu">
              <div v-if="user.role === 'EM' || user.role === 'Team Member'">
                <a href="/FeedbackForm" class="dropdown-item">Feedback</a>
                <a href="/RaiseissueForm" class="dropdown-item">Raise Issue</a>
              </div>
              <div v-if="user.role === 'Admin' || user.role === 'Ops Team'">
                <a href="/FeedbackTable" class="dropdown-item"
                  >Feedback Table</a
                >
                <a href="/RaiseissueTable" class="dropdown-item"
                  >Raise Issue Table</a
                >
              </div>
            </div>
          </div>
          <a href="chart.html" class="nav-item nav-link"
            ><i class="fa fa-eye me-2"></i>Visibility</a
          >
        </div>
      </nav>
    </div>
    <div class="content" :class="{ active: flag }">
      <nav
        class="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0"
      >
        <a href="index.html" class="navbar-brand d-flex d-lg-none me-4">
          <h2 class="text-primary mb-0"><i class="fa fa-hashtag"></i></h2>
        </a>
        <btn class="sidebar-toggler flex-shrink-0 me-lg-4" @click="isActive">
          <i class="fa fa-bars"></i>
        </btn>
        <btn
          class="sidebar-toggler flex-shrink-0 me-lg-4"
          @click="$router.go(-1)"
        >
          <i class="fa fa-arrow-left"></i>
        </btn>
        <btn class="sidebar-toggler flex-shrink-0" @click="$router.go(+1)">
          <i class="fa fa-arrow-right"></i>
        </btn>
        <div class="navbar-nav align-items-center ms-auto">
          <div class="nav-item dropdown">
            <!-- <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"> -->
            <a
              href="/home"
              class="nav-link"
              v-if="user.role === 'EM' || user.role === 'Team member'"
            >
              <i class="fa fa-home me-lg-2"></i>
              <span class="d-none d-lg-inline-flex">Home</span>
            </a>
            <a
              href="/dashboard"
              class="nav-link"
              v-if="user.role === 'Admin' || user.role === 'Ops Team'"
            >
              <i class="fa fa-home me-lg-2"></i>
              <span class="d-none d-lg-inline-flex">Dashboard</span>
            </a>
          </div>
          <div v-if="this.user.role == 'EM'">
            <a href="#" class="nav-link" data-bs-toggle="dropdown">
              <i class="fa fa-bell "></i>
              <span class="d-none d-lg-inline-flex">notification </span>
              <div class="id">
                <span
                  >You Have {{ this.leaveRequests }} Approval Request
                  Pending</span
                >
              </div>
              <div class="txt">{{ this.leaveRequests }}</div>
            </a>
          </div>
          <div class="nav-item dropdown">
            <a href="#" class="nav-link" data-bs-toggle="dropdown">
              <i class="fa fa-info-circle me-lg-2"></i>
              <span class="d-none d-lg-inline-flex">About</span>
            </a>

            <div
              class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0"
            >
              <a href="#" class="dropdown-item">
                <h6 class="fw-normal mb-0">Profile updated</h6>
                <small>15 minutes ago</small>
              </a>
              <hr class="dropdown-divider" />
              <a href="#" class="dropdown-item">
                <h6 class="fw-normal mb-0">New user added</h6>
                <small>15 minutes ago</small>
              </a>
              <hr class="dropdown-divider" />
              <a href="#" class="dropdown-item">
                <h6 class="fw-normal mb-0">Password changed</h6>
                <small>15 minutes ago</small>
              </a>
              <hr class="dropdown-divider" />
              <a href="#" class="dropdown-item text-center"
                >See all notifications</a
              >
            </div>
          </div>
          <a href="#" class="nav-link" data-bs-toggle="dropdown">
            <span v-if="isDarkMode === false" @click="toggle(!isDarkMode)"
              ><img src="@/assets/moon.png" id="moon"
            /></span>
            <span v-if="isDarkMode === true" @click="toggle(!isDarkMode)"
              ><img src="@/assets/sun.png" id="sun"
            /></span>
          </a>
          <div class="nav-item dropdown">
            <a
              href="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <img
                class="rounded-circle pe-2"
                src="https://www.citypng.com/public/uploads/preview/hd-profile-user-round-blue-icon-symbol-transparent-png-11639594354dzabzsbpuv.png"
                alt=""
                style="width: 30px; height: 30px"
              />
              <span class="d-none d-lg-inline-flex">{{ user.userName }}</span>
            </a>
            <div
              class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0"
            >
              <a href="/profile" class="dropdown-item"
                ><i class="fa fa-user pe-3"></i>Profile</a
              >
              <a href="#" class="dropdown-item"
                ><i class="fa fa-gear pe-3"></i>settings</a
              >
              <li class="divider"></li>
              <a
                href="#"
                class="dropdown-item"
                v-if="token !== null"
                @click="logout"
                ><img
                  src="@/assets/logout.png"
                  class="pe-3"
                  style="height: 20px"
                />Log Out</a
              >
            </div>
          </div>
        </div>
      </nav>
      <div id="cont">
        <router-view :key="$route.path" />
      </div>
      <div>
        <footer class="pt-4 bottom-0">
          <section class="mb-4 text-center" style="color: #041562">
            <a style="color: #041562" class="me-3" href="">Home</a>
            <span class="me-3">About</span>
            <span class="me-3" href="#">Services</span>
          </section>
          <!-- Copyright -->
          <div
            class="text-center text-white p-3"
            style="background-color: #1da1f2"
          >
            © 2022 Copyright:
            <a class="text-white">Capgemini</a>
          </div>
          <!-- Copyright -->
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import LoginPage from "./components/Registration/LoginPage.vue";
import HeadView from "@/components/Registration/HeadView.vue";
import LmsService from '@/services/LmsService'
export default {
  name: "App",
  components: {
    LoginPage,
    HeadView,
  },
  data() {
    return {
      isDarkMode: false,
      flag: false,
      moon: localStorage.getItem("theme"),
      leaveRequests:0,
        employee: "",
        details: [],
        supervisor:'',
    };
  },
  computed: {
    user() {
      console.log(this.$store.state.users);
      return JSON.parse(localStorage.getItem("users"));
    },
    token() {
      return localStorage.getItem("jwtToken");
    },
    empName: {
    get() {
    return `${this.user.firstName} ${this.user.lastName}`;
    },
  },
  },
  mounted() {
    this.retrieveLeaveList();
    this.toggle(JSON.parse(localStorage.getItem("theme")));
  },
  methods: {
    toggle(payload) {
      this.isDarkMode = payload;
      document.documentElement.className = payload;
      localStorage.setItem("theme", payload);
    },
    isActive() {
      this.flag = !this.flag;
    },
    logout() {
      localStorage.removeItem("jwtToken");
      localStorage.removeItem("users");
      localStorage.removeItem("role");

      location.href = "/login";
    },
  
  retrieveLeaveList() {
    LmsService.getAllLeaveType().then((res) => {
      this.details = res.data;

      console.log(this.details);

      this.details = this.details.filter(
        (item) =>
          item.supervisor == this.empName && item.leaveStatus == "Applied"
      );

      console.log(this.details);

      this.leaveRequests = this.details.length;
    });
  },
},
};
</script>

<style scoped>
.land {
  zoom: 110%;
}
.landing {
  zoom: 90%;
}
/*  */
* .sidebar {
  background-color: var(--bg);
  color: var(--text);
}
#bewaak {
  color: var(--text);
}
#style-5::-webkit-scrollbar-thumb {
  background-color: var(--background-color);
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    color-stop(0.5, rgba(255, 255, 255, 0.2)),
    color-stop(0.5, transparent),
    to(transparent)
  );
}

#moon {
  zoom: 1.9%;
}
#sun {
  zoom: 10%;
}
.txt{
    height: 25px;
    width: 25px;
    background-color: #d63031;
    border-radius: 30px;
    color: white;
    text-align: center;
    position: fixed;
    top: 5px;
    /* right: 12px; */
    left: 1027px;
    padding: 0px;
    border-style: solid;
    /* border-width: 2px; */
    font-weight: bold;
    font-size: 80%;

}
.id{

color:white;;

background-color: gray;

padding: 20px;

display: none;

position:absolute;



}


.fa-bell:hover {

 color: #d63031;

 display: block;

}



span:hover + div {

display: block;



}
</style>
