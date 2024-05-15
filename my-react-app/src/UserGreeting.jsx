import PropTypes from 'prop-types'
function UserGreeting(props)
{
//     if(props.isLoggedIn)
//         {
//             return <h2>Welcome {props.username}</h2>
//         }
//     else
//     {
//         return <h2>Pleaselogin </h2>
//     }
const welcomeMessage=  <h2 className="welcome-message">Welcome {props.username}</h2>
const loginpropmt=<h1 className="login-prompt">Please Log in</h1>
    return(props.isLoggedIn ? welcomeMessage : loginpropmt
                                );
 }
 UserGreeting.prototypes={
    isLoggedIn:PropTypes.bool,
    username:PropTypes.string,
 }
 UserGreeting.defaultProps={
    isLoggedIn:false,
    username:"Guest",
 }

export default UserGreeting