import React, { Component } from 'react';
import { observer } from 'mobx-react';
import stores from '../../stores';
const counterStore = stores.counterStore;

// type Props = {
//   initialCount: number
// }<Props>

@observer
class CounterPage extends Component {
  // functionCalling

  handleIncrement = () => {
    counterStore.incrementCounter();
  }

  handleDecrement = () => {
    if (counterStore.count !== 0) {
      counterStore.decrementCounter();
    }
  }


  render() {
    return (
      <div className="m-24">
        <h1 className="m-10 " >{counterStore.count}</h1>
        <button className="m-10" onClick={this.handleIncrement}>+</button>
        <button className="m-10" onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}

export default CounterPage;
