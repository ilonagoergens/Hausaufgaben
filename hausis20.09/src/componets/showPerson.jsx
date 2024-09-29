import React from "react";

function ShowPerson() {

const persons = [{
    name: "Dimi", 
    age: 35}, 
    { name: "Lukas", 
    age: 28}, 
    {name: "Marcus", 
    age: 34}]

    return (
        <>
            {
            persons.filter((person) => person.age.toString().startsWith("3"))
            .map((person, index) => (
                <li key={index}>{person.name} - {person.age}</li>
            
            ))}
        </>
    )

    }


export default ShowPerson