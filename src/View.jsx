function View () {
    const clickHandler = (props) => {

    }
    return (  
        <div>
            <h2>View</h2>
            <p>First name: {props.fName}</p>
            <p>Last name: {props.lName}</p>
            <p>Email: {props.email}</p>
            <p>Phone: {props.phone}</p>
            <p>Message: {props.message}</p>
        </div>
    );
}


export default App;