import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import ServerController from '../services/server';

import ProductCard from '../components/ProductCard';

import {
  Container,
  Content,
  Header,
  MainContainer,
  EditorContainer,
  InputContainer,
  InputField,
  InputLabel,
  CompareContainer,
  ConfirmButton,
} from '../styles/pages/edition-page';

interface RouteParams {
  id: string;
}

interface Product {
  id: number;
  image: string;
  name: string;
  categories: string;
  price: number;
  brand: string;
}

const EditionPage: React.FC = () => {
  const params = useParams<RouteParams>();
  const history = useHistory();

  const [originalProduct, setOriginalProduct] = useState<Product>();
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(0.00);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    setOriginalProduct(ServerController.findById(parseInt(params.id, 10)));
  }, [params.id]);

  useEffect(() => {
    if (originalProduct) {
      setName(originalProduct.name);
      setBrand(originalProduct.brand);
      setCategory(originalProduct.categories);
      setPrice(originalProduct.price);
      setImageUrl(originalProduct.image);
    }
  }, [originalProduct]);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
  }, [imageUrl]);

  function handleNavigateBack() {
    history.goBack();
  }

  function handleConfirmChanges() {
    const productToBeUpdated: Product = {
      id: parseInt(params.id, 10),
      name,
      brand,
      categories: category,
      price,
      image: imageUrl,
    };

    const productCanBeUpdated = ServerController.updateProduct(productToBeUpdated);

    if (productCanBeUpdated) {
      alert('Produto atualizado com sucesso!');
      history.push('/');
    } else {
      alert('Ocorreu um erro ao atualizar o produto :(');
    }
  }

  return (
    <Container>
      <Content>
        <Header>
          <FiArrowLeft
            size={50}
            color="#7827E6"
            onClick={handleNavigateBack}
            style={{ alignSelf: 'flex-start', cursor: 'pointer' }}
          />

          <h1>Editar Produto</h1>
        </Header>

        <MainContainer>
          <EditorContainer>
            <InputContainer>
              <InputLabel>
                <p>Nome</p>
              </InputLabel>

              <InputField
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </InputContainer>

            <InputContainer>
              <InputLabel>
                <p>Marca</p>
              </InputLabel>

              <InputField
                type="text"
                value={brand}
                onChange={(event) => setBrand(event.target.value)}
              />
            </InputContainer>

            <InputContainer>
              <InputLabel>
                <p>Categoria</p>
              </InputLabel>

              <InputField
                type="text"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              />
            </InputContainer>

            <InputContainer>
              <InputLabel>
                <p>Preço</p>
              </InputLabel>

              <InputField
                type="number"
                step="0.01"
                value={price}
                onChange={(event) => setPrice(parseFloat(event.target.value.replace(',', '.')))}
              />
            </InputContainer>

            <InputContainer>
              <InputLabel>
                <p>Imagem</p>
              </InputLabel>

              <InputField
                type="text"
                value={imageUrl}
                onChange={(event) => setImageUrl(event.target.value)}
              />
            </InputContainer>
          </EditorContainer>

          <CompareContainer>
            <div>
              <p className="card-container-title">Antes</p>

              {originalProduct && (
                <ProductCard>
                  <img src={originalProduct.image} alt={originalProduct.name} />
                  <p>{originalProduct.name}</p>
                  <p className="price">{`R$ ${originalProduct.price.toString().replace('.', ',')}`}</p>
                </ProductCard>
              )}
            </div>

            <div>
              <p className="card-container-title">Depois</p>

              <ProductCard>
                <img src={imageUrl} alt={name} />
                <p>{name}</p>
                <p className="price">{`R$ ${price.toString().replace('.', ',')}`}</p>
              </ProductCard>
            </div>
          </CompareContainer>

          <ConfirmButton onClick={handleConfirmChanges}>
            <p>Confirmar alterações</p>
          </ConfirmButton>
        </MainContainer>
      </Content>
    </Container>
  );
};

export default EditionPage;
