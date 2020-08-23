const instance = axios.create({
    baseURL: 'localhost:3001',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' },
});
