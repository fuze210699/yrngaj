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

const lesson8 = new Lesson({
  id: 8,
  title: "Từ chối lời mời và giải thích lý do",
  description:
    "Học cách từ chối lời mời một cách lịch sự và giải thích lý do trong tiếng Nhật. Bài học này giúp bạn xử lý tình huống từ chối mà không làm tổn hại mối quan hệ.",

  objectives: [
    "Học cách từ chối lời mời một cách lịch sự trong tiếng Nhật",
    "Hiểu cách đưa ra lý do phù hợp để từ chối",
    "Nắm vững cách sử dụng biểu thức xin lỗi khi từ chối",
    "Học cách đề xuất thời gian hoặc hoạt động thay thế",
    "Hiểu các nghi thức xã hội khi từ chối trong văn hóa Nhật Bản",
  ],

  introduction: [
    new LessonSection(
      "Giới thiệu",
      [
        "Trong văn hóa Nhật Bản, việc từ chối lời mời trực tiếp có thể được coi là thô lỗ. Người Nhật thường tránh nói 'không' một cách trực tiếp và thay vào đó sử dụng các cách diễn đạt gián tiếp hoặc đưa ra lý do để từ chối nhằm giữ hòa khí. Trong bài học này, chúng ta sẽ học cách từ chối lời mời một cách lịch sự, đưa ra lý do phù hợp, và đề xuất các lựa chọn thay thế để không làm tổn hại mối quan hệ. Những kỹ năng này rất quan trọng để duy trì các mối quan hệ xã hội và chuyên nghiệp trong môi trường Nhật Bản.",
      ],
      []
    ),
  ],

  vocabulary: [
    new VocabularyItem("誘い", "Sasoi", "Lời mời", "Danh từ"),
    new VocabularyItem("約束", "Yakusoku", "Cuộc hẹn, lời hứa", "Danh từ"),
    new VocabularyItem("予定", "Yotei", "Kế hoạch, lịch trình", "Danh từ"),
    new VocabularyItem("都合", "Tsugou", "Sự tiện lợi, tình huống", "Danh từ"),
    new VocabularyItem("理由", "Riyuu", "Lý do", "Danh từ"),
    new VocabularyItem("残業", "Zangyou", "Làm thêm giờ", "Danh từ"),
    new VocabularyItem("締め切り", "Shimekiri", "Hạn chót", "Danh từ"),
    new VocabularyItem("用事", "Youji", "Việc cần làm", "Danh từ"),
    new VocabularyItem("予約", "Yoyaku", "Đặt chỗ, đặt lịch", "Danh từ"),
    new VocabularyItem("体調", "Taichou", "Tình trạng sức khỏe", "Danh từ"),
    new VocabularyItem("風邪", "Kaze", "Cảm lạnh", "Danh từ"),
    new VocabularyItem("頭痛", "Zutsuu", "Đau đầu", "Danh từ"),
    new VocabularyItem("熱", "Netsu", "Sốt", "Danh từ"),
    new VocabularyItem("忙しい", "Isogashii", "Bận rộn", "Tính từ -i"),
    new VocabularyItem("残念", "Zannen", "Tiếc, đáng tiếc", "Tính từ -na"),
    new VocabularyItem("大丈夫", "Daijoubu", "Ổn, được", "Tính từ -na"),
    new VocabularyItem(
      "申し訳ない",
      "Moushiwake nai",
      "Xin lỗi (mang tính chính thức)",
      "Biểu thức"
    ),
    new VocabularyItem("すみません", "Sumimasen", "Xin lỗi", "Biểu thức"),
    new VocabularyItem(
      "ごめんなさい",
      "Gomen nasai",
      "Xin lỗi (thân mật)",
      "Biểu thức"
    ),
    new VocabularyItem(
      "〜ができません",
      "~ga dekimasen",
      "Không thể ~",
      "Biểu thức"
    ),
    new VocabularyItem(
      "〜ちょっと…",
      "~chotto...",
      "Có hơi ~ (cách từ chối gián tiếp)",
      "Biểu thức"
    ),
    new VocabularyItem("誘う", "Sasou", "Mời, rủ", "Động từ nhóm 1"),
    new VocabularyItem("断る", "Kotowaru", "Từ chối", "Động từ nhóm 1"),
    new VocabularyItem("参加する", "Sanka suru", "Tham gia", "Động từ nhóm 3"),
    new VocabularyItem("延期する", "Enki suru", "Hoãn lại", "Động từ nhóm 3"),
    new VocabularyItem(
      "キャンセルする",
      "Kyanseru suru",
      "Hủy bỏ",
      "Động từ nhóm 3"
    ),
    new VocabularyItem(
      "都合が悪い",
      "Tsugou ga warui",
      "Không tiện, không thuận lợi",
      "Biểu thức"
    ),
    new VocabularyItem("また今度", "Mata kondo", "Lần sau nhé", "Biểu thức"),
    new VocabularyItem("次回", "Jikai", "Lần tới", "Danh từ"),
    new VocabularyItem("改めて", "Aratamete", "Lại, một lần nữa", "Phó từ"),
  ],

  grammar: [
    new GrammarPoint(
      "〜てすみません",
      "Cấu trúc dùng để xin lỗi khi từ chối. Động từ ở dạng te form + すみません (sumimasen) hoặc 申し訳ありません (moushiwake arimasen).",
      [
        new Example(
          "行けなくてすみません。",
          "Ikenakute sumimasen.",
          "Xin lỗi vì không thể đi được."
        ),
        new Example(
          "参加できなくて申し訳ありません。",
          "Sanka dekinakute moushiwake arimasen.",
          "Tôi rất xin lỗi vì không thể tham gia."
        ),
      ]
    ),
    new GrammarPoint(
      "〜ので、〜",
      "Cấu trúc dùng để giải thích lý do. '〜ので' (~node) có nghĩa là 'vì, bởi vì' và nối liền lý do với kết quả hoặc quyết định.",
      [
        new Example(
          "明日は仕事が忙しいので、パーティーに行けません。",
          "Ashita wa shigoto ga isogashii node, paatii ni ikemasen.",
          "Vì ngày mai công việc bận rộn nên tôi không thể đi dự tiệc."
        ),
        new Example(
          "風邪を引いているので、今日は休みます。",
          "Kaze wo hiite iru node, kyou wa yasumimasu.",
          "Vì bị cảm nên hôm nay tôi xin nghỉ."
        ),
      ]
    ),
    new GrammarPoint(
      "〜が、〜",
      "Cấu trúc diễn đạt sự đối lập hoặc tiếc nuối. '〜が' (~ga) tương đương với 'nhưng' và thường được dùng khi từ chối sau khi bày tỏ sự cảm kích.",
      [
        new Example(
          "誘ってくれてありがとうございますが、その日は都合が悪いです。",
          "Sasotte kurete arigatou gozaimasu ga, sono hi wa tsugou ga warui desu.",
          "Cảm ơn vì đã mời, nhưng ngày đó tôi không tiện."
        ),
        new Example(
          "行きたいですが、予定があります。",
          "Ikitai desu ga, yotei ga arimasu.",
          "Tôi muốn đi, nhưng tôi có kế hoạch khác."
        ),
      ]
    ),
    new GrammarPoint(
      "〜ことができません",
      "Cấu trúc diễn đạt không có khả năng làm việc gì. Động từ ở dạng nguyên thể + ことができません (koto ga dekimasen).",
      [
        new Example(
          "明日は参加することができません。",
          "Ashita wa sanka suru koto ga dekimasen.",
          "Ngày mai tôi không thể tham gia được."
        ),
        new Example(
          "そのパーティーに行くことができません。",
          "Sono paatii ni iku koto ga dekimasen.",
          "Tôi không thể đi dự bữa tiệc đó."
        ),
      ]
    ),
    new GrammarPoint(
      "もし〜たら、〜",
      "Cấu trúc để đề xuất một lựa chọn thay thế. 'もし' (moshi) là 'nếu', và '〜たら' (~tara) là dạng điều kiện.",
      [
        new Example(
          "もし来週だったら、参加できます。",
          "Moshi raishuu dattara, sanka dekimasu.",
          "Nếu là tuần sau, tôi có thể tham gia."
        ),
        new Example(
          "もし時間を変えたら、行けるかもしれません。",
          "Moshi jikan wo kaetara, ikeru kamoshiremasen.",
          "Nếu đổi giờ, có lẽ tôi có thể đi."
        ),
      ]
    ),
  ],

  dialogues: [
    new Dialogue(
      "Từ chối lời mời đi ăn tối",
      [
        new DialogueExchange(
          "山田 (Yamada)",
          "リンさん、今度の金曜日、一緒に食事に行きませんか。",
          "Rin-san, kondo no kinyoubi, issho ni shokuji ni ikimasen ka.",
          "Chị Linh, thứ Sáu tới, chúng ta đi ăn cùng nhau nhé?"
        ),
        new DialogueExchange(
          "リン (Linh)",
          "誘ってくれてありがとうございます。でも、金曜日は残業があるので、難しいです。申し訳ありません。",
          "Sasotte kurete arigatou gozaimasu. Demo, kinyoubi wa zangyou ga aru node, muzukashii desu. Moushiwake arimasen.",
          "Cảm ơn anh đã mời. Nhưng thứ Sáu tôi phải làm thêm giờ, nên hơi khó. Tôi xin lỗi."
        ),
        new DialogueExchange(
          "山田",
          "そうですか。残念ですね。",
          "Sou desu ka. Zannen desu ne.",
          "Vậy à. Tiếc quá nhỉ."
        ),
        new DialogueExchange(
          "リン",
          "もし土曜日だったら、大丈夫ですが…",
          "Moshi doyoubi dattara, daijoubu desu ga...",
          "Nếu là thứ Bảy thì tôi có thể..."
        ),
        new DialogueExchange(
          "山田",
          "土曜日でもいいですよ。じゃ、土曜日の夜はどうですか。",
          "Doyoubi demo ii desu yo. Ja, doyoubi no yoru wa dou desu ka.",
          "Thứ Bảy cũng được. Vậy, tối thứ Bảy thế nào?"
        ),
        new DialogueExchange(
          "リン",
          "はい、土曜日の夜なら大丈夫です。楽しみにしています。",
          "Hai, doyoubi no yoru nara daijoubu desu. Tanoshimi ni shite imasu.",
          "Vâng, nếu là tối thứ Bảy thì được. Tôi rất mong chờ."
        ),
      ],
      "Tình huống từ chối lời mời đi ăn tối vì phải làm thêm giờ. Chú ý cách Linh từ chối lịch sự bằng cách cảm ơn lời mời trước, sau đó giải thích lý do và đề xuất thời gian thay thế."
    ),
    new Dialogue(
      "Từ chối tham dự tiệc vì lý do sức khỏe",
      [
        new DialogueExchange(
          "鈴木 (Suzuki)",
          "明日のパーティー、来られますか。",
          "Ashita no paatii, koraremasu ka.",
          "Ngày mai bạn có thể đến dự tiệc không?"
        ),
        new DialogueExchange(
          "ナム (Nam)",
          "すみません、実は今日から風邪を引いていて、熱があるんです。",
          "Sumimasen, jitsu wa kyou kara kaze wo hiite ite, netsu ga arun desu.",
          "Xin lỗi, thực ra từ hôm nay tôi bị cảm và có sốt."
        ),
        new DialogueExchange(
          "鈴木",
          "あら、それは大変ですね。お大事に。",
          "Ara, sore wa taihen desu ne. Odaiji ni.",
          "Ồ, vậy à. Chúc bạn sớm khỏe."
        ),
        new DialogueExchange(
          "ナム",
          "ありがとうございます。せっかく誘っていただいたのに、本当に申し訳ありません。",
          "Arigatou gozaimasu. Sekkaku sasotte itadaita noni, hontou ni moushiwake arimasen.",
          "Cảm ơn bạn. Bạn đã có lòng mời, mà tôi không đến được, tôi thực sự xin lỗi."
        ),
        new DialogueExchange(
          "鈴木",
          "いいえ、気にしないでください。体調が良くなったら、今度ゆっくり食事しましょう。",
          "Iie, ki ni shinaide kudasai. Taichou ga yoku nattara, kondo yukkuri shokuji shimashou.",
          "Không, đừng bận tâm. Khi sức khỏe tốt lên, lần sau chúng ta sẽ đi ăn thong thả nhé."
        ),
        new DialogueExchange(
          "ナム",
          "ぜひお願いします。またの機会を楽しみにしています。",
          "Zehi onegaishimasu. Mata no kikai wo tanoshimi ni shite imasu.",
          "Vâng, nhất định. Tôi rất mong chờ dịp khác."
        ),
      ],
      "Tình huống từ chối tham dự tiệc vì lý do sức khỏe. Chú ý cách Nam giải thích lý do cụ thể và thành thật, cũng như cách anh ấy bày tỏ sự tiếc nuối và mong đợi cơ hội trong tương lai."
    ),
  ],

  exercises: [
    new Exercise(
      "multiple-choice",
      "友達に映画に誘われましたが、行けません。どう言いますか。",
      [
        "誘ってくれてありがとう。でも、明日は仕事があるので、行けません。",
        "映画に行きたくありません。",
        "明日は映画に行きます。",
        "わかりません。",
      ],
      "誘ってくれてありがとう。でも、明日は仕事があるので、行けません。",
      "Khi được bạn mời đi xem phim nhưng không thể đi, câu trả lời lịch sự là 'Cảm ơn đã mời. Nhưng vì ngày mai có việc nên tôi không thể đi được.'"
    ),
    new Exercise(
      "fill-in-blank",
      "パーティーに行けなくて＿＿＿＿＿。",
      ["すみません", "ありがとう", "おめでとう"],
      "すみません",
      "Điền từ thích hợp để hoàn thành câu 'Xin ___ vì không thể đến dự tiệc.'"
    ),
    new Exercise(
      "matching",
      "Nối các lý do từ chối với nghĩa tương ứng",
      [
        { japanese: "残業があります", english: "Tôi phải làm thêm giờ" },
        { japanese: "風邪を引いています", english: "Tôi bị cảm" },
        { japanese: "予定があります", english: "Tôi có kế hoạch khác" },
        { japanese: "体調が悪いです", english: "Tôi không khỏe" },
      ],
      "",
      "Hãy nối các lý do từ chối trong tiếng Nhật với nghĩa tiếng Việt tương ứng"
    ),
    new Exercise(
      "speaking",
      "Bạn được mời đi dự tiệc sinh nhật vào tối thứ Bảy, nhưng bạn đã có kế hoạch khác. Hãy từ chối lời mời một cách lịch sự, giải thích lý do và đề xuất một ngày khác.",
      [],
      "",
      "Sử dụng các mẫu câu như '誘ってくれてありがとう' (cảm ơn đã mời), '〜ので、行けません' (vì ~, nên tôi không thể đi), và 'もし〜だったら、大丈夫です' (nếu là ~, thì tôi có thể)."
    ),
  ],

  culturalNotes: [
    new LessonSection(
      "Văn hóa từ chối gián tiếp ở Nhật Bản",
      [
        "Trong văn hóa Nhật Bản, việc từ chối trực tiếp thường được xem là thiếu tế nhị và có thể gây mất lòng. Người Nhật thường dùng cách từ chối gián tiếp để tránh nói 'không' một cách rõ ràng. Ví dụ, họ có thể nói 'ちょっと難しいです' (chotto muzukashii desu - hơi khó), '考えておきます' (kangaete okimasu - tôi sẽ suy nghĩ về điều đó), hoặc đơn giản là hít vào và nói 'うーん' (ummm) với vẻ mặt lúng túng. Khi nhận được những phản hồi như vậy, người Nhật hiểu đó là lời từ chối lịch sự. Đối với người nước ngoài, điều quan trọng là hiểu rằng những phản ứng mơ hồ này thường là cách từ chối gián tiếp, và không nên hiểu là người đó đang cân nhắc lời đề nghị.",
      ],
      []
    ),
    new LessonSection(
      "Tầm quan trọng của việc giữ hòa khí (wa)",
      [
        "Trong xã hội Nhật Bản, việc duy trì 'wa' (和) - sự hài hòa trong các mối quan hệ xã hội - được coi trọng hơn việc thể hiện ý kiến cá nhân. Điều này ảnh hưởng đến cách người Nhật từ chối lời mời. Họ thường cảm ơn lời mời trước, sau đó giải thích lý do không thể tham gia, và cuối cùng bày tỏ sự tiếc nuối hoặc đề xuất một cơ hội khác trong tương lai. Điều này giúp duy trì mối quan hệ tốt đẹp dù phải từ chối. Trong môi trường làm việc, việc từ chối lời đề nghị từ cấp trên đặc biệt khó khăn, và người Nhật có thể dùng các cách diễn đạt rất gián tiếp để thể hiện sự không đồng ý mà không làm mất lòng đối phương.",
      ],
      []
    ),
  ],

  additionalResources: [
    {
      title: "Video: Cách từ chối lịch sự trong tiếng Nhật",
      url: "https://example.com/polite-refusal-japanese-video",
    },
    {
      title: "Từ vựng về các lý do thường dùng để từ chối",
      url: "https://example.com/excuses-vocabulary-japanese",
    },
    {
      title: "Bài tập thêm: Từ chối lời mời trong các tình huống khác nhau",
      url: "https://example.com/declining-invitations-practice",
    },
  ],
});

export default lesson8;
