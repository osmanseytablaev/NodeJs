function delay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hello');
        }, 1000);
    });
}

delay()

async function name1 () {
    return '1111';
}

function name2 (data) {
    console.log('data', data);
    return new Promise((resolve => resolve('2222')))
}

console.log('name1', name1().then((data) => {return data}).catch((err) => err));
console.log('name2', name2().then((data) => {return data}).catch((err) => err));

name1()
    .then((data) => {
        console.log('name1', data);
        name2(data).then((data) => {
            console.log('name2', data)
        }).catch((err) => err)
        return data;
    })
    .then(result => result)
    .then(result => console.log('result2', result))
    .catch((err) => err)