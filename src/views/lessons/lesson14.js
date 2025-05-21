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

const lesson14 = new Lesson({
  id: 14,
  title: "Nói về gia đình và công việc",
  description: "Học cách nói về gia đình và công việc bằng tiếng Nhật. Bài học này giúp bạn mô tả thành viên gia đình, nghề nghiệp và chia sẻ thông tin cá nhân.",
  
  objectives: [
    "Học từ vựng về thành viên gia đình và mối quan hệ",
    "Nắm vững từ vựng liên quan đến nghề nghiệp và nơi làm việc",
    "Hiểu cách sử dụng các cấu trúc câu để giới thiệu và mô tả gia đình",
    "Phát triển khả năng nói về công việc và trách nhiệm",
    "Học cách hỏi thăm về gia đình và công việc của người khác một cách lịch sự"
  ],
  
  introduction: [
    new LessonSection(
      "Giới thiệu", 
      ["Nói về gia đình và công việc là một phần quan trọng trong giao tiếp hàng ngày, đặc biệt khi gặp gỡ người mới hoặc xây dựng mối quan hệ. Trong văn hóa Nhật Bản, việc trao đổi thông tin về gia đình và nghề nghiệp thường diễn ra trong các cuộc trò chuyện xã giao, mặc dù có thể ít chi tiết hơn so với một số nền văn hóa khác. Trong bài học này, bạn sẽ học cách nói về cấu trúc gia đình, mối quan hệ, và chia sẻ thông tin về công việc của mình bằng tiếng Nhật."],
      []
    )
  ],
  
  vocabulary: [
    // Từ vựng về gia đình
    new VocabularyItem("家族", "Kazoku", "Gia đình", "Danh từ"),
    new VocabularyItem("両親", "Ryōshin", "Bố mẹ", "Danh từ"),
    new VocabularyItem("父", "Chichi", "Bố (của mình)", "Danh từ"),
    new VocabularyItem("母", "Haha", "Mẹ (của mình)", "Danh từ"),
    new VocabularyItem("お父さん", "Otōsan", "Bố (của người khác/xưng hô)", "Danh từ"),
    new VocabularyItem("お母さん", "Okāsan", "Mẹ (của người khác/xưng hô)", "Danh từ"),
    new VocabularyItem("兄", "Ani", "Anh trai (của mình)", "Danh từ"),
    new VocabularyItem("姉", "Ane", "Chị gái (của mình)", "Danh từ"),
    new VocabularyItem("弟", "Otōto", "Em trai (của mình)", "Danh từ"),
    new VocabularyItem("妹", "Imōto", "Em gái (của mình)", "Danh từ"),
    new VocabularyItem("お兄さん", "Onīsan", "Anh trai (của người khác/xưng hô)", "Danh từ"),
    new VocabularyItem("お姉さん", "Onēsan", "Chị gái (của người khác/xưng hô)", "Danh từ"),
    new VocabularyItem("夫", "Otto", "Chồng", "Danh từ"),
    new VocabularyItem("妻", "Tsuma", "Vợ", "Danh từ"),
    new VocabularyItem("子供", "Kodomo", "Con cái", "Danh từ"),
    new VocabularyItem("息子", "Musuko", "Con trai", "Danh từ"),
    new VocabularyItem("娘", "Musume", "Con gái", "Danh từ"),
    new VocabularyItem("祖父", "Sofu", "Ông (của mình)", "Danh từ"),
    new VocabularyItem("祖母", "Sobo", "Bà (của mình)", "Danh từ"),
    new VocabularyItem("おじいさん", "Ojīsan", "Ông (của người khác/xưng hô)", "Danh từ"),
    new VocabularyItem("おばあさん", "Obāsan", "Bà (của người khác/xưng hô)", "Danh từ"),

    // Từ vựng về công việc
    new VocabularyItem("仕事", "Shigoto", "Công việc", "Danh từ"),
    new VocabularyItem("職業", "Shokugyō", "Nghề nghiệp", "Danh từ"),
    new VocabularyItem("会社", "Kaisha", "Công ty", "Danh từ"),
    new VocabularyItem("会社員", "Kaishain", "Nhân viên công ty", "Danh từ"),
    new VocabularyItem("社員", "Shain", "Nhân viên", "Danh từ"),
    new VocabularyItem("上司", "Jōshi", "Cấp trên", "Danh từ"),
    new VocabularyItem("同僚", "Dōryō", "Đồng nghiệp", "Danh từ"),
    new VocabularyItem("部長", "Buchō", "Trưởng phòng", "Danh từ"),
    new VocabularyItem("課長", "Kachō", "Trưởng bộ phận", "Danh từ"),
    new VocabularyItem("営業部", "Eigyōbu", "Phòng kinh doanh", "Danh từ"),
    new VocabularyItem("経理部", "Keiribu", "Phòng kế toán", "Danh từ"),
    new VocabularyItem("先生", "Sensei", "Giáo viên, bác sĩ, luật sư", "Danh từ"),
    new VocabularyItem("医者", "Isha", "Bác sĩ", "Danh từ"),
    new VocabularyItem("看護師", "Kangoshi", "Y tá", "Danh từ"),
    new VocabularyItem("弁護士", "Bengoshi", "Luật sư", "Danh từ"),
    new VocabularyItem("エンジニア", "Enjinia", "Kỹ sư", "Danh từ"),
    new VocabularyItem("公務員", "Kōmuin", "Công chức", "Danh từ"),
    new VocabularyItem("学生", "Gakusei", "Học sinh, sinh viên", "Danh từ"),
    new VocabularyItem("働く", "Hataraku", "Làm việc", "Động từ nhóm 1"),
    new VocabularyItem("残業する", "Zangyō suru", "Làm thêm giờ", "Động từ nhóm 3"),
    new VocabularyItem("忙しい", "Isogashii", "Bận rộn", "Tính từ -i")
  ],
  
  grammar: [
    new GrammarPoint(
      "〜は〜です (Cấu trúc giới thiệu cơ bản)",
      "Cấu trúc cơ bản để giới thiệu và cung cấp thông tin. '〜は' (~wa) là trợ từ chỉ chủ đề, '〜です' (~desu) là 'là'.",
      [
        new Example("私の父は医者です。", "Watashi no chichi wa isha desu.", "Bố tôi là bác sĩ."),
        new Example("姉は先生です。", "Ane wa sensei desu.", "Chị tôi là giáo viên.")
      ]
    ),
    new GrammarPoint(
      "〜が〜います / 〜が〜あります",
      "Cấu trúc diễn đạt sự tồn tại của người/vật. '〜が' (~ga) là trợ từ chỉ chủ ngữ, 'います' (imasu) dùng cho sinh vật, 'あります' (arimasu) dùng cho đồ vật.",
      [
        new Example("私には弟が一人と妹が一人います。", "Watashi ni wa otōto ga hitori to imōto ga hitori imasu.", "Tôi có một em trai và một em gái."),
        new Example("会社は駅の近くにあります。", "Kaisha wa eki no chikaku ni arimasu.", "Công ty ở gần ga.")
      ]
    ),
    new GrammarPoint(
      "〜をしています (Cấu trúc nói về nghề nghiệp)",
      "Cấu trúc diễn đạt công việc đang làm. '〜を' (~wo) là trợ từ chỉ đối tượng, 'しています' (shite imasu) là 'đang làm'.",
      [
        new Example("私は営業の仕事をしています。", "Watashi wa eigyō no shigoto wo shite imasu.", "Tôi đang làm công việc kinh doanh."),
        new Example("彼は研究をしています。", "Kare wa kenkyū wo shite imasu.", "Anh ấy đang làm nghiên cứu.")
      ]
    ),
    new GrammarPoint(
      "〜で働いています (Cấu trúc nói về nơi làm việc)",
      "Cấu trúc diễn đạt nơi làm việc. '〜で' (~de) là trợ từ chỉ nơi chốn, '働いています' (hataraite imasu) là 'đang làm việc'.",
      [
        new Example("私は大学で働いています。", "Watashi wa daigaku de hataraite imasu.", "Tôi đang làm việc ở trường đại học."),
        new Example("姉は病院で働いています。", "Ane wa byōin de hataraite imasu.", "Chị tôi đang làm việc ở bệnh viện.")
      ]
    ),
    new GrammarPoint(
      "〜んですか / 〜のですか (Cấu trúc hỏi thêm thông tin)",
      "Cấu trúc dùng để hỏi thêm về lý do hoặc chi tiết. '〜んですか' (~n desu ka) là dạng nói tắt của '〜のですか' (~no desu ka).",
      [
        new Example("お子さんは何人いるんですか。", "O-ko-san wa nan-nin iru n desu ka.", "Bạn có mấy người con?"),
        new Example("どんな仕事をしているんですか。", "Donna shigoto wo shite iru n desu ka.", "Bạn đang làm công việc gì vậy?")
      ]
    )
  ],
  
  dialogues: [
    new Dialogue(
      "Trò chuyện về gia đình",
      [
        new DialogueExchange("鈴木 (Suzuki)", "リンさん、ご家族について教えてください。", "Rin-san, go-kazoku ni tsuite oshiete kudasai.", "Linh, hãy cho tôi biết về gia đình bạn."),
        new DialogueExchange("リン (Linh)", "私の家族は5人です。両親と兄が二人います。", "Watashi no kazoku wa go-nin desu. Ryōshin to ani ga futari imasu.", "Gia đình tôi có 5 người. Gồm bố mẹ và hai anh trai."),
        new DialogueExchange("鈴木", "お兄さんはおいくつですか。", "O-nīsan wa oikutsu desu ka.", "Anh trai của bạn bao nhiêu tuổi?"),
        new DialogueExchange("リン", "上の兄は30歳で、下の兄は27歳です。私は25歳です。", "Ue no ani wa sanjussai de, shita no ani wa nijūnana-sai desu. Watashi wa nijūgo-sai desu.", "Anh cả 30 tuổi, anh thứ 27 tuổi. Tôi 25 tuổi."),
        new DialogueExchange("鈴木", "ご両親のお仕事は何ですか。", "Go-ryōshin no o-shigoto wa nan desu ka.", "Bố mẹ bạn làm nghề gì?"),
        new DialogueExchange("リン", "父は医者で、母は中学校の先生です。", "Chichi wa isha de, haha wa chūgakkō no sensei desu.", "Bố tôi là bác sĩ, mẹ tôi là giáo viên trung học cơ sở."),
        new DialogueExchange("鈴木", "そうですか。素晴らしいですね。お兄さんたちは何をしていますか。", "Sō desu ka. Subarashii desu ne. O-nīsan-tachi wa nani wo shite imasu ka.", "Thế à. Tuyệt vời nhỉ. Các anh trai của bạn làm gì?"),
        new DialogueExchange("リン", "上の兄はエンジニアで、下の兄は大学院生です。", "Ue no ani wa enjinia de, shita no ani wa daigakuin-sei desu.", "Anh cả tôi là kỹ sư, anh thứ là sinh viên cao học.")
      ],
      "Tình huống trao đổi thông tin về gia đình. Chú ý cách sử dụng từ xưng hô gia đình khác nhau khi nói về gia đình mình và khi nói về gia đình người khác."
    ),
    new Dialogue(
      "Nói về công việc",
      [
        new DialogueExchange("田中 (Tanaka)", "ナムさんは何の仕事をしていますか。", "Namu-san wa nan no shigoto wo shite imasu ka.", "Nam, bạn làm công việc gì?"),
        new DialogueExchange("ナム (Nam)", "私はIT会社でプログラマーをしています。", "Watashi wa AI-TĪ kaisha de puroguramā wo shite imasu.", "Tôi làm lập trình viên tại một công ty IT."),
        new DialogueExchange("田中", "そうですか。どのぐらい働いていますか。", "Sō desu ka. Dono gurai hataraite imasu ka.", "Vậy à. Bạn làm việc bao lâu rồi?"),
        new DialogueExchange("ナム", "この会社には3年間働いています。前はベトナムの会社で2年間働いていました。", "Kono kaisha ni wa sannenkan hataraite imasu. Mae wa Betonamu no kaisha de ninenkan hataraite imashita.", "Tôi đã làm việc tại công ty này được 3 năm. Trước đó tôi làm việc tại một công ty ở Việt Nam được 2 năm."),
        new DialogueExchange("田中", "毎日忙しいですか。", "Mainichi isogashii desu ka.", "Hàng ngày bạn có bận không?"),
        new DialogueExchange("ナム", "はい、けっこう忙しいです。よく残業をします。田中さんの仕事は何ですか。", "Hai, kekkō isogashii desu. Yoku zangyō wo shimasu. Tanaka-san no shigoto wa nan desu ka.", "Vâng, khá bận. Tôi thường xuyên làm thêm giờ. Công việc của Tanaka là gì?"),
        new DialogueExchange("田中", "私は銀行員です。融資部で働いています。", "Watashi wa ginkōin desu. Yūshi-bu de hataraite imasu.", "Tôi là nhân viên ngân hàng. Tôi làm việc tại phòng tín dụng."),
        new DialogueExchange("ナム", "それは大変ですね。どのぐらい働いていますか。", "Sore wa taihen desu ne. Dono gurai hataraite imasu ka.", "Việc đó vất vả nhỉ. Bạn làm việc bao lâu rồi?"),
        new DialogueExchange("田中", "もう10年になります。結構長いですね。", "Mō jūnen ni narimasu. Kekkō nagai desu ne.", "Đã được 10 năm rồi. Khá lâu nhỉ.")
      ],
      "Tình huống trao đổi thông tin về công việc. Chú ý cách sử dụng 'wo shite imasu' (đang làm) khi nói về nghề nghiệp và 'de hataraite imasu' (đang làm việc tại) khi nói về nơi làm việc."
    )
  ],
  
  exercises: [
    new Exercise(
      "multiple-choice",
      "自分の母親について話すとき、何と言いますか。",
      ["母は先生です。", "お母さんは先生です。", "先生の母です。", "母親を言います。"],
      "母は先生です。",
      "Khi nói về mẹ của mình, bạn nên dùng 'haha' (母) thay vì 'okāsan' (お母さん)."
    ),
    new Exercise(
      "fill-in-blank",
      "「私は会社___働いています」と言いたい場合、「___」に入る助詞は何ですか。", 
      ["で", "に", "を"],
      "で",
      "Điền trợ từ thích hợp để hoàn thành câu 'Tôi làm việc ___ công ty'."
    ),
    new Exercise(
      "matching",
      "Nối các từ chỉ thành viên gia đình với nghĩa tương ứng",
      [
        { japanese: "兄", english: "Anh trai (của mình)" },
        { japanese: "お兄さん", english: "Anh trai (của người khác)" },
        { japanese: "妹", english: "Em gái (của mình)" },
        { japanese: "お父さん", english: "Bố (của người khác)" }
      ],
      "",
      "Hãy nối các từ chỉ thành viên gia đình trong tiếng Nhật với nghĩa tiếng Việt tương ứng."
    ),
    new Exercise(
      "speaking",
      "Hãy tự giới thiệu bản thân, bao gồm thông tin về gia đình và công việc của bạn.",
      [],
      "",
      "Sử dụng các mẫu câu như 'Watashi no kazoku wa ~ desu' (Gia đình tôi là ~), 'Watashi wa ~ no shigoto wo shite imasu' (Tôi làm công việc ~), và 'Watashi wa ~ de hataraite imasu' (Tôi làm việc tại ~)."
    )
  ],
  
  culturalNotes: [
    new LessonSection(
      "Sự khác biệt trong từ ngữ gia đình trong tiếng Nhật",
      ["Một trong những đặc điểm độc đáo của tiếng Nhật là sự phân biệt giữa từ ngữ dùng để chỉ thành viên gia đình của mình và gia đình người khác. Khi nói về gia đình mình, người Nhật thường dùng các từ như 'chichi' (父 - bố), 'haha' (母 - mẹ), 'ani' (兄 - anh trai), 'ane' (姉 - chị gái). Ngược lại, khi nói về gia đình người khác hoặc khi xưng hô trực tiếp, họ dùng các từ kính ngữ như 'otōsan' (お父さん - bố), 'okāsan' (お母さん - mẹ), 'onīsan' (お兄さん - anh trai), 'onēsan' (お姉さん - chị gái). Điều này phản ánh nguyên tắc khiêm nhường trong văn hóa Nhật - hạ thấp vị trí của mình và gia đình mình, đồng thời nâng cao vị trí của người khác và gia đình họ."],
      []
    ),
    new LessonSection(
      "Văn hóa công việc ở Nhật Bản",
      ["Văn hóa công việc ở Nhật Bản có những đặc điểm riêng biệt. Người Nhật nổi tiếng với sự tận tụy và làm việc chăm chỉ, đôi khi dẫn đến hiện tượng 'karōshi' (過労死) - tử vong do làm việc quá sức. Hệ thống việc làm truyền thống ở Nhật Bản thường đề cao việc làm việc suốt đời tại một công ty, mặc dù xu hướng này đang dần thay đổi trong thế hệ trẻ. Cấu trúc công ty Nhật thường theo hệ thống thâm niên, nghĩa là sự thăng tiến và mức lương phụ thuộc nhiều vào thời gian làm việc tại công ty. Các mối quan hệ trong công việc cũng rất quan trọng, với việc tham gia 'nomikai' (飲み会) - tiệc uống sau giờ làm - được xem là cách để xây dựng mối quan hệ với đồng nghiệp."],
      []
    )
  ],
  
  additionalResources: [
    {
      title: "Từ vựng mở rộng về gia đình và quan hệ họ hàng",
      url: "https://example.com/japanese-family-vocabulary"
    },
    {
      title: "Danh sách nghề nghiệp và vị trí công việc trong tiếng Nhật",
      url: "https://example.com/japanese-job-titles"
    },
    {
      title: "Cách sử dụng kính ngữ trong môi trường làm việc Nhật Bản",
      url: "https://example.com/japanese-workplace-keigo"
    }
  ]
});

export default lesson14; 