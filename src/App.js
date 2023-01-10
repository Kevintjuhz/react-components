import Dropdown from "./components/Dropdown";
import {useState} from "react";

function App() {
    const [selection, setSelection] = useState(null);

    const options = [
        {label: "Red", value: "red"},
        {label: "Green", value: "green"},
        {label: "Blue", value: "blue"},
    ];

    const handleSelect = (selectedOption) => {
        setSelection(selectedOption);
    };

    return (
        <div><Dropdown options={options} onSelect={handleSelect} selection={selection}/></div>
    );
}

export default App;