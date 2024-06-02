const Users = ({ users }) => {
    return (
        <>
            <h1>User will be here </h1>
            <ul>{users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}</ul>
        </>
    )
}
export default Users;