(() => {
  const menuButton = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-site-nav]');

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation');
      });
    });
  }

  const form = document.querySelector('[data-registration-form]');
  const success = document.querySelector('[data-form-success]');

  if (form && success) {
    const email = form.elements.leaderEmail;
    const phone = form.elements.contactNumber;
    const teamSize = form.elements.teamSize;

    const showFieldError = (field, message) => {
      const error = form.querySelector(`[data-error-for="${field.name}"]`);
      if (!error) return;
      error.textContent = message;
      field.setAttribute('aria-invalid', 'true');
      field.classList.add('has-error');
    };

    const clearFieldError = (field) => {
      const error = form.querySelector(`[data-error-for="${field.name}"]`);
      if (!error) return;
      error.textContent = '';
      field.removeAttribute('aria-invalid');
      field.classList.remove('has-error');
    };

    [email, phone, teamSize].forEach((field) => {
      field.addEventListener('input', () => clearFieldError(field));
      field.addEventListener('change', () => clearFieldError(field));
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      let isValid = true;

      form.querySelectorAll('.has-error').forEach((field) => clearFieldError(field));

      if (!form.checkValidity()) {
        form.querySelectorAll(':invalid').forEach((field) => {
          if (field.name === 'leaderEmail') showFieldError(field, 'Enter a valid email address.');
          else if (field.name === 'contactNumber') showFieldError(field, 'Use 7–15 digits, spaces, or a leading +.');
          else if (field.name === 'teamSize') showFieldError(field, 'Choose a team size.');
        });
        isValid = false;
      }

      if (!/^\+?[0-9\s()-]{7,18}$/.test(phone.value.trim())) {
        showFieldError(phone, 'Use 7–15 digits, spaces, or a leading +.');
        isValid = false;
      }

      if (!isValid) {
        const firstError = form.querySelector('.has-error');
        firstError?.focus();
        return;
      }

      success.hidden = false;
      success.classList.add('is-visible');
      form.hidden = true;
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  const countdown = document.querySelector('[data-countdown]');
  if (countdown) {
    const target = new Date('2027-03-20T10:00:00+05:30').getTime();
    const updateClock = () => {
      const remaining = Math.max(0, target - Date.now());
      const days = Math.floor(remaining / 86400000);
      const hours = Math.floor((remaining % 86400000) / 3600000);
      const minutes = Math.floor((remaining % 3600000) / 60000);
      const seconds = Math.floor((remaining % 60000) / 1000);
      countdown.textContent = `T- ${days}D ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };
    updateClock();
    window.setInterval(updateClock, 1000);
  }

  const command = document.querySelector('[data-terminal-command]');
  const terminalOutput = document.querySelector('[data-terminal-output]');
  if (command && terminalOutput) {
    command.addEventListener('click', () => {
      const isOpen = !terminalOutput.hidden;
      terminalOutput.hidden = isOpen;
      command.classList.toggle('is-executed', !isOpen);
      command.setAttribute('aria-expanded', String(!isOpen));
      if (!isOpen) terminalOutput.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }
})();
