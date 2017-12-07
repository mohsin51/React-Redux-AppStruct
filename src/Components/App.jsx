import React ,{Component} from 'react';
import UsersList from '../Containers/UsersList';
import UserDetails from '../Containers/User-details.jsx';

class App extends Component
{

  render()
  {
      return(
            <div>
                <h2>Username List</h2>
                    <UsersList/>
                <hr />
                <h2>User Details</h2>
                <UserDetails/>
            </div>
      );

  }
}
export default App;