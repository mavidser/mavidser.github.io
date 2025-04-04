(function(document) {
  document.addEventListener('click', function(e) {
    const target = e.target;
    const emailHooks = document.getElementsByClassName('email-hook');
    const emailText = document.querySelector(`#email-text-${target.id}`);
    if(emailHooks.namedItem(target.id)) {
      if (emailText) {
        if (emailText.innerHTML == emailId)
          emailText.innerHTML = '';
        else {
          emailText.innerHTML = emailId;
          emailText.href = 'mailto:'+emailId
        }
      } else {
        target.innerHTML = emailId;
        target.href = 'mailto:'+emailId
        target.className = ''
      }
      e.preventDefault();
    }
  }, false);

  // Event listener for footer emoji
  var r = document.querySelector(':root');
  var rs = getComputedStyle(r);
  let enableEmojiBurst = false;
  const footerEmoji = document.querySelector('.footer-emoji');
  if (footerEmoji) {
    footerEmoji.addEventListener('click', function(e) {
      const colors = ['✌️', '✌🏻', '✌🏼', '✌🏽', '✌🏾', '✌🏿'];
      let currentIndex = colors.indexOf(this.textContent);
      currentIndex = (currentIndex + 1) % colors.length;
      r.style.setProperty('--footer-cursor', rs.getPropertyValue('--footer-cursor').replace(this.textContent, colors[currentIndex]));
      this.textContent = colors[currentIndex];

      if (currentIndex === 0) {
        enableEmojiBurst = true;
      }
      if (enableEmojiBurst) {
        createEmojiBurst(e, colors[currentIndex]);
      }
    });
  }

  function createEmojiBurst(e, burstEmoji) {
    const burstCount = 20;
    const container = document.body;

    for (let i = 0; i < burstCount; i++) {
      const emoji = document.createElement('span');
      emoji.textContent = burstEmoji;
      emoji.style.position = 'fixed';
      emoji.style.left = `${e.clientX - 24}px`;
      emoji.style.top = `${e.clientY - 48}px`;
      emoji.style.fontSize = 24 + Math.random() * 50 + 'px';
      emoji.style.pointerEvents = 'none';
      container.appendChild(emoji);

      const angle = (Math.random() * Math.PI) + Math.PI;
      const velocity = 10 + Math.random() * 10;
      const dx = Math.cos(angle) * velocity;
      const dy = Math.sin(angle) * velocity * 2;

      let x = e.clientX;
      let y = e.clientY;
      let gravity = 0.5;
      let opacity = 1;

      function animate() {
        x += dx;
        y += dy + gravity;
        opacity -= 0.01;
        gravity += 0.5;

        emoji.style.transform = `translate(${x - e.clientX}px, ${y - e.clientY}px)`;
        emoji.style.opacity = opacity;

        if (opacity > 0) {
          requestAnimationFrame(animate);
        } else {
          container.removeChild(emoji);
        }
      }

      requestAnimationFrame(animate);
    }
  }

})(document);