let heroesSuites = document.querySelector('.suites_detail')
const Suites = document.querySelector('#suites');
const heroInfo = {
    Name:'',
    actor:'',
    age:0,
    city:'',
    poster:'',
    date:'',
    suites:[],
    producer:{}
}

let Allheroes =[];
let heroData = heroInfo;

document.querySelector('#newHero').addEventListener('click', (e)=>{
    let dataHero=document.querySelector('#dataHero');
    const datos = Object.fromEntries(new FormData(dataHero).entries());
    const hero = JSON.parse(JSON.stringify(datos));
    const {Name,Actor,Age,City,Poster,Date,Producer:{}, ...resto}=hero;

    heroData.Name=Name;
    heroData.actor=Actor;
    heroData.age=Age;
    heroData.city=City;
    heroData.poster=Poster;
    heroData.date=Date;
    heroData.producer=producer;


})