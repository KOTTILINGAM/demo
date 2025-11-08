// Script for Sorry Website
const btn = document.getElementById('sorryBtn');
const giftBtn = document.getElementById('giftBtn');
const heartBtn = document.getElementById('heartBtn');
const robotSVG = document.getElementById('robotSVG');
const animatedRose = document.getElementById('animatedRose');
const catSVG = document.getElementById('catSVG');
const dogSVG = document.getElementById('dogSVG');
const catContainer = document.getElementById('catContainer');
const dogContainer = document.getElementById('dogContainer');
const priyankContainer = document.getElementById('priyankNameContainer');
const fullNameContainer = document.getElementById('fullNameContainer');
const layer = document.getElementById('animationLayer');
const lottieContainer = document.getElementById('lottieContainer');
const music = document.getElementById('bgMusic');

let playing = false;
let giftAnimating = false;
let heartAnimating = false;
let currentCharacter = 'cat';
let currentTheme = 'dark';
let currentFlower = 'rose';

// Flower emoji mappings
const flowerEmojis = {
  rose: ['🌹', '🌷', '🌺'],
  tulip: ['🌷', '🌷', '🌷'],
  sunflower: ['🌻', '🌻', '🌻'],
  mixed: ['🌹', '🌷', '🌺', '💐', '🌻']
};

function random(min, max){return Math.random()*(max-min)+min}

function createParticle(kind){
  const el = document.createElement('div');
  el.className = 'particle '+kind;
  // position by percent left and top (vh is handled by keyframes)
  el.style.left = random(5,95)+'%';
  el.style.top = '-12vh';
  const duration = random(6,12);
  // outer element: fall animation (animates top)
  el.style.animation = `fall ${duration}s linear forwards`;
  el.style.fontSize = (kind==='heart'? random(18,40): random(16,36))+'px';
  el.style.opacity = '0';

  // inner element handles sway/rotation
  const inner = document.createElement('span');
  inner.className = 'p-inner';
  const swayDur = random(3,6);
  inner.style.display = 'inline-block';
  inner.style.animation = `sway ${swayDur}s ease-in-out infinite`;
  inner.style.transform = `rotate(${random(-25,25)}deg)`;
  if(kind === 'heart'){
    inner.innerText = '💕';
  } else if(kind === 'flower'){
    // Use selected flower type
    const flowers = flowerEmojis[currentFlower] || flowerEmojis.rose;
    inner.innerText = flowers[Math.floor(Math.random()*flowers.length)];
  } else {
    inner.innerText = '🌸';
  }
  el.appendChild(inner);
  layer.appendChild(el);
  // remove after animation completes
  setTimeout(()=>{el.remove()}, (duration+0.4)*1000);
}

function burstParticles(count=24){
  for(let i=0;i<count;i++){
    setTimeout(()=>{
      createParticle(i%2===0? 'heart' : 'flower')
    }, i*80)
  }
}

function showLottie(){
  // show container
  lottieContainer.classList.remove('hidden');
  lottieContainer.setAttribute('aria-hidden','false');

  // If lottie-web is loaded and a LOTTIE_SRC URL is set, load it dynamically
  if(window.lottie && window.LOTTIE_SRC){
    // clear any existing children and mount lottie
    lottieContainer.innerHTML = '';
    const mount = document.createElement('div');
    mount.style.width = '100%'; mount.style.height = '100%';
    lottieContainer.appendChild(mount);
    window.lottie.loadAnimation({container: mount, renderer: 'svg', loop: true, autoplay: true, path: window.LOTTIE_SRC});
  }
}

function startMusic(){
  // If src is provided, try to play. Autoplay will only work after user gesture (click), so this is safe.
  if(music && music.querySelector('source') && music.querySelector('source').src){
    music.play().catch(e=>console.log('music play blocked',e));
  }
}

// Theme switching functions
function setCharacter(character){
  currentCharacter = character;
  if(character === 'cat'){
    catContainer.classList.remove('hidden');
    dogContainer.classList.add('hidden');
  } else if(character === 'dog'){
    dogContainer.classList.remove('hidden');
    catContainer.classList.add('hidden');
  }
  updateThemeButtons();
}

function setTheme(theme){
  currentTheme = theme;
  document.body.classList.remove('theme-pink','theme-purple','theme-green','theme-dark');
  if(theme !== 'dark'){
    document.body.classList.add(`theme-${theme}`);
  }
  updateThemeButtons();
}

function setFlower(flower){
  currentFlower = flower;
  updateThemeButtons();
}

function updateThemeButtons(){
  // Update character buttons
  document.querySelectorAll('[data-character]').forEach(btn=>{
    btn.classList.toggle('active', btn.dataset.character === currentCharacter);
  });
  // Update theme buttons
  document.querySelectorAll('[data-theme]').forEach(btn=>{
    btn.classList.toggle('active', btn.dataset.theme === currentTheme);
  });
  // Update flower buttons
  document.querySelectorAll('[data-flower]').forEach(btn=>{
    btn.classList.toggle('active', btn.dataset.flower === currentFlower);
  });
}

// Initialize theme selector listeners
document.querySelectorAll('[data-character]').forEach(btn=>{
  btn.addEventListener('click', ()=> setCharacter(btn.dataset.character));
});
document.querySelectorAll('[data-theme]').forEach(btn=>{
  btn.addEventListener('click', ()=> setTheme(btn.dataset.theme));
});
document.querySelectorAll('[data-flower]').forEach(btn=>{
  btn.addEventListener('click', ()=> setFlower(btn.dataset.flower));
});

// Create different types of roses (red, pink, white, rainbow)
function createRoseType(){
  const types = ['🌹', '🌷', '🌺', '💐'];
  return types[Math.floor(Math.random()*types.length)];
}

// Show Priyanka's name with animation
function showPriyakaName(){
  priyankContainer.classList.remove('hidden');
  const nameEl = document.getElementById('priyanakaName');
  // Trigger animation
  nameEl.style.animation = 'none';
  setTimeout(()=>{nameEl.style.animation = 'priyankaBurst 3s cubic-bezier(0.34,1.56,0.64,1) forwards'}, 10);
  // Hide after animation
  setTimeout(()=>{priyankContainer.classList.add('hidden')}, 3000);
}

btn.addEventListener('click', ()=>{
  // visual feedback
  btn.disabled = true;
  btn.innerText = 'SENT ❤️';
  btn.style.transform = 'scale(0.96)';
  setTimeout(()=>btn.style.transform = '', 200);

  // spawn continuous gentle fall
  const interval = setInterval(()=>{
    createParticle(Math.random()>0.5?'heart':'flower')
  }, 350);

  // initial burst
  burstParticles(26);

  // show lottie after short delay
  setTimeout(showLottie, 1000);

  // start background music if provided
  startMusic();

  // stop spawning after a while but keep a few
  setTimeout(()=>{
    clearInterval(interval);
    // Re-enable button for next click
    btn.disabled = false;
    btn.innerText = 'SORRY';
  }, 20000);
});

// Accessibility: allow Enter/Space to activate when focused
btn.addEventListener('keydown', (e)=>{
  if(e.key==='Enter' || e.key===' '){ e.preventDefault(); btn.click(); }
});

// Gift Box Handler - Robot gives red rose
giftBtn.addEventListener('click', ()=>{
  // Prevent overlapping animations
  if(giftAnimating) return;
  giftAnimating = true;
  
  // Trigger robot arm animation to give rose
  robotSVG.classList.add('giving-rose');
  
  // Make cat mouth open in excitement
  if(catSVG){
    catSVG.classList.add('cat-excited');
  }
  
  // Show Priyanka's name
  showPriyakaName();
  
  // Show and animate the red rose
  animatedRose.classList.remove('hidden');
  animatedRose.classList.add('active');
  
  // Position rose starting from robot position
  const robotRect = robotSVG.getBoundingClientRect();
  animatedRose.style.left = (robotRect.left + robotRect.width * 0.7) + 'px';
  animatedRose.style.top = (robotRect.top + robotRect.height * 0.4) + 'px';
  
  // Create particle burst of multiple rose types when rose reaches center
  setTimeout(()=>{
    for(let i=0;i<16;i++){
      setTimeout(()=>{
        const petal = document.createElement('div');
        petal.className = 'particle flower';
        petal.style.left = random(35,65)+'%';
        petal.style.top = '20vh';
        const duration = random(5,11);
        petal.style.animation = `fall ${duration}s linear forwards`;
        petal.style.fontSize = random(22,38)+'px';
        const inner = document.createElement('span');
        inner.className = 'p-inner';
        inner.style.display = 'inline-block';
        inner.style.animation = `sway ${random(3,6)}s ease-in-out infinite`;
        // Use selected flower type
        const flowers = flowerEmojis[currentFlower] || flowerEmojis.rose;
        inner.innerText = flowers[Math.floor(Math.random()*flowers.length)];
        petal.appendChild(inner);
        layer.appendChild(petal);
        setTimeout(()=>{petal.remove()}, (duration+0.4)*1000);
      }, i*50);
    }
  }, 1200);
  
  // Reset rose and robot for next interaction
  setTimeout(()=>{
    animatedRose.classList.remove('active');
    animatedRose.classList.add('hidden');
    robotSVG.classList.remove('giving-rose');
    if(catSVG){
      catSVG.classList.remove('cat-excited');
    }
    giftAnimating = false; // Allow next gift click
  }, 2800);
});

// Heart Button Handler - Shows Priyanka Kottilingam's full name
heartBtn.addEventListener('click', ()=>{
  // Prevent overlapping animations
  if(heartAnimating) return;
  heartAnimating = true;

  // Show full name container
  fullNameContainer.classList.remove('hidden');
  const nameEl = document.getElementById('fullNameText');
  
  // Trigger animation
  nameEl.style.animation = 'none';
  setTimeout(()=>{nameEl.style.animation = 'fullNameExplode 4s cubic-bezier(0.34,1.56,0.64,1) forwards'}, 10);
  
  // Create heart particle burst
  for(let i=0;i<20;i++){
    setTimeout(()=>{
      const heart = document.createElement('div');
      heart.className = 'particle heart';
      heart.style.left = random(20,80)+'%';
      heart.style.top = '15vh';
      const duration = random(6,10);
      heart.style.animation = `fall ${duration}s linear forwards`;
      heart.style.fontSize = random(24,42)+'px';
      const inner = document.createElement('span');
      inner.className = 'p-inner';
      inner.style.display = 'inline-block';
      inner.style.animation = `sway ${random(3,6)}s ease-in-out infinite`;
      inner.innerText = '💕';
      heart.appendChild(inner);
      layer.appendChild(heart);
      setTimeout(()=>{heart.remove()}, (duration+0.4)*1000);
    }, i*40);
  }
  
  // Hide name after animation
  setTimeout(()=>{
    fullNameContainer.classList.add('hidden');
    heartAnimating = false;
  }, 4200);
});

// Optional: allow user to set music by dropping a file on page (small utility)
window.addEventListener('dragover', (e)=>{e.preventDefault()});
window.addEventListener('drop', (e)=>{
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  if(file && file.type.startsWith('audio')){
    const src = URL.createObjectURL(file);
    music.querySelector('source').src = src;
    music.load();
    // play on next click
    alert('Music loaded. Click SORRY to play.');
  }
});
