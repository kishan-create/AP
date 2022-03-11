import Login from "./Loginform";
const Logout =()=>{
    localStorage.clear();
        window.location.href = '/Loginform';
}
export default Logout;