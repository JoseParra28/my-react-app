
function UserGreeting(props){
    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>;
    const logIn = <h2 className="">Please login to continue</h2>;
    return (props.isLoggedIn ? welcomeMessage : logIn
    )
}


export default UserGreeting