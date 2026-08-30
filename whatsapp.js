// Tera WhatsApp Order Backend - Alag File
function sendToWhatsapp() {
  let n = document.getElementById('cname').value;
  let p = document.getElementById('cphone').value;
  let a = document.getElementById('caddr').value;

  if(!n || !p || !a){
    alert('Sab fields bharo!');
    return;
  }

  let myNumber = "919310103698";
  let items = cart.map(it => it.name).join(', ');
  let msg = `NEW ORDER - ShopEasy\nName: ${n}\nPhone: ${p}\nAddress: ${a}\nItems: ${items}\nTotal: Rs${total} COD`;
  
  let url = "https://wa.me/" + myNumber + "?text=" + encodeURIComponent(msg);
  window.location.href = url;
}
