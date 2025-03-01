const questionBanks = {
    'proverbs': [
        "生活中最重要的不是位置，而是方向。",
        "與其用淚水悔恨昨天，不如用汗水開創明天。",
        "時間是一切財富中最寶貴的財富。",
        "知識就是力量。",
        "失敗是成功之母。",
        "學習是一個永無止境的過程。",
        "態度決定一切。",
        "機會總是留給有準備的人。",
        "沒有人生來就是成功的。",
        "選擇比努力更重要。"
    ],
    'daily': [
        "今天的天氣真是舒服。",
        "我最喜歡的運動是游泳。",
        "週末我打算去逛夜市。",
        "這家餐廳的牛肉麵很有名。",
        "你要不要一起去看電影？",
        "台北的捷運很方便。",
        "明天下午我有重要的會議。",
        "這個地方的風景真漂亮。",
        "我家附近新開了一家便利商店。",
        "請問該怎麼走到火車站？"
    ],
    'business': [
        "請問您對這份企劃書有什麼建議？",
        "我們需要準備下週的簡報資料。",
        "這季的營業額比預期還要好。",
        "客戶對我們的服務很滿意。",
        "我們應該要改進產品品質。",
        "公司正在規劃海外市場。",
        "這份合約需要法務部門審核。",
        "我們下週二開股東會議。",
        "請準備第三季的財務報表。",
        "我們需要招募更多專業人才。"
    ]
};

let currentBank = 'proverbs';
let sentences = questionBanks[currentBank];
let currentSentenceIndex = 0;

function initialize() {
    displayNewSentence();
}

function displayNewSentence() {
    document.getElementById('chineseText').textContent = sentences[currentSentenceIndex];
    document.getElementById('translationInput').value = '';
    document.getElementById('result').style.display = 'none';
}

function changeQuestionBank(bank) {
    currentBank = bank;
    sentences = questionBanks[bank];
    currentSentenceIndex = 0;
    displayNewSentence();
    closeSettings();
}

function openSettings() {
    document.getElementById('settingsModal').style.display = 'block';
}

function closeSettings() {
    document.getElementById('settingsModal').style.display = 'none';
}

// When user clicks outside the modal, close it
window.onclick = function(event) {
    const modal = document.getElementById('settingsModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

async function evaluateTranslation() {
    const chineseSentence = sentences[currentSentenceIndex];
    const userTranslation = document.getElementById('translationInput').value.trim();
    
    if (!userTranslation) {
        alert('Please enter your translation.');
        return;
    }

    const messages = [
        {
            role: "system",
            content: `You are a professional Chinese-English translation evaluator. 
            Evaluate the translation based on accuracy and naturalness.
            Respond in JSON format with:
            {
                "score": number between 1-10,
                "feedback": detailed feedback in Traditional Chinese (Taiwan) about strengths and areas for improvement
            }`
        },
        {
            role: "user",
            content: `Original Chinese: ${chineseSentence}
            User's English translation: ${userTranslation}
            Please evaluate this translation.`
        }
    ];

    try {
        const completion = await websim.chat.completions.create({
            messages: messages,
            json: true
        });

        const result = JSON.parse(completion.content);
        
        document.getElementById('scoreValue').textContent = result.score;
        document.getElementById('feedback').textContent = result.feedback;
        document.getElementById('result').style.display = 'block';
    } catch (error) {
        console.error('Error during evaluation:', error);
        alert('An error occurred during evaluation. Please try again.');
    }
}

function nextSentence() {
    currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
    displayNewSentence();
}

// Initialize when page loads
window.onload = initialize;