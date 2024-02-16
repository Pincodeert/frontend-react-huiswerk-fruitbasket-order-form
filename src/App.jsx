
import './App.css'

import logo from './assets/screenshot-logo.png';
import React from "react";

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
        Bezorgfrequentie: ${frequency}, Opmerkingen: ${remarks}, Algemene Voorwaarden: ${terms}`);
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
                    <article className="product">
                        <h2>&#127827; Aardbeien</h2>
                        <button type="button" disabled={strawberries === 0}
                                onClick={() => setStrawberries(strawberries - 1)}>
                            -
                        </button>

                        <p>{strawberries}</p>
                        <button type="button" disabled={strawberries === 10}
                                onClick={() => setStrawberries(strawberries + 1)}>
                            +
                        </button>
                    </article>
                    <article className="product">
                        <h2>&#127820; Bananen</h2>
                        <button type="button" disabled={bananas === 0} onClick={() => setBananas(bananas - 1)}>
                            -
                        </button>
                        <p>{bananas}</p>
                        <button type="button" onClick={() => setBananas(bananas + 1)}>
                            +
                        </button>
                    </article>
                    <article className="product">
                        <h2>&#127822; Appels</h2>
                        <button type="button" disabled={apples === 0} onClick={() => setApples(apples - 1)}>
                            -
                        </button>
                        <p>{apples}</p>
                        <button type="button" onClick={() => setApples(apples + 1)}>
                            +
                        </button>
                    </article>
                    <article className="product">
                        <h2>&#129373; Kiwi's</h2>
                        <button type="button" disabled={kiwis === 0} onClick={() => setKiwis(kiwis - 1)}>
                            -
                        </button>
                        <p>{kiwis}</p>
                        <button type="button" onClick={() => setKiwis(kiwis + 1)}>
                            +
                        </button>
                    </article>
                    <button type="reset" onClick={resetFruit}>
                        Reset
                    </button>
                </div>
            </section>
            <section className="outer-container form-section">
                <form onSubmit={handleSubmit} className="inner-container">
                    <section>
                        <label htmlFor="firstname-field">
                        Voornaam
                        <input
                            type="text"
                            id="firstname-field"
                            name="firstname"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                        </label>
                    </section>
                        
                    <section>
                        <label htmlFor="lastname-field">
                        Achternaam
                        <input
                            type="text"
                            id="lastname-field"
                            name="lastname"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                        />
                        </label>
                    </section>
                        
                    <section>
                        <label htmlFor="age-field" min="18">
                        Leeftijd
                        <input 
                            type="number" 
                            id="age-field"
                            name="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                        </label>
                    </section>

                    <section>
                        <label htmlFor="postalcode-field">
                        Postcode
                        <input 
                            type="text" 
                            id="postalcode-field"
                            name="postalcode"
                            value={postalcode}
                            onChange={(e) => setPostalcode(e.target.value)}
                        />
                        </label>
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
                        <label htmlFor="day-field">
                        <input
                            type="radio"
                            name="time-of-day"
                            value="day-time"
                            id="day-field"
                            checked={timeOfDay === "day-time"}
                            onChange={(e) => toggleTimeOfDay(e.target.value)}
                        />
                        Overdag
                        </label>
                        <label htmlFor="evening-field">
                        <input
                            type="radio"
                            name="time-of-day"
                            value="evening"
                            id="evening-field"
                            checked={timeOfDay === "evening"}
                            onChange={(e) => toggleTimeOfDay(e.target.value)}
                        />
                        's Avonds
                        </label>
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
                            value={remarks}
                            onChange={(e) => toggleTerms(e.target.checked)}
                        />
                        Ik ga akkoord met de voorwaarden
                        </label>
                    </section>
                    <button type="submit" >Verzend</button>
                    </form>

            </section>
        </main>
    </>
)
}

export default App
