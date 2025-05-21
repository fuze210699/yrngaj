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

const lesson11 = new Lesson({
  id: 11,
  title: "Chào hỏi khi về nhà và chia sẻ cảm nhận",
  description: "Học cách chào hỏi khi trở về nhà và chia sẻ cảm xúc, trải nghiệm trong ngày bằng tiếng Nhật. Bài học này giúp bạn giao tiếp tự nhiên và thân thiết với người thân trong môi trường gia đình Nhật Bản.",
  
  objectives: [
    "Học các cách chào hỏi khi trở về nhà trong tiếng Nhật",
    "Nắm vững cách diễn đạt cảm xúc, trải nghiệm trong ngày",
    "Hiểu các biểu thức thường dùng khi trò chuyện với gia đình",
    "Phát triển khả năng chia sẻ về hoạt động đã trải qua",
    "Học cách thể hiện sự quan tâm đến người thân trong gia đình"
  ],
  
  introduction: [
    new LessonSection(
      "Giới thiệu", 
      ["Trong văn hóa Nhật Bản, việc chào hỏi khi trở về nhà và chia sẻ những trải nghiệm, cảm xúc trong ngày là một phần quan trọng của giao tiếp gia đình. Từ những biểu thức đơn giản như 'ただいま' (tadaima - tôi đã về) và 'おかえり' (okaeri - chào mừng về nhà) đến việc chia sẻ chi tiết về ngày làm việc, học tập, những cảm xúc vui buồn, tất cả đều thể hiện sự gắn kết và quan tâm lẫn nhau. Trong bài học này, chúng ta sẽ học cách sử dụng các biểu thức thông dụng và cấu trúc câu để trò chuyện tự nhiên với người thân trong gia đình khi trở về nhà sau một ngày dài."],
      []
    )
  ],
  
  vocabulary: [
    new VocabularyItem("ただいま", "Tadaima", "Tôi đã về", "Biểu thức"),
    new VocabularyItem("おかえり", "Okaeri", "Chào mừng trở về (thân mật)", "Biểu thức"),
    new VocabularyItem("おかえりなさい", "Okaerinasai", "Chào mừng trở về (lịch sự)", "Biểu thức"),
    new VocabularyItem("いってきます", "Ittekimasu", "Tôi đi đây (nói khi rời khỏi nhà)", "Biểu thức"),
    new VocabularyItem("いってらっしゃい", "Itterasshai", "Đi cẩn thận nhé (đáp lại ittekimasu)", "Biểu thức"),
    new VocabularyItem("お疲れ様", "Otsukaresama", "Bạn đã cố gắng rồi", "Biểu thức"),
    new VocabularyItem("疲れた", "Tsukareta", "Mệt mỏi", "Tính từ (dạng ta)"),
    new VocabularyItem("楽しかった", "Tanoshikatta", "Vui vẻ, thú vị (quá khứ)", "Tính từ (dạng ta)"),
    new VocabularyItem("大変だった", "Taihen datta", "Khó khăn, vất vả (quá khứ)", "Tính từ (dạng ta)"),
    new VocabularyItem("忙しかった", "Isogashikatta", "Bận rộn (quá khứ)", "Tính từ (dạng ta)"),
    new VocabularyItem("今日", "Kyō", "Hôm nay", "Danh từ"),
    new VocabularyItem("一日", "Ichinichi", "Một ngày", "Danh từ"),
    new VocabularyItem("仕事", "Shigoto", "Công việc", "Danh từ"),
    new VocabularyItem("学校", "Gakkō", "Trường học", "Danh từ"),
    new VocabularyItem("授業", "Jugyō", "Bài học, tiết học", "Danh từ"),
    new VocabularyItem("会議", "Kaigi", "Cuộc họp", "Danh từ"),
    new VocabularyItem("試験", "Shiken", "Kỳ thi, bài kiểm tra", "Danh từ"),
    new VocabularyItem("残業", "Zangyō", "Làm thêm giờ", "Danh từ"),
    new VocabularyItem("出張", "Shucchō", "Công tác", "Danh từ"),
    new VocabularyItem("気分", "Kibun", "Tâm trạng, cảm giác", "Danh từ"),
    new VocabularyItem("調子", "Chōshi", "Tình trạng, trạng thái", "Danh từ"),
    new VocabularyItem("元気", "Genki", "Khỏe mạnh, năng động", "Tính từ -na"),
    new VocabularyItem("体調", "Taichō", "Tình trạng sức khỏe", "Danh từ"),
    new VocabularyItem("帰る", "Kaeru", "Trở về", "Động từ nhóm 1"),
    new VocabularyItem("話す", "Hanasu", "Nói chuyện", "Động từ nhóm 1"),
    new VocabularyItem("聞く", "Kiku", "Nghe", "Động từ nhóm 1"),
    new VocabularyItem("食べる", "Taberu", "Ăn", "Động từ nhóm 2"),
    new VocabularyItem("どうだった", "Dō datta", "Thế nào (quá khứ)", "Biểu thức"),
    new VocabularyItem("どんな", "Donna", "Như thế nào, loại gì", "Từ nghi vấn"),
    new VocabularyItem("いかがでしたか", "Ikaga deshita ka", "Thế nào (lịch sự, quá khứ)", "Biểu thức")
  ],
  
  grammar: [
    new GrammarPoint(
      "〜はどうでしたか / 〜はどうだった",
      "Cấu trúc để hỏi về trải nghiệm, cảm nhận trong quá khứ. '〜は' (~wa) là trợ từ chỉ chủ đề, 'どうでしたか' (dou deshita ka) là 'thế nào' ở dạng quá khứ lịch sự, và 'どうだった' (dou datta) là dạng thân mật.",
      [
        new Example("今日の仕事はどうでしたか。", "Kyō no shigoto wa dō deshita ka.", "Công việc hôm nay thế nào?"),
        new Example("学校はどうだった？", "Gakkō wa dō datta?", "Trường học thế nào?")
      ]
    ),
    new GrammarPoint(
      "〜て + しまう",
      "Cấu trúc diễn đạt sự tiếc nuối, sự việc không mong muốn hoặc đã hoàn thành. Động từ ở dạng te + 'しまう' (shimau) hoặc 'ちゃう' (chau) trong ngôn ngữ nói.",
      [
        new Example("今日は会議で遅くなってしまいました。", "Kyō wa kaigi de osoku natte shimaimashita.", "Hôm nay tôi bị muộn vì cuộc họp."),
        new Example("宿題を忘れちゃった。", "Shukudai wo wasurechatta.", "Tôi đã quên làm bài tập về nhà mất rồi.")
      ]
    ),
    new GrammarPoint(
      "〜から〜まで",
      "Cấu trúc diễn đạt khoảng thời gian từ điểm này đến điểm kia. '〜から' (~kara) là 'từ', và '〜まで' (~made) là 'đến'.",
      [
        new Example("今日は9時から6時まで働きました。", "Kyō wa ku-ji kara roku-ji made hatarakimashita.", "Hôm nay tôi làm việc từ 9 giờ đến 6 giờ."),
        new Example("朝から晩まで忙しかったです。", "Asa kara ban made isogashikatta desu.", "Tôi bận rộn từ sáng đến tối.")
      ]
    ),
    new GrammarPoint(
      "〜けど / 〜が",
      "Cấu trúc diễn đạt sự đối lập, trái ngược. '〜けど' (~kedo) là dạng thân mật, và '〜が' (~ga) là dạng lịch sự, cả hai đều có nghĩa là 'nhưng'.",
      [
        new Example("仕事は大変だったけど、楽しかったです。", "Shigoto wa taihen datta kedo, tanoshikatta desu.", "Công việc vất vả nhưng vui."),
        new Example("試験は難しかったですが、なんとか終わりました。", "Shiken wa muzukashikatta desu ga, nantoka owarimashita.", "Kỳ thi khó, nhưng tôi đã hoàn thành được.")
      ]
    ),
    new GrammarPoint(
      "〜たり〜たりする",
      "Cấu trúc liệt kê một số hoạt động tiêu biểu đã làm. Động từ ở dạng ta + 'り' (ri) và lặp lại, kết thúc bằng 'する' (suru) hoặc động từ khác.",
      [
        new Example("今日は買い物に行ったり、友達に会ったりしました。", "Kyō wa kaimono ni ittari, tomodachi ni attari shimashita.", "Hôm nay tôi đã đi mua sắm và gặp bạn bè."),
        new Example("休日は本を読んだり、映画を見たりします。", "Kyūjitsu wa hon wo yondari, eiga wo mitari shimasu.", "Ngày nghỉ tôi đọc sách và xem phim.")
      ]
    )
  ],
  
  dialogues: [
    new Dialogue(
      "Trở về nhà sau ngày làm việc",
      [
        new DialogueExchange("夫 (Otto)", "ただいま。", "Tadaima.", "Anh về rồi đây."),
        new DialogueExchange("妻 (Tsuma)", "おかえりなさい。お疲れ様。今日の仕事はどうでしたか。", "Okaerinasai. Otsukaresama. Kyō no shigoto wa dō deshita ka.", "Chào mừng anh về. Anh đã cố gắng rồi. Công việc hôm nay thế nào?"),
        new DialogueExchange("夫", "今日は会議が長くて、少し疲れました。でも、プロジェクトが順調に進んでいるので、良かったです。", "Kyō wa kaigi ga nagakute, sukoshi tsukaremashita. Demo, purojekuto ga junchō ni susunde iru node, yokatta desu.", "Hôm nay họp dài, nên hơi mệt. Nhưng dự án đang tiến triển tốt, nên cũng tốt."),
        new DialogueExchange("妻", "そうですか。大変でしたね。晩ご飯の準備ができていますよ。", "Sō desu ka. Taihen deshita ne. Bangohan no junbi ga dekite imasu yo.", "Vậy à. Vất vả rồi nhỉ. Cơm tối đã chuẩn bị xong rồi đó."),
        new DialogueExchange("夫", "ありがとう。今日は何を食べますか。", "Arigatō. Kyō wa nani wo tabemasu ka.", "Cảm ơn em. Hôm nay mình ăn gì vậy?"),
        new DialogueExchange("妻", "カレーライスですよ。昨日言っていた新しいレシピで作ってみました。", "Karē raisu desu yo. Kinō itte ita atarashii reshipi de tsukutte mimashita.", "Cơm cà ri đó. Em đã thử làm theo công thức mới mà anh nói hôm qua."),
        new DialogueExchange("夫", "あ、楽しみです。じゃ、手を洗ってきます。", "A, tanoshimi desu. Ja, te wo aratte kimasu.", "À, anh mong chờ đấy. Vậy, để anh đi rửa tay đã.")
      ],
      "Tình huống chào hỏi khi trở về nhà và trò chuyện về ngày làm việc. Chú ý cách sử dụng 'ただいま' (tadaima) và 'おかえりなさい' (okaerinasai), cũng như cách hỏi thăm về công việc với 'どうでしたか' (dō deshita ka)."
    ),
    new Dialogue(
      "Học sinh trở về nhà và kể về ngày học",
      [
        new DialogueExchange("娘 (Musume)", "ただいまー！", "Tadaimā!", "Con về rồi đây!"),
        new DialogueExchange("母 (Haha)", "おかえり。今日の学校はどうだった？", "Okaeri. Kyō no gakkō wa dō datta?", "Chào con về. Hôm nay ở trường thế nào?"),
        new DialogueExchange("娘", "今日は楽しかった！数学のテストがあって、よくできたと思う！", "Kyō wa tanoshikatta! Sūgaku no tesuto ga atte, yoku dekita to omou!", "Hôm nay vui lắm! Con có bài kiểm tra toán, và con nghĩ mình làm tốt!"),
        new DialogueExchange("母", "そうなの？よかったね。他に何かあった？", "Sō na no? Yokatta ne. Hoka ni nanika atta?", "Thật hả? Tốt quá nhỉ. Có chuyện gì khác không?"),
        new DialogueExchange("娘", "うん、お昼休みに友達と新しいカフェに行ったり、放課後に図書館で勉強したりした。あ、それから、明日の遠足の連絡プリントがあるよ。", "Un, ohiru yasumi ni tomodachi to atarashii kafe ni ittari, hōkago ni toshokan de benkyō shitari shita. A, sorekara, ashita no ensoku no renraku purinto ga aru yo.", "Có, giờ nghỉ trưa con đã đi đến quán cà phê mới với bạn, và sau giờ học con học bài ở thư viện. À, sau đó, có giấy thông báo về chuyến dã ngoại ngày mai đây."),
        new DialogueExchange("母", "そう、見せてね。それじゃ、手を洗って、おやつを食べましょう。", "Sō, misete ne. Sore ja, te wo aratte, oyatsu wo tabemashou.", "Vậy à, cho mẹ xem nhé. Thôi, đi rửa tay đi, rồi ăn bánh nào.")
      ],
      "Tình huống học sinh trở về nhà và kể về ngày học. Chú ý cách sử dụng ngôn ngữ thân mật giữa mẹ và con, và cách học sinh kể về các hoạt động trong ngày bằng cấu trúc '〜たり〜たりした' (~tari ~tari shita)."
    )
  ],
  
  exercises: [
    new Exercise(
      "multiple-choice",
      "家に帰った時、最初に何と言いますか。",
      ["ただいま", "さようなら", "いってきます", "こんにちは"],
      "ただいま",
      "Khi trở về nhà, câu đầu tiên nên nói là 'ただいま' (tadaima - tôi đã về)."
    ),
    new Exercise(
      "fill-in-blank",
      "「ただいま」と言った人に対して、「＿＿＿＿＿」と答えます。", 
      ["おかえり", "いってらっしゃい", "ありがとう"],
      "おかえり",
      "Điền từ thích hợp để hoàn thành câu 'Đối với người nói 'tadaima', ta đáp lại bằng ___'"
    ),
    new Exercise(
      "matching",
      "Nối các biểu thức chào hỏi với tình huống sử dụng",
      [
        { japanese: "ただいま", english: "Khi trở về nhà" },
        { japanese: "いってきます", english: "Khi rời khỏi nhà" },
        { japanese: "おかえり", english: "Chào đón người trở về nhà" },
        { japanese: "いってらっしゃい", english: "Tiễn người rời khỏi nhà" }
      ],
      "",
      "Hãy nối các biểu thức chào hỏi trong tiếng Nhật với tình huống sử dụng"
    ),
    new Exercise(
      "speaking",
      "Hãy tưởng tượng bạn trở về nhà sau một ngày học/làm việc bận rộn. Hãy tạo một đoạn hội thoại ngắn giữa bạn và người thân, trong đó bạn kể về những trải nghiệm trong ngày.",
      [],
      "",
      "Sử dụng các biểu thức như 'ただいま' (tadaima), 'お疲れ様' (otsukaresama), và các cấu trúc như '〜はどうだった' (~wa dou datta) và '〜たり〜たりしました' (~tari ~tari shimashita)."
    )
  ],
  
  culturalNotes: [
    new LessonSection(
      "Tầm quan trọng của các biểu thức chào hỏi khi ra/vào nhà trong văn hóa Nhật",
      ["Trong văn hóa Nhật Bản, việc sử dụng các biểu thức chào hỏi khi ra vào nhà như 'ただいま' (tadaima), 'おかえり' (okaeri), 'いってきます' (ittekimasu), và 'いってらっしゃい' (itterasshai) là một phần không thể thiếu trong giao tiếp hàng ngày của gia đình. Những biểu thức này không chỉ đơn thuần là lời chào, mà còn thể hiện sự gắn kết, quan tâm và tôn trọng giữa các thành viên trong gia đình. 'ただいま' nghĩa đen là 'bây giờ' hoặc 'vừa mới', ám chỉ 'tôi vừa mới về', trong khi 'おかえり' nghĩa là 'chào mừng trở về'. Tương tự, 'いってきます' có nghĩa là 'tôi sẽ đi và trở lại', và 'いってらっしゃい' mang ý nghĩa 'đi cẩn thận và trở về nhé'. Việc duy trì những nghi thức nhỏ này giúp củng cố mối liên kết gia đình và tạo cảm giác an toàn, ấm áp cho ngôi nhà."],
      []
    ),
    new LessonSection(
      "Chia sẻ về ngày làm việc/học tập - Văn hóa コミュニケーション (truyền thông) trong gia đình Nhật",
      ["Việc chia sẻ về ngày làm việc hoặc học tập khi trở về nhà là một phần quan trọng của văn hóa truyền thông (コミュニケーション - komyunikēshon) trong gia đình Nhật Bản. Điều này không chỉ giúp các thành viên trong gia đình cập nhật về cuộc sống của nhau mà còn là cách để giải tỏa áp lực và stress sau một ngày dài. Trong nhiều gia đình Nhật, bữa tối thường là thời điểm quan trọng để mọi người tụ họp và chia sẻ những trải nghiệm trong ngày. Phụ huynh thường hỏi con cái về trường học, bạn bè và các hoạt động, trong khi con cái cũng quan tâm đến công việc của cha mẹ. Mặc dù xã hội Nhật hiện đại có nhiều thay đổi về cấu trúc gia đình và lối sống, nhưng giá trị của việc chia sẻ và lắng nghe vẫn được duy trì như một cách để giữ gìn sự hòa thuận và gắn kết gia đình."],
      []
    )
  ],
  
  additionalResources: [
    {
      title: "Video: Các biểu thức chào hỏi trong gia đình Nhật Bản",
      url: "https://example.com/japanese-family-greetings-video"
    },
    {
      title: "Từ vựng về cảm xúc và trải nghiệm trong tiếng Nhật",
      url: "https://example.com/japanese-emotions-vocabulary"
    },
    {
      title: "Bài tập thêm: Tạo đoạn hội thoại gia đình",
      url: "https://example.com/japanese-family-conversation-practice"
    }
  ]
});

export default lesson11; 