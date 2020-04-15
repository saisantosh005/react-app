import {observable,action} from 'mobx';


class ThemeStore {
    @observable selectedTheme;
    @observable object = {
        light:{
            background:"blue",
        },
        dark:{
            background:"red",
        }
    }
    constructor(){
        this.selectedTheme="light";
    }
    @action.bound
    changeTheme(){
        // console.log("two");
        this.selectedTheme==="light"?this.selectedTheme="dark":this.selectedTheme="light";
        console.log(this.selectedTheme);
        console.log(this.object[this.selectedTheme]);
   
    }
}
const themeStore =new ThemeStore();
export default themeStore;




// import { observable,action} from 'mobx';
// class ThemeStore{
//     @observable selectedTheme;
//     constructor(){
//         this.selectedTheme="light";
//     }
//     @action.bound 
//     setCurrentTheme(){
//         if(this.selectedTheme==="light"){
//             this.selectedTheme="dark";
//         }
//         else{
//             this.selectedTheme="light";
//         }
//     }
// }

// const themeStore =new ThemeStore();
// export default themeStore;


