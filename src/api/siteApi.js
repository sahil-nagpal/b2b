import axios from 'axios';
export async function getAllCategories() {
    return apiClient
      .get('/customers', { params })
      .then(response => {
        if (response) {
          return response.data;
        }
        return Promise.reject();
      });
  }