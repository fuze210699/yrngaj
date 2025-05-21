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

const lesson3 = new Lesson({
  id: 3,
  title: "Thời gian và lịch trình",
  description: "Học cách diễn đạt thời gian, ngày tháng và lập lịch trình trong tiếng Nhật. Bài học này giúp bạn học cách nói giờ, ngày tháng, lịch trình hàng ngày và hẹn gặp.",
  
  objectives: [
    "Biết cách hỏi và nói giờ trong tiếng Nhật",
    "Hiểu cách diễn đạt ngày, tháng và năm",
    "Học cách nói về lịch trình hàng ngày",
    "Biết cách hẹn gặp và thảo luận về thời gian"
  ],
  
  introduction: [
    new LessonSection(
      "Giới thiệu", 
      ["Trong bài học này, chúng ta sẽ học cách diễn đạt thời gian trong tiếng Nhật. Hiểu biết về cách nói giờ, ngày tháng và lập lịch trình là kỹ năng cơ bản quan trọng khi giao tiếp trong cuộc sống hàng ngày. Tiếng Nhật có cách đặc biệt để diễn đạt thời gian, với nhiều từ vựng và cấu trúc ngữ pháp riêng."],
      []
    )
  ],
  
  vocabulary: [
    new VocabularyItem("時間", "Jikan", "Thời gian", "Danh từ"),
    new VocabularyItem("〜時", "~ji", "~giờ", "Danh từ"),
    new VocabularyItem("〜分", "~fun/~pun", "~phút", "Danh từ"),
    new VocabularyItem("午前", "Gozen", "Sáng (AM)", "Danh từ"),
    new VocabularyItem("午後", "Gogo", "Chiều (PM)", "Danh từ"),
    new VocabularyItem("今", "Ima", "Bây giờ", "Danh từ"),
    new VocabularyItem("年", "Nen/Toshi", "Năm", "Danh từ"),
    new VocabularyItem("月", "Getsu/Tsuki", "Tháng", "Danh từ"),
    new VocabularyItem("日", "Nichi/Hi", "Ngày", "Danh từ"),
    new VocabularyItem("曜日", "Youbi", "Ngày trong tuần", "Danh từ"),
    new VocabularyItem("月曜日", "Getsuyoubi", "Thứ hai", "Danh từ"),
    new VocabularyItem("火曜日", "Kayoubi", "Thứ ba", "Danh từ"),
    new VocabularyItem("水曜日", "Suiyoubi", "Thứ tư", "Danh từ"),
    new VocabularyItem("木曜日", "Mokuyoubi", "Thứ năm", "Danh từ"),
    new VocabularyItem("金曜日", "Kinyoubi", "Thứ sáu", "Danh từ"),
    new VocabularyItem("土曜日", "Doyoubi", "Thứ bảy", "Danh từ"),
    new VocabularyItem("日曜日", "Nichiyoubi", "Chủ nhật", "Danh từ"),
    new VocabularyItem("昨日", "Kinou", "Hôm qua", "Danh từ"),
    new VocabularyItem("今日", "Kyou", "Hôm nay", "Danh từ"),
    new VocabularyItem("明日", "Ashita", "Ngày mai", "Danh từ"),
    new VocabularyItem("先週", "Senshuu", "Tuần trước", "Danh từ"),
    new VocabularyItem("今週", "Konshuu", "Tuần này", "Danh từ"),
    new VocabularyItem("来週", "Raishuu", "Tuần sau", "Danh từ"),
    new VocabularyItem("いつ", "Itsu", "Khi nào", "Đại từ nghi vấn"),
    new VocabularyItem("予定", "Yotei", "Lịch trình", "Danh từ"),
    new VocabularyItem("約束", "Yakusoku", "Cuộc hẹn", "Danh từ"),
    new VocabularyItem("〜から", "~kara", "Từ...", "Trợ từ"),
    new VocabularyItem("〜まで", "~made", "Đến...", "Trợ từ")
  ],
  
  grammar: [
    new GrammarPoint(
      "今、何時ですか。",
      "Cách hỏi giờ hiện tại. '今' (ima) có nghĩa là 'bây giờ', '何時' (nanji) là 'mấy giờ', và 'ですか' (desuka) là trợ từ nghi vấn.",
      [
        new Example("今、何時ですか。", "Ima, nanji desuka.", "Bây giờ là mấy giờ?"),
        new Example("9時です。", "Kuji desu.", "Bây giờ là 9 giờ.")
      ]
    ),
    new GrammarPoint(
      "午前/午後〜時〜分です。",
      "Cách nói giờ đầy đủ. '午前' (gozen) là 'sáng', '午後' (gogo) là 'chiều', '〜時' (~ji) là 'giờ', và '〜分' (~fun/~pun) là 'phút'.",
      [
        new Example("午前10時30分です。", "Gozen juuji sanjuppun desu.", "Là 10:30 sáng."),
        new Example("午後3時15分です。", "Gogo sanji juugofun desu.", "Là 3:15 chiều.")
      ]
    ),
    new GrammarPoint(
      "〜曜日に〜",
      "Cấu trúc khi nói về một sự kiện diễn ra vào một ngày cụ thể trong tuần. '〜曜日' (~youbi) là 'ngày trong tuần', và 'に' (ni) là trợ từ chỉ thời gian.",
      [
        new Example("月曜日に日本語のクラスがあります。", "Getsuyoubi ni nihongo no kurasu ga arimasu.", "Có lớp tiếng Nhật vào thứ Hai."),
        new Example("土曜日に映画を見ます。", "Doyoubi ni eiga wo mimasu.", "Tôi xem phim vào thứ Bảy.")
      ]
    ),
    new GrammarPoint(
      "〜月〜日に〜",
      "Cấu trúc khi nói về một sự kiện diễn ra vào một ngày cụ thể trong tháng. '〜月' (~gatsu) là 'tháng', '〜日' (~nichi) là 'ngày'.",
      [
        new Example("10月1日に日本に行きます。", "Juugatsu tsuitachi ni Nihon ni ikimasu.", "Tôi sẽ đi Nhật vào ngày 1 tháng 10."),
        new Example("3月3日は日本のひな祭りです。", "Sangatsu mikka wa Nihon no Hinamatsuri desu.", "Ngày 3 tháng 3 là Lễ hội Búp bê Nhật Bản.")
      ]
    ),
    new GrammarPoint(
      "〜から〜まで",
      "Cấu trúc diễn tả khoảng thời gian từ... đến... '〜から' (~kara) có nghĩa là 'từ', và '〜まで' (~made) có nghĩa là 'đến'.",
      [
        new Example("9時から5時まで働きます。", "Kuji kara goji made hatarakimasu.", "Tôi làm việc từ 9 giờ đến 5 giờ."),
        new Example("月曜日から金曜日まで学校に行きます。", "Getsuyoubi kara kinyoubi made gakkou ni ikimasu.", "Tôi đi học từ thứ Hai đến thứ Sáu.")
      ]
    )
  ],
  
  dialogues: [
    new Dialogue(
      "Hỏi giờ",
      [
        new DialogueExchange("マイ (Mai)", "すみません、今、何時ですか。", "Sumimasen, ima, nanji desuka.", "Xin lỗi, bây giờ là mấy giờ?"),
        new DialogueExchange("鈴木 (Suzuki)", "今、午後3時15分です。", "Ima, gogo sanji juugofun desu.", "Bây giờ là 3:15 chiều."),
        new DialogueExchange("マイ", "ありがとうございます。3時半に友達と会う約束があります。", "Arigatou gozaimasu. Sanji han ni tomodachi to au yakusoku ga arimasu.", "Cảm ơn. Tôi có hẹn gặp bạn lúc 3:30."),
        new DialogueExchange("鈴木", "そうですか。まだ時間がありますね。", "Sou desuka. Mada jikan ga arimasu ne.", "Vậy à. Bạn vẫn còn thời gian nhỉ.")
      ],
      "Tình huống hỏi giờ và nói về cuộc hẹn. Chú ý cách sử dụng từ 'まだ' (mada) có nghĩa là 'vẫn còn'."
    ),
    new Dialogue(
      "Lập lịch trình",
      [
        new DialogueExchange("田中 (Tanaka)", "週末の予定はありますか。", "Shuumatsu no yotei wa arimasuka.", "Bạn có lịch trình cuối tuần không?"),
        new DialogueExchange("リン (Linh)", "はい、土曜日の午前中は日本語の勉強をします。午後は友達と買い物に行きます。", "Hai, doyoubi no gozenchuu wa nihongo no benkyou wo shimasu. Gogo wa tomodachi to kaimono ni ikimasu.", "Vâng, sáng thứ Bảy tôi học tiếng Nhật. Chiều tôi đi mua sắm với bạn."),
        new DialogueExchange("田中", "日曜日は何をしますか。", "Nichiyoubi wa nani wo shimasuka.", "Chủ nhật bạn làm gì?"),
        new DialogueExchange("リン", "日曜日は特に予定がありません。", "Nichiyoubi wa toku ni yotei ga arimasen.", "Chủ nhật tôi không có kế hoạch gì đặc biệt."),
        new DialogueExchange("田中", "じゃ、日曜日に一緒に映画を見ませんか。", "Ja, nichiyoubi ni issho ni eiga wo mimasenka.", "Vậy, chúng ta cùng xem phim vào Chủ nhật nhé?"),
        new DialogueExchange("リン", "いいですね。何時に会いますか。", "Ii desu ne. Nanji ni aimasuka.", "Hay quá. Mấy giờ chúng ta gặp nhau?"),
        new DialogueExchange("田中", "午後2時はどうですか。", "Gogo niji wa dou desuka.", "2 giờ chiều thế nào?"),
        new DialogueExchange("リン", "はい、大丈夫です。", "Hai, daijoubu desu.", "Vâng, được.")
      ],
      "Tình huống thảo luận về lịch trình cuối tuần và hẹn gặp. Chú ý cách mời ai đó làm việc gì đó bằng cách sử dụng '〜ませんか' (~masenka)."
    )
  ],
  
  exercises: [
    new Exercise(
      "multiple-choice",
      "Bây giờ là 3:45 chiều, trong tiếng Nhật bạn nói thế nào?",
      ["午後3時45分です。", "午前3時45分です。", "午後3時4分5秒です。", "午後45時3分です。"],
      "午後3時45分です。",
      "午後 (gogo) nghĩa là chiều, 3時 (sanji) là 3 giờ, 45分 (yonjuugofun) là 45 phút"
    ),
    new Exercise(
      "fill-in-blank",
      "日本語のクラスは＿＿＿＿曜日にあります。", 
      ["月", "水", "金"],
      "水",
      "Điền ngày trong tuần vào chỗ trống"
    ),
    new Exercise(
      "matching",
      "Nối các từ chỉ thời gian với nghĩa tương ứng",
      [
        { japanese: "今日", english: "Hôm nay" },
        { japanese: "明日", english: "Ngày mai" },
        { japanese: "昨日", english: "Hôm qua" },
        { japanese: "来週", english: "Tuần sau" }
      ],
      "",
      "Hãy nối các từ chỉ thời gian tiếng Nhật với nghĩa tiếng Việt tương ứng"
    ),
    new Exercise(
      "speaking",
      "Hãy nói về lịch trình một ngày của bạn, từ sáng đến tối, sử dụng các cụm từ chỉ thời gian và hoạt động hàng ngày.",
      [],
      "",
      "Sử dụng các cụm từ như: 午前7時に起きます (Thức dậy lúc 7 giờ sáng), 午後6時に晩ご飯を食べます (Ăn tối lúc 6 giờ chiều), v.v."
    )
  ],
  
  culturalNotes: [
    new LessonSection(
      "Đúng giờ trong văn hóa Nhật Bản",
      ["Người Nhật rất coi trọng việc đúng giờ. Đến muộn được xem là thiếu tôn trọng trong cả tình huống cá nhân lẫn công việc. Nếu bạn có cuộc hẹn vào lúc 3 giờ chiều với người Nhật, bạn nên đến sớm 5-10 phút. Trong văn hóa kinh doanh Nhật Bản, đúng giờ là cực kỳ quan trọng, và đến muộn có thể ảnh hưởng nghiêm trọng đến mối quan hệ chuyên nghiệp."],
      []
    ),
    new LessonSection(
      "Lịch Nhật Bản",
      ["Lịch truyền thống Nhật Bản (和暦 - wareki) sử dụng hệ thống niên hiệu dựa trên thời kỳ trị vì của Hoàng đế. Hiện nay, Nhật Bản đang ở thời kỳ Lệnh Hòa (令和 - Reiwa) bắt đầu từ năm 2019. Năm 2023 được gọi là Reiwa năm thứ 5 (令和5年 - Reiwa go-nen). Mặc dù lịch Gregorian cũng được sử dụng rộng rãi, nhiều tài liệu chính thức của Nhật Bản vẫn sử dụng cả hai hệ thống."],
      []
    )
  ],
  
  additionalResources: [
    {
      title: "Video: Cách nói giờ trong tiếng Nhật",
      url: "https://example.com/japanese-time-expressions-video"
    },
    {
      title: "Thẻ ghi nhớ ngày tháng trong tiếng Nhật",
      url: "https://example.com/japanese-date-flashcards"
    },
    {
      title: "Bài tập thêm về lịch trình hàng ngày",
      url: "https://example.com/japanese-schedule-exercises"
    }
  ]
});

export default lesson3; 