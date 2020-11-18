import React, { Component } from 'react';

class Counter extends Component {
  styles = {
    fontSize: 22,
    fontWeight: 'bold',
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps: ', prevProps);
    console.log('prevState: ', prevState);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    const { counter, onIncrement } = this.props;
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses(counter)}>
          {counter.value}
        </span>
        <button
          className='btn btn-secondary'
          onClick={() => onIncrement(counter)}
        >
          increment
        </button>
        <button
          className='btn btn-danger m-2'
          onClick={() => this.props.onDelete(counter.id)}
        >
          Delete
        </button>
        {this.props.children}
      </div>
    );
  }

  getBadgeClasses(counter) {
    let classes = 'badge m-2 badge-';
    classes += counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }
}

export default Counter;
