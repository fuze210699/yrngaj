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

const lesson10 = new Lesson({
  id: 10,
  title: "Gửi thư và bưu phẩm qua bưu điện",
  description: "Học cách gửi thư, bưu thiếp và bưu phẩm tại bưu điện Nhật Bản. Bài học này giúp bạn hiểu các quy trình, từ vựng và biểu thức cần thiết khi sử dụng dịch vụ bưu điện ở Nhật.",
  
  objectives: [
    "Học từ vựng liên quan đến bưu điện và dịch vụ gửi hàng",
    "Hiểu cách điền các loại biểu mẫu bưu chính",
    "Nắm vững cách hỏi về các dịch vụ và giá cả khác nhau",
    "Học cách yêu cầu dịch vụ đặc biệt như gửi hàng nhanh hoặc bảo hiểm",
    "Hiểu các quy định cơ bản về gửi hàng quốc tế từ Nhật Bản"
  ],
  
  introduction: [
    new LessonSection(
      "Giới thiệu", 
      ["Bưu điện Nhật Bản (Japan Post hay 日本郵便 - Nihon Yūbin) cung cấp nhiều dịch vụ đa dạng, từ gửi thư, bưu thiếp đến gửi bưu phẩm trong nước và quốc tế. Ngoài ra, họ còn cung cấp dịch vụ ngân hàng và bảo hiểm. Trong bài học này, chúng ta sẽ tập trung vào cách sử dụng các dịch vụ bưu chính cơ bản, cách điền biểu mẫu, và các từ vựng quan trọng để giao tiếp hiệu quả tại bưu điện. Dù việc gửi hàng có thể khác nhau tùy theo từng quốc gia, nhưng các kiến thức này sẽ giúp bạn tự tin khi phải sử dụng dịch vụ bưu điện ở Nhật Bản."],
      []
    )
  ],
  
  vocabulary: [
    new VocabularyItem("郵便局", "Yūbinkyoku", "Bưu điện", "Danh từ"),
    new VocabularyItem("切手", "Kitte", "Tem", "Danh từ"),
    new VocabularyItem("はがき", "Hagaki", "Bưu thiếp", "Danh từ"),
    new VocabularyItem("封筒", "Fūtō", "Phong bì", "Danh từ"),
    new VocabularyItem("小包", "Kozutsumi", "Bưu kiện, gói hàng nhỏ", "Danh từ"),
    new VocabularyItem("荷物", "Nimotsu", "Hàng hóa, bưu phẩm", "Danh từ"),
    new VocabularyItem("宅配便", "Takuhaibin", "Dịch vụ chuyển phát nhanh", "Danh từ"),
    new VocabularyItem("速達", "Sokutatsu", "Thư chuyển phát nhanh", "Danh từ"),
    new VocabularyItem("書留", "Kakitome", "Thư bảo đảm", "Danh từ"),
    new VocabularyItem("国際郵便", "Kokusai yūbin", "Bưu điện quốc tế", "Danh từ"),
    new VocabularyItem("航空便", "Kōkūbin", "Thư gửi đường hàng không", "Danh từ"),
    new VocabularyItem("船便", "Funabin", "Thư gửi đường biển", "Danh từ"),
    new VocabularyItem("追跡番号", "Tsuiseki bangō", "Số theo dõi, mã bưu kiện", "Danh từ"),
    new VocabularyItem("送料", "Sōryō", "Phí gửi hàng", "Danh từ"),
    new VocabularyItem("宛先", "Atesaki", "Địa chỉ người nhận", "Danh từ"),
    new VocabularyItem("差出人", "Sashidashinin", "Người gửi", "Danh từ"),
    new VocabularyItem("受取人", "Uketorinin", "Người nhận", "Danh từ"),
    new VocabularyItem("郵便番号", "Yūbin bangō", "Mã bưu điện", "Danh từ"),
    new VocabularyItem("住所", "Jūsho", "Địa chỉ", "Danh từ"),
    new VocabularyItem("氏名", "Shimei", "Họ tên", "Danh từ"),
    new VocabularyItem("内容品", "Naiyōhin", "Nội dung, vật phẩm bên trong", "Danh từ"),
    new VocabularyItem("申込書", "Mōshikomisho", "Đơn đăng ký", "Danh từ"),
    new VocabularyItem("配達", "Haitatsu", "Giao hàng, phát thư", "Danh từ"),
    new VocabularyItem("送る", "Okuru", "Gửi", "Động từ nhóm 1"),
    new VocabularyItem("出す", "Dasu", "Gửi, đưa ra", "Động từ nhóm 1"),
    new VocabularyItem("届く", "Todoku", "Đến, được gửi đến", "Động từ nhóm 1"),
    new VocabularyItem("重さを量る", "Omosa wo hakaru", "Cân trọng lượng", "Biểu thức"),
    new VocabularyItem("記入する", "Kinyū suru", "Điền vào", "Động từ nhóm 3"),
    new VocabularyItem("貼る", "Haru", "Dán", "Động từ nhóm 1"),
    new VocabularyItem("包む", "Tsutsumu", "Gói, bọc", "Động từ nhóm 1")
  ],
  
  grammar: [
    new GrammarPoint(
      "〜を送りたいです",
      "Cấu trúc diễn đạt mong muốn gửi cái gì đó. '〜を' (~wo) là trợ từ chỉ đối tượng, '送りたいです' (okuritai desu) là 'muốn gửi'.",
      [
        new Example("この小包をアメリカに送りたいです。", "Kono kozutsumi wo Amerika ni okuritai desu.", "Tôi muốn gửi gói hàng này đến Mỹ."),
        new Example("友達に手紙を送りたいです。", "Tomodachi ni tegami wo okuritai desu.", "Tôi muốn gửi thư cho bạn.")
      ]
    ),
    new GrammarPoint(
      "どのぐらいかかりますか",
      "Cấu trúc để hỏi về thời gian hoặc chi phí. 'どのぐらい' (dono gurai) là 'bao nhiêu', 'かかります' (kakarimasu) là 'tốn, mất'.",
      [
        new Example("日本からベトナムまで、どのぐらいかかりますか。", "Nihon kara Betonamu made, dono gurai kakarimasu ka.", "Từ Nhật Bản đến Việt Nam mất bao lâu?"),
        new Example("この荷物を送るのに、どのぐらいかかりますか。", "Kono nimotsu wo okuru noni, dono gurai kakarimasu ka.", "Gửi hàng hóa này tốn bao nhiêu?")
      ]
    ),
    new GrammarPoint(
      "〜方法を教えてください",
      "Cấu trúc để hỏi về cách thức làm gì đó. '〜方法' (~hōhō) là 'cách thức', 'を' (wo) là trợ từ chỉ đối tượng, '教えてください' (oshiete kudasai) là 'xin hãy chỉ cho tôi'.",
      [
        new Example("国際郵便の送り方を教えてください。", "Kokusai yūbin no okuri-kata wo oshiete kudasai.", "Xin hãy chỉ cho tôi cách gửi thư quốc tế."),
        new Example("申込書の書き方を教えてください。", "Mōshikomisho no kaki-kata wo oshiete kudasai.", "Xin hãy chỉ cho tôi cách điền đơn.")
      ]
    ),
    new GrammarPoint(
      "〜なければなりません",
      "Cấu trúc diễn đạt sự bắt buộc phải làm gì đó. '〜なければなりません' (~nakereba narimasen) có nghĩa là 'phải làm ~'.",
      [
        new Example("税関申告書を記入しなければなりません。", "Zeikan shinkokusho wo kinyū shinakereba narimasen.", "Bạn phải điền tờ khai hải quan."),
        new Example("国際郵便には宛先を英語で書かなければなりません。", "Kokusai yūbin niwa atesaki wo eigo de kakanakereba narimasen.", "Đối với thư quốc tế, bạn phải viết địa chỉ bằng tiếng Anh.")
      ]
    ),
    new GrammarPoint(
      "〜ことができます",
      "Cấu trúc diễn đạt khả năng có thể làm gì đó. Động từ ở dạng từ điển + 'ことができます' (koto ga dekimasu).",
      [
        new Example("郵便局で荷物を追跡することができます。", "Yūbinkyoku de nimotsu wo tsuiseki suru koto ga dekimasu.", "Bạn có thể theo dõi hàng hóa tại bưu điện."),
        new Example("オンラインで切手を注文することができます。", "Onrain de kitte wo chūmon suru koto ga dekimasu.", "Bạn có thể đặt mua tem trực tuyến.")
      ]
    )
  ],
  
  dialogues: [
    new Dialogue(
      "Gửi bưu thiếp trong nước",
      [
        new DialogueExchange("リン (Linh)", "すみません、このはがきを出したいのですが。", "Sumimasen, kono hagaki wo dashitai no desu ga.", "Xin lỗi, tôi muốn gửi bưu thiếp này."),
        new DialogueExchange("郵便局員 (Yūbinkyokuin)", "はい、国内ですか、海外ですか。", "Hai, kokunai desu ka, kaigai desu ka.", "Vâng, trong nước hay nước ngoài?"),
        new DialogueExchange("リン", "国内です。", "Kokunai desu.", "Trong nước."),
        new DialogueExchange("郵便局員", "はがき一枚で63円になります。切手を貼ってありますか。", "Hagaki ichimai de roku-jū-san en ni narimasu. Kitte wo hatte arimasu ka.", "Một bưu thiếp là 63 yên. Bạn đã dán tem chưa?"),
        new DialogueExchange("リン", "いいえ、まだです。", "Iie, mada desu.", "Chưa ạ."),
        new DialogueExchange("郵便局員", "では63円切手をお貼りします。63円をお願いします。", "Dewa roku-jū-san en kitte wo o-hari shimasu. Roku-jū-san en wo onegaishimasu.", "Vậy tôi sẽ dán tem 63 yên. Xin vui lòng trả 63 yên."),
        new DialogueExchange("リン", "はい、どうぞ。いつ頃届きますか。", "Hai, dōzo. Itsu goro todokimasu ka.", "Vâng, đây ạ. Khi nào thì bưu thiếp sẽ đến nơi?"),
        new DialogueExchange("郵便局員", "通常、翌日から2日以内に届きます。", "Tsūjō, yokujitsu kara futsuka inai ni todokimasu.", "Thông thường, sẽ đến trong vòng 1-2 ngày kể từ ngày mai.")
      ],
      "Tình huống gửi bưu thiếp trong nước tại bưu điện. Chú ý cách sử dụng 'を出したい' (wo dashitai - muốn gửi) và cách hỏi về thời gian giao hàng với 'いつ頃届きますか' (itsu goro todokimasu ka - khi nào sẽ đến nơi)."
    ),
    new Dialogue(
      "Gửi bưu phẩm quốc tế",
      [
        new DialogueExchange("ナム (Nam)", "この荷物をベトナムに送りたいのですが。", "Kono nimotsu wo Betonamu ni okuritai no desu ga.", "Tôi muốn gửi gói hàng này đến Việt Nam."),
        new DialogueExchange("郵便局員 (Yūbinkyokuin)", "かしこまりました。まず、こちらの国際郵便物申込書にご記入ください。", "Kashikomarimashita. Mazu, kochira no kokusai yūbinbutsu mōshikomisho ni go-kinyū kudasai.", "Vâng, được ạ. Trước tiên, vui lòng điền vào mẫu đơn gửi bưu phẩm quốc tế này."),
        new DialogueExchange("ナム", "どこに何を書けばいいですか。", "Doko ni nani wo kakeba ii desu ka.", "Tôi nên viết gì ở đâu?"),
        new DialogueExchange("郵便局員", "こちらに受取人の名前と住所、そしてこちらに差出人、つまりあなたの情報を書いてください。内容品も必ず記入してください。", "Kochira ni uketorinin no namae to jūsho, soshite kochira ni sashidashinin, tsumari anata no jōhō wo kaite kudasai. Naiyōhin mo kanarazu kinyū shite kudasai.", "Hãy viết tên và địa chỉ người nhận ở đây, và thông tin người gửi, tức là thông tin của bạn, ở đây. Hãy nhớ điền nội dung bên trong gói hàng."),
        new DialogueExchange("ナム", "わかりました。あと、どのぐらいかかりますか。", "Wakarimashita. Ato, dono gurai kakarimasu ka.", "Tôi hiểu rồi. Còn nữa, mất bao lâu vậy?"),
        new DialogueExchange("郵便局員", "航空便なら1週間から10日ほどです。船便だと1か月から2か月かかります。", "Kōkūbin nara isshūkan kara tōka hodo desu. Funabin dato ikkagetsu kara nikagetsu kakarimasu.", "Nếu gửi bằng đường hàng không thì mất khoảng 1-10 ngày. Nếu gửi bằng đường biển thì sẽ mất 1-2 tháng."),
        new DialogueExchange("ナム", "航空便でお願いします。料金はいくらですか。", "Kōkūbin de onegaishimasu. Ryōkin wa ikura desu ka.", "Tôi muốn gửi bằng đường hàng không. Phí là bao nhiêu?"),
        new DialogueExchange("郵便局員", "重さを量りますね。1.5キロですので、2,100円になります。追跡サービス付きです。", "Omosa wo hakarimasu ne. Ichi-ten-go kiro desu node, ni-sen-hyaku en ni narimasu. Tsuiseki sābisu tsuki desu.", "Để tôi cân trọng lượng. Là 1,5 kg, nên phí là 2,100 yên. Bao gồm dịch vụ theo dõi.")
      ],
      "Tình huống gửi bưu phẩm quốc tế. Chú ý cách sử dụng các thuật ngữ chuyên môn như 'kokusai yūbinbutsu mōshikomisho' (mẫu đơn gửi bưu phẩm quốc tế), 'kōkūbin' (đường hàng không) và 'funabin' (đường biển)."
    )
  ],
  
  exercises: [
    new Exercise(
      "multiple-choice",
      "郵便局での対話です。「この荷物をアメリカに送りたいです。」の返事として最も適切なのは？",
      ["かしこまりました。こちらの申込書にご記入ください。", "すみません、切手はありません。", "はい、日本へようこそ。", "それはとても高いです。"],
      "かしこまりました。こちらの申込書にご記入ください。",
      "Khi khách hàng nói 'Tôi muốn gửi gói hàng này đến Mỹ', câu trả lời phù hợp nhất của nhân viên bưu điện là 'Vâng, được ạ. Vui lòng điền vào đơn này.'"
    ),
    new Exercise(
      "fill-in-blank",
      "海外に手紙を送るときは、＿＿＿と＿＿＿の二つの方法があります。", 
      ["航空便", "船便"],
      "航空便, 船便",
      "Điền từ thích hợp để hoàn thành câu 'Khi gửi thư ra nước ngoài, có hai phương thức là ___ và ___ .'"
    ),
    new Exercise(
      "matching",
      "Nối các thuật ngữ bưu điện với nghĩa tương ứng",
      [
        { japanese: "切手", english: "Tem" },
        { japanese: "荷物", english: "Bưu phẩm" },
        { japanese: "速達", english: "Chuyển phát nhanh" },
        { japanese: "書留", english: "Thư bảo đảm" }
      ],
      "",
      "Hãy nối các thuật ngữ bưu điện trong tiếng Nhật với nghĩa tiếng Việt tương ứng"
    ),
    new Exercise(
      "speaking",
      "Bạn muốn gửi một gói quà về cho gia đình ở Việt Nam. Hãy tạo một đoạn hội thoại với nhân viên bưu điện, trong đó bạn hỏi về cách gửi, giá cả và thời gian giao hàng.",
      [],
      "",
      "Sử dụng các mẫu câu như 'この荷物をベトナムに送りたいです' (Tôi muốn gửi gói hàng này đến Việt Nam), 'いくらかかりますか' (Mất bao nhiêu tiền?), và 'どのぐらいかかりますか' (Mất bao lâu?)."
    )
  ],
  
  culturalNotes: [
    new LessonSection(
      "Hệ thống bưu điện Nhật Bản",
      ["Bưu điện Nhật Bản (Japan Post) là một trong những hệ thống bưu chính lớn nhất thế giới và nổi tiếng với sự đáng tin cậy và hiệu quả. Ngoài chức năng bưu chính truyền thống, Japan Post còn cung cấp dịch vụ ngân hàng (Japan Post Bank) và bảo hiểm (Japan Post Insurance). Bạn có thể nhận biết các bưu điện bởi biểu tượng chữ 'T' đỏ trên nền trắng. Dịch vụ bưu chính ở Nhật Bản có nhiều lựa chọn cho cả gửi hàng trong nước và quốc tế, từ dịch vụ tiêu chuẩn đến chuyển phát nhanh như EMS (Express Mail Service). Một đặc điểm thú vị là bưu điện Nhật Bản thường phát triển các mẫu tem đặc biệt theo mùa hoặc sự kiện, và việc sưu tập tem trở thành một sở thích phổ biến."],
      []
    ),
    new LessonSection(
      "Nengajo - Bưu thiếp năm mới của Nhật Bản",
      ["Nengajo (年賀状) là bưu thiếp năm mới, một truyền thống quan trọng trong văn hóa Nhật Bản. Mọi người gửi nengajo cho bạn bè, người thân và đồng nghiệp để chúc mừng năm mới. Theo truyền thống, những tấm bưu thiếp này được giao đúng vào ngày đầu tiên của năm mới (1 tháng 1). Để đảm bảo điều này, bưu điện Nhật Bản có dịch vụ đặc biệt: nếu bạn gửi nengajo trước ngày 25 tháng 12, họ sẽ giữ lại và phát đồng loạt vào ngày 1 tháng 1. Nengajo thường có hình ảnh con giáp đại diện cho năm đó theo lịch âm, cùng với lời chúc và đôi khi là thông tin cập nhật ngắn gọn về gia đình. Một điểm đặc biệt khác là nengajo thường có mã số xổ số, cho phép người nhận có cơ hội trúng các giải thưởng từ Japan Post."],
      []
    )
  ],
  
  additionalResources: [
    {
      title: "Trang web chính thức của Japan Post (có phiên bản tiếng Anh)",
      url: "https://www.post.japanpost.jp/english/"
    },
    {
      title: "Hướng dẫn gửi hàng quốc tế từ Nhật Bản",
      url: "https://example.com/international-shipping-japan-guide"
    },
    {
      title: "Từ vựng bưu điện tiếng Nhật",
      url: "https://example.com/japanese-post-office-vocabulary"
    }
  ]
});

export default lesson10; 