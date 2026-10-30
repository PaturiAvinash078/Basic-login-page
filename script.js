(function () {
  var notice = document.getElementById('notice');
  var closeBtn = document.getElementById('noticeClose');
  var form = document.getElementById('loginForm');
  var password = document.getElementById('password');
  var toggle = document.getElementById('togglePassword');

  function openNotice() {
    if (typeof notice.showModal === 'function') {
      notice.showModal();
    } else {
      notice.setAttribute('open', '');
    }
  }

  function closeNotice() {
    if (typeof notice.close === 'function') {
      notice.close();
    } else {
      notice.removeAttribute('open');
    }
  }

  // Sign In, Google, Forgot password and Contact admin
  document.querySelectorAll('[data-notice]').forEach(function (el) {
    el.addEventListener('click', openNotice);
  });

  // Continue button (and the Enter key inside the form)
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    openNotice();
  });

  closeBtn.addEventListener('click', closeNotice);

  // Clicking the dark area outside the message closes it
  notice.addEventListener('click', function (e) {
    if (e.target === notice) closeNotice();
  });

  // Show / hide password
  toggle.addEventListener('click', function () {
    var show = password.type === 'password';
    password.type = show ? 'text' : 'password';
    toggle.setAttribute('aria-pressed', String(show));
    toggle.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
  });
})();
