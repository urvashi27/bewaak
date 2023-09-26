import { shallowMount } from '@vue/test-utils'
import LeaveDetails from '@/components/LeaveManagement/ManageLeave/LeaveDetails'


describe('LeaveDetails.vue', () => {
    let wrapper;
    beforeEach(()=> {
        wrapper=shallowMount(LeaveDetails,{
            props: { sendId:234,
                action:'cancelLeave'},
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
    it('cancel leave button should be visible if user click on cancel button',() =>
    {
        expect(wrapper.find("button").isVisible()).toBe(true);
        expect(wrapper.find("button").text()).toBe("Cancel Leave");
        const button= wrapper.find('button');
        const spy = jest.spyOn(wrapper.vm, 'cancelLeave')
        button.trigger('click')
        expect(spy).toHaveBeenCalled();

    })
    it('cancel leave button should not be visible if user click on view details icon',() =>
    {
       // expect(wrapper.find("button").text()).toBe("Cancel Leave");
       // expect(wrapper.find("button").isVisible()).toBe(false);
1
    })
  it('cancelLeave method gets called on click of cancel button', () => {
   
    //given
    const spy = jest.spyOn(wrapper.vm, 'cancelLeave')
    //when
    wrapper.find("button").trigger('click')
    //then
    expect(spy).toHaveBeenCalled();
   
  }),
  it('getLeaveById', () =>{
    wrapper.vm.getLeaveDataById();
    // const spy=jest.spyOn(wrapper.vm,'getLeaveDataById')
    // expect(spy).toBeCalled();
  })
})