import React, { useEffect, useState } from "react";
import { Container, TipButton } from "./styled";
function Home() {
  const [billValue, setBillValue] = useState(0);
  const [peopleAmount, setPeopleAmount] = useState(0);
  const [customValue, setCustomValue] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);
  const [tipValue, setTipValue] = useState(0);
  const [resetButtonState, setResetButtonState] = useState(false);

  const handleFinishButton = () => {
    setBillValue(0);
    setPeopleAmount(0);
    setTotalPerPerson(0);
    setTipPerPerson(0);
    setResetButtonState(false);
  };
  const handleTipButton = (value) => {
    let pasedValue = parseInt(value);
    const finalValue = pasedValue / 100;
    setTipValue(finalValue);
  };

  useEffect(() => {
    if (billValue !== 0 && peopleAmount !== 0 && tipValue !== 0) {
      let tipPerPerson = (billValue * tipValue) / peopleAmount;
      let totalPerPerson = parseInt(billValue) + tipPerPerson;
      setTotalPerPerson(totalPerPerson);
      setTipPerPerson(tipPerPerson);
      setResetButtonState(true);
    }
  }, [peopleAmount, billValue, tipValue]);
  return (
    <Container>
      <img src="./assets/logo.svg" alt="logo" />
      <div className="calculator-container">
        <div className="controls-container">
          <div className="input-container">
            <label>Bill</label>
            <input
              required
              type="number"
              placeholder={billValue}
              onChange={(e) => setBillValue(e.target.value)}
              value={billValue}
            ></input>
          </div>
          <div className="tips_option-container">
            <p>Select tip %</p>
            <div className="tips_buttons-container">
              <TipButton
                className="ips_option-button"
                value={5}
                type="number"
                onClick={(e) => handleTipButton(e.target.value)}
              >
                5%
              </TipButton>
              <TipButton
                className="ips_option-button"
                value={10}
                onClick={(e) => handleTipButton(e.target.value)}
              >
                10%
              </TipButton>
              <TipButton
                className="ips_option-button"
                value={15}
                onClick={(e) => handleTipButton(e.target.value)}
              >
                15%
              </TipButton>
              <TipButton
                className="ips_option-button"
                value={25}
                onClick={(e) => handleTipButton(e.target.value)}
              >
                25%
              </TipButton>
              <TipButton
                className="ips_option-button"
                value={50}
                onClick={(e) => handleTipButton(e.target.value)}
              >
                50%
              </TipButton>
              <input
                className="custom-tip-input"
                required
                type="number"
                placeholder="Custom"
                onChange={(e) => setCustomValue(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="input-container">
            <label>Number of people</label>
            <input
              type="number"
              placeholder={peopleAmount}
              onChange={(e) => setPeopleAmount(e.target.value)}
              value={peopleAmount}
            ></input>
          </div>
        </div>

        <div className="output-container">
          <div className="output-data">
            <div className="tip_amount-container">
              <div className="tip-amount-container">
                <p>Tip amount</p>
                <p class="sub-text">/ person</p>
              </div>
              <h3 className="tip-per-person">${tipPerPerson.toFixed(2)}</h3>
            </div>
            <div className="total_amount-container">
              <div className="tip-amount-container">
                <p>Total</p>
                <p class="sub-text">/ person</p>
              </div>
              <h3 className="total-per-person">${totalPerPerson.toFixed(2)}</h3>
            </div>
          </div>
          <div
            className={`reset-button-container ${
              resetButtonState ? "active" : null
            }`}
          >
            <button className="reset-button" onClick={handleFinishButton}>
              RESET
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Home;
