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

const lesson2 = new Lesson({
  id: 2,
  title: "Biểu đạt khi tặng quà và mua sắm",
  description: "Học cách biểu đạt khi tặng quà, nhận quà, hỏi giá và mua sắm trong tiếng Nhật. Bài học này giúp bạn hiểu cách người Nhật trao đổi quà tặng và các cụm từ thông dụng khi mua sắm.",
  
  objectives: [
    "Biết cách tặng quà và bày tỏ lòng biết ơn khi nhận quà trong tiếng Nhật",
    "Biết cách hỏi giá và thực hiện các giao dịch mua bán cơ bản",
    "Học các cụm từ phổ biến khi mua sắm và trả giá",
    "Hiểu các nghi thức văn hóa khi tặng quà trong xã hội Nhật Bản"
  ],
  
  introduction: [
    new LessonSection(
      "Giới thiệu", 
      ["Tặng quà là một phần quan trọng trong văn hóa Nhật Bản và có nhiều quy tắc cần tuân thủ. Người Nhật thường tặng quà trong các dịp đặc biệt như khi thăm nhà ai đó, trong các kỳ nghỉ lễ, hoặc khi trở về từ chuyến du lịch. Khi mua sắm tại Nhật Bản, bạn sẽ nhận thấy dịch vụ khách hàng rất chu đáo và có nhiều cách biểu đạt lịch sự khi giao tiếp với người bán hàng."],
      []
    )
  ],
  
  vocabulary: [
    new VocabularyItem("これ", "Kore", "Cái này (gần người nói)", "Đại từ chỉ định"),
    new VocabularyItem("それ", "Sore", "Cái đó (gần người nghe)", "Đại từ chỉ định"),
    new VocabularyItem("あれ", "Are", "Cái kia (xa cả người nói và người nghe)", "Đại từ chỉ định"),
    new VocabularyItem("どれ", "Dore", "Cái nào", "Đại từ nghi vấn"),
    new VocabularyItem("いくら", "Ikura", "Bao nhiêu tiền", "Đại từ nghi vấn"),
    new VocabularyItem("プレゼント", "Purezento", "Quà tặng", "Danh từ"),
    new VocabularyItem("お土産", "Omiyage", "Quà lưu niệm", "Danh từ"),
    new VocabularyItem("贈り物", "Okurimono", "Quà tặng (trang trọng)", "Danh từ"),
    new VocabularyItem("値段", "Nedan", "Giá", "Danh từ"),
    new VocabularyItem("円", "En", "Yên Nhật", "Danh từ"),
    new VocabularyItem("高い", "Takai", "Đắt", "Tính từ"),
    new VocabularyItem("安い", "Yasui", "Rẻ", "Tính từ"),
    new VocabularyItem("綺麗", "Kirei", "Đẹp", "Tính từ"),
    new VocabularyItem("これをください", "Kore wo kudasai", "Làm ơn cho tôi cái này", "Cụm từ"),
    new VocabularyItem("どうぞ", "Douzo", "Xin mời", "Cụm từ"),
    new VocabularyItem("つまらないものですが", "Tsumaranai mono desuga", "Đây là món quà nhỏ", "Cụm từ khiêm tốn"),
    new VocabularyItem("ありがとうございます", "Arigatou gozaimasu", "Cảm ơn", "Cụm từ"),
    new VocabularyItem("お願いします", "Onegaishimasu", "Làm ơn", "Cụm từ"),
    new VocabularyItem("いらっしゃいませ", "Irasshaimase", "Kính chào quý khách", "Cụm từ"),
    new VocabularyItem("現金", "Genkin", "Tiền mặt", "Danh từ"),
    new VocabularyItem("クレジットカード", "Kurejitto kaado", "Thẻ tín dụng", "Danh từ"),
    new VocabularyItem("レシート", "Reshiito", "Hóa đơn", "Danh từ"),
    new VocabularyItem("買う", "Kau", "Mua", "Động từ"),
    new VocabularyItem("支払う", "Shiharau", "Thanh toán", "Động từ")
  ],
  
  grammar: [
    new GrammarPoint(
      "これ/それ/あれ は [Tính từ] です。",
      "Mẫu câu cơ bản để mô tả vật dụng. 'これ' (kore) là 'cái này', 'それ' (sore) là 'cái đó', và 'あれ' (are) là 'cái kia'.",
      [
        new Example("これは綺麗です。", "Kore wa kirei desu.", "Cái này đẹp."),
        new Example("それは高いです。", "Sore wa takai desu.", "Cái đó đắt.")
      ]
    ),
    new GrammarPoint(
      "これ/それ/あれ は いくらですか。",
      "Mẫu câu để hỏi giá của một vật. 'いくら' (ikura) có nghĩa là 'bao nhiêu tiền'.",
      [
        new Example("これはいくらですか。", "Kore wa ikura desuka.", "Cái này giá bao nhiêu?"),
        new Example("それは3000円です。", "Sore wa sanzen-en desu.", "Cái đó giá 3000 yên.")
      ]
    ),
    new GrammarPoint(
      "[Danh từ] をください。",
      "Cấu trúc dùng để yêu cầu hoặc mua một thứ gì đó. 'を' (wo) là trợ từ chỉ đối tượng, và 'ください' (kudasai) có nghĩa là 'làm ơn cho tôi'.",
      [
        new Example("これをください。", "Kore wo kudasai.", "Làm ơn cho tôi cái này."),
        new Example("お水をください。", "Omizu wo kudasai.", "Làm ơn cho tôi nước.")
      ]
    ),
    new GrammarPoint(
      "つまらないものですが、どうぞ。",
      "Cụm từ này dùng khi tặng quà. 'つまらないものですが' (tsumaranai mono desuga) thể hiện sự khiêm tốn, nghĩa đen là 'đây là món quà nhỏ', 'どうぞ' (douzo) có nghĩa là 'xin mời'.",
      [
        new Example("つまらないものですが、どうぞ。", "Tsumaranai mono desuga, douzo.", "Đây là món quà nhỏ, xin mời nhận.")
      ]
    )
  ],
  
  dialogues: [
    new Dialogue(
      "Tặng quà cho người bạn",
      [
        new DialogueExchange("マイ (Mai)", "たなかさん、お誕生日おめでとうございます。", "Tanaka-san, otanjoubi omedetou gozaimasu.", "Chúc mừng sinh nhật, Tanaka."),
        new DialogueExchange("田中 (Tanaka)", "ありがとうございます。", "Arigatou gozaimasu.", "Cảm ơn."),
        new DialogueExchange("マイ", "つまらないものですが、どうぞ。", "Tsumaranai mono desuga, douzo.", "Đây là món quà nhỏ, xin mời nhận."),
        new DialogueExchange("田中", "わあ、ありがとうございます。開けてもいいですか。", "Waa, arigatou gozaimasu. Akete mo ii desuka.", "Ồ, cảm ơn bạn. Tôi có thể mở ra được không?"),
        new DialogueExchange("マイ", "はい、どうぞ。", "Hai, douzo.", "Vâng, xin mời."),
        new DialogueExchange("田中", "わあ、素敵なネクタイですね。ありがとうございます。大切にします。", "Waa, suteki na nekutai desune. Arigatou gozaimasu. Taisetsu ni shimasu.", "Ồ, cà vạt đẹp quá. Cảm ơn bạn. Tôi sẽ giữ gìn cẩn thận.")
      ],
      "Trong tình huống này, Mai tặng quà sinh nhật cho Tanaka. Chú ý cách dùng 'つまらないものですが' (tsumaranai mono desuga) để thể hiện sự khiêm tốn khi tặng quà. Trong văn hóa Nhật, người nhận thường hỏi xin phép trước khi mở quà."
    ),
    new Dialogue(
      "Mua sắm trong cửa hàng",
      [
        new DialogueExchange("店員 (Nhân viên)", "いらっしゃいませ。", "Irasshaimase.", "Kính chào quý khách."),
        new DialogueExchange("リン (Linh)", "すみません、この帽子はいくらですか。", "Sumimasen, kono boushi wa ikura desuka.", "Xin lỗi, cái mũ này giá bao nhiêu?"),
        new DialogueExchange("店員", "2500円です。", "Nisen-gohyaku en desu.", "2500 yên."),
        new DialogueExchange("リン", "そうですか。ちょっと高いですね。もっと安いのはありますか。", "Sou desuka. Chotto takai desune. Motto yasui no wa arimasuka.", "Vậy à. Hơi đắt. Có cái nào rẻ hơn không?"),
        new DialogueExchange("店員", "はい、こちらは1500円です。", "Hai, kochira wa sen-gohyaku en desu.", "Vâng, cái này 1500 yên."),
        new DialogueExchange("リン", "じゃ、これをください。", "Ja, kore wo kudasai.", "Vậy, tôi lấy cái này."),
        new DialogueExchange("店員", "はい、1500円です。", "Hai, sen-gohyaku en desu.", "Vâng, 1500 yên."),
        new DialogueExchange("リン", "はい、どうぞ。", "Hai, douzo.", "Vâng, đây ạ."),
        new DialogueExchange("店員", "ありがとうございます。500円のお返しです。レシートはこちらです。", "Arigatou gozaimasu. Gohyaku en no okaeshi desu. Reshiito wa kochira desu.", "Cảm ơn quý khách. Đây là 500 yên tiền thối lại. Đây là hóa đơn."),
        new DialogueExchange("リン", "ありがとうございます。", "Arigatou gozaimasu.", "Cảm ơn.")
      ],
      "Đây là một tình huống mua sắm điển hình trong cửa hàng Nhật Bản. Chú ý cách hỏi giá, trả giá, và thanh toán. Nhân viên cửa hàng Nhật Bản thường rất lịch sự và chu đáo."
    )
  ],
  
  exercises: [
    new Exercise(
      "multiple-choice",
      "Khi bạn muốn biết giá của một món đồ, bạn nên hỏi:",
      ["これはいくらですか。", "これはなんですか。", "これをください。", "これがほしいです。"],
      "これはいくらですか。",
      "いくら (ikura) có nghĩa là 'bao nhiêu tiền'"
    ),
    new Exercise(
      "fill-in-blank",
      "Khi tặng quà, bạn nên nói: 「__________、どうぞ。」", 
      ["ありがとうございます", "つまらないものですが", "これはいくらですか"],
      "つまらないものですが",
      "Cụm từ này thể hiện sự khiêm tốn khi tặng quà, có nghĩa là 'Đây là món quà nhỏ'"
    ),
    new Exercise(
      "matching",
      "Nối các từ với nghĩa tương ứng",
      [
        { japanese: "これ", english: "Cái này" },
        { japanese: "それ", english: "Cái đó" },
        { japanese: "あれ", english: "Cái kia" },
        { japanese: "どれ", english: "Cái nào" }
      ],
      "",
      "Hãy nối các đại từ chỉ định tiếng Nhật với nghĩa tiếng Việt tương ứng"
    ),
    new Exercise(
      "speaking",
      "Hãy tạo một đoạn hội thoại ngắn khi bạn muốn mua một món đồ trong cửa hàng, bao gồm: chào hỏi, hỏi giá, và quyết định mua.",
      [],
      "",
      "Sử dụng các cụm từ đã học như: いらっしゃいませ、いくらですか、これをください、ありがとうございます"
    )
  ],
  
  culturalNotes: [
    new LessonSection(
      "Văn hóa tặng quà Nhật Bản",
      ["Tặng quà trong văn hóa Nhật Bản có nhiều nghi thức và quy tắc cần tuân thủ. Quà thường được gói cẩn thận và đẹp mắt. Khi tặng quà, người Nhật thường dùng cả hai tay và nói 'つまらないものですが' (tsumaranai mono desuga) để thể hiện sự khiêm tốn. Người nhận cũng nên dùng cả hai tay để đón nhận món quà và thường không mở quà ngay trước mặt người tặng trừ khi được yêu cầu."],
      []
    ),
    new LessonSection(
      "Omiyage - Văn hóa quà lưu niệm",
      ["'お土産' (omiyage) là quà lưu niệm mà người Nhật mang về cho đồng nghiệp, bạn bè và gia đình sau chuyến du lịch. Khác với quà lưu niệm phương Tây thường là đồ dùng cá nhân, omiyage thường là đồ ăn đặc sản địa phương được đóng gói đẹp mắt và chia sẻ với mọi người. Việc mang omiyage về là một trách nhiệm xã hội quan trọng trong văn hóa Nhật Bản."],
      []
    )
  ],
  
  additionalResources: [
    {
      title: "Video: Cách tặng và nhận quà trong văn hóa Nhật Bản",
      url: "https://example.com/japanese-gift-giving-video"
    },
    {
      title: "Thẻ ghi nhớ từ vựng mua sắm tiếng Nhật",
      url: "https://example.com/japanese-shopping-flashcards"
    },
    {
      title: "Bài tập thêm về hội thoại mua sắm",
      url: "https://example.com/japanese-shopping-exercises"
    }
  ]
});

export default lesson2; 