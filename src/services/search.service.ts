import api from './api.service'
import { searchInterface, searchInterfaceResult } from '../interfaces/search.interface'

export const GetItemByName = async ({ q, limit} : searchInterface) => {
	const params = `/items?q=${q}${limit ? `&limit=${limit}` : ''}`;
	return api.get<searchInterfaceResult>(params)
}
