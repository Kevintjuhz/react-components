import Button from "./Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function App() {
    const handleClick = () => {
        console.log("Click");
    }
    return (
        <div>
            <div>
                <Button rounded primary onClick={handleClick} className="mb-5"><GoBell /> Click me</Button>
            </div>
            <div>
                <Button outline secondary>Button 2</Button>
            </div>
            <div>
                <Button success><GoCloudDownload /> Button 3</Button>
            </div>
            <div>
                <Button warning>Button 4</Button>
            </div>
            <div>
                <Button danger><GoDatabase /> Button 5</Button>
            </div>
        </div>
    )
}

export default App