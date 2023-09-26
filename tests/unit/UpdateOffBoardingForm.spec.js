import { shallowMount } from '@vue/test-utils'
import { Axios } from 'axios';
import Updateoffboardingform from '@/components/OffboardingForm/UpdateOffBoardingForm.vue'
describe('Updateoffboardingform', () => {
    const $route = { params: { emp: "1" } }
    const wrapper = shallowMount(Updateoffboardingform, {
        global: {
            mocks: {
                $route,
            }
        }
    })
    it('has data', () => {
        expect(typeof Updateoffboardingform.data).toBe('function')
    })
    it('has data', () => {
        expect(wrapper.html()).toBeDefined()
    })
    it('Is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy();
    });
    it('should call approved method when component is mounted', async() => {
            let updateCustomer = jest.fn()
            await wrapper.setData({ employee: { status: "Approved" } })
            shallowMount(updateCustomer, {
                updateCustomer
            })
            wrapper.find('button').trigger('click')
            expect(updateCustomer).toBeCalled()
        })
        // it('should call approved method when component is mounted', async() => {
        //     let updateCustomer = jest.fn()
        //     await wrapper.setData({ employee: { status: "Waiting for Offboarding" } })
        //     shallowMount(updateCustomer, {
        //         updateCustomer
        //     })
        //     wrapper.find('button').trigger('click')
        //     expect(updateCustomer).toBeCalled()
        // })

    it('axios calling', async() => {
        Axios.get = jest.fn().mockReturnValue(Promise.resolve({
            data: {
                offboardingstatus: [{ status: 'Approved' }]
            }
        }))
    })
    it('it should render the correct correct markup', () => {
            expect(wrapper.html()).toContain('div class="col-md-4')
        })
        // it('message is coming',() =>{
        //     wrapper.vm.status='Approved'
        //     wrapper.vm.updateCustomer()
        //     const alert = 'Wrong'
        //     expect(wrapper.vm.message).toEqual(alert)
        // })
        //     it('message is coming wrong when status is empty',() =>{
        //         wrapper.vm.status='';
        //         wrapper.Approved()
        //         const alert = 'Wrong'
        //         expect(wrapper.vm.message).toEqual(alert)
        //       })
        //     it('message is coming success', () =>{
        //         wrapper.vm.status = 'avfg'
        //         wrapper.Approved()
        //        const alert = 'Success'
        //        expect(wrapper.vm.message).toEqual(alert)
        //    })
})