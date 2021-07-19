import { callApi } from './base'
import { BASE_API_URI, API_ROUTES } from '../config/apiRoutes'

export const fetchDashboard = async () => {
  return callApi({
    url: `${BASE_API_URI}/${API_ROUTES.DASHBOARD}`,
    method: 'GET'
  });
}