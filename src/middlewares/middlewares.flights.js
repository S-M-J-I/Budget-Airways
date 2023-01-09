import { composeApi } from "./middlewares.utils"

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

export { getAllFlights }