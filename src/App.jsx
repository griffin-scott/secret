import "./App.css";
import { useState, useEffect } from "react";

function App() {
    const [yesStep, setYesStep] = useState(0);
    const [noStep, setNoStep] = useState(0);

    const reset = () => {
        setYesStep(0);
        setNoStep(0);
    };

    const pictures = ["monke.png", "shy_monke.png", "curious_monke.png", "heart_monke.png"];
    const text = ["will you be my valentine?", "are you sure?", "really? :)", "yay!!!\ni love you!!!"];
    const btn_text1 = ["yes", "yes!", "yes of course!!!"];
    const btn_text2 = ["no", "well...", "erm... idk"];

    if (noStep > 0) {
        return (
            <div className="App d-flex flex-column align-items-center justify-content-center">
                <div className="main container-fluid d-flex justify-content-center align-items-center flex-column">
                    <div className="monke-container">
                        <img className="img-fluid monke" src={"sad_monke.gif"} alt="" />
                    </div>
                    <h1 className="display-3 text-center my-2">oh...</h1>
                    <button className="btn btn-outline-danger btn mt-5" onClick={reset}>
                        try again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="App d-flex flex-column align-items-center justify-content-center">
            <div className="main container-fluid d-flex justify-content-center align-items-center flex-column">
                <div className="monke-container">
                    <img className="img-fluid monke" src={pictures[yesStep]} alt="" />
                </div>
                <h1 className="display-3 text-center my-2">{text[yesStep]}</h1>
                <div className="btns">
                    {yesStep === pictures.length - 1 ? (
                        <>
                            <div className="cats-btns my-3 d-flex justify-content-center">
                            </div>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-outline-danger" onClick={reset}>
                                    reset
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <button className="btn btn-light btn me-2" onClick={() => setYesStep(yesStep + 1)}>
                                {btn_text1[yesStep]}
                            </button>
                            <button className="btn btn-light btn me-2" onClick={() => setNoStep(noStep + 1)}>
                                {btn_text2[yesStep]}
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
