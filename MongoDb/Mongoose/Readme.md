# Mongoos

## DeprecationWarning
```
Ако получаваме на конзолата дадени съобщения е добре да въведем в началото на кода следното:
mongoose.Promise = global.Promise; //използвай nodejs-promise за mongoose;
``` 

## Model.methods
### These methods can be added to a schema
```javascript
//всичките функ-сти, се правят преди да се създаде модела
let modelSchema = new mongoose.Schema({});
//arrow function - няма да работи
modelSchema.methods.nameOfMethods = () => {};

//правилно
modelSchema.methods.nameOfMethods = function () => {this.something}; 
//заради this arrow функ. няма да работи, резултата ще е undefined
```
### Model virtual properties
```
Mongoose provides a way to create properties, that are accessible on all models, but are not persisted to the database
And they have both getters and setters
```

## Property Validation
```
With Mongoose developers can define custom validation on their properties
Validate records when trying to save
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
const ObjectId = mongoose.ObjectId
let animalSchema = new mongoose.Schema({
        name: { type: String, required: true },
        age: { type: Number, default: 0},
        fish: {type: ObjectId}
    });
	
let Animal = mongoose.model('Animal', animalSchema);
let fishSchema = new mongoose.Schema({
        name: { type: String, required: true }
    });

let Fish = mongoose.model('Fish', fishSchema);

let fish = new Fish({
    name: 'Fish-Ton'
})
.save()
.then((f) => {
    new Animal({
        name: 'AnimalBigBoss',
        age: 15,
        owner: f._id
    })
    .save()
    .then((c) => {
        console.log(c)
    })
});

//Трябва се внимава когато имам Update, delete в такива релации(animalSchema -> fish: {type: ObjectId}) 
//или ако изтрием fish обекта трябва да намерим всички котки, които имат такава връзка с тази fish
```

## MongoDB relationships: embed or reference?

### Put as much in as possible
```
The joy of a Document database is that it eliminates lots of Joins. Your first instinct
 should be to place as much in a single document as you can. Because MongoDB 
 documents have structure, and because you can efficiently query within that structure 
 (this means that you can take the part of the document that you need, so document size 
 shouldn't worry you much) there is no immediate need to normalize data like you would in 
 SQL. In particular any data that is not useful apart from its parent document should be part of the same document.
```
### Separate data that can be referred to from multiple places into its own collection.
```
This is not so much a "storage space" issue as it is a "data consistency" issue. If many records 
will refer to the same data it is more efficient and less error prone to update a single record 
and keep references to it in other places.
```
### Document size considerations
```
MongoDB imposes a 4MB (16MB with 1.8) size limit on a single document. In a world of GB of 
data this sounds small, but it is also 30 thousand tweets or 250 typical Stack Overflow 
answers or 20 flicker photos. On the other hand, this is far more information than one 
might want to present at one time on a typical web page. First consider what will make your 
queries easier. In many cases concern about document sizes will be premature optimization.
```
### Complex data structures:
```
MongoDB can store arbitrary deep nested data structures, but cannot search them efficiently. 
If your data forms a tree, forest or graph, you effectively need to store each node and its 
edges in a separate document. (Note that there are data stores specifically designed for this 
type of data that one should consider as well). It has also been pointed out than it is impossible 
to return a subset of elements in a document. If you need to pick-and-choose a few bits of each document, 
it will be easier to separate them out.
```
### Data Consistency

MongoDB makes a trade off between efficiency and consistency. The rule is changes to a single document are always atomic, while updates to multiple documents should never be assumed to be atomic. There is also no way to "lock" a record on the server (you can build this into the client's logic using for example a "lock" field). When you design your schema consider how you will keep your data consistent. Generally, the more that you keep in a document the better.

For what you are describing, I would embed the comments, and give each comment an id field with an ObjectID. The ObjectID has a time stamp embedded in it so you can use that instead of created at if you like.
```
