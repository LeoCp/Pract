import {rand} from "./lib/rand";

let change
,values = [
   {en: /january/im,pt:"janeiro"},
   {en: /fevebury/im,pt:"fevereiro"},
   {en: /march/im,pt:"março" },
   {en: /april/im,pt:"abril" },
   {en: /may/im ,pt:"maio"},
   {en: /june/im,pt:"junho" },
   {en: /july/im ,pt:"julho"},
   {en: /august/im ,pt:"agosto"},
   {en: /sepetember/im,pt:"setembro"},
   {en: /october/im ,pt:"outubro"},
   {en: /november/im ,pt:"novembro"},
   {en: /december/im,pt:"dezembro"}
];

function printa(value) {
  document.getElementById("campo").innerHTML = value;
}

window.onload = () => {
  change = rand();
  printa(values[change].pt);
};

let sort = () => {
  change = rand();
  printa(values[change].pt);
};


function verificaRand(e){
  if (e.keyCode == 13) {
    let x = values[change].en;
    if ( x.test(document.getElementById('valor').value)){
      alert("Acertou");
      sort(); document.getElementById('valor').value = "";
    }else{
      alert("Errou");
    }
   }
}
