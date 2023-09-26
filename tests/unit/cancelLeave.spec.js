import { shallowMount } from '@vue/test-utils'
import CancelLeave from '@/components/LeaveManagement/ManageLeave/CancelLeave'

describe('cancelLeave.vue', () => {
  let wrapper;
  beforeEach(()=> {
      wrapper=shallowMount(CancelLeave,{
          
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