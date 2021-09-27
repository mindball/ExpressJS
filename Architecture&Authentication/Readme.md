## node environment
```
Среда е отделна единица  на което това приложение работи.
* Local - dev desktop/workstation
* Development/Trunk - Development server acting as a sandbox where unit testing may be performed by the developer
* Integration - 
* qa environment - екипа тества приложението, пълно е с рехави данни 
				   Тhe environment where interface testing is performed. A quality control team ensures 
				   that the new code will not have any impact on the existing functionality and 
				   tests major functionalities of the system after deploying the new code in the test environment.
* stating environment - is the last step before something goes into production and is visible on the live site.
	A staging site's main purpose is to ensure that all new changes deployed from previous environments are 
	working as intended before they hit the live website
	(копие на production environment, идеята е да видим как нашето приложение се държи в реална среда но може да го тестваме.)
	Mirror of production environment
* Production/Live - serves end-user/clients
```