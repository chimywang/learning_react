import React ,{Component,PropTypes} from 'react';
/**
 * 展示组件，用于展示页面上的内容
 * @constructor
 */
class Counter extends Component{


  constructor(props){
    super(props);
    this.onIncrementIfOdd = this.onIncrementIfOdd.bind(this);
    this.onIncrementAsync = this.onIncrementAsync.bind(this);
  }
  // static propTypes = {
  //
  // };

  onIncrementIfOdd(){
    if(this.props.value % 2 !==0){
      this.props.onIncrement();
    }
  }
  onIncrementAsync(){
    setTimeout(this.props.onIncrement,1000);
  }
  render(){
    const {value,onIncrement,onDecrement} = this.props;



    return (
      <p>
       Clicked : {value} times{'    '}
        <button onClick={onIncrement}>+</button>{' '}
        <button onClick={onDecrement}>-</button>{' '}
        <button onClick={this.onIncrementIfOdd}>Increment if odd </button>{' '}
        <button onClick={this.onIncrementAsync}>Increment async</button>
      </p>

    )
  }
}
Counter.propTypes={
  value:PropTypes.number.isRequired,
  // onIncrement:PropTypes.fun.isRequired,
  // onDecrement:PropTypes.fun.isRequired
};

export default Counter;
