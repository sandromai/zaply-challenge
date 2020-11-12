import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import ProductCard from '../components/ProductCard';

import ServerController from '../services/server';

import {
  Container,
  Content,
  Header,
  Logo,
  SearchButton,
  SearchContainer,
  SearchInput,
  CategoriesContainer,
  ProductsContainer,
  PaginationContainer,
  FiltersContainer,
  FilterCard,
} from '../styles/pages/dashboard';

interface Product {
  id: number;
  image: string;
  name: string;
  categories: string;
  price: number;
  brand: string;
}

const Dashboard: React.FC = () => {
  const [allPagesProducts, setAllPagesProducts] = useState<Product[]>([]);
  const [actualProducts, setActualProducts] = useState<Product[]>([]);
  const [actualPage, setActualPage] = useState(1);
  const [amoutOfPages, setAmoutOfPages] = useState<number[]>([]);

  const [searchedWord, setSearchedWord] = useState('');
  const [filters, setFilters] = useState('');

  useEffect(() => {
    setAllPagesProducts(ServerController.showAll());
    setActualProducts(ServerController.show(1));
  }, []);

  useEffect(() => {
    const numberOfPages = ServerController.howManyPages(allPagesProducts);

    let i = 1;

    const amoutOfPagesAux = [];

    for (i; i <= numberOfPages; i++) {
      amoutOfPagesAux[i - 1] = i;
    }

    setAmoutOfPages(amoutOfPagesAux);
  }, [allPagesProducts]);

  function changePage(page: number) {
    setActualPage(page);

    setActualProducts(ServerController.show(page, allPagesProducts));

    window.scrollTo(0, 0);
  }

  function handleNavigateToNextPage() {
    if (actualPage < amoutOfPages.length) {
      changePage(actualPage + 1);
    }
  }

  function handleNavigateToPreviousPage() {
    if (actualPage > 1) {
      changePage(actualPage - 1);
    }
  }

  function handleSearchSubmit(event: FormEvent) {
    event.preventDefault();
    window.scrollTo(0, 0);

    setFilters(searchedWord);
    setActualPage(1);

    const searchResult = ServerController.findByName(searchedWord);

    setAllPagesProducts(searchResult);
    setActualProducts(ServerController.show(1, searchResult));
  }

  return (
    <Container>
      <Content>
        <Header>
          <Logo>
            <h1>Logo</h1>
          </Logo>

          <nav>
            <SearchContainer onSubmit={handleSearchSubmit}>
              <SearchInput
                type="text"
                value={searchedWord}
                onChange={(event) => setSearchedWord(event.target.value)}
              />

              <SearchButton type="submit">
                <p>Buscar</p>
              </SearchButton>
            </SearchContainer>
          </nav>
        </Header>

        <CategoriesContainer />

        <FiltersContainer>
          <p>Exibindo: </p>

          <FilterCard>
            <p>{filters === '' ? `Todos (${allPagesProducts.length})` : `${filters} (${allPagesProducts.length})`}</p>
          </FilterCard>
        </FiltersContainer>

        <ProductsContainer>
          {actualProducts?.map((product) => (
            <Link
              to={`/edition/${product.id}`}
              key={product.id}
              style={{ textDecoration: 'none' }}
            >
              <ProductCard>
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
                <p className="price">{`R$ ${product.price.toString().replace('.', ',')}`}</p>
                <p className="edit">Editar</p>
              </ProductCard>
            </Link>
          ))}
        </ProductsContainer>

        <PaginationContainer>
          <FiChevronLeft
            size={24}
            color="#E69C3E"
            style={{ cursor: 'pointer', marginRight: 8 }}
            onClick={handleNavigateToPreviousPage}
          />

          {amoutOfPages.map((number) => (
            <button
              type="button"
              key={number}
              onClick={() => changePage(number)}
              className={number === actualPage ? 'active' : ''}
            >
              <p>{number}</p>
            </button>
          ))}

          <FiChevronRight
            size={24}
            color="#E69C3E"
            style={{ cursor: 'pointer', marginLeft: 8 }}
            onClick={handleNavigateToNextPage}
          />
        </PaginationContainer>
      </Content>
    </Container>
  );
};

export default Dashboard;
