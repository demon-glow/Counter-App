import React, {useState} from 'react'

function MyComponent() {

    const [name, setName] = useState("Guest"); //returns an array with two elements. a variable and a setter funciton.
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Dhanara");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmployeeStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
            <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployeeStatus}>Toggle Status</button>
        </div>
    );
}

export default MyComponent