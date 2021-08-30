const storage = require("./storage");

storage.put('first', 'some value');
storage.put('second', 'some second value');

storage.update('first', 'update some value');
var somevalue = storage.get('first');

storage.save();
storage.load();

storage.saveAsync(() => {
    storage.clear();
    storage.load();
    let afterLoadvalue = storage.get('second');
    console.log(afterLoadvalue);
});

storage.loadAsync(() => {
    storage.update('first', true);
    let afterLoadvalueAsync = storage.get('first');
    console.log(afterLoadvalueAsync);
});

storage.loadAsyncWithPromise()
    .then(() => {
        storage.put('third', 123);
        let afterLoadvalueAsyncWithPromise = storage.get('third');
        console.log(afterLoadvalueAsyncWithPromise);
});


//if you run this may conflict with  loadAsyncWithPromise(), loadAsync(), load, therefore comment it
storage.put('third', 123);
storage.update('third', 4321);
storage.saveAsyncWithPromise()         
    .then(() => {               
        storage.loadAsyncWithPromise()
            .then(() => {               
                letAfterLoadvalue = storage.get('third');
                console.log(letAfterLoadvalue);
            });
    });
   