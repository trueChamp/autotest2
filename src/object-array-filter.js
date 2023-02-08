function filter(objects, key, values) {
    let result = [];

    for (let i = 0; i < objects.length; i++) {
        let obj = objects[i]
        if (obj[key] === values) {
            result.push(obj)
        };
    }

    return result
}

export default filter