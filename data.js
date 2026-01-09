// 菜系配置 - 所有地图都指向首尔（在韩国找外国菜）
const cuisineConfig = {
    korea: { name: '韩国料理', flag: '🇰🇷', color: 'rose', mapBase: '서울', naverMap: true },
    japan: { name: '日本料理', flag: '🇯🇵', color: 'red', mapBase: '서울 일식', naverMap: true },
    italy: { name: '意大利料理', flag: '🇮🇹', color: 'emerald', mapBase: '서울 이탈리안', naverMap: true },
    usa: { name: '美式料理', flag: '🇺🇸', color: 'blue', mapBase: '서울 미국음식', naverMap: true },
    france: { name: '法式料理', flag: '🇫🇷', color: 'violet', mapBase: '서울 프랑스음식', naverMap: true },
    mexico: { name: '墨西哥料理', flag: '🇲🇽', color: 'orange', mapBase: '서울 멕시코음식', naverMap: true },
    asia: { name: '东南亚料理', flag: '🌴', color: 'teal', mapBase: '서울 동남아음식', naverMap: true },
    china: { name: '中国菜', flag: '🇨🇳', color: 'red', mapBase: '서울 중국집', naverMap: true }
};

// 分类配置
const categoryConfig = {
    korea: [
        { id: 'all', name: '全部', icon: '' },
        { id: 'canteen', name: '🍱 韩式餐厅', icon: '🍱' },
        { id: 'cafe', name: '☕️ 咖啡甜点', icon: '☕️' },
        { id: 'meat', name: '🥩 肉食动物', icon: '🥩' },
        { id: 'soup', name: '🥘 汤汤水水', icon: '🥘' },
        { id: 'noodle', name: '🍜 面食碳水', icon: '🍜' },
        { id: 'street', name: '🍢 街头小吃', icon: '🍢' }
    ],
    japan: [
        { id: 'all', name: '全部', icon: '' },
        { id: 'sushi', name: '🍣 寿司刺身', icon: '🍣' },
        { id: 'ramen', name: '🍜 拉面乌冬', icon: '🍜' },
        { id: 'izakaya', name: '🍶 居酒屋', icon: '🍶' },
        { id: 'curry', name: '🍛 咖喱炸物', icon: '🍛' },
        { id: 'dessert', name: '🍡 甜点饮品', icon: '🍡' }
    ],
    italy: [
        { id: 'all', name: '全部', icon: '' },
        { id: 'pizza', name: '🍕 披萨', icon: '🍕' },
        { id: 'pasta', name: '🍝 意面', icon: '🍝' },
        { id: 'dessert', name: '🍨 甜点', icon: '🍨' },
        { id: 'main', name: '🥩 主菜', icon: '🥩' }
    ],
    usa: [
        { id: 'all', name: '全部', icon: '' },
        { id: 'burger', name: '🍔 汉堡热狗', icon: '🍔' },
        { id: 'steak', name: '🥩 牛排BBQ', icon: '🥩' },
        { id: 'fastfood', name: '🍟 快餐', icon: '🍟' },
        { id: 'dessert', name: '🍩 甜点', icon: '🍩' }
    ],
    france: [
        { id: 'all', name: '全部', icon: '' },
        { id: 'bread', name: '🥐 面包糕点', icon: '🥐' },
        { id: 'main', name: '🍽️ 主菜', icon: '🍽️' },
        { id: 'dessert', name: '🧁 甜点', icon: '🧁' }
    ],
    mexico: [
        { id: 'all', name: '全部', icon: '' },
        { id: 'taco', name: '🌮 Taco类', icon: '🌮' },
        { id: 'main', name: '🫔 主食', icon: '🫔' },
        { id: 'snack', name: '🌶️ 小吃', icon: '🌶️' }
    ],
    asia: [
        { id: 'all', name: '全部', icon: '' },
        { id: 'thai', name: '🇹🇭 泰国', icon: '🇹🇭' },
        { id: 'viet', name: '🇻🇳 越南', icon: '🇻🇳' },
        { id: 'malay', name: '🇲🇾 马来', icon: '🇲🇾' },
        { id: 'indo', name: '🇮🇩 印尼', icon: '🇮🇩' }
    ],
    china: [
        { id: 'all', name: '全部', icon: '' },
        { id: 'north', name: '🥟 北方菜', icon: '🥟' },
        { id: 'south', name: '🍜 南方菜', icon: '🍜' },
        { id: 'sichuan', name: '🌶️ 川湘菜', icon: '🌶️' },
        { id: 'dimsum', name: '🥢 点心小吃', icon: '🥢' }
    ]
};

// 韩国料理数据
const koreaData = [
    { id: 1, category: 'meat', cn: '烤五花肉', local: '삼겹살', en: 'Samgyeopsal', desc: '韩国国民美食。厚切五花肉在铁板上滋滋冒油，配上生菜、大蒜和包饭酱。', icon: 'fa-drumstick-bite', pop: 5 },
    { id: 2, category: 'meat', cn: '韩式炸鸡', local: '치킨', en: 'Fried Chicken', desc: '外皮酥脆到灵魂颤抖，配上冰啤酒是深夜标配。', icon: 'fa-hotdog', pop: 5 },
    { id: 3, category: 'meat', cn: '韩牛', local: '한우', en: 'Hanu', desc: '贵！按秒计费的美味。吃之前请确认余额。', icon: 'fa-cow', pop: 5 },
    { id: 4, category: 'meat', cn: '烤牛肠', local: '곱창', en: 'Gopchang', desc: '油脂炸弹，但那是快乐的油脂！配烧酒一绝。', icon: 'fa-drumstick-bite', pop: 4 },
    { id: 5, category: 'meat', cn: '猪蹄', local: '족발', en: 'Jokbal', desc: '韩国猪蹄是切片的，胶质满满，蒜香口味是神。', icon: 'fa-bone', pop: 4 },
    { id: 6, category: 'meat', cn: '菜包肉', local: '보쌈', en: 'Bossam', desc: '煮的猪肉，稍微健康点（骗自己的），配泡菜吃。', icon: 'fa-leaf', pop: 3 },
    { id: 7, category: 'meat', cn: '调味排骨', local: '양념갈비', en: 'Yangnyeom Galbi', desc: '甜甜的，带骨头，容易烤焦，建议让店员帮忙。', icon: 'fa-fire-burner', pop: 4 },
    { id: 8, category: 'meat', cn: '春川辣炒鸡排', local: '닭갈비', en: 'Dakgalbi', desc: '最后的炒饭才是本体，前面的鸡肉只是铺垫。', icon: 'fa-fire', pop: 4 },
    { id: 9, category: 'soup', cn: '土豆脊骨汤', local: '감자탕', en: 'Gamjatang', desc: '宿醉救星。其实主角是肉骨头，土豆是配角。', icon: 'fa-bowl-food', pop: 5 },
    { id: 10, category: 'soup', cn: '一只鸡', local: '닭한마리', en: 'Dakhanmari', desc: '看着清汤寡水，煮久了鲜掉眉毛。一定要加刀削面！', icon: 'fa-bowl-rice', pop: 5 },
    { id: 11, category: 'soup', cn: '参鸡汤', local: '삼계탕', en: 'Samgyetang', desc: '肚子里塞了糯米，吃完感觉身体倍儿棒。', icon: 'fa-bowl-food', pop: 4 },
    { id: 12, category: 'soup', cn: '嫩豆腐汤', local: '순두부찌개', en: 'Sundubu-jjigae', desc: '辣辣的，豆腐滑溜溜，拌饭吃能干两碗。', icon: 'fa-fire', pop: 4 },
    { id: 13, category: 'soup', cn: '部队锅', local: '부대찌개', en: 'Budae-jjigae', desc: '说白了就是乱炖泡面火腿肠，但就是莫名好吃。', icon: 'fa-layer-group', pop: 4 },
    { id: 14, category: 'soup', cn: '泡菜汤', local: '김치찌개', en: 'Kimchi-jjigae', desc: '酸爽开胃，里面通常有猪肉，配白饭是"偷饭贼"。', icon: 'fa-fire', pop: 4 },
    { id: 15, category: 'noodle', cn: '炸酱面', local: '짜장면', en: 'Jajangmyeon', desc: '只有韩国有的"中国菜"。黑乎乎的甜口面。', icon: 'fa-bowl-rice', pop: 5 },
    { id: 16, category: 'noodle', cn: '平壤冷面', local: '평양냉면', en: 'Naengmyeon', desc: '第一次吃像洗抹布水，第三次吃你就上瘾了。', icon: 'fa-snowflake', pop: 4 },
    { id: 17, category: 'noodle', cn: '石锅拌饭', local: '돌솥비빔밥', en: 'Bibimbap', desc: '听着滋滋声才有食欲，底下的锅巴是必争之地。', icon: 'fa-fire-burner', pop: 4 },
    { id: 18, category: 'noodle', cn: '紫菜包饭', local: '김밥', en: 'Kimbap', desc: '别叫它寿司，它会生气的。便利店就有。', icon: 'fa-circle-dot', pop: 5 },
    { id: 19, category: 'street', cn: '炒年糕', local: '떡볶이', en: 'Tteokbokki', desc: '韩国国民零食。红红火火恍恍惚惚的辣。', icon: 'fa-fire', pop: 5 },
    { id: 20, category: 'street', cn: '鱼饼串', local: '오뎅', en: 'Odeng', desc: '冬天站在路边喝一口煮鱼饼的汤，那是灵魂。', icon: 'fa-hotdog', pop: 5 },
    { id: 21, category: 'street', cn: '糖饼', local: '호떡', en: 'Hotteok', desc: '里面是红糖肉桂，刚出锅巨烫！小心烫嘴。', icon: 'fa-cookie', pop: 4 },
    { id: 22, category: 'street', cn: '韩国热狗', local: '핫도그', en: 'Korean Corn Dog', desc: '外面裹满糖和面包糠，加番茄酱和芥末酱。', icon: 'fa-hotdog', pop: 4 },
    { id: 23, category: 'cafe', cn: '冰美式', local: '아이스 아메리카노', en: 'Ice Americano', desc: '韩国人的血液，零下十度也要喝冰的。', icon: 'fa-snowflake', pop: 5 },
    { id: 24, category: 'cafe', cn: '雪冰', local: '설빙', en: 'Sulbing', desc: '牛奶冰沙，堆得像山一样，加年糕和豆粉是经典。', icon: 'fa-snowflake', pop: 5 },
    { id: 25, category: 'cafe', cn: '盐面包', local: '소금빵', en: 'Salt Bread', desc: '外脆里软，咸味黄油绝了。', icon: 'fa-bread-slice', pop: 5 },
    { id: 26, category: 'canteen', cn: '韩式定食', local: '백반', en: 'Baekban', desc: '最正宗的韩式家常菜，一碗饭配一堆小菜。', icon: 'fa-bowl-rice', pop: 5 },
    { id: 27, category: 'canteen', cn: '泡菜炒饭', local: '김치볶음밥', en: 'Kimchi Bokkeumbap', desc: '食堂永远的C位，加个半熟煎蛋是灵魂。', icon: 'fa-fire', pop: 5 },
    { id: 28, category: 'canteen', cn: '韩式炸猪排', local: '돈까스', en: 'Donkasu', desc: '韩式炸猪排通常很大，配甜甜的酱汁。', icon: 'fa-drumstick-bite', pop: 4 }
];

// 日本料理数据 - 在韩国的日料店点餐用韩语
const japanData = [
    { id: 101, category: 'sushi', cn: '寿司', local: '스시', en: 'Sushi', desc: '日本料理的代表。新鲜鱼生配醋饭，简单却完美。', icon: 'fa-fish', pop: 5 },
    { id: 102, category: 'sushi', cn: '刺身', local: '사시미', en: 'Sashimi', desc: '纯粹的鱼生片，考验的是食材本身的品质。', icon: 'fa-fish', pop: 5 },
    { id: 103, category: 'sushi', cn: '海鲜盖饭', local: '카이센동', en: 'Kaisendon', desc: '满满一碗海鲜盖饭，豪华的视觉盛宴。', icon: 'fa-bowl-food', pop: 5 },
    { id: 104, category: 'ramen', cn: '豚骨拉面', local: '돈코츠 라멘', en: 'Tonkotsu Ramen', desc: '浓郁的猪骨汤底，博多风味的代表。', icon: 'fa-bowl-food', pop: 5 },
    { id: 105, category: 'ramen', cn: '味噌拉面', local: '미소 라멘', en: 'Miso Ramen', desc: '北海道特色，味噌汤底香浓。', icon: 'fa-bowl-food', pop: 4 },
    { id: 106, category: 'ramen', cn: '乌冬面', local: '우동', en: 'Udon', desc: '粗粗的面条Q弹有嚼劲，热汤或凉拌都好吃。', icon: 'fa-bowl-rice', pop: 4 },
    { id: 107, category: 'ramen', cn: '荞麦面', local: '소바', en: 'Soba', desc: '荞麦做的面条，夏天吃凉的特别清爽。', icon: 'fa-bowl-rice', pop: 4 },
    { id: 108, category: 'izakaya', cn: '烤鸡肉串', local: '야키토리', en: 'Yakitori', desc: '居酒屋标配，一串串烤得焦香四溢。', icon: 'fa-drumstick-bite', pop: 5 },
    { id: 109, category: 'izakaya', cn: '日式煎饺', local: '교자', en: 'Gyoza', desc: '煎得底部金黄酥脆，配啤酒绝配。', icon: 'fa-cookie', pop: 4 },
    { id: 110, category: 'izakaya', cn: '毛豆', local: '에다마메', en: 'Edamame', desc: '居酒屋开胃小菜，撒点盐就很香。', icon: 'fa-leaf', pop: 4 },
    { id: 111, category: 'izakaya', cn: '章鱼烧', local: '타코야키', en: 'Takoyaki', desc: '大阪名物，外脆内软，里面有一块章鱼。', icon: 'fa-cookie', pop: 5 },
    { id: 112, category: 'curry', cn: '炸猪排', local: '돈카츠', en: 'Tonkatsu', desc: '外酥里嫩的炸猪排，配卷心菜和味噌汤。', icon: 'fa-drumstick-bite', pop: 5 },
    { id: 113, category: 'curry', cn: '日式咖喱', local: '카레라이스', en: 'Curry Rice', desc: '比印度咖喱甜，比泰式咖喱温和，日本国民美食。', icon: 'fa-bowl-food', pop: 5 },
    { id: 114, category: 'curry', cn: '天妇罗', local: '덴푸라', en: 'Tempura', desc: '轻盈酥脆的炸物，蘸天妇罗酱油吃。', icon: 'fa-shrimp', pop: 4 },
    { id: 115, category: 'dessert', cn: '抹茶甜品', local: '말차 디저트', en: 'Matcha Sweets', desc: '抹茶味的冰淇淋、蛋糕、铜锣烧...全都要！', icon: 'fa-ice-cream', pop: 5 },
    { id: 116, category: 'dessert', cn: '铜锣烧', local: '도라야키', en: 'Dorayaki', desc: '哆啦A梦最爱，红豆馅夹在两片松饼中间。', icon: 'fa-cookie', pop: 4 },
    { id: 117, category: 'dessert', cn: '团子', local: '당고', en: 'Dango', desc: '软糯的糯米丸子，串成一串，配抹茶绝了。', icon: 'fa-circle', pop: 4 }
];

// 意大利料理数据 - 韩语点餐
const italyData = [
    { id: 201, category: 'pizza', cn: '玛格丽特披萨', local: '마르게리타 피자', en: 'Margherita Pizza', desc: '番茄、马苏里拉、罗勒，简单就是完美。', icon: 'fa-pizza-slice', pop: 5 },
    { id: 202, category: 'pizza', cn: '四季披萨', local: '콰트로 스타지오니', en: 'Four Seasons Pizza', desc: '四种配料代表四季，一次吃遍春夏秋冬。', icon: 'fa-pizza-slice', pop: 4 },
    { id: 203, category: 'pasta', cn: '意大利面', local: '스파게티', en: 'Spaghetti', desc: '经典中的经典，配番茄酱或肉酱都好吃。', icon: 'fa-utensils', pop: 5 },
    { id: 204, category: 'pasta', cn: '奶油培根意面', local: '까르보나라', en: 'Carbonara', desc: '蛋黄、培根、帕玛森，罪恶又美味。', icon: 'fa-bacon', pop: 5 },
    { id: 205, category: 'pasta', cn: '千层面', local: '라자냐', en: 'Lasagna', desc: '层层叠叠的面皮、肉酱和芝士，意式comfort food。', icon: 'fa-layer-group', pop: 4 },
    { id: 206, category: 'pasta', cn: '意式饺子', local: '라비올리', en: 'Ravioli', desc: '方形的小饺子，里面包着芝士或肉馅。', icon: 'fa-cookie', pop: 4 },
    { id: 207, category: 'main', cn: '米兰炸猪排', local: '코톨레타', en: 'Milanese Cutlet', desc: '薄薄的炸猪排，米兰特色。', icon: 'fa-drumstick-bite', pop: 4 },
    { id: 208, category: 'main', cn: '意式烩饭', local: '리조또', en: 'Risotto', desc: '奶油芝士炖米饭，浓郁到每一粒米都包裹着美味。', icon: 'fa-bowl-rice', pop: 4 },
    { id: 209, category: 'dessert', cn: '提拉米苏', local: '티라미수', en: 'Tiramisu', desc: 'Pick me up！咖啡和马斯卡彭的完美结合。', icon: 'fa-cake-candles', pop: 5 },
    { id: 210, category: 'dessert', cn: '意式冰淇淋', local: '젤라또', en: 'Gelato', desc: '比普通冰淇淋更密实顺滑，意大利必吃。', icon: 'fa-ice-cream', pop: 5 },
    { id: 211, category: 'dessert', cn: '奶油泡芙', local: '카놀리', en: 'Cannoli', desc: '西西里岛特产，脆皮包裹甜奶油。', icon: 'fa-cookie', pop: 4 }
];

// 美式料理数据 - 韩语点餐
const usaData = [
    { id: 301, category: 'burger', cn: '芝士汉堡', local: '치즈버거', en: 'Cheeseburger', desc: '美国国民食物，芝士融化在牛肉饼上的瞬间。', icon: 'fa-burger', pop: 5 },
    { id: 302, category: 'burger', cn: '热狗', local: '핫도그', en: 'Hot Dog', desc: '棒球场标配，加芥末酱和酸菜才正宗。', icon: 'fa-hotdog', pop: 4 },
    { id: 303, category: 'burger', cn: '费城芝士牛肉三明治', local: '필리 치즈스테이크', en: 'Philly Cheesesteak', desc: '薄切牛肉配融化的芝士，费城传奇。', icon: 'fa-bread-slice', pop: 4 },
    { id: 304, category: 'steak', cn: '牛排', local: '스테이크', en: 'Steak', desc: 'Medium rare是灵魂温度，配个烤土豆。', icon: 'fa-cow', pop: 5 },
    { id: 305, category: 'steak', cn: 'BBQ烤肉', local: '바베큐', en: 'Barbecue', desc: '德州风味，慢烤十几个小时的牛胸肉。', icon: 'fa-fire', pop: 5 },
    { id: 306, category: 'steak', cn: '炸鸡', local: '프라이드 치킨', en: 'Southern Fried Chicken', desc: '南方灵魂食物，外酥里嫩多汁。', icon: 'fa-drumstick-bite', pop: 5 },
    { id: 307, category: 'fastfood', cn: '薯条', local: '감자튀김', en: 'French Fries', desc: '金黄酥脆，蘸番茄酱是基本操作。', icon: 'fa-french-fries', pop: 5 },
    { id: 308, category: 'fastfood', cn: '洋葱圈', local: '어니언링', en: 'Onion Rings', desc: '炸得金黄的洋葱圈，酥脆可口。', icon: 'fa-circle', pop: 4 },
    { id: 309, category: 'fastfood', cn: '鸡块', local: '치킨너겟', en: 'Chicken Nuggets', desc: '小朋友最爱，大人也戒不掉。', icon: 'fa-drumstick-bite', pop: 4 },
    { id: 310, category: 'dessert', cn: '苹果派', local: '애플파이', en: 'Apple Pie', desc: '美式经典甜点，配一球香草冰淇淋。', icon: 'fa-apple-whole', pop: 4 },
    { id: 311, category: 'dessert', cn: '甜甜圈', local: '도넛', en: 'Donuts', desc: '警察的最爱（刻板印象），糖霜款最经典。', icon: 'fa-circle', pop: 4 },
    { id: 312, category: 'dessert', cn: '芝士蛋糕', local: '치즈케이크', en: 'Cheesecake', desc: '纽约式芝士蛋糕，浓郁顺滑。', icon: 'fa-cake-candles', pop: 5 }
];

// 法式料理数据 - 韩语点餐
const franceData = [
    { id: 401, category: 'bread', cn: '可颂', local: '크루아상', en: 'Croissant', desc: '层层酥脆的法式牛角包，黄油香气四溢。', icon: 'fa-bread-slice', pop: 5 },
    { id: 402, category: 'bread', cn: '法棍', local: '바게트', en: 'Baguette', desc: '法国人的生命线，外脆内软。', icon: 'fa-bread-slice', pop: 5 },
    { id: 403, category: 'bread', cn: '巧克力面包', local: '뺑오쇼콜라', en: 'Chocolate Croissant', desc: '可颂面团包裹着巧克力棒，幸福感爆棚。', icon: 'fa-cookie', pop: 5 },
    { id: 404, category: 'main', cn: '法式蜗牛', local: '에스카르고', en: 'Escargots', desc: '蒜香黄油焗蜗牛，听起来猎奇吃起来真香。', icon: 'fa-bug', pop: 4 },
    { id: 405, category: 'main', cn: '鹅肝', local: '푸아그라', en: 'Foie Gras', desc: '入口即化的鹅肝，法餐中的奢侈品。', icon: 'fa-utensils', pop: 4 },
    { id: 406, category: 'main', cn: '红酒炖牛肉', local: '뵈프 부르기뇽', en: 'Beef Bourguignon', desc: '勃艮第红酒炖出的软烂牛肉，法式comfort food。', icon: 'fa-bowl-food', pop: 4 },
    { id: 407, category: 'main', cn: '法式洋葱汤', local: '프렌치 어니언 수프', en: 'French Onion Soup', desc: '焦糖化洋葱汤配融化的芝士面包，暖心之作。', icon: 'fa-bowl-food', pop: 4 },
    { id: 408, category: 'dessert', cn: '马卡龙', local: '마카롱', en: 'Macaron', desc: '五颜六色的小圆饼，看起来贵实际也贵。', icon: 'fa-cookie', pop: 5 },
    { id: 409, category: 'dessert', cn: '舒芙蕾', local: '수플레', en: 'Souffle', desc: '膨得高高的，一出炉就要马上吃！', icon: 'fa-cake-candles', pop: 4 },
    { id: 410, category: 'dessert', cn: '焦糖布丁', local: '크렘 브륄레', en: 'Creme Brulee', desc: '敲碎焦糖层的那一下，治愈全世界。', icon: 'fa-fire', pop: 5 },
    { id: 411, category: 'dessert', cn: '闪电泡芙', local: '에클레어', en: 'Eclair', desc: '长条形泡芙，上面淋巧克力或咖啡糖霜。', icon: 'fa-cookie', pop: 4 }
];

// 墨西哥料理数据 - 韩语点餐
const mexicoData = [
    { id: 501, category: 'taco', cn: 'Taco', local: '타코', en: 'Taco', desc: '玉米饼包裹各种馅料，墨西哥的灵魂食物。', icon: 'fa-taco', pop: 5 },
    { id: 502, category: 'taco', cn: '卷饼', local: '부리또', en: 'Burrito', desc: '超大号卷饼，里面塞满米饭、肉和豆子。', icon: 'fa-burrito', pop: 5 },
    { id: 503, category: 'taco', cn: '玉米脆饼', local: '토스타다', en: 'Tostada', desc: '炸脆的玉米饼，上面堆满配料。', icon: 'fa-cookie', pop: 4 },
    { id: 504, category: 'main', cn: '奶酪玉米饼', local: '케사디아', en: 'Quesadilla', desc: '芝士融化在玉米饼里，简单却让人上瘾。', icon: 'fa-cheese', pop: 5 },
    { id: 505, category: 'main', cn: '墨西哥鸡肉饭', local: '아로스 콘 폴로', en: 'Chicken Rice', desc: '香料炒饭配鸡肉，分量十足。', icon: 'fa-bowl-rice', pop: 4 },
    { id: 506, category: 'main', cn: '玉米粽', local: '타말레스', en: 'Tamales', desc: '玉米叶包裹的玉米面团，里面藏着肉馅。', icon: 'fa-leaf', pop: 4 },
    { id: 507, category: 'snack', cn: '玉米片', local: '나초', en: 'Nachos', desc: '玉米片配芝士酱和各种topping，派对必备。', icon: 'fa-cheese', pop: 5 },
    { id: 508, category: 'snack', cn: '牛油果酱', local: '과카몰리', en: 'Guacamole', desc: '新鲜牛油果捣成泥，配玉米片吃到停不下来。', icon: 'fa-leaf', pop: 5 },
    { id: 509, category: 'snack', cn: '莎莎酱', local: '살사', en: 'Salsa', desc: '番茄辣椒做的蘸酱，开胃神器。', icon: 'fa-pepper-hot', pop: 4 },
    { id: 510, category: 'snack', cn: '西班牙油条', local: '츄러스', en: 'Churros', desc: '炸得酥脆的条状面点，蘸巧克力酱吃。', icon: 'fa-cookie', pop: 4 }
];

// 东南亚料理数据 - 韩语点餐
const asiaData = [
    { id: 601, category: 'thai', cn: '冬阴功', local: '똠양꿍', en: 'Tom Yum Goong', desc: '酸辣虾汤，泰国料理的代表。一口就上头。', icon: 'fa-bowl-food', pop: 5 },
    { id: 602, category: 'thai', cn: '泰式炒河粉', local: '팟타이', en: 'Pad Thai', desc: '甜酸口的炒河粉，配花生碎和青柠。', icon: 'fa-bowl-rice', pop: 5 },
    { id: 603, category: 'thai', cn: '绿咖喱', local: '그린커리', en: 'Green Curry', desc: '椰奶咖喱配米饭，辣但是停不下来。', icon: 'fa-bowl-food', pop: 5 },
    { id: 604, category: 'thai', cn: '芒果糯米饭', local: '망고 찹쌀밥', en: 'Mango Sticky Rice', desc: '甜芒果配椰香糯米，泰国甜品之王。', icon: 'fa-seedling', pop: 5 },
    { id: 605, category: 'viet', cn: '越南河粉', local: '포 (쌀국수)', en: 'Pho', desc: '清澈的牛肉汤底，配薄切牛肉和米粉。', icon: 'fa-bowl-food', pop: 5 },
    { id: 606, category: 'viet', cn: '越南春卷', local: '월남쌈', en: 'Fresh Spring Roll', desc: '透明的米纸包裹虾和生菜，蘸甜辣酱吃。', icon: 'fa-burrito', pop: 4 },
    { id: 607, category: 'viet', cn: '越南法棍', local: '반미', en: 'Banh Mi', desc: '法式面包配越南风味肉馅，中西合璧。', icon: 'fa-bread-slice', pop: 5 },
    { id: 608, category: 'malay', cn: '海南鸡饭', local: '하이난 치킨라이스', en: 'Hainanese Chicken Rice', desc: '鸡油饭配白切鸡，东南亚华人的乡愁。', icon: 'fa-drumstick-bite', pop: 5 },
    { id: 609, category: 'malay', cn: '叻沙', local: '락사', en: 'Laksa', desc: '椰浆咖喱汤面，浓郁到每一口都是享受。', icon: 'fa-bowl-food', pop: 5 },
    { id: 610, category: 'malay', cn: '沙爹', local: '사테', en: 'Satay', desc: '烤肉串配花生酱，路边摊的灵魂。', icon: 'fa-drumstick-bite', pop: 4 },
    { id: 611, category: 'indo', cn: '印尼炒饭', local: '나시고랭', en: 'Nasi Goreng', desc: '甜酱油炒饭，配煎蛋和虾片。', icon: 'fa-bowl-rice', pop: 5 },
    { id: 612, category: 'indo', cn: '沙爹串', local: '사테', en: 'Indonesian Satay', desc: '印尼版烤肉串，甜咸口更重。', icon: 'fa-drumstick-bite', pop: 4 }
];

// 中国菜数据 - 韩语点餐
const chinaData = [
    { id: 701, category: 'north', cn: '北京烤鸭', local: '베이징 카오야', en: 'Peking Duck', desc: '皮脆肉嫩，蘸甜面酱配葱丝黄瓜卷饼吃。', icon: 'fa-drumstick-bite', pop: 5 },
    { id: 702, category: 'north', cn: '饺子', local: '만두', en: 'Dumplings', desc: '北方人的命根子，蘸醋蒜吃。', icon: 'fa-cookie', pop: 5 },
    { id: 703, category: 'north', cn: '炸酱面', local: '짜장면', en: 'Zhajiang Noodles', desc: '老北京风味，黄酱炸肉末拌面条。', icon: 'fa-bowl-rice', pop: 4 },
    { id: 704, category: 'north', cn: '羊肉泡馍', local: '양러우파오모', en: 'Lamb Pita Soup', desc: '西安名吃，掰馍是门手艺。', icon: 'fa-bowl-food', pop: 4 },
    { id: 705, category: 'south', cn: '小笼包', local: '샤오롱바오', en: 'Xiaolongbao', desc: '一口咬下去，汤汁四溢。小心烫！', icon: 'fa-cookie', pop: 5 },
    { id: 706, category: 'south', cn: '生煎包', local: '생젠바오', en: 'Pan-fried Buns', desc: '底部煎得金黄酥脆，上海早餐标配。', icon: 'fa-cookie', pop: 5 },
    { id: 707, category: 'south', cn: '白斩鸡', local: '바이잔지', en: 'White Cut Chicken', desc: '皮爽肉滑，蘸姜葱油，简单就是美味。', icon: 'fa-drumstick-bite', pop: 4 },
    { id: 708, category: 'south', cn: '煲仔饭', local: '뚝배기밥', en: 'Clay Pot Rice', desc: '锅巴是精华，刮着吃才过瘾。', icon: 'fa-fire', pop: 5 },
    { id: 709, category: 'sichuan', cn: '麻婆豆腐', local: '마파두부', en: 'Mapo Tofu', desc: '麻辣鲜香，下饭神器。', icon: 'fa-fire', pop: 5 },
    { id: 710, category: 'sichuan', cn: '水煮肉片', local: '수이주러우피엔', en: 'Boiled Meat Slices', desc: '一层红油辣椒，辣到冒汗但停不下来。', icon: 'fa-fire', pop: 5 },
    { id: 711, category: 'sichuan', cn: '回锅肉', local: '회궈러우', en: 'Twice-cooked Pork', desc: '川菜之首，肥而不腻，配米饭绝了。', icon: 'fa-bacon', pop: 5 },
    { id: 712, category: 'sichuan', cn: '火锅', local: '훠궈', en: 'Hot Pot', desc: '没有什么是一顿火锅解决不了的。', icon: 'fa-fire', pop: 5 },
    { id: 713, category: 'dimsum', cn: '虾饺', local: '하가오', en: 'Har Gow', desc: '晶莹剔透的皮包裹鲜虾，广式点心之王。', icon: 'fa-shrimp', pop: 5 },
    { id: 714, category: 'dimsum', cn: '烧卖', local: '슈마이', en: 'Siu Mai', desc: '猪肉虾仁馅，顶上点缀蟹黄。', icon: 'fa-cookie', pop: 5 },
    { id: 715, category: 'dimsum', cn: '叉烧包', local: '차슈바오', en: 'Char Siu Bao', desc: '软软的包子皮，甜甜的叉烧馅。', icon: 'fa-bread-slice', pop: 4 },
    { id: 716, category: 'dimsum', cn: '肠粉', local: '창펀', en: 'Rice Noodle Roll', desc: '薄薄的米皮裹着虾或叉烧，淋酱油吃。', icon: 'fa-bowl-rice', pop: 4 }
];

// 合并所有数据
const cuisineData = {
    korea: koreaData,
    japan: japanData,
    italy: italyData,
    usa: usaData,
    france: franceData,
    mexico: mexicoData,
    asia: asiaData,
    china: chinaData
};

// 当前选中的菜系
let currentCuisine = 'korea';

// 获取当前菜系的数据
function getCurrentData() {
    return cuisineData[currentCuisine] || [];
}

// 兼容旧代码
let rawData = koreaData;
