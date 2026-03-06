(function () {
  'use strict';

  const PRESETS = [1, 1.25, 1.5, 1.75, 2];
  const DEFAULT_SPEED = 1.5;
  const MAX_RETRIES_PER_SECOND = 10;
  const THROTTLE_WINDOW_MS = 1000;

  let desiredSpeed = DEFAULT_SPEED;
  const processedVideos = new WeakSet();

  // Load saved speed from storage
  if (typeof chrome !== 'undefined' && chrome.storage) {
    chrome.storage.sync.get({ defaultSpeed: DEFAULT_SPEED }, function (data) {
      desiredSpeed = data.defaultSpeed;
      document.querySelectorAll('video').forEach(function (v) {
        v.playbackRate = desiredSpeed;
      });
      updateAllOverlays();
    });

    chrome.storage.onChanged.addListener(function (changes) {
      if (changes.defaultSpeed) {
        desiredSpeed = changes.defaultSpeed.newValue;
        document.querySelectorAll('video').forEach(function (v) {
          v.playbackRate = desiredSpeed;
        });
        updateAllOverlays();
      }
    });
  }

  function updateAllOverlays() {
    document.querySelectorAll('.vg-speed-overlay').forEach(function (overlay) {
      var buttons = overlay.querySelectorAll('.vg-speed-btn');
      buttons.forEach(function (btn) {
        var speed = parseFloat(btn.dataset.speed);
        btn.classList.toggle('vg-active', speed === desiredSpeed);
      });
    });
  }

  function createOverlay(video) {
    var wrapper = video.closest('.player_area, .player, [data-player], .video-player') || video.parentElement;
    if (!wrapper || wrapper.querySelector('.vg-speed-overlay')) return;

    // Ensure wrapper is positioned
    var wrapperStyle = getComputedStyle(wrapper);
    if (wrapperStyle.position === 'static') {
      wrapper.style.position = 'relative';
    }

    var overlay = document.createElement('div');
    overlay.className = 'vg-speed-overlay';

    var style = document.createElement('style');
    style.textContent = [
      '.vg-speed-overlay {',
      '  position: absolute;',
      '  top: 8px;',
      '  right: 8px;',
      '  z-index: 99999;',
      '  display: flex;',
      '  gap: 2px;',
      '  background: rgba(0,0,0,0.7);',
      '  border-radius: 6px;',
      '  padding: 3px;',
      '  opacity: 0;',
      '  transition: opacity 0.2s;',
      '  pointer-events: none;',
      '}',
      '.vg-speed-overlay.vg-visible {',
      '  opacity: 1;',
      '  pointer-events: auto;',
      '}',
      '.vg-speed-btn {',
      '  background: transparent;',
      '  color: #ccc;',
      '  border: none;',
      '  padding: 4px 7px;',
      '  font-size: 12px;',
      '  font-family: -apple-system, system-ui, sans-serif;',
      '  cursor: pointer;',
      '  border-radius: 4px;',
      '  line-height: 1;',
      '  font-weight: 500;',
      '}',
      '.vg-speed-btn:hover {',
      '  background: rgba(255,255,255,0.15);',
      '  color: #fff;',
      '}',
      '.vg-speed-btn.vg-active {',
      '  background: rgba(255,255,255,0.25);',
      '  color: #fff;',
      '  font-weight: 700;',
      '}'
    ].join('\n');

    if (!document.querySelector('#vg-styles')) {
      style.id = 'vg-styles';
      document.head.appendChild(style);
    }

    PRESETS.forEach(function (speed) {
      var btn = document.createElement('button');
      btn.className = 'vg-speed-btn' + (speed === desiredSpeed ? ' vg-active' : '');
      btn.textContent = speed + 'x';
      btn.dataset.speed = speed;
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        desiredSpeed = speed;
        video.playbackRate = speed;
        // Save to storage
        if (typeof chrome !== 'undefined' && chrome.storage) {
          chrome.storage.sync.set({ defaultSpeed: speed });
        }
        updateAllOverlays();
      });
      overlay.appendChild(btn);
    });

    wrapper.appendChild(overlay);

    // Show on hover over wrapper
    wrapper.addEventListener('mouseenter', function () {
      overlay.classList.add('vg-visible');
    });
    wrapper.addEventListener('mouseleave', function () {
      overlay.classList.remove('vg-visible');
    });
  }

  function initSpeedControl(video) {
    if (processedVideos.has(video)) return;
    processedVideos.add(video);

    video.playbackRate = desiredSpeed;

    video.addEventListener('loadedmetadata', function () {
      video.playbackRate = desiredSpeed;
    }, { once: true });

    // Re-apply on play (Vimeo resets speed on some state changes)
    video.addEventListener('play', function () {
      if (video.playbackRate !== desiredSpeed) {
        video.playbackRate = desiredSpeed;
      }
    });

    // Track user-initiated vs Vimeo-programmatic speed changes
    // User clicks Vimeo speed menu → ratechange fires with isTrusted context
    // Vimeo resets speed programmatically → we re-apply desiredSpeed
    var settingSpeed = false;
    var lastUserInteraction = 0;

    // Any click/touch on the page = potential user speed change via Vimeo menu
    document.addEventListener('click', function () {
      lastUserInteraction = Date.now();
    }, true);

    video.addEventListener('ratechange', function () {
      if (settingSpeed) return;
      if (video.playbackRate === desiredSpeed) return;

      // If ratechange happens within 500ms of a click, treat as user-initiated
      var timeSinceInteraction = Date.now() - lastUserInteraction;
      if (timeSinceInteraction < 500) {
        // User changed speed via Vimeo's own menu — accept it
        desiredSpeed = video.playbackRate;
        if (typeof chrome !== 'undefined' && chrome.storage) {
          chrome.storage.sync.set({ defaultSpeed: desiredSpeed });
        }
        updateAllOverlays();
        return;
      }

      // Vimeo programmatic reset — re-apply desired speed
      settingSpeed = true;
      video.playbackRate = desiredSpeed;
      settingSpeed = false;
    });

    // Create overlay after a short delay to ensure player DOM is ready
    setTimeout(function () { createOverlay(video); }, 500);
  }

  document.querySelectorAll('video').forEach(initSpeedControl);

  var observer = new MutationObserver(function (mutations) {
    for (var i = 0; i < mutations.length; i++) {
      var addedNodes = mutations[i].addedNodes;
      for (var j = 0; j < addedNodes.length; j++) {
        var node = addedNodes[j];
        if (node.nodeType !== Node.ELEMENT_NODE) continue;

        if (node.nodeName === 'VIDEO') {
          initSpeedControl(node);
        } else if (node.querySelectorAll) {
          var videos = node.querySelectorAll('video');
          for (var k = 0; k < videos.length; k++) {
            initSpeedControl(videos[k]);
          }
        }
      }
    }
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
