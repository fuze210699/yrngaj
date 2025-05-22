import { Lesson, LessonSection, Example, VocabularyItem, GrammarPoint, Dialogue, DialogueExchange, Exercise } from './LessonModel';

const lesson20 = new Lesson({
  id: 20,
  title: "Bày tỏ cảm xúc và ý kiến về các vấn đề cá nhân",
  description: "Học cách bày tỏ cảm xúc, ý kiến và phản hồi về các vấn đề cá nhân bằng tiếng Nhật. Bài học này giúp bạn giao tiếp tự nhiên khi nói về cảm xúc, sở thích, ý kiến và phản ứng với các tình huống hàng ngày.",
  objectives: [
    "Học từ vựng về cảm xúc và ý kiến cá nhân",
    "Nắm vững các cấu trúc diễn đạt cảm xúc và ý kiến",
    "Phát triển khả năng bày tỏ cảm xúc và ý kiến một cách lịch sự và thân mật",
    "Hiểu cách hỏi và trả lời về cảm xúc, ý kiến của người khác",
    "Luyện tập phản hồi và đồng cảm trong hội thoại"
  ],
  introduction: [
    new LessonSection(
      "Giới thiệu",
      ["Trong giao tiếp hàng ngày, việc bày tỏ cảm xúc và ý kiến là rất quan trọng để xây dựng mối quan hệ và thể hiện bản thân. Tiếng Nhật có nhiều cách diễn đạt cảm xúc và ý kiến, từ lịch sự đến thân mật. Bài học này sẽ giúp bạn biết cách nói về cảm xúc, hỏi ý kiến và phản hồi phù hợp trong các tình huống khác nhau."],
      []
    )
  ],
  vocabulary: [
    new VocabularyItem("嬉しい", "Ureshii", "Vui, hạnh phúc", "Tính từ -i"),
    new VocabularyItem("悲しい", "Kanashii", "Buồn", "Tính từ -i"),
    new VocabularyItem("楽しい", "Tanoshii", "Vui vẻ", "Tính từ -i"),
    new VocabularyItem("寂しい", "Sabishii", "Cô đơn", "Tính từ -i"),
    new VocabularyItem("怒る", "Okoru", "Tức giận", "Động từ nhóm 1"),
    new VocabularyItem("心配", "Shinpai", "Lo lắng", "Danh từ/Tính từ -na"),
    new VocabularyItem("安心", "Anshin", "Yên tâm", "Danh từ/Tính từ -na"),
    new VocabularyItem("驚く", "Odoroku", "Ngạc nhiên", "Động từ nhóm 1"),
    new VocabularyItem("感動", "Kandō", "Cảm động", "Danh từ/Tính từ -na"),
    new VocabularyItem("意見", "Iken", "Ý kiến", "Danh từ"),
    new VocabularyItem("賛成", "Sansei", "Tán thành", "Danh từ/Tính từ -na"),
    new VocabularyItem("反対", "Hantai", "Phản đối", "Danh từ/Tính từ -na"),
    new VocabularyItem("どう思う", "Dō omou", "Bạn nghĩ sao?", "Cụm từ"),
    new VocabularyItem("〜と思う", "~to omou", "Tôi nghĩ rằng~", "Cấu trúc"),
    new VocabularyItem("〜と感じる", "~to kanjiru", "Tôi cảm thấy~", "Cấu trúc"),
    new VocabularyItem("〜について", "~ni tsuite", "Về~", "Cấu trúc"),
    new VocabularyItem("理由", "Riyū", "Lý do", "Danh từ"),
    new VocabularyItem("気持ち", "Kimochi", "Cảm xúc, tâm trạng", "Danh từ"),
    new VocabularyItem("意志", "Ishi", "Ý chí", "Danh từ"),
    new VocabularyItem("希望", "Kibō", "Hy vọng", "Danh từ")
  ],
  grammar: [
    new GrammarPoint(
      "〜と思います (Tôi nghĩ rằng~)",
      "Cấu trúc diễn đạt ý kiến cá nhân một cách lịch sự. Dùng sau mệnh đề hoặc câu muốn nêu ý kiến.",
      [
        new Example("この映画は面白いと思います。", "Kono eiga wa omoshiroi to omoimasu.", "Tôi nghĩ bộ phim này thú vị."),
        new Example("私は明日行くと思います。", "Watashi wa ashita iku to omoimasu.", "Tôi nghĩ ngày mai tôi sẽ đi.")
      ]
    ),
    new GrammarPoint(
      "〜と感じます (Tôi cảm thấy~)",
      "Cấu trúc diễn đạt cảm xúc cá nhân một cách lịch sự.",
      [
        new Example("日本の夏は暑いと感じます。", "Nihon no natsu wa atsui to kanjimasu.", "Tôi cảm thấy mùa hè ở Nhật rất nóng."),
        new Example("この話は感動すると感じました。", "Kono hanashi wa kandō suru to kanjimashita.", "Tôi cảm thấy câu chuyện này rất cảm động.")
      ]
    ),
    new GrammarPoint(
      "〜てうれしい/〜てよかった (Cảm xúc khi một việc xảy ra)",
      "Dùng để diễn đạt cảm xúc vui mừng hoặc hài lòng khi một việc gì đó xảy ra.",
      [
        new Example("友達に会えてうれしいです。", "Tomodachi ni aete ureshii desu.", "Tôi vui vì được gặp bạn."),
        new Example("合格してよかったです。", "Gōkaku shite yokatta desu.", "Tôi mừng vì đã đỗ.")
      ]
    ),
    new GrammarPoint(
      "〜し、〜し (Liệt kê lý do, cảm xúc)",
      "Dùng để liệt kê nhiều lý do hoặc cảm xúc.",
      [
        new Example("この町は静かだし、便利だし、住みやすいです。", "Kono machi wa shizuka da shi, benri da shi, sumi yasui desu.", "Thành phố này vừa yên tĩnh, vừa tiện lợi, rất dễ sống."),
        new Example("今日は天気もいいし、気分がいいです。", "Kyō wa tenki mo ii shi, kibun ga ii desu.", "Hôm nay trời đẹp, tâm trạng cũng tốt.")
      ]
    ),
    new GrammarPoint(
      "〜についてどう思いますか (Bạn nghĩ gì về~)",
      "Cách hỏi ý kiến người khác về một vấn đề.",
      [
        new Example("日本の生活についてどう思いますか。", "Nihon no seikatsu ni tsuite dō omoimasu ka.", "Bạn nghĩ gì về cuộc sống ở Nhật?"),
        new Example("この意見についてどう思いますか。", "Kono iken ni tsuite dō omoimasu ka.", "Bạn nghĩ gì về ý kiến này?")
      ]
    )
  ],
  dialogues: [
    new Dialogue(
      "Bày tỏ cảm xúc về kết quả học tập",
      [
        new DialogueExchange("ナム (Nam)", "試験に合格して、とてもうれしいです。", "Shiken ni gōkaku shite, totemo ureshii desu.", "Tôi rất vui vì đã đỗ kỳ thi."),
        new DialogueExchange("リン (Linh)", "おめでとう！頑張ったからだと思います。", "Omedetō! Ganbatta kara da to omoimasu.", "Chúc mừng! Mình nghĩ là vì bạn đã cố gắng."),
        new DialogueExchange("ナム", "ありがとう。リンさんはどうでしたか。", "Arigatō. Rin-san wa dō deshita ka.", "Cảm ơn. Còn Linh thì sao?"),
        new DialogueExchange("リン", "私はちょっと難しかったと感じました。でも、合格できてよかったです。", "Watashi wa chotto muzukashikatta to kanjimashita. Demo, gōkaku dekite yokatta desu.", "Mình cảm thấy hơi khó, nhưng đỗ được nên cũng vui.")
      ],
      "Tình huống bày tỏ cảm xúc về kết quả học tập. Chú ý cách sử dụng 'うれしい', 'よかった', 'と思います', 'と感じました'."
    ),
    new Dialogue(
      "Hỏi ý kiến về một vấn đề cá nhân",
      [
        new DialogueExchange("アン (An)", "日本での生活についてどう思いますか。", "Nihon de no seikatsu ni tsuite dō omoimasu ka.", "Bạn nghĩ gì về cuộc sống ở Nhật?"),
        new DialogueExchange("ハイ (Hai)", "最初は大変だと思いましたが、今は楽しいと感じます。", "Saisho wa taihen da to omoimashita ga, ima wa tanoshii to kanjimasu.", "Ban đầu mình nghĩ là khó khăn, nhưng bây giờ cảm thấy vui."),
        new DialogueExchange("アン", "そうですか。私も同じ気持ちです。", "Sō desu ka. Watashi mo onaji kimochi desu.", "Vậy à. Mình cũng có cảm xúc giống vậy."),
        new DialogueExchange("ハイ", "みんな親切だし、生活も便利だし、安心しています。", "Minna shinsetsu da shi, seikatsu mo benri da shi, anshin shite imasu.", "Mọi người đều tốt bụng, cuộc sống cũng tiện lợi, nên mình cảm thấy yên tâm.")
      ],
      "Tình huống hỏi và bày tỏ ý kiến về cuộc sống ở Nhật. Chú ý cách sử dụng 'どう思いますか', 'と思います', 'と感じます', 'し'."
    )
  ],
  exercises: [
    new Exercise(
      "multiple-choice",
      "「この映画は面白いと思います」は gì?",
      ["Tôi nghĩ bộ phim này thú vị.", "Tôi cảm thấy bộ phim này buồn.", "Tôi không thích bộ phim này.", "Tôi đã xem bộ phim này."],
      "Tôi nghĩ bộ phim này thú vị.",
      "Câu này sử dụng cấu trúc 'と思います' để diễn đạt ý kiến cá nhân."
    ),
    new Exercise(
      "fill-in-blank",
      "「友達に会えて___です」と nói khi vui gặp bạn. Điền từ thích hợp:",
      ["うれしい", "かなしい", "たのしい"],
      "うれしい",
      "Điền từ thích hợp để hoàn thành câu diễn đạt cảm xúc vui mừng."
    ),
    new Exercise(
      "matching",
      "Nối các từ cảm xúc với ý nghĩa tương ứng",
      [
        { japanese: "嬉しい", english: "Vui, hạnh phúc" },
        { japanese: "悲しい", english: "Buồn" },
        { japanese: "安心", english: "Yên tâm" },
        { japanese: "心配", english: "Lo lắng" }
      ],
      "",
      "Nối các từ cảm xúc tiếng Nhật với nghĩa tiếng Việt tương ứng."
    ),
    new Exercise(
      "role-play",
      "Đóng vai hai người bạn đang nói về cảm xúc sau khi nhận kết quả thi. Sử dụng các mẫu câu bày tỏ cảm xúc và ý kiến.",
      [],
      "",
      "Sử dụng các mẫu câu như 'うれしい', 'よかった', 'と思います', 'と感じます'."
    )
  ],
  culturalNotes: [
    new LessonSection(
      "Cách bày tỏ cảm xúc trong văn hóa Nhật Bản",
      ["Người Nhật thường không bộc lộ cảm xúc quá mạnh mẽ ở nơi công cộng. Tuy nhiên, trong các mối quan hệ thân thiết, họ vẫn chia sẻ cảm xúc một cách tự nhiên. Việc sử dụng các biểu hiện như 'うれしい', 'よかった', '安心した' rất phổ biến trong hội thoại hàng ngày. Khi bày tỏ ý kiến, người Nhật thường dùng các cấu trúc giảm nhẹ như '〜と思います', '〜かなと思います' để tránh khẳng định quá mạnh, thể hiện sự khiêm tốn và tôn trọng ý kiến người khác."],
      []
    )
  ],
  additionalResources: [
    {
      title: "Từ vựng mở rộng về cảm xúc và ý kiến trong tiếng Nhật",
      url: "https://example.com/japanese-emotions-opinions"
    },
    {
      title: "Cách bày tỏ ý kiến lịch sự trong tiếng Nhật",
      url: "https://example.com/japanese-polite-opinions"
    },
    {
      title: "Văn hóa giao tiếp cảm xúc tại Nhật Bản",
      url: "https://example.com/japanese-emotional-communication"
    }
  ]
});

export default lesson20; 