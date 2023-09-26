<template>
<article class="mt-5 py-5">
    <div class="container" :class="{'sign-up-active' : signUp}">
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-left">
                    <h2>Welcome Back!</h2>
                    <p>Please login with your personal info</p>
                    <button class="invert" id="signIn" @click="signUp = !signUp">Sign In</button>
                </div>
                <div class="overlay-right">
                    <h2>Hello, Friend!</h2>
                    <p>Please enter your personal details</p>
                    <button class="invert" id="signUp" @click="signUp = !signUp">Sign Up</button>
                </div>
            </div>
        </div>
        <form class="sign-up" action="#"  @submit.prevent="register">
            <h2>Create login</h2>
            <div class="row pt-4">
                <div class="col-md-6"><input type="text" class="form-control" placeholder="first name" v-model="users.firstName" />
                    <span class="text-danger" v-if="v$.users.firstName.$error">{{ v$.users.firstName.$errors[0].$message}}</span></div>
                <div class="col-md-6"><input type="text" class="form-control" placeholder="last name" v-model="users.lastName" />
                    <span class="text-danger" v-if="v$.users.lastName.$error">{{ v$.users.lastName.$errors[0].$message}}</span></div>
                <div class="col-md-6"><input type="text" class="form-control" placeholder="user name" v-model="users.userName" />
                    <span class="text-danger" v-if="v$.users.userName.$error">{{ v$.users.userName.$errors[0].$message}}</span></div>
                <div class="col-md-6"><input type="email" class="form-control" placeholder="email" v-model="users.email" />
                    <span class="text-danger" v-if="v$.users.email.$error">{{ v$.users.email.$errors[0].$message}}</span></div>
                <div class="col-md-6"><input type="text" class="form-control" placeholder="ggid" v-model="users.ggid" />
                    <span class="text-danger" v-if="v$.users.ggid.$error">{{ v$.users.ggid.$errors[0].$message}}</span></div>
                <div class="col-md-6"><input type="text" class="form-control" placeholder="supervisor" v-model="users.supervisor" />
                    <span class="text-danger" v-if="v$.users.supervisor.$error">{{ v$.users.supervisor.$errors[0].$message}}</span></div>
                <div class="col-md-6"><input type="text" class="form-control" placeholder=" contact" v-model="users.contact" />
                    <span class="text-danger" v-if="v$.users.contact.$error">{{ v$.users.contact.$errors[0].$message}}</span></div>
                <div class="col-md-6">
                    <select class="form-slect dropdown-toggle" v-model="users.gender">
                        <option value="" disabled hidden>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                    </select>
                    <span class="text-danger" v-if="v$.users.gender.$error">{{ v$.users.gender.$errors[0].$message}}</span>
                </div>
                <div class="col-md-6"><input type="password" class="form-control" placeholder="password" v-model="users.password" />
                    <span class="text-danger" v-if="v$.users.password.$error">{{ v$.users.password.$errors[0].$message}}</span></div>
                <div class="col-md-6"><input type="password" class="form-control" placeholder="confirm password" v-model="confirmPassword" />
                    <span class="text-danger" v-if="v$.confirmPassword.$error">{{ v$.confirmPassword.$errors[0].$message}}</span></div>
            </div>
            <button type="submit" class="mt-4" >Sign Up</button>
        </form>
        <form class="sign-in pe-4" action="#" @submit.prevent="login">
            <div>
                <h2>Sign In</h2>
                <hr />
                <div><input class="form-control" type="user name" placeholder="user name" v-model="userName" />
                   </div>
                <div class="pt-2"><input class="form-control" type="password" placeholder="Password" v-model="password" />
                   </div>
            </div>
            <a href="#">Forgot your password?</a>
            <button type="submit">Sign in</button>
        </form>
    </div>
</article>
</template>
<script>
import useVuelidate from '@vuelidate/core'
import UserService from '@/services/UserService'
import {
    required,
    email,
    minLength,
    numeric,
    sameAs,
    alpha,
    alphaNum
} from '@vuelidate/validators'
// export function validName(name) {
//     let validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
//     if (validNamePattern.test(name)) {
//         return true;
//     }
//     return false;
// }
export default {
    name: 'LoginPage',
    setup() {
        return {
            v$: useVuelidate()
        }
    },
    data() {
        return {
            signUp: false,
            userName: '',
            password: '',
            msg: '',
            confirmPassword: '',
            users: {
                firstName: '',
                lastName: '',
                userName: '',
                email: '',
                ggid: undefined,
                contact: undefined,
                gender: '',
                password: '',
                supervisor: '',
                isActive: false,
                status: 'pending'
            }
        }
    },
    validations() {
        return {
            users: {
                firstName: {
                    required,
                    alpha
                    // name_validation: {
                    //     $validator: validName,
                    //     $message: 'Invalid Name.'
                    // }
                },
                lastName: {
                    required,
                    alpha
                    // name_validation: {
                    //     $validator: validName,
                    //     $message: 'Invalid Name.'
                    // }
                },
                userName: {
                    required,
                    alphaNum
                    // name_validation: {
                    //     $validator: validName,
                    //     $message: 'Invalid Username.'
                    // }
                },
                email: {
                    required,
                    email
                },
                ggid: {
                    required,
                    numeric
                },
                contact: {
                    required,
                    numeric
                },
                gender: {
                    required
                },
                password: {
                    required,
                    min: minLength(5)
                },
                supervisor: {
                    required
                },
            },
            confirmPassword: {
                required, 
                sameAs: sameAs(this.users.password)
            },
           
        }
    },
    methods: {
        login() {
            var data = {
                userName: this.userName,
                password: this.password
            }
            
            UserService.authenticate(data).then(response => {
                if (response.data.jwtToken) {
                    localStorage.setItem('jwtToken', response.data.jwtToken);
                    localStorage.setItem('role', response.data.users.role);
                    localStorage.setItem("users", JSON.stringify(response.data.users));
                    response.data.users.userid = "";
                    response.data.users.userName = "";
                    response.data.users.firstName = "";
                    response.data.users.lastName = "";
                    response.data.users.contact = "";
                    response.data.users.email = "";
                    response.data.users.ggid = "";
                    response.data.users.role = "";
                    response.data.users.gender = "";
                    response.data.users.supervisor = "";
                    response.data.users.status = "";
                    console.log(response.data);
                    if (localStorage.getItem('role') === 'Admin' || localStorage.getItem('role') === 'Ops Team') {
                        location.href = "/Dashboard";
                    } else {
                        location.href = "/home";
                    }
                } else {
                    alert('Something went wrong!!')
                }
            }).catch(e => {
                console.log(e);
                alert('Username and Password is Incorrect.. ')
            })
            
            
        },
        
        register() {
          
            var data = {
                firstName: this.users.firstName,
                lastName: this.users.lastName,
                email: this.users.email,
                userName: this.users.userName,
                ggid: this.users.ggid,
                contact: this.users.contact,
                gender: this.users.gender,
                password: this.users.password,
                supervisor: this.users.supervisor,
                isActive: this.users.isActive,
                status: this.users.status
            };
            this.v$.$validate();
            if (!this.v$.$error) {
                // this.signUp = true;
                    UserService.create(data).then(response => {
                        this.users.ggid = response.data.id;
                        this.msg = 'success';
                    }).catch(msg => {
                        this.msg = 'wrong';
                        alert(msg);
                    })
                  document.getElementById('signUp')
                  location.reload();
                } 

            
            }
    }
    }

</script>
<style lang="scss" scoped>
.container {
    position: relative;
    width: 768px;
    height: 470px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0, 0, 0, .2),
        0 10px 10px rgba(0, 0, 0, .2);
    background: linear-gradient(to bottom, #f3f6f9, #f3f6f9);
    .overlay-container {
        position: absolute;
        top: 0;
        left: 50%;
        width: 50%;
        height: 100%;
        overflow: hidden;
        transition: transform .5s ease-in-out;
        z-index: 100;
    }
    .overlay {
        position: relative;
        left: -100%;
        height: 100%;
        width: 200%;
        background: linear-gradient(-45deg, #1DA1F2, #1DA1F2);
        color: #fff;
        transform: translateX(0);
        transition: transform .5s ease-in-out;
    }
    @mixin overlays($property) {
        position: absolute;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        padding: 70px 40px;
        width: calc(50% - 80px);
        height: calc(100% - 140px);
        text-align: center;
        transform: translateX($property);
        transition: transform .5s ease-in-out;
    }
    .overlay-left {
        @include overlays(-20%);
        margin-left: 40px;
    }
    .overlay-right {
        @include overlays(0);
        right: 0;
        margin-right: 40px;
    }
}
h2 {
    margin: 0;
}
p {
    margin: 20px 0 30px;
}
a {
    color: #222;
    text-decoration: none;
    // margin: 15px 0;
    // font-size: 1rem;
}
button {
    border-radius: 20px;
    border: 1px solid #1DA1F2;
    background-color: #1DA1F2;
    color: #fff;
    // font-size: 1rem;
    font-weight: bold;
    padding: 10px 40px;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform .1s ease-in;
    &:active {
        transform: scale(.9);
    }
    &:focus {
        outline: none;
    }
}
button.invert {
    background-color: transparent;
    border-color: #fff;
}
form {
    position: absolute;
    top: 0;
    margin-left: 10px;
    margin: auto;
    // padding-left: 20px;   
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 80px 20px;
    width: calc(64% - 120px);
    height: 100%;
    text-align: center;
    background: linear-gradient(to bottom, #f3f6f9, #f3f6f9);
    transition: all .5s ease-in-out;
    input {
        padding: 10px 30px 2px 25px;
        border: 2px solid #1DA1F2;
        padding: 0px 15px;
        margin: 8px 0;
        width: 100%;
        border-radius: 20px;
        overflow: hidden;
        &:focus {
            outline: none;
            background-color: #fff;
        }
    }
}
.sign-in {
    z-index: 2;
}
.sign-up {
    z-index: 1;
    opacity: 0;
}
.sign-up-active {
    .sign-in {
        transform: translateX(100%);
    }
    .sign-up {
        transform: translateX(100%);
        opacity: 1;
        z-index: 5;
        animation: show .5s;
    }
    .overlay-container {
        transform: translateX(-100%);
    }
    .overlay {
        transform: translateX(50%);
    }
    .overlay-left {
        transform: translateX(0);
    }
    .overlay-right {
        transform: translateX(20%);
    }
}
@keyframes show {
    0% {
        opacity: 0;
        z-index: 1;
    }
    49% {
        opacity: 0;
        z-index: 1;
    }
    50% {
        opacity: 1;
        z-index: 10;
    }
}
form div {
    font-size: 1.4rem;
}
form select {
    padding: 10px 30px 2px 25px;
    border: 2px solid #1DA1F2;
    // border: none;
    padding: 2px 12px;
    margin: 6px 0;
    width: 100%;
    border-radius: 15px;
    overflow: hidden;
}
span {
    font-size: 12px;
    opacity: 70%;
}
</style>