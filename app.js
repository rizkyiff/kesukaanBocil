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

/**
 * Game 3: Daftar 10 bangunan umum dalam bahasa Indonesia.
 */
const BUILDINGS = [
  { id: 'rumah-sakit', name: 'Rumah Sakit', image: 'imgReference/bangunan/rumah-sakit.svg' },
  { id: 'pom-bensin', name: 'Pom Bensin', image: 'imgReference/bangunan/pom-bensin.svg' },
  { id: 'mini-market', name: 'Mini Market', image: 'imgReference/bangunan/mini-market.svg' },
  { id: 'sekolah', name: 'Sekolah', image: 'imgReference/bangunan/sekolah.svg' },
  { id: 'kantor-polisi', name: 'Kantor Polisi', image: 'imgReference/bangunan/kantor-polisi.svg' },
  { id: 'pemadam-kebakaran', name: 'Pemadam Kebakaran', image: 'imgReference/bangunan/pemadam-kebakaran.svg' },
  { id: 'kantor-pos', name: 'Kantor Pos', image: 'imgReference/bangunan/kantor-pos.svg' },
  { id: 'perpustakaan', name: 'Perpustakaan', image: 'imgReference/bangunan/perpustakaan.svg' },
  { id: 'stasiun-kereta', name: 'Stasiun Kereta', image: 'imgReference/bangunan/stasiun-kereta.svg' },
  { id: 'bandara', name: 'Bandara', image: 'imgReference/bangunan/bandara.svg' }
];

const TEXT_QUIZ_CONFIG = {
  vehicles: {
    items: VEHICLES,
    heading: 'Apa nama kendaraan berat ini?',
    alt: 'Gambar kendaraan berat untuk ditebak namanya',
    prompt: 'Ketuk nama kendaraan berat yang sesuai gambar!',
    noun: 'kendaraan'
  },
  buildings: {
    items: BUILDINGS,
    heading: 'Apa nama bangunan ini?',
    alt: 'Gambar bangunan untuk ditebak namanya',
    prompt: 'Ketuk nama bangunan yang sesuai gambar!',
    noun: 'bangunan'
  }
};

const OPTION_COUNT = 3;

const questionHeading = document.getElementById('question-heading');
const animalCardEl = document.querySelector('.animal-card');
const animalImg = document.getElementById('animal-img');
const animalNameEl = document.getElementById('animal-name');
const singleOptionsArea = document.getElementById('single-options-area');
const optionsGrid = document.getElementById('options-grid');
const matchStage = document.getElementById('match-stage');
const matchBoard = document.getElementById('match-board');
const matchLeftCol = document.getElementById('match-left-col');
const matchRightCol = document.getElementById('match-right-col');
const matchLinesSvg = document.getElementById('match-lines-svg');
const feedbackBanner = document.getElementById('feedback-banner');
const feedbackText = document.getElementById('feedback-text');
const nextRoundBtn = document.getElementById('next-round-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const soundToggleBtn = document.getElementById('sound-toggle');
const soundLabel = document.getElementById('sound-label');
const scoreValueEl = document.getElementById('score-value');
const modeButtons = {
  animals: document.getElementById('mode-animals-btn'),
  vehicles: document.getElementById('mode-vehicles-btn'),
  buildings: document.getElementById('mode-buildings-btn'),
  match: document.getElementById('mode-match-btn')
};

let currentMode = 'animals'; // 'animals' | 'vehicles' | 'buildings' | 'match'
let soundEnabled = true;
let score = 0;
let roundSolved = false;
let lastTargetIndex = -1;
let lastPromptId = { animals: null, vehicles: null, buildings: null };
let decks = { animals: [], vehicles: [], buildings: [] };
let currentPrompt = ANIMALS[0];
let currentTargetId = 'wortel';
let audioCtx = null;

// State untuk mode Tarik Benang ('match')
let matchState = {
  selectedAnimalId: null,
  draggingAnimalId: null,
  dragStartPt: null,
  connectedPairs: [], // [{ animalId, foodId }]
  pointerMoved: false
};

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

/** Menangani klik pada salah satu kartu opsi (Mode 1-3). */
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

    if (currentMode === 'animals') {
      feedbackText.textContent = `Hore! Benar, ${currentPrompt.name} suka ${item.name}!`;
    } else {
      animalNameEl.textContent = item.name;
      animalNameEl.hidden = false;
      feedbackText.textContent = `Hore! Benar, ini ${item.name}!`;
    }

    feedbackBanner.className = 'feedback-banner is-success';
    nextRoundBtn.hidden = false;
  } else {
    playTryAgainSound();
    cardEl.classList.remove('is-wrong');
    void cardEl.offsetWidth;
    cardEl.classList.add('is-wrong');

    feedbackBanner.className = 'feedback-banner is-try-again';
    if (currentMode === 'animals') {
      feedbackText.textContent = `Ups, itu ${item.name}. Coba pilih makanan kesukaan ${currentPrompt.name} ya!`;
    } else {
      const noun = TEXT_QUIZ_CONFIG[currentMode].noun;
      feedbackText.textContent = `Ups, bukan ${item.name}. Coba pilih nama ${noun} yang tepat ya!`;
    }
  }
}

/* ================= MODE 4: TARIK BENANG ================= */

/** Menghitung posisi titik jangkar relatif terhadap matchBoard. */
function getAnchorPoint(el) {
  const boardRect = matchBoard.getBoundingClientRect();
  const anchor = el.querySelector('.match-anchor') || el;
  const rect = anchor.getBoundingClientRect();
  return {
    x: rect.left + rect.width / 2 - boardRect.left,
    y: rect.top + rect.height / 2 - boardRect.top
  };
}

/** Menggambar garis lengkung SVG antara dua titik. */
function createCurvePath(p1, p2, color, isDashed) {
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  const dx = Math.abs(p2.x - p1.x) * 0.45;
  const d = `M ${p1.x} ${p1.y} C ${p1.x + dx} ${p1.y}, ${p2.x - dx} ${p2.y}, ${p2.x} ${p2.y}`;
  path.setAttribute('d', d);
  path.setAttribute('fill', 'none');
  path.setAttribute('stroke', color);
  path.setAttribute('stroke-width', isDashed ? '5' : '6');
  path.setAttribute('stroke-linecap', 'round');
  if (isDashed) {
    path.setAttribute('stroke-dasharray', '10 8');
  }
  return path;
}

/** Menggambar ulang semua benang yang sudah terhubung + benang aktif saat ditarik. */
function renderMatchLines(liveEndPt = null) {
  matchLinesSvg.innerHTML = '';

  matchState.connectedPairs.forEach(({ animalId, foodId }) => {
    const leftEl = matchLeftCol.querySelector(`[data-animal-id="${animalId}"]`);
    const rightEl = matchRightCol.querySelector(`[data-food-id="${foodId}"]`);
    if (leftEl && rightEl) {
      matchLinesSvg.appendChild(createCurvePath(getAnchorPoint(leftEl), getAnchorPoint(rightEl), '#2E7D32', false));
    }
  });

  if (matchState.draggingAnimalId && matchState.dragStartPt && liveEndPt) {
    matchLinesSvg.appendChild(createCurvePath(matchState.dragStartPt, liveEndPt, '#E65100', true));
  }
}

/** Mengecek apakah pasangan hewan dan makanan cocok. */
function attemptMatchConnection(animalId, foodId) {
  const animal = ANIMALS.find((a) => a.id === animalId);
  const food = FOOD_ITEMS.find((f) => f.id === foodId);
  const leftEl = matchLeftCol.querySelector(`[data-animal-id="${animalId}"]`);
  const rightEl = matchRightCol.querySelector(`[data-food-id="${foodId}"]`);
  if (!animal || !food || !leftEl || !rightEl) return;

  if (leftEl.disabled || rightEl.disabled) return;

  matchState.selectedAnimalId = null;
  matchLeftCol.querySelectorAll('.match-item').forEach((el) => el.classList.remove('is-selected'));

  if (animal.favoriteId === food.id) {
    playSuccessSound();
    score += 1;
    scoreValueEl.textContent = String(score);

    leftEl.disabled = true;
    rightEl.disabled = true;
    leftEl.classList.add('is-matched');
    rightEl.classList.add('is-matched');
    leftEl.appendChild(createCheckBadge());
    rightEl.appendChild(createCheckBadge());

    matchState.connectedPairs.push({ animalId: animal.id, foodId: food.id });
    renderMatchLines();

    if (matchState.connectedPairs.length === OPTION_COUNT) {
      roundSolved = true;
      feedbackBanner.className = 'feedback-banner is-success';
      feedbackText.textContent = 'Hebat! Semua benang berhasil terhubung dengan benar!';
      nextRoundBtn.hidden = false;
    } else {
      feedbackBanner.className = 'feedback-banner is-success';
      feedbackText.textContent = `Benar! ${animal.name} suka ${food.name}. Lanjutkan pasangan lainnya!`;
    }
  } else {
    playTryAgainSound();
    rightEl.classList.remove('is-wrong');
    void rightEl.offsetWidth;
    rightEl.classList.add('is-wrong');

    feedbackBanner.className = 'feedback-banner is-try-again';
    feedbackText.textContent = `Ups, ${animal.name} tidak makan ${food.name}. Benang tidak terhubung, coba lagi ya!`;
  }
}

/** Membuat satu kartu item untuk papan Tarik Benang. */
function createMatchCard(item, side) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = `match-item ${side === 'left' ? 'is-left' : 'is-right'}`;
  btn.setAttribute('aria-label', side === 'left' ? `Hewan ${item.name}` : `Makanan ${item.name}`);

  if (side === 'left') {
    btn.dataset.animalId = item.id;
  } else {
    btn.dataset.foodId = item.id;
  }

  const img = document.createElement('img');
  img.className = 'match-thumb';
  img.src = item.image;
  img.alt = `Gambar ${item.name}`;
  img.width = 60;
  img.height = 60;
  img.draggable = false;

  const label = document.createElement('span');
  label.className = 'match-name';
  label.textContent = item.name;

  const anchor = document.createElement('span');
  anchor.className = 'match-anchor';
  anchor.setAttribute('aria-hidden', 'true');

  btn.appendChild(img);
  btn.appendChild(label);
  btn.appendChild(anchor);
  return btn;
}

/** Merender ronde baru untuk mode Tarik Benang (3 hewan + 3 makanan teracak, murni drag & drop). */
function startMatchRound() {
  matchState = {
    draggingAnimalId: null,
    dragStartPt: null,
    connectedPairs: [],
    pointerMoved: false
  };

  const chosenAnimals = shuffleArray(ANIMALS).slice(0, OPTION_COUNT);
  const targetFoods = chosenAnimals.map((a) => FOOD_ITEMS.find((f) => f.id === a.favoriteId));

  // Acak urutan makanan dan pastikan tidak sejajar persis semuanya
  let mixedFoods = shuffleArray(targetFoods);
  const allAligned = chosenAnimals.every((a, idx) => a.favoriteId === mixedFoods[idx].id);
  if (allAligned && mixedFoods.length > 1) {
    [mixedFoods[0], mixedFoods[1]] = [mixedFoods[1], mixedFoods[0]];
  }

  matchLeftCol.innerHTML = '';
  matchRightCol.innerHTML = '';
  matchLinesSvg.innerHTML = '';

  chosenAnimals.forEach((animal) => {
    const card = createMatchCard(animal, 'left');
    card.addEventListener('pointerdown', (e) => {
      if (card.disabled || roundSolved) return;
      e.preventDefault();
      matchState.draggingAnimalId = animal.id;
      matchState.dragStartPt = getAnchorPoint(card);
      matchState.pointerMoved = false;
      card.classList.add('is-dragging');
    });
    matchLeftCol.appendChild(card);
  });

  mixedFoods.forEach((food) => {
    const card = createMatchCard(food, 'right');
    matchRightCol.appendChild(card);
  });
}

function handleGlobalMatchMove(e) {
  if (currentMode !== 'match' || !matchState.draggingAnimalId) return;
  matchState.pointerMoved = true;

  const boardRect = matchBoard.getBoundingClientRect();
  renderMatchLines({
    x: e.clientX - boardRect.left,
    y: e.clientY - boardRect.top
  });

  matchRightCol.querySelectorAll('.match-item').forEach((el) => el.classList.remove('is-drop-hover'));
  const hoverTarget = document.elementFromPoint(e.clientX, e.clientY);
  const foodCard = hoverTarget ? hoverTarget.closest('.match-item.is-right') : null;
  if (foodCard && !foodCard.disabled) {
    foodCard.classList.add('is-drop-hover');
  }
}

function handleGlobalMatchUp(e) {
  if (currentMode !== 'match' || !matchState.draggingAnimalId) return;

  const animalId = matchState.draggingAnimalId;
  const moved = matchState.pointerMoved;

  matchState.draggingAnimalId = null;
  matchState.dragStartPt = null;
  matchLeftCol.querySelectorAll('.match-item').forEach((el) => el.classList.remove('is-dragging'));
  matchRightCol.querySelectorAll('.match-item').forEach((el) => el.classList.remove('is-drop-hover'));
  renderMatchLines();

  if (!moved) {
    feedbackBanner.className = 'feedback-banner';
    feedbackText.textContent = 'Tahan lalu tarik benang dari gambar hewan ke gambar makanannya ya!';
    return;
  }

  const dropTarget = document.elementFromPoint(e.clientX, e.clientY);
  const foodCard = dropTarget ? dropTarget.closest('.match-item.is-right') : null;
  if (foodCard && foodCard.dataset.foodId && !foodCard.disabled) {
    attemptMatchConnection(animalId, foodCard.dataset.foodId);
  }
}

window.addEventListener('pointermove', handleGlobalMatchMove);
window.addEventListener('pointerup', handleGlobalMatchUp);
window.addEventListener('pointercancel', handleGlobalMatchUp);

/* ================= ORCHESTRATION ================= */

/** Merender ronde baru sesuai mode permainan yang aktif. */
function startRound() {
  roundSolved = false;
  optionsGrid.innerHTML = '';
  feedbackBanner.className = 'feedback-banner';
  nextRoundBtn.hidden = true;

  const isMatchMode = currentMode === 'match';
  animalCardEl.hidden = isMatchMode;
  singleOptionsArea.hidden = isMatchMode;
  matchStage.hidden = !isMatchMode;

  if (isMatchMode) {
    questionHeading.textContent = 'Tarik benang dari hewan ke makanannya!';
    feedbackText.textContent = 'Tarik garis (atau ketuk hewan lalu makanannya) untuk menghubungkan!';
    startMatchRound();
    return;
  }

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
    const config = TEXT_QUIZ_CONFIG[currentMode];
    currentPrompt = pickNextFromDeck(currentMode, config.items);
    currentTargetId = currentPrompt.id;

    questionHeading.textContent = config.heading;
    animalImg.src = currentPrompt.image;
    animalImg.alt = config.alt;
    animalNameEl.textContent = '';
    animalNameEl.hidden = true;
    feedbackText.textContent = config.prompt;

    const roundItems = pickRoundOptions(config.items, currentTargetId);
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

  Object.entries(modeButtons).forEach(([modeKey, btn]) => {
    const active = modeKey === newMode;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  startRound();
}

soundToggleBtn.addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  soundToggleBtn.setAttribute('aria-pressed', String(soundEnabled));
  soundToggleBtn.setAttribute('aria-label', soundEnabled ? 'Matikan suara' : 'Aktifkan suara');
  soundLabel.textContent = soundEnabled ? 'Suara Aktif' : 'Suara Mati';
});

Object.entries(modeButtons).forEach(([modeKey, btn]) => {
  btn.addEventListener('click', () => switchMode(modeKey));
});

window.addEventListener('resize', () => {
  if (currentMode === 'match') {
    renderMatchLines();
  }
});

shuffleBtn.addEventListener('click', startRound);
nextRoundBtn.addEventListener('click', startRound);

startRound();
