import { composeApi } from "./middlewares.utils"
import { auth } from "../firebase/firebase"

const _PATH = "users"

const _OPTIONS = {
    method: "POST",
    mode: "cors",
    headers: { 'Content-Type': 'application/json' },
}

/**
 * 
 * @param {String} uid 
 * @returns the user data that matches the uid. null if no user is found
 */
const getUserDetails = async (uid) => {
    return fetch(composeApi(`${_PATH}/get/${uid}`), _OPTIONS)
        .then(res => res.json())
        .then(data => {
            return data
        })
        .catch(error => {
            alert(error.message)
            return null
        })
}

/**
 * 
 * @param {Object} details 
 * @returns true if the user is found, else false (and displays an alert error)
 */
const postUserDetails = async (details) => {
    return fetch(composeApi(`${_PATH}/signup`), { ..._OPTIONS, body: JSON.stringify(details) })
        .then(res => res.json())
        .then(data => {
            if (data.message === "OK") {
                return true
            } else {
                alert(data.message)
                return false
            }
        })
        .catch(error => {
            alert(error.message)
            return false
        })
}



const getWatchList = (setList) => {
    const uid = auth.currentUser.uid
    fetch(composeApi(`${_PATH}/getwatchlist`), { ..._OPTIONS, body: JSON.stringify({ user: uid }) })
        .then(res => res.json())
        .then(data => {
            if (data.code === 404) {
                alert("User not found")
            }

            setList(data.watchlist)
        })
        .catch(error => {
            alert(error.message)
        })
}




export { getUserDetails, postUserDetails, getWatchList }