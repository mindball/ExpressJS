# Mongoos

## DeprecationWarning
```
Ако получаваме на консолатата дадени съобщения е добре да въведем в началото на кода следното:
mongoose.Promise = global.Promise; //използвай nodejs-promise за mongoose;
``` 

## Good practice
```javascript
	let Cat = mongoose.model('Cat', {
		name: { type: String, default: '' },
		age: { type: Number, default: 0 }
	});

	let Owner = mongoose.model('Owner', {
		name: { type: String, required: true, index: true, unique: true},
		cats: [Cat.schema] // масив от котки
	});
	
	//index - когато искаме да индексираме нещо по което се търси често. Създава се структура данни,
	//която е оптимизиране за търсене, но не е оптимизиране за създаване. Също така няма смисъл да
	//слагаме index ако няма да търсеме
```

### Добра практика е да използваме Mongoo models and their schema
```javascript
 let animalSchema = new mongoose.Schema({
        name: { type: String, required: true },
        age: { type: Number, default: 0},
        owner: {type: ObjectId}
    });
	
let Animal = mongoose.model('Animal', animalSchema);
```

