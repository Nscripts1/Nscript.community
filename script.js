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
    const newKey = document.getElementById('newKey').value.trim();
    const expirationDate = document.getElementById('expirationDate').value;
    if (newKey && !keys.some(key => key.value === newKey)) {
        keys.push({ value: newKey, expiration: expirationDate });
        document.getElementById('newKey').value = '';
        document.getElementById('expirationDate').value = '';
        saveKeys();
        updateKeyList();
    }
}

// Remove a key
function removeKey(keyValue) {
    keys = keys.filter(key => key.value !== keyValue);
    saveKeys();
    updateKeyList();
}

// Update the key list display
function updateKeyList() {
    const keyList = document.getElementById('keyList');
    keyList.innerHTML = '';
    const now = new Date();
    keys = keys.filter(key => !key.expiration || new Date(key.expiration) > now);
    keys.forEach(key => {
        const li = document.createElement('li');
        li.textContent = `${key.value} (Expires: ${key.expiration || 'Never'})`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeKey(key.value);
        li.appendChild(removeButton);
        keyList.appendChild(li);
    });
    saveKeys();
}

// Load keys when the page loads
window.onload = loadKeys;
