import React , {Component} from 'react';
import {connect} from 'react-redux';

class UserDetails extends Component
{

    render()
    {
        if(this.props.user === null)
        {
            return (<h2>Select USER</h2>);
        }
        return (<div>
            <img src ={this.props.user.thumbnail}/>
            <h2>{this.props.user.first} {this.props.user.last}</h2>
            <h3>{this.props.user.age}</h3>
            <h3>{this.props.user.description}</h3>
        </div>);

    }

  
}

    //Containers 
    // it takes your application main store states and pass in component as props so we can use it
    // we can use any state data from all reduces e.g we will use users data 
    function mapStateToProps(state)
    {
        return(
            {
                user:state.activeuser
            }
        );
    
    }

    export default connect(mapStateToProps)(UserDetails);