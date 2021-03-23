const request = (url, method, headers, body) => {
    fetch('http://localhost:3030/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password }),
    })
        .then((r) => r.json())
        .then((res) => {
            console.log(res);
        }).catch(e => {
            console.log(e);
        });
}

export default request;