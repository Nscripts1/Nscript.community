let keys = [];

// Load keys from local storage
function loadKeys() {
    const storedKeys = localStorage.getItem('keys');
    if (storedKeys) {
        keys = JSON.parse(storedKeys);
    }
    updateKeyList();
}

// Save keys to local storage
function saveKeys() {
    localStorage.setItem('keys', JSON.stringify(keys));
}

// Add a new key
function addKey() {
    const newKey = document.getElementById('newKey').value;
    if (newKey) {
        keys.push(newKey);
        document.getElementById('newKey').value = '';
        saveKeys();
        updateKeyList();
    }
}

// Update the key list display
function updateKeyList() {
    const keyList = document.getElementById('keyList');
    keyList.innerHTML = '';
    keys.forEach(key => {
        const li = document.createElement('li');
        li.textContent = key;
        keyList.appendChild(li);
    });
}

// Load keys when the page loads
window.onload = loadKeys;
