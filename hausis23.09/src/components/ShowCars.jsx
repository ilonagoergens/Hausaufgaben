import React, { useState, useEffect } from 'react'


function ShowCars() {
    const [cars, setCars] = useState([])

    useEffect(() => {

        async function getCars() {
            const endpoint = "https://freetestapi.com/api/v1/cars?limit=15"
            const response = await fetch(endpoint)
            const data = await response.json()
            setCars(data)
        }

        getCars()
    }, [])

    return (
        <div>
            <ul>
            {cars.map((car, index) =>
                    <li key={index}>{car.make}: {car.year}: {car.model}
                    </li>)}
            </ul>
        </div>
    )
}

export default ShowCars