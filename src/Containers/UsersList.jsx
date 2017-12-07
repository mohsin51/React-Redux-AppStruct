import React , {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../Actions/index';

// Component Name always start from capital
class UsersList extends Component
{
    

    render()
    {
        const listitems = this.props.users.map((user) => {
                    return(<li key={user.id} onClick = { () => this.props.selectUser(user)}>
                        {user.first} {user.last}
                        </li>);
                });
        return(
            <ul>
               {listitems}
            </ul>
        );
    }
   
    
  
}
//Containers 
// it takes your application main store states and pass in component as props so we can use it
// we can use any state data from all reduces e.g we will use users data 
function mapStateToProps(state)
{
    return(
        {
            users:state.users
        }
    );
   
}
// user to connect actions with component 
function matchDispatchToProps(dispatch)
{
        // connection action creator from actions
        return bindActionCreators({selectUser : selectUser} , dispatch);
}

//making our component aware of application store And Actions imported 
export default connect(mapStateToProps,matchDispatchToProps)(UsersList);