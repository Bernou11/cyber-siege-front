import './App.css';
import ButtonSlider from "./components/ButtonSlider";

function App() {
    return (
        <div className="game-setup-container">
            {/* Title */}
            <h1 className="title">Game Setup</h1>

            {/* Input Fields */}
            <div className="input-fields">
                {[...Array(6)].map((_, index) => (
                    <div key={index} className="input-container">
                        <label className="player-label">Player {index + 1}:</label>
                        <input
                            type="text"
                            placeholder="Select your name..."
                            className="input-field"
                        />
                    </div>
                ))}
            </div>

            {/* Slider */}
            <div className="slider-container">
                <ButtonSlider/>
            </div>
        </div>
    );
}

export default App;
