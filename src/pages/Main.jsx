import { useEffect, useState } from "react";
import styled from "styled-components";
import works from "../assets/works.json";

function wait(s) {
  return new Promise((res) => setTimeout(res, s * 1000));
}

export default function Main() {
  const [work, setWork] = useState("");
  const [isClicked, setClicked] = useState(false);
  const [loadSetting, setLoadSetting] = useState(0); // 0 : 로딩 후 결과 / 1 : 바로 결과
  const [age, setAge] = useState(0); // 0 : 전체 / 그 후로 n*10대

  const loadPreset = ["로딩 후 결과 보기", "바로 결과 보기"];
  const agePreset = [
    "모두",
    "10대",
    "20대",
    "30대",
    "40대",
    "50대",
    "60대 이상",
  ];

  async function change() {
    if (!loadSetting) {
      let dotNum = 0;
      for (let i = 0; i < 6; i++) {
        setWork("할 일 고르는 중" + ".".repeat(dotNum + 1));
        dotNum = (dotNum + 1) % 3;
        await wait(0.3);
      }
    }
    const curAge = age == 0 ? Math.floor(Math.random() * 6) : age - 1;
    const randNum = Math.floor(Math.random() * works.data[curAge].length);
    setWork(works.data[curAge][randNum]);
    setClicked(false);
  }

  function setting(arr, state, setState) {
    return arr.map((data, idx) => (
      <div
        onClick={() => {
          setState(idx);
        }}
        style={{
          background: state == idx ? "#e5d1ac" : "#f4ebd9",
        }}
      >
        {data}
      </div>
    ));
  }

  return (
    <Wrapper>
      <Box>
        {!work && <div>심심하신가요?</div>}
        {work ? <div>{work}</div> : <div>"오늘 뭐하지?"를 눌러보세요!</div>}
      </Box>
      <Menu>
        <div>{setting(loadPreset, loadSetting, setLoadSetting)}</div>
        <div>{setting(agePreset, age, setAge)}</div>
      </Menu>
      <Button
        onClick={() => {
          if (!isClicked) {
            setClicked(true);
            change();
          }
        }}
      >
        오늘 뭐하지?
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 30rem;
  gap: 1rem;
  user-select: none;
`;

const Box = styled.div`
  background: #f4ebd9;
  border: 2px solid #000;
  border-radius: 5px;
  width: 100%;
  height: 10rem;
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  box-sizing: border-box;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  & > div {
    display: flex;
    background: #fff;
    border-top: 2px solid #000;
    border-bottom: 2px solid #000;
    width: 100%;
    & > div {
      padding: 1rem 0;
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      @media (max-width: 768px) {
        font-size: 0.85rem;
      }
    }
  }
`;

const Button = styled.div`
  width: 100%;
  height: 4rem;
  color: #fff;
  background: #9d8e72;
  border: 2px solid #625949;
  border-radius: 5px;
  font-size: 1.3rem;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #897c63;
  }
`;
