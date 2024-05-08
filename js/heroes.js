/*Defino todas las variabless*/

let heroesSuits = document.querySelector('.suits_detail')
const Suits = document.querySelector('#suits');
const heroInfo = {
    Name:'',
    actor:'',
    age:0,
    city:'',
    poster:'',
    date:'',
    suits:[],
    producer:{}
}

const habilitate=(a,b)=>{
    let elementosFormulario = document.getElementById("formHero").elements;
    for (let i = 0; i < elementosFormulario.length; i++) {
      // Habilitar el elemento estableciendo su atributo 'disabled' en false
        elementosFormulario[i].disabled = a;
    }
    document.getElementById("cancelHero").disabled = a;
    document.getElementById("save").disabled = a;
    document.getElementById("showHeroes").disabled = b;
    document.getElementById("addHero").disabled = b;
}

let Allheroes =[];
document.addEventListener('DOMContentLoaded',(e)=>{
    habilitate(true,false)
})

document.querySelector('#addHero').addEventListener('click',(e)=>{
    habilitate(false,true) 
})

document.querySelector('#cancelHero').addEventListener('click',(e)=>{
    habilitate(true,false)
    

})


/*Con este addeven listener se cogen todos los datos del formulario y se ponen dentro de un objeto literal, almacenandolos*/
document.querySelector('#save').addEventListener('click', (e)=>{
    
    let hero = {...heroInfo};
    const formHero=document.querySelector('#formHero');
    const datos = Object.fromEntries(new FormData(formHero).entries());
    const heroData = JSON.parse(JSON.stringify(datos));
    const {Name,Actor,Age,City,Poster,Date,Producer:{}, ...extra}=heroData;

    hero.Name=Name;
    hero.actor=Actor;
    hero.age=Age;
    hero.city=City;
    hero.poster=Poster;
    hero.date=Date;
    hero.producer.nameProducer=heroData.Producer;

    if(heroData.Producer=='Marvel'){
        hero.producer.logoProducer='marvel.png'
    }
    else if(heroData.Producer=='Dc'){
        hero.producer.logoProducer='dc.png'
    }
    else{
        hero.producer.logoProducer='anonymous.png'
    }
    Object.entries(extra).forEach(item =>{
        hero.suits.push(item[1]);
    })
    Allheroes.unshift(hero)
    formHero.reset() /*Borra todos los dator del formulario*/ 

    habilitate(true,false)

})

/*Con este add even listener se crea el espacio para un nuevo traje */
document.querySelector('#addSuit').addEventListener('click',(e)=>{
    e.preventDefault()
    heroesSuits.insertAdjacentHTML('afterbegin',createSuit())
    
})
/*con este add event listener se le dice que revise cuando se le hace click dentro de un div, luego revisa el boton y 
con esto revisa si el data-id del boton sea igual al id del div suits y lo elimina*/
heroesSuits.addEventListener('click',(e)=>{
    if(e.target.name == "removeSuit"){
        document.querySelector(`#suit${e.target.dataset.id}`).remove();

}})
/*Se crea una funcion flecha capaz de crear un texto html*/
const createSuit=()=>{
    let id=Date.now().toString(8)
    let suitData = /*text in html*/`
        <div class="col-md-3 col-sm-6"  id="suit${id}" name>
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