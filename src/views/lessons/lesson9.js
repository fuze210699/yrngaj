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

const lesson9 = new Lesson({
  id: 9,
  title: "Hỏi về địa điểm muốn đến và mua sắm",
  description: "Học cách hỏi thông tin về các địa điểm muốn đến và cách mua sắm bằng tiếng Nhật. Bài học này giúp bạn tự tin khi đi tham quan, tìm kiếm địa điểm và mua sắm ở Nhật Bản.",
  
  objectives: [
    "Học cách hỏi và tìm thông tin về địa điểm du lịch",
    "Hiểu cách sử dụng từ vựng và cấu trúc câu liên quan đến mua sắm",
    "Nắm vững cách hỏi giá cả và thương lượng khi mua sắm",
    "Học cách mô tả sở thích và yêu cầu khi mua sắm",
    "Hiểu các biểu thức thông dụng khi đi mua sắm ở Nhật Bản"
  ],
  
  introduction: [
    new LessonSection(
      "Giới thiệu", 
      ["Khi du lịch hay sinh sống tại Nhật Bản, việc tìm hiểu về các địa điểm và mua sắm là những hoạt động không thể thiếu. Trong bài học này, chúng ta sẽ học các cách hỏi thông tin về địa điểm du lịch, hỏi đường đến các khu mua sắm, và cách giao tiếp khi mua sắm. Từ việc hỏi giá, yêu cầu màu sắc hay kích cỡ, đến việc thanh toán, những kiến thức này sẽ giúp bạn tự tin khi tham quan và mua sắm trong môi trường tiếng Nhật. Bài học cũng đề cập đến những khía cạnh văn hóa độc đáo trong trải nghiệm mua sắm ở Nhật Bản."],
      []
    )
  ],
  
  vocabulary: [
    new VocabularyItem("場所", "Basho", "Địa điểm, nơi chốn", "Danh từ"),
    new VocabularyItem("観光地", "Kankōchi", "Địa điểm du lịch", "Danh từ"),
    new VocabularyItem("お勧め", "Osusume", "Đề xuất, gợi ý", "Danh từ"),
    new VocabularyItem("名所", "Meisho", "Thắng cảnh", "Danh từ"),
    new VocabularyItem("お店", "Omise", "Cửa hàng", "Danh từ"),
    new VocabularyItem("デパート", "Depāto", "Trung tâm thương mại", "Danh từ"),
    new VocabularyItem("スーパー", "Sūpā", "Siêu thị", "Danh từ"),
    new VocabularyItem("コンビニ", "Konbini", "Cửa hàng tiện lợi", "Danh từ"),
    new VocabularyItem("商店街", "Shōtengai", "Phố mua sắm", "Danh từ"),
    new VocabularyItem("市場", "Ichiba", "Chợ", "Danh từ"),
    new VocabularyItem("値段", "Nedan", "Giá cả", "Danh từ"),
    new VocabularyItem("セール", "Sēru", "Giảm giá", "Danh từ"),
    new VocabularyItem("割引", "Waribiki", "Giảm giá", "Danh từ"),
    new VocabularyItem("サイズ", "Saizu", "Kích cỡ", "Danh từ"),
    new VocabularyItem("色", "Iro", "Màu sắc", "Danh từ"),
    new VocabularyItem("赤い", "Akai", "Màu đỏ", "Tính từ -i"),
    new VocabularyItem("青い", "Aoi", "Màu xanh dương", "Tính từ -i"),
    new VocabularyItem("黄色い", "Kiiroi", "Màu vàng", "Tính từ -i"),
    new VocabularyItem("黒い", "Kuroi", "Màu đen", "Tính từ -i"),
    new VocabularyItem("白い", "Shiroi", "Màu trắng", "Tính từ -i"),
    new VocabularyItem("支払い", "Shiharai", "Thanh toán", "Danh từ"),
    new VocabularyItem("現金", "Genkin", "Tiền mặt", "Danh từ"),
    new VocabularyItem("クレジットカード", "Kurejitto kādo", "Thẻ tín dụng", "Danh từ"),
    new VocabularyItem("試着室", "Shichakushitsu", "Phòng thay đồ", "Danh từ"),
    new VocabularyItem("買い物袋", "Kaimono bukuro", "Túi đựng đồ", "Danh từ"),
    new VocabularyItem("買う", "Kau", "Mua", "Động từ nhóm 1"),
    new VocabularyItem("見る", "Miru", "Xem", "Động từ nhóm 2"),
    new VocabularyItem("選ぶ", "Erabu", "Chọn lựa", "Động từ nhóm 1"),
    new VocabularyItem("試着する", "Shichaku suru", "Thử đồ", "Động từ nhóm 3"),
    new VocabularyItem("高い", "Takai", "Đắt", "Tính từ -i"),
    new VocabularyItem("安い", "Yasui", "Rẻ", "Tính từ -i"),
    new VocabularyItem("素敵", "Suteki", "Đẹp, tuyệt vời", "Tính từ -na"),
    new VocabularyItem("便利", "Benri", "Tiện lợi", "Tính từ -na")
  ],
  
  grammar: [
    new GrammarPoint(
      "どこで〜ができますか",
      "Cấu trúc để hỏi nơi có thể làm gì đó. 'どこで' (doko de) là 'ở đâu', '〜が' (~ga) là trợ từ chỉ chủ ngữ, và 'できますか' (dekimasu ka) là 'có thể làm được'.",
      [
        new Example("どこでおみやげが買えますか。", "Doko de omiyage ga kaemasu ka.", "Tôi có thể mua quà lưu niệm ở đâu?"),
        new Example("どこで写真が撮れますか。", "Doko de shashin ga toremasu ka.", "Tôi có thể chụp ảnh ở đâu?")
      ]
    ),
    new GrammarPoint(
      "〜はいくらですか",
      "Cấu trúc để hỏi giá của một món đồ. '〜は' (~wa) là trợ từ chỉ chủ đề, và 'いくらですか' (ikura desu ka) là 'giá bao nhiêu'.",
      [
        new Example("このTシャツはいくらですか。", "Kono Tī-shatsu wa ikura desu ka.", "Cái áo phông này giá bao nhiêu?"),
        new Example("入場料はいくらですか。", "Nyūjōryō wa ikura desu ka.", "Phí vào cửa là bao nhiêu?")
      ]
    ),
    new GrammarPoint(
      "〜を見せてください",
      "Cấu trúc để yêu cầu xem một món đồ nào đó. '〜を' (~wo) là trợ từ chỉ đối tượng, và '見せてください' (misete kudasai) là 'làm ơn cho tôi xem'.",
      [
        new Example("あの青いセーターを見せてください。", "Ano aoi sētā wo misete kudasai.", "Làm ơn cho tôi xem cái áo len màu xanh kia."),
        new Example("メニューを見せてください。", "Menyū wo misete kudasai.", "Làm ơn cho tôi xem thực đơn.")
      ]
    ),
    new GrammarPoint(
      "〜がありますか",
      "Cấu trúc để hỏi xem có cái gì đó không. '〜が' (~ga) là trợ từ chỉ chủ ngữ, và 'ありますか' (arimasu ka) là 'có không'.",
      [
        new Example("大きいサイズがありますか。", "Ōkii saizu ga arimasu ka.", "Có cỡ lớn không?"),
        new Example("赤い色がありますか。", "Akai iro ga arimasu ka.", "Có màu đỏ không?")
      ]
    ),
    new GrammarPoint(
      "〜方法を教えてください",
      "Cấu trúc để hỏi cách thức làm gì đó. '〜方法' (~hōhō) là 'cách thức', 'を' (wo) là trợ từ chỉ đối tượng, và '教えてください' (oshiete kudasai) là 'xin hãy chỉ cho tôi'.",
      [
        new Example("この商品の使い方を教えてください。", "Kono shōhin no tsukaikata wo oshiete kudasai.", "Xin hãy chỉ cho tôi cách sử dụng sản phẩm này."),
        new Example("駅への行き方を教えてください。", "Eki e no ikikata wo oshiete kudasai.", "Xin hãy chỉ cho tôi cách đi đến ga.")
      ]
    )
  ],
  
  dialogues: [
    new Dialogue(
      "Hỏi về địa điểm tham quan",
      [
        new DialogueExchange("トゥアン (Tuan)", "すみません、京都でおすすめの観光地はどこですか。", "Sumimasen, Kyōto de osusume no kankōchi wa doko desu ka.", "Xin lỗi, ở Kyoto địa điểm du lịch được đề xuất là ở đâu?"),
        new DialogueExchange("案内所の人 (Annaijo no hito)", "京都には多くの有名な観光地がありますよ。特に清水寺と金閣寺は人気があります。", "Kyōto ni wa ōku no yūmei na kankōchi ga arimasu yo. Tokuni Kiyomizu-dera to Kinkaku-ji wa ninki ga arimasu.", "Ở Kyoto có nhiều địa điểm du lịch nổi tiếng. Đặc biệt, chùa Kiyomizu và chùa Kinkaku rất được ưa chuộng."),
        new DialogueExchange("トゥアン", "清水寺へはどうやって行きますか。", "Kiyomizu-dera e wa dō yatte ikimasu ka.", "Làm thế nào để đến chùa Kiyomizu?"),
        new DialogueExchange("案内所の人", "京都駅からバスで行けますよ。206番か100番のバスに乗って、清水道で降りてください。", "Kyōto-eki kara basu de ikemasu yo. Ni-hyaku-roku-ban ka hyaku-ban no basu ni notte, Kiyomizu-michi de orite kudasai.", "Bạn có thể đi bằng xe buýt từ ga Kyoto. Hãy đi xe buýt số 206 hoặc 100, và xuống ở trạm Kiyomizu-michi."),
        new DialogueExchange("トゥアン", "バスの料金はいくらですか。", "Basu no ryōkin wa ikura desu ka.", "Giá vé xe buýt là bao nhiêu?"),
        new DialogueExchange("案内所の人", "230円です。この地図をどうぞ。観光スポットが載っています。", "Ni-hyaku-san-jū en desu. Kono chizu wo dōzo. Kankō supotto ga notte imasu.", "230 yên. Mời bạn xem bản đồ này. Có các điểm du lịch được đánh dấu trên đó.")
      ],
      "Tình huống hỏi thông tin về địa điểm du lịch tại trung tâm thông tin. Chú ý cách sử dụng 'おすすめ' (osusume - đề xuất), và cách hỏi các thông tin cụ thể như phương tiện di chuyển, giá vé."
    ),
    new Dialogue(
      "Mua sắm tại cửa hàng quần áo",
      [
        new DialogueExchange("店員 (Tenin)", "いらっしゃいませ。何かお探しですか。", "Irasshaimase. Nanika o-sagashi desu ka.", "Xin chào quý khách. Quý khách đang tìm gì ạ?"),
        new DialogueExchange("アン (An)", "セーターを探しています。", "Sētā wo sagashite imasu.", "Tôi đang tìm áo len."),
        new DialogueExchange("店員", "セーターでしたら、こちらにございます。何色をお探しですか。", "Sētā deshitara, kochira ni gozaimasu. Nani-iro wo o-sagashi desu ka.", "Nếu là áo len, chúng tôi có ở đây. Bạn đang tìm màu gì?"),
        new DialogueExchange("アン", "青か黒がいいです。あの青いセーターを見せてください。", "Ao ka kuro ga ii desu. Ano aoi sētā wo misete kudasai.", "Tôi thích màu xanh hoặc đen. Làm ơn cho tôi xem cái áo len màu xanh kia."),
        new DialogueExchange("店員", "こちらですね。サイズはございますか。", "Kochira desu ne. Saizu wa gozaimasu ka.", "Đây ạ. Bạn mặc cỡ nào?"),
        new DialogueExchange("アン", "Mサイズをお願いします。試着してもいいですか。", "M-saizu wo onegaishimasu. Shichaku shite mo ii desu ka.", "Cho tôi cỡ M. Tôi có thể thử được không?"),
        new DialogueExchange("店員", "はい、こちらの試着室をどうぞ。", "Hai, kochira no shichakushitsu wo dōzo.", "Vâng, mời bạn dùng phòng thử đồ này."),
        new DialogueExchange("アン", "これをください。いくらですか。", "Kore wo kudasai. Ikura desu ka.", "Tôi sẽ lấy cái này. Bao nhiêu tiền?"),
        new DialogueExchange("店員", "3,500円です。現金、またはカードでお支払いいただけます。", "San-zen-go-hyaku en desu. Genkin, matawa kādo de o-shiharai itadakemasu.", "3,500 yên. Bạn có thể thanh toán bằng tiền mặt hoặc thẻ.")
      ],
      "Tình huống mua sắm quần áo tại cửa hàng. Chú ý cách hỏi về màu sắc, kích cỡ, và cách xin phép thử đồ bằng cấu trúc '〜てもいいですか' (~te mo ii desu ka)."
    )
  ],
  
  exercises: [
    new Exercise(
      "multiple-choice",
      "お店でセーターを買いたいとき、どのように尋ねますか。",
      ["このセーターはいくらですか。", "セーターを食べます。", "セーターはどこですか。", "セーターをありがとう。"],
      "このセーターはいくらですか。",
      "Khi muốn mua áo len tại cửa hàng, câu hỏi phù hợp là 'Cái áo len này giá bao nhiêu?'"
    ),
    new Exercise(
      "fill-in-blank",
      "観光地について「おすすめの場所は＿＿＿＿ですか」と聞きます。", 
      ["どこ", "いつ", "だれ"],
      "どこ",
      "Điền từ thích hợp để hoàn thành câu hỏi 'Địa điểm du lịch được đề xuất là ___ ?'"
    ),
    new Exercise(
      "matching",
      "Nối các từ chỉ màu sắc với nghĩa tương ứng",
      [
        { japanese: "赤い", english: "Màu đỏ" },
        { japanese: "青い", english: "Màu xanh dương" },
        { japanese: "黄色い", english: "Màu vàng" },
        { japanese: "黒い", english: "Màu đen" }
      ],
      "",
      "Hãy nối các từ chỉ màu sắc trong tiếng Nhật với nghĩa tiếng Việt tương ứng"
    ),
    new Exercise(
      "speaking",
      "Bạn đang ở một cửa hàng quần áo và muốn mua một chiếc áo khoác. Hãy hỏi nhân viên về giá cả, kích cỡ, và màu sắc bằng tiếng Nhật.",
      [],
      "",
      "Sử dụng các mẫu câu như 'このジャケットはいくらですか' (Áo khoác này giá bao nhiêu?), 'Lサイズがありますか' (Có cỡ L không?), và '黒い色がありますか' (Có màu đen không?)."
    )
  ],
  
  culturalNotes: [
    new LessonSection(
      "Văn hóa mua sắm ở Nhật Bản",
      ["Mua sắm ở Nhật Bản có những đặc điểm văn hóa riêng biệt. Dịch vụ khách hàng ở đây nổi tiếng với sự chu đáo và tận tâm. Nhân viên cửa hàng thường chào đón khách với câu 'いらっしゃいませ' (irasshaimase) và cảm ơn khách khi rời đi với 'ありがとうございました' (arigatou gozaimashita). Khi mua hàng, bạn thường đặt tiền vào một chiếc khay nhỏ thay vì đưa trực tiếp cho nhân viên. Hầu hết các cửa hàng đều gói quà cẩn thận, ngay cả với những món đồ nhỏ. Việc mặc cả giá không phổ biến trong văn hóa mua sắm của Nhật Bản, trừ một số chợ truyền thống. Thẻ tín dụng được chấp nhận rộng rãi tại các cửa hàng lớn và trung tâm thương mại, nhưng nhiều cửa hàng nhỏ và nhà hàng vẫn ưa chuộng tiền mặt."],
      []
    ),
    new LessonSection(
      "Konbini - Cửa hàng tiện lợi Nhật Bản",
      ["Konbini (コンビニ) - cửa hàng tiện lợi ở Nhật Bản là một phần không thể thiếu trong cuộc sống hàng ngày. Không chỉ bán thực phẩm và đồ uống, konbini còn cung cấp nhiều dịch vụ tiện ích như thanh toán hóa đơn, gửi bưu kiện, photocopy, in ấn, rút tiền ATM, và mua vé sự kiện. Các chuỗi konbini lớn như 7-Eleven, Lawson, và FamilyMart mở cửa 24/7 và có mặt ở khắp mọi nơi. Đặc biệt, thực phẩm tại konbini luôn tươi ngon và được cập nhật nhiều lần trong ngày. Đối với du khách, konbini là nơi thuận tiện để mua đồ ăn nhẹ, nhu yếu phẩm, và thậm chí tìm một bữa ăn nhanh chóng nhưng vẫn đảm bảo chất lượng."],
      []
    )
  ],
  
  additionalResources: [
    {
      title: "Từ vựng mua sắm tiếng Nhật",
      url: "https://example.com/japanese-shopping-vocabulary"
    },
    {
      title: "Hướng dẫn mua sắm ở Nhật Bản",
      url: "https://example.com/shopping-guide-japan"
    },
    {
      title: "Danh sách các địa điểm mua sắm nổi tiếng ở Tokyo",
      url: "https://example.com/tokyo-shopping-spots"
    }
  ]
});

export default lesson9; 