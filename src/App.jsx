
import './App.css'

import logo from './assets/screenshot-logo.png';
import React from "react";
import Counter from "./components/Counter.jsx";
import InputItem from "./components/InputItem.jsx";
import RadioButton from "./components/RadioButton.jsx";
import Button from "./components/Button.jsx";


function App() {

  const [strawberries, setStrawberries] = React.useState(0);
  const [bananas, setBananas] = React.useState(0);
  const [apples, setApples] = React.useState(0);
  const [kiwis, setKiwis] = React.useState(0);

  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [age, setAge] = React.useState(0);
  const [postalcode, setPostalcode] = React.useState("");
  const [frequency, toggleFrequency] = React.useState("weekly");
  const [timeOfDay, toggleTimeOfDay] = React.useState("day-time")
  const [remarks, setRemarks] = React.useState("");
  const [terms, toggleTerms] = React.useState(false);


  function resetFruit() {
        setStrawberries(0);
        setBananas(0);
        setApples(0);
        setKiwis(0);
  }

  function handleSubmit(e) {
        e.preventDefault();
        console.log(`Voornaam: ${firstname}, Achternaam: ${lastname}, Leeftijd: ${age}, Postcode: ${postalcode}, 
        Bezorgfrequentie: ${frequency}, Bezorgtijd: ${timeOfDay}, Opmerkingen: ${remarks}, Algemene Voorwaarden: ${terms}`);
        console.log(`Bestelling: aardbeien: ${strawberries}, bananen: ${bananas}, appels: ${apples}, kiwi's: ${kiwis}`);
  }

  return (
    <>
        <header className="outer-container header-section">
            <div className="inner-container">
                <img src={logo} alt="logo-fruitmand-bezorgservice"/>
                <h1>Bestel hier je dagelijkse fruit!</h1>
            </div>
        </header>
        <main>
            <section className="outer-container order-section">
                <div className="inner-container">

                    <Counter
                        title="&#127827; Aardbeien"
                        amount={strawberries}
                        setAmount={setStrawberries}
                    />
                    <Counter
                        title="&#127820; Bananen"
                        amount={bananas}
                        setAmount={setBananas}
                    />
                    <Counter
                        title="&#127822; Appels"
                        amount={apples}
                        setAmount={setApples}
                    />
                    <Counter
                        title="&#129373; Kiwi's"
                        amount={kiwis}
                        setAmount={setKiwis}
                    />
                    <Button
                        type="reset"
                        clickHandler={resetFruit}
                    >
                    Reset
                    </Button>
                </div>
            </section>
            <section className="outer-container form-section">
                <form onSubmit={handleSubmit} className="inner-container">

                    <section>
                        <InputItem
                            label="Voornaam"
                            type="text"
                            id="firstname-field"
                            name="firstname"
                            value={firstname}
                            changeHandler={setFirstname}
                        />
                    </section>

                    <section>
                        <InputItem
                            label="Achternaam"
                            type="text"
                            id="lastname-field"
                            name="lastname"
                            value={lastname}
                            changeHandler={setLastname}
                        />
                    </section>
                        
                    <section>
                        <InputItem
                            label="Leeftijd"
                            type="number"
                            id="age-field"
                            name="age"
                            value={age}
                            changeHandler={setAge}
                        />
                    </section>

                    <section>
                        <InputItem
                            label="Postcode"
                            type="text"
                            id="postalcode-field"
                            name="postalcode"
                            value={postalcode}
                            changeHandler={setPostalcode}
                        />
                    </section>

                    <section>
                        <label htmlFor="frequency-field">
                        Bezorgfrequentie
                        </label>
                    </section>
                    <section>
                        <select 
                            name="frequency" 
                            id="frequency-field"
                            value={frequency}
                            onChange={(e) => toggleFrequency(e.target.value)}
                        >
                            <option value="weekly">Iedere week</option>
                            <option value="fortnightly">Om de week</option>
                            <option value="monthly">Iedere maand</option>
                        </select>
                    </section>

                    <section className="time-of-day">
                        <RadioButton
                            label="Overdag"
                            type="radio"
                            id="day-field"
                            name="time-of-day"
                            value="day-time"
                            checked={timeOfDay === "day-time"}
                            changeHandler={toggleTimeOfDay}
                        />

                        <RadioButton
                            label="'s Avonds"
                            type="radio"
                            id="day-field"
                            name="time-of-day"
                            value="evening"
                            checked={timeOfDay === "evening"}
                            // checked="evening"
                            changeHandler={toggleTimeOfDay}
                        />
                    </section>

                    <section className="remarks">
                        <label htmlFor="remarks-field">
                        Opmerking
                        </label>
                        <textarea
                            name="remarks"
                            id="remarks-field"
                            cols="70"
                            rows="20"
                            value={remarks}
                            onChange={(e) => setRemarks(e.target.value)}
                        >
                        </textarea>
                    </section>

                    <section>
                        <label htmlFor="terms-and-condition-field">
                        <input
                            className="terms"
                            type="checkbox"
                            id="terms-and-condition-field"
                            name="terms"
                            value={terms}
                            onChange={(e) => toggleTerms(e.target.checked)}
                        />
                        Ik ga akkoord met de voorwaarden
                        </label>
                    </section>

                    <Button
                        type="submit"
                    >
                    Verzenden
                    </Button>

                    </form>

            </section>
        </main>
    </>
)
}

export default App
