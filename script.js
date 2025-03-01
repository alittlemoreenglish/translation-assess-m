const questionBanks = {
    'proverbs': [
        "人生最重要的不是所站的位置，而是所朝的方向。",
        "與其用淚水悔恨昨天，不如用汗水開創明天。",
        "時間是一切財富中最寶貴的財富。",
        "知識就是力量。",
        "失敗是成功之母。",
        "學習是一個永無止境的過程。",
        "態度決定一切。",
        "機會總是留給有準備的人。",
        "沒有人生來就是成功的。",
        "選擇比努力更重要。",
        "沒吃過豬肉，也看過豬走路。",
        "吃太快可能會弄破碗。",
        "欲速則不達。",
        "戲棚下站久了就是你的",
        "人無遠慮，必有近憂。",
        "讀萬卷書，行萬里路。",
        "千里之行，始於足下。",
        "三思而後行。",
        "百聞不如一見。",
        "知足者常樂。",
        "工欲善其事，必先利其器。",
        "再苦也要笑一笑。",
        "我沒有特別聰明，我只是充滿好奇。",
        "明槍易躲，暗箭難防。",
        "大智若愚。",
        "人無完人，金無足赤。",
        "精益求精。",
        "遠水救不了近火。",
        "不入虎穴，焉得虎子。",
        "書是最好的朋友，唯一的缺點是令我近視加深，但仍是值得的。",
        "好友像好書，好書像好友；好友常分離，好書伴一生。",
        "書就像是一座可以放在口袋裡帶著走的花園。",
        "沒有忙碌的人，只有不在乎的事情。",
        "人生前期越嫌麻煩，越懶得學就越可能錯過讓我們動心的人和事，錯過風景。",
        "君子愛財，取之有道。"
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
        "請問該怎麼走到火車站？",
        "今天的天氣真是舒服。",
        "我最喜歡的運動是游泳。",
        "週末我打算去逛夜市。",
        "這家餐廳的牛肉麵很有名。",
        "你要不要一起去看電影？",
        "台北的捷運很方便。",
        "明天下午我有重要的會議。",
        "這個地方的風景真漂亮。",
        "我家附近新開了一家便利商店。",
        "請問該怎麼走到火車站？",
        "你喜歡什麼口味的冰淇淋？",
        "昨晚我做了一個很奇怪的夢。",
        "這週末有什麼好玩的活動嗎？",
        "我聽說最近開了一家新咖啡廳。",
        "這本書的故事情節很吸引人。",
        "你最近看過哪部好電影嗎？",
        "今天下午我要去健身房運動。",
        "最近的新聞真是令人震驚。",
        "我需要去超市買一些日用品。",
        "你平常怎麼安排你的時間？",
        "這次旅行的行程安排得很緊湊。",
        "今天晚上我想煮點特別的晚餐。",
        "這條街上的餐廳選擇很多。",
        "你有空的時候喜歡做什麼？",
        "我剛剛在公園散步了一下。",
        "你有什麼推薦的電視劇嗎？",
        "這家店的甜點非常好吃。",
        "你對未來有什麼計劃嗎？",
        "今天的會議討論了很多事情。"
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
        "我們需要招募更多專業人才。",
        "請問這個專案的進度如何？",
        "我們下週一有重要的會議。",
        "請撥空檢查這份報告。",
        "我們需要討論明年的預算。",
        "請確認這份文件的內容。",
        "我們應該考慮新的市場策略。",
        "這次的產品展示會很成功。",
        "請準備今天下午的會議紀錄。",
        "我們需要增加銷售人員。",
        "這份報告需要進一步修改。",
        "公司正在尋找新合作夥伴。",
        "這項決定需要經過董事會同意。",
        "請安排下週的客戶會議。",
        "我們的網站需要進行更新。",
        "這是今年的銷售數據分析。",
        "我們需要調整市場行銷策略。",
        "這次的活動預算超出了預期。",
        "請撰寫一份新的業務計劃。",
        "我們需要擬定新的產品開發計劃。",
        "這份合約需要您的簽名。",
        "公司將參加下一屆的商展。",
        "我們應該改善客戶服務流程。",
        "這是本季的財務報表。",
        "我們需要一份市場研究報告。",
        "請準備下週的簡報資料。",
        "這是我們的新產品目錄。",
        "公司正在計劃擴展國際市場。",
        "這次的行銷活動很成功。",
        "我們需要招聘更多技術人員。",
        "請確認這些數據的準確性。"
    ],
    'highschooltest': [
        "每逢選舉季節，總會看到政治人物造訪各地著名廟宇。",
        "除了祈求好的選舉結果，他們也希望展現對在地文化與習俗的尊重。",
        "歷史一再證明，戰爭會造成極為可怕的災難。",
        "避免衝突、確保世界和平應該是所有人類追求的目標。",
        "飼養寵物並非一項短暫的人生體驗，而是一個對動物的終生承諾。",
        "根據新聞報導，每年全球有超過百萬人在道路事故中喪失性命。",
        "因此，交通法規必須嚴格執行，以確保所有用路人的安全。",
        "很多人好奇今年年初在美國破紀錄的低溫是否與全球暖化有關。",
        "不論答案為何，氣候專家預告這種不正常的天氣將會變成新的常態。",
        "我們有時會違背自己的意願去做某些事情，就只為了要取悅朋友。",
        "其實，在面對同儕壓力的時候，我們應該學習堅持自己的原則。",
        "早期的博物館只開放給中上階層，而且參觀者必須事先申請進入許可。",
        "現今多數人可以親自或透過線上導覽，享受探索文化珍寶的樂趣。",
        "自2007年營運以來，高鐵已成為臺灣最便利、最快速的交通工具之一。",
        "對於強調職場效率的人而言，高鐵當然是商務旅行的首選。",
        "相較於他們父母的世代，現今年輕人享受較多的自由和繁榮。",
        "但是在這個快速改變的世界中，他們必須學習如何有效地因應新的挑戰。",
        "創意布條最近在夜市成了有效的廣告工具，也刺激了買氣的成長。",
        "其中有些看似無意義，但卻相當引人注目，且常能帶給人們會心的一笑。",
        "近年來，有越來越多超級颱風，通常造成嚴重災害。",
        "颱風來襲時，我們應該準備足夠的食物，並待在室內，若有必要應迅速移動至安全的地方。",
        "快速時尚以速度與低價為特色，讓人們可以用負擔得起的價格買到流行的服飾。",
        "然而，它所鼓勵的「快速消費」卻製造了大量的廢棄物，造成巨大的污染問題。",
        "玉山在冬天常常覆蓋著厚厚的積雪，使整個山頂閃耀如玉。",
        "征服玉山一直是國內外登山者最困難的挑戰之一。",
        "世界大學運動會是一項國際體育及文化盛事，每兩年一次由不同城市舉辦。",
        "在比賽中，來自全球大學的學生運動員建立友誼，並學習運動家精神的真諦。",
        "蚊子一旦叮咬過某些傳染病的患者，就可能將病毒傳染給其他人。",
        "它們在人類中快速傳播疾病，造成的死亡遠超乎我們所能想像。",
        "成功的企業不應把獲利當作最主要的目標。",
        "它應該負起社會責任，以增進大眾的福祉。",
        "台灣便利商店的密集度是全世界最高的，平均每兩千人就有一家。",
        "除了購買生活必需品，顧客也可以在這些店家繳費，甚至領取網路訂購之物品。",
        "有些年輕人辭掉都市裡的高薪工作，返回家鄉種植有機蔬菜。",
        "藉由決心和努力，很多人成功了，不但獲利更多，還過著更健康的生活。",
        "食用過多油炸食物可能會導致學童體重過重，甚至更嚴重的健康問題。",
        "因此，家長和老師應共同合作，找出處理這個棘手議題的有效措施。",
        "都會地區的高房價對社會產生了嚴重的影響。",
        "政府正推出新的政策，以滿足人們的住房需求。",
        "對現今的許多學生而言，在課業或課外活動間取得平衡是一大挑戰。",
        "有效的時間管理是每位有責任感的學生必須學習的首要課題。",
        "近年來，許多台灣製作的影片已經受到國際的重視。",
        "拍攝這些電影的地點也成為熱門的觀光景點。",
        "有些我們認為安全的包裝食品可能含有對人體有害的成分。",
        "為了我們自身的健康，在購買食物前我們應仔細閱讀包裝上的說明。",
        "台灣的夜市早已被認為足以代表我們的在地文化。",
        "每年它們都吸引了成千上萬來自不同國家的觀光客。",
        "日本的核電廠爆炸已經引起全球對核子能源安全的疑慮。",
        "科學家正在尋求安全、乾淨又不昂貴的綠色能源，以滿足我們對電的需求。",
        "在過去，腳踏車主要是作為一種交通工具。",
        "然而，騎腳踏車現在已成為一種熱門的休閒活動。",
        "近20年來我國的出生率快速下滑。",
        "這可能導致我們未來人力資源的嚴重不足。",
        "大部分學生不習慣自己解決問題，他們總是期待老師提供標準答案。",
        "除了用功讀書獲取知識外，學生也應培養獨立思考的能力。",
        "玉山是東亞第一高峰，以生態多樣聞名。",
        "大家在網路上投票給它，要讓它成為世界七大奇觀之一。",
        "聽音樂是一個你可以終生享受的嗜好。",
        "但能彈奏樂器可以為你帶來更多喜悅。",
        "全球糧食危機已經在世界許多地區造成嚴重的社會問題。",
        "專家警告我們不應再將食物價格低廉視為理所當然。",
        "如果我們只為自己而活，就不會真正地感到快樂。",
        "當我們開始為他人著想，快樂之門自然會開啟。",
        "大眾運輸的快速發展已逐漸縮短了都市與鄉村的距離。",
        "有了高速鐵路，我們可以在半天內往返台灣南北兩地。",
        "一般人都知道閱讀對孩子有益。",
        "老師應該多鼓勵學生到圖書館借書。",
        "為提供一個無煙的用餐環境，許多餐廳不允許室內抽煙。",
        "雖然遭到許多癮君子的反對，這對不抽煙的人的確是一大福音。",
        "人類對外太空所知非常有限，但長久以來我們對它卻很感興趣。",
        "太空科技的快速發展，使我們得以探索它的奧秘。",
        "身為地球村的成員，我們不應該把自己侷限在這個小島上。",
        "我們不但應該參與國際性的活動，並且應該展現我們自己的文化特色。",
        "雖然 Lily 生來又瞎又聾，但她從不氣餒。",
        "她的故事證明了，我們只要努力必能成功。",
        "科技讓我們的生活更舒適，然而它也被利用來犯罪。",
        "根據最新的新聞報導，最常見的例子是網際網路詐財。",
        "在享受寵物所帶來的歡樂時，我們不該忽略要善盡照顧他們的責任。",
        "人類的想像和創意是科技進步最大的驅動力。 ",
        "過去在科幻電影中出現的神奇物件，現在正逐一成真。"
    ]
};

// 用來追蹤每個題庫已經使用過的句子索引
const usedIndexes = {
    'proverbs': new Set(),
    'daily': new Set(),
    'business': new Set(),
    'highschooltest': new Set()
};

let currentBank = 'proverbs';
let currentSentence = '';

const API_KEY = '0repy9inIYayTFD1iGjS5VaaV3pcWJUL';
const API_URL = 'https://api.mistral.ai/v1/chat/completions';

// 當頁面載入時初始化
window.onload = function() {
    // 確保有設定預設題庫
    currentBank = currentBank || 'proverbs';
    
    // 立即調用初始化函數
    initialize();
    
    // 顯示第一句隨機句子
    getNextRandomSentence();
};

function initialize() {
    // 載入並顯示第一個隨機句子
    getNextRandomSentence();
}

function nextSentence() {
    // 清除評分結果
    document.getElementById('result').style.display = 'none';
    
    // 獲取下一句隨機句子
    getNextRandomSentence();
}

function getNextRandomSentence() {
    const bank = questionBanks[currentBank];
    const totalSentences = bank.length;
    
    // 如果所有句子都已使用過，則重置使用記錄
    if (usedIndexes[currentBank].size >= totalSentences) {
        usedIndexes[currentBank].clear();
    }
    
    // 隨機選擇一個未使用過的索引
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * totalSentences);
    } while (usedIndexes[currentBank].has(randomIndex));
    
    // 標記此索引為已使用
    usedIndexes[currentBank].add(randomIndex);
    
    // 設置當前句子
    currentSentence = bank[randomIndex];
    
    // 確保DOM元素已經存在
    const chineseTextElement = document.getElementById('chineseText');
    const translationInputElement = document.getElementById('translationInput');
    const resultElement = document.getElementById('result');
    
    if (chineseTextElement) {
        chineseTextElement.textContent = currentSentence;
    } else {
        console.error('Cannot find element with id "chineseText"');
    }
    
    if (translationInputElement) {
        translationInputElement.value = '';
    }
    
    if (resultElement) {
        resultElement.style.display = 'none';
    }
}

function changeQuestionBank(bank) {
    currentBank = bank;
    getNextRandomSentence();
    closeSettings();
}

function openSettings() {
    document.getElementById('settingsModal').style.display = 'block';
}

function closeSettings() {
    document.getElementById('settingsModal').style.display = 'none';
}

// 當用戶點擊模態框外部時關閉它
window.onclick = function(event) {
    const modal = document.getElementById('settingsModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

async function evaluateTranslation() {
    const chineseSentence = currentSentence;
    const userTranslation = document.getElementById('translationInput').value.trim();
    
    if (!userTranslation) {
        alert('Please enter your translation.');
        return;
    }

    // 顯示加載指示器或禁用按鈕
    const evaluateButton = document.querySelector('button');
    evaluateButton.disabled = true;
    evaluateButton.textContent = '評分中...';

    try {
        // 準備請求主體 (Mistral API格式)
        const requestBody = {
            model: "mistral-large-latest", // 或使用您想要的Mistral模型
            messages: [
                {
                    role: "user",
                    content: `你是一位專業的中英翻譯評估專家。請評估以下翻譯的準確性和自然度。
                    原始中文: ${chineseSentence}
                    用戶的英文翻譯: ${userTranslation}
                    請以JSON格式回覆，格式如下：
                    {
                        "score": 1到10之間的數字,
                        "feedback": 用繁體中文（台灣）詳細說明優點和需要改進的地方
                    }`
                }
            ],
            temperature: 0.2,
            top_p: 0.95,
            max_tokens: 1024
        };

        // 發送請求到Mistral API
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();
        
        // 檢查API回應是否成功
        if (!response.ok) {
            throw new Error(data.error?.message || 'API請求失敗');
        }

        // 從回應中提取JSON內容 (Mistral API回應格式)
        const textContent = data.choices[0].message.content;
        
        // 提取JSON字符串
        const jsonMatch = textContent.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
            throw new Error('無法從回應中提取JSON');
        }
        
        const result = JSON.parse(jsonMatch[0]);
        
        // 顯示結果
        document.getElementById('scoreValue').textContent = result.score;
        document.getElementById('feedback').textContent = result.feedback;
        document.getElementById('result').style.display = 'block';
    } catch (error) {
        console.error('評估過程中出現錯誤:', error);
        alert('評估過程中出現錯誤，請重試。' + error.message);
    } finally {
        // 恢復按鈕狀態
        evaluateButton.disabled = false;
        evaluateButton.textContent = '評分';
    }
}
