import React, { useRef } from "react";

export default function Stop() {
  let hourInterval;
  let minInterval;
  let sevInterval;
  const start = () => {
    if (
      min.current.value == 0 &&
      sec.current.value == 0 &&
      hour.current.value == 0
    ) {
      return;
    }

    if (sec.current.value > 60) {
      min.current.value++;
      sec.current.value = +sec.current.value - 60;
    }
    if (min.current.value > 60) {
      hour.current.value++;
      min.current.value = +min.current.value - 60;
    }
    startTimer();
  };
  const startTimer = () => {
    if (
      min.current.value == 0 &&
      sec.current.value == 0 &&
      hour.current.value == 0
    ) {
      stop();
    }

    sevInterval = setInterval(() => {
      if (
        min.current.value == 0 &&
        sec.current.value == 0 &&
        hour.current.value == 0
      ) {
        clearInterval(sevInterval);
      } else if (sec.current.value == 0) {
        sec.current.value = 59;
        if (min.current.value > 0) {
          min.current.value--;
        }
        if (hour.current.value > 0 && min.current.value == 0) {
          min.current.value = 59;
          hour.current.value--;
        }
      } else {
        sec.current.value--;
      }
    }, 1000);
  };

  const stop = () => {
    clearInterval(sevInterval);
  };
  const reset = () => {
    sec.current.value = "";
    min.current.value = "";
    hour.current.value = "";
    clearInterval(sevInterval);
    // clearInterval(minInterval);
    // clearInterval(hourInterval);
  };
  const hour = useRef(null);
  const min = useRef(null);
  const sec = useRef(null);
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Stop Watch</h2>
      <div className="container">
        <input
          ref={hour}
          type="number"
          maxlength="2"
          oninput="this.value=this.value.slice(0,this.maxLength)"
          placeholder="00"
          className="input"
        />
        <input
          ref={min}
          type="number"
          min={0}
          max={99}
          placeholder="00"
          className="input"
        />
        <input
          ref={sec}
          type="number"
          min={0}
          max={99}
          placeholder="00"
          className="input"
        />
      </div>
      <div className="container">
        <button onClick={start} className="btn">
          Start
        </button>
        <button onClick={stop} className="btn">
          Stop
        </button>
        <button onClick={reset} className="btn">
          Reset
        </button>
      </div>
    </div>
  );
}
