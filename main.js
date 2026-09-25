/**
 * ATELIER VANCE — FINE ART & DOCUMENTARY PHOTOGRAPHY
 * Interactive Hero Experience & Authentic Analog Controls
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // Authentic Photography Collections Data (Unsplash Curated - Real Photos)
  // No AI watermarks, no synthetic plastic looks, pure natural light & film
  // =========================================================================
  const collections = [
    {
      id: 'editorial',
      name: 'Editorial & Fashion',
      center: {
        img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=85',
        title: "L'Heure Dorée, Paris",
        location: '35mm Summilux • Natural sidelight at 18:40',
        film: 'KODAK PORTRA 400',
        specs: '1/500s • f/1.4 • ISO 200 • 50mm',
        gear: 'Leica M6 • Summilux 50mm f/1.4 ASPH',
        exposure: '1/500s at f/1.4 • ISO 200',
        place: 'Palais-Royal, Paris',
        story: 'Natural sunset raking across linen and skin. Unfiltered, unhurried, captured on 35mm film emulsion during Paris Fashion Week.'
      },
      left: {
        img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85',
        tag: 'Editorial • Milan',
        caption: 'Afternoon Solitude in Silk'
      },
      right: {
        img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=85',
        tag: 'Portraits • Arles',
        caption: 'Chasing Shadows in Linen'
      }
    },
    {
      id: 'portraits',
      name: 'Intimate Portraits',
      center: {
        img: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=1400&q=85',
        title: 'Solitude & Resonance, Florence',
        location: 'Contax T2 • Morning window light',
        film: 'ILFORD HP5 PLUS 400',
        specs: '1/250s • f/2.8 • ISO 400 • 38mm',
        gear: 'Contax T2 • Carl Zeiss Sonnar 38mm f/2.8',
        exposure: '1/250s at f/2.8 • ISO 400',
        place: 'Oltrarno Studio, Florence',
        story: 'A quiet study in direct natural light and monochrome contrast. Deep shadows revealing raw posture and genuine human presence.'
      },
      left: {
        img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=85',
        tag: 'Portraits • Lisbon',
        caption: 'The Golden Hour Gaze'
      },
      right: {
        img: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&w=900&q=85',
        tag: 'Analog • Berlin',
        caption: 'Reflections on Wet Asphalt'
      }
    },
    {
      id: 'analog',
      name: '35mm Film Stories',
      center: {
        img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1400&q=85',
        title: 'Candid Grace in Kyoto',
        location: 'Hasselblad 500C/M • 80mm Planar • Soft Overcast',
        film: 'FUJIFILM PRO 400H',
        specs: '1/125s • f/2.8 • ISO 400 • 80mm',
        gear: 'Hasselblad 500C/M • Carl Zeiss Planar 80mm f/2.8',
        exposure: '1/125s at f/2.8 • ISO 400',
        place: 'Gion District, Kyoto',
        story: 'Natural medium-format tonal rolloff. The genuine warmth of human laughter caught between rain showers on traditional cedar streets.'
      },
      left: {
        img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=85',
        tag: 'Architecture • Provence',
        caption: 'Limestone & Afternoon Heat'
      },
      right: {
        img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85',
        tag: 'Documentary • Tuscany',
        caption: 'Twilight Under Ancient Olive Groves'
      }
    },
    {
      id: 'weddings',
      name: 'Documentary Weddings',
      center: {
        img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85',
        title: 'A Tuscan Dusk Vow',
        location: 'Leica M10-R • 35mm Summilux • Candleglow & Sunset',
        film: 'KODAK TRI-X 400 (PUSHED)',
        specs: '1/60s • f/1.4 • ISO 800 • 35mm',
        gear: 'Leica M10-R • Summilux-M 35mm f/1.4 ASPH',
        exposure: '1/60s at f/1.4 • ISO 800',
        place: 'Val d’Orcia, Tuscany',
        story: 'No rehearsed smiles, no forced choreography. An unscripted embrace during the last five minutes of blue hour in the hills.'
      },
      left: {
        img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85',
        tag: 'Stories • Venice',
        caption: 'The Canal Reflection'
      },
      right: {
        img: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=900&q=85',
        tag: 'Portraits • Rome',
        caption: 'Marble & Warm Wind'
      }
    }
  ];

  let currentIndex = 0;
  let isSoundEnabled = true;
  let isGrainEnabled = true;
  let isViewfinderVisible = false;

  // DOM Elements
  const imgCenter = document.getElementById('imgCenter');
  const imgLeft = document.getElementById('imgLeft');
  const imgRight = document.getElementById('imgRight');
  const centerTitle = document.getElementById('centerTitle');
  const centerLocation = document.getElementById('centerLocation');
  const centerFilmBadge = document.getElementById('centerFilmBadge');
  const vfFilm = document.getElementById('vfFilm');
  const vfSpecs = document.getElementById('vfSpecs');
  const tagLeft = document.getElementById('tagLeft');
  const captionLeft = document.getElementById('captionLeft');
  const tagRight = document.getElementById('tagRight');
  const captionRight = document.getElementById('captionRight');
  const shutterFlash = document.getElementById('shutterFlash');
  const filterTabs = document.querySelectorAll('.filter-tab');
  const dotBtns = document.querySelectorAll('.dot-btn');
  const prevBtn = document.getElementById('prevSlideBtn');
  const nextBtn = document.getElementById('nextSlideBtn');
  const vfToggleBtn = document.getElementById('vfToggleBtn');
  const viewfinderHud = document.getElementById('viewfinderHud');
  const cardCenter = document.getElementById('cardCenter');
  const cardCenterInner = document.getElementById('cardCenterInner');
  const cardLeft = document.getElementById('cardLeft');
  const cardRight = document.getElementById('cardRight');

  // Sound & Grain Elements
  const grainToggleBtn = document.getElementById('grainToggleBtn');
  const grainStatus = document.getElementById('grainStatus');
  const filmGrainOverlay = document.getElementById('filmGrainOverlay');
  const shutterSoundBtn = document.getElementById('shutterSoundBtn');
  const soundStatus = document.getElementById('soundStatus');

  // Lightbox Elements
  const inspectShotBtn = document.getElementById('inspectShotBtn');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  const lbCloseSecondaryBtn = document.getElementById('lbCloseSecondaryBtn');
  const lightboxImg = document.getElementById('lightboxImg');
  const lbTag = document.getElementById('lbTag');
  const lbTitle = document.getElementById('lbTitle');
  const lbDesc = document.getElementById('lbDesc');
  const lbGear = document.getElementById('lbGear');
  const lbFilm = document.getElementById('lbFilm');
  const lbExposure = document.getElementById('lbExposure');
  const lbLocation = document.getElementById('lbLocation');
  const lbInquireBtn = document.getElementById('lbInquireBtn');

  // Inquire Modal Elements
  const headerInquireBtn = document.getElementById('headerInquireBtn');
  const mobileInquireBtn = document.getElementById('mobileInquireBtn');
  const exploreWorksBtn = document.getElementById('exploreWorksBtn');
  const inquireModal = document.getElementById('inquireModal');
  const inquireCloseBtn = document.getElementById('inquireCloseBtn');
  const inquireBackdrop = document.getElementById('inquireBackdrop');
  const inquireForm = document.getElementById('inquireForm');
  const inquirySuccess = document.getElementById('inquirySuccess');
  const successCloseBtn = document.getElementById('successCloseBtn');

  // Showreel Modal Elements
  const watchShowreelBtn = document.getElementById('watchShowreelBtn');
  const mobileShowreelBtn = document.getElementById('mobileShowreelBtn');
  const showreelModal = document.getElementById('showreelModal');
  const showreelCloseBtn = document.getElementById('showreelCloseBtn');
  const showreelBackdrop = document.getElementById('showreelBackdrop');
  const showreelDoneBtn = document.getElementById('showreelDoneBtn');
  const showreelVideo = document.getElementById('showreelVideo');

  // Navigation & Header Elements
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const siteHeader = document.getElementById('siteHeader');

  // =========================================================================
  // Authentic Camera Shutter Synthesizer (Web Audio API)
  // Re-creates tactile mechanical leaf shutter click without any external files
  // =========================================================================
  let audioCtx = null;

  function playShutterSound() {
    if (!isSoundEnabled) return;

    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }

      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      const now = audioCtx.currentTime;

      // 1. Shutter Curtain Click 1 (Opening)
      const osc1 = audioCtx.createOscillator();
      const gain1 = audioCtx.createGain();
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(1400, now);
      osc1.frequency.exponentialRampToValueAtTime(120, now + 0.04);
      gain1.gain.setValueAtTime(0.3, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.045);
      osc1.connect(gain1);
      gain1.connect(audioCtx.destination);
      osc1.start(now);
      osc1.stop(now + 0.05);

      // 2. Mechanical Shutter Noise Texture (Leaf click)
      const bufferSize = audioCtx.sampleRate * 0.05;
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
      }
      const noise = audioCtx.createBufferSource();
      noise.buffer = buffer;
      const noiseFilter = audioCtx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.value = 2400;
      noiseFilter.Q.value = 3;
      const noiseGain = audioCtx.createGain();
      noiseGain.gain.setValueAtTime(0.25, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      noise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(audioCtx.destination);
      noise.start(now);

      // 3. Shutter Return Click (Closing after 60ms)
      const osc2 = audioCtx.createOscillator();
      const gain2 = audioCtx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(900, now + 0.06);
      osc2.frequency.exponentialRampToValueAtTime(80, now + 0.095);
      gain2.gain.setValueAtTime(0.2, now + 0.06);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
      osc2.connect(gain2);
      gain2.connect(audioCtx.destination);
      osc2.start(now + 0.06);
      osc2.stop(now + 0.11);
    } catch (e) {
      console.warn('Audio shutter playback prevented by policy:', e);
    }
  }

  // =========================================================================
  // Collection Switcher & Gallery Display Update
  // =========================================================================
  function renderCollection(index) {
    if (index < 0 || index >= collections.length) return;
    currentIndex = index;
    const current = collections[currentIndex];

    // Trigger visual camera shutter flash
    shutterFlash.classList.add('flashing');
    setTimeout(() => {
      shutterFlash.classList.remove('flashing');
    }, 120);

    // Play tactile mechanical shutter sound
    playShutterSound();

    // Update Center Frame
    imgCenter.src = current.center.img;
    imgCenter.alt = current.center.title;
    centerTitle.textContent = current.center.title;
    centerLocation.textContent = current.center.location;
    centerFilmBadge.textContent = `${current.center.film} • 35MM ANALOG`;
    vfFilm.textContent = current.center.film;
    vfSpecs.textContent = current.center.specs;

    // Update Left Frame
    imgLeft.src = current.left.img;
    imgLeft.alt = current.left.caption;
    tagLeft.innerHTML = current.left.tag;
    captionLeft.textContent = current.left.caption;

    // Update Right Frame
    imgRight.src = current.right.img;
    imgRight.alt = current.right.caption;
    tagRight.innerHTML = current.right.tag;
    captionRight.textContent = current.right.caption;

    // Update Filter Tabs active state
    filterTabs.forEach((tab) => {
      const isMatch = tab.getAttribute('data-category') === current.id;
      tab.classList.toggle('active', isMatch);
      tab.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });

    // Update Pagination Dots
    dotBtns.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });
  }

  // Filter Tabs Event Listeners
  filterTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      renderCollection(index);
    });
  });

  // Next / Prev Arrows
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const newIndex = (currentIndex - 1 + collections.length) % collections.length;
      renderCollection(newIndex);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const newIndex = (currentIndex + 1) % collections.length;
      renderCollection(newIndex);
    });
  }

  // Dot Navigation
  dotBtns.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      renderCollection(idx);
    });
  });

  // Clicking side cards swaps them into center focus
  if (cardLeft) {
    cardLeft.addEventListener('click', () => {
      const prevIndex = (currentIndex - 1 + collections.length) % collections.length;
      renderCollection(prevIndex);
    });
  }

  if (cardRight) {
    cardRight.addEventListener('click', () => {
      const nextIndex = (currentIndex + 1) % collections.length;
      renderCollection(nextIndex);
    });
  }

  // =========================================================================
  // Interactive 3D Perspective Mouse Tilt Effect
  // =========================================================================
  if (cardCenter && cardCenterInner) {
    cardCenter.addEventListener('mousemove', (e) => {
      const rect = cardCenter.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6.5; // Max 6.5deg
      const rotateY = ((x - centerX) / centerX) * 6.5;

      cardCenterInner.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`;
    });

    cardCenter.addEventListener('mouseleave', () => {
      cardCenterInner.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  }

  // =========================================================================
  // Viewfinder Mode Toggle
  // =========================================================================
  if (vfToggleBtn && viewfinderHud) {
    vfToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      isViewfinderVisible = !isViewfinderVisible;
      viewfinderHud.classList.toggle('visible', isViewfinderVisible);
      vfToggleBtn.classList.toggle('active', isViewfinderVisible);
      
      if (isViewfinderVisible) {
        vfToggleBtn.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
          <span>Hide HUD</span>
        `;
      } else {
        vfToggleBtn.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4"></path>
          </svg>
          <span>Viewfinder</span>
        `;
      }

      playShutterSound();
    });
  }

  // =========================================================================
  // Film Grain Toggle & Audio Mute
  // =========================================================================
  if (grainToggleBtn && filmGrainOverlay && grainStatus) {
    grainToggleBtn.addEventListener('click', () => {
      isGrainEnabled = !isGrainEnabled;
      filmGrainOverlay.classList.toggle('disabled', !isGrainEnabled);
      grainStatus.textContent = isGrainEnabled ? 'ON' : 'OFF';
      grainStatus.style.color = isGrainEnabled ? 'var(--accent-purple)' : 'var(--text-light)';
    });
  }

  if (shutterSoundBtn && soundStatus) {
    shutterSoundBtn.addEventListener('click', () => {
      isSoundEnabled = !isSoundEnabled;
      soundStatus.textContent = isSoundEnabled ? 'SFX' : 'MUTED';
      soundStatus.style.color = isSoundEnabled ? 'var(--accent-purple)' : 'var(--text-light)';
      if (isSoundEnabled) playShutterSound();
    });
  }

  // =========================================================================
  // Lightbox Modal Handling
  // =========================================================================
  function openLightbox() {
    const cur = collections[currentIndex];
    lightboxImg.src = cur.center.img;
    lightboxImg.alt = cur.center.title;
    lbTag.textContent = `${cur.name} • Master Print`;
    lbTitle.textContent = cur.center.title;
    lbDesc.textContent = cur.center.story;
    lbGear.textContent = cur.center.gear;
    lbFilm.textContent = cur.center.film;
    lbExposure.textContent = cur.center.exposure;
    lbLocation.textContent = cur.center.place;

    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (inspectShotBtn) inspectShotBtn.addEventListener('click', openLightbox);
  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
  if (lbCloseSecondaryBtn) lbCloseSecondaryBtn.addEventListener('click', closeLightbox);

  // Keyboard Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeInquireModal();
      closeShowreel();
    }
  });

  // =========================================================================
  // Inquire Commission Modal Handling
  // =========================================================================
  function openInquireModal(prefillType) {
    closeLightbox();
    inquireModal.classList.add('active');
    inquireModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    if (prefillType) {
      const select = document.getElementById('sessionType');
      if (select) select.value = prefillType;
    }
  }

  function closeInquireModal() {
    inquireModal.classList.remove('active');
    inquireModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    
    // Reset form success state after closing
    setTimeout(() => {
      if (inquireForm) inquireForm.style.display = 'flex';
      if (inquirySuccess) inquirySuccess.style.display = 'none';
    }, 400);
  }

  if (headerInquireBtn) headerInquireBtn.addEventListener('click', () => openInquireModal());
  if (mobileInquireBtn) {
    mobileInquireBtn.addEventListener('click', () => {
      mobileDrawer.classList.remove('active');
      openInquireModal();
    });
  }
  if (exploreWorksBtn) exploreWorksBtn.addEventListener('click', () => openInquireModal());
  if (lbInquireBtn) lbInquireBtn.addEventListener('click', () => openInquireModal('portrait'));
  if (inquireCloseBtn) inquireCloseBtn.addEventListener('click', closeInquireModal);
  if (inquireBackdrop) inquireBackdrop.addEventListener('click', closeInquireModal);
  if (successCloseBtn) successCloseBtn.addEventListener('click', closeInquireModal);

  // Inquiry Form Submission
  if (inquireForm) {
    inquireForm.addEventListener('submit', (e) => {
      e.preventDefault();
      playShutterSound();

      // Show instant authentic feedback
      inquireForm.style.display = 'none';
      if (inquirySuccess) inquirySuccess.style.display = 'block';
    });
  }

  // =========================================================================
  // Showreel Video Modal Handling
  // =========================================================================
  function openShowreel() {
    showreelModal.classList.add('active');
    showreelModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (showreelVideo) {
      showreelVideo.currentTime = 0;
      showreelVideo.play().catch(() => {});
    }
  }

  function closeShowreel() {
    showreelModal.classList.remove('active');
    showreelModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (showreelVideo) showreelVideo.pause();
  }

  if (watchShowreelBtn) watchShowreelBtn.addEventListener('click', openShowreel);
  if (mobileShowreelBtn) {
    mobileShowreelBtn.addEventListener('click', () => {
      mobileDrawer.classList.remove('active');
      openShowreel();
    });
  }
  if (showreelCloseBtn) showreelCloseBtn.addEventListener('click', closeShowreel);
  if (showreelBackdrop) showreelBackdrop.addEventListener('click', closeShowreel);
  if (showreelDoneBtn) showreelDoneBtn.addEventListener('click', closeShowreel);

  // =========================================================================
  // Mobile Menu Drawer
  // =========================================================================
  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('active');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileMenuBtn.innerHTML = isOpen ? 
        `<span style="font-size: 1.5rem; line-height: 1;">&times;</span>` :
        `<span class="hamburger-line"></span><span class="hamburger-line"></span>`;
    });

    // Close mobile drawer when clicking a link
    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
        mobileMenuBtn.innerHTML = `<span class="hamburger-line"></span><span class="hamburger-line"></span>`;
      });
    });
  }

  // =========================================================================
  // Header Sticky Elevation on Scroll
  // =========================================================================
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  });

  // Initialize First Slide
  renderCollection(0);
});
