// Action creator creates action and then return it as a func

//This entire function is action creator 
export const selectUser = (user) => 
{
    // this announcement is made to each reducer telling them some event occur
    console.log("Announcement : USER SELECTED " + user.first);
    //this return part is action 
    // in redux action has two parts 
    // 1: type 2: payload 
    return{
        type:"USER_SELECTED",
        payload:user
    }

};