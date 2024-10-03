let keys = [];

function addKey() {
    const newKey = document.getElementById('newKey').value;
    if (newKey) {
        keys.push(newKey);
        document.getElementById('newKey').value = '';
        updateKeyList();
    }
}

function updateKeyList() {
    const keyList = document.getElementById('keyList');
    keyList.innerHTML = '';
    keys.forEach(key => {
        const li = document.createElement('li');
        li.textContent = key;
        keyList.appendChild(li);
    });
}
