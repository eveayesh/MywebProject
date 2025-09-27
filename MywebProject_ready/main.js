// Toast Notification Function
function showToast(message) {
    let toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }
  
  // Example usage
  // showToast("تمت إضافة المنتج بنجاح!");
  