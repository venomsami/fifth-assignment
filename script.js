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

    /**
     * Handles clicking the copy button on a card.
     */
    const handleCopyClick = (event) => {
        const card = event.currentTarget.closest('.card');
        const numberToCopy = card.querySelector('.service-number').textContent;

        navigator.clipboard.writeText(numberToCopy)
            .then(() => {
                alert(`Copied "${numberToCopy}" to clipboard!`);
                copyCount++;
                updateCountersUI();
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
                alert('Failed to copy number.');
            });
    };

    /**
     * Handles clicking the call button on a card.
     */
    const handleCallClick = (event) => {
        if (coinCount < CALL_COST) {
            alert("You don't have enough coins to make a call!");
            return;
        }

        coinCount -= CALL_COST;
        updateCountersUI();

        const card = event.currentTarget.closest('.card');
        const serviceName = card.querySelector('.service-name').textContent;
        const serviceNumber = card.querySelector('.service-number').textContent;

        alert(`Calling ${serviceName} at ${serviceNumber}`);

        addToCallHistory(serviceName, serviceNumber);
    };

    /**
     * Adds a new entry to the call history section.
     */
    const addToCallHistory = (name, number) => {
        const callTime = new Date().toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });

        const historyItem = document.createElement('div');
        historyItem.classList.add('history-item');
        historyItem.innerHTML = `
            <div>
                <p class="service-name">${name}</p>
                <p>${number}</p>
            </div>
            <p class="call-time">${callTime}</p>
        `;
        historyListEl.prepend(historyItem); 
    };

    /**
     * Clears all entries from the call history.
     */
    const handleClearHistory = () => {
        historyListEl.innerHTML = '';
    };

    // --- EVENT LISTENERS ---
    allHeartBtns.forEach(btn => btn.addEventListener('click', handleHeartClick));
    allCopyBtns.forEach(btn => btn.addEventListener('click', handleCopyClick));
    allCallBtns.forEach(btn => btn.addEventListener('click', handleCallClick));
    clearHistoryBtn.addEventListener('click', handleClearHistory);

    // --- INITIALIZATION ---
    updateCountersUI(); 
});