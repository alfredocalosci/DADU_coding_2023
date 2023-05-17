### processi generativi

![albero](https://github.com/alfredocalosci/DADU_DesignConcept_2021/blob/main/_esempi/processi_generativi/img/albero.jpg)
![spirale](https://github.com/alfredocalosci/DADU_DesignConcept_2021/blob/main/_esempi/processi_generativi/img/Bladstanden_A_A_Van_Voorn.jpg)
![girasole](https://github.com/alfredocalosci/DADU_DesignConcept_2021/blob/main/_esempi/processi_generativi/img/sunflower.png) 
![serie(s)](https://github.com/alfredocalosci/DADU_DesignConcept_2021/blob/main/_esempi/processi_generativi/img/serie_casey_reas.png)  
![pseudo mondrian)](https://github.com/alfredocalosci/DADU_DesignConcept_2021/blob/main/_esempi/processi_generativi/img/pseudoMondrian.jpg)  

#### riferimenti
[morphogenesis resources](https://github.com/jasonwebb/morphogenesis-resources)  
[awesome creative coding](https://github.com/terkelg/awesome-creative-coding)  
[inconvergent: generative algorithms](https://inconvergent.net/generative/)  


#### processi:

A) **mesh**

1. disegna un triangolo
2. usa un lato del triangolo e due nuove linee per creare un nuovo triangolo (senza creare intersezioni con altri triangoli)
3. ripeti (2) per N volte

***** 

B) **substrato**

1. disegna una linea retta da un punto qualsiasi fino un bordo del foglio.
2. disegna una nuova linea a partire da 1/3 della linea precedente, quasi perpendicolare, fino ad incrociare un’altra linea o i limiti del foglio.
3. disegna una nuova linea a partire da 2/3 della linea iniziale, quasi perpendicolare - sul lato opposto della precedente, fino ad incrociare un’altra linea o i limiti del foglio.
4. marca la linea iniziale con un cerchio - adesso le due nuove linee diventano come la linea iniziale.
5. ripeti il processo da (2) con le nuove linee.

***** 

C) **yes no matrix**

1. disegna una matrice di 5 x 5 quadrati. (un quadrato diviso in 5 file e cinque colonne)
2. lancia una moneta per ogni quadrato, se il risultato è “testa” disegna una diagonale dall’angolo in basso a sinistra fino all’angolo superiore destro, se il risultato è “croce” disegna la diagonale opposta (dall’angolo in basso a destra all’angolo in alto a sinistra)