import {useEffect, useState} from "react";
import axios from "axios";

const ButtonSlider = () => {
    const [themes, setThemes] = useState([]);

    useEffect(() => {
        const fetchGameTypes = async () => {
            const port = window.location.port;
            try {
                let res;
                if(port === "3001") {
                    res = await axios.get("http://localhost:8080/CyberSiege/api/roles/gameTypes");
                } else {
                    res = await axios.get("https://cyber-siege-back-production.up.railway.app/railway/api/roles/gameTypes");
                }

                setThemes(res.data);
            } catch (error) {
                console.error("Error fetching slider values:", error);
            }
        }
    fetchGameTypes();
    }, []);

    return (
        <div className="button-slider">
            {themes.map((value, index) => (
                <button key={index} className="slider-button">
                    {value}
                </button>
            ))}
        </div>
    );
}

export default ButtonSlider;