import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, deleteUser } from "firebase/auth";
import { auth } from '../firebase/firebase'


const addUserToAuth = async (details) => {
    return createUserWithEmailAndPassword(auth, details.email, details.password)
        .then(userCreds => {
            return userCreds.user
        })
        .catch(error => {
            alert(error.message)
            return null
        })
}

const deleteUserFromAuth = (user) => {
    deleteUser(user)
        .then(() => {

        })
        .catch((error) => {
            alert(error.message)
        })
}

const signInUsingAuth = async (user) => {
    return signInWithEmailAndPassword(auth, user.email, user.password)
        .then(userCreds => {
            return userCreds.user.uid
        })
        .catch(error => {
            alert(error.message)
            return null
        })
}


export { addUserToAuth, deleteUserFromAuth, signInUsingAuth }