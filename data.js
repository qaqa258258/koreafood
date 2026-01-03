const rawData = [
    // Meat
    { id: 1, category: 'meat', cn: '烤五花肉', kr: '삼겹살', en: 'Samgyeopsal', desc: '韩国国民美食。厚切五花肉在铁板上滋滋冒油，配上生菜、大蒜和包饭酱，这就是天堂。', icon: 'fa-drumstick-bite', pop: 5, rank: 1 },
    { id: 2, category: 'meat', cn: '韩式炸鸡', kr: '치킨', en: 'Fried Chicken', desc: '外皮酥脆到灵魂颤抖，裹上甜辣酱或蜂蜜黄油酱，配上冰啤酒（Chimaek）是深夜标配。', icon: 'fa-hotdog', pop: 5, rank: 2 },
    { id: 3, category: 'meat', cn: '韩牛', kr: '한우', en: 'Hanu', desc: '贵！按秒计费的美味。吃之前请确认余额。', icon: 'fa-cow', pop: 5, rank: 3 },
    { id: 4, category: 'meat', cn: '烤牛肠', kr: '곱창', en: 'Gopchang', desc: '油脂炸弹，但那是快乐的油脂！配烧酒一绝。', icon: 'fa-drumstick-bite', pop: 4, rank: 4 },
    { id: 5, category: 'meat', cn: '猪蹄', kr: '족발', en: 'Jokbal', desc: '韩国猪蹄是切片的，胶质满满，蒜香口味是神。', icon: 'fa-bone', pop: 4, rank: 5 },
    { id: 6, category: 'meat', cn: '菜包肉', kr: '보쌈', en: 'Bossam', desc: '煮的猪肉，稍微健康点（骗自己的），配泡菜吃。', icon: 'fa-leaf', pop: 3 },
    { id: 7, category: 'meat', cn: '调味排骨', kr: '양념갈비', en: 'Yangnyeom Galbi', desc: '甜甜的，带骨头，容易烤焦，建议让店员帮忙。', icon: 'fa-fire-burner', pop: 4 },
    { id: 8, category: 'meat', cn: '春川辣炒鸡排', kr: '닭갈비', en: 'Dakgalbi', desc: '最后的炒饭才是本体，前面的鸡肉只是铺垫。', icon: 'fa-fire', pop: 4 },
    { id: 9, category: 'meat', cn: '烤肉饼', kr: '떡갈비', en: 'Tteok-galbi', desc: '并不是年糕，是剁碎的肉饼，甜咸口，小孩最爱。', icon: 'fa-circle', pop: 3 },
    { id: 10, category: 'meat', cn: '炖牛排骨', kr: '갈비찜', en: 'Galbijjim', desc: '看起来黑乎乎，吃起来软烂入味，甚至想把骨头都嗦一遍。', icon: 'fa-utensils', pop: 4 },
    { id: 11, category: 'meat', cn: '猪颈肉', kr: '항정살', en: 'Hangjeongsal', desc: '比五花肉更脆爽，也是烤肉店的隐藏王者。', icon: 'fa-bacon', pop: 3 },
    { id: 54, category: 'meat', cn: '辣炖鸡块', kr: '닭볶음탕', en: 'Dak-bokkeum-tang', desc: '土豆炖得软糯，鸡肉入味，汤汁拌饭是绝杀。', icon: 'fa-fire', pop: 4 },
    { id: 55, category: 'meat', cn: '安东炖鸡', kr: '안동찜닭', en: 'Andong Jjimdak', desc: '咸甜口的黑色炖鸡，里面的宽粉比肉还好吃！', icon: 'fa-bowl-food', pop: 4 },

    // Soup
    { id: 12, category: 'soup', cn: '土豆脊骨汤', kr: '감자탕', en: 'Gamjatang', desc: '宿醉救星。其实主角是肉骨头，土豆是配角。', icon: 'fa-bowl-food', pop: 5, rank: 1 },
    { id: 13, category: 'soup', cn: '一只鸡', kr: '닭한마리', en: 'Dakhanmari', desc: '看着清汤寡水，煮久了鲜掉眉毛。一定要加刀削面！', icon: 'fa-bowl-rice', pop: 5, rank: 2 },
    { id: 14, category: 'soup', cn: '参鸡汤', kr: '삼계탕', en: 'Samgyetang', desc: '肚子里塞了糯米，吃完感觉身体倍儿棒。', icon: 'fa-bowl-food', pop: 4, rank: 3 },
    { id: 15, category: 'soup', cn: '嫩豆腐汤', kr: '순두부찌개', en: 'Sundubu-jjigae', desc: '辣辣的，豆腐滑溜溜，拌饭吃能干两碗。', icon: 'fa-fire', pop: 4, rank: 4 },
    { id: 16, category: 'soup', cn: '部队锅', kr: '부队찌개', en: 'Budae-jjigae', desc: '说白了就是乱炖泡面火腿肠，但就是莫名好吃。', icon: 'fa-layer-group', pop: 4, rank: 5 },
    { id: 17, category: 'soup', cn: '雪浓汤', kr: '설렁탕', en: 'Seolleongtang', desc: '牛骨熬的白汤，记得加盐！不然淡出鸟。', icon: 'fa-mug-hot', pop: 4 },
    { id: 18, category: 'soup', cn: '大酱汤', kr: '된장찌개', en: 'Doenjang-jjigae', desc: '韩国版“味噌汤”，比泡菜汤更家常，有点“臭”但很上头。', icon: 'fa-bowl-food', pop: 4 },
    { id: 19, category: 'soup', cn: '泡菜汤', kr: '김치찌개', en: 'Kimchi-jjigae', desc: '酸爽开胃，里面通常有猪肉，配白饭是“偷饭贼”。', icon: 'fa-fire', pop: 4 },
    { id: 20, category: 'soup', cn: '全州豆芽汤饭', kr: '콩나물국밥', en: 'Kongnamul-gukbap', desc: '宿醉第二天清晨的救赎，清淡暖胃。', icon: 'fa-bowl-rice', pop: 3 },
    { id: 56, category: 'soup', cn: '辣牛肉汤', kr: '육개장', en: 'Yukgaejang', desc: '红通通的牛肉丝汤，里面有很多大葱和蕨菜，非常解腻。', icon: 'fa-fire', pop: 3 },
    { id: 57, category: 'soup', cn: '海带汤', kr: '미역국', en: 'Miyeok-guk', desc: '韩国人生日必喝，味道很清鲜。', icon: 'fa-bowl-food', pop: 3 },

    // Noodle
    { id: 21, category: 'noodle', cn: '平壤冷面', kr: '평양냉면', en: 'Pyeongyang Naengmyeon', desc: '第一次吃像洗抹布水，第三次吃你就上瘾了。', icon: 'fa-snowflake', pop: 4 },
    { id: 22, category: 'noodle', cn: '炸酱面', kr: '짜장면', en: 'Jajangmyeon', desc: '只有韩国有的“中国菜”。黑乎乎的甜口面。', icon: 'fa-bowl-rice', pop: 5, rank: 1 },
    { id: 23, category: 'noodle', cn: '辣海鲜面', kr: '짬뽕', en: 'Jjamppong', desc: '炸酱面的死对头，辣得你流鼻涕。', icon: 'fa-fire', pop: 4 },
    { id: 24, category: 'noodle', cn: '刀削面', kr: '칼국수', en: 'Kalguksu', desc: '也就是韩国版的手擀面，通常配好吃的泡菜。', icon: 'fa-bowl-food', pop: 4 },
    { id: 25, category: 'noodle', cn: '酱蟹', kr: '간장게장', en: 'Ganjang Gejang', desc: '"偷饭贼"。生的！吃不惯生的千万别挑战。', icon: 'fa-crab', pop: 5, rank: 2 },
    { id: 26, category: 'noodle', cn: '石锅拌饭', kr: '돌솥비빔밥', en: 'Dolsot Bibimbap', desc: '听着滋滋声才有食欲，底下的锅巴是必争之地。', icon: 'fa-fire-burner', pop: 4, rank: 3 },
    { id: 27, category: 'noodle', cn: '紫菜包饭', kr: '김밥', en: 'Kimbap', desc: '别叫它寿司，它会生气的。便利店就有，赶路神器。', icon: 'fa-circle-dot', pop: 5, rank: 4 },
    { id: 28, category: 'noodle', cn: '拌冷面', kr: '비빔냉면', en: 'Bibim Naengmyeon', desc: '水冷面的暴躁兄弟，红彤彤的辣酱拌着吃，专治没胃口。', icon: 'fa-fire', pop: 4 },
    { id: 29, category: 'noodle', cn: '面片汤', kr: '수제비', en: 'Sujebi', desc: '手撕的面片，口感劲道，下雨天吃特别有感觉。', icon: 'fa-bowl-food', pop: 3 },
    { id: 30, category: 'noodle', cn: '豆浆面', kr: '콩국수', en: 'Kongguksu', desc: '夏天限定！浓稠的冷豆浆汤底，有人加盐有人加糖（甜咸党之争）。', icon: 'fa-snowflake', pop: 3 },
    { id: 58, category: 'noodle', cn: '荞麦面', kr: '막국수', en: 'Makguksu', desc: '江原道名产，通常配着白切肉或烤肉吃，非常清爽。', icon: 'fa-bowl-rice', pop: 4 },
    { id: 59, category: 'noodle', cn: '糖醋肉', kr: '탕수육', en: 'Tangsuyuk', desc: '炸酱面的黄金搭档。韩国人分“蘸着吃”和“倒着吃”两派。', icon: 'fa-drumstick-bite', pop: 5, rank: 5 },
    { id: 60, category: 'noodle', cn: '辣炒年糕拉面', kr: '라볶이', en: 'Rabokki', desc: '拉面+年糕的邪恶组合，碳水炸弹但真的香。', icon: 'fa-fire', pop: 4 },

    // Street
    { id: 31, category: 'street', cn: '炒年糕', kr: '떡볶이', en: 'Tteokbokki', desc: '韩国国民零食。红红火火恍恍惚惚的辣。', icon: 'fa-fire', pop: 5, rank: 1 },
    { id: 32, category: 'street', kr: '오뎅', cn: '鱼饼串', en: 'Odeng', desc: '冬天站在路边喝一口煮鱼饼的汤，那是灵魂。', icon: 'fa-hotdog', pop: 5, rank: 2 },
    { id: 33, category: 'street', cn: '糖饼', kr: '호떡', en: 'Hotteok', desc: '里面是红糖肉桂，刚出锅巨烫！小心烫嘴。', icon: 'fa-cookie', pop: 4, rank: 3 },
    { id: 34, category: 'street', cn: '鲫鱼饼', kr: '붕어빵', en: 'Bungeoppang', desc: '里面没有鱼，只有红豆或奶油。', icon: 'fa-fish', pop: 4, rank: 4 },
    { id: 35, category: 'street', cn: '米肠', kr: '순대', en: 'Sundae', desc: '看起来像黑香肠，里面是粉丝和猪血。韩国人的“哈吉斯”。', icon: 'fa-circle-dot', pop: 3 },
    { id: 36, category: 'street', cn: '鸡蛋糕', kr: '계란빵', en: 'Geran-ppang', desc: '真的有一整颗鸡蛋在里面，热乎乎的超治愈。', icon: 'fa-egg', pop: 4 },
    { id: 37, category: 'street', cn: '韩国热狗', kr: '핫도그', en: 'Korean Corn Dog', desc: '外面裹满糖和面包糠，一定要加番茄酱和芥末酱。', icon: 'fa-hotdog', pop: 4, rank: 5 },
    { id: 38, category: 'street', cn: '核桃饼', kr: '호두과자', en: 'Hodugwaja', desc: '高速公路休息站必买，里面真的有核桃仁。', icon: 'fa-cookie', pop: 3 },
    { id: 61, category: 'street', cn: '炸酱年糕', kr: '짜장떡볶이', en: 'Jajang Tteokbokki', desc: '不辣的年糕，小朋友和不能吃辣星人的救星。', icon: 'fa-circle-dot', pop: 3 },
    { id: 62, category: 'street', cn: '炸什锦', kr: '튀김', en: 'Twigim', desc: '路边摊必点，蘸着炒年糕的汤汁吃是基本常识。', icon: 'fa-stroopwafel', pop: 4 },
    { id: 63, category: 'street', cn: '十元硬币饼', kr: '십원빵', en: '10 Won Bread', desc: '庆州名产，里面拉丝的芝士超级长！', icon: 'fa-coins', pop: 4 },

    // Cafe
    { id: 39, category: 'cafe', cn: '冰美式', kr: '아이스 아메리카노', en: 'Ice Americano', desc: '简称“阿阿(Ah-Ah)”。韩国人的血液，零下十度也要喝冰的。', icon: 'fa-snowflake', pop: 5, rank: 1 },
    { id: 40, category: 'cafe', cn: '雪冰', kr: '설빙', en: 'Sulbing', desc: '牛奶冰沙，堆得像山一样，加年糕和豆粉是经典。', icon: 'fa-snowflake', pop: 5, rank: 2 },
    { id: 41, category: 'cafe', cn: '可朗芙', kr: '크로플', en: 'Croffle', desc: '可颂面团压在华夫饼机里，酥脆掉渣，韩国咖啡店标配。', icon: 'fa-bread-slice', pop: 4, rank: 5 },
    { id: 42, category: 'cafe', cn: '盐面包', kr: '소금빵', en: 'Salt Bread', desc: '看起来平平无奇，吃起来外脆里软，咸味黄油绝了。', icon: 'fa-bread-slice', pop: 5, rank: 3 },
    { id: 43, category: 'cafe', cn: '贝果', kr: '베이글', en: 'Bagel', desc: '最近首尔排队排疯了的网红（如London Bagel Museum）。', icon: 'fa-circle-dot', pop: 5, rank: 4 },
    { id: 64, category: 'cafe', cn: '药果', kr: '药과', en: 'Yakgwa', desc: '韩国传统点心，最近在年轻人中复兴，配咖啡意外地搭。', icon: 'fa-cookie', pop: 4 },
    { id: 65, category: 'cafe', cn: '柿子冰沙', kr: '홍시스무디', en: 'Hongsi Smoothie', desc: '秋天必喝！用熟透的软柿子做的，清甜不腻。', icon: 'fa-apple-whole', pop: 3 },
    { id: 66, category: 'cafe', cn: '维也纳咖啡', kr: '아인슈페너', en: 'Einspanner', desc: '厚厚的奶油盖在黑咖啡上，韩国精品咖啡店的必修课。', icon: 'fa-mug-hot', pop: 4 },

    // Drink
    { id: 44, category: 'drink', cn: '生拌牛肉', kr: '육회', en: 'Yukhoe', desc: '广藏市场必点。下面铺着梨丝，甜甜的完全没腥味，打开新世界大门。', icon: 'fa-drumstick-bite', pop: 5, rank: 1 },
    { id: 45, category: 'drink', cn: '活章鱼', kr: '산낙지', en: 'Sannakji', desc: '还在蠕动的那种...吸盘会吸舌头，记得嚼碎！挑战胆量专用。', icon: 'fa-bug', pop: 4, rank: 5 },
    { id: 46, category: 'drink', cn: '海鲜葱饼', kr: '海물파전', en: 'Haemul Pajeon', desc: '下雨天必吃（据说是因为煎饼声像雨声），配米酒是官方CP。', icon: 'fa-layer-group', pop: 4 },
    { id: 47, category: 'drink', cn: '马格利米酒', kr: '막걸리', en: 'Makgeolli', desc: '甜甜的像饮料，别在大铜碗里喝太嗨，后劲很大，出门就倒。', icon: 'fa-beer-mug-empty', pop: 5, rank: 2 },
    { id: 48, category: 'drink', cn: '炸鸡', kr: '치킨', en: 'Chicken', desc: '还要解释吗？Chimaek（炸鸡啤酒）是信仰。', icon: 'fa-drumstick-bite', pop: 5, rank: 3 },
    { id: 49, category: 'drink', cn: '凉拌海螺', kr: '골뱅이무침', en: 'Golbaengi-muchim', desc: '也就是大排档里的下酒菜，酸辣口，配素面（Somyun）吃。', icon: 'fa-bowl-food', pop: 3 },
    { id: 67, category: 'drink', cn: '烧啤', kr: '소맥', en: 'Somaek', desc: '烧酒+啤酒，韩国聚餐的灵魂，比例是关键。', icon: 'fa-beer-mug-empty', pop: 5, rank: 4 },
    { id: 68, category: 'drink', cn: '辣炖安康鱼', kr: '아구찜', en: 'Agujjim', desc: '全是豆芽？不，那是为了衬托安康鱼的鲜嫩。非常辣！', icon: 'fa-fire', pop: 3 },
    { id: 69, category: 'drink', cn: '烤干明太鱼', kr: '먹태', en: 'Meoktae', desc: '二次发酵的干鱼，撕成条蘸蛋黄酱，下酒神器。', icon: 'fa-fish', pop: 4 },

    // Store
    { id: 50, category: 'store', cn: '香蕉牛奶', kr: '바나나맛우유', en: 'Banana Milk', desc: '必须是那个胖胖瓶的才对味！洗完澡喝一瓶爽翻。', icon: 'fa-bottle-water', pop: 5, rank: 1 },
    { id: 51, category: 'store', cn: '冰杯饮料', kr: '얼음컵', en: 'Ice Cup', desc: '韩国特色“打点滴”。买包袋装咖啡倒进冰杯，只要几块钱。', icon: 'fa-snowflake', pop: 5, rank: 2 },
    { id: 52, category: 'store', cn: '三角饭团', kr: '삼각김밥', en: 'Samgak Gimbap', desc: '全州拌饭味是永远的神。', icon: 'fa-triangle-exclamation', pop: 4, rank: 5 },
    { id: 53, category: 'store', cn: '延世牛奶包', kr: '연세우유생크림빵', en: 'Yonsei Cream Bread', desc: '奶油多到爆炸，热量炸弹但真的很快乐。', icon: 'fa-bread-slice', pop: 5, rank: 3 },
    { id: 70, category: 'store', cn: '火鸡面', kr: '불닭볶음面', en: 'Buldak Ramen', desc: '挑战极限的辣，便利店里加个芝士片和饭团是标准吃法。', icon: 'fa-fire', pop: 5, rank: 4 },
    { id: 71, category: 'store', cn: '蟹膏酱', kr: '대게딱지장', en: 'Crab Paste', desc: 'GS25的名产，拌在白饭里就是简易版酱蟹。', icon: 'fa-crab', pop: 4 },
    { id: 72, category: 'store', cn: '巧克力派', kr: '초코파이', en: 'Choco Pie', desc: '国民零食，情(Jeong)的象征。', icon: 'fa-cookie', pop: 3 },
    { id: 73, category: 'store', cn: '蜂蜜黄油薯片', kr: '허니버터칩', en: 'Honey Butter Chip', desc: '曾经一包难求的传说，现在依然是好吃的。', icon: 'fa-cookie', pop: 4 },
    { id: 74, category: 'store', cn: '生奶油草莓三明治', kr: '딸기샌드위치', en: 'Strawberry Sandwich', desc: '冬天限定！便利店的颜值担当。', icon: 'fa-bread-slice', pop: 4 },
    { id: 75, category: 'store', cn: '熟成名家泡菜', kr: '비비고김치', en: 'Bibigo Kimchi', desc: '买一小袋配泡面，瞬间升级。', icon: 'fa-leaf', pop: 4 },

    // Canteen
    { id: 76, category: 'canteen', cn: '韩式定食', kr: '백반', en: 'Baekban', desc: '最正宗的韩式家常菜，一碗饭配一堆小菜，性价比之王。', icon: 'fa-bowl-rice', pop: 5, rank: 1 },
    { id: 77, category: 'canteen', cn: '泡菜炒饭', kr: '김치볶음밥', en: 'Kimchi Bokkeumbap', desc: '食堂永远的C位，加个半熟煎蛋是灵魂。', icon: 'fa-fire', pop: 5, rank: 2 },
    { id: 78, category: 'canteen', cn: '韩式炸猪排', kr: '돈까스', en: 'Donkasu', desc: '韩式炸猪排通常很大，配上甜甜的酱汁和卷心菜丝。', icon: 'fa-drumstick-bite', pop: 4, rank: 3 },
    { id: 79, category: 'canteen', cn: '蛋包饭', kr: '오므라이스', en: 'Omurice', desc: '软糯的蛋皮包裹着炒饭，小朋友和大人都无法拒绝。', icon: 'fa-egg', pop: 4, rank: 4 },
    { id: 80, category: 'canteen', cn: '辛拉面', kr: '라면', en: 'Ramen', desc: '食堂里的拉面通常会加鸡蛋和葱，味道比自己煮的好。', icon: 'fa-bowl-food', pop: 4, rank: 5 }
];

// 推荐餐厅 Top 5（每个分类）
const recommendedRestaurants = {
    meat: [
        { rank: 1, name: '姜虎东白丁', area: '弘大/江南', note: '五花肉界的传奇', link: '' },
        { rank: 2, name: '新村食堂', area: '全国连锁', note: '性价比烤肉王', link: '' },
        { rank: 3, name: '黄金牧场', area: '明洞', note: '韩牛体验首选', link: '' },
        { rank: 4, name: '糕三时代', area: '弘大', note: '五花肉+烧酒绝配', link: '' },
        { rank: 5, name: '王妃家', area: '明洞', note: '游客友好', link: '' }
    ],
    soup: [
        { rank: 1, name: '神仙雪浓汤', area: '明洞', note: '24小时营业', link: '' },
        { rank: 2, name: '陈玉华奶奶一只鸡', area: '东大门', note: '一只鸡鼻祖', link: '' },
        { rank: 3, name: '土俗村参鸡汤', area: '景福宫', note: '排队也要吃', link: '' },
        { rank: 4, name: '满足五香猪蹄', area: '东大门', note: '汤+猪蹄套餐', link: '' },
        { rank: 5, name: '本粥', area: '全国连锁', note: '养胃神器', link: '' }
    ],
    noodle: [
        { rank: 1, name: '乙支面屋', area: '乙支路', note: '平壤冷面正宗', link: '' },
        { rank: 2, name: '香港饭店0410', area: '首尔多店', note: '炸酱面天花板', link: '' },
        { rank: 3, name: '五壮洞咸兴冷面', area: '中区', note: '拌冷面辣到飞起', link: '' },
        { rank: 4, name: '广藏市场刀切面', area: '广藏市场', note: '现做刀切面', link: '' },
        { rank: 5, name: '真味酱蟹', area: '新沙洞', note: '偷饭贼认证', link: '' }
    ],
    street: [
        { rank: 1, name: '广藏市场', area: '钟路', note: '小吃天堂', link: '' },
        { rank: 2, name: '通仁市场', area: '景福宫', note: '铜板美食', link: '' },
        { rank: 3, name: '望远市场', area: '望远洞', note: '本地人最爱', link: '' },
        { rank: 4, name: '明洞路边摊', area: '明洞', note: '游客必打卡', link: '' },
        { rank: 5, name: '梨泰院经理团路', area: '梨泰院', note: '异国风情', link: '' }
    ],
    cafe: [
        { rank: 1, name: 'Blue Bottle', area: '三清洞/弘大', note: '韩国网红咖啡', link: '' },
        { rank: 2, name: 'London Bagel Museum', area: '安国', note: '贝果排队王', link: '' },
        { rank: 3, name: 'Onion 安国店', area: '安国', note: '复古工业风', link: '' },
        { rank: 4, name: 'Cafe de Paris', area: '明洞', note: '水果三明治', link: '' },
        { rank: 5, name: 'Sulbing 雪冰', area: '全国连锁', note: '刨冰天花板', link: '' }
    ],
    drink: [
        { rank: 1, name: '广藏市场绿豆煎饼', area: '广藏市场', note: '配马格利', link: '' },
        { rank: 2, name: '马场洞烤肉巷', area: '马场洞', note: '下酒烤肉', link: '' },
        { rank: 3, name: '乙支OB熊', area: '乙支路', note: '烧酒文化', link: '' },
        { rank: 4, name: '满月会馆', area: '延南洞', note: '活章鱼体验', link: '' },
        { rank: 5, name: 'Pocha街', area: '弘大', note: '帐篷酒吧', link: '' }
    ],
    store: [
        { rank: 1, name: 'GS25', area: '全国', note: '性价比之王', link: '' },
        { rank: 2, name: 'CU', area: '全国', note: '款式最多', link: '' },
        { rank: 3, name: '7-Eleven', area: '全国', note: '饭团好吃', link: '' },
        { rank: 4, name: 'Emart24', area: '全国', note: '自有品牌不错', link: '' },
        { rank: 5, name: 'Olive Young', area: '全国', note: '美妆+零食', link: '' }
    ],
    canteen: [
        { rank: 1, name: '学生会馆食堂', area: '各大学', note: '便宜大碗', link: '' },
        { rank: 2, name: '金北顺大锅盖', area: '弘大', note: '泡菜炒饭绝', link: '' },
        { rank: 3, name: '顺熙家', area: '新村', note: '韩定食性价比', link: '' },
        { rank: 4, name: '明洞饺子', area: '明洞', note: '刀切面+饺子', link: '' },
        { rank: 5, name: '梨花食堂', area: '弘大', note: '炸猪排量大', link: '' }
    ]
};
