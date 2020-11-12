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
`;

export const Header = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  width: 224px;
  height: 81px;

  margin-right: 64px;

  background-color: #7827E6;

  h1 {
    font-size: 81px;
    font-weight: 600;
    line-height: 60px;
    text-align: center;

    user-select: none;

    color: #FFF;
  }
`;

export const SearchContainer = styled.form`
  width: 650px;
  height: 70px;
  min-width: 360px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border: 3px solid #7827E6;
  border-radius: 35px;
`;

export const SearchInput = styled.input`
  width: 484px;
  height: 60px;
  min-width: 194px;

  margin-left: 4px;
  padding: 0 15px;

  border: none;
  border-radius: 30px;
  outline: none;

  font-size: 24px;
  line-height: 34px;

  background-color: #F2F2F2;
  color: #555555;
`;

export const SearchButton = styled.button`
  width: 128px;
  height: 60px;

  margin-right: 4px;

  border: none;
  border-radius: 30px;
  outline: none;

  background-color: #7827E6;

  transition: background-color 300ms;

  p {
    color: #FFF;
    font-size: 24px;
    font-weight: 500;
  }

  &:hover {
    cursor: pointer;

    background-color: #351166;
  }
`;

export const CategoriesContainer = styled.div`
  width: 100%;
  height: 50px;

  border-radius: 25px;

  background-color: #E69C3E;
`;

export const ProductsContainer = styled.div`
  width: 100%;

  margin-top: 24px;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 40px;
`;

export const PaginationContainer = styled.footer`
  width: 100%;
  height: 34px;

  margin: 64px 0;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  button {
    height: 34px;
    width: 38px;

    border: none;
    cursor: pointer;
    outline: none;

    background-color: #F2F2F2;
  }

  button + button {
    margin-left: 8px;
  }

  button p {
    font-size: 20px;
    line-height: 34px;

    color: #555555;
  }

  button.active {
    p {
      color: #7827E6;

      text-decoration: underline;
    }
  }
`;

export const FiltersContainer = styled.div`
  height: 40px;
  width: 100%;

  margin-top: 64px;

  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    color: #555555;
  }
`;

export const FilterCard = styled.div`
  height: 100%;

  margin-left: 16px;
  padding: 8px;

  display: flex;
  align-items: center;

  border-radius: 5px;

  background-color: #FFF;
`;
