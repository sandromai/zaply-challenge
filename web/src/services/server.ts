/**
 * This file represents some of the back-end functionalities,
 * but none of these changes are applied permanently to the database.
 */
import { products } from './products';

interface Product {
  id: number;
  image: string;
  name: string;
  categories: string;
  price: number;
  brand: string;
}

export default {
  showAll(): Product[] {
    return products;
  },

  show(page: number, productsToBeShown: Product[] = products): Product[] {
    let i = (25 * page) - 25;

    const productsPage = [];

    for (i; i < productsToBeShown.length && i < 25 * page; i++) {
      productsPage.push(productsToBeShown[i]);
    }

    return productsPage;
  },

  howManyPages(amoutOfProducts: Product[] = products): number {
    const totalProducts = amoutOfProducts.length;

    let totalPages = totalProducts / 25;

    if (totalPages < 1) {
      totalPages = 1;
    }

    return totalPages;
  },

  findByName(search: string): Product[] {
    const filteredProducts = products.filter((product) => {
      if (product.name.toLowerCase().includes(search.toLowerCase())) {
        return product;
      }

      return false;
    });

    return filteredProducts;
  },

  findById(id: number): Product {
    const productResult = products.filter((product) => {
      if (product.id === id) {
        return product;
      }

      return false;
    });

    return productResult[0];
  },

  updateProduct(productToBeUpdated: Product): boolean {
    const originalProduct = this.findById(productToBeUpdated.id);

    const productIndex = products.indexOf(originalProduct);

    if (productIndex !== -1) {
      products[productIndex] = productToBeUpdated;

      return true;
    }

    return false;
  },
};
