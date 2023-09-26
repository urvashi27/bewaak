<template>
    <div id="asset">
    <router-view></router-view>
    <LaptopHistory/>
    <DesktopHistory/>
    <MobileHistory/>
    <CardHistory/>
    <AccessoryHistory/>
    </div>
</template>

<script>
import LaptopHistory from '@/components/AssetManagement/Dashboard/LaptopHistory.vue';
import DesktopHistory from '@/components/AssetManagement/Dashboard/DesktopHistory.vue';
import CardHistory from '@/components/AssetManagement/Dashboard/CardHistory.vue';
import AccessoryHistory from '@/components/AssetManagement/Dashboard/AccessoryHistory.vue';
import MobileHistory from '@/components/AssetManagement/Dashboard/MobileHistory.vue';
    export default {
    name: "AssetDashboard",
    components: { LaptopHistory, DesktopHistory, CardHistory, AccessoryHistory, MobileHistory }
}
</script>

<style scoped>

</style>