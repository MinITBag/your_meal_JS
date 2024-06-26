import { API_URL, PREFIX_PRODUCT } from './const.js';
import { getData } from './getData.js';
import { catalogList } from './elements.js';
import { createCardProduct } from './createCardProduct.js';

export const renderListProduct = async (category = 'burger') => {
	catalogList.textContent = '';
	const listProduct = await getData(
		`${API_URL}${PREFIX_PRODUCT}?category=${category}`
	);
	const listCard = listProduct.map(createCardProduct);
	catalogList.append(...listCard);
};
