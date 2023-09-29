import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];


export default function App() {
  //React Hooks
  const [step, setStep] = useState(1); //should be in the top level of a react component
  const [isOpen, setIsOpen] = useState(true);
  const closeBtn = "\u00D7";
  const openBtn = "\u03BF";
  const [windowBtn, setWindowBtn] = useState(closeBtn);
  function handleWindow() {
    setIsOpen((i_s) => !i_s);
    isOpen ? setWindowBtn(openBtn) : setWindowBtn(closeBtn);
  }
  function handleNext() {
    if (step < 3)
      setStep((curStep) => curStep + 1);
  }
  function handlePrevious() {
    if (step > 1)
      setStep((curStep) => curStep - 1);
  }


  return (
    <div className="steps">
      <WindowBtn windowBtnObj={{ isOpen, handleWindow, windowBtn }} />
      {
        isOpen &&
        <>
          <Numbers step={step} />
          <Message step={step} />
          <Buttons handleStepsObj={{ handleNext, handlePrevious }} />
        </>
      }
    </div>
  )
}

function WindowBtn({ windowBtnObj }) {
  return (


    <button className="close"
      title={windowBtnObj.isOpen ? "close" : "open"}
      onClick={windowBtnObj.handleWindow}>{windowBtnObj.windowBtn}</button>
  )
}

function Numbers({ step }) {

  return (
    <div className="numbers">
      <div className={step >= 1 ? 'active' : ""}>1</div>
      <div className={step >= 2 ? 'active' : ""}>2</div>
      <div className={step >= 3 ? 'active' : ""}>3</div>
    </div >
  )
}


function Message({ step }) {
  return (
    <p className="message">
      Step {step} : {messages[step - 1]}
    </p>
  )
}

function Buttons({ handleStepsObj }) {
  return (
    <div className="buttons">
      <button style={{ backgroundColor: "#7950f2", color: "#fff" }}
        onClick={handleStepsObj.handlePrevious}>
        Previous
      </button>
      <button style={{ backgroundColor: "#7950f2", color: "#fff" }}
        onClick={handleStepsObj.handleNext}>
        Next
      </button>
    </div>
  )
}