import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
// import tw from'tailwind.macro';
import stores from '../../stores'
const counterStore = stores.counterStore

type Props = {
  initialCount: number
}

@observer
class CounterPage extends Component<Props> {
  functionCalling

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
