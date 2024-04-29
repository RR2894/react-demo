const Form = (props) => {
    return (
      <form>
        <h2>Form</h2>
        <div>
          <label htmlFor="fname">First name</label>
          <input
            type="text"
            id="fname"
            onChange={props.changeHandler}
            name="fname"
          />
        </div>
        <div>
          <label htmlFor="lname">Last name</label>
          <input
            type="text"
            id="lname"
            onChange={props.changeHandler}
            name="lname"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            onChange={props.changeHandler}
            name="phone"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            onChange={props.changeHandler}
            name="email"
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" onChange={props.changeHandler} name="message" />
        </div>
      </form>
    );
  };
  
  export default Form;