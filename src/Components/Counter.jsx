const Counter = (props) => {
    return (
      <div>
        <p>Counter: {props.counterP}</p>
        <button onClick={props.clickIncHandler}>Increase by 1</button>
        <button onClick={props.clickDecHandler}>Decrease by 1</button>
      </div>
    );
  };
  
  export default Counter;