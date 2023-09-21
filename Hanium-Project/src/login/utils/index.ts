export function isLogined() {
    if(localStorage.getItem('user')){
        return true;
    } else{
        return false;
    }
}
export function Logout(){
    if(confirm('로그아웃 하시겠습니까?')){
    localStorage.removeItem('user');
    }

}