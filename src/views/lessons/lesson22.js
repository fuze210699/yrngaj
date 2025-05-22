import { Lesson, LessonSection, Example, VocabularyItem, GrammarPoint, Dialogue, DialogueExchange, Exercise } from './LessonModel';

const lesson22 = new Lesson({
  id: 22,
  title: "Hiểu chỉ dẫn đơn giản và quy trình hoạt động tại các cơ sở công cộng như thư viện",
  description: "Học cách hiểu và làm theo các chỉ dẫn, quy trình cơ bản tại các cơ sở công cộng như thư viện, bưu điện, tòa thị chính. Bài học này giúp bạn nắm vững từ vựng, mẫu câu và hội thoại thường gặp khi sử dụng dịch vụ công cộng.",
  objectives: [
    "Học từ vựng về các cơ sở công cộng và dịch vụ phổ biến",
    "Hiểu các mẫu câu chỉ dẫn, quy trình hoạt động tại thư viện, bưu điện, tòa thị chính",
    "Phát triển khả năng hỏi và làm theo hướng dẫn tại nơi công cộng",
    "Luyện tập hội thoại về mượn/trả sách, gửi bưu phẩm, làm thủ tục hành chính",
    "Hiểu các biển báo, ký hiệu và quy định tại cơ sở công cộng"
  ],
  introduction: [
    new LessonSection(
      "Giới thiệu",
      ["Khi sống tại Nhật Bản, bạn sẽ thường xuyên sử dụng các cơ sở công cộng như thư viện, bưu điện, tòa thị chính. Việc hiểu các chỉ dẫn, quy trình hoạt động sẽ giúp bạn sử dụng dịch vụ thuận tiện và đúng quy định. Bài học này sẽ cung cấp cho bạn các từ vựng, mẫu câu và hội thoại thường gặp tại các cơ sở công cộng."],
      []
    )
  ],
  vocabulary: [
    new VocabularyItem("図書館", "Toshokan", "Thư viện", "Danh từ"),
    new VocabularyItem("本", "Hon", "Sách", "Danh từ"),
    new VocabularyItem("貸出", "Kashidashi", "Mượn (sách)", "Danh từ/Tính từ -na"),
    new VocabularyItem("返却", "Henkyaku", "Trả lại (sách)", "Danh từ/Tính từ -na"),
    new VocabularyItem("利用者カード", "Riyōsha kādo", "Thẻ người dùng", "Danh từ"),
    new VocabularyItem("受付", "Uketsuke", "Quầy tiếp tân", "Danh từ"),
    new VocabularyItem("手続き", "Tetsuzuki", "Thủ tục", "Danh từ"),
    new VocabularyItem("案内", "Annai", "Hướng dẫn", "Danh từ"),
    new VocabularyItem("利用時間", "Riyō jikan", "Giờ sử dụng", "Danh từ"),
    new VocabularyItem("休館日", "Kyūkanbi", "Ngày nghỉ (thư viện)", "Danh từ"),
    new VocabularyItem("郵便局", "Yūbinkyoku", "Bưu điện", "Danh từ"),
    new VocabularyItem("窓口", "Madoguchi", "Quầy giao dịch", "Danh từ"),
    new VocabularyItem("市役所", "Shiyakusho", "Tòa thị chính", "Danh từ"),
    new VocabularyItem("申請書", "Shinseisho", "Đơn xin", "Danh từ"),
    new VocabularyItem("順番", "Junban", "Thứ tự", "Danh từ"),
    new VocabularyItem("番号札", "Bangō fuda", "Phiếu số thứ tự", "Danh từ"),
    new VocabularyItem("案内板", "Annaiban", "Bảng hướng dẫn", "Danh từ"),
    new VocabularyItem("規則", "Kisoku", "Quy định", "Danh từ"),
    new VocabularyItem("禁止", "Kinshi", "Cấm", "Danh từ"),
    new VocabularyItem("利用料", "Riyōryō", "Phí sử dụng", "Danh từ")
  ],
  grammar: [
    new GrammarPoint(
      "〜てください (Vui lòng ~)",
      "Dùng để đưa ra chỉ dẫn, yêu cầu lịch sự.",
      [
        new Example("この用紙に名前を書いてください。", "Kono yōshi ni namae wo kaite kudasai.", "Vui lòng viết tên vào tờ giấy này."),
        new Example("本を返却してください。", "Hon wo henkyaku shite kudasai.", "Vui lòng trả lại sách.")
      ]
    ),
    new GrammarPoint(
      "〜しなければなりません (Phải ~)",
      "Dùng để diễn đạt nghĩa vụ, quy định bắt buộc.",
      [
        new Example("利用者カードを作らなければなりません。", "Riyōsha kādo wo tsukuranakereba narimasen.", "Phải làm thẻ người dùng."),
        new Example("順番を守らなければなりません。", "Junban wo mamoranakereba narimasen.", "Phải tuân thủ thứ tự.")
      ]
    ),
    new GrammarPoint(
      "〜てもいいです (Được phép ~)",
      "Dùng để xin phép hoặc nói về điều được phép làm.",
      [
        new Example("ここで本を読んでもいいです。", "Koko de hon wo yonde mo ii desu.", "Bạn có thể đọc sách ở đây."),
        new Example("写真を撮ってもいいですか。", "Shashin wo totte mo ii desu ka.", "Tôi chụp ảnh ở đây được không?")
      ]
    ),
    new GrammarPoint(
      "〜てはいけません (Không được ~)",
      "Dùng để nói về điều cấm, quy định không được làm.",
      [
        new Example("ここで食べてはいけません。", "Koko de tabete wa ikemasen.", "Không được ăn ở đây."),
        new Example("大声で話してはいけません。", "Ōgoe de hanashite wa ikemasen.", "Không được nói to.")
      ]
    ),
    new GrammarPoint(
      "〜方 (Cách ~)",
      "Dùng để hỏi hoặc giải thích cách làm một việc gì đó.",
      [
        new Example("本の借り方を教えてください。", "Hon no karikata wo oshiete kudasai.", "Hãy chỉ cho tôi cách mượn sách."),
        new Example("申請書の書き方がわかりません。", "Shinseisho no kakikata ga wakarimasen.", "Tôi không biết cách viết đơn xin.")
      ]
    )
  ],
  dialogues: [
    new Dialogue(
      "Mượn sách ở thư viện",
      [
        new DialogueExchange("アン (An)", "すみません、本を借りたいですが、どうすればいいですか。", "Sumimasen, hon wo karitai desu ga, dō sureba ii desu ka.", "Xin lỗi, tôi muốn mượn sách, phải làm thế nào?"),
        new DialogueExchange("スタッフ (Nhân viên)", "利用者カードを作ってください。", "Riyōsha kādo wo tsukutte kudasai.", "Vui lòng làm thẻ người dùng."),
        new DialogueExchange("アン", "カードの作り方を教えてください。", "Kādo no tsukurikata wo oshiete kudasai.", "Hãy chỉ cho tôi cách làm thẻ."),
        new DialogueExchange("スタッフ", "この用紙に記入して、受付に出してください。", "Kono yōshi ni kinyū shite, uketsuke ni dashite kudasai.", "Điền vào tờ giấy này và nộp ở quầy tiếp tân.")
      ],
      "Tình huống mượn sách ở thư viện. Chú ý cách hỏi và làm theo chỉ dẫn."
    ),
    new Dialogue(
      "Gửi bưu phẩm ở bưu điện",
      [
        new DialogueExchange("ナム (Nam)", "荷物を送りたいですが、どうすればいいですか。", "Nimotsu wo okuritai desu ga, dō sureba ii desu ka.", "Tôi muốn gửi bưu phẩm, phải làm thế nào?"),
        new DialogueExchange("職員 (Nhân viên)", "この申請書に記入してください。", "Kono shinseisho ni kinyū shite kudasai.", "Vui lòng điền vào đơn này."),
        new DialogueExchange("ナム", "わかりました。", "Wakarimashita.", "Tôi hiểu rồi."),
        new DialogueExchange("職員", "窓口で順番をお待ちください。", "Madoguchi de junban wo o-machi kudasai.", "Vui lòng đợi đến lượt ở quầy giao dịch.")
      ],
      "Tình huống gửi bưu phẩm ở bưu điện. Chú ý cách sử dụng các mẫu câu chỉ dẫn và quy trình." 
    )
  ],
  exercises: [
    new Exercise(
      "multiple-choice",
      "「利用者カードを作らなければなりません」は gì?",
      ["Phải làm thẻ người dùng.", "Có thể làm thẻ người dùng.", "Không cần làm thẻ.", "Không được làm thẻ."],
      "Phải làm thẻ người dùng.",
      "Câu này sử dụng cấu trúc '〜なければなりません' để diễn đạt nghĩa vụ."
    ),
    new Exercise(
      "fill-in-blank",
      "「ここで本を___もいいです」と nói về việc được phép đọc sách ở đây. Điền từ thích hợp:",
      ["読んで", "書いて", "借りて"],
      "読んで",
      "Điền từ thích hợp để hoàn thành câu diễn đạt sự cho phép."
    ),
    new Exercise(
      "matching",
      "Nối các từ về cơ sở công cộng với ý nghĩa tương ứng",
      [
        { japanese: "図書館", english: "Thư viện" },
        { japanese: "郵便局", english: "Bưu điện" },
        { japanese: "市役所", english: "Tòa thị chính" },
        { japanese: "受付", english: "Quầy tiếp tân" }
      ],
      "",
      "Nối các từ về cơ sở công cộng tiếng Nhật với nghĩa tiếng Việt tương ứng."
    ),
    new Exercise(
      "role-play",
      "Đóng vai hai người đang hỏi và làm theo chỉ dẫn tại thư viện hoặc bưu điện. Sử dụng các mẫu câu chỉ dẫn và hỏi về quy trình.",
      [],
      "",
      "Sử dụng các mẫu câu như '〜てください', '〜しなければなりません', '〜てもいいですか'."
    )
  ],
  culturalNotes: [
    new LessonSection(
      "Quy trình và quy định tại cơ sở công cộng ở Nhật Bản",
      ["Tại Nhật, các cơ sở công cộng như thư viện, bưu điện, tòa thị chính đều có quy trình hoạt động rõ ràng và quy định nghiêm ngặt. Người sử dụng dịch vụ cần tuân thủ thứ tự, giữ trật tự, không gây ồn ào và làm theo hướng dẫn của nhân viên. Việc xếp hàng, lấy số thứ tự và chờ đến lượt là điều bắt buộc. Các biển báo, ký hiệu hướng dẫn thường được đặt rõ ràng để người dùng dễ dàng làm theo."],
      []
    )
  ],
  additionalResources: [
    {
      title: "Từ vựng mở rộng về cơ sở công cộng và dịch vụ tại Nhật Bản",
      url: "https://example.com/japanese-public-facilities-vocabulary"
    },
    {
      title: "Hướng dẫn sử dụng thư viện và bưu điện tại Nhật Bản",
      url: "https://example.com/japanese-library-post-office-guide"
    },
    {
      title: "Quy định và quy trình tại các cơ sở công cộng ở Nhật Bản",
      url: "https://example.com/japanese-public-facility-rules"
    }
  ]
});

export default lesson22; 