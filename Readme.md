# Node.Js

## Good pracite

### Distribute the files through folders
```
името на файла(id) % 1000 = nameOfDirectory
Добре е да нямаме много картинки в една директория,
а да ги разпределяме всяка картинка в директория, поради 
факта че filesystem of OS за затормозява с много файлове(indexing).
```

## Register username
```js
//user-controller
registerPost: (req, res) => {
    let reqUser = req.body
    // Add validations!

    let salt = encryption.generateSalt()
    let hashedPassword = encryption.generateHashedPassword(salt, reqUser.password)
	//Добра практика е да се направи нов потребител защото може да се генерира 
	// фалшива форма за рег. на потребител с масив-от-роля-Admin и да се регне в db
	//правилно
    User.create({
      username: reqUser.username,
      firstName: reqUser.firstName,
      lastName: reqUser.lastName,
      salt: salt,
      hashedPass: hashedPassword
    }).then();
	
	//модела в базаданните:
	let userSchema = new mongoose.Schema({
			....
		 roles: [String] 
	});
	//неправилно:
	let reqUser = req.body
	reqUser.salt.....
	requser.Roles ....
	
	User.create(reqUser);
	
```

## Login form-user
```
При неуспешно логване е добра практика да му съобщите с грешка, че има проблем с логването .
Добър пример: Invalid creadentials/Invalid user data
Лог пример: Invalid password - тук подсказваме на злонамерените че потребителя е познат но паролата му е грешна.
тоест даваме по детайлна инф. за това
```




### При upload на файлове
> добре е да ги преименуваме поради факта, че потребителя, които ги качва ще знае и 
> ще може да търси тези файлове според имената. Също така е добре да скрием extensions
> може просто там където ги съхраняваме да преименуваме директорията например
> /images/23JKLH23LLJL23L23LJLJL знаем че в images ще се съхраняват снимки.

## Semantic versioning 
```
https://semver.npmjs.com/ - calculator
```
![versioning](https://fv9-1.failiem.lv/thumb_show.php?i=qxb82qj43&view)
### Using semantic versioning to specify update types your package can accept
```
~version “Approximately equivalent to version”, will update you to all future 
patch versions, without incrementing the minor version. ~1.2.3 will use releases 
from 1.2.3 to <1.3.0.

^version “Compatible with version”, will update you to all future minor/patch 
versions, without incrementing the major version. ^2.3.4 will use releases 
from 2.3.4 to <3.0.0.
```

## Tools
* Pugjs
* Handlebars
* Express middleware
	- body-parser
	- serve-favicon
	- and so on
* html2jade
* Emmet (formerly Zen Coding[1]) li*3
* multer
> Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. 
> It is written on top of busboy for maximum efficiency.
* cookie-parser
> Parse Cookie header and populate req.cookies with an object keyed by the cookie names
* express-session
* passport
> Passport is Express-compatible authentication middleware for Node.js
* passport-local
> Passport strategy for authenticating with a username and password.

### Handlebars some specs

```html
{{#each cars}}  
      <div class="mb60 car-details">
          ...
		  //Тук се намираме в scope на cars-array и затова нямаме достъп до currentUser,
		  //трябва да се върнем едно ниво нагоре,
          {{#if ../currentUser}}
        <form action="/cars/rent/{{this._id}}" method="POST">            
            <button type="submit" value="Rent">Rent</button>
        </form>
      {{/if}}
      </div>
      ...
{{/each}}
```
