import {
  Lesson,
  LessonSection,
  Example,
  VocabularyItem,
  GrammarPoint,
  Dialogue,
  DialogueExchange,
  Exercise,
} from "./LessonModel";

const lesson5 = new Lesson({
  id: 5,
  title: "Ẩm thực và nhà hàng",
  description:
    "Học cách nói về ẩm thực Nhật Bản, đặt món tại nhà hàng và hiểu các nghi thức khi dùng bữa. Bài học này giúp bạn tự tin khi đi ăn ở Nhật và hiểu về văn hóa ẩm thực.",

  objectives: [
    "Biết tên các món ăn phổ biến ở Nhật Bản",
    "Học cách đặt món trong nhà hàng",
    "Hiểu các nghi thức và phép lịch sự khi ăn uống",
    "Biết cách sử dụng đũa và các dụng cụ ăn uống",
    "Học cách khen ngợi món ăn và cảm ơn",
  ],

  introduction: [
    new LessonSection(
      "Giới thiệu",
      [
        "Ẩm thực Nhật Bản không chỉ nổi tiếng với hương vị độc đáo mà còn được biết đến với cách trình bày đẹp mắt và nghi thức dùng bữa trang trọng. Trong bài học này, chúng ta sẽ tìm hiểu về các món ăn phổ biến, cách gọi món và các nghi thức ăn uống tại Nhật Bản. Việc hiểu biết về văn hóa ẩm thực sẽ giúp bạn tự tin hơn khi đi ăn tại nhà hàng Nhật và hiểu sâu hơn về một khía cạnh quan trọng trong văn hóa Nhật Bản.",
      ],
      []
    ),
  ],

  vocabulary: [
    new VocabularyItem("ご飯", "Gohan", "Cơm", "Danh từ"),
    new VocabularyItem("味噌汁", "Misoshiru", "Canh miso", "Danh từ"),
    new VocabularyItem("寿司", "Sushi", "Sushi", "Danh từ"),
    new VocabularyItem("刺身", "Sashimi", "Sashimi (hải sản sống)", "Danh từ"),
    new VocabularyItem("天ぷら", "Tenpura", "Tempura (đồ chiên)", "Danh từ"),
    new VocabularyItem("うどん", "Udon", "Mì udon", "Danh từ"),
    new VocabularyItem("そば", "Soba", "Mì soba", "Danh từ"),
    new VocabularyItem("ラーメン", "Raamen", "Mì ramen", "Danh từ"),
    new VocabularyItem("丼", "Donburi", "Cơm trộn", "Danh từ"),
    new VocabularyItem("お茶", "Ocha", "Trà", "Danh từ"),
    new VocabularyItem("お酒", "Osake", "Rượu sake", "Danh từ"),
    new VocabularyItem("ビール", "Biiru", "Bia", "Danh từ"),
    new VocabularyItem("水", "Mizu", "Nước", "Danh từ"),
    new VocabularyItem("お箸", "Ohashi", "Đũa", "Danh từ"),
    new VocabularyItem("スプーン", "Supuun", "Thìa", "Danh từ"),
    new VocabularyItem("フォーク", "Fooku", "Nĩa", "Danh từ"),
    new VocabularyItem("お皿", "Osara", "Đĩa", "Danh từ"),
    new VocabularyItem("お椀", "Owan", "Bát", "Danh từ"),
    new VocabularyItem("レストラン", "Resutoran", "Nhà hàng", "Danh từ"),
    new VocabularyItem("メニュー", "Menyuu", "Thực đơn", "Danh từ"),
    new VocabularyItem("注文", "Chuumon", "Đặt món", "Danh từ"),
    new VocabularyItem("予約", "Yoyaku", "Đặt chỗ", "Danh từ"),
    new VocabularyItem("会計", "Kaikei", "Thanh toán", "Danh từ"),
    new VocabularyItem("おいしい", "Oishii", "Ngon", "Tính từ -i"),
    new VocabularyItem("辛い", "Karai", "Cay", "Tính từ -i"),
    new VocabularyItem("甘い", "Amai", "Ngọt", "Tính từ -i"),
    new VocabularyItem("塩辛い", "Shiokarai", "Mặn", "Tính từ -i"),
    new VocabularyItem("食べる", "Taberu", "Ăn", "Động từ nhóm 2"),
    new VocabularyItem("飲む", "Nomu", "Uống", "Động từ nhóm 1"),
    new VocabularyItem(
      "いただきます",
      "Itadakimasu",
      "Cảm ơn vì bữa ăn (nói trước khi ăn)",
      "Biểu thức"
    ),
    new VocabularyItem(
      "ごちそうさま",
      "Gochisousama",
      "Cảm ơn vì bữa ăn (nói sau khi ăn)",
      "Biểu thức"
    ),
  ],

  grammar: [
    new GrammarPoint(
      "〜を食べます/飲みます",
      "Cấu trúc cơ bản để nói về ăn và uống. '〜を' (~wo) là trợ từ chỉ đối tượng, '食べます' (tabemasu) là 'ăn', và '飲みます' (nomimasu) là 'uống' ở thể lịch sự.",
      [
        new Example("寿司を食べます。", "Sushi wo tabemasu.", "Tôi ăn sushi."),
        new Example("お茶を飲みます。", "Ocha wo nomimasu.", "Tôi uống trà."),
      ]
    ),
    new GrammarPoint(
      "〜が好きです/嫌いです",
      "Cấu trúc diễn tả sở thích về đồ ăn hoặc thức uống. '〜が' (~ga) là trợ từ, '好きです' (suki desu) là 'thích', và '嫌いです' (kirai desu) là 'không thích'.",
      [
        new Example(
          "ラーメンが好きです。",
          "Raamen ga suki desu.",
          "Tôi thích mì ramen."
        ),
        new Example(
          "納豆が嫌いです。",
          "Nattou ga kirai desu.",
          "Tôi không thích natto."
        ),
      ]
    ),
    new GrammarPoint(
      "〜をください",
      "Cấu trúc dùng để yêu cầu hoặc đặt món. '〜を' (~wo) là trợ từ chỉ đối tượng, và 'ください' (kudasai) có nghĩa là 'làm ơn cho tôi'.",
      [
        new Example(
          "ビールをください。",
          "Biiru wo kudasai.",
          "Cho tôi bia, làm ơn."
        ),
        new Example(
          "メニューをください。",
          "Menyuu wo kudasai.",
          "Cho tôi xem thực đơn, làm ơn."
        ),
      ]
    ),
    new GrammarPoint(
      "〜は〜です",
      "Cấu trúc cơ bản để mô tả đồ ăn. '〜は' (~wa) là trợ từ chỉ chủ đề, và '〜です' (~desu) là 'là'.",
      [
        new Example(
          "このラーメンはおいしいです。",
          "Kono raamen wa oishii desu.",
          "Mì ramen này ngon."
        ),
        new Example(
          "この料理は辛いです。",
          "Kono ryouri wa karai desu.",
          "Món ăn này cay."
        ),
      ]
    ),
    new GrammarPoint(
      "〜に〜があります/います",
      "Cấu trúc chỉ vị trí của một nhà hàng hoặc quán ăn. '〜に' (~ni) là trợ từ chỉ vị trí, và '〜があります/います' (~ga arimasu/imasu) là 'có'.",
      [
        new Example(
          "この近くに寿司屋があります。",
          "Kono chikaku ni sushiya ga arimasu.",
          "Có một tiệm sushi gần đây."
        ),
        new Example(
          "駅の前にレストランがあります。",
          "Eki no mae ni resutoran ga arimasu.",
          "Có một nhà hàng trước ga."
        ),
      ]
    ),
  ],

  dialogues: [
    new Dialogue(
      "Đặt món tại nhà hàng",
      [
        new DialogueExchange(
          "ウェイター (Waiter)",
          "いらっしゃいませ。何名様ですか。",
          "Irasshaimase. Nan mei sama desuka.",
          "Xin chào quý khách. Quý khách mấy người?"
        ),
        new DialogueExchange(
          "ナム (Nam)",
          "二人です。",
          "Futari desu.",
          "Hai người."
        ),
        new DialogueExchange(
          "ウェイター",
          "かしこまりました。こちらへどうぞ。メニューです。",
          "Kashikomarimashita. Kochira e douzo. Menyuu desu.",
          "Vâng. Xin mời ngồi đây. Đây là thực đơn."
        ),
        new DialogueExchange(
          "ナム",
          "ありがとうございます。すみません、おすすめは何ですか。",
          "Arigatou gozaimasu. Sumimasen, osusume wa nan desuka.",
          "Cảm ơn. Xin lỗi, món nào được đề xuất ạ?"
        ),
        new DialogueExchange(
          "ウェイター",
          "今日のおすすめは海鮮丼と天ぷらセットです。",
          "Kyou no osusume wa kaisen donburi to tenpura setto desu.",
          "Món được đề xuất hôm nay là cơm trộn hải sản và bộ tempura."
        ),
        new DialogueExchange(
          "ナム",
          "じゃ、海鮮丼を一つと天ぷらセットを一つください。あと、お茶を二つお願いします。",
          "Ja, kaisen donburi wo hitotsu to tenpura setto wo hitotsu kudasai. Ato, ocha wo futatsu onegaishimasu.",
          "Vậy, xin cho một cơm trộn hải sản và một bộ tempura. Ngoài ra, cho hai trà."
        ),
        new DialogueExchange(
          "ウェイター",
          "かしこまりました。少々お待ちください。",
          "Kashikomarimashita. Shoushou omachi kudasai.",
          "Vâng. Xin vui lòng đợi một chút."
        ),
      ],
      "Tình huống đặt món tại nhà hàng. Chú ý cách sử dụng từ 'おすすめ' (osusume) có nghĩa là 'món được đề xuất', và cách đếm đồ vật '一つ' (hitotsu), '二つ' (futatsu)."
    ),
    new Dialogue(
      "Thanh toán tại nhà hàng",
      [
        new DialogueExchange(
          "ナム",
          "すみません、会計をお願いします。",
          "Sumimasen, kaikei wo onegaishimasu.",
          "Xin lỗi, làm ơn tính tiền."
        ),
        new DialogueExchange(
          "ウェイター",
          "はい、少々お待ちください。お会計は税込みで3,240円になります。",
          "Hai, shoushou omachi kudasai. Okaikei wa zeikomi de sanzen nihyaku yonjuu en ni narimasu.",
          "Vâng, xin chờ một chút. Tổng cộng là 3,240 yên, đã bao gồm thuế."
        ),
        new DialogueExchange(
          "ナム",
          "カードで払ってもいいですか。",
          "Kaado de haratte mo ii desuka.",
          "Tôi có thể trả bằng thẻ được không?"
        ),
        new DialogueExchange(
          "ウェイター",
          "はい、もちろんです。こちらでどうぞ。",
          "Hai, mochiron desu. Kochira de douzo.",
          "Vâng, dĩ nhiên. Xin mời thanh toán ở đây."
        ),
        new DialogueExchange(
          "ナム",
          "ありがとうございます。とてもおいしかったです。",
          "Arigatou gozaimasu. Totemo oishikatta desu.",
          "Cảm ơn. Rất ngon."
        ),
        new DialogueExchange(
          "ウェイター",
          "ありがとうございました。またお越しください。",
          "Arigatou gozaimashita. Mata okoshi kudasai.",
          "Cảm ơn quý khách. Mong quý khách ghé lại lần sau."
        ),
      ],
      "Tình huống thanh toán tại nhà hàng. Chú ý cách sử dụng từ '会計' (kaikei) có nghĩa là 'thanh toán', và '税込み' (zeikomi) có nghĩa là 'đã bao gồm thuế'."
    ),
  ],

  exercises: [
    new Exercise(
      "multiple-choice",
      "Khi bạn muốn nói 'Tôi thích sushi', bạn nói thế nào?",
      [
        "寿司が好きです。",
        "寿司を好きです。",
        "寿司は好きです。",
        "好きは寿司です。",
      ],
      "寿司が好きです。",
      "Khi diễn tả sở thích, dùng trợ từ 'が' (ga) với từ '好き' (suki)."
    ),
    new Exercise(
      "fill-in-blank",
      "レストランで「＿＿＿＿＿＿」と言います。",
      ["いただきます", "ごちそうさま", "こんにちは"],
      "いただきます",
      "Điền từ thích hợp mà bạn nói trước khi ăn"
    ),
    new Exercise(
      "matching",
      "Nối các món ăn với mô tả tương ứng",
      [
        { japanese: "寿司", english: "Cơm cuộn hải sản" },
        { japanese: "天ぷら", english: "Đồ chiên giòn" },
        { japanese: "ラーメン", english: "Mì nước" },
        { japanese: "刺身", english: "Hải sản sống thái lát" },
      ],
      "",
      "Hãy nối các món ăn Nhật Bản với mô tả tương ứng"
    ),
    new Exercise(
      "speaking",
      "Bạn đang ở một nhà hàng Nhật Bản. Hãy đặt một bộ sushi, một tô mì ramen và hai cốc nước bằng tiếng Nhật.",
      [],
      "",
      "Sử dụng cấu trúc '〜をください' (xin hãy cho tôi ~) và từ để đếm đồ vật như '一つ' (hitotsu), '一杯' (ippai)."
    ),
  ],

  culturalNotes: [
    new LessonSection(
      "Phép tắc khi ăn uống ở Nhật Bản",
      [
        "Ẩm thực Nhật Bản có nhiều nghi thức và quy tắc quan trọng. Trước khi ăn, người Nhật thường nói 'いただきます' (itadakimasu), một biểu thức cảm ơn đối với thức ăn và người chuẩn bị. Sau khi ăn xong, họ nói 'ごちそうさま' (gochisousama) để bày tỏ lòng biết ơn về bữa ăn. Khi sử dụng đũa, tránh cắm đũa thẳng đứng vào cơm (shoushi-bashi), vì điều này gợi nhớ đến nghi lễ tang ma. Cũng không nên chuyển thức ăn từ đũa này sang đũa khác (utsushi-bashi), vì điều này cũng liên quan đến nghi thức tang lễ.",
      ],
      []
    ),
    new LessonSection(
      "Văn hóa ẩm thực Washoku",
      [
        "Washoku (和食) - ẩm thực truyền thống Nhật Bản đã được UNESCO công nhận là di sản văn hóa phi vật thể vào năm 2013. Washoku nhấn mạnh vào sự hài hòa của các nguyên liệu tươi theo mùa, cách trình bày đẹp mắt và tôn trọng hương vị tự nhiên của thực phẩm. Một bữa ăn Washoku truyền thống thường bao gồm cơm, món súp (thường là miso), 3 món phụ (phổ biến như cá nướng, đậu phụ, rau luộc) và tsukemono (rau củ muối chua). Phong cách ăn uống này không chỉ nhấn mạnh vào hương vị mà còn cả sức khỏe và sự cân bằng dinh dưỡng.",
      ],
      []
    ),
  ],

  additionalResources: [
    {
      title: "Hướng dẫn sử dụng đũa đúng cách",
      url: "https://example.com/chopsticks-guide",
    },
    {
      title: "100 món ăn Nhật Bản phổ biến",
      url: "https://example.com/japanese-food-guide",
    },
    {
      title: "Từ vựng nhà hàng tiếng Nhật",
      url: "https://example.com/japanese-restaurant-vocabulary",
    },
  ],
});

export default lesson5;
