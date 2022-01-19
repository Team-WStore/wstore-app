export const requests = async (url, method='GET', data={}, headers={})=>{
    const options = {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            ...headers
        },
        body: JSON.stringify(data)
    };

    const resp = await fetch(process.env.REACT_APP_BACKEND_URL + url, options);
    return await resp.json();
}