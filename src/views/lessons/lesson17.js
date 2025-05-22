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

const lesson17 = new Lesson({
  id: 17,
  title: "Nói về sở thích và điều yêu thích",
  description: "Học cách nói về sở thích, thú vui và những điều yêu thích bằng tiếng Nhật. Bài học này giúp bạn chia sẻ về những hoạt động giải trí và sở thích cá nhân trong các cuộc trò chuyện.",
  
  objectives: [
    "Học từ vựng về các hoạt động giải trí và sở thích phổ biến",
    "Nắm vững cách diễn đạt sở thích và điều yêu thích",
    "Hiểu cách sử dụng các cấu trúc câu để nói về mức độ thích/không thích",
    "Phát triển khả năng hỏi và trả lời về sở thích của người khác",
    "Học cách mời người khác tham gia vào hoạt động yêu thích"
  ],
  
  introduction: [
    new LessonSection(
      "Giới thiệu", 
      ["Nói về sở thích và những điều yêu thích là một phần quan trọng trong việc xây dựng các mối quan hệ xã hội. Khi bạn có thể chia sẻ những gì mình thích và hiểu được sở thích của người khác, bạn sẽ tìm thấy điểm chung và tạo dựng được các cuộc trò chuyện thú vị. Trong bài học này, chúng ta sẽ học cách nói về các hoạt động giải trí, sở thích cá nhân và cách mời người khác tham gia vào những hoạt động này bằng tiếng Nhật."],
      []
    )
  ],
  
  vocabulary: [
    // Từ vựng về sở thích và hoạt động
    new VocabularyItem("趣味", "Shumi", "Sở thích", "Danh từ"),
    new VocabularyItem("スポーツ", "Supōtsu", "Thể thao", "Danh từ"),
    new VocabularyItem("読書", "Dokusho", "Đọc sách", "Danh từ"),
    new VocabularyItem("映画", "Eiga", "Phim", "Danh từ"),
    new VocabularyItem("音楽", "Ongaku", "Âm nhạc", "Danh từ"),
    new VocabularyItem("料理", "Ryōri", "Nấu ăn", "Danh từ"),
    new VocabularyItem("旅行", "Ryokō", "Du lịch", "Danh từ"),
    new VocabularyItem("ダンス", "Dansu", "Khiêu vũ", "Danh từ"),
    new VocabularyItem("写真", "Shashin", "Nhiếp ảnh", "Danh từ"),
    new VocabularyItem("ゲーム", "Gēmu", "Trò chơi", "Danh từ"),
    new VocabularyItem("ショッピング", "Shoppingu", "Mua sắm", "Danh từ"),
    new VocabularyItem("ガーデニング", "Gādeningu", "Làm vườn", "Danh từ"),
    new VocabularyItem("絵を描く", "E wo kaku", "Vẽ tranh", "Cụm động từ"),
    new VocabularyItem("歌う", "Utau", "Hát", "Động từ nhóm 1"),
    
    // Từ vựng về thể thao
    new VocabularyItem("サッカー", "Sakkā", "Bóng đá", "Danh từ"),
    new VocabularyItem("野球", "Yakyū", "Bóng chày", "Danh từ"),
    new VocabularyItem("テニス", "Tenisu", "Tennis", "Danh từ"),
    new VocabularyItem("バスケットボール", "Basukettobōru", "Bóng rổ", "Danh từ"),
    new VocabularyItem("水泳", "Suiei", "Bơi lội", "Danh từ"),
    new VocabularyItem("ヨガ", "Yoga", "Yoga", "Danh từ"),
    
    // Từ vựng về mức độ thích/không thích
    new VocabularyItem("好き", "Suki", "Thích", "Tính từ -na"),
    new VocabularyItem("大好き", "Daisuki", "Rất thích", "Tính từ -na"),
    new VocabularyItem("嫌い", "Kirai", "Không thích", "Tính từ -na"),
    new VocabularyItem("大嫌い", "Daikirai", "Rất không thích", "Tính từ -na"),
    new VocabularyItem("興味がある", "Kyōmi ga aru", "Có hứng thú với", "Cụm từ"),
    new VocabularyItem("得意", "Tokui", "Giỏi về", "Tính từ -na"),
    new VocabularyItem("苦手", "Nigate", "Không giỏi về", "Tính từ -na"),
    
    // Động từ liên quan
    new VocabularyItem("する", "Suru", "Làm", "Động từ nhóm 3"),
    new VocabularyItem("やる", "Yaru", "Làm (không trang trọng)", "Động từ nhóm 1"),
    new VocabularyItem("見る", "Miru", "Xem", "Động từ nhóm 2"),
    new VocabularyItem("聞く", "Kiku", "Nghe", "Động từ nhóm 1"),
    new VocabularyItem("集める", "Atsumeru", "Sưu tầm", "Động từ nhóm 2"),
    new VocabularyItem("始める", "Hajimeru", "Bắt đầu", "Động từ nhóm 2"),
    new VocabularyItem("誘う", "Sasou", "Mời, rủ", "Động từ nhóm 1")
  ],
  
  grammar: [
    new GrammarPoint(
      "〜が好きです / 〜が嫌いです (Cấu trúc diễn đạt thích/không thích)",
      "Cấu trúc cơ bản để diễn đạt sở thích. '〜が' (~ga) là trợ từ chỉ đối tượng của cảm xúc, '好きです' (suki desu) là 'thích', '嫌いです' (kirai desu) là 'không thích'.",
      [
        new Example("私は音楽が好きです。", "Watashi wa ongaku ga suki desu.", "Tôi thích âm nhạc."),
        new Example("トムさんは納豆が嫌いです。", "Tomu-san wa nattō ga kirai desu.", "Tom không thích natto.")
      ]
    ),
    new GrammarPoint(
      "〜のが好きです (Cấu trúc diễn đạt thích làm gì)",
      "Cấu trúc diễn đạt thích làm một hoạt động nào đó. Động từ dạng từ điển + 'のが好きです' (no ga suki desu).",
      [
        new Example("私は本を読むのが好きです。", "Watashi wa hon wo yomu no ga suki desu.", "Tôi thích đọc sách."),
        new Example("彼は料理をするのが好きです。", "Kare wa ryōri wo suru no ga suki desu.", "Anh ấy thích nấu ăn.")
      ]
    ),
    new GrammarPoint(
      "〜は〜が好きです (Cấu trúc so sánh sở thích)",
      "Cấu trúc diễn đạt sở thích khi so sánh. '〜は' (~wa) chỉ chủ đề, '〜が' (~ga) chỉ đối tượng thích.",
      [
        new Example("私はコーヒーより紅茶が好きです。", "Watashi wa kōhī yori kōcha ga suki desu.", "Tôi thích trà hơn cà phê."),
        new Example("リンさんは映画より音楽が好きです。", "Rin-san wa eiga yori ongaku ga suki desu.", "Linh thích âm nhạc hơn phim.")
      ]
    ),
    new GrammarPoint(
      "〜をします / 〜をやります (Cấu trúc diễn đạt làm một hoạt động)",
      "Cấu trúc diễn đạt việc tham gia vào một hoạt động. '〜を' (~wo) là trợ từ chỉ đối tượng, 'します' (shimasu) hoặc 'やります' (yarimasu) là 'làm'.",
      [
        new Example("週末にテニスをします。", "Shūmatsu ni tenisu wo shimasu.", "Tôi chơi tennis vào cuối tuần."),
        new Example("毎日ヨガをやっています。", "Mainichi yoga wo yatte imasu.", "Tôi tập yoga hàng ngày.")
      ]
    ),
    new GrammarPoint(
      "〜ませんか (Hình thức mời làm gì)",
      "Cấu trúc dùng để mời ai đó làm gì. Động từ dạng phủ định lịch sự + 'か' (ka).",
      [
        new Example("一緒に映画を見に行きませんか。", "Issho ni eiga wo mi ni ikimasen ka.", "Bạn có muốn đi xem phim cùng tôi không?"),
        new Example("週末にテニスをしませんか。", "Shūmatsu ni tenisu wo shimasen ka.", "Bạn có muốn chơi tennis vào cuối tuần không?")
      ]
    )
  ],
  
  dialogues: [
    new Dialogue(
      "Nói về sở thích",
      [
        new DialogueExchange("田中 (Tanaka)", "ハイさん、趣味は何ですか。", "Hai-san, shumi wa nan desu ka.", "Hải, sở thích của bạn là gì?"),
        new DialogueExchange("ハイ (Hai)", "私の趣味は写真を撮ることです。特に風景写真が好きです。", "Watashi no shumi wa shashin wo toru koto desu. Tokuni fūkei shashin ga suki desu.", "Sở thích của tôi là chụp ảnh. Đặc biệt tôi thích chụp ảnh phong cảnh."),
        new DialogueExchange("田中", "そうですか。いつから写真を撮っているんですか。", "Sō desu ka. Itsu kara shashin wo totte iru n desu ka.", "Vậy à. Bạn đã chụp ảnh từ khi nào?"),
        new DialogueExchange("ハイ", "大学生の時から撮っています。もう5年になります。田中さんの趣味は何ですか。", "Daigakusei no toki kara totte imasu. Mō go-nen ni narimasu. Tanaka-san no shumi wa nan desu ka.", "Tôi đã chụp từ khi còn là sinh viên đại học. Đã được 5 năm rồi. Sở thích của Tanaka là gì?"),
        new DialogueExchange("田中", "私は料理をするのが好きです。特に和食を作るのが好きです。", "Watashi wa ryōri wo suru no ga suki desu. Tokuni washoku wo tsukuru no ga suki desu.", "Tôi thích nấu ăn. Đặc biệt là thích nấu món Nhật."),
        new DialogueExchange("ハイ", "すごいですね。何が得意ですか。", "Sugoi desu ne. Nani ga tokui desu ka.", "Tuyệt quá. Bạn giỏi món gì?"),
        new DialogueExchange("田中", "寿司と天ぷらが得意です。今度、作りますよ。", "Sushi to tenpura ga tokui desu. Kondo, tsukurimasu yo.", "Tôi giỏi làm sushi và tempura. Lần sau tôi sẽ làm cho bạn.")
      ],
      "Tình huống trò chuyện về sở thích. Chú ý cách sử dụng 'のが好きです' để nói về việc thích làm gì và '得意です' để nói về điều mình giỏi."
    ),
    new Dialogue(
      "Mời tham gia hoạt động",
      [
        new DialogueExchange("リン (Linh)", "ナムさん、週末は何をする予定ですか。", "Namu-san, shūmatsu wa nani wo suru yotei desu ka.", "Nam, cuối tuần này bạn dự định làm gì?"),
        new DialogueExchange("ナム (Nam)", "特に予定はありません。どうしてですか。", "Tokuni yotei wa arimasen. Dōshite desu ka.", "Tôi không có kế hoạch gì đặc biệt. Tại sao bạn hỏi vậy?"),
        new DialogueExchange("リン", "土曜日に友達と一緒にハイキングに行くんですが、ナムさんも一緒に行きませんか。", "Doyōbi ni tomodachi to issho ni haikingu ni iku n desu ga, Namu-san mo issho ni ikimasen ka.", "Thứ Bảy tôi sẽ đi leo núi với bạn, Nam có muốn đi cùng không?"),
        new DialogueExchange("ナム", "いいですね。ハイキングは好きです。どこに行きますか。", "Ii desu ne. Haikingu wa suki desu. Doko ni ikimasu ka.", "Hay đấy. Tôi thích đi leo núi. Chúng ta sẽ đi đâu?"),
        new DialogueExchange("リン", "富士山の近くです。朝8時に駅で会いましょう。", "Fujisan no chikaku desu. Asa hachi-ji ni eki de aimashou.", "Gần núi Phú Sĩ. Hãy gặp nhau ở ga lúc 8 giờ sáng."),
        new DialogueExchange("ナム", "わかりました。楽しみにしています。", "Wakarimashita. Tanoshimi ni shite imasu.", "Tôi hiểu rồi. Tôi rất mong chờ.")
      ],
      "Tình huống mời tham gia hoạt động. Chú ý cách sử dụng '〜ませんか' để mời ai đó làm gì và '楽しみにしています' để diễn đạt sự mong chờ."
    ),
    new Dialogue(
      "Nói về sở thích âm nhạc",
      [
        new DialogueExchange("山田 (Yamada)", "アンさん、どんな音楽が好きですか。", "An-san, donna ongaku ga suki desu ka.", "An, bạn thích loại nhạc nào?"),
        new DialogueExchange("アン (An)", "私はポップミュージックとジャズが好きです。山田さんは？", "Watashi wa poppu myūjikku to jazu ga suki desu. Yamada-san wa?", "Tôi thích nhạc pop và jazz. Còn Yamada?"),
        new DialogueExchange("山田", "私はロックが一番好きです。特に80年代のロックが好きです。", "Watashi wa rokku ga ichiban suki desu. Tokuni hachijū nendai no rokku ga suki desu.", "Tôi thích nhạc rock nhất. Đặc biệt là nhạc rock những năm 80."),
        new DialogueExchange("アン", "好きなバンドはありますか。", "Suki na bando wa arimasu ka.", "Bạn có ban nhạc yêu thích nào không?"),
        new DialogueExchange("山田", "はい、クイーンが大好きです。アンさんは楽器を弾きますか。", "Hai, Kuīn ga daisuki desu. An-san wa gakki wo hikimasu ka.", "Có, tôi rất thích Queen. An có chơi nhạc cụ nào không?"),
        new DialogueExchange("アン", "はい、ギターを弾きます。でも、まだ上手じゃありません。", "Hai, gitā wo hikimasu. Demo, mada jōzu ja arimasen.", "Có, tôi chơi guitar. Nhưng tôi vẫn chưa giỏi lắm."),
        new DialogueExchange("山田", "すごいですね。今度、一緒に演奏しませんか。", "Sugoi desu ne. Kondo, issho ni ensō shimasen ka.", "Tuyệt quá. Lần sau chúng ta cùng chơi nhạc nhé?"),
        new DialogueExchange("アン", "はい、ぜひ。楽しみにしています。", "Hai, zehi. Tanoshimi ni shite imasu.", "Vâng, rất sẵn lòng. Tôi rất mong chờ.")
      ],
      "Tình huống trò chuyện về sở thích âm nhạc. Chú ý cách sử dụng '一番好きです' để diễn đạt thích nhất và '大好きです' để diễn đạt rất thích."
    )
  ],
  
  exercises: [
    new Exercise(
      "multiple-choice",
      "「私は映画を見るのが好きです」はどういう意味ですか。",
      ["Tôi thích xem phim.", "Tôi không thích xem phim.", "Tôi đang xem phim.", "Tôi sẽ xem phim."],
      "Tôi thích xem phim.",
      "Câu này sử dụng cấu trúc '〜のが好きです' để diễn đạt thích làm một hoạt động nào đó."
    ),
    new Exercise(
      "fill-in-blank",
      "「週末に一緒にテニスを___ませんか」と言いたい場合、「___」に入る言葉は何ですか。", 
      ["し", "やり", "する"],
      "し",
      "Điền từ thích hợp để hoàn thành câu 'Bạn có muốn chơi tennis cùng tôi vào cuối tuần không?'"
    ),
    new Exercise(
      "matching",
      "Nối các hoạt động với từ vựng tiếng Nhật tương ứng",
      [
        { japanese: "読書", english: "Đọc sách" },
        { japanese: "旅行", english: "Du lịch" },
        { japanese: "料理", english: "Nấu ăn" },
        { japanese: "写真", english: "Nhiếp ảnh" }
      ],
      "",
      "Hãy nối các hoạt động tiếng Nhật với ý nghĩa tiếng Việt tương ứng."
    ),
    new Exercise(
      "role-play",
      "Hãy đóng vai một người đang nói về sở thích của mình và mời bạn bè tham gia. Bao gồm: sở thích chính của bạn là gì, bạn đã làm nó bao lâu rồi, và mời người khác tham gia cùng bạn.",
      [],
      "",
      "Sử dụng các mẫu câu như '私の趣味は〜です' (Sở thích của tôi là ~), '〜が好きです' (Tôi thích ~), và '一緒に〜しませんか' (Bạn có muốn ~ cùng tôi không?)."
    )
  ],
  
  culturalNotes: [
    new LessonSection(
      "Sở thích và giải trí trong văn hóa Nhật Bản",
      ["Người Nhật có nhiều sở thích và hoạt động giải trí đa dạng, một số mang đậm nét văn hóa truyền thống như thư pháp (書道 - shodō), cắm hoa (生け花 - ikebana), trà đạo (茶道 - sadō), và võ thuật như judo, kendo. Bên cạnh đó, các hoạt động hiện đại như karaoke, manga, anime, và game cũng rất phổ biến. Trong xã hội Nhật Bản, việc có sở thích và dành thời gian cho nó được coi trọng như một cách để cân bằng cuộc sống và phát triển bản thân. Nhiều người Nhật theo đuổi sở thích của mình một cách nghiêm túc và chuyên sâu, đôi khi phát triển thành chuyên gia trong lĩnh vực đó. Các câu lạc bộ sở thích (サークル - sākuru) cũng rất phổ biến, nơi những người có cùng sở thích có thể gặp gỡ và chia sẻ niềm đam mê."],
      []
    ),
    new LessonSection(
      "Khiêm tốn khi nói về kỹ năng cá nhân",
      ["Trong văn hóa Nhật Bản, khiêm tốn (謙遜 - kenson) là một đức tính được đề cao. Khi nói về kỹ năng hoặc thành tích cá nhân, người Nhật thường có xu hướng khiêm tốn và không khoe khoang. Ngay cả khi họ rất giỏi về một lĩnh vực nào đó, họ thường nói 'まだまだです' (mada mada desu - tôi còn phải cố gắng nhiều) hoặc 'そんなに上手じゃありません' (sonna ni jōzu ja arimasen - tôi không giỏi đến thế). Đây không phải là sự thiếu tự tin mà là một cách thể hiện sự khiêm nhường trong giao tiếp. Khi ai đó khen ngợi kỹ năng của bạn, phản ứng phù hợp là khiêm tốn cảm ơn thay vì đồng ý với lời khen. Hiểu được điểm này sẽ giúp bạn giao tiếp tự nhiên hơn khi nói về sở thích và kỹ năng của mình với người Nhật."],
      []
    )
  ],
  
  additionalResources: [
    {
      title: "Từ vựng mở rộng về các hoạt động giải trí và sở thích tại Nhật Bản",
      url: "https://example.com/japanese-hobbies-vocabulary"
    },
    {
      title: "Các câu lạc bộ và nhóm sở thích phổ biến tại Nhật Bản",
      url: "https://example.com/japanese-hobby-clubs"
    },
    {
      title: "Cách tham gia các hoạt động giải trí khi du học tại Nhật Bản",
      url: "https://example.com/recreational-activities-japan"
    }
  ]
});

export default lesson17; 