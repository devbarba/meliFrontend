import api from './api.service'

export const GetCategoriesById = async (categoryId: string) => {
	const params = `/categories/${categoryId}`;
	return api.get(params)
}
