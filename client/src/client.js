import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'http://localhost:3000/',
});

export default {
    stocks: (q) => httpClient.get(`stocks?q=${q}&limit=10`),
    stock: (symbol) => httpClient.get(`stocks/${symbol}`),
}

