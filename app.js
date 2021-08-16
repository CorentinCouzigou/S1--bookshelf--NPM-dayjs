// Pour une présentation de notre séléction littéraire 
// nous utilisons un page web il nous faut donc la libraire http
// afin de créer notre serveur
const { table } = require('console');
const http = require('http');
var dayjs = require('dayjs');
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)
require('dayjs/locale/de')
dayjs.locale('fr')

// dayjs.extend(utc)

// var a = dayjs.utc()

// Séléction de livres incontournables
const d = new Date(2018, 8, 18)
const date1 = dayjs(d)
// const date2 = books[date] ;

const books = [
    {
        title: "The Fellowship of the Ring",
        language: "English",
        country: "United Kingdom",
        author: "J.R.R. Tolkien",
        date: "1954-07-29",
        age:null ,
    },
    {
        title: "Prelude to foundation",
        language: "English",
        country: "United States",
        author: "Isaac Asimov",
        date: "1988-11-08",
        aged:null,
    },
    {
        title: "Voyage au centre de la terre",
        language: "Français",
        country: "France",
        author: "Jules Verne",
        date: "1864-11-25",
        age:null,
    },
    {
        title: "La nuit des temps",
        language: "Français",
        country: "France",
        author: "René Barjavel",
        date: "1968-05-20",
        age:null,
    },
    {
        title: "Carrion Comfort",
        language: "English",
        country: "United States",
        author: "Dan Simmons",
        date: "1989-02-15",
        age:null,
    }
];


// Création de notre serveur
const server = http.createServer((req, res) => {

    // On court-circuite l'appel automatique du navigateur au favicon.ico
    // sinon l'appel au script ce fera 2 fois et il ecrira "Hum, 50 alors ?" dedans
    if (req.url === '/favicon.ico') {
        res.writeHead(200, { 'Content-Type': 'image/x-icon' });
        res.end();
        return;
    }

    // On envoi les header de la réponse http
    // ici nous voulons une réponse de type text encodé en UTF-8
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    // On écrit l'entête de notre page html
    res.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Document</title><style>td{border: 1px solid black};</style></head><body>');

    // Corps de la page
    res.write('<table>');
    res.write('<thead>')
    res.write('<td>Titre</td>')
    res.write('<td>Auteur</td>')
    res.write('<td>Pays</td>')   
    res.write('<td>Langue</td>')   
    res.write('<td>Date de parution</td>')
    res.write('<td>Âge</td>')       
    res.write('</thead>')
    res.write('<tbody>')
     for (let title of books) {
        res.write('<tr>')
        res.write(`<td>${title.title}</td>`)
        res.write(`<td>${title.language}</td>`)
        res.write(`<td>${title.country}</td>`)
        res.write(`<td>${title.author}</td>`)
        res.write(`<td>${dayjs(title.date).format('dddd, DD MMMM YYYY')}</td>`)
        res.write(`<td>${dayjs(title.date).fromNow()}</td>`)
        res.write('</tr>')
     };
     
     res.write('</tbody>')
     res.write ('</table>')
    //  res.write (`${new Date()}`)
    // On écrit le pied de page de notre page html
    res.write('</body></html>');

    // On à fini d'envoyer nos informations au client
    res.end();
});

// Notre serveur sera sur le port 3000
server.listen(3010, () => {console.log('serveur connecté')});