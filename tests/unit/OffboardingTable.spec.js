// import OffBoardingTable from '@/components/OffboardingForm/OffBoardingTable'
// import { shallowMount } from '@vue/test-utils'

// import Axios from 'axios'

// describe('OffboardingForm', () => {
//     window.alert = jest.fn()

//     const wrapper = shallowMount(OffBoardingTable, {
//         global: {
//             mocks: {


//             }
//         }
//     })




//     it('axios calling', async() => {
//         Axios.get = jest.fn().mockReturnValue(Promise.resolve({

//         }))

//         wrapper.vm.getOffBoardingStatus = jest.fn()
//         await wrapper.vm.getOffBoardingStatus()
//         expect(wrapper.vm.list).toBeDefined()
//         expect(wrapper.vm.getOffBoardingStatus).toBeCalled()

//     })



// })

import { mount } from '@vue/test-utils'

import OffBoardingTable from '@/components/OffboardingForm/OffBoardingTable.vue'

import { Axios } from 'axios';

describe('In OffBoardingTable component', () => {

    let wrapper;



    beforeAll(() => {



        wrapper = mount(OffBoardingTable);

    });

    afterAll(() => {

        wrapper.unmount();

    });



    it('has getting status', () => {

        wrapper.vm.offboardingstatus = 'Waiting for Offboarding'

        const check = "Waiting for Offboarding"

        expect(wrapper.vm.offboardingstatus).toEqual(check)





    })

    it('axios calling', async() => {

        Axios.get = jest.fn().mockReturnValue(Promise.resolve({

            data: {

                offboardingstatus: [{ status: 'Waiting for Offboarding' }]





            }

        }))

        wrapper.vm.OffBoardingTable = jest.fn()

        await wrapper.vm.OffBoardingTable()

        expect(wrapper.vm.getOffBoardingStatus).toBeDefined()

        expect(wrapper.vm.OffBoardingTable).toBeCalled()

    })

    it('axios calling', async() => {
        Axios.get = jest.fn().mockReturnValue(Promise.resolve({

        }))

        wrapper.vm.getOffBoardingStatus = jest.fn()
        await wrapper.vm.getOffBoardingStatus()
        expect(wrapper.vm.list).toBeDefined()
        expect(wrapper.vm.getOffBoardingStatus).toBeCalled()

    })

});