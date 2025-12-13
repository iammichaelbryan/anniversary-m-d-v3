/* ===================
   ANNIVERSARY APP - JAVASCRIPT
   =================== */

// ===================
// NAVIGATION HIGHLIGHTING
// ===================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

function highlightNav() {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', highlightNav);
window.addEventListener('load', highlightNav);

// ===================
// BACKGROUND MUSIC
// ===================
const songs = [
  'assets/audio/Beyoncé - XO (Video).mp3',
  'assets/audio/love_me.mp3',
  'assets/audio/thoseeyes.mp3'
];

// Shuffle songs
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const shuffledSongs = shuffleArray(songs);
let currentSongIndex = 0;
const musicPlayer = document.getElementById('bg-music');
musicPlayer.volume = 0.25;

function playNextSong() {
  if (currentSongIndex >= shuffledSongs.length) {
    currentSongIndex = 0;
  }

  musicPlayer.src = shuffledSongs[currentSongIndex];
  musicPlayer.play().catch(err => console.log('Music autoplay blocked:', err));

  // Stop after 120 seconds and play next song
  setTimeout(() => {
    currentSongIndex++;
    playNextSong();
  }, 120000);
}

// Start music on first user interaction
document.addEventListener('click', () => {
  playNextSong();
}, { once: true });

// ===================
// GALLERY DATA
// ===================
const galleries = {
  'the-beginning': {
    title: 'The Beginning',
    caption: 'Here are our first dates and earliest moments together, simple yet they paved the way to the amazing bond we share now.',
    locations: ['📍 Devon House, Kingston', '📍 Palace Cineplex, Sovereign Centre, Kingston', '📍 Tower of Olympus, Towers Hall, UWI, Mona'],
    images: [
      'assets/images/ourJourney/first dates/firstDate1.jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.15 PM (2).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.15 PM (3).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.15 PM (4).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.15 PM.jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.16 PM (1).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.16 PM (2).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.16 PM (3).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.16 PM (4).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.16 PM (5).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.16 PM (6).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.16 PM (7).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.16 PM (8).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.16 PM (9).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.16 PM.jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.17 PM (1).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.17 PM (10).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.17 PM (2).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.17 PM (3).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.17 PM (4).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.17 PM (5).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.17 PM (6).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.17 PM (7).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.17 PM (8).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.17 PM (9).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.17 PM.jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.18 PM (1).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.18 PM (2).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.18 PM (3).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.18 PM (4).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.18 PM (5).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.18 PM (6).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.18 PM (7).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.18 PM (8).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.18 PM (9).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.18 PM.jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.19 PM (1).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.19 PM (2).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.19 PM (3).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.19 PM (4).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.19 PM (5).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.19 PM (6).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.19 PM (7).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.19 PM.jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.20 PM (1).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.20 PM (2).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.20 PM (3).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.20 PM (4).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.20 PM (5).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.20 PM (6).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.20 PM (7).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.20 PM.jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.21 PM (1).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.21 PM (2).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.21 PM (3).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.21 PM (4).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.21 PM (5).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.21 PM (6).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.21 PM.jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.22 PM (1).jpeg',
      'assets/images/ourJourney/first dates/WhatsApp Image 2025-12-11 at 5.20.22 PM.jpeg',
      'assets/images/ourJourney/early days/earlydays1.jpeg',
      'assets/images/ourJourney/early days/WhatsApp Image 2025-12-11 at 5.20.19 PM (2).jpeg',
      'assets/images/ourJourney/early days/WhatsApp Image 2025-12-11 at 5.20.19 PM (3).jpeg',
      'assets/images/ourJourney/early days/WhatsApp Image 2025-12-11 at 5.20.19 PM.jpeg',
      'assets/images/ourJourney/early days/WhatsApp Video 2025-12-11 at 5.20.22 PM.mp4',
      'assets/images/ourJourney/early days/WhatsApp Video 2025-12-11 at 5.20.23 PM.mp4',
      'assets/images/ourJourney/early days/WhatsApp Video 2025-12-11 at 5.20.24 PM.mp4'
    ]
  },
  'adventures': {
    title: 'Adventures & Moments',
    caption: 'Find our most genuine moments together, dates, adventures, goofing around, the point is, WE ARE TOGETHER. So many more pictures I didn\'t put in here, but you get the point, lol.',
    locations: [
      '📍 Tower of the Mighty Dragons, Towers Hall, UWI, Mona',
      '📍 Dominique\'s Wedding',
      '📍 The Circus',
      '📍 Go Karting',
      '📍 Palace Cineplex, Sovereign Centre, Kingston',
      '📍 Carib Cinema',
      '📍 Bob Marley Beach',
      '📍 The National Stadium',
      '📍 Carnival',
      '📍 Devon House (again)',
      '📍 Boardwalk Beach',
      '📍 Dunns River Falls',
      '📍 Chez Maria Restaurant',
      '📍 Brew\'d Awakenings',
      '📍 Calby\'s Hidden Beauty River',
      '📍 My House',
      '📍 Wherever tf else we felt like going (can\'t be bothered to list anymore)'
    ],
    images: [
      'assets/images/ourJourney/adventure and moments/adv1.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.20.21 PM (1).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.20.21 PM (2).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.20.21 PM (3).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.20.21 PM (4).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.20.21 PM (5).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.20.21 PM (6).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.20.21 PM.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.20.22 PM.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.11 PM (1).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.11 PM.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.12 PM (1).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.12 PM (2).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.12 PM.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.13 PM.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.14 PM (1).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.14 PM (2).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.14 PM.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.15 PM (1).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.15 PM (2).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.15 PM.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.16 PM (1).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.16 PM (2).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.16 PM (3).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.16 PM (4).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.16 PM (5).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.16 PM (6).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.16 PM (7).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.16 PM.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.17 PM (1).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.17 PM.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.18 PM.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.20 PM (1).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.20 PM (2).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.20 PM (3).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Video 2025-12-11 at 5.48.22 PM.mp4',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.20 PM (4).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.20 PM.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.23 PM (1).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.23 PM.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.25 PM.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Video 2025-12-11 at 5.48.26 PM.mp4',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.27 PM (1).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.27 PM.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.28 PM.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Video 2025-12-11 at 5.48.28 PM.mp4',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.29 PM.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Video 2025-12-11 at 5.48.30 PM.mp4',
      'assets/images/ourJourney/adventure and moments/WhatsApp Video 2025-12-11 at 5.48.30 PM (1).mp4',
      'assets/images/ourJourney/adventure and moments/WhatsApp Video 2025-12-11 at 5.48.32 PM.mp4',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.33 PM.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Video 2025-12-11 at 5.48.35 PM.mp4',
      'assets/images/ourJourney/adventure and moments/WhatsApp Video 2025-12-11 at 5.48.35 PM (1).mp4',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.36 PM (1).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.36 PM (2).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.36 PM.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.37 PM (1).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.37 PM (2).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.37 PM.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.38 PM (1).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.38 PM (2).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.38 PM (3).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.38 PM (4).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.38 PM (5).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.38 PM.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.48.39 PM.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.49.24 PM (1).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.49.24 PM (2).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.49.24 PM (3).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.49.24 PM (4).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.49.24 PM (5).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.49.24 PM.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Video 2025-12-11 at 5.49.25 PM.mp4',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.49.27 PM (1).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.49.27 PM (2).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.49.27 PM.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.49.28 PM (1).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.49.28 PM (2).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.49.28 PM (3).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.49.28 PM (4).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.49.28 PM (5).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-11 at 5.49.28 PM.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-12 at 2.59.43 AM.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-12 at 2.59.43 AM (1).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-12 at 2.59.43 AM (2).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-12 at 2.59.43 AM (3).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-12 at 12.27.10 PM.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-12 at 12.27.24 PM.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-12 at 12.27.24 PM (1).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-12 at 12.28.00 PM.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-12 at 12.28.11 PM.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-12 at 12.28.15 PM.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-12 at 12.28.25 PM.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-12 at 12.28.42 PM.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-12 at 12.28.43 PM.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-12 at 12.28.43 PM (1).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-12 at 12.28.44 PM.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-12 at 12.28.44 PM (1).jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-12 at 12.28.46 PM.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-12 at 12.28.50 PM.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Image 2025-12-12 at 12.28.51 PM.jpeg',
      'assets/images/ourJourney/adventure and moments/WhatsApp Video 2025-12-12 at 12.28.51 PM.mp4',
      'assets/images/ourJourney/adventure and moments/WhatsApp Video 2025-12-12 at 12.28.51 PM (1).mp4',
      'assets/images/ourJourney/adventure and moments/WhatsApp Video 2025-12-12 at 12.28.51 PM (2).mp4'
    ]
  },
  'graduation': {
    title: 'Graduation',
    caption: 'The 3 years we have been together have been the best, but some of the hardest of our lives (because of UWI), I have seen us put blood, sweat, and tears into our schooling, and we\'re degreed because of it.',
    locations: ['📍 We made it!'],
    images: [
      'assets/images/ourJourney/graduation/mdgraduation.jpeg',
      'assets/images/ourJourney/graduation/WhatsApp Image 2025-12-11 at 6.10.23 PM (1).jpeg',
      'assets/images/ourJourney/graduation/WhatsApp Image 2025-12-11 at 6.10.23 PM (2).jpeg',
      'assets/images/ourJourney/graduation/WhatsApp Image 2025-12-11 at 6.10.23 PM (3).jpeg',
      'assets/images/ourJourney/graduation/WhatsApp Image 2025-12-11 at 6.10.23 PM (4).jpeg',
      'assets/images/ourJourney/graduation/WhatsApp Image 2025-12-11 at 6.10.23 PM (5).jpeg',
      'assets/images/ourJourney/graduation/WhatsApp Image 2025-12-11 at 6.10.23 PM (6).jpeg',
      'assets/images/ourJourney/graduation/WhatsApp Image 2025-12-11 at 6.10.23 PM.jpeg',
      'assets/images/ourJourney/graduation/WhatsApp Image 2025-12-11 at 6.10.24 PM (1).jpeg',
      'assets/images/ourJourney/graduation/WhatsApp Image 2025-12-11 at 6.10.24 PM (10).jpeg',
      'assets/images/ourJourney/graduation/WhatsApp Image 2025-12-11 at 6.10.24 PM (11).jpeg',
      'assets/images/ourJourney/graduation/WhatsApp Image 2025-12-11 at 6.10.24 PM (12).jpeg',
      'assets/images/ourJourney/graduation/WhatsApp Image 2025-12-11 at 6.10.24 PM (13).jpeg',
      'assets/images/ourJourney/graduation/WhatsApp Image 2025-12-11 at 6.10.24 PM (14).jpeg',
      'assets/images/ourJourney/graduation/WhatsApp Image 2025-12-11 at 6.10.24 PM (2).jpeg',
      'assets/images/ourJourney/graduation/WhatsApp Image 2025-12-11 at 6.10.24 PM (3).jpeg',
      'assets/images/ourJourney/graduation/WhatsApp Image 2025-12-11 at 6.10.24 PM (4).jpeg',
      'assets/images/ourJourney/graduation/WhatsApp Image 2025-12-11 at 6.10.24 PM (5).jpeg',
      'assets/images/ourJourney/graduation/WhatsApp Image 2025-12-11 at 6.10.24 PM (6).jpeg',
      'assets/images/ourJourney/graduation/WhatsApp Image 2025-12-11 at 6.10.24 PM (7).jpeg',
      'assets/images/ourJourney/graduation/WhatsApp Image 2025-12-11 at 6.10.24 PM (8).jpeg',
      'assets/images/ourJourney/graduation/WhatsApp Image 2025-12-11 at 6.10.24 PM (9).jpeg',
      'assets/images/ourJourney/graduation/WhatsApp Image 2025-12-11 at 6.10.24 PM.jpeg',
      'assets/images/ourJourney/graduation/WhatsApp Image 2025-12-11 at 6.14.11 PM.jpeg'
    ]
  }
};

// ===================
// GALLERY MODAL
// ===================
let currentGallery = null;
let currentImageIndex = 0;

const modal = document.getElementById('gallery-modal');
const modalClose = document.querySelector('#gallery-modal .modal-close');
const galleryTitle = document.getElementById('gallery-title');
const galleryCaption = document.getElementById('gallery-caption');
const galleryLocations = document.getElementById('gallery-locations');
const galleryMainImage = document.getElementById('gallery-main-image');
const galleryThumbnails = document.getElementById('gallery-thumbnails');
const prevBtn = document.querySelector('.gallery-nav.prev');
const nextBtn = document.querySelector('.gallery-nav.next');

// Open gallery
document.querySelectorAll('.gallery-preview').forEach(preview => {
  preview.addEventListener('click', () => {
    const galleryKey = preview.dataset.gallery;
    openGallery(galleryKey);
  });
});

function openGallery(galleryKey) {
  currentGallery = galleries[galleryKey];
  currentImageIndex = 0;

  galleryTitle.textContent = currentGallery.title;
  galleryCaption.textContent = currentGallery.caption;
  galleryLocations.innerHTML = currentGallery.locations.map(loc => `<p>${loc}</p>`).join('');

  // Load thumbnails
  galleryThumbnails.innerHTML = '';
  currentGallery.images.forEach((img, index) => {
    if (img.endsWith('.mp4')) {
      // Create video thumbnail
      const video = document.createElement('video');
      video.src = img;
      video.muted = true;
      video.addEventListener('click', () => showImage(index));
      galleryThumbnails.appendChild(video);
    } else {
      // Create image thumbnail
      const thumb = document.createElement('img');
      thumb.src = img;
      thumb.addEventListener('click', () => showImage(index));
      galleryThumbnails.appendChild(thumb);
    }
  });

  showImage(0);
  modal.classList.add('active');
}

function showImage(index) {
  currentImageIndex = index;
  const mediaFile = currentGallery.images[currentImageIndex];

  // Scroll modal to top so user can see the main image
  const modalElement = document.getElementById('gallery-modal');
  if (modalElement) {
    modalElement.scrollTop = 0;
  }

  // Get the container where we'll display the media
  const viewer = document.querySelector('.gallery-viewer');

  // Remove existing media element
  const existingMedia = viewer.querySelector('img, video');
  if (existingMedia && existingMedia.id !== 'gallery-main-image') {
    existingMedia.remove();
  }

  if (mediaFile.endsWith('.mp4')) {
    // Hide image element, create and show video element
    galleryMainImage.style.display = 'none';

    let videoElement = viewer.querySelector('video');
    if (!videoElement) {
      videoElement = document.createElement('video');
      videoElement.id = 'gallery-main-video';
      videoElement.controls = true;
      videoElement.autoplay = false;
      viewer.insertBefore(videoElement, viewer.querySelector('.gallery-nav.next'));
    }
    videoElement.style.display = 'block';
    videoElement.src = mediaFile;
  } else {
    // Hide video element if it exists, show image element
    const videoElement = viewer.querySelector('video');
    if (videoElement) {
      videoElement.style.display = 'none';
    }
    galleryMainImage.style.display = 'block';
    galleryMainImage.src = mediaFile;
  }

  // Update thumbnail active state
  const thumbs = galleryThumbnails.querySelectorAll('img, video');
  thumbs.forEach((thumb, i) => {
    thumb.classList.toggle('active', i === currentImageIndex);
  });
}

// Navigation
prevBtn.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + currentGallery.images.length) % currentGallery.images.length;
  showImage(currentImageIndex);
});

nextBtn.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % currentGallery.images.length;
  showImage(currentImageIndex);
});

// Close modal
modalClose.addEventListener('click', () => {
  modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!modal.classList.contains('active')) return;

  if (e.key === 'ArrowLeft') prevBtn.click();
  if (e.key === 'ArrowRight') nextBtn.click();
  if (e.key === 'Escape') modal.classList.remove('active');
});

// ===================
// QUIZ SECTION
// ===================
const quizQuestions = [
  {
    question: "Let's start easy and fucking obvious. How many years have we been together?",
    answers: ['3', '3', '3', '3'],
    correct: 0,
    wrongMessage: 'You chose the wrong right answer'
  },
  {
    question: 'Our First Date',
    answers: ['The Movies', 'Devon House', 'The Beach', 'Coffee'],
    correct: 1
  },
  {
    question: "What's my favourite thing about you?",
    answers: ['Your smile', 'Your laugh', 'Your kindness', 'Everything'],
    correct: 3
  },
  {
    question: 'What song always reminds me of us?',
    answers: ['WGFT by Gunna', 'Those Eyes (Small Things You Do) by New West', 'Lightning by Mortimer', 'All of the Above'],
    correct: 3
  },
  {
    question: "What's our favourite activity together?",
    answers: ['Watching movies', 'Going to the beach', 'Cooking together', 'All adventures together'],
    correct: 3
  }
];

let currentQuizIndex = 0;
let quizScore = 0;

const questionText = document.querySelector('.question-text');
const answersContainer = document.querySelector('.answers');
const quizFeedback = document.querySelector('.quiz-feedback');
const nextQuestionBtn = document.getElementById('next-question-btn');
const quizResults = document.querySelector('.quiz-results');

function loadQuizQuestion() {
  if (currentQuizIndex >= quizQuestions.length) {
    showQuizResults();
    return;
  }

  const question = quizQuestions[currentQuizIndex];
  questionText.textContent = question.question;
  answersContainer.innerHTML = '';
  quizFeedback.textContent = '';
  nextQuestionBtn.style.display = 'none';

  question.answers.forEach((answer, index) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = answer;
    btn.addEventListener('click', () => checkQuizAnswer(index));
    answersContainer.appendChild(btn);
  });
}

function checkQuizAnswer(selected) {
  const question = quizQuestions[currentQuizIndex];
  const buttons = answersContainer.querySelectorAll('.answer-btn');

  buttons.forEach(btn => btn.disabled = true);

  if (selected === question.correct) {
    buttons[selected].classList.add('correct');
    quizFeedback.textContent = '✓ Correct!';
    quizScore++;
  } else {
    buttons[selected].classList.add('incorrect');
    buttons[question.correct].classList.add('correct');

    if (question.wrongMessage) {
      quizFeedback.textContent = question.wrongMessage;
    } else {
      quizFeedback.textContent = '✗ Incorrect!';
    }
  }

  nextQuestionBtn.style.display = 'inline-block';
}

nextQuestionBtn.addEventListener('click', () => {
  currentQuizIndex++;
  loadQuizQuestion();
});

function showQuizResults() {
  questionText.style.display = 'none';
  answersContainer.style.display = 'none';
  quizFeedback.style.display = 'none';
  nextQuestionBtn.style.display = 'none';

  quizResults.style.display = 'block';
  quizResults.innerHTML = `
    <h3>Quiz Complete!</h3>
    <p>You got ${quizScore} out of ${quizQuestions.length} correct!</p>
    <p style="margin-top: 1.5rem; font-size: 1.2rem;">
      ${quizScore === quizQuestions.length
        ? "Perfect score! You know us so well! 💖"
        : "Every moment with you is special! 💕"}
    </p>
  `;
}

// Initialize quiz
loadQuizQuestion();

// ===================
// GIFT IMAGE MODAL
// ===================
function openGiftImage(imageSrc) {
  const modal = document.getElementById('gift-image-modal');
  const img = document.getElementById('gift-image-full');
  img.src = imageSrc;
  modal.classList.add('active');
}

function closeGiftImage() {
  const modal = document.getElementById('gift-image-modal');
  modal.classList.remove('active');
}

// Close gift image modal when clicking outside the image
document.getElementById('gift-image-modal').addEventListener('click', (e) => {
  if (e.target.id === 'gift-image-modal') {
    closeGiftImage();
  }
});

// ===================
// REVEAL GIFTS FUNCTIONALITY
// ===================
document.getElementById('reveal-gifts-btn').addEventListener('click', () => {
  const confirmed = confirm('Have your gifts been delivered?\n\nDeandra, do not reveal unless they have been!');

  if (confirmed) {
    // Hide the reveal button
    document.getElementById('reveal-gifts-btn').style.display = 'none';

    // Show the gifts grid with a fade-in animation
    const giftsGrid = document.getElementById('gifts-grid');
    giftsGrid.style.display = 'grid';
    giftsGrid.style.opacity = '0';

    setTimeout(() => {
      giftsGrid.style.transition = 'opacity 1s ease';
      giftsGrid.style.opacity = '1';
    }, 100);
  }
});

console.log('💖 Anniversary App Loaded!');
