import airportConfigs from "../../configs/airport.configs"
import { auth } from "../firebase/firebase"
import { composeApi } from "./middlewares.utils"

const _PATH = "flights"

const _OPTIONS = {
    method: "POST",
    mode: "cors",
    headers: { 'Content-Type': 'application/json' },
}


const getAllFlights = (start, dest, date, adults, children, infants, setFlights, setFlightsLoaded) => {
    const departureDate = date.toISOString().split('T')[0]
    console.log(start, dest, departureDate)
    const details = {
        start,
        dest,
        departureDate,
        adults,
        children,
        infants
    }
    fetch(composeApi('flights/getflightoffers'), {
        method: "POST",
        mode: "cors",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(details)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data[0])
            setFlights(data)
            setFlightsLoaded(true)
        })
        .catch(error => {
            alert(error.message)
        })
}


const getCityFromIATA = async (city_code) => {
    return fetch(`https://airlabs.co/api/v9/cities?api_key=${airportConfigs.API_KEY}&city_code=${city_code}`, { method: "GET", mode: "cors" })
        .then(res => res.json())
        .then(data => {
            return data.response[0].name
        })
        .catch(error => {
            alert(error.message)
            return null
        })
}

const getAirlineFromIATA = async (airline_code) => {
    return fetch(`https://airlabs.co/api/v9/airlines?api_key=${airportConfigs.API_KEY}&iata_code=${airline_code}`, { method: "GET", mode: "cors" })
        .then(res => res.json())
        .then(data => {
            return data.response[0].name
        })
        .catch(error => {
            alert(error.message)
            return null
        })
}

const addToWatchList = async (details) => {
    const currUserUID = auth.currentUser.uid
    details['user'] = currUserUID
    return fetch(composeApi(`${_PATH}/add_watchlist`), { ..._OPTIONS, body: JSON.stringify(details) })
        .then(res => res.json())
        .then(data => {
            if (data.message === "OK") {
                alert('Added to watchlist!')
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

export { getAllFlights, getCityFromIATA, getAirlineFromIATA, addToWatchList }