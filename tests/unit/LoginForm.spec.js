import LoginPage from '@/components/Registration/LoginPage'
import { mount } from '@vue/test-utils'
import { shallowMount } from '@vue/test-utils'

import Axios from 'axios'
describe('LoginPage', () => {
    window.alert = jest.fn()
    const wrapper = mount(LoginPage, {})
    it('has data', () => {
            expect(wrapper.html()).toBeDefined()
        })
        // it('has correct markup', () => {
        //     expect(wrapper.html()).toContain('div class="col-md-4')
        // })
    it('sets the value', () => {
        const input = wrapper.find('input')
        input.setValue('venkat')
        expect(input.element.value).toBe('venkat')
        wrapper.trigger('submit')
            // window.alert = jest.fn()
            // const alert = 'Something Went Wrong'
            // expect(wrapper.vm.alert).toEqual(alert)
    })
    it('has posting data', () => {
        wrapper.vm.users.firstName = 'venkat'
        wrapper.vm.register()
        const check = "venkat"
        expect(wrapper.vm.users.firstName).toEqual(check)
        wrapper.trigger('submit')
    })
    it('should call login method when component is mounted', async() => {
        let login = jest.fn()
        await wrapper.setData({ localStorage: { role: "admin" } })
        shallowMount(login, {
            login
        })
        wrapper.vm.userName = 'venkat'
        wrapper.vm.password = '12345'
        wrapper.find('button').trigger('click')
        expect(login).toBeCalled()
    })
    it('should call register method when component is mounted', () => {
            let register = jest.fn()
            mount(register, {
                register
            })
            wrapper.find('button').trigger('click')
            expect(register).toBeCalled()
        })
        // it("calls onLogin when button clicked", () => {
        //     const login = jest.fn();
        //     const wrapper = mount( < Login onSubmit = { login }
        //         />
        //     );
        //     wrapper.find("input.userName").simulate('change', { target: { value: 'myUser' } })
        //     wrapper.find("input.password").simulate('change', { target: { value: 'myPassword' } })
        //     wrapper.find("form").simulate("submit");
        //     console.log("onClickMock.mock", login.mock)
        //     expect(login).toBeCalled()
        // });
    it('axios calling', async() => {
        Axios.get = jest.fn().mockReturnValue(Promise.resolve({}))
        wrapper.vm.register = jest.fn()
        await wrapper.vm.register()
        expect(wrapper.vm.users).toBeDefined()
        expect(wrapper.vm.register).toBeCalled()
    })


})