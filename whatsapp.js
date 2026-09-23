// Shopeasy - whatsapp.js - Modern Version (Promise + async/await)

const MY_WHATSAPP_NUMBER = "919999999999"; // <-- Yaha apna number daal

// 1. Promise wala function
function sendToWhatsAppAPI(order) {
  return new Promise((resolve, reject) => {
    if (!order.name || !order.product) {
      reject("Order details adhure hain");
      return;
    }

    const msg = `*Shopeasy New Order*%0A
----------------%0A
👤 Name: ${order.name}%0A
📦 Product: ${order.product}%0A
💰 Price: ${order.price}%0A
🏠 Address: ${order.address}%0A
📱 Phone: ${order.phone}`;

    const url = `https://wa.me/${MY_WHATSAPP_NUMBER}?text=${msg}`;
    
    // Network delay ko handle karne ke liye
    setTimeout(() => {
      resolve(url);
    }, 800);
  });
}

// 2. Async/Await se use karna - Ye main function hai jo button pe lagega
async function placeOrder() {
  const orderBtn = document.getElementById('orderBtn');
  
  try {
    orderBtn.innerText = "Sending...";
    orderBtn.disabled = true;

    const orderData = {
      name: document.getElementById('custName')?.value || "Sachin",
      product: localStorage.getItem('cartProduct') || "Test Product",
      price: localStorage.getItem('cartPrice') || "₹499",
      address: document.getElementById('address')?.value || "Delhi",
      phone: document.getElementById('phone')?.value || ""
    };

    // Yaha Promise ka wait hoga
    const whatsappLink = await sendToWhatsAppAPI(orderData);
    
    // Success
    window.open(whatsappLink, '_blank');
    alert("✅ Order WhatsApp pe chala gaya!");

  } catch (error) {
    // Fail
    alert("❌ Error: " + error);
  } finally {
    // Ye hamesha chalega
    orderBtn.innerText = "Order via WhatsApp";
    orderBtn.disabled = false;
    console.log("Process complete");
  }
}
