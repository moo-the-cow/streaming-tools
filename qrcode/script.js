document.getElementById('generate-btn').addEventListener('click', function() {
    const inputText = document.getElementById('text-input').value;
    if (inputText) {
        generateQRCode(inputText);  // Generate QR code immediately
        addTextToList(inputText);
        saveToLocalStorage(inputText);
        document.getElementById('text-input').value = ''; // Clear input after adding
    }
});

function addTextToList(text) {
    const list = document.getElementById('text-list');

    const listItem = document.createElement('li');
    listItem.textContent = text;

    const showBtn = document.createElement('button');
    showBtn.textContent = 'Show QR';
    showBtn.classList.add('show-btn');
    showBtn.addEventListener('click', function() {
        generateQRCode(text);
    });

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', function() {
        list.removeChild(listItem);
        removeFromLocalStorage(text);
    });

    // Create a line break element
    const lineBreak = document.createElement('br');

    // Append Show QR and Remove buttons
    listItem.appendChild(showBtn);
    listItem.appendChild(removeBtn);
    listItem.appendChild(lineBreak);

    // Check if text starts with 'rtmp://'
    if (text.startsWith('rtmp://')) {
        const goproBtn = document.createElement('button');
        goproBtn.textContent = 'GoPro RTMP URL';
        goproBtn.classList.add('gopro-btn');
        goproBtn.addEventListener('click', function() {
            const rtmpText = `!MRTMP="${text}"`;
            generateQRCode(rtmpText); // Generate QR code for the RTMP URL
        });

        listItem.appendChild(goproBtn);
    }

    list.appendChild(listItem);
}

function generateQRCode(text) {
    const qr = new QRious({
        element: document.getElementById('qrcode-canvas'),
        size: 256,
        value: text
    });
}

function saveToLocalStorage(text) {
    let texts = JSON.parse(localStorage.getItem('qrTexts')) || [];
    texts.push(text);
    localStorage.setItem('qrTexts', JSON.stringify(texts));
}

function removeFromLocalStorage(text) {
    let texts = JSON.parse(localStorage.getItem('qrTexts')) || [];
    texts = texts.filter(t => t !== text);
    localStorage.setItem('qrTexts', JSON.stringify(texts));
}

function loadFromLocalStorage() {
    const texts = JSON.parse(localStorage.getItem('qrTexts')) || [];
    texts.forEach(text => addTextToList(text));
}

// Load saved texts on page load
window.onload = loadFromLocalStorage;
