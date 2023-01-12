import Button from "../components/Button";
import {GoBell, GoCloudDownload, GoDatabase} from "react-icons/go";

function ButtonPage() {
    const handleClick = () => {
    };

    return (
        <div>
            <div>
                <Button rounded primary onClick={handleClick} className="mb-5"><GoBell/> Click me</Button>
            </div>
            <div>
                <Button rounded outline secondary>Button 2</Button>
            </div>
            <div>
                <Button outline success><GoCloudDownload/> Button 3</Button>
            </div>
            <div>
                <Button warning>Button 4</Button>
            </div>
            <div>
                <Button danger><GoDatabase/> Button 5</Button>
            </div>
        </div>
    );
}

export default ButtonPage;