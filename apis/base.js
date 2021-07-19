import '@capacitor-community/http';
import { Plugins } from '@capacitor/core';
const { Http } = Plugins;

export const callApi = async apiConfig => {
  try {
    const headers = {
      Accept: 'application/json',
    };

    const response = await Http.request({
      headers,
      ...apiConfig
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}