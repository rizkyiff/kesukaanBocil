'use strict';

/**
 * Game 1: Daftar 10 hewan beserta makanan kesukaannya masing-masing.
 */
const ANIMALS = [
  { id: 'kelinci', name: 'Kelinci', image: 'imgReference/bunny.jpg', favoriteId: 'wortel' },
  { id: 'monyet', name: 'Monyet', image: 'imgReference/monyet.svg', favoriteId: 'pisang' },
  { id: 'kucing', name: 'Kucing', image: 'imgReference/kucing.svg', favoriteId: 'ikan' },
  { id: 'anjing', name: 'Anjing', image: 'imgReference/anjing.svg', favoriteId: 'tulang' },
  { id: 'panda', name: 'Panda', image: 'imgReference/panda.svg', favoriteId: 'bambu' },
  { id: 'sapi', name: 'Sapi', image: 'imgReference/sapi.svg', favoriteId: 'rumput' },
  { id: 'beruang', name: 'Beruang', image: 'imgReference/beruang.svg', favoriteId: 'madu' },
  { id: 'tikus', name: 'Tikus', image: 'imgReference/tikus.svg', favoriteId: 'keju' },
  { id: 'gajah', name: 'Gajah', image: 'imgReference/gajah.svg', favoriteId: 'semangka' },
  { id: 'tupai', name: 'Tupai', image: 'imgReference/tupai.svg', favoriteId: 'kacang' }
];

/**
 * Daftar seluruh makanan (buah, sayur, & makanan hewan) di folder imgReference.
 */
const FOOD_ITEMS = [
  { id: 'wortel', name: 'Wortel', image: 'imgReference/wortel.png' },
  { id: 'apel', name: 'Apel', image: 'imgReference/apel.png' },
  { id: 'pisang', name: 'Pisang', image: 'imgReference/pisang.png' },
  { id: 'stroberi', name: 'Stroberi', image: 'imgReference/stroberi.jpg' },
  { id: 'jeruk', name: 'Jeruk', image: 'imgReference/jeruk.jpg' },
  { id: 'anggur', name: 'Anggur', image: 'imgReference/anggur.jpg' },
  { id: 'ikan', name: 'Ikan', image: 'imgReference/ikan.svg' },
  { id: 'tulang', name: 'Tulang', image: 'imgReference/tulang.svg' },
  { id: 'bambu', name: 'Bambu', image: 'imgReference/bambu.svg' },
  { id: 'rumput', name: 'Rumput', image: 'imgReference/rumput.svg' },
  { id: 'madu', name: 'Madu', image: 'imgReference/madu.svg' },
  { id: 'keju', name: 'Keju', image: 'imgReference/keju.svg' },
  { id: 'semangka', name: 'Semangka', image: 'imgReference/semangka.svg' },
  { id: 'kacang', name: 'Kacang', image: 'imgReference/kacang.svg' }
];

/**
 * Game 2: Daftar 10 kendaraan berat dalam bahasa Indonesia.
 */
const VEHICLES = [
  { id: 'ekskavator', name: 'Ekskavator', image: 'imgReference/kendaraan/ekskavator.svg' },
  { id: 'truk-dump', name: 'Truk Dump', image: 'imgReference/kendaraan/truk-dump.svg' },
  { id: 'truk-crane', name: 'Truk Crane', image: 'imgReference/kendaraan/truk-crane.svg' },
  { id: 'crane', name: 'Crane', image: 'imgReference/kendaraan/crane.svg' },
  { id: 'buldoser', name: 'Buldoser', image: 'imgReference/kendaraan/buldoser.svg' },
  { id: 'truk-molen', name: 'Truk Molen', image: 'imgReference/kendaraan/truk-molen.svg' },
  { id: 'mesin-gilas', name: 'Mesin Gilas', image: 'imgReference/kendaraan/mesin-gilas.svg' },
  { id: 'forklift', name: 'Forklift', image: 'imgReference/kendaraan/forklift.svg' },
  { id: 'traktor', name: 'Traktor', image: 'imgReference/kendaraan/traktor.svg' },
  { id: 'loader', name: 'Loader', image: 'imgReference/kendaraan/loader.svg' }
];

const OPTION_COUNT = 3;

const questionHeading = document.getElementById('question-heading');
const animalImg = document.getElementById('animal-img');
const animalNameEl = document.getElementById('animal-name');
const optionsGrid = document.getElementById('options-grid');
const feedbackBanner = document.getElementById('feedback-banner');
const feedbackText = document.getElementById('feedback-text');
const nextRoundBtn = document.getElementById('next-round-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const soundToggleBtn = document.getElementById('sound-toggle');
const soundLabel = document.getElementById('sound-label');
const scoreValueEl = document.getElementById('score-value');
const modeAnimalsBtn = document.getElementById('mode-animals-btn');
const modeVehiclesBtn = document.getElementById('mode-vehicles-btn');

let currentMode = 'animals'; // 'animals' | 'vehicles'
let soundEnabled = true;
let score = 0;
let roundSolved = false;
let lastTargetIndex = -1;
let lastPromptId = { animals: null, vehicles: null };
let decks = { animals: [], vehicles: [] };
let currentPrompt = ANIMALS[0];
let currentTargetId = 'wortel';
let audioCtx = null;

/** Mengambil atau membuat AudioContext saat ada interaksi pengguna. */
function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/** Memainkan nada ceria saat jawaban benar. */
function playSuccessSound() {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const notes = [523.25, 659.25, 783.99, 1046.5];
  const now = ctx.currentTime;

  notes.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now + idx * 0.085);

    gain.gain.setValueAtTime(0.001, now + idx * 0.085);
    gain.gain.exponentialRampToValueAtTime(0.22, now + idx * 0.085 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.085 + 0.24);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now + idx * 0.085);
    osc.stop(now + idx * 0.085 + 0.26);
  });
}

/** Memainkan bunyi lembut saat jawaban belum tepat. */
function playTryAgainSound() {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(320, now);
  osc.frequency.exponentialRampToValueAtTime(210, now + 0.18);

  gain.gain.setValueAtTime(0.16, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.22);
}

/** Mengacak array menggunakan Fisher-Yates shuffle. */
function shuffleArray(list) {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** Mengambil item berikutnya dari dek acak agar tidak mengulang item sebelumnya berturut-turut. */
function pickNextFromDeck(modeKey, sourceList) {
  if (decks[modeKey].length === 0) {
    decks[modeKey] = shuffleArray(sourceList);
    const prevId = lastPromptId[modeKey];
    if (prevId && decks[modeKey][0].id === prevId && decks[modeKey].length > 1) {
      const lastIdx = decks[modeKey].length - 1;
      [decks[modeKey][0], decks[modeKey][lastIdx]] = [decks[modeKey][lastIdx], decks[modeKey][0]];
    }
  }
  const chosen = decks[modeKey].shift();
  lastPromptId[modeKey] = chosen.id;
  return chosen;
}

/**
 * Memilih 3 opsi: 1 jawaban benar + 2 pengecoh acak,
 * serta memastikan posisi jawaban benar berpindah dibanding ronde sebelumnya.
 */
function pickRoundOptions(pool, targetId) {
  const target = pool.find((item) => item.id === targetId);
  const distractors = shuffleArray(pool.filter((item) => item.id !== targetId)).slice(0, OPTION_COUNT - 1);

  const combined = shuffleArray([target, ...distractors]);
  let targetIndex = combined.findIndex((item) => item.id === targetId);

  if (lastTargetIndex !== -1 && targetIndex === lastTargetIndex) {
    const otherIndices = [0, 1, 2].filter((idx) => idx !== lastTargetIndex);
    const newIndex = otherIndices[Math.floor(Math.random() * otherIndices.length)];
    [combined[targetIndex], combined[newIndex]] = [combined[newIndex], combined[targetIndex]];
    targetIndex = newIndex;
  }

  lastTargetIndex = targetIndex;
  return combined;
}

/** Membuat elemen SVG centang hijau. */
function createCheckBadge() {
  const badge = document.createElement('span');
  badge.className = 'check-badge';
  badge.setAttribute('aria-hidden', 'true');
  badge.innerHTML = `
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  `;
  return badge;
}

/** Menangani klik pada salah satu kartu opsi. */
function handleOptionClick(item, cardEl) {
  if (roundSolved) return;

  if (item.id === currentTargetId) {
    roundSolved = true;
    score += 1;
    scoreValueEl.textContent = String(score);

    playSuccessSound();
    cardEl.classList.remove('is-wrong');
    cardEl.classList.add('is-correct');
    cardEl.appendChild(createCheckBadge());

    const allCards = optionsGrid.querySelectorAll('.option-card');
    allCards.forEach((btn) => {
      btn.disabled = true;
      if (btn !== cardEl) {
        btn.classList.add('is-dimmed');
      }
    });

    if (currentMode === 'vehicles') {
      animalNameEl.textContent = item.name;
      animalNameEl.hidden = false;
      feedbackText.textContent = `Hore! Benar, ini ${item.name}!`;
    } else {
      feedbackText.textContent = `Hore! Benar, ${currentPrompt.name} suka ${item.name}!`;
    }

    feedbackBanner.className = 'feedback-banner is-success';
    nextRoundBtn.hidden = false;
  } else {
    playTryAgainSound();
    cardEl.classList.remove('is-wrong');
    void cardEl.offsetWidth;
    cardEl.classList.add('is-wrong');

    feedbackBanner.className = 'feedback-banner is-try-again';
    if (currentMode === 'vehicles') {
      feedbackText.textContent = `Ups, bukan ${item.name}. Coba pilih nama kendaraan yang tepat ya!`;
    } else {
      feedbackText.textContent = `Ups, itu ${item.name}. Coba pilih makanan kesukaan ${currentPrompt.name} ya!`;
    }
  }
}

/** Merender ronde baru sesuai mode permainan yang aktif. */
function startRound() {
  roundSolved = false;
  optionsGrid.innerHTML = '';
  feedbackBanner.className = 'feedback-banner';
  nextRoundBtn.hidden = true;

  if (currentMode === 'animals') {
    currentPrompt = pickNextFromDeck('animals', ANIMALS);
    currentTargetId = currentPrompt.favoriteId;

    questionHeading.textContent = `${currentPrompt.name} suka makan apa ya?`;
    animalImg.src = currentPrompt.image;
    animalImg.alt = `Gambar ${currentPrompt.name} yang lucu`;
    animalNameEl.textContent = currentPrompt.name;
    animalNameEl.hidden = false;
    feedbackText.textContent = `Ketuk gambar makanan yang disukai ${currentPrompt.name}!`;

    const roundItems = pickRoundOptions(FOOD_ITEMS, currentTargetId);
    roundItems.forEach((item) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option-card';
      btn.setAttribute('aria-label', `Pilih ${item.name}`);

      const imgWrap = document.createElement('div');
      imgWrap.className = 'option-image-wrap';

      const img = document.createElement('img');
      img.src = item.image;
      img.alt = `Gambar ${item.name}`;
      img.width = 240;
      img.height = 240;

      const label = document.createElement('span');
      label.className = 'option-label';
      label.textContent = item.name;

      imgWrap.appendChild(img);
      btn.appendChild(imgWrap);
      btn.appendChild(label);
      btn.addEventListener('click', () => handleOptionClick(item, btn));
      optionsGrid.appendChild(btn);
    });
  } else {
    currentPrompt = pickNextFromDeck('vehicles', VEHICLES);
    currentTargetId = currentPrompt.id;

    questionHeading.textContent = 'Apa nama kendaraan berat ini?';
    animalImg.src = currentPrompt.image;
    animalImg.alt = 'Gambar kendaraan berat untuk ditebak namanya';
    animalNameEl.textContent = '';
    animalNameEl.hidden = true;
    feedbackText.textContent = 'Ketuk nama kendaraan berat yang sesuai gambar!';

    const roundItems = pickRoundOptions(VEHICLES, currentTargetId);
    roundItems.forEach((item) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option-card is-text-only';
      btn.setAttribute('aria-label', `Pilih ${item.name}`);

      const label = document.createElement('span');
      label.className = 'option-label';
      label.textContent = item.name;

      btn.appendChild(label);
      btn.addEventListener('click', () => handleOptionClick(item, btn));
      optionsGrid.appendChild(btn);
    });
  }
}

/** Mengganti mode permainan dan langsung memulai ronde baru. */
function switchMode(newMode) {
  if (currentMode === newMode) return;
  currentMode = newMode;

  const isAnimals = newMode === 'animals';
  modeAnimalsBtn.classList.toggle('is-active', isAnimals);
  modeAnimalsBtn.setAttribute('aria-pressed', String(isAnimals));
  modeVehiclesBtn.classList.toggle('is-active', !isAnimals);
  modeVehiclesBtn.setAttribute('aria-pressed', String(!isAnimals));

  startRound();
}

soundToggleBtn.addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  soundToggleBtn.setAttribute('aria-pressed', String(soundEnabled));
  soundToggleBtn.setAttribute('aria-label', soundEnabled ? 'Matikan suara' : 'Aktifkan suara');
  soundLabel.textContent = soundEnabled ? 'Suara Aktif' : 'Suara Mati';
});

modeAnimalsBtn.addEventListener('click', () => switchMode('animals'));
modeVehiclesBtn.addEventListener('click', () => switchMode('vehicles'));
shuffleBtn.addEventListener('click', startRound);
nextRoundBtn.addEventListener('click', startRound);

startRound();
