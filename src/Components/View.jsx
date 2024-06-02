const View = (props) => {
    return (
      <div>
        <h2>View</h2>
        <p>First name: {props.fname}</p>
        <p>Last name: {props.lname}</p>
        <p>Phone: {props.phone}</p>
        <p>Email: {props.email}</p>
        <p>Message {props.message}</p>
      </div>
    );
  };
  
  export default View;