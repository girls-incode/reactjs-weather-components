import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() {
    const { counters, onReset, onDelete, onIncrement } = this.props;
    return (
      <>
        <button className='btn btn-primary btn-sm m-2' onClick={onReset}>
          Reset
        </button>
        {counters.map((c) => (
          <Counter
            key={c.id}
            counter={c}
            onDelete={onDelete}
            onIncrement={onIncrement}
          >
            <div>the no #{c.id}</div>
          </Counter>
        ))}
      </>
    );
  }
}

export default Counters;
