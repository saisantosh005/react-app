import React from 'react';

// const List=(props)=>{
//     const {name,type,content}=props;
//     return(<li>
//     <input type={type} name={name} value={props.value} onChange={props.callBack}></input>
//     {content}
//     </li>);
// };

class FavouriteDessert extends React.Component{
        state={
            selectedDessert:"",
            favoriteDessert:"",
        };
    
    handleUserInput=(event)=>{
        this.setState({
            selectedDessert:event.target.value,
        });
    }
    
    handleSubmit=(event)=>{
        event.preventDefault();
    }
    
    displayMessage=()=>{
        this.setState({
            favoriteDessert:this.state.selectedDessert.toUpperCase(),
        });
    }
    renderDessertOptions=()=>{
      const here = this.props.list.map((item)=>
      <li key = {item}>
            <input type="radio" name="favoriteDessert"value={item} onChange={this.handleUserInput}>
            </input>
            {item}
      </li>);
      return here;  
    }
   render() {
    return (<div className="favoriteDessert">
        <div>What is your favorite Dessert?</div>
        <form className="favoriteDessert" onSubmit={this.handleSubmit}>
            <ul>
                {this.renderDessertOptions()}
            </ul>
            <input type ="button" value="Make your choice" onClick={this.displayMessage}></input>
        </form>
        
        {this.state.favoriteDessert!==""?<div>My favorite dessert is {this.state.favoriteDessert}</div>:<div></div>}
    </div>  
    );
}
}
export {FavouriteDessert};