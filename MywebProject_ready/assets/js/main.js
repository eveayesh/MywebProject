
// main.js - handles login validation, toast notifications, and modal ajax simulation
document.addEventListener('DOMContentLoaded', function(){
  var loginForm = document.getElementById('loginForm');
  if(loginForm){
    loginForm.addEventListener('submit', function(e){
      e.preventDefault();
      var email = loginForm.querySelector('input[name="email"]');
      var pass = loginForm.querySelector('input[name="password"]');
      var valid = true;
      if(!email.value || !/\S+@\S+\.\S+/.test(email.value)){ valid=false; email.classList.add('is-invalid'); } else { email.classList.remove('is-invalid'); }
      if(!pass.value || pass.value.length < 4){ valid=false; pass.classList.add('is-invalid'); } else { pass.classList.remove('is-invalid'); }
      if(!valid){ showToast('من فضلك راجع بيانات الدخول','danger'); return; }
      showToast('جاري تسجيل الدخول...','info');
      setTimeout(function(){
        showToast('تم الدخول بنجاح','success');
        var loginModalEl = document.getElementById('loginModal');
        if(loginModalEl){ var modal = bootstrap.Modal.getInstance(loginModalEl); if(modal) modal.hide(); }
      }, 1200);
    });
  }

  window.showToast = function(message, type){
    var toastEl = document.getElementById('appToast');
    if(!toastEl) return;
    var toastBody = toastEl.querySelector('.toast-body');
    toastBody.textContent = message;
    var header = toastEl.querySelector('.toast-header strong');
    header.textContent = (type === 'success'? 'تم' : (type==='danger'? 'خطأ' : 'تنبيه'));
    var headerBg = toastEl.querySelector('.toast-header');
    headerBg.className = 'toast-header bg-white';
    toastEl.classList.remove('bg-success','bg-danger','bg-info');
    if(type==='success') toastEl.classList.add('bg-success');
    if(type==='danger') toastEl.classList.add('bg-danger');
    if(type==='info') toastEl.classList.add('bg-info');
    var toast = new bootstrap.Toast(toastEl);
    toast.show();
  };

  var openDetailsButtons = document.querySelectorAll('.open-details');
  openDetailsButtons.forEach(function(btn){
    btn.addEventListener('click', function(e){
      e.preventDefault();
      var product = btn.dataset.product || 'منتج';
      var modalBody = document.querySelector('#detailsModal .modal-body');
      modalBody.innerHTML = '<p>جاري تحميل تفاصيل '+product+'...</p>';
      setTimeout(function(){
        modalBody.innerHTML = '<h5>'+product+'</h5><p>وصف تفصيلي للمنتج. السعر: 120 ريال</p>';
      }, 800);
    });
  });

});
