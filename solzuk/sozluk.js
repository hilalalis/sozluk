let words = [];

// Kelimeleri JSON dosyasından yükle
function loadWords() {
    fetch('words.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Ağ hatası');
            }
            return response.json();
        })
        .then(data => {
            words = data; // Kelimeleri yükle
            displayWords(words); // Kelimeleri göster
        })
        .catch(error => console.error('Hata:', error));
}

function displayWords(filteredWords) {
    const wordList = document.getElementById('wordList');
    wordList.innerHTML = '';

    filteredWords.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.Kelime}: ${item.Anlamı}`;
        wordList.appendChild(li);
    });
}

function searchWord() {
    const searchInput = document.getElementById('search').value.toLowerCase();

    // Eğer arama çubuğu boşsa tüm kelimeleri göster
    if (searchInput === "") {
        displayWords(words);
        return;
    }

    const filteredWords = words.filter(item => item.Kelime.toLowerCase().includes(searchInput));
    displayWords(filteredWords);
}

// Sayfa yüklendiğinde kelimeleri yükle
loadWords();
