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

const lesson6 = new Lesson({
  id: 6,
  title: "Chào hỏi khi thăm nhà người khác",
  description:
    "Học cách chào hỏi và các phép tắc khi thăm nhà người Nhật. Bài học này giúp bạn hiểu các nghi thức xã hội quan trọng khi được mời đến nhà người khác ở Nhật Bản.",

  objectives: [
    "Học các cách chào hỏi khi đến thăm nhà người Nhật",
    "Hiểu phép tắc khi vào nhà người khác ở Nhật Bản",
    "Biết cách thể hiện sự lịch sự và tôn trọng khi là khách",
    "Học từ vựng liên quan đến căn nhà và các vật dụng",
    "Học cách tặng quà và bày tỏ lòng biết ơn khi đến thăm",
  ],

  introduction: [
    new LessonSection(
      "Giới thiệu",
      [
        "Văn hóa Nhật Bản có nhiều phép tắc xã hội tinh tế, đặc biệt là khi đến thăm nhà người khác. Từ cách cởi giày ở genkan (玄関 - lối vào), cách chào hỏi đúng mực, đến việc mang theo quà khi đến chơi nhà, tất cả đều phản ánh cách ứng xử lịch thiệp trong xã hội Nhật Bản. Trong bài học này, bạn sẽ học cách giao tiếp đúng đắn khi đến thăm nhà người Nhật, giúp bạn tránh những sai sót về văn hóa và tạo ấn tượng tốt với chủ nhà.",
      ],
      []
    ),
  ],

  vocabulary: [
    new VocabularyItem(
      "お邪魔します",
      "Ojama shimasu",
      "Xin phép được làm phiền (nói khi vào nhà người khác)",
      "Biểu thức"
    ),
    new VocabularyItem(
      "ただいま",
      "Tadaima",
      "Tôi đã về (nói khi về nhà mình)",
      "Biểu thức"
    ),
    new VocabularyItem(
      "おかえりなさい",
      "Okaerinasai",
      "Chào mừng trở về (đáp lại 'tadaima')",
      "Biểu thức"
    ),
    new VocabularyItem("家", "Ie/Uchi", "Nhà", "Danh từ"),
    new VocabularyItem("玄関", "Genkan", "Lối vào, nơi cởi giày", "Danh từ"),
    new VocabularyItem("靴", "Kutsu", "Giày", "Danh từ"),
    new VocabularyItem("スリッパ", "Surippa", "Dép đi trong nhà", "Danh từ"),
    new VocabularyItem("お土産", "Omiyage", "Quà", "Danh từ"),
    new VocabularyItem("リビング", "Ribingu", "Phòng khách", "Danh từ"),
    new VocabularyItem("キッチン", "Kitchin", "Nhà bếp", "Danh từ"),
    new VocabularyItem(
      "お手洗い",
      "Otearai",
      "Nhà vệ sinh (cách nói lịch sự)",
      "Danh từ"
    ),
    new VocabularyItem("トイレ", "Toire", "Nhà vệ sinh", "Danh từ"),
    new VocabularyItem("寝室", "Shinshitsu", "Phòng ngủ", "Danh từ"),
    new VocabularyItem("畳", "Tatami", "Chiếu tatami", "Danh từ"),
    new VocabularyItem("和室", "Washitsu", "Phòng kiểu Nhật", "Danh từ"),
    new VocabularyItem("洋室", "Youshitsu", "Phòng kiểu phương Tây", "Danh từ"),
    new VocabularyItem("座布団", "Zabuton", "Đệm ngồi", "Danh từ"),
    new VocabularyItem("お茶", "Ocha", "Trà", "Danh từ"),
    new VocabularyItem("お菓子", "Okashi", "Bánh kẹo", "Danh từ"),
    new VocabularyItem(
      "招待する",
      "Shoutai suru",
      "Mời, mời đến chơi",
      "Động từ nhóm 3"
    ),
    new VocabularyItem(
      "案内する",
      "Annai suru",
      "Dẫn đường, hướng dẫn",
      "Động từ nhóm 3"
    ),
    new VocabularyItem("脱ぐ", "Nugu", "Cởi (giày, áo...)", "Động từ nhóm 1"),
    new VocabularyItem(
      "上がる",
      "Agaru",
      "Bước vào, đi lên (nhà)",
      "Động từ nhóm 1"
    ),
    new VocabularyItem("見せる", "Miseru", "Cho xem", "Động từ nhóm 2"),
    new VocabularyItem("素敵", "Suteki", "Đẹp, tuyệt vời", "Tính từ -na"),
    new VocabularyItem("広い", "Hiroi", "Rộng", "Tính từ -i"),
    new VocabularyItem("狭い", "Semai", "Chật, hẹp", "Tính từ -i"),
    new VocabularyItem("きれい", "Kirei", "Đẹp, sạch sẽ", "Tính từ -na"),
    new VocabularyItem(
      "ごゆっくり",
      "Goyukkuri",
      "Xin hãy thoải mái",
      "Biểu thức"
    ),
    new VocabularyItem("どうぞ", "Douzo", "Xin mời", "Trợ từ"),
  ],

  grammar: [
    new GrammarPoint(
      "〜てください",
      "Cấu trúc lịch sự để yêu cầu hoặc mời ai đó làm gì. Động từ ở dạng te + ください (kudasai).",
      [
        new Example(
          "ここに座ってください。",
          "Koko ni suwatte kudasai.",
          "Xin hãy ngồi ở đây."
        ),
        new Example(
          "お茶を飲んでください。",
          "Ocha wo nonde kudasai.",
          "Xin mời uống trà."
        ),
      ]
    ),
    new GrammarPoint(
      "〜てもいいですか",
      "Cấu trúc để hỏi xin phép làm gì đó. Động từ ở dạng te + もいいですか (mo ii desu ka).",
      [
        new Example(
          "お手洗いを使ってもいいですか。",
          "Otearai wo tsukatte mo ii desu ka.",
          "Tôi có thể sử dụng nhà vệ sinh được không?"
        ),
        new Example(
          "写真を撮ってもいいですか。",
          "Shashin wo totte mo ii desu ka.",
          "Tôi có thể chụp ảnh được không?"
        ),
      ]
    ),
    new GrammarPoint(
      "どうぞ〜てください",
      "Cấu trúc lịch sự để mời ai đó làm gì. 'どうぞ' (douzo) nghĩa là 'xin mời' + động từ ở dạng te + ください (kudasai).",
      [
        new Example(
          "どうぞ入ってください。",
          "Douzo haitte kudasai.",
          "Xin mời vào."
        ),
        new Example(
          "どうぞ座ってください。",
          "Douzo suwatte kudasai.",
          "Xin mời ngồi."
        ),
      ]
    ),
    new GrammarPoint(
      "〜はどこですか",
      "Cấu trúc để hỏi vị trí của một địa điểm hoặc đồ vật. '〜は' (~wa) là trợ từ chỉ chủ đề, 'どこ' (doko) là 'ở đâu', và 'ですか' (desu ka) là trợ từ nghi vấn.",
      [
        new Example(
          "お手洗いはどこですか。",
          "Otearai wa doko desu ka.",
          "Nhà vệ sinh ở đâu?"
        ),
        new Example(
          "冷蔵庫はどこですか。",
          "Reizouko wa doko desu ka.",
          "Tủ lạnh ở đâu?"
        ),
      ]
    ),
    new GrammarPoint(
      "〜をどうぞ",
      "Cấu trúc dùng khi đưa hoặc mời ai đó một vật gì đó. '〜を' (~wo) là trợ từ chỉ đối tượng, và 'どうぞ' (douzo) là 'xin mời'.",
      [
        new Example(
          "これをどうぞ。",
          "Kore wo douzo.",
          "Xin mời nhận cái này."
        ),
        new Example("お茶をどうぞ。", "Ocha wo douzo.", "Mời dùng trà."),
      ]
    ),
  ],

  dialogues: [
    new Dialogue(
      "Đến thăm nhà bạn",
      [
        new DialogueExchange(
          "鈴木 (Suzuki)",
          "こんにちは。よく来てくれましたね。",
          "Konnichiwa. Yoku kite kuremashita ne.",
          "Xin chào. Cảm ơn bạn đã đến."
        ),
        new DialogueExchange(
          "リン (Linh)",
          "こんにちは。お邪魔します。これ、ちょっとしたお土産です。",
          "Konnichiwa. Ojama shimasu. Kore, chotto shita omiyage desu.",
          "Xin chào. Xin phép được làm phiền. Đây là một món quà nhỏ."
        ),
        new DialogueExchange(
          "鈴木",
          "わあ、ありがとうございます。気を使わなくてもいいのに。どうぞ、お上がりください。",
          "Waa, arigatou gozaimasu. Ki wo tsukawanakute mo ii noni. Douzo, oagari kudasai.",
          "Ồ, cảm ơn bạn. Bạn không cần phải bận tâm đâu. Xin mời vào."
        ),
        new DialogueExchange(
          "リン",
          "失礼します。",
          "Shitsurei shimasu.",
          "Xin phép."
        ),
        new DialogueExchange(
          "鈴木",
          "スリッパを履いてください。どうぞ、こちらへ。",
          "Surippa wo haite kudasai. Douzo, kochira e.",
          "Hãy đi dép trong nhà. Mời đi lối này."
        ),
        new DialogueExchange(
          "リン",
          "素敵なお家ですね。",
          "Suteki na oie desu ne.",
          "Nhà đẹp quá."
        ),
        new DialogueExchange(
          "鈴木",
          "ありがとうございます。ちょっと狭いですが…どうぞ、座ってください。お茶を入れますね。",
          "Arigatou gozaimasu. Chotto semai desu ga... Douzo, suwatte kudasai. Ocha wo iremasu ne.",
          "Cảm ơn bạn. Hơi nhỏ một chút... Mời bạn ngồi. Tôi sẽ pha trà."
        ),
      ],
      "Tình huống đến thăm nhà bạn. Chú ý cách sử dụng biểu thức 'お邪魔します' (ojama shimasu) khi vào nhà người khác, và việc tặng quà omiyage là phong tục phổ biến ở Nhật Bản."
    ),
    new Dialogue(
      "Được chủ nhà đưa đi tham quan nhà",
      [
        new DialogueExchange(
          "田中 (Tanaka)",
          "我が家を案内しましょうか。",
          "Waga ya wo annai shimashou ka.",
          "Để tôi đưa bạn đi tham quan nhà nhé?"
        ),
        new DialogueExchange(
          "アン (An)",
          "ぜひお願いします。",
          "Zehi onegaishimasu.",
          "Vâng, xin vui lòng."
        ),
        new DialogueExchange(
          "田中",
          "こちらはリビングです。そして、ここはキッチンです。",
          "Kochira wa ribingu desu. Soshite, koko wa kitchin desu.",
          "Đây là phòng khách. Và đây là nhà bếp."
        ),
        new DialogueExchange(
          "アン",
          "広くて素敵なキッチンですね。",
          "Hirokute suteki na kitchin desu ne.",
          "Nhà bếp rộng rãi và đẹp quá."
        ),
        new DialogueExchange(
          "田中",
          "ありがとう。こちらは和室です。畳の部屋です。",
          "Arigatou. Kochira wa washitsu desu. Tatami no heya desu.",
          "Cảm ơn. Đây là phòng kiểu Nhật. Là phòng có chiếu tatami."
        ),
        new DialogueExchange(
          "アン",
          "わあ、日本の伝統的な部屋ですね。座布団がありますね。",
          "Waa, Nihon no dentouteki na heya desu ne. Zabuton ga arimasu ne.",
          "Ồ, đây là phòng truyền thống Nhật Bản nhỉ. Có cả đệm ngồi nữa."
        ),
        new DialogueExchange(
          "田中",
          "そうです。お手洗いはこちらです。",
          "Sou desu. Otearai wa kochira desu.",
          "Đúng vậy. Nhà vệ sinh ở đằng này."
        ),
        new DialogueExchange(
          "アン",
          "ありがとうございます。とても素敵なお家ですね。",
          "Arigatou gozaimasu. Totemo suteki na oie desu ne.",
          "Cảm ơn bạn. Nhà rất đẹp."
        ),
      ],
      "Tình huống được chủ nhà đưa đi tham quan. Chú ý cách sử dụng từ '案内' (annai) có nghĩa là 'hướng dẫn', và các từ mô tả không gian như '広い' (hiroi - rộng) và '素敵' (suteki - đẹp, tuyệt vời)."
    ),
  ],

  exercises: [
    new Exercise(
      "multiple-choice",
      "Khi bước vào nhà người Nhật, bạn nên nói gì?",
      ["お邪魔します", "ただいま", "こんにちは", "さようなら"],
      "お邪魔します",
      "Khi vào nhà người khác ở Nhật, người ta thường nói 'お邪魔します' (ojama shimasu), có nghĩa là 'Xin phép được làm phiền'."
    ),
    new Exercise(
      "fill-in-blank",
      "田中さんの家に行きます。お土産を＿＿＿＿ましょう。",
      ["持って", "買って", "作って"],
      "持って",
      "Điền từ thích hợp để hoàn thành câu 'Tôi sẽ đến nhà anh Tanaka. Hãy ___ quà.'"
    ),
    new Exercise(
      "matching",
      "Nối các từ chỉ không gian trong nhà với nghĩa tương ứng",
      [
        { japanese: "キッチン", english: "Nhà bếp" },
        { japanese: "リビング", english: "Phòng khách" },
        { japanese: "寝室", english: "Phòng ngủ" },
        { japanese: "お手洗い", english: "Nhà vệ sinh" },
      ],
      "",
      "Hãy nối các từ chỉ không gian trong nhà tiếng Nhật với nghĩa tiếng Việt tương ứng"
    ),
    new Exercise(
      "speaking",
      "Bạn đang thăm nhà một người bạn Nhật. Hãy hỏi xin phép được sử dụng nhà vệ sinh bằng tiếng Nhật.",
      [],
      "",
      "Sử dụng cấu trúc '〜てもいいですか' để hỏi xin phép. Ví dụ: 'お手洗いを使ってもいいですか。' (Tôi có thể sử dụng nhà vệ sinh được không?)"
    ),
  ],

  culturalNotes: [
    new LessonSection(
      "Tập quán cởi giày khi vào nhà ở Nhật Bản",
      [
        "Ở Nhật Bản, mọi người luôn cởi giày khi vào nhà. Khu vực lối vào nhà, gọi là 'genkan' (玄関), được thiết kế thấp hơn một chút so với phần còn lại của nhà. Đây là nơi mọi người cởi giày trước khi bước lên phần sàn nhà cao hơn. Chủ nhà thường chuẩn bị dép đi trong nhà (slippers) cho khách. Tuy nhiên, khi vào phòng có chiếu tatami, bạn cũng phải cởi cả dép ra. Tập quán này không chỉ giữ cho nhà sạch sẽ mà còn là một phần của văn hóa Nhật Bản, phản ánh sự tôn trọng đối với không gian sống.",
      ],
      []
    ),
    new LessonSection(
      "Văn hóa tặng quà Omiyage",
      [
        "Mang theo quà khi đến thăm nhà ai đó là một phong tục quan trọng trong văn hóa Nhật Bản. Loại quà này, gọi là 'omiyage' (お土産), thường là thực phẩm đóng gói đẹp mắt như bánh kẹo đặc sản địa phương, trái cây theo mùa, hoặc đồ uống như trà hoặc rượu sake. Omiyage không nhất thiết phải đắt tiền, nhưng nên được đóng gói cẩn thận và trang trọng. Khi tặng quà, người Nhật thường nói 'つまらないものですが...' (tsumaranai mono desu ga...), có nghĩa là 'Đây chỉ là một món quà nhỏ...', thể hiện sự khiêm tốn. Người nhận thường không mở quà ngay lập tức, trừ khi được người tặng gợi ý.",
      ],
      []
    ),
  ],

  additionalResources: [
    {
      title: "Video: Phép tắc khi thăm nhà người Nhật",
      url: "https://example.com/japanese-home-etiquette-video",
    },
    {
      title: "Từ vựng về đồ vật trong nhà tiếng Nhật",
      url: "https://example.com/japanese-house-vocabulary",
    },
    {
      title: "Hướng dẫn chọn omiyage phù hợp",
      url: "https://example.com/choosing-omiyage-guide",
    },
  ],
});

export default lesson6;
