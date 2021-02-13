import api from './api.service'
import { IItemResult } from '../interfaces/item.interface'

export const GetItemById = async (id: string) => {
	return api.get<IItemResult>(`/items/${id}`);
}
