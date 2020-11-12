import styled from 'styled-components';

export const Container = styled.div`
  width: 220px;
  height: 381px;

  padding: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-radius: 10px;

  background: #FFF;

  transition: all 200ms;

  img {
    width: 200px;
    height: 200px;
  }

  p {
    text-align: center;

    font-size: 16px;

    color: #555555;
  }

  p.price {
    text-align: center;

    font-size: 24px;

    color: #10E644;
  }

  &.editable {
    p.edit {
      width: 0px;
      height: 0px;

      visibility: hidden;

      color: #E6101D;

      font-size: 16px;
      font-weight: 600;

      text-decoration: underline;
    }

    &:hover {
      cursor: pointer;

      box-shadow: 5px 5px 10px rgba(33, 33, 33, 0.1), -5px -5px 10px rgba(33, 33, 33, 0.1);

      p.edit {
        visibility: visible;

        width: 200px;
        height: 26px;
      }
    }
  }
`;
