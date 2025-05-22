import { 
  Lesson, 
  LessonSection, 
  Example, 
  VocabularyItem, 
  GrammarPoint, 
  Dialogue, 
  DialogueExchange,
  Exercise 
} from './LessonModel';

const lesson19 = new Lesson({
  id: 19,
  title: "Trò chuyện hàng ngày với bạn bè thân thiết",
  description: "Học cách trò chuyện tự nhiên và thân mật với bạn bè trong các tình huống hàng ngày bằng tiếng Nhật. Bài học này giúp bạn nắm vững cách sử dụng ngôn ngữ thân mật và các biểu hiện phổ biến trong giao tiếp giữa bạn bè.",
  
  objectives: [
    "Nắm vững cách sử dụng thể thông thường (普通形) trong giao tiếp thân mật",
    "Học các từ ngữ và biểu hiện phổ biến trong trò chuyện giữa bạn bè",
    "Hiểu cách rút gọn câu và sử dụng từ lóng trong tiếng Nhật",
    "Phát triển khả năng bày tỏ cảm xúc và ý kiến một cách tự nhiên",
    "Học cách duy trì cuộc trò chuyện và thể hiện sự quan tâm đến người khác"
  ],
  
  introduction: [
    new LessonSection(
      "Giới thiệu", 
      ["Khi bạn đã quen biết ai đó và trở nên thân thiết, cách nói chuyện của bạn cũng sẽ thay đổi. Trong tiếng Nhật, sự khác biệt giữa ngôn ngữ lịch sự (敬語 - keigo) và ngôn ngữ thân mật (タメ口 - tameguchi) rất rõ ràng. Trong bài học này, chúng ta sẽ tập trung vào cách trò chuyện tự nhiên và thân mật với bạn bè, học cách sử dụng thể thông thường, các từ lóng phổ biến và các biểu hiện cảm xúc thường dùng trong giao tiếp hàng ngày giữa những người bạn thân."],
      []
    )
  ],
  
  vocabulary: [
    // Từ ngữ thân mật và rút gọn
    new VocabularyItem("すごい", "Sugoi", "Tuyệt vời, kinh ngạc", "Tính từ -i"),
    new VocabularyItem("やばい", "Yabai", "Kinh khủng, không thể tin được (có thể tích cực hoặc tiêu cực)", "Tính từ -i"),
    new VocabularyItem("マジ", "Maji", "Thật sự, nghiêm túc", "Từ lóng"),
    new VocabularyItem("マジで", "Maji de", "Thật sao?, Thật à?", "Từ lóng"),
    new VocabularyItem("超", "Chō", "Siêu, cực kỳ", "Tiền tố"),
    new VocabularyItem("めっちゃ", "Meccha", "Rất, cực kỳ", "Phó từ"),
    new VocabularyItem("全然", "Zenzen", "Hoàn toàn (không)", "Phó từ"),
    new VocabularyItem("全然大丈夫", "Zenzen daijōbu", "Hoàn toàn không sao", "Cụm từ"),
    new VocabularyItem("〜じゃん", "~jan", "~ phải không?", "Trợ từ cuối câu"),
    new VocabularyItem("〜だよね", "~da yo ne", "~ đúng không?", "Trợ từ cuối câu"),
    new VocabularyItem("〜って", "~tte", "~ nghe nói rằng", "Trợ từ"),
    new VocabularyItem("〜かも", "~kamo", "Có thể ~", "Trợ từ cuối câu (rút gọn của かもしれない)"),
    
    // Từ vựng về hoạt động hàng ngày với bạn bè
    new VocabularyItem("飲み会", "Nomikai", "Tiệc nhậu", "Danh từ"),
    new VocabularyItem("カラオケ", "Karaoke", "Karaoke", "Danh từ"),
    new VocabularyItem("ランチ", "Ranchi", "Bữa trưa", "Danh từ"),
    new VocabularyItem("遊ぶ", "Asobu", "Chơi, đi chơi", "Động từ nhóm 1"),
    new VocabularyItem("つるむ", "Tsurumu", "Đi chơi cùng nhau, tụ tập", "Động từ nhóm 1"),
    new VocabularyItem("盛り上がる", "Moriagaru", "Sôi nổi, vui vẻ", "Động từ nhóm 1"),
    new VocabularyItem("ドタキャン", "Dotakyan", "Hủy hẹn vào phút chót", "Danh từ"),
    new VocabularyItem("割り勘", "Warikan", "AA, chia đều tiền", "Danh từ"),
    
    // Biểu hiện cảm xúc và phản ứng
    new VocabularyItem("うける", "Ukeru", "Buồn cười, hài hước", "Động từ nhóm 2"),
    new VocabularyItem("ウケる", "Ukeru", "Buồn cười, hài hước (viết bằng katakana)", "Động từ nhóm 2"),
    new VocabularyItem("ムカつく", "Mukatsuku", "Khó chịu, bực mình", "Động từ nhóm 1"),
    new VocabularyItem("うざい", "Uzai", "Phiền phức, khó chịu", "Tính từ -i"),
    new VocabularyItem("キモい", "Kimoi", "Ghê, kinh tởm", "Tính từ -i"),
    new VocabularyItem("かわいい", "Kawaii", "Dễ thương", "Tính từ -i"),
    new VocabularyItem("イケてる", "Iketeru", "Ngầu, sành điệu", "Động từ dạng -te iru"),
    new VocabularyItem("うれしい", "Ureshii", "Vui, hạnh phúc", "Tính từ -i"),
    
    // Từ ngữ dùng trong tin nhắn và mạng xã hội
    new VocabularyItem("既読スルー", "Kidoku surū", "Đọc tin nhắn mà không trả lời", "Danh từ"),
    new VocabularyItem("なう", "Nau", "Bây giờ (từ tiếng Anh 'now')", "Từ lóng"),
    new VocabularyItem("りょ", "Ryo", "Được rồi (rút gọn của 了解 - ryōkai)", "Từ lóng"),
    new VocabularyItem("おk", "OK", "OK", "Từ lóng")
  ],
  
  grammar: [
    new GrammarPoint(
      "普通形 (Thể thông thường)",
      "Thể thông thường được sử dụng trong giao tiếp thân mật giữa bạn bè, gia đình. Đây là dạng rút gọn của thể lịch sự (丁寧形 - teineikei).",
      [
        new Example("明日、映画を見る。", "Ashita, eiga wo miru.", "Ngày mai tôi sẽ xem phim. (thể thông thường)"),
        new Example("明日、映画を見ます。", "Ashita, eiga wo mimasu.", "Ngày mai tôi sẽ xem phim. (thể lịch sự)")
      ]
    ),
    new GrammarPoint(
      "〜だ / 〜じゃない (Thể thông thường của danh từ và tính từ -na)",
      "Với danh từ và tính từ -na, 'です' được thay bằng 'だ' trong thể khẳng định và 'じゃない' trong thể phủ định.",
      [
        new Example("あれは本だ。", "Are wa hon da.", "Đó là sách. (thể thông thường)"),
        new Example("あれは本です。", "Are wa hon desu.", "Đó là sách. (thể lịch sự)"),
        new Example("あの人は元気じゃない。", "Ano hito wa genki janai.", "Người đó không khỏe. (thể thông thường)"),
        new Example("あの人は元気ではありません。", "Ano hito wa genki dewa arimasen.", "Người đó không khỏe. (thể lịch sự)")
      ]
    ),
    new GrammarPoint(
      "〜い / 〜くない (Thể thông thường của tính từ -i)",
      "Với tính từ -i, hình thức thông thường đã sẵn là dạng tận cùng bằng 'い'. Dạng phủ định là '〜くない'.",
      [
        new Example("この映画は面白い。", "Kono eiga wa omoshiroi.", "Bộ phim này thú vị."),
        new Example("この映画は面白くない。", "Kono eiga wa omoshiroku nai.", "Bộ phim này không thú vị.")
      ]
    ),
    new GrammarPoint(
      "〜んだ / 〜のだ (Giải thích lý do hoặc tình huống)",
      "Cấu trúc '〜んだ' hoặc '〜のだ' được sử dụng để giải thích lý do hoặc tình huống. Đây là dạng thông thường của '〜んです' hoặc '〜のです'.",
      [
        new Example("遅れてごめん。電車が遅れたんだ。", "Okurete gomen. Densha ga okureta n da.", "Xin lỗi vì đến muộn. Tại vì tàu bị trễ."),
        new Example("明日は来ないの？", "Ashita wa konai no?", "Ngày mai cậu không đến à?")
      ]
    ),
    new GrammarPoint(
      "〜よ / 〜ね / 〜よね (Trợ từ cuối câu)",
      "Các trợ từ cuối câu như 'よ', 'ね', 'よね' được sử dụng rất phổ biến trong giao tiếp thân mật để thể hiện thái độ của người nói.",
      [
        new Example("この映画、面白いよ。", "Kono eiga, omoshiroi yo.", "Bộ phim này thú vị đấy. (nhấn mạnh thông tin)"),
        new Example("いい天気だね。", "Ii tenki da ne.", "Thời tiết đẹp nhỉ. (tìm kiếm sự đồng tình)"),
        new Example("明日、テストだよね。", "Ashita, tesuto da yo ne.", "Ngày mai có bài kiểm tra đúng không? (xác nhận thông tin)")
      ]
    )
  ],
  
  dialogues: [
    new Dialogue(
      "Rủ bạn đi chơi",
      [
        new DialogueExchange("ミン (Minh)", "ねえ、今週末暇？", "Nē, konshūmatsu hima?", "Này, cuối tuần này cậu rảnh không?"),
        new DialogueExchange("ユカ (Yuka)", "うん、特に予定ないよ。どうしたの？", "Un, toku ni yotei nai yo. Dō shita no?", "Ừ, không có kế hoạch gì đặc biệt. Sao vậy?"),
        new DialogueExchange("ミン", "新しいカフェがオープンしたんだ。一緒に行かない？", "Atarashii kafe ga ōpun shita n da. Issho ni ikanai?", "Có một quán cà phê mới mở. Cậu có muốn đi cùng không?"),
        new DialogueExchange("ユカ", "いいね！どこにあるの？", "Ii ne! Doko ni aru no?", "Hay đấy! Ở đâu vậy?"),
        new DialogueExchange("ミン", "駅の近くだよ。めっちゃおしゃれらしいよ。", "Eki no chikaku da yo. Meccha oshare rashii yo.", "Gần ga tàu. Nghe nói rất sành điệu."),
        new DialogueExchange("ユカ", "マジで？じゃあ、土曜日の午後でいい？", "Maji de? Jā, doyōbi no gogo de ii?", "Thật hả? Vậy, chiều thứ Bảy được không?"),
        new DialogueExchange("ミン", "うん、全然OK！じゃあ、2時に駅で会おう。", "Un, zenzen OK! Jā, ni-ji ni eki de aō.", "Ừ, hoàn toàn OK! Vậy gặp nhau ở ga lúc 2 giờ nhé.")
      ],
      "Tình huống rủ bạn đi chơi. Chú ý cách sử dụng ngôn ngữ thân mật như 'うん' (ừ), '暇？' (rảnh không?), và các từ lóng như 'めっちゃ' (rất), 'マジで？' (thật hả?)."
    ),
    new Dialogue(
      "Bình luận về bộ phim",
      [
        new DialogueExchange("ナム (Nam)", "昨日、あの映画見たんだけど、マジでやばかった！", "Kinō, ano eiga mita n da kedo, maji de yabakatta!", "Hôm qua tớ xem bộ phim đó, thực sự quá đỉnh!"),
        new DialogueExchange("タカシ (Takashi)", "え、どうやばかったの？", "E, dō yabakatta no?", "Ơ, đỉnh như thế nào?"),
        new DialogueExchange("ナム", "ストーリーが予想と全然違ったし、最後のシーンは泣けたよ。", "Sutōrī ga yosō to zenzen chigatta shi, saigo no shīn wa naketa yo.", "Cốt truyện hoàn toàn khác với những gì tớ dự đoán, và cảnh cuối làm tớ khóc luôn."),
        new DialogueExchange("タカシ", "へー、そんなに良かったんだ。俺も見てみようかな。", "Hē, sonna ni yokatta n da. Ore mo mite miyō kana.", "Hả, hay đến vậy à. Có lẽ tớ cũng nên xem thử."),
        new DialogueExchange("ナム", "うん、絶対見た方がいいよ！あと、主演の俳優がめっちゃかっこよかった。", "Un, zettai mita hō ga ii yo! Ato, shuen no haiyū ga meccha kakko yokatta.", "Ừ, cậu tuyệt đối nên xem! Mà diễn viên chính cũng đẹp trai cực kỳ."),
        new DialogueExchange("タカシ", "そうなんだ。じゃあ、今週末にでも見に行くわ。", "Sō na n da. Jā, konshūmatsu ni demo mi ni iku wa.", "Vậy à. Vậy thì cuối tuần này tớ sẽ đi xem.")
      ],
      "Tình huống bình luận về bộ phim. Chú ý cách sử dụng từ lóng như 'やばい' (tuyệt vời), 'マジで' (thực sự), và 'めっちゃ' (cực kỳ) để thể hiện cảm xúc mạnh mẽ."
    ),
    new Dialogue(
      "Tin nhắn giữa bạn bè",
      [
        new DialogueExchange("アン (An)", "今どこ？", "Ima doko?", "Cậu đang ở đâu?"),
        new DialogueExchange("リン (Linh)", "カフェなう。宿題やってる。", "Kafe nau. Shukudai yatteru.", "Đang ở quán cà phê. Đang làm bài tập."),
        new DialogueExchange("アン", "マジか。俺も行っていい？", "Maji ka. Ore mo itte ii?", "Thật hả. Tớ có thể đến được không?"),
        new DialogueExchange("リン", "うん、全然OK！", "Un, zenzen OK!", "Ừ, hoàn toàn OK!"),
        new DialogueExchange("アン", "りょ！30分後に着く。", "Ryo! Sanjuppun go ni tsuku.", "Được! Tớ sẽ đến sau 30 phút."),
        new DialogueExchange("リン", "了解👍 気をつけてね。", "Ryōkai👍 Ki wo tsukete ne.", "OK👍 Cẩn thận nhé.")
      ],
      "Tình huống trao đổi tin nhắn giữa bạn bè. Chú ý cách sử dụng ngôn ngữ rất ngắn gọn và các từ lóng phổ biến trong tin nhắn như 'なう' (bây giờ), 'マジか' (thật hả), 'りょ' (OK, được)."
    ),
    new Dialogue(
      "Kể chuyện về người khác",
      [
        new DialogueExchange("ハナ (Hana)", "ねえ、知ってる？ユウキが彼女できたんだって。", "Nē, shitteru? Yūki ga kanojo dekita n datte.", "Này, cậu có biết không? Nghe nói Yuki có bạn gái rồi đấy."),
        new DialogueExchange("マイ (Mai)", "えっ、マジ？誰？", "E', maji? Dare?", "Hả, thật á? Ai vậy?"),
        new DialogueExchange("ハナ", "隣のクラスの佐藤さんだよ。", "Tonari no kurasu no Satō-san da yo.", "Là Satou ở lớp bên cạnh đấy."),
        new DialogueExchange("マイ", "あの子、超かわいいじゃん！ユウキ、やるじゃん。", "Ano ko, chō kawaii jan! Yūki, yaru jan.", "Cô ấy cực kỳ dễ thương còn gì! Yuki giỏi thật."),
        new DialogueExchange("ハナ", "うん、でもまだ秘密にしてるらしいから、他の人には言わないでね。", "Un, demo mada himitsu ni shiteru rashii kara, hoka no hito ni wa iwanai de ne.", "Ừ, nhưng hình như họ vẫn giữ bí mật, nên đừng nói với người khác nhé."),
        new DialogueExchange("マイ", "わかった。言わないよ。でも、うらやましいなー。", "Wakatta. Iwanai yo. Demo, urayamashii nā.", "Hiểu rồi. Tớ sẽ không nói đâu. Nhưng mà, ghen tị quá.")
      ],
      "Tình huống kể chuyện về người khác. Chú ý cách sử dụng '〜んだって' (nghe nói rằng) để truyền đạt tin đồn và các biểu hiện cảm xúc như 'マジ？' (thật á?), '超かわいい' (cực kỳ dễ thương)."
    )
  ],
  
  exercises: [
    new Exercise(
      "multiple-choice",
      "「明日、映画を見る」と「明日、映画を見ます」の違いは何ですか。",
      ["前者は友達との会話で使い、後者は目上の人との会話で使う。", "前者は過去形で、後者は現在形。", "前者は質問で、後者は答え。", "前者は男性言葉で、後者は女性言葉。"],
      "前者は友達との会話で使い、後者は目上の人との会話で使う。",
      "Câu đầu tiên sử dụng thể thông thường (普通形) dùng trong hội thoại với bạn bè, câu thứ hai sử dụng thể lịch sự (丁寧形) dùng trong hội thoại với người trên."
    ),
    new Exercise(
      "fill-in-blank",
      "「この映画、___面白いよ！」と友達に強調して言いたい場合、「___」に入る言葉は何ですか。", 
      ["めっちゃ", "とても", "非常に"],
      "めっちゃ",
      "Điền từ thích hợp để hoàn thành câu nhấn mạnh với bạn bè 'Bộ phim này ___ thú vị đấy!'"
    ),
    new Exercise(
      "matching",
      "Nối các từ lóng với ý nghĩa tương ứng",
      [
        { japanese: "マジ", english: "Thật sự" },
        { japanese: "やばい", english: "Kinh khủng, tuyệt vời" },
        { japanese: "うける", english: "Buồn cười" },
        { japanese: "りょ", english: "Được rồi (OK)" }
      ],
      "",
      "Hãy nối các từ lóng tiếng Nhật với ý nghĩa tiếng Việt tương ứng."
    ),
    new Exercise(
      "role-play",
      "Hãy đóng vai hai người bạn đang trò chuyện về một bộ phim mới. Sử dụng ngôn ngữ thân mật và các từ lóng đã học.",
      [],
      "",
      "Sử dụng các từ và cấu trúc như 'やばい' (tuyệt vời), 'マジで？' (thật sao?), '〜だよね' (~ đúng không?), và '〜んだ' (giải thích)."
    )
  ],
  
  culturalNotes: [
    new LessonSection(
      "Sự khác biệt giữa ngôn ngữ lịch sự và thân mật trong tiếng Nhật",
      ["Tiếng Nhật có sự phân biệt rõ ràng giữa ngôn ngữ lịch sự (敬語 - keigo) và ngôn ngữ thân mật (タメ口 - tameguchi). Việc chuyển từ ngôn ngữ lịch sự sang ngôn ngữ thân mật thường đánh dấu một bước ngoặt trong mối quan hệ, cho thấy hai người đã trở nên thân thiết hơn. Trong văn hóa Nhật Bản, việc sử dụng ngôn ngữ thân mật khi chưa đủ thân thiết có thể bị coi là thiếu tôn trọng. Thông thường, người có địa vị cao hơn (như người lớn tuổi hơn hoặc cấp trên) sẽ là người đề xuất chuyển sang ngôn ngữ thân mật trước. Giữa bạn bè cùng trang lứa, việc sử dụng ngôn ngữ thân mật là rất tự nhiên và thể hiện sự gần gũi."],
      []
    ),
    new LessonSection(
      "Từ lóng và ngôn ngữ giới trẻ Nhật Bản",
      ["Giống như nhiều ngôn ngữ khác, tiếng Nhật cũng có rất nhiều từ lóng (若者言葉 - wakamono kotoba) được giới trẻ sử dụng. Những từ này thường xuyên thay đổi và phát triển, phản ánh xu hướng và văn hóa đại chúng. Một số từ lóng có nguồn gốc từ việc rút gọn các từ dài, như 'マジ' (maji) từ 'まじめ' (majime - nghiêm túc). Một số khác đến từ tiếng Anh, như 'なう' (nau) từ 'now'. Mạng xã hội và tin nhắn điện thoại cũng đã tạo ra nhiều từ lóng mới, như '既読スルー' (kidoku surū - đọc tin nhắn mà không trả lời). Việc hiểu và sử dụng từ lóng có thể giúp bạn hòa nhập tốt hơn với bạn bè người Nhật, nhưng cần lưu ý không sử dụng chúng trong các tình huống trang trọng hoặc với người lớn tuổi."],
      []
    )
  ],
  
  additionalResources: [
    {
      title: "Từ vựng mở rộng về từ lóng và biểu hiện thông dụng trong tiếng Nhật hiện đại",
      url: "https://example.com/japanese-slang-expressions"
    },
    {
      title: "Cách chuyển đổi giữa ngôn ngữ lịch sự và thân mật trong tiếng Nhật",
      url: "https://example.com/japanese-formal-informal-conversion"
    },
    {
      title: "Văn hóa giao tiếp giữa bạn bè tại Nhật Bản",
      url: "https://example.com/japanese-friendship-communication"
    }
  ]
});

export default lesson19; 