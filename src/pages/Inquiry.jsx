import emailjs from "@emailjs/browser";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Inquiry() {
  const form = useRef();

  const navigate = useNavigate();

  function onSubmitForm(e) {
    e.preventDefault();

    try {
      emailjs.sendForm(
        import.meta.env.VITE_SERVICE_KEY,
        import.meta.env.VITE_TEMPLATE_KEY,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      );
      alert("성공적으로 문의가 접수되었습니다.");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <Wrapper>
      <Titles>
        <Title>문의 및 건의 사항</Title>
        <Subtitle>
          서비스에 대한 문의 사항이나 추가하고 싶은 것, 개선해야 하는 것을
          적어주시면 개발자에게 큰 도움이 됩니다!
        </Subtitle>
      </Titles>
      <Form ref={form} onSubmit={onSubmitForm}>
        <MessageContainer>
          <label>
            문의 내용 <Red>*</Red>
          </label>
          <Message name="message" placeholder="내용을 입력해주세요." required />
        </MessageContainer>
        <Button type="submit" value="문의하기" />
        <input type="hidden" name="from_name" value="오늘 뭐하지?" />
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 80vw;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const Titles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-bottom: 2px solid #9d8e72;
  padding: 1rem 0;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const Subtitle = styled.div`
  line-height: 1.2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

const Red = styled.span`
  color: red;
`;

const MessageContainer = styled.div`
  width: 100%;
  display: flex;
  & > label {
    width: 8rem;
    @media (min-width: 1024px) {
      position: relative;
      top: 0.5rem;
    }
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const Message = styled.textarea`
  resize: none;
  outline: none;
  flex-grow: 1;
  border: 1px solid #b6b6b6;
  border-radius: 5px;
  height: 5rem;
  padding: 0.5rem;
  background: #f4ebd9;
  font-size: 1rem;
  /* font-family: "Pretendard"; */
`;

const Button = styled.input`
  width: 20%;
  min-width: 130px;
  height: 3rem;
  outline: none;
  border: 0;
  color: #2f2a1f;
  background: #c4b291;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #9c8d71;
  }
`;
