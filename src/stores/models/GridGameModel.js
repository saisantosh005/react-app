import {observable} from 'mobx';

class GridGameModel{
    @observable id;
    @observable isHidden;
    constructor(props){
        this.id=props.id;
        this.isHidden=props.isHidden;
    }
}
export default GridGameModel;