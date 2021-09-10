module.exports = function(dogModel) {
    return dogModel
        .save()
        //common error
        // .catch(err => {
        //     console.log(err)
        // });
        //detailed error handler message
        .catch(err => {
            let errMsg = err.errors
            for (let errKey in errMsg) {
                console.log(errMsg[errKey].message)
        }
    });
}