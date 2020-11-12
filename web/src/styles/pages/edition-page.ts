import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 1320px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  width: 100%;
  height: 50px;

  margin-top: 32px;

  display: flex;
  flex-direction: row;

  h1 {
    width: calc(100% - 50px);

    font-size: 36px;
    font-weight: 300;
    line-height: 46px;
    text-align: center;

    color: #7827E6;
  }
`;

export const MainContainer = styled.main`
  width: 660px;

  margin-top: 24px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

export const EditorContainer = styled.div`
  width: 100%;

  padding-bottom: 24px;

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #FFF;
`;

export const InputContainer = styled.div`
  width: 600px;
  height: 50px;

  margin-top: 24px;

  display: flex;
  flex-direction: row;
  align-items: center;

  border-radius: 25px;
  border: 3px solid #7827E6;
`;

export const InputLabel = styled.div`
  height: 40px;

  margin-left: 4px;
  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 20px;

  background-color: #7827E6;

  p {
    font-size: 20px;
    font-weight: 300;
  }
`;

export const InputField = styled.input`
  height: 40px;

  margin-right: 4px;
  padding: 0 15px;

  border: none;
  border-radius: 20px;
  outline: none;

  overflow: hidden;

  font-size: 20px;
  line-height: 34px;

  background-color: #FFF;
  color: #555555;
`;

export const CompareContainer = styled.div`
  width: 100%;

  margin-top: 40px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  p.card-container-title {
    margin-bottom: 8px;

    font-size: 20px;
    text-align: center;

    color: #7827E6;
  }
`;

export const ConfirmButton = styled.button`
  width: 100%;
  height: 60px;

  margin: 40px 0;

  border: none;
  border-radius: 30px;
  outline: none;

  background-color: #7827E6;

  transition: background-color 200ms;

  p {
    font-size: 28px;
    color: #FFF;
  }

  &:hover {
    cursor: pointer;

    background-color: #351166;
  }
`;
