import { Lesson, LessonSection, Example, VocabularyItem, GrammarPoint, Dialogue, DialogueExchange, Exercise } from './LessonModel';

const lesson21 = new Lesson({
  id: 21,
  title: "Hiểu thông tin đơn giản về nhà ở Nhật Bản",
  description: "Học cách hiểu và trao đổi các thông tin cơ bản về nhà ở, căn hộ, phòng trọ tại Nhật Bản. Bài học này giúp bạn nắm vững từ vựng, cấu trúc câu và hội thoại liên quan đến chủ đề nhà ở.",
  objectives: [
    "Học từ vựng về các loại nhà, phòng, vật dụng trong nhà",
    "Hiểu các cấu trúc câu mô tả nhà cửa, vị trí, tiện nghi",
    "Phát triển khả năng hỏi và trả lời về nhà ở, thuê nhà, tìm phòng trọ",
    "Luyện tập hội thoại về tìm kiếm, giới thiệu và mô tả nhà ở",
    "Hiểu các thông tin cơ bản trên hợp đồng thuê nhà, quảng cáo nhà ở"
  ],
  introduction: [
    new LessonSection(
      "Giới thiệu",
      ["Nhà ở là một chủ đề quan trọng khi sinh sống tại Nhật Bản. Việc hiểu các thông tin về nhà, căn hộ, phòng trọ sẽ giúp bạn dễ dàng tìm kiếm và lựa chọn nơi ở phù hợp. Bài học này sẽ cung cấp cho bạn các từ vựng, mẫu câu và hội thoại thường gặp khi nói về nhà ở tại Nhật."],
      []
    )
  ],
  vocabulary: [
    new VocabularyItem("家", "Ie", "Nhà", "Danh từ"),
    new VocabularyItem("アパート", "Apāto", "Căn hộ (kiểu Nhật)", "Danh từ"),
    new VocabularyItem("マンション", "Manshon", "Chung cư (kiểu hiện đại)", "Danh từ"),
    new VocabularyItem("部屋", "Heya", "Phòng", "Danh từ"),
    new VocabularyItem("台所", "Daidokoro", "Nhà bếp", "Danh từ"),
    new VocabularyItem("浴室", "Yokushitsu", "Phòng tắm", "Danh từ"),
    new VocabularyItem("トイレ", "Toire", "Nhà vệ sinh", "Danh từ"),
    new VocabularyItem("玄関", "Genkan", "Lối vào nhà", "Danh từ"),
    new VocabularyItem("和室", "Washitsu", "Phòng kiểu Nhật", "Danh từ"),
    new VocabularyItem("洋室", "Yōshitsu", "Phòng kiểu Tây", "Danh từ"),
    new VocabularyItem("家具", "Kagu", "Đồ nội thất", "Danh từ"),
    new VocabularyItem("冷蔵庫", "Reizōko", "Tủ lạnh", "Danh từ"),
    new VocabularyItem("洗濯機", "Sentakuki", "Máy giặt", "Danh từ"),
    new VocabularyItem("エアコン", "Eakon", "Điều hòa", "Danh từ"),
    new VocabularyItem("家賃", "Yachin", "Tiền thuê nhà", "Danh từ"),
    new VocabularyItem("敷金", "Shikikin", "Tiền đặt cọc", "Danh từ"),
    new VocabularyItem("礼金", "Reikin", "Tiền cảm ơn (khi thuê nhà)", "Danh từ"),
    new VocabularyItem("契約", "Keiyaku", "Hợp đồng", "Danh từ"),
    new VocabularyItem("不動産屋", "Fudōsanya", "Công ty bất động sản", "Danh từ"),
    new VocabularyItem("間取り", "Madori", "Bố trí phòng", "Danh từ")
  ],
  grammar: [
    new GrammarPoint(
      "〜があります/〜がいます (Có ~)",
      "Dùng để nói về sự tồn tại của đồ vật, người trong nhà.",
      [
        new Example("部屋に机があります。", "Heya ni tsukue ga arimasu.", "Trong phòng có cái bàn."),
        new Example("家に犬がいます。", "Ie ni inu ga imasu.", "Ở nhà có con chó.")
      ]
    ),
    new GrammarPoint(
      "〜は〜にあります/〜は〜にいます (Ở ~ có ~)",
      "Dùng để mô tả vị trí của đồ vật, người.",
      [
        new Example("冷蔵庫は台所にあります。", "Reizōko wa daidokoro ni arimasu.", "Tủ lạnh ở trong bếp."),
        new Example("子供は部屋にいます。", "Kodomo wa heya ni imasu.", "Trẻ em ở trong phòng.")
      ]
    ),
    new GrammarPoint(
      "〜は〜です (Mô tả tính chất, đặc điểm)",
      "Dùng để mô tả đặc điểm, tính chất của nhà, phòng, vật dụng.",
      [
        new Example("この部屋は広いです。", "Kono heya wa hiroi desu.", "Phòng này rộng."),
        new Example("アパートは静かです。", "Apāto wa shizuka desu.", "Căn hộ yên tĩnh.")
      ]
    ),
    new GrammarPoint(
      "〜たいです (Muốn ~)",
      "Dùng để diễn đạt mong muốn về nhà ở, vật dụng.",
      [
        new Example("新しい部屋に住みたいです。", "Atarashii heya ni sumitai desu.", "Tôi muốn sống ở phòng mới."),
        new Example("大きい冷蔵庫がほしいです。", "Ōkii reizōko ga hoshii desu.", "Tôi muốn có tủ lạnh lớn.")
      ]
    ),
    new GrammarPoint(
      "〜てもいいですか (Có được ~ không?)",
      "Dùng để xin phép hoặc hỏi về quy định trong nhà ở.",
      [
        new Example("ここでタバコを吸ってもいいですか。", "Koko de tabako wo sutte mo ii desu ka.", "Tôi hút thuốc ở đây được không?"),
        new Example("ペットを飼ってもいいですか。", "Petto wo katte mo ii desu ka.", "Có được nuôi thú cưng không?")
      ]
    )
  ],
  dialogues: [
    new Dialogue(
      "Tìm phòng trọ",
      [
        new DialogueExchange("ハイ (Hai)", "アパートを探しています。", "Apāto wo sagashite imasu.", "Tôi đang tìm căn hộ."),
        new DialogueExchange("不動産屋 (Nhân viên bất động sản)", "どんな部屋がいいですか。", "Donna heya ga ii desu ka.", "Bạn muốn phòng như thế nào?"),
        new DialogueExchange("ハイ", "静かで広い部屋がいいです。", "Shizuka de hiroi heya ga ii desu.", "Tôi muốn phòng yên tĩnh và rộng."),
        new DialogueExchange("不動産屋", "このアパートはどうですか。駅から近いです。", "Kono apāto wa dō desu ka. Eki kara chikai desu.", "Căn hộ này thì sao? Gần ga tàu.")
      ],
      "Tình huống tìm phòng trọ. Chú ý cách hỏi và trả lời về nhu cầu nhà ở."
    ),
    new Dialogue(
      "Mô tả nhà ở",
      [
        new DialogueExchange("ナム (Nam)", "あなたの家はどんな家ですか。", "Anata no ie wa donna ie desu ka.", "Nhà bạn như thế nào?"),
        new DialogueExchange("アン (An)", "私の家はマンションです。3LDKで、広いリビングがあります。", "Watashi no ie wa manshon desu. San-eru-di-kei de, hiroi ribingu ga arimasu.", "Nhà mình là chung cư. Có 3 phòng ngủ, phòng khách rộng."),
        new DialogueExchange("ナム", "いいですね。家賃はいくらですか。", "Ii desu ne. Yachin wa ikura desu ka.", "Hay quá. Tiền thuê nhà bao nhiêu?"),
        new DialogueExchange("アン", "月8万円です。", "Tsuki hachi-man en desu.", "8 vạn yên/tháng.")
      ],
      "Tình huống mô tả nhà ở. Chú ý cách sử dụng từ vựng về các loại nhà và phòng."
    )
  ],
  exercises: [
    new Exercise(
      "multiple-choice",
      "「部屋に机があります」は gì?",
      ["Trong phòng có cái bàn.", "Có bàn trong bếp.", "Phòng có người.", "Có bàn ở ngoài trời."],
      "Trong phòng có cái bàn.",
      "Câu này sử dụng cấu trúc '〜があります' để nói về sự tồn tại của đồ vật."
    ),
    new Exercise(
      "fill-in-blank",
      "「新しい部屋に___です」と nói khi muốn sống ở phòng mới. Điền từ thích hợp:",
      ["住みたい", "住んでいる", "住みます"],
      "住みたい",
      "Điền từ thích hợp để hoàn thành câu diễn đạt mong muốn về nhà ở."
    ),
    new Exercise(
      "matching",
      "Nối các từ về nhà ở với ý nghĩa tương ứng",
      [
        { japanese: "アパート", english: "Căn hộ kiểu Nhật" },
        { japanese: "マンション", english: "Chung cư hiện đại" },
        { japanese: "和室", english: "Phòng kiểu Nhật" },
        { japanese: "洋室", english: "Phòng kiểu Tây" }
      ],
      "",
      "Nối các từ về nhà ở tiếng Nhật với nghĩa tiếng Việt tương ứng."
    ),
    new Exercise(
      "role-play",
      "Đóng vai hai người đang hỏi và trả lời về nhà ở, phòng trọ. Sử dụng các mẫu câu mô tả và hỏi về nhà ở.",
      [],
      "",
      "Sử dụng các mẫu câu như 'どんな部屋', '〜があります', '〜たいです'."
    )
  ],
  culturalNotes: [
    new LessonSection(
      "Nhà ở và thuê nhà tại Nhật Bản",
      ["Ở Nhật, việc thuê nhà thường phải trả thêm tiền đặt cọc (敷金), tiền cảm ơn (礼金) và ký hợp đồng với công ty bất động sản. Các căn hộ nhỏ (アパート) phổ biến với sinh viên và người đi làm trẻ. Nhà kiểu Nhật (和室) thường có chiếu tatami, còn nhà kiểu Tây (洋室) có sàn gỗ hoặc thảm. Khi thuê nhà, nên chú ý các quy định về nuôi thú cưng, hút thuốc, và sử dụng thiết bị điện tử."],
      []
    )
  ],
  additionalResources: [
    {
      title: "Từ vựng mở rộng về nhà ở và vật dụng trong nhà tại Nhật Bản",
      url: "https://example.com/japanese-housing-vocabulary"
    },
    {
      title: "Hướng dẫn thuê nhà và ký hợp đồng tại Nhật Bản",
      url: "https://example.com/japanese-housing-contract"
    },
    {
      title: "Các loại nhà ở phổ biến tại Nhật Bản",
      url: "https://example.com/japanese-house-types"
    }
  ]
});

export default lesson21; 