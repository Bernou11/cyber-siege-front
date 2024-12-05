import {useEffect, useState} from "react";
import axios from "axios";

const Game = () => {
    const [themes, setThemes] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCount = 2;

    const fetchGameTypes = async () => {
        try {
            const res = await axios.get("http://localhost:8080/CyberSiege/api/roles/gameTypes");

            setThemes(res.data);
        } catch (error) {
            console.error("Error fetching slider values:", error);
        }
    }

    useEffect(() => {
        fetchGameTypes();
    }, [fetchGameTypes]);

    const nextSlide = () => {
        if (currentIndex + visibleCount < themes.length) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    return (
        <div className="button-slider">
            <button onClick={prevSlide} disabled={currentIndex === 0}>
                Prev
            </button>
            <div className="slider">
                {themes
                    .slice(currentIndex, currentIndex + visibleCount)
                    .map((value, index) => (
                        <button key={index} className="slider-button">
                            {value}
                        </button>
                    ))}
            </div>
            <button
                onClick={nextSlide}
                disabled={currentIndex + visibleCount >= themes.length}
            >
                Next
            </button>
        </div>
    );
};

export default Game;