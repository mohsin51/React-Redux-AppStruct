
// here we are passing default value null beacause 
//initially no user is selected so we dont want to be undefined
export default function(state = null,action)
{
        switch(action.type)
        {
            case "USER_SELECTED":
                return action.payload;
                break;
            default:
                return state;
        }
        return state;      
}