import api from './api.service'
import { itemInterfaceResult } from '../interfaces/item.interface'

export const GetItemById = async (id: string) => {
	return api.get<itemInterfaceResult>(`/items/${id}`);
}
