# Node.Js

## Good pracite
### Distribute the files through folders
```
името на файла(id) % 1000 = nameOfDirectory
Добре е да нямаме много картинки в една директория,
а да ги разпределяме всяка картинка в директория, поради 
факта че filesystem of OS за затормозява с много файлове(indexing).
```

## Semantic versioning 
```
https://semver.npmjs.com/ - calculator
```
![versioning](https://files.fm/f/qxb82qj43)
### Using semantic versioning to specify update types your package can accept
```
~version “Approximately equivalent to version”, will update you to all future 
patch versions, without incrementing the minor version. ~1.2.3 will use releases 
from 1.2.3 to <1.3.0.

^version “Compatible with version”, will update you to all future minor/patch 
versions, without incrementing the major version. ^2.3.4 will use releases 
from 2.3.4 to <3.0.0.
```


