import OffboardingForm from '@/components/OffboardingForm/OffboardingForm'
import { shallowMount } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import Axios from 'axios'

describe('OffboardingForm', () => {
    window.alert = jest.fn()
    const $route = { params: { ggid: "1" } }
    const wrapper = shallowMount(OffboardingForm, {
        global: {
            mocks: {
                $route,

            }
        }
    })

    it('has data', () => {
        expect(wrapper.html()).toBeDefined()
    })
    it('has correct markup', () => {

        expect(wrapper.html()).toContain('div class="col-md-4')

    })
    it('has getting employee', () => {
        wrapper.vm.employee.firstName = 'venkat'
        const check = "venkat"
        expect(wrapper.vm.employee.firstName).toEqual(check)
    })
    it('has posting data', () => {
        wrapper.vm.employee.firstName = 'venkat'
        wrapper.vm.offBoardForm()
        const check = "venkat"
        expect(wrapper.vm.employee.firstName).toEqual(check)
    })

    it('axios calling', async() => {
        Axios.get = jest.fn().mockReturnValue(Promise.resolve({
            data: {
                employee: [{ firstName: 'venkat' }]
            }
        }))
        wrapper.vm.offBoardForm = jest.fn()
        await wrapper.vm.offBoardForm()
        expect(wrapper.vm.employee).toBeDefined()
        expect(wrapper.vm.offBoardForm).toBeCalled()

    })


    it('axios calling', async() => {
        Axios.get = jest.fn().mockReturnValue(Promise.resolve({

        }))
        wrapper.vm.getOnboarding = jest.fn()
        await wrapper.vm.getOnboarding()
        expect(wrapper.vm.employee).toBeDefined()
        expect(wrapper.vm.getOnboarding).toBeCalled()

    })

    it('should call login method when component is mounted', () => {
        let offBoardForm = jest.fn()

        mount(offBoardForm, {
            offBoardForm,

        })
        wrapper.find('button').trigger('click')
        expect(offBoardForm).toBeCalled()
    })

    // it('calls testMethod on mount', () => {
    //     const getOnboarding = jest.fn()
    //     const $route = { params: { id: "1" } }
    //     shallowMount(OffboardingForm, {
    //         methods: {
    //             getOnboarding
    //         }
    //     })
    //     expect(wrapper.vm.$route.params).toBe($route.params)
    //     expect(getOnboarding).toBeCalled()
    // });

})