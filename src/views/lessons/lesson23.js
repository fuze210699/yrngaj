import { Lesson, LessonSection, Example, VocabularyItem, GrammarPoint, Dialogue, DialogueExchange, Exercise } from './LessonModel';

const lesson23 = new Lesson({
  id: 23,
  title: "Bày tỏ lời cảm ơn và sự trân trọng trong cuộc sống hàng ngày",
  description: "Học cách bày tỏ lời cảm ơn, sự trân trọng và đáp lại lời cảm ơn trong các tình huống hàng ngày bằng tiếng Nhật. Bài học này giúp bạn giao tiếp lịch sự, thể hiện sự biết ơn và xây dựng mối quan hệ tốt đẹp.",
  objectives: [
    "Học từ vựng và mẫu câu cảm ơn, đáp lại lời cảm ơn",
    "Nắm vững các cấu trúc diễn đạt sự trân trọng, biết ơn",
    "Phát triển khả năng sử dụng lời cảm ơn phù hợp với từng tình huống",
    "Hiểu sự khác biệt giữa các cách cảm ơn lịch sự và thân mật",
    "Luyện tập hội thoại cảm ơn và đáp lại lời cảm ơn"
  ],
  introduction: [
    new LessonSection(
      "Giới thiệu",
      ["Trong văn hóa Nhật Bản, việc bày tỏ lời cảm ơn và sự trân trọng là rất quan trọng. Có nhiều cách cảm ơn khác nhau tùy vào mức độ lịch sự và mối quan hệ. Bài học này sẽ giúp bạn biết cách cảm ơn, đáp lại lời cảm ơn và thể hiện sự trân trọng trong các tình huống hàng ngày."],
      []
    )
  ],
  vocabulary: [
    new VocabularyItem("ありがとう", "Arigatō", "Cảm ơn (thân mật)", "Cụm từ"),
    new VocabularyItem("ありがとうございます", "Arigatō gozaimasu", "Cảm ơn (lịch sự)", "Cụm từ"),
    new VocabularyItem("どうも", "Dōmo", "Cảm ơn (ngắn gọn)", "Cụm từ"),
    new VocabularyItem("感謝", "Kansha", "Sự biết ơn", "Danh từ"),
    new VocabularyItem("お世話になりました", "Osewa ni narimashita", "Cảm ơn vì đã giúp đỡ", "Cụm từ"),
    new VocabularyItem("助かる", "Tasukaru", "Được giúp đỡ, may mắn", "Động từ nhóm 1"),
    new VocabularyItem("本当に", "Hontō ni", "Thật sự", "Trạng từ"),
    new VocabularyItem("感動", "Kandō", "Cảm động", "Danh từ/Tính từ -na"),
    new VocabularyItem("おかげさまで", "Okage-sama de", "Nhờ ơn...", "Cụm từ"),
    new VocabularyItem("どういたしまして", "Dō itashimashite", "Không có gì (đáp lại cảm ơn)", "Cụm từ"),
    new VocabularyItem("こちらこそ", "Kochira koso", "Chính tôi mới phải cảm ơn", "Cụm từ"),
    new VocabularyItem("恐縮です", "Kyōshuku desu", "Tôi rất cảm kích", "Cụm từ (lịch sự)"),
    new VocabularyItem("ご親切に", "Go-shinsetsu ni", "Vì sự tốt bụng của bạn", "Cụm từ"),
    new VocabularyItem("恩", "On", "Ân nghĩa", "Danh từ"),
    new VocabularyItem("返す", "Kaesu", "Trả lại (ân nghĩa, vật)", "Động từ nhóm 1"),
    new VocabularyItem("礼", "Rei", "Lễ, sự cảm ơn", "Danh từ"),
    new VocabularyItem("贈り物", "Okurimono", "Quà tặng", "Danh từ"),
    new VocabularyItem("気持ち", "Kimochi", "Tấm lòng, cảm xúc", "Danh từ"),
    new VocabularyItem("大切", "Taisetsu", "Quan trọng, trân trọng", "Tính từ -na")
  ],
  grammar: [
    new GrammarPoint(
      "〜てくれてありがとう (Cảm ơn vì đã ~)",
      "Dùng để cảm ơn ai đó vì đã làm gì cho mình (thân mật).",
      [
        new Example("手伝ってくれてありがとう。", "Tetsudatte kurete arigatō.", "Cảm ơn vì đã giúp đỡ mình."),
        new Example("来てくれてありがとう。", "Kite kurete arigatō.", "Cảm ơn vì đã đến.")
      ]
    ),
    new GrammarPoint(
      "〜ていただきありがとうございます (Cảm ơn vì đã ~ - lịch sự)",
      "Dùng để cảm ơn ai đó một cách lịch sự vì đã làm gì cho mình.",
      [
        new Example("ご指導いただきありがとうございます。", "Go-shidō itadaki arigatō gozaimasu.", "Cảm ơn vì đã chỉ dẫn cho tôi."),
        new Example("ご連絡いただきありがとうございます。", "Go-renraku itadaki arigatō gozaimasu.", "Cảm ơn vì đã liên lạc.")
      ]
    ),
    new GrammarPoint(
      "お世話になりました (Cảm ơn vì đã giúp đỡ)",
      "Cụm từ dùng khi muốn cảm ơn ai đó đã giúp đỡ mình trong thời gian dài hoặc trong công việc, học tập.",
      [
        new Example("先生には大変お世話になりました。", "Sensei ni wa taihen osewa ni narimashita.", "Tôi rất biết ơn thầy/cô đã giúp đỡ."),
        new Example("皆さんのおかげで、無事に終わりました。", "Minasan no okage de, buji ni owarimashita.", "Nhờ mọi người mà mọi việc đã kết thúc tốt đẹp.")
      ]
    ),
    new GrammarPoint(
      "どういたしまして (Không có gì)",
      "Cụm từ dùng để đáp lại lời cảm ơn.",
      [
        new Example("A: ありがとう！ B: どういたしまして。", "A: Arigatō! B: Dō itashimashite.", "A: Cảm ơn! B: Không có gì.")
      ]
    ),
    new GrammarPoint(
      "恐縮です (Tôi rất cảm kích)",
      "Cụm từ lịch sự dùng trong các tình huống trang trọng để bày tỏ sự cảm kích.",
      [
        new Example("ご親切に恐縮です。", "Go-shinsetsu ni kyōshuku desu.", "Tôi rất cảm kích vì sự tốt bụng của bạn."),
        new Example("お手数をおかけして恐縮です。", "O-tesū wo okake shite kyōshuku desu.", "Xin lỗi vì đã làm phiền và cảm ơn bạn rất nhiều.")
      ]
    )
  ],
  dialogues: [
    new Dialogue(
      "Cảm ơn bạn bè giúp đỡ",
      [
        new DialogueExchange("リン (Linh)", "昨日は手伝ってくれてありがとう。", "Kinō wa tetsudatte kurete arigatō.", "Cảm ơn vì hôm qua đã giúp mình."),
        new DialogueExchange("ナム (Nam)", "どういたしまして。困ったときはお互い様だよ。", "Dō itashimashite. Komatta toki wa otagai-sama da yo.", "Không có gì. Khi gặp khó khăn thì giúp nhau thôi."),
        new DialogueExchange("リン", "本当に助かったよ。", "Hontō ni tasukatta yo.", "Thật sự mình đã được giúp rất nhiều."),
        new DialogueExchange("ナム", "また何かあったら言ってね。", "Mata nanika attara itte ne.", "Có gì cứ nói nhé.")
      ],
      "Tình huống cảm ơn bạn bè giúp đỡ. Chú ý cách sử dụng 'ありがとう', 'どういたしまして', '助かった' trong hội thoại."
    ),
    new Dialogue(
      "Cảm ơn trong môi trường công việc",
      [
        new DialogueExchange("アン (An)", "ご指導いただきありがとうございます。", "Go-shidō itadaki arigatō gozaimasu.", "Cảm ơn vì đã chỉ dẫn cho tôi."),
        new DialogueExchange("先生 (Thầy/cô)", "こちらこそ、頑張ってくれてありがとう。", "Kochira koso, ganbatte kurete arigatō.", "Chính tôi mới phải cảm ơn vì em đã cố gắng."),
        new DialogueExchange("アン", "お世話になりました。", "Osewa ni narimashita.", "Cảm ơn vì đã giúp đỡ em."),
        new DialogueExchange("先生", "また何かあればいつでも相談してください。", "Mata nanika areba itsudemo sōdan shite kudasai.", "Nếu có gì cứ trao đổi với tôi bất cứ lúc nào.")
      ],
      "Tình huống cảm ơn trong môi trường công việc. Chú ý cách sử dụng các mẫu câu cảm ơn lịch sự và đáp lại." 
    )
  ],
  exercises: [
    new Exercise(
      "multiple-choice",
      "「手伝ってくれてありがとう」は gì?",
      ["Cảm ơn vì đã giúp đỡ.", "Xin lỗi vì đã làm phiền.", "Chúc mừng bạn.", "Tạm biệt."],
      "Cảm ơn vì đã giúp đỡ.",
      "Câu này sử dụng cấu trúc '〜てくれてありがとう' để cảm ơn ai đó vì đã làm gì cho mình."
    ),
    new Exercise(
      "fill-in-blank",
      "「ご指導___ありがとうございます」と nói khi cảm ơn ai đó đã chỉ dẫn. Điền từ thích hợp:",
      ["いただき", "くださり", "もらい"],
      "いただき",
      "Điền từ thích hợp để hoàn thành câu cảm ơn lịch sự."
    ),
    new Exercise(
      "matching",
      "Nối các từ/cụm từ cảm ơn với ý nghĩa tương ứng",
      [
        { japanese: "ありがとう", english: "Cảm ơn (thân mật)" },
        { japanese: "どういたしまして", english: "Không có gì" },
        { japanese: "お世話になりました", english: "Cảm ơn vì đã giúp đỡ" },
        { japanese: "恐縮です", english: "Tôi rất cảm kích" }
      ],
      "",
      "Nối các từ/cụm từ cảm ơn tiếng Nhật với nghĩa tiếng Việt tương ứng."
    ),
    new Exercise(
      "role-play",
      "Đóng vai hai người cảm ơn và đáp lại lời cảm ơn trong các tình huống hàng ngày và công việc.",
      [],
      "",
      "Sử dụng các mẫu câu như 'ありがとう', 'どういたしまして', 'お世話になりました', '恐縮です'."
    )
  ],
  culturalNotes: [
    new LessonSection(
      "Văn hóa cảm ơn và trân trọng trong xã hội Nhật Bản",
      ["Người Nhật rất coi trọng việc bày tỏ lòng biết ơn và sự trân trọng. Việc cảm ơn không chỉ là phép lịch sự mà còn là cách duy trì mối quan hệ tốt đẹp. Ngoài các mẫu câu cảm ơn thông thường, người Nhật còn sử dụng nhiều cách diễn đạt trang trọng trong công việc, học tập. Khi nhận được sự giúp đỡ, việc gửi quà cảm ơn (贈り物) cũng rất phổ biến. Đáp lại lời cảm ơn, người Nhật thường nói 'どういたしまして' hoặc 'こちらこそ' để thể hiện sự khiêm tốn."],
      []
    )
  ],
  additionalResources: [
    {
      title: "Từ vựng mở rộng về cảm ơn và trân trọng trong tiếng Nhật",
      url: "https://example.com/japanese-thankful-vocabulary"
    },
    {
      title: "Cách cảm ơn và đáp lại lời cảm ơn trong tiếng Nhật",
      url: "https://example.com/japanese-thank-you-expressions"
    },
    {
      title: "Văn hóa cảm ơn trong xã hội Nhật Bản",
      url: "https://example.com/japanese-thank-you-culture"
    }
  ]
});

export default lesson23; 