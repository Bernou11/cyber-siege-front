import {useEffect, useState} from "react";
import axios from "axios";

const ButtonSlider = () => {
    const [themes, setThemes] = useState([]);

    useEffect(() => {
        const fetchGameTypes = async () => {
            try {
                const res = await axios.get("http://cyber-siege-back-production.up.railway.app/CyberSiege/api/roles/gameTypes");

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