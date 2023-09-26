import { shallowMount } from '@vue/test-utils'
import {ApplyLeave} from '@/components/LeaveManagement/ManageLeave/ApplyLeave'

describe('ApplyLeave.vue', () => {
    let wrapper;
    beforeEach(()=> {
        wrapper=shallowMount(ApplyLeave,{
           
            //vuelidate,plugins
            // global:{
            //     plugins:[store,vuelidate],
            // }
        });
    });
//    afterEach(()=> {
//     wrapper.unmount();
//    })
    it('should load the component',() =>{
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.vm).toBeDefined();
    })
});