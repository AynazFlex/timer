import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";

const TimerBlock = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  > label {
    text-align: center;
    color: #0ad61b;
    > input {
      font-size: inherit;
      display: block;
      margin-top: 5px;
      padding: 20px;
      border: 5px solid #0ad61b;
      outline: none;
      background: transparent;
      width: 60px;
      color: #0ad61b;
      border-radius: 50%;
    }
  }
`;

const StartButton = styled.button`
  display: flex;
  margin: 100px auto 0;
  font-size: 30px;
  outline: none;
  justify-content: center;
  align-items: center;
  background: transparent;
  color: #0ad61b;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid #0ad61b;
  cursor: pointer;
`;

const StartBlock = styled.div`
  display: flex;
  justify-content: center;
  color: #0ad61b;
  font-size: 70px;
  > span {
    color: #0ad61b;
  }
`;

interface IProps {
  setStart: Dispatch<SetStateAction<boolean>>;
  hh: number;
  mm: number;
  ss: number;
}

const Start: FC<IProps> = ({ hh, mm, ss }) => {
  const [time, setTime] = useState(hh * 60 * 60 + mm * 60 + ss);

  const h = time / 3600 >= 1 ? Math.floor(time / 3600) : 0;
  const m =
    (time - h * 3600) / 60 >= 1 ? Math.floor((time - h * 3600) / 60) : 0;
  const s = time - m * 60 - h * 3600;

  useEffect(() => {
    if (time > 0) {
      setTimeout(() => setTime((prev) => prev - 1), 1000);
    }
  }, [time]);

  return (
    <StartBlock>
      <span>{h}</span>:<span>{m}</span>:<span>{s}</span>
    </StartBlock>
  );
};

const Timer: FC = () => {
  const [start, setStart] = useState(false);
  const [hh, setHh] = useState("");
  const [mm, setMm] = useState("");
  const [ss, setSs] = useState("");

  return (
    <div>
      {start ? (
        <Start setStart={setStart} hh={+hh} mm={+mm} ss={+ss} />
      ) : (
        <TimerBlock>
          <label>
            hh
            <input
              min="0"
              max="99"
              value={hh}
              onChange={(e) => {
                const { value, min, max } = e.target;
                const result = Math.max(Number(min), Math.min(Number(max), Number(value)))
                !Number.isNaN(result) && setHh(`${result}`);
              }}
            />
          </label>
          <label>
            mm
            <input
              min="0"
              max="59"
              value={mm}
              onChange={(e) => {
                const { value, min, max } = e.target;
                const result = Math.max(Number(min), Math.min(Number(max), Number(value)))
                !Number.isNaN(result) && setMm(`${result}`);
              }}
            />
          </label>
          <label>
            ss
            <input
              min="0"
              max="59"
              value={ss}
              onChange={(e) => {
                const { value, min, max } = e.target;
                const result = Math.max(Number(min), Math.min(Number(max), Number(value)))
                !Number.isNaN(result) && setSs(`${result}`);
              }}
            />
          </label>
        </TimerBlock>
      )}
      <StartButton onClick={() => setStart(!start)}>
        {start ? "END" : "START"}
      </StartButton>
    </div>
  );
};

export default Timer;
