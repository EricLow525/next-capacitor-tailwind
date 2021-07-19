import { callApi } from './base'
import { BASE_API_URI, API_ROUTES } from '../config/apiRoutes'

export const fetchOrders = async () => {
  return callApi({
    url: `${BASE_API_URI}/${API_ROUTES.ORDERS}`,
    method: 'GET'
  });
}

export const fetchOrder = async id => {
  return callApi({
    url: `${BASE_API_URI}/${API_ROUTES.ORDERS}/${id}`,
    method: 'GET'
  })
}