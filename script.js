/* ===========================
   ANNIVERSARY APP - MAIN SCRIPT
   =========================== */

// ===========================
// GLOBAL SETUP
// ===========================

// Background Music
const music = document.getElementById("bg-music");
let musicStarted = false;

// Set volume to 30% (0.0 to 1.0 scale)
if (music) {
  music.volume = 0.25;
}

document.addEventListener("click", () => {
  if (!musicStarted && music) {
    music.muted = false;
    music.play().catch(err => console.log("Music play blocked:", err));
    musicStarted = true;
  }
}, { once: true });

// ===========================
// FLOATING HEARTS ANIMATION
// ===========================
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.innerHTML = "=�";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 2 + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 2000);

// ===========================
// MEMORY TIMELINE - Scroll Reveal
// ===========================
const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -100px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".timeline-item").forEach(item => {
  observer.observe(item);
});

// ===========================
// QUIZ TIME MODULE
// ===========================
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

// Load quiz questions
fetch('quiz-questions.json')
  .then(response => response.json())
  .then(data => {
    quizQuestions = data;
    loadQuestion();
  })
  .catch(err => {
    console.error('Error loading quiz:', err);
    document.querySelector('.question-text').textContent =
      "Quiz questions couldn't load. But you're still amazing!";
  });

function loadQuestion() {
  if (currentQuestionIndex >= quizQuestions.length) {
    showQuizComplete();
    return;
  }

  const question = quizQuestions[currentQuestionIndex];
  const questionText = document.querySelector('.question-text');
  const answersGrid = document.querySelector('.answers-grid');

  questionText.textContent = question.question;
  answersGrid.innerHTML = '';

  question.answers.forEach((answer, index) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = answer;
    btn.onclick = () => checkAnswer(index, question.correct);
    answersGrid.appendChild(btn);
  });

  updateLoveMeter();
}

function checkAnswer(selected, correct) {
  const buttons = document.querySelectorAll('.answer-btn');

  buttons.forEach(btn => btn.disabled = true);

  if (selected === correct) {
    buttons[selected].classList.add('correct');
    score++;
    createConfetti();
  } else {
    buttons[selected].classList.add('incorrect');
    buttons[correct].classList.add('correct');
  }

  setTimeout(() => {
    currentQuestionIndex++;
    loadQuestion();
  }, 2000);
}

function updateLoveMeter() {
  const fillPercent = (currentQuestionIndex / quizQuestions.length) * 100;
  document.querySelector('.love-meter-fill').style.width = fillPercent + '%';
}

function showQuizComplete() {
  const quizCard = document.querySelector('.quiz-card');
  const scoreDisplay = document.querySelector('.quiz-score');

  quizCard.innerHTML = `
    <h3 style="text-align: center; color: #d45d79; margin-bottom: 1rem;">
      Quiz Complete! <�
    </h3>
    <p style="text-align: center; font-size: 1.3rem;">
      You got ${score} out of ${quizQuestions.length} correct!
    </p>
    <p style="text-align: center; margin-top: 1rem; color: #888;">
      ${score === quizQuestions.length
        ? "Perfect score! You know our story by heart =�"
        : "Every moment with you is special, no matter the score! =�"}
    </p>
  `;

  document.querySelector('.next-section-btn').classList.add('show');

  // Big confetti celebration
  for (let i = 0; i < 50; i++) {
    setTimeout(() => createConfetti(), i * 30);
  }
}

// ===========================
// CONFETTI ANIMATION
// ===========================
function createConfetti() {
  const colors = ['#ff6b9d', '#ffc3d5', '#ffeb99', '#a8e6cf', '#b4a7d6'];

  for (let i = 0; i < 15; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = 2 + Math.random() * 2 + 's';
    confetti.style.animationDelay = Math.random() * 0.5 + 's';
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 4000);
  }
}

// ===========================
// VIRTUAL GIFT BOX MODULE
// ===========================
const giftContents = {
  poem: {
    title: "A Poem for You =�",
    content: `
      <div style="font-family: Georgia, serif; line-height: 2; font-size: 1.2rem; color: #555;">
        <p style="text-align: center; font-style: italic; margin-bottom: 2rem;">
          Three years of love, laughter, and light,<br>
          Every moment with you feels so right.<br>
          Through adventures and quiet nights at home,<br>
          With you, I've found where I belong.<br><br>

          Your smile brightens my darkest day,<br>
          Your love guides me along the way.<br>
          Hand in hand, we've built our story,<br>
          And each chapter is filled with glory.<br><br>

          Here's to us, to three years strong,<br>
          To a love that feels like our favorite song.<br>
          Forever grateful, forever true,<br>
          My heart will always belong to you. =�
        </p>
      </div>
    `
  },
  playlist: {
    title: "Our Playlist <�",
    content: `
      <div style="text-align: center;">
        <p style="margin-bottom: 1.5rem; font-size: 1.1rem; color: #666;">
          Songs that remind me of us...
        </p>
        <audio controls style="width: 100%; margin-bottom: 1rem;">
          <source src="assets/audio/love_me.mp3" type="audio/mpeg">
        </audio>
        <p style="font-size: 1rem; color: #888; margin-top: 1rem;">
          Our special song - the soundtrack to our love story
        </p>
      </div>
    `
  },
  gallery: {
    title: "Photo Memories =�",
    content: `
      <div class="modal-gallery" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
        <img src="assets/images/jaw kiss early days.jpeg" alt="Memory" style="width: 100%; border-radius: 8px;">
        <img src="assets/images/handsheld.jpeg" alt="Memory" style="width: 100%; border-radius: 8px;">
        <img src="assets/images/beach shadows heart.jpeg" alt="Memory" style="width: 100%; border-radius: 8px;">
        <img src="assets/images/you look sooo good.jpeg" alt="Memory" style="width: 100%; border-radius: 8px;">
      </div>
      <p style="text-align: center; margin-top: 1.5rem; color: #888; font-style: italic;">
        Captured moments of our beautiful journey together
      </p>
    `
  },
  letter: {
    title: "Love Letter =�",
    content: `
      <div style="font-family: Georgia, serif; line-height: 1.8; font-size: 1.1rem; color: #555; padding: 1rem;">
        <p style="margin-bottom: 1.5rem;">My Dearest Deandra,</p>

        <p style="margin-bottom: 1rem;">
          Three years ago, you walked into my life and changed everything. Every day since has been
          an adventure, a blessing, and a reminder of how lucky I am to have you by my side.
        </p>

        <p style="margin-bottom: 1rem;">
          You are my best friend, my partner in crime, my adventure buddy, and the love of my life.
          Your smile brightens my worst days, your laugh is my favorite sound, and your love is
          my safe haven.
        </p>

        <p style="margin-bottom: 1rem;">
          Thank you for three incredible years of memories, growth, and unconditional love.
          Here's to many more adventures, quiet moments, movie nights, beach days, and everything
          in between.
        </p>

        <p style="margin-bottom: 1rem;">
          I love you more than words can express, and I can't wait to see what the future holds for us.
        </p>

        <p style="margin-top: 2rem; text-align: right;">
          Forever yours,<br>
          <span style="font-size: 1.3rem; color: #d45d79;">e</span>
        </p>
      </div>
    `
  }
};

// Gift box interactions
document.querySelectorAll('.gift-item').forEach(item => {
  item.addEventListener('click', () => {
    const giftType = item.dataset.gift;
    openGiftModal(giftType);
  });
});

function openGiftModal(giftType) {
  const modal = document.getElementById('gift-modal');
  const modalBody = document.getElementById('modal-body');
  const gift = giftContents[giftType];

  modalBody.innerHTML = `
    <h2 style="color: #d45d79; margin-bottom: 1.5rem;">${gift.title}</h2>
    ${gift.content}
  `;

  modal.classList.add('active');

  // Confetti when opening gift
  createConfetti();
}

// Close modal
document.querySelector('.modal-close').addEventListener('click', () => {
  document.getElementById('gift-modal').classList.remove('active');
});

document.getElementById('gift-modal').addEventListener('click', (e) => {
  if (e.target.id === 'gift-modal') {
    document.getElementById('gift-modal').classList.remove('active');
  }
});

// ===========================
// DAILY AFFIRMATIONS MODULE
// ===========================
const affirmations = [
  "You make every day brighter just by being in it.",
  "Your love is the greatest gift I've ever received.",
  "With you, I've found my forever home.",
  "Every moment with you is a treasure.",
  "You are my best friend and my greatest love.",
  "Your smile is my favorite sight in the world.",
  "I fall in love with you more every single day.",
  "You make me want to be a better person.",
  "Our love story is my favorite adventure.",
  "Thank you for being you - perfect in every way.",
  "You are my today and all of my tomorrows.",
  "Life with you is a beautiful dream come true.",
  "Your happiness is my happiness.",
  "Together, we can conquer anything.",
  "You are my sunshine on the cloudiest days.",
  "I'm grateful for you every single moment.",
  "Our love grows stronger with each passing day.",
  "You complete me in ways I never knew I needed.",
  "Forever grateful to call you mine.",
  "You are my heart, my soul, my everything.",
  // Add more affirmations (up to 365)
  "Every day with you is a blessing.",
  "You inspire me to be my best self.",
  "Our journey together is my greatest joy.",
  "Your love makes everything better.",
  "I choose you, today and always.",
  "You are my favorite person in the entire world.",
  "With you, I am home.",
  "Our love is a beautiful masterpiece.",
  "You make my heart skip a beat every time.",
  "I love you more than yesterday, less than tomorrow."
];

// Display affirmation based on day of year
function displayDailyAffirmation() {
  const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  const affirmationIndex = dayOfYear % affirmations.length;

  document.getElementById('affirmation-text').textContent = affirmations[affirmationIndex];
}

displayDailyAffirmation();

// ===========================
// SMOOTH SCROLL POLISH
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

console.log("=� Anniversary App Loaded - Made with love!");
