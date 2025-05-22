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

const lesson16 = new Lesson({
  id: 16,
  title: "Mô tả triệu chứng bệnh và hiểu hướng dẫn của bác sĩ",
  description: "Học cách mô tả các triệu chứng bệnh và hiểu hướng dẫn của bác sĩ bằng tiếng Nhật. Bài học này giúp bạn giao tiếp hiệu quả trong các tình huống y tế và chăm sóc sức khỏe.",
  
  objectives: [
    "Học từ vựng về các bộ phận cơ thể và triệu chứng bệnh thông thường",
    "Nắm vững cách mô tả cảm giác đau và khó chịu",
    "Hiểu các chỉ dẫn và hướng dẫn của bác sĩ",
    "Học cách hỏi về thuốc và cách sử dụng thuốc",
    "Phát triển khả năng giao tiếp trong các tình huống y tế khẩn cấp"
  ],
  
  introduction: [
    new LessonSection(
      "Giới thiệu", 
      ["Sức khỏe là một trong những vấn đề quan trọng nhất khi sống ở nước ngoài. Khả năng mô tả triệu chứng bệnh và hiểu hướng dẫn của bác sĩ bằng tiếng Nhật sẽ giúp bạn nhận được sự chăm sóc y tế phù hợp khi cần thiết. Trong bài học này, chúng ta sẽ học các từ vựng và cấu trúc câu cần thiết để giao tiếp hiệu quả trong các tình huống liên quan đến sức khỏe, từ việc đặt lịch hẹn khám bệnh đến việc hiểu hướng dẫn sử dụng thuốc."],
      []
    )
  ],
  
  vocabulary: [
    // Từ vựng về các bộ phận cơ thể
    new VocabularyItem("頭", "Atama", "Đầu", "Danh từ"),
    new VocabularyItem("目", "Me", "Mắt", "Danh từ"),
    new VocabularyItem("耳", "Mimi", "Tai", "Danh từ"),
    new VocabularyItem("鼻", "Hana", "Mũi", "Danh từ"),
    new VocabularyItem("口", "Kuchi", "Miệng", "Danh từ"),
    new VocabularyItem("のど", "Nodo", "Họng", "Danh từ"),
    new VocabularyItem("胸", "Mune", "Ngực", "Danh từ"),
    new VocabularyItem("背中", "Senaka", "Lưng", "Danh từ"),
    new VocabularyItem("お腹", "Onaka", "Bụng", "Danh từ"),
    new VocabularyItem("手", "Te", "Tay", "Danh từ"),
    new VocabularyItem("足", "Ashi", "Chân", "Danh từ"),
    
    // Từ vựng về triệu chứng và bệnh
    new VocabularyItem("熱", "Netsu", "Sốt", "Danh từ"),
    new VocabularyItem("頭痛", "Zutsū", "Đau đầu", "Danh từ"),
    new VocabularyItem("腹痛", "Fukutsū", "Đau bụng", "Danh từ"),
    new VocabularyItem("咳", "Seki", "Ho", "Danh từ"),
    new VocabularyItem("くしゃみ", "Kushami", "Hắt hơi", "Danh từ"),
    new VocabularyItem("鼻水", "Hanamizu", "Chảy nước mũi", "Danh từ"),
    new VocabularyItem("吐き気", "Hakike", "Buồn nôn", "Danh từ"),
    new VocabularyItem("めまい", "Memai", "Chóng mặt", "Danh từ"),
    new VocabularyItem("疲れ", "Tsukare", "Mệt mỏi", "Danh từ"),
    new VocabularyItem("かゆい", "Kayui", "Ngứa", "Tính từ -i"),
    new VocabularyItem("痛い", "Itai", "Đau", "Tính từ -i"),
    new VocabularyItem("風邪", "Kaze", "Cảm lạnh", "Danh từ"),
    new VocabularyItem("アレルギー", "Arerugī", "Dị ứng", "Danh từ"),
    
    // Từ vựng về y tế và thuốc
    new VocabularyItem("病院", "Byōin", "Bệnh viện", "Danh từ"),
    new VocabularyItem("医者", "Isha", "Bác sĩ", "Danh từ"),
    new VocabularyItem("看護師", "Kangoshi", "Y tá", "Danh từ"),
    new VocabularyItem("薬", "Kusuri", "Thuốc", "Danh từ"),
    new VocabularyItem("薬局", "Yakkyoku", "Hiệu thuốc", "Danh từ"),
    new VocabularyItem("処方箋", "Shohōsen", "Đơn thuốc", "Danh từ"),
    new VocabularyItem("診察", "Shinsatsu", "Khám bệnh", "Danh từ"),
    new VocabularyItem("検査", "Kensa", "Kiểm tra, xét nghiệm", "Danh từ"),
    new VocabularyItem("注射", "Chūsha", "Tiêm", "Danh từ"),
    new VocabularyItem("保険証", "Hokenshō", "Thẻ bảo hiểm", "Danh từ")
  ],
  
  grammar: [
    new GrammarPoint(
      "〜が痛いです (Cấu trúc diễn đạt đau đớn)",
      "Cấu trúc cơ bản để diễn đạt rằng một bộ phận cơ thể đang đau. '〜が' (~ga) là trợ từ chỉ chủ ngữ, '痛いです' (itai desu) là 'đau'.",
      [
        new Example("頭が痛いです。", "Atama ga itai desu.", "Tôi bị đau đầu."),
        new Example("のどが痛いです。", "Nodo ga itai desu.", "Tôi bị đau họng.")
      ]
    ),
    new GrammarPoint(
      "〜ています (Cấu trúc diễn đạt tình trạng hiện tại)",
      "Cấu trúc diễn đạt tình trạng đang diễn ra. '〜て' (~te) là dạng tiếp nối, 'います' (imasu) là 'đang'.",
      [
        new Example("熱が出ています。", "Netsu ga dete imasu.", "Tôi đang bị sốt."),
        new Example("咳が出ています。", "Seki ga dete imasu.", "Tôi đang bị ho.")
      ]
    ),
    new GrammarPoint(
      "〜から〜まで (Cấu trúc diễn đạt khoảng thời gian)",
      "Cấu trúc diễn đạt khoảng thời gian từ lúc nào đến lúc nào. '〜から' (~kara) là 'từ', '〜まで' (~made) là 'đến'.",
      [
        new Example("昨日から頭が痛いです。", "Kinō kara atama ga itai desu.", "Tôi bị đau đầu từ hôm qua."),
        new Example("朝から晩まで咳が出ています。", "Asa kara ban made seki ga dete imasu.", "Tôi bị ho từ sáng đến tối.")
      ]
    ),
    new GrammarPoint(
      "〜てください (Hình thức yêu cầu lịch sự)",
      "Cấu trúc lịch sự để đưa ra yêu cầu hoặc hướng dẫn. Thường được bác sĩ sử dụng khi đưa ra hướng dẫn.",
      [
        new Example("薬を一日三回飲んでください。", "Kusuri wo ichinichi sankai nonde kudasai.", "Vui lòng uống thuốc ba lần một ngày."),
        new Example("ここで待ってください。", "Koko de matte kudasai.", "Vui lòng đợi ở đây.")
      ]
    ),
    new GrammarPoint(
      "〜ないでください (Hình thức yêu cầu không làm gì)",
      "Cấu trúc lịch sự để yêu cầu không làm điều gì đó. Thường được bác sĩ sử dụng khi đưa ra lời khuyên.",
      [
        new Example("お酒を飲まないでください。", "Osake wo nomanaide kudasai.", "Vui lòng không uống rượu."),
        new Example("無理をしないでください。", "Muri wo shinaide kudasai.", "Vui lòng đừng cố gắng quá sức.")
      ]
    )
  ],
  
  dialogues: [
    new Dialogue(
      "Đến khám tại phòng khám",
      [
        new DialogueExchange("受付 (Lễ tân)", "こんにちは。どうしましたか。", "Konnichiwa. Dō shimashita ka.", "Xin chào. Bạn có vấn đề gì?"),
        new DialogueExchange("アン (An)", "昨日から頭が痛くて、熱もあります。", "Kinō kara atama ga itakute, netsu mo arimasu.", "Tôi bị đau đầu từ hôm qua và cũng bị sốt."),
        new DialogueExchange("受付", "保険証をお持ちですか。", "Hokenshō wo o-mochi desu ka.", "Bạn có mang theo thẻ bảo hiểm không?"),
        new DialogueExchange("アン", "はい、ここにあります。", "Hai, koko ni arimasu.", "Vâng, đây ạ."),
        new DialogueExchange("受付", "ありがとうございます。この用紙に名前と住所を書いてください。", "Arigatō gozaimasu. Kono yōshi ni namae to jūsho wo kaite kudasai.", "Cảm ơn bạn. Vui lòng viết tên và địa chỉ vào tờ giấy này."),
        new DialogueExchange("受付", "書き終わったら、待合室でお待ちください。", "Kaki owattara, machiaishitsu de o-machi kudasai.", "Khi viết xong, vui lòng đợi ở phòng chờ.")
      ],
      "Tình huống đăng ký khám tại phòng khám. Chú ý cách sử dụng 'どうしましたか' (Bạn có vấn đề gì?) - một câu hỏi phổ biến khi bạn đến khám bệnh."
    ),
    new Dialogue(
      "Khám bệnh với bác sĩ",
      [
        new DialogueExchange("医者 (Bác sĩ)", "どうぞ、こちらへ。どうしましたか。", "Dōzo, kochira e. Dō shimashita ka.", "Mời vào. Bạn có vấn đề gì?"),
        new DialogueExchange("アン", "昨日から頭が痛くて、熱もあります。それに、のども痛いです。", "Kinō kara atama ga itakute, netsu mo arimasu. Sore ni, nodo mo itai desu.", "Tôi bị đau đầu từ hôm qua và cũng bị sốt. Ngoài ra, tôi còn bị đau họng."),
        new DialogueExchange("医者", "そうですか。体温を測りましょう。", "Sō desu ka. Taion wo hakarimashou.", "Vậy à. Hãy đo nhiệt độ."),
        new DialogueExchange("医者", "38.5度ありますね。のどを見せてください。", "Sanjūhachi-ten-go do arimasu ne. Nodo wo misete kudasai.", "Bạn bị sốt 38.5 độ. Vui lòng cho tôi xem họng."),
        new DialogueExchange("医者", "のどが赤くなっています。風邪ですね。", "Nodo ga akaku natte imasu. Kaze desu ne.", "Họng bạn bị đỏ. Bạn bị cảm lạnh rồi."),
        new DialogueExchange("アン", "そうですか。どうすればいいですか。", "Sō desu ka. Dō sureba ii desu ka.", "Vậy ạ. Tôi nên làm gì?"),
        new DialogueExchange("医者", "薬を出しますので、一日三回、食後に飲んでください。", "Kusuri wo dashimasu node, ichinichi sankai, shokugo ni nonde kudasai.", "Tôi sẽ kê đơn thuốc, vui lòng uống ba lần một ngày, sau khi ăn."),
        new DialogueExchange("医者", "それから、たくさん休んで、水をたくさん飲んでください。", "Sorekara, takusan yasunde, mizu wo takusan nonde kudasai.", "Ngoài ra, hãy nghỉ ngơi nhiều và uống nhiều nước."),
        new DialogueExchange("アン", "わかりました。ありがとうございます。", "Wakarimashita. Arigatō gozaimasu.", "Tôi hiểu rồi. Cảm ơn bác sĩ.")
      ],
      "Tình huống khám bệnh với bác sĩ. Chú ý cách mô tả triệu chứng và cách bác sĩ đưa ra hướng dẫn sử dụng thuốc."
    ),
    new Dialogue(
      "Tại hiệu thuốc",
      [
        new DialogueExchange("アン", "すみません、この処方箋をお願いします。", "Sumimasen, kono shohōsen wo onegai shimasu.", "Xin lỗi, tôi muốn mua thuốc theo đơn này."),
        new DialogueExchange("薬剤師 (Dược sĩ)", "かしこまりました。少々お待ちください。", "Kashikomarimashita. Shōshō o-machi kudasai.", "Vâng. Vui lòng đợi một lát."),
        new DialogueExchange("薬剤師", "お待たせしました。こちらが薬です。", "O-matase shimashita. Kochira ga kusuri desu.", "Xin lỗi đã để bạn đợi. Đây là thuốc của bạn."),
        new DialogueExchange("薬剤師", "白い薬は熱と痛みを抑える薬です。一日三回、食後に飲んでください。", "Shiroi kusuri wa netsu to itami wo osaeru kusuri desu. Ichinichi sankai, shokugo ni nonde kudasai.", "Thuốc màu trắng là thuốc hạ sốt và giảm đau. Vui lòng uống ba lần một ngày, sau khi ăn."),
        new DialogueExchange("薬剤師", "黄色い薬は咳を抑える薬です。咳がひどい時に飲んでください。", "Kiiroi kusuri wa seki wo osaeru kusuri desu. Seki ga hidoi toki ni nonde kudasai.", "Thuốc màu vàng là thuốc trị ho. Vui lòng uống khi ho nặng."),
        new DialogueExchange("アン", "わかりました。薬は何日分ですか。", "Wakarimashita. Kusuri wa nan nichi bun desu ka.", "Tôi hiểu rồi. Thuốc này dùng cho mấy ngày?"),
        new DialogueExchange("薬剤師", "五日分です。お大事に。", "Go nichi bun desu. O-daiji ni.", "Đủ dùng cho năm ngày. Chúc bạn mau khỏe.")
      ],
      "Tình huống tại hiệu thuốc. Chú ý cách dược sĩ giải thích về thuốc và cách sử dụng."
    )
  ],
  
  exercises: [
    new Exercise(
      "multiple-choice",
      "「頭が痛いです」はどういう意味ですか。",
      ["Tôi bị đau đầu.", "Tôi bị đau bụng.", "Tôi bị sốt.", "Tôi bị ho."],
      "Tôi bị đau đầu.",
      "Câu này sử dụng cấu trúc '〜が痛いです' để diễn đạt đau đớn ở một bộ phận cơ thể."
    ),
    new Exercise(
      "fill-in-blank",
      "「薬を一日三回、食後に___ください」と言いたい場合、「___」に入る言葉は何ですか。", 
      ["飲んで", "飲まないで", "飲みて"],
      "飲んで",
      "Điền từ thích hợp để hoàn thành câu 'Vui lòng uống thuốc ba lần một ngày, sau khi ăn'."
    ),
    new Exercise(
      "matching",
      "Nối các triệu chứng với ý nghĩa tương ứng",
      [
        { japanese: "頭痛", english: "Đau đầu" },
        { japanese: "腹痛", english: "Đau bụng" },
        { japanese: "咳", english: "Ho" },
        { japanese: "めまい", english: "Chóng mặt" }
      ],
      "",
      "Hãy nối các triệu chứng tiếng Nhật với ý nghĩa tiếng Việt tương ứng."
    ),
    new Exercise(
      "role-play",
      "Hãy đóng vai một bệnh nhân đang mô tả triệu chứng của mình cho bác sĩ. Bao gồm các thông tin: bạn bị đau bụng từ hôm qua, bạn cũng bị buồn nôn và không thể ăn được.",
      [],
      "",
      "Sử dụng các mẫu câu như '〜が痛いです' (Tôi bị đau ~), '〜から〜です' (Từ ~ tôi bị ~), và '〜ができません' (Tôi không thể ~)."
    )
  ],
  
  culturalNotes: [
    new LessonSection(
      "Hệ thống y tế tại Nhật Bản",
      ["Hệ thống y tế Nhật Bản được đánh giá là một trong những hệ thống y tế tốt nhất thế giới. Nhật Bản có hệ thống bảo hiểm y tế toàn dân, nghĩa là tất cả người dân đều được yêu cầu tham gia một loại bảo hiểm y tế nào đó. Người nước ngoài sống tại Nhật Bản trên 3 tháng cũng phải đăng ký bảo hiểm y tế. Khi đi khám bệnh, bạn nên mang theo thẻ bảo hiểm (保険証 - hokenshō). Với thẻ này, bạn chỉ phải trả 30% chi phí y tế, 70% còn lại sẽ được bảo hiểm chi trả. Tại Nhật, bệnh nhân thường không cần hẹn trước khi đến khám tại các phòng khám nhỏ, nhưng với các bệnh viện lớn, việc đặt lịch hẹn trước là cần thiết."],
      []
    ),
    new LessonSection(
      "Văn hóa sử dụng khẩu trang tại Nhật Bản",
      ["Một điều đặc biệt trong văn hóa Nhật Bản là việc sử dụng khẩu trang (マスク - masuku) rất phổ biến, đặc biệt trong mùa cảm cúm hoặc khi bị ốm. Người Nhật đeo khẩu trang không chỉ để bảo vệ bản thân khỏi bệnh tật mà còn để ngăn không cho bệnh lây lan sang người khác khi họ bị ốm. Đây được xem là một hành động thể hiện sự quan tâm đến cộng đồng. Ngoài ra, khẩu trang còn được sử dụng để bảo vệ khỏi phấn hoa trong mùa xuân, khi nhiều người bị dị ứng phấn hoa (花粉症 - kafunshō). Vì vậy, nếu bạn bị ốm khi ở Nhật, việc đeo khẩu trang khi ra ngoài là một hành động được đánh giá cao."],
      []
    )
  ],
  
  additionalResources: [
    {
      title: "Từ vựng mở rộng về các bộ phận cơ thể và triệu chứng bệnh",
      url: "https://example.com/japanese-medical-vocabulary"
    },
    {
      title: "Hướng dẫn tìm kiếm dịch vụ y tế bằng tiếng Anh tại Nhật Bản",
      url: "https://example.com/english-medical-services-japan"
    },
    {
      title: "Các cụm từ hữu ích khi đi khám bệnh tại Nhật Bản",
      url: "https://example.com/useful-phrases-japanese-hospital"
    }
  ]
});

export default lesson16; 