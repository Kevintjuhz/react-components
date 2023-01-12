import Dropdown from "../components/Dropdown";
import {useState} from "react";

function DropdownPage() {
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
        <div className="flex">
            <Dropdown options={options} onChange={handleSelect} value={selection}/>
        </div>
    );
}

export default DropdownPage;