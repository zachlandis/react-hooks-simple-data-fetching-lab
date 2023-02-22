import React, {useState, useEffect} from 'react'

function App() {
    const [dogs, setDogs] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(r => r.json())
            .then(data => {
                setDogs(data.message);
                setIsLoaded(true)
            })
    }, [])

    if (!isLoaded) return <p>Loading...</p>


    return (
        <div>
            <img src={dogs} alt="A random dog"/>
        </div>
    )
}


export default App