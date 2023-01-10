import {useState} from "react";

function Dropdown({options, onSelect, selection}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (selectedOption) => {
        setIsOpen(!isOpen);
        onSelect(selectedOption);
    };

    const renderedOptions = options.map((option) => {
        return (<div
            key={option.value}
            onClick={() => handleOptionClick(option)}>
            {option.label}
        </div>);
    });

    return (
        <div>
            <div className="cursor-pointer" onClick={handleClick}>{selection?.label || "Select..."}</div>
            {isOpen && <div>{renderedOptions}</div>}
        </div>
    );
}

export default Dropdown;