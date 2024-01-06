import './App.css'
import{useState} from 'react';


function App() {
     /**
     * map through array and make list of Things
     * store first 2 Thing in use state hook
     * set new array with old(exsisting) array using spread operator
     * update/add to the array according to length

     */
    const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"])

    function addItem() {
        // We'll work on this next
        setThingsArray(prevThingsArray => [...prevThingsArray, `Thing ${prevThingsArray.length +1}`])
    }

    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}

export default App
