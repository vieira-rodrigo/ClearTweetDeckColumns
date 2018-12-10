let SELECTOR_ELEMENTO_PRICIPAL = "section";
let SELECTOR_OPTIONS = "a[data-action=options]";
let SELECTOR_BACK = "js-column-back";
let SELECTOR_CLEAR_LINK = "button[data-action=clear]";
let SELECTOR_ITENS = "stream-item ";
let SELECTOR_BUTTON_PARENT = "js-column-nav-scroller";
let BTN_CLEAR_CLASS = "clear-td-ext";

function limpar(){
  let listElementPrincipal = Array.from(document.getElementsByTagName(SELECTOR_ELEMENTO_PRICIPAL));
  let ref = 0;
  listElementPrincipal.map((element) =>{
    if(element.getElementsByClassName(SELECTOR_ITENS).length > 0){
      let btnBack = element.getElementsByClassName(SELECTOR_BACK)[0];
      if(btnBack) btnBack.click();
      ref  += 200;
      setTimeout(()=> element.querySelector(SELECTOR_OPTIONS).click(), ref);
      ref += 300;
      setTimeout(()=> element.querySelector(SELECTOR_CLEAR_LINK).click(), ref);
      ref += 300;
      setTimeout(()=> element.querySelector(SELECTOR_OPTIONS).click(), ref);
    }
  });
}

function createButton(){
  reset();
  let btnClear = document.createElement("A");
  let btnParent = document.getElementsByClassName(SELECTOR_BUTTON_PARENT)[0];
  if(btnParent){
    btnClear.className = BTN_CLEAR_CLASS
    btnClear.innerHTML = '<i class="icon icon-trash"></i>';
    btnClear.setAttribute("title", "Clear All Columns");
    btnClear.onclick = limpar;
    btnParent.appendChild(btnClear, btnParent.firstChild);
  }else{
    setTimeout(createButton, 2000);
  }
}

function reset(){
  let btns = Array.from(document.getElementsByClassName(BTN_CLEAR_CLASS));
  if(btns)
    btns.map((btn) => btn.remove());
}

function setUp(){
  if(!window.location.toString().includes("tweetdeck.twitter")) return;
  let body = document.getElementsByTagName("body")[0];
  body.onkeyup = (event)=>{if(event.which == 46) limpar()};
  setTimeout(createButton, 1000);
}

setUp();
