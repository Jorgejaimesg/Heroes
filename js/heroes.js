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
    const dataHero=document.querySelector('#formHero');
    const datos = Object.fromEntries(new FormData(dataHero).entries());
    const hero = JSON.parse(JSON.stringify(datos));
    const {Name,Actor,Age,City,Poster,Date,Producer:{}, ...resto}=hero;

    heroData.Name=Name;
    heroData.actor=Actor;
    heroData.age=Age;
    heroData.city=City;
    heroData.poster=Poster;
    heroData.date=Date;
    heroData.producer.nameProducer=hero.Producer;

    if(hero.Producer==='Marvel'){
        heroData.producer.logoProducer='marvel.png'
    }
    else if(hero.Producer=='Dc'){
        heroData.producer.logoProducer='dc.png'
    }
    else{
        heroData.producer.logoProducer='anonymous.png'
    }
    console.log(heroData)
})
document.querySelector('#addSuite').addEventListener('click',(e)=>{
    heroesSuites.insertAdjacentHTML('beforeend',createSuit())
})

heroesSuites.addEventListener('click',(e)=>{
    if(e.target.name == "removeSuit"){
        document.querySelector(`#suit${e.target.dataset.id}`).remove();

}})

const createSuit=()=>{
    let id=Date.now().toString(8)
    let suitData = /*text in html*/`
        <div class="col-3" id="suit${id}">
            <div class="col-12">
                <div class="spaceSuit">
                    <div class="">
                        <div class="col-10">
                            <label for="suitName"class="form-label">Suit Name</label>
                            <input type="text" class="form-control" name="suitNameid${id}" id="suitNameid${id}">
                        </div>
                        <div class="col  position-relative">
                            <button type="button" class="btn btn-danger position-absolute bottom-0 end-0" data-id="${id}" name="removeSuit">-</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        return suitData;
}