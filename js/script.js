                //objects

//mentre gli array sono una lista numerata, gli objects sono una struttura di dati che può contenere più valori ai quali si può raggiungere per mezzo di una serie di nomi 
//es:

const allievo = {
    //proprietà: valore
    nome: 'Daniele',
    cognome: 'Giuntoli',
    eta: '30',
    altezza: '1.73',
    peso: '120',
    lingue: ['italiano', 'inglese', 'tedesco']
};

//come vedi, un valore di un object può sia essere un elemento testuale, che un numero, che un array o altro

//come si recupera un valore da un object?

allievo.nome
//oppure
allievo['nome'];

//posso anche cambiarlo o aggiungerlo nel caso in cui nome non fosse già stato inserito all'interno dell'object

allievo.nome = 'Annacane';
//oppure
allievo['nome'] = 'Annacane';

//lo posso leggere in console 

console.log(allievo.nome);
//oppure
console.log(allievo['nome']);


//quando usiamo il secondo metodo di scrittura ?
//quando inserisco una let in un object e poi voglio accederci
//es:

let nuovaprop = 'colorepreferito';
allievo[nuovaprop] = 'blue';

console.log(allievo.colorepreferito);

//se voglio accedere ad un valore in un array in un object?

allievo.lingue[0];

//se vogliamo stampare le proprietà di un oggetto senza conoscerne nome?
//Nota!!! quando va stampare tutti i componenti, le stamperà sempre in ordine alfabetico!!

                            //ciclo For in 


//do una variabile e in + nome objects
for(let key in allievo) {
    console.log(key);
};

//cicla in un object e mi legge tutte le propretà all'interno!
//se volesis leggere pure i valori oltre le proprietà?

for(let key in allievo) {
    console.log (key + ': ' + allievo[key]);
};

                                //ciclo for of 


//se vogliamo leggere gli array dentro una proprietà senza l'indice 

for(let val of allievo.lingue) {
    console.log(val);
};

//si può usare pure per gli array e basta senza essere contenuti in un object, ma anche qua non avremo l'indice!!


//la struttura di dati usata più frequentamente è un array con tanti objects dentro 

const classe107 = [
    {
        nome: 'Daniele',
        cognome: 'Giuntoli',
        eta: '30',
    },
    {
        nome: 'Chiara',
        cognome: 'cesari',
        eta: '30',
    },
    {
        nome: 'mekki',
        cognome: 'quertani',
        eta: '25',
    }
];

classe107[0].nome; //e mi prendo Daniele

//ciclo  for per tutta l'array
for(let i = 0; i < classe107.length; i++) {
    console.log(classe107[i].nome); //stampami tutti i nomi
    console.log(classe107[i].cognome); //stampami tutti i cognomi
    console.log(classe107[i].eta); //stampami tutte le età
};

//ciclo val per tutta l'array
for(let val of classe107) {
    console.log(val.nome); //stampami tutti i nomi 
};


//esempio di array con oggetti:

const cats = [
    {
        name: 'Fuffy',
        breed: 'European',
        color: 'grey',
        age: 3,
        sex: 'm',
        picture:'fuffy.jpg'
    },
    {
        name: 'Fritz',
        breed: 'Siamese',
        color: 'white',
        age: 3,
        sex: 'm',
        picture:'fritz.jpg'
    },
    {
        name: 'Trilly',
        breed: 'Norvegian',
        color: 'black',
        age: 3,
        sex: 'f',
        picture:'trilly.jpg'
    },
    {
        name: 'Concita',
        breed: 'Norvegian',
        color: 'black',
        age: 3,
        sex: 'f',
        picture:'trilly.jpg'
    }
];

                            //ciclo for each 


//aiuta a ciclare in maniera più concisa 
//usiamo l'array qui sopra 
//per i cicli for each ed altri esempi guardati mdn e non w3school
//necessita di una funzione interna per funzionare, quindi come l'addeventlistener posso dichiarare una funzione a caso o un amia funzione
//rispetto al ciclo for of qua mi port dietro l'indice !!
//la for each non necessita di valori di ritorno!!!!!! anzi se mettiamo il return lo eliminerà!!!!
//la funzione interna che foreach usa per funzionare è chiamata funzione di CALLBACK!!!!



cats.forEach(miaFunzione);
//oppure
//do alla funzione dei placeholder per richiamare i valori dell'array 
cats.forEach(function(element, index){
    console.log(element);
    console.log(index);
});

                    //è come se avessi scritto:

//una funzione che cicla sull'array e ripete il processo di una data funzione
function forEach(fn) {
    for(let i = 0; i < cats.length; i++) {
        fn(cats[i],i,cats);
    };
};

//e una funzione che che prende gli elementi e gli stampa sul valore di i
function miaFunzione(cat,i,arraydeigatti) {
    console.log(cat);
};

forEach(miaFunzione);


//altri esempi:

const carrello = [
    10,
    30,
    50
];

//voglio avere il totale dei numeri

let totale = 0;
carrello.forEach((element) => {
    totale += element;
});
console.log(totale);

//se avessi avuto invece un array più complicato:

const carrello2 = [
    {
        prodotto: 'maglietta',
        prezzo: 10,
        discount: false
    },
    {
        prodotto: 'jeans',
        prezzo: 25,
        discount: true
    },
    {
        prodotto: 'bandana',
        prezzo: 2,
        discount: true
    }
];

let totale2 = 0;
const prodottiScontati =[];

//voglio sapere il totale 
carrello.forEach((element) => {
    totale += element.prezzo;
});
console.log(totale);

//voglio un array coi prodotti scontati
carrello.forEach((element) => {
    if(element.discount) {
        prodottiScontati.push(element);
    };
});
//avro un array con jeans e bandana 
console.log(prodottiScontati);

                                //quando uso il foreach quindi? 

//quando voglio filtrare da un array determinati contenuti e/o inserirli in un nuovo array o  riportarli in un div !!!!





                                             //Map 


//assomiglia al ciclo for each
//ma a differenza del primo questo ci restituisce UN NUOVO ARRAY!!!!!!

const numeri = [1,2,3,4,5];
//devo sempre avere una const o una let in quanto accoglierà il return della funzione map
//come il for each necessita di una funzione interna che sia una arrow o una funzione con un nome o senza 
const quadrati = numeri.map((el) => {
    //prendimi ciascun numero e moltiplicalo per se stesso
    return el * el;
});

console.log(quadrati); //ovvero[1,4,9,16,25]


//OCCHIOOOO !!! il map remappa l'array quindi ritorna un nuovo array
//in questo caso ho lo stesso array anche se ho creato una nuova const 
//quindi se modifichi il primo anche l'altro subirà i cambiamenti!!!!!
const numeri2 = numeri;

//ma :

//con il map si crea un nuovo array uguale al primo ma diverso 
//al modificare del primo però il secondo non subirà cambiamenti!!!!
const numeri2 = numeri.map((el)=> el);


                        //quando uso il map ?

//quando voglio cambiare determinati valori rispetto ad un array in un nuovo array con la stessa lunghezza 

const carrello3 = [
    {
        prodotto: 'maglietta',
        prezzo: 10,
        discount: false
    },
    {
        prodotto: 'jeans',
        prezzo: 25,
        discount: true
    },
    {
        prodotto: 'bandana',
        prezzo: 2,
        discount: true
    }
];

//data l'array di prima voglio un nuovo array ma coi prezzi aggiornati con un aumento di 10% 

const prodottiRincarati = carrello.map((el)=> {
    return el.prezzo + (el.prezzo * 10/100);
});
console.log(prodottiRincarati);


                                        //Filter

//si usa per estrapolare solo alcuni elementi di un array in un altro array tramite return, MA SOLO se verificano una data condizione booleana                                       

//ricordi il caso di prima ????

//voglio un array coi prodotti scontati
carrello.forEach((el) => {
    if(el.discount) {
        prodottiScontati.push(el);
    };
});

//ora uso il filter:

const prodottiScontati = carrello.filter((el) => {
    if(el.discount){
        return element;
    }
})

//crea un array vuoto e NUOVO e ci pusha dentro tutti gli elementi di ritorno!!!!


//strumenti per cercare un singolo preciso elemento :



//indexof()

//findIndex()

const carrello3 = [
    {
        prodotto: 'maglietta',
        prezzo: 10,
        discount: false
    },
    {
        prodotto: 'jeans',
        prezzo: 25,
        discount: true
    },
    {
        prodotto: 'bandana',
        prezzo: 2,
        discount: true
    }
];

//prendi il primo elemento che in carrello ha prezzo con valore minore di 10
const index = carrello.findIndex((el)=> el.prezzo < 10);
//prendi il primo elemento che in carrello ha prezzo con valore maggiore di 10
const index = carrello.findIndex((el)=> el.prezzo > 10);


//find()


