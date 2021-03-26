const request = (url, method, data) => {

    return fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        ...(data && { body: JSON.stringify(data) }),
    }).then(r => r.json())
};

export default request;
