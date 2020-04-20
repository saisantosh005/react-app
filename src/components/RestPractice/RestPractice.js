import React,{Component} from  'react';
import {MainDivStyle} from './restStyle.js';
import {observable} from 'mobx';
import {observer } from 'mobx-react';

/*global fetch*/

@observer
class RestApiPractice extends Component{
    @observable hello;
    @observable list =[]
    componentDidMount(){
        this.getValue()
    }
    async getValue(){
        const fetchData = await fetch('https://todo-list-2.getsandbox.com/todos');
        const fetchDataJson = await fetchData.json();
        this.list = fetchDataJson;
        
        
        
        
        
        
    }
    renderListItems=()=>{
        return this.list.map((item)=><li id={item.title} key = {item.id}>{item.title}</li>)
    }
    
    render(){
        return(
            <MainDivStyle>
                <ul>
                    {this.list.length>0?this.renderListItems():"loading"}
                </ul>
            </MainDivStyle>);
    }
}
export {RestApiPractice};