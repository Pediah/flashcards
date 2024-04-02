// flashcards.js
const flashcards = [
    { 
        chinese: "首都",
        pinyin: "shǒudū",
        partOfSpeech: "n.",
        english: "capital"
    },
    { 
        chinese: "活动",
        pinyin: "huódònɡ",
        partOfSpeech: "v./n.",
        english: "activity"
    },
    { 
        chinese: "肯定",
        pinyin: "kěndìnɡ",
        partOfSpeech: "adj./adv.",
        english: "sure; definitely"
    },
    { 
        chinese: "提前",
        pinyin: "tíqián",
        partOfSpeech: "v.",
        english: "in advance"
    },
    { 
        chinese: "出发",
        pinyin: "chūfā",
        partOfSpeech: "v.",
        english: "leave; start off"
    },
    { 
        chinese: "堵车",
        pinyin: "dǔchē",
        partOfSpeech: "v.",
        english: "traffic jam"
    },
    { 
        chinese: "乘坐",
        pinyin: "chénɡzuò",
        partOfSpeech: "v.",
        english: "to take (car, airplane… )"
    },
    { 
        chinese: "等(等)",
        pinyin: "děnɡ（děnɡ）",
        partOfSpeech: "aux.",
        english: "and so on"
    },
    { 
        chinese: "交通工具",
        pinyin: "jiāotōnɡ ɡōngjù",
        partOfSpeech: "n.",
        english: "vehicle; means of transport"
    },
    { 
        chinese: "广播",
        pinyin: "ɡuǎnɡbō",
        partOfSpeech: "n.",
        english: "broadcast"
    },
    { 
        chinese: "按照",
        pinyin: "ànzhào",
        partOfSpeech: "prep.",
        english: "according to"
    },
    { 
        chinese: "提醒",
        pinyin: "tíxǐng",
        partOfSpeech: "v.",
        english: "to remind"
    },
    { 
        chinese: "确实",
        pinyin: "quèshí",
        partOfSpeech: "adv.",
        english: "indeed"
    },
    { 
        chinese: "难受",
        pinyin: "nánshòu",
        partOfSpeech: "adj.",
        english: "uncomfortable"
    },
    { 
        chinese: "凉快",
        pinyin: "liánɡkuɑi",
        partOfSpeech: "adj.",
        english: "cool (weather)"
    },
    { 
        chinese: "行",
        pinyin: "xínɡ",
        partOfSpeech: "v./adj.",
        english: "ok; capable"
    },
    { 
        chinese: "顺便",
        pinyin: "shùnbiàn",
        partOfSpeech: "adv.",
        english: "in passing; on one’s way"
    },
    { 
        chinese: "杂志",
        pinyin: "zázhì",
        partOfSpeech: "n.",
        english: "magazine"
    }
];

let currentCard = 0;
const flashcardContainer = document.getElementById('flashcard-container');

function displayCard() {
    flashcardContainer.innerHTML = `
        <div id="flashcard">
            <h2>Chinese:</h2>
            <p>${flashcards[currentCard].chinese}</p>
            <h2 id="pinyinHeader" style="display: none;">Pinyin:</h2>
            <p id="pinyin" style="display: none;">${flashcards[currentCard].pinyin}</p>
            <h2 id="partOfSpeechHeader" style="display: none;">Part of Speech:</h2>
            <p id="partOfSpeech" style="display: none;">${flashcards[currentCard].partOfSpeech}</p>
            <h2 id="englishHeader" style="display: none;">English:</h2>
            <p id="english" style="display: none;">${flashcards[currentCard].english}</p>
            <button id="showAnswerBtn" onclick="showAnswer()">Show Answer</button>
            <button id="hideAnswerBtn" onclick="hideAnswer()" style="display: none;">Hide Answer</button>
        </div>
    `;
}

function nextCard() {
    currentCard++;
    if (currentCard >= flashcards.length) {
        currentCard = 0;
    }
    displayCard();
}

function prevCard() {
    currentCard--;
    if (currentCard < 0) {
        currentCard = flashcards.length - 1;
    }
    displayCard();
}

function showAnswer() {
    const pinyinHeader = document.getElementById('pinyinHeader');
    const pinyin = document.getElementById('pinyin');
    const partOfSpeechHeader = document.getElementById('partOfSpeechHeader');
    const partOfSpeech = document.getElementById('partOfSpeech');
    const englishHeader = document.getElementById('englishHeader');
    const english = document.getElementById('english');
    const showAnswerBtn = document.getElementById('showAnswerBtn');
    const hideAnswerBtn = document.getElementById('hideAnswerBtn');

    pinyinHeader.style.display = 'block';
    pinyin.style.display = 'block';
    partOfSpeechHeader.style.display = 'block';
    partOfSpeech.style.display = 'block';
    englishHeader.style.display = 'block';
    english.style.display = 'block';
    showAnswerBtn.style.display = 'none';
    hideAnswerBtn.style.display = 'block';
}

function hideAnswer() {
    const pinyinHeader = document.getElementById('pinyinHeader');
    const pinyin = document.getElementById('pinyin');
    const partOfSpeechHeader = document.getElementById('partOfSpeechHeader');
    const partOfSpeech = document.getElementById('partOfSpeech');
    const englishHeader = document.getElementById('englishHeader');
    const english = document.getElementById('english');
    const showAnswerBtn = document.getElementById('showAnswerBtn');
    const hideAnswerBtn = document.getElementById('hideAnswerBtn');

    pinyinHeader.style.display = 'none';
    pinyin.style.display = 'none';
    partOfSpeechHeader.style.display = 'none';
    partOfSpeech.style.display = 'none';
    englishHeader.style.display = 'none';
    english.style.display = 'none';
    showAnswerBtn.style.display = 'block';
    hideAnswerBtn.style.display = 'none';
}

displayCard();