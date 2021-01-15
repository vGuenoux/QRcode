let input = document.querySelector(".form input");
let button = document.querySelector(".form button");
let qrImg = document.querySelector(".qr-img img");

button.addEventListener("click",function(){
  let data = input.value;
  if(data.length > 0){ //affiche l'image quand elle est disponible (200x200 > 0)

    let imgSrc =   "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="+data;
    //let imgSrc = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=HelloWorld!" //-> aperçu d'un QRcode qui marche, possible de tester avec celui ci pour le téléchargement

    qrImg.src = imgSrc;
  }
})