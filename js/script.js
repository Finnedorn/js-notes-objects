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
    }
];
