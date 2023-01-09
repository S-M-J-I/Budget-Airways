// finish the ComposeApi and this 
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, deleteUser } from "firebase/auth";
import { addUserToAuth, deleteUserFromAuth, signInUsingAuth } from "./auth.utils";
import { addUserToDB } from "./db.utils";
import { auth } from "../firebase/firebase"
import { getUserDetails } from "../middlewares/middlewares.user";


/**
 * Attempt a login
 * @param {Object} user 
 * @param {Context} authContext 
 */
const validSignin = async (user, authContext) => {
    const uid = await signInUsingAuth(user)
    if (uid) {
        let user = await getUserDetails(uid)
        authContext.setLoggedIn(true)
        user['nickname'] = user.fullname.split(' ')[0]
        authContext.setUserDetails(user)
    }
}

/**
 * Attempt a signout 
 * @param {Context} auth 
 */
const signout = (authContext) => {
    signOut(auth)
    authContext.setLoggedIn(false)
    authContext.setUserDetails([])
}


/**
 * A helper function to enter/signup into database 
 * @param  {any} details
 * @returns {boolean} If the user was successfully created
 */
const signup = async (details) => {
    const user = await addUserToAuth(details)
    // console.log("After auth: ", user)
    if (user) {
        const result = await addUserToDB(user, details)
        if (!result) {
            deleteUserFromAuth(user)
        }
    }
}


export { signup, signout, validSignin }

