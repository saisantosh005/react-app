import {observable,action} from 'mobx';


class ThemeStore {
    @observable selectedTheme;
    @observable object = {
        light:{
            background:"#1a202c",
            color:"white",
        },
        dark:{
            background:"white",
            color:"black",
        }
    }
    constructor(){
        this.selectedTheme="light";
    }
    @action.bound
    changeTheme(){
        this.selectedTheme==="light"?this.selectedTheme="dark":this.selectedTheme="light";
    }
}
const themeStore =new ThemeStore();
export default themeStore;

