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

    if(method === 'GET' || method === 'DELETE') delete options.body;

    const resp = await fetch(process.env.REACT_APP_BACKEND_URL + url, options);
    if(resp.status === 204) return {'ok':true};
    return await resp.json();
}