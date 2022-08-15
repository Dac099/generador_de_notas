const mainLayout = {
  container : document.querySelector('main.container'),
  heading : document.querySelector('h2.container__heading'),
  text : document.querySelector('p.container__text'),
  btn : document.querySelector('button.container__btn')
};

const messages = {
  1 : 'Esta es una pequeña tarjeta para hablarte de cuanto te amo.',
  2 : 'Hola, ratita. Solo quiero introducirte un poco a este proyecto. Mirra: este proyecto esta pensado para desarrollarse a lo largo del tiempo, cada que cumplamos meses pueden meterte a esta pagina y vas a econtrar una notita nueva.',
  3 : 'Ya son 29 meses juntos, ratita blanca. A lo largo de este tiempo te has ganado diversos apodos que hacen justicia a lo hermosa que estás y a al inmenso amor que tengo por ti.<br>Cada que sostengo tu mano me siento muy seguro y lleno de amor, me has hecho saber que tengo mucho amor para dar y por supuesto que quiero darte todo el amor que tengo.<br>Todo este tiempo me he sentido muy agradecido de haber trabajado en San Cafecito, ya que ahi te conocí y fue el inicio de la relación más hermosa que he tenido.<br>Todos los días me pregunto si me amas, porque sin duda yo te amo como si fueras la utlima coca del desierto, y ya no puedo imaginar un futuro si no estás ahí.<br>Así que sin duda puedo decir que eres mi ratita, mi cabeza de balón, mi cachorro, mi ojos de becerro, mi chipilona, mi cielito, mi amorcito, mi bb que solo come 5 cosas, eres el amor de vida.'
}

function* control(index){
  while (index < 4) {
    yield index;
    index++;
  }
}

let msgControl = control(1);

mainLayout.btn.addEventListener('click', () => {
  if(!msgControl.next().done){
    mainLayout.text.innerHTML = messages[msgControl.next().value];
  }else{
    msgControl = control(1);
  }
});