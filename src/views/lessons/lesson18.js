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

const lesson18 = new Lesson({
  id: 18,
  title: "Kể về kinh nghiệm trong quá khứ",
  description: "Học cách kể về những trải nghiệm và sự kiện đã xảy ra trong quá khứ bằng tiếng Nhật. Bài học này giúp bạn chia sẻ những kỷ niệm, kinh nghiệm cá nhân và hỏi về quá khứ của người khác.",
  
  objectives: [
    "Nắm vững cách sử dụng thì quá khứ của động từ, tính từ và danh từ",
    "Học cách kể về những trải nghiệm và sự kiện đã qua",
    "Hiểu cách sử dụng các từ chỉ thời gian trong quá khứ",
    "Phát triển khả năng hỏi và trả lời về kinh nghiệm của người khác",
    "Học cách diễn đạt cảm xúc và ấn tượng về những trải nghiệm đã qua"
  ],
  
  introduction: [
    new LessonSection(
      "Giới thiệu", 
      ["Kể về những kinh nghiệm trong quá khứ là một phần quan trọng trong giao tiếp hàng ngày. Khi bạn có thể chia sẻ những trải nghiệm đã qua và hiểu được câu chuyện của người khác, bạn sẽ tạo dựng được các cuộc trò chuyện sâu sắc và thú vị. Trong bài học này, chúng ta sẽ học cách sử dụng thì quá khứ trong tiếng Nhật để kể về những sự kiện đã xảy ra, những nơi đã đến và những điều đã trải qua."],
      []
    )
  ],
  
  vocabulary: [
    // Từ vựng về thời gian trong quá khứ
    new VocabularyItem("昨日", "Kinō", "Hôm qua", "Danh từ"),
    new VocabularyItem("先週", "Senshū", "Tuần trước", "Danh từ"),
    new VocabularyItem("先月", "Sengetsu", "Tháng trước", "Danh từ"),
    new VocabularyItem("去年", "Kyonen", "Năm ngoái", "Danh từ"),
    new VocabularyItem("〜年前", "~-nen mae", "~ năm trước", "Cụm từ"),
    new VocabularyItem("子供の頃", "Kodomo no koro", "Thời thơ ấu", "Cụm từ"),
    new VocabularyItem("学生の時", "Gakusei no toki", "Thời sinh viên", "Cụm từ"),
    new VocabularyItem("初めて", "Hajimete", "Lần đầu tiên", "Phó từ"),
    new VocabularyItem("以前", "Izen", "Trước đây", "Danh từ"),
    new VocabularyItem("最近", "Saikin", "Gần đây", "Danh từ"),
    
    // Từ vựng về kinh nghiệm và trải nghiệm
    new VocabularyItem("経験", "Keiken", "Kinh nghiệm", "Danh từ"),
    new VocabularyItem("思い出", "Omoide", "Kỷ niệm", "Danh từ"),
    new VocabularyItem("旅行", "Ryokō", "Chuyến du lịch", "Danh từ"),
    new VocabularyItem("留学", "Ryūgaku", "Du học", "Danh từ"),
    new VocabularyItem("卒業", "Sotsugyō", "Tốt nghiệp", "Danh từ"),
    new VocabularyItem("結婚", "Kekkon", "Kết hôn", "Danh từ"),
    new VocabularyItem("引っ越し", "Hikkoshi", "Chuyển nhà", "Danh từ"),
    new VocabularyItem("事故", "Jiko", "Tai nạn", "Danh từ"),
    
    // Động từ liên quan đến kinh nghiệm (dạng từ điển)
    new VocabularyItem("行く", "Iku", "Đi", "Động từ nhóm 1"),
    new VocabularyItem("見る", "Miru", "Xem", "Động từ nhóm 2"),
    new VocabularyItem("食べる", "Taberu", "Ăn", "Động từ nhóm 2"),
    new VocabularyItem("会う", "Au", "Gặp", "Động từ nhóm 1"),
    new VocabularyItem("住む", "Sumu", "Sống", "Động từ nhóm 1"),
    new VocabularyItem("勉強する", "Benkyō suru", "Học", "Động từ nhóm 3"),
    new VocabularyItem("働く", "Hataraku", "Làm việc", "Động từ nhóm 1"),
    new VocabularyItem("経験する", "Keiken suru", "Trải nghiệm", "Động từ nhóm 3"),
    
    // Từ vựng về cảm xúc và ấn tượng
    new VocabularyItem("楽しい", "Tanoshii", "Vui", "Tính từ -i"),
    new VocabularyItem("面白い", "Omoshiroi", "Thú vị", "Tính từ -i"),
    new VocabularyItem("大変", "Taihen", "Khó khăn", "Tính từ -na"),
    new VocabularyItem("素晴らしい", "Subarashii", "Tuyệt vời", "Tính từ -i"),
    new VocabularyItem("忙しい", "Isogashii", "Bận rộn", "Tính từ -i"),
    new VocabularyItem("怖い", "Kowai", "Sợ", "Tính từ -i"),
    new VocabularyItem("懐かしい", "Natsukashii", "Hoài niệm", "Tính từ -i")
  ],
  
  grammar: [
    new GrammarPoint(
      "動詞の過去形 (Thì quá khứ của động từ)",
      "Để diễn đạt hành động đã xảy ra trong quá khứ, ta chuyển động từ sang dạng quá khứ (〜ました/〜ませんでした cho thể lịch sự, 〜た/〜なかった cho thể thông thường).",
      [
        new Example("昨日、映画を見ました。", "Kinō, eiga wo mimashita.", "Hôm qua tôi đã xem phim."),
        new Example("先週、京都に行きませんでした。", "Senshū, Kyōto ni ikimasendeshita.", "Tuần trước tôi đã không đi Kyoto.")
      ]
    ),
    new GrammarPoint(
      "形容詞の過去形 (Thì quá khứ của tính từ)",
      "Để diễn đạt trạng thái trong quá khứ, ta chuyển tính từ sang dạng quá khứ. Với tính từ -i: 〜かったです (khẳng định), 〜くなかったです (phủ định). Với tính từ -na: 〜でした (khẳng định), 〜ではありませんでした (phủ định).",
      [
        new Example("昨日の映画は面白かったです。", "Kinō no eiga wa omoshirokatta desu.", "Bộ phim hôm qua rất thú vị."),
        new Example("日本料理は美味しくなかったです。", "Nihon ryōri wa oishikunakatta desu.", "Món ăn Nhật không ngon."),
        new Example("彼は親切でした。", "Kare wa shinsetsu deshita.", "Anh ấy đã rất tốt bụng."),
        new Example("天気は良くありませんでした。", "Tenki wa yokarimasendeshita.", "Thời tiết không tốt.")
      ]
    ),
    new GrammarPoint(
      "名詞の過去形 (Thì quá khứ của danh từ)",
      "Để diễn đạt trạng thái của danh từ trong quá khứ, ta sử dụng 'でした' (khẳng định) hoặc 'ではありませんでした' (phủ định).",
      [
        new Example("私は学生でした。", "Watashi wa gakusei deshita.", "Tôi đã là sinh viên."),
        new Example("彼は先生ではありませんでした。", "Kare wa sensei dewa arimasendeshita.", "Anh ấy đã không phải là giáo viên.")
      ]
    ),
    new GrammarPoint(
      "〜たことがあります (Cấu trúc diễn đạt kinh nghiệm)",
      "Cấu trúc diễn đạt kinh nghiệm đã từng làm gì đó. Động từ dạng quá khứ + 'ことがあります' (koto ga arimasu).",
      [
        new Example("富士山に登ったことがあります。", "Fujisan ni nobotta koto ga arimasu.", "Tôi đã từng leo núi Phú Sĩ."),
        new Example("日本料理を作ったことがありません。", "Nihon ryōri wo tsukutta koto ga arimasen.", "Tôi chưa từng nấu món Nhật.")
      ]
    ),
    new GrammarPoint(
      "〜時、〜でした (Cấu trúc diễn đạt trạng thái trong một thời điểm quá khứ)",
      "Cấu trúc diễn đạt trạng thái hoặc tình huống tại một thời điểm cụ thể trong quá khứ.",
      [
        new Example("子供の時、よく公園で遊びました。", "Kodomo no toki, yoku kōen de asobimashita.", "Khi còn nhỏ, tôi thường chơi ở công viên."),
        new Example("大学生の時、とても忙しかったです。", "Daigakusei no toki, totemo isogashikatta desu.", "Khi còn là sinh viên đại học, tôi rất bận rộn.")
      ]
    )
  ],
  
  dialogues: [
    new Dialogue(
      "Kể về chuyến du lịch",
      [
        new DialogueExchange("山田 (Yamada)", "リンさん、先週末は何をしましたか。", "Rin-san, senshūmatsu wa nani wo shimashita ka.", "Linh, cuối tuần trước bạn đã làm gì?"),
        new DialogueExchange("リン (Linh)", "京都に旅行に行きました。とても楽しかったです。", "Kyōto ni ryokō ni ikimashita. Totemo tanoshikatta desu.", "Tôi đã đi du lịch Kyoto. Rất vui."),
        new DialogueExchange("山田", "そうですか。何日間いましたか。", "Sō desu ka. Nan nichi kan imashita ka.", "Vậy à. Bạn đã ở đó mấy ngày?"),
        new DialogueExchange("リン", "二泊三日でした。金曜日に出発して、日曜日に帰りました。", "Nihaku mikka deshita. Kin'yōbi ni shuppatsu shite, nichiyōbi ni kaerimashita.", "Tôi đã ở đó hai đêm ba ngày. Khởi hành vào thứ Sáu và trở về vào Chủ nhật."),
        new DialogueExchange("山田", "どこに行きましたか。", "Doko ni ikimashita ka.", "Bạn đã đi đâu?"),
        new DialogueExchange("リン", "清水寺と金閣寺に行きました。それから、嵐山も訪れました。", "Kiyomizu-dera to Kinkaku-ji ni ikimashita. Sorekara, Arashiyama mo otozuremashita.", "Tôi đã đi đến chùa Kiyomizu và chùa Kinkaku. Sau đó, tôi cũng đã thăm Arashiyama."),
        new DialogueExchange("山田", "美味しい食べ物を食べましたか。", "Oishii tabemono wo tabemashita ka.", "Bạn đã ăn món ngon nào không?"),
        new DialogueExchange("リン", "はい、京都のおばんざいを食べました。とても美味しかったです。", "Hai, Kyōto no obanzai wo tabemashita. Totemo oishikatta desu.", "Vâng, tôi đã ăn obanzai của Kyoto. Rất ngon.")
      ],
      "Tình huống kể về chuyến du lịch đã qua. Chú ý cách sử dụng thì quá khứ của động từ (〜ました) và tính từ (〜かったです)."
    ),
    new Dialogue(
      "Nói về kinh nghiệm du học",
      [
        new DialogueExchange("田中 (Tanaka)", "ナムさんは日本に留学したことがありますか。", "Namu-san wa Nihon ni ryūgaku shita koto ga arimasu ka.", "Nam, bạn đã từng du học Nhật Bản chưa?"),
        new DialogueExchange("ナム (Nam)", "はい、あります。三年前に東京に一年間留学しました。", "Hai, arimasu. San-nen mae ni Tōkyō ni ichinen-kan ryūgaku shimashita.", "Vâng, tôi đã từng. Ba năm trước tôi đã du học ở Tokyo một năm."),
        new DialogueExchange("田中", "どうでしたか。", "Dō deshita ka.", "Thế nào?"),
        new DialogueExchange("ナム", "最初は大変でした。日本語があまり上手ではありませんでしたから。", "Saisho wa taihen deshita. Nihongo ga amari jōzu dewa arimasendeshita kara.", "Ban đầu rất khó khăn. Vì tiếng Nhật của tôi không giỏi lắm."),
        new DialogueExchange("田中", "どこの大学に通いましたか。", "Doko no daigaku ni kayoimashita ka.", "Bạn đã học ở trường đại học nào?"),
        new DialogueExchange("ナム", "東京大学でした。留学生として日本語と日本文化を勉強しました。", "Tōkyō daigaku deshita. Ryūgakusei to shite Nihongo to Nihon bunka wo benkyō shimashita.", "Đại học Tokyo. Tôi đã học tiếng Nhật và văn hóa Nhật Bản với tư cách là sinh viên trao đổi."),
        new DialogueExchange("田中", "友達はできましたか。", "Tomodachi wa dekimashita ka.", "Bạn có kết bạn được không?"),
        new DialogueExchange("ナム", "はい、たくさんできました。今でも連絡を取っています。", "Hai, takusan dekimashita. Ima demo renraku wo totte imasu.", "Vâng, tôi đã kết bạn với nhiều người. Ngay cả bây giờ tôi vẫn giữ liên lạc với họ.")
      ],
      "Tình huống nói về kinh nghiệm du học. Chú ý cách sử dụng '〜たことがあります' để diễn đạt kinh nghiệm đã từng làm gì đó."
    ),
    new Dialogue(
      "Kể về thời thơ ấu",
      [
        new DialogueExchange("鈴木 (Suzuki)", "ハイさん、子供の頃はどこに住んでいましたか。", "Hai-san, kodomo no koro wa doko ni sunde imashita ka.", "Hải, khi còn nhỏ bạn đã sống ở đâu?"),
        new DialogueExchange("ハイ (Hai)", "ホーチミン市に住んでいました。とても賑やかな街でした。", "Hōchimin-shi ni sunde imashita. Totemo nigiyaka na machi deshita.", "Tôi đã sống ở thành phố Hồ Chí Minh. Đó là một thành phố rất nhộn nhịp."),
        new DialogueExchange("鈴木", "子供の頃、何が好きでしたか。", "Kodomo no koro, nani ga suki deshita ka.", "Khi còn nhỏ, bạn thích gì?"),
        new DialogueExchange("ハイ", "サッカーが大好きでした。毎日、友達と一緒に公園でサッカーをしていました。", "Sakkā ga daisuki deshita. Mainichi, tomodachi to issho ni kōen de sakkā wo shite imashita.", "Tôi rất thích bóng đá. Mỗi ngày tôi đều chơi bóng đá ở công viên cùng với bạn bè."),
        new DialogueExchange("鈴木", "学校は好きでしたか。", "Gakkō wa suki deshita ka.", "Bạn có thích trường học không?"),
        new DialogueExchange("ハイ", "はい、好きでした。特に算数が得意でした。でも、体育は苦手でした。", "Hai, suki deshita. Tokuni sansū ga tokui deshita. Demo, taiiku wa nigate deshita.", "Vâng, tôi đã thích. Đặc biệt tôi giỏi toán. Nhưng tôi không giỏi thể dục."),
        new DialogueExchange("鈴木", "将来の夢は何でしたか。", "Shōrai no yume wa nan deshita ka.", "Ước mơ tương lai của bạn là gì?"),
        new DialogueExchange("ハイ", "医者になりたかったです。でも、今はエンジニアです。", "Isha ni naritakatta desu. Demo, ima wa enjinia desu.", "Tôi đã muốn trở thành bác sĩ. Nhưng bây giờ tôi là kỹ sư.")
      ],
      "Tình huống kể về thời thơ ấu. Chú ý cách sử dụng '〜ていました' để diễn đạt hành động thường xuyên trong quá khứ và '〜たかったです' để diễn đạt mong muốn trong quá khứ."
    )
  ],
  
  exercises: [
    new Exercise(
      "multiple-choice",
      "「昨日、映画を見ました」はどういう意味ですか。",
      ["Hôm qua tôi đã xem phim.", "Hôm nay tôi sẽ xem phim.", "Hôm qua tôi đã không xem phim.", "Hôm nay tôi đang xem phim."],
      "Hôm qua tôi đã xem phim.",
      "Câu này sử dụng thì quá khứ của động từ để diễn đạt hành động đã xảy ra trong quá khứ."
    ),
    new Exercise(
      "fill-in-blank",
      "「子供の頃、よく公園で___」と言いたい場合、「___」に入る言葉は何ですか。", 
      ["遊びました", "遊びます", "遊んでいました"],
      "遊びました",
      "Điền từ thích hợp để hoàn thành câu 'Khi còn nhỏ, tôi thường chơi ở công viên'."
    ),
    new Exercise(
      "matching",
      "Nối các động từ với dạng quá khứ tương ứng",
      [
        { japanese: "行く", english: "行きました" },
        { japanese: "食べる", english: "食べました" },
        { japanese: "する", english: "しました" },
        { japanese: "来る", english: "来ました" }
      ],
      "",
      "Hãy nối các động từ dạng từ điển với dạng quá khứ tương ứng."
    ),
    new Exercise(
      "role-play",
      "Hãy đóng vai một người đang kể về chuyến du lịch đã qua. Bao gồm: bạn đã đi đâu, khi nào, với ai, đã làm gì và cảm nhận của bạn về chuyến đi.",
      [],
      "",
      "Sử dụng các mẫu câu như '〜に行きました' (Tôi đã đi đến ~), '〜を見ました' (Tôi đã xem ~), và '〜でした' (~ đã là)."
    )
  ],
  
  culturalNotes: [
    new LessonSection(
      "Cách người Nhật kể về quá khứ",
      ["Khi kể về quá khứ, người Nhật thường có xu hướng khiêm tốn và không khoe khoang về thành tích cá nhân. Họ thường dùng các biểu hiện như 'おかげさまで' (okage-sama de - nhờ ơn bạn/mọi người) để thể hiện sự biết ơn đối với những người đã giúp đỡ họ trong quá khứ. Ngoài ra, người Nhật cũng thường sử dụng các biểu hiện như '〜と思います' (~to omoimasu - tôi nghĩ rằng) hoặc '〜かもしれません' (~kamoshiremasen - có thể là) để làm giảm tính khẳng định khi nói về thành tích hoặc kinh nghiệm cá nhân. Điều này phản ánh văn hóa khiêm tốn của người Nhật, nơi việc tự đề cao bản thân không được đánh giá cao."],
      []
    ),
    new LessonSection(
      "Hoài niệm trong văn hóa Nhật Bản",
      ["Văn hóa Nhật Bản có một khái niệm đặc biệt về hoài niệm, được gọi là '懐かしさ' (natsukashisa). Đây là cảm giác nhớ nhung, hoài niệm về quá khứ, thường đi kèm với cảm xúc ấm áp và nhẹ nhàng. Người Nhật thường sử dụng từ '懐かしい' (natsukashii - hoài niệm) khi họ gặp lại một người bạn cũ, thưởng thức một món ăn từ thời thơ ấu, hoặc nghe một bài hát quen thuộc từ quá khứ. Khái niệm này phản ánh sự trân trọng của người Nhật đối với những kỷ niệm và trải nghiệm đã qua. Trong văn hóa Nhật, việc nhớ về quá khứ không chỉ là hành động hồi tưởng đơn thuần mà còn là một cách để kết nối với bản sắc cá nhân và tập thể."],
      []
    )
  ],
  
  additionalResources: [
    {
      title: "Từ vựng mở rộng về các biểu hiện thời gian trong tiếng Nhật",
      url: "https://example.com/japanese-time-expressions"
    },
    {
      title: "Cách kể chuyện hiệu quả trong tiếng Nhật",
      url: "https://example.com/japanese-storytelling"
    },
    {
      title: "Các dạng quá khứ đặc biệt trong tiếng Nhật",
      url: "https://example.com/japanese-past-tense-forms"
    }
  ]
});

export default lesson18; 