import React,{Component} from 'react';
import {observer} from 'mobx-react';
import LoadingWrapperWithFailure from '../common/LoadingWrapperWithFailure/index.js';
import NoDataView from '../common/NoDataView/index.js';
import {inject} from 'mobx-react';


@inject ("userStore")
@observer
class UsersPage extends Component{
    
    getUserStore=()=>{
        return this.props.userStore;
    }
    
    componentDidMount(){
        this.doNetWorkCalls();
    }
    doNetWorkCalls=()=>{
        // userStore.getUsersApi();
        this.getUserStore().getUsersApi();
    }
    
    renderUsersList=()=>{
        const {users} =this.getUserStore();
        if(users.length===0){
            return <NoDataView />;
        }
        return users.map((userName)=><div key={Math.random()}>{userName}</div>);
    }
    
    render(){
        const {getUsersApiStatus,getUsersApiError}=this.getUserStore();
        return(
                <LoadingWrapperWithFailure
                apiStatus={getUsersApiStatus}
                apiError={getUsersApiError}
                onRetryClick={this.doNetWorkCalls}
                renderSuccessUI={this.renderUsersList}/>);
    }
    
}
export default  UsersPage;