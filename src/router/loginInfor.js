import {ref} from 'vue'

const isLogin = ref(false)
const currentRole = ref('')
export function userLogin(){
    const login =(role)=> {
        isLogin.value = true;
        currentRole.value = role
    }
    const logout = () =>{
        isLogin.value = false;
        currentRole.value = ''
    }
    return {isLogin, currentRole, login,logout}
}