let data = [];

module.exports = {
    save: (image) => {
        data.push(image)
    },
    getAll: () => {
        return data.slice();         
    },
    getByIndex: (index) => {
        return data[index];
    }
}