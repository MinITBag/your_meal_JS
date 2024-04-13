import {
	catalogTitle,
	navigationList,
	navigationListItems,
} from './elements.js';
import { renderListProduct } from './renderListProduct.js';

export const navigationListController = () => {
	navigationList.addEventListener('click', event => {
		const categoryItem = event.target.closest('.navigation__button');

		if (!categoryItem) return;
		navigationListItems.forEach(item => {
			if (item === categoryItem) {
				item.classList.add('navigation__button_active');
				catalogTitle.textContent = item.textContent;
				renderListProduct(item.dataset.category);
			} else {
				item.classList.remove('navigation__button_active');
			}
		});
	});
};
