document.addEventListener('DOMContentLoaded', () => {

    // --- STATE VARIABLES ---
    let heartCount = 0;
    let coinCount = 100;
    let copyCount = 0;
    const CALL_COST = 20;

    // --- DOM ELEMENT SELECTORS ---
    const heartCountEl = document.getElementById('heart-count');
    const coinCountEl = document.getElementById('coin-count');
    const copyCountEl = document.getElementById('copy-count');

    const allHeartBtns = document.querySelectorAll('.heart-btn');
    const allCopyBtns = document.querySelectorAll('.btn-copy');
    const allCallBtns = document.querySelectorAll('.btn-call');

    const historyListEl = document.getElementById('history-list');
    const clearHistoryBtn = document.getElementById('clear-history-btn');

    // --- FUNCTIONS ---

    /**
     * Updates the UI text content for navbar counters.
     */
    const updateCountersUI = () => {
        heartCountEl.textContent = heartCount;
        coinCountEl.textContent = coinCount;
        copyCountEl.textContent = copyCount;
    };

    /**
     * Handles clicking the heart icon on a card.
     */
    const handleHeartClick = (event) => {
        const heartBtn = event.currentTarget;
        // Prevent multiple clicks on the same heart
        if (!heartBtn.classList.contains('liked')) {
            heartBtn.classList.add('liked');
            heartBtn.textContent = '❤️'; // Change to solid heart
            heartCount++;
            updateCountersUI();
        }
    };

    
    