const Dashboard = (user) => {
    return ( 
       <div>
        {user === 'Randolph' ? (
          <h2>Welcome to inner circle, {user}</h2>
        ) : (
          <h2>Oh you must be new here, {user}</h2>
        )}
       </div>
     );
};
 
export default Dashboard;