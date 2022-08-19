import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: hsl(185, 41%, 84%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .calculator-container {
    background-color: hsl(0, 0%, 100%);
    width: 50%;
    max-width: 785px;
    height: 50%;
    margin: 1rem auto;
    border-radius: 25px;
    padding: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .controls-container {
      flex-basis: 48%;
      height: 90%;
      align-self: center;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      .input-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        label {
          font-size: 18px;
        }
        input {
          font-size: 24px;
          text-align: right;
          color: hsl(183, 100%, 15%);
          border-radius: 5px;
          border: none;
          background-color: hsl(189, 41%, 97%);
          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          &[type="number"] {
            -moz-appearance: textfield;
          }
        }
      }
    }
    .tips_option-container {
      p {
        font-size: 18px;
      }
      .tips_buttons-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        .custom-tip-input {
          width: 100%;
          width: 32%;
          padding: 0.5rem;
          color: hsl(183, 100%, 15%);
          font-size: 24px;
          border-radius: 5px;
          border: none;
          margin-top: 1rem;
          text-align: center;
          background-color: hsl(189, 41%, 97%);
          box-sizing: border-box;
          &::placeholder {
            width: fit-content;
            color: hsl(183, 100%, 15%);
          }
          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          &[type="number"] {
            -moz-appearance: textfield;
          }
        }
      }
    }
    .output-container {
      flex-basis: 48%;
      background-color: hsl(183, 100%, 15%);
      border-radius: 10px;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .output-data {
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        .tip_amount-container,
        .total_amount-container {
          width: 80%;
          margin: 0 auto;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          h3 {
            font-size: 40px;
            color: hsl(172, 67%, 45%);
            margin: 0;
          }
          p {
            margin: 0;
            font-weight: 700;
          }
          .sub-text {
            font-size: 14px;
            color: hsl(184, 14%, 56%);
          }
        }
      }
      .reset-button-container {
        text-align: center;
        opacity: 0.3;
        &.active {
          opacity: 1;
        }
        .reset-button {
          width: 80%;
          margin: 1rem auto;
          border: none;
          border-radius: 10px;
          background-color: hsl(172, 67%, 45%);
          color: hsl(183, 100%, 15%);
          padding: 0.75rem;
          font-size: 18px;
          cursor: pointer;
        }
      }
    }
  }
  @media only screen and (max-width: 867px) {
    justify-content: space-between;
    .calculator-container {
      flex-direction: column;
      width: calc(100% - 4rem);
      height: 70%;
      margin-bottom: 0;
      border-radius: 10px 10px 0 0;
    }
  }
`;
export const TipButton = styled.button`
  width: 100%;
  width: 32%;
  background-color: hsl(183, 100%, 15%);
  padding: 0.5rem;
  color: white;
  font-size: 24px;
  border-radius: 5px;
  border: none;
  margin-top: 1rem;
`;
