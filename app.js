"use strict";
const slovaDiv = document.querySelector("#slova");

const rijecDiv = document.querySelector("#rijec");

const poeni = document.querySelector("#poeni");
const podloga = document.querySelector('#kan')
const ctx = podloga.getContext('2d')
const btnPomoc = document.querySelector("#pomoc");

const btnPonovoIgraj = document.querySelector("#ponovo");

let slova = [
  "a",
  "b",
  "c",
  "č",
  "ć",
  "d",
  "đ",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "r",
  "s",
  "š",
  "t",
  "u",
  "v",
  "z",
  "ž",
];

let kategorije = ["Lakši pojmovi", "Teži pojmovi"];

let pitanja = [
  [
    "pravo na život",
    "sloboda mišljenja i govora",
    "diskriminacija",
    "rodna ravnopravnost",
    "ustav",
    "ombudsman",
  ],
  [
    "održivi razvoj",
    "evropski sud",
    "ustavni sud",
    "mir i bezbjednost",
    "ekonomska prava",
    "prva generacija",
  ],
];

let pomoc = [
  [
    "Osnovno, urođeno ljudsko pravo",
    "Pravo pojedinca na licni stav",
    "Isključivanje, odvajanje pojedinca zbog boje kože,zbog vjere,etničke pripadnosti... ",
    "Žena=Muškarac",
    "Najviši pravni akt jedne države",
    "Zaštitnik ljudskih prava",
  ],[
    "Razvoj koji zadovoljava potrebe sadašnjice, ne dovodeći u pitanje sposobnost budućih generacija da zadovolje vlastite potrebe",
    "Nalazi se u Strasburgu,Francuskoj",
    "Državni organ zaštite ljudskih prava",
    "Pravo treće generacije",
    "Garantuju ekonomske uslove koji omogućavaju dostojan zivot",
    "Pravo na život,pravo na slobodu govora, slobodu vjeroispoviejsti,pravo na jednakost pred sudom"
  ]
];

let brojZivota = 10;
let odgovor = "";
let crtice = [];
let indKategorije;
let indRijeci;
let brojCrtica = 0;

let generisiSlova = () => {
  for (let i = 0; i < slova.length; i++) {
    let dugme = document.createElement("button");
    dugme.textContent = slova[i].toUpperCase();
    dugme.setAttribute("id", slova[i]);
    dugme.classList.add("slovo");
    slovaDiv.append(dugme);
  }
};

generisiSlova();

let init = () => {
  crtice = [];
  brojCrtica = 0;
  brojZivota = 10;

  poeni.textContent = brojZivota;

  ctx.clearRect(0, 0, podloga.width, podloga.height);

  indKategorije = Math.trunc(Math.random() * kategorije.length);

  indRijeci = Math.trunc(Math.random() * pitanja[indKategorije].length);

  odgovor = pitanja[indKategorije][indRijeci];
  
  for (let i = 0; i < odgovor.length; i++) {
    if (odgovor[i] === " ") {
      crtice.push(" ");
    } else {
      crtice.push("_");
    }
  }

  let slovaButton = document.querySelectorAll("#slova button");
  slovaButton.forEach((dugme) => {
    dugme.classList.remove("izabranoslovo");
    dugme.classList.add("slovo");
  });

  rijecDiv.textContent = kategorije[indKategorije] + " " + crtice.join("");
};

init();

slovaDiv.addEventListener("click", (ev) => {
  if (ev.target.nodeName === "DIV") {
    return;
  }

  let letter = ev.target.id;

  ev.target.classList.remove("slovo");
  ev.target.classList.add("izabranoslovo");

  let pogodak = false;

  for (let i = 0; i < odgovor.length; i++) {
    if (odgovor[i] === letter) {
      crtice[i] = letter;
      pogodak = true;
    }
  }
  if (!pogodak) {
    brojZivota--;
    draw[brojZivota]();
    poeni.textContent = brojZivota;
  }
  brojCrtica = crtice.filter((x) => x === "_").length;

  if (brojZivota == 0) {
    alert("Igra je izgubljena. Traženi pojam je " + odgovor);
  } else if (0 == brojCrtica) {
    rijecDiv.textContent = kategorije[indKategorije] + " " + crtice.join("");
    alert("Bravo!");
  } else {
    rijecDiv.textContent = kategorije[indKategorije] + " " + crtice.join("");
  }
});

let gornjiKrug = () => {
    ctx.arc(200,104,40,0,Math.PI*2)
    ctx.stroke()
    
  }
  let srednjiKrug = () => {
    ctx.moveTo(254, 198)
    ctx.arc(200,198,55,0,Math.PI*2)
    ctx.stroke()
    
  }
  let donjiKrug = () => {
    ctx.moveTo(268, 325)
    ctx.arc(200, 325, 70, 0, Math.PI*2) 
    ctx.stroke()
  }
  let oko1 = () => {
    ctx.moveTo(232,100)
    ctx.arc(220,100,10,0,Math.PI*2)
    ctx.stroke() 
  }
  let oko2 = () => {
    ctx.moveTo(192,100)
    ctx.arc(180,100,10,0,Math.PI*2)
    ctx.stroke()
  }
  let dugme1 = () => {
    ctx.moveTo(214, 170)
    ctx.arc(202,170,10,0,Math.PI*2)
    ctx.stroke()
    
  }
  let dugme2 = () => {
    ctx.moveTo(214, 200)
    ctx.arc(202,200,10,0,Math.PI*2)
    ctx.stroke()
    
  }
  let dugme3 = () => {
    ctx.moveTo(214, 230)
    ctx.arc(202,230,10,0,Math.PI*2)
    ctx.stroke()
    
  }
  let ruka1 = () => { 
    ctx.moveTo(174, 170)
    ctx.lineTo(110, 110)
    ctx.moveTo(110, 110)
    ctx.stroke()
  }
  let ruka2 = () => {
    ctx.moveTo(230, 172)
    ctx.lineTo(270, 95)
    ctx.moveTo(275, 140)
    ctx.stroke()
  }
 
  let draw = [ruka2, ruka1, dugme3, dugme2, dugme1, oko2, oko1, donjiKrug, srednjiKrug, gornjiKrug]
  btnPonovoIgraj.addEventListener('click', init)
  
  btnPomoc.addEventListener('click', ()=>{
  alert(pomoc[indKategorije][indRijeci])
  })
