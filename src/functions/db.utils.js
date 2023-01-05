import { postUserDetails } from "../middlewares/middlewares.user";
// import { composeApi } from "../middlewares/middlewares.utils";


// * REPLACE ALL CODE HERE WITH MONGODB

const addUserToDB = async (user, details) => {
    const { uid } = user
    details['uid'] = uid
    // console.log(details)
    return await postUserDetails(details)
}


export { addUserToDB }