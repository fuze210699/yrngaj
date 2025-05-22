import { Lesson, LessonSection, Example, VocabularyItem, GrammarPoint, Dialogue, DialogueExchange, Exercise } from './LessonModel';

const lesson24 = new Lesson({
  id: 24,
  title: "Bày tỏ lòng biết ơn và cảm xúc đối với những người đã giúp đỡ bạn",
  description: "Học cách bày tỏ lòng biết ơn sâu sắc, cảm xúc và sự trân trọng đối với những người đã giúp đỡ mình trong các tình huống quan trọng bằng tiếng Nhật. Bài học này giúp bạn sử dụng ngôn ngữ trang trọng, cảm động và phù hợp với văn hóa Nhật Bản.",
  objectives: [
    "Học từ vựng và mẫu câu bày tỏ lòng biết ơn sâu sắc",
    "Nắm vững các cấu trúc diễn đạt cảm xúc trân trọng, cảm động",
    "Phát triển khả năng sử dụng ngôn ngữ trang trọng trong các dịp đặc biệt",
    "Hiểu sự khác biệt giữa cảm ơn thông thường và lòng biết ơn sâu sắc",
    "Luyện tập hội thoại bày tỏ lòng biết ơn trong các tình huống quan trọng"
  ],
  introduction: [
    new LessonSection(
      "Giới thiệu",
      ["Trong cuộc sống, có những lúc chúng ta nhận được sự giúp đỡ lớn lao từ người khác. Việc bày tỏ lòng biết ơn sâu sắc và cảm xúc chân thành là rất quan trọng trong văn hóa Nhật Bản. Bài học này sẽ giúp bạn biết cách sử dụng các mẫu câu, từ vựng và hội thoại phù hợp để thể hiện lòng biết ơn sâu sắc trong các dịp đặc biệt."],
      []
    )
  ],
  vocabulary: [
    new VocabularyItem("感謝の気持ち", "Kansha no kimochi", "Tấm lòng biết ơn", "Cụm từ"),
    new VocabularyItem("深く感謝します", "Fukaku kansha shimasu", "Xin bày tỏ lòng biết ơn sâu sắc", "Cụm từ"),
    new VocabularyItem("恩人", "Onjin", "Ân nhân", "Danh từ"),
    new VocabularyItem("ご恩", "Go-on", "Ân nghĩa", "Danh từ"),
    new VocabularyItem("感動", "Kandō", "Cảm động", "Danh từ/Tính từ -na"),
    new VocabularyItem("涙", "Namida", "Nước mắt", "Danh từ"),
    new VocabularyItem("心から", "Kokoro kara", "Từ tận đáy lòng", "Cụm từ"),
    new VocabularyItem("忘れません", "Wasuremasen", "Không bao giờ quên", "Động từ nhóm 2"),
    new VocabularyItem("一生", "Isshō", "Suốt đời", "Danh từ"),
    new VocabularyItem("支える", "Sasaeru", "Hỗ trợ, nâng đỡ", "Động từ nhóm 2"),
    new VocabularyItem("励ます", "Hagemasu", "Động viên, khích lệ", "Động từ nhóm 2"),
    new VocabularyItem("助ける", "Tasukeru", "Giúp đỡ", "Động từ nhóm 2"),
    new VocabularyItem("恩返し", "Ongaeshi", "Đền đáp ân nghĩa", "Danh từ/Động từ"),
    new VocabularyItem("大切にする", "Taisetsu ni suru", "Trân trọng", "Cụm từ"),
    new VocabularyItem("感謝状", "Kanshajō", "Thư cảm ơn", "Danh từ"),
    new VocabularyItem("贈り物", "Okurimono", "Quà tặng", "Danh từ"),
    new VocabularyItem("記念", "Kinen", "Kỷ niệm", "Danh từ"),
    new VocabularyItem("思い出", "Omoide", "Kỷ niệm, hồi ức", "Danh từ"),
    new VocabularyItem("心に残る", "Kokoro ni nokoru", "Khắc ghi trong tim", "Cụm từ"),
    new VocabularyItem("感謝祭", "Kanshasai", "Lễ tạ ơn", "Danh từ")
  ],
  grammar: [
    new GrammarPoint(
      "心から感謝します (Xin bày tỏ lòng biết ơn từ tận đáy lòng)",
      "Cụm từ trang trọng dùng trong các dịp đặc biệt để bày tỏ lòng biết ơn sâu sắc.",
      [
        new Example("心から感謝します。", "Kokoro kara kansha shimasu.", "Xin bày tỏ lòng biết ơn từ tận đáy lòng."),
        new Example("皆様のご恩を一生忘れません。", "Minasama no go-on wo isshō wasuremasen.", "Tôi sẽ không bao giờ quên ân nghĩa của mọi người.")
      ]
    ),
    new GrammarPoint(
      "〜てくださってありがとうございます (Cảm ơn vì đã ~ - trang trọng)",
      "Dùng để cảm ơn ai đó một cách trang trọng vì đã làm gì cho mình.",
      [
        new Example("支えてくださってありがとうございます。", "Sasaete kudasatte arigatō gozaimasu.", "Cảm ơn vì đã luôn hỗ trợ tôi."),
        new Example("励ましてくださってありがとうございます。", "Hagemashite kudasatte arigatō gozaimasu.", "Cảm ơn vì đã động viên tôi.")
      ]
    ),
    new GrammarPoint(
      "恩返しをしたい (Muốn đền đáp ân nghĩa)",
      "Cấu trúc diễn đạt mong muốn đền đáp lại sự giúp đỡ, ân nghĩa.",
      [
        new Example("いつか恩返しをしたいです。", "Itsuka ongaeshi wo shitai desu.", "Tôi muốn đền đáp ân nghĩa vào một ngày nào đó."),
        new Example("ご恩を忘れません。", "Go-on wo wasuremasen.", "Tôi sẽ không quên ân nghĩa.")
      ]
    ),
    new GrammarPoint(
      "感動しました (Tôi đã rất cảm động)",
      "Cụm từ dùng để bày tỏ cảm xúc mạnh mẽ khi nhận được sự giúp đỡ lớn lao.",
      [
        new Example("皆様のご支援に感動しました。", "Minasama no go-shien ni kandō shimashita.", "Tôi đã rất cảm động trước sự giúp đỡ của mọi người."),
        new Example("温かい言葉に涙が出ました。", "Atatakai kotoba ni namida ga demashita.", "Những lời nói ấm áp khiến tôi rơi nước mắt.")
      ]
    ),
    new GrammarPoint(
      "大切にします (Sẽ trân trọng ~)",
      "Cụm từ dùng để bày tỏ sự trân trọng đối với món quà, kỷ niệm, tình cảm.",
      [
        new Example("この贈り物を大切にします。", "Kono okurimono wo taisetsu ni shimasu.", "Tôi sẽ trân trọng món quà này."),
        new Example("思い出を心に残します。", "Omoide wo kokoro ni nokoshimasu.", "Tôi sẽ khắc ghi kỷ niệm trong tim.")
      ]
    )
  ],
  dialogues: [
    new Dialogue(
      "Bày tỏ lòng biết ơn với thầy cô",
      [
        new DialogueExchange("アン (An)", "先生、今まで本当にお世話になりました。心から感謝します。", "Sensei, ima made hontō ni osewa ni narimashita. Kokoro kara kansha shimasu.", "Thầy/cô, em thật sự biết ơn thầy/cô trong suốt thời gian qua. Xin bày tỏ lòng biết ơn từ tận đáy lòng."),
        new DialogueExchange("先生 (Thầy/cô)", "アンさんの努力に感動しました。これからも頑張ってください。", "An-san no doryoku ni kandō shimashita. Kore kara mo ganbatte kudasai.", "Thầy/cô rất cảm động trước sự nỗ lực của em. Hãy tiếp tục cố gắng nhé."),
        new DialogueExchange("アン", "いつか恩返しをしたいです。", "Itsuka ongaeshi wo shitai desu.", "Em muốn đền đáp ân nghĩa vào một ngày nào đó."),
        new DialogueExchange("先生", "その気持ちだけで十分です。", "Sono kimochi dake de jūbun desu.", "Chỉ cần tấm lòng đó là đủ rồi.")
      ],
      "Tình huống bày tỏ lòng biết ơn với thầy cô. Chú ý cách sử dụng các mẫu câu trang trọng và cảm động."
    ),
    new Dialogue(
      "Bày tỏ lòng biết ơn với bạn bè trong dịp đặc biệt",
      [
        new DialogueExchange("ナム (Nam)", "みんな、今日は本当にありがとう。", "Minna, kyō wa hontō ni arigatō.", "Mọi người, hôm nay thật sự cảm ơn mọi người."),
        new DialogueExchange("リン (Linh)", "こちらこそ、ナムさんのおかげで楽しい時間を過ごせました。", "Kochira koso, Namu-san no okage de tanoshii jikan wo sugosasemashita.", "Chính mình mới phải cảm ơn Nam, nhờ bạn mà có thời gian vui vẻ."),
        new DialogueExchange("ナム", "この思い出を一生忘れません。", "Kono omoide wo isshō wasuremasen.", "Mình sẽ không bao giờ quên kỷ niệm này."),
        new DialogueExchange("リン", "またみんなで集まりましょう。", "Mata minna de atsumarimashou.", "Hẹn gặp lại mọi người lần sau nhé.")
      ],
      "Tình huống bày tỏ lòng biết ơn với bạn bè trong dịp đặc biệt. Chú ý cách sử dụng các mẫu câu cảm động và trân trọng." 
    )
  ],
  exercises: [
    new Exercise(
      "multiple-choice",
      "「心から感謝します」は gì?",
      ["Xin bày tỏ lòng biết ơn từ tận đáy lòng.", "Cảm ơn vì đã giúp đỡ.", "Tôi rất cảm kích.", "Tôi sẽ không quên."],
      "Xin bày tỏ lòng biết ơn từ tận đáy lòng.",
      "Câu này sử dụng cụm từ trang trọng để bày tỏ lòng biết ơn sâu sắc."
    ),
    new Exercise(
      "fill-in-blank",
      "「この贈り物を___にします」と nói khi muốn trân trọng món quà. Điền từ thích hợp:",
      ["大切", "感謝", "感動"],
      "大切",
      "Điền từ thích hợp để hoàn thành câu diễn đạt sự trân trọng."
    ),
    new Exercise(
      "matching",
      "Nối các từ/cụm từ về lòng biết ơn với ý nghĩa tương ứng",
      [
        { japanese: "感謝の気持ち", english: "Tấm lòng biết ơn" },
        { japanese: "恩返し", english: "Đền đáp ân nghĩa" },
        { japanese: "心から", english: "Từ tận đáy lòng" },
        { japanese: "忘れません", english: "Không bao giờ quên" }
      ],
      "",
      "Nối các từ/cụm từ về lòng biết ơn tiếng Nhật với nghĩa tiếng Việt tương ứng."
    ),
    new Exercise(
      "role-play",
      "Đóng vai hai người bày tỏ lòng biết ơn sâu sắc trong dịp đặc biệt (tốt nghiệp, chia tay, nhận quà). Sử dụng các mẫu câu trang trọng và cảm động.",
      [],
      "",
      "Sử dụng các mẫu câu như '心から感謝します', '恩返しをしたい', '感動しました', '大切にします'."
    )
  ],
  culturalNotes: [
    new LessonSection(
      "Lòng biết ơn và sự trân trọng trong văn hóa Nhật Bản",
      ["Trong văn hóa Nhật Bản, việc bày tỏ lòng biết ơn sâu sắc là một phần quan trọng của các mối quan hệ xã hội. Người Nhật thường gửi thư cảm ơn (感謝状), quà tặng (贈り物) hoặc tổ chức lễ tạ ơn (感謝祭) để thể hiện sự trân trọng. Khi nhận được sự giúp đỡ lớn lao, việc nói '心から感謝します' hoặc '一生忘れません' là cách thể hiện cảm xúc chân thành và sâu sắc. Việc đền đáp ân nghĩa (恩返し) cũng được coi trọng trong xã hội Nhật Bản."],
      []
    )
  ],
  additionalResources: [
    {
      title: "Từ vựng mở rộng về lòng biết ơn và cảm xúc trong tiếng Nhật",
      url: "https://example.com/japanese-gratitude-vocabulary"
    },
    {
      title: "Cách bày tỏ lòng biết ơn sâu sắc trong tiếng Nhật",
      url: "https://example.com/japanese-deep-gratitude"
    },
    {
      title: "Văn hóa đền đáp ân nghĩa tại Nhật Bản",
      url: "https://example.com/japanese-ongaeshi-culture"
    }
  ]
});

export default lesson24; 