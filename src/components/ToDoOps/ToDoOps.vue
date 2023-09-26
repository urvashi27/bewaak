<template>
<div class="tabs px-4 pb-0">
    <div class="page-description page-description-tabbed">
        <ul class="nav nav-tabs mb-3" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="account-tab" @click="Onboard" data-bs-toggle="tab" data-bs-target="#account" type="button" role="tab" aria-controls="hoaccountme" aria-selected="true">Onboarding</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="security-tab" @click="Offbaord" data-bs-toggle="tab" data-bs-target="#security" type="button" role="tab" aria-controls="security" aria-selected="false">Offboarding</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="integrations-tab" @click="Crf" data-bs-toggle="tab" data-bs-target="#integrations" type="button" role="tab" aria-controls="integrations" aria-selected="false">CRF</button>
            </li>
        </ul>
    </div>
    <br />

    <div class="container-xl" v-if="onboards===true && clicked===true">
        <OnboardingRequests></OnboardingRequests>

    </div>

    <div class="container-xl" v-if="offboards===true && clicked===true">
        <OffboardingRequests></OffboardingRequests>
    </div>

    <div class="container-xl" v-if="crf===true && clicked===true">
        <ChangeRequests></ChangeRequests>
    </div>
</div>
</template>

<script>
import OnboardingRequests from '@/components/Dashboard/OnboardingRequests.vue';
import OffboardingRequests from '@/components/Dashboard/OffboardingRequests.vue';
import ChangeRequests from '@/components/Dashboard/ChangeRequests.vue'
export default {
    name: "OnboardingTable",
    components: {
        OnboardingRequests,
        OffboardingRequests,
        ChangeRequests

    },
    data() {
        return {
            onboards: true,
            offboards: false,
            crf: false,
            clicked: true,

        }
    },
    methods: {

        Onboard() {

            this.offboards = false
            this.clicked = true
            this.onboards = true
            this.crf = false
        },
        Offbaord() {

            this.clicked = true
            this.onboards = false
            this.offboards = true
            this.crf = false
        },
        Crf() {

            this.clicked = true
            this.onboards = false
            this.offboards = false
            this.crf = true
        }
    },

};
</script>

<style scoped>
.nav-tabs .nav-link.active {
    border-top: none;
    border-left: none;
    border-right: none;
    background: 0 0;
    color: #27323f;
    border-bottom: 2px solid #2269f4;
    opacity: 1;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.nav-tabs .nav-link {
    margin-bottom: -1px;
    background: 0 0;
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    border-top: none;
    border-left: none;
    border-right: none;
}

.page-description {
    margin-bottom: -25px;
}
</style>
