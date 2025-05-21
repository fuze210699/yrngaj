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

const lesson12 = new Lesson({
  id: 12,
  title: "Đặt món ăn trong nhà hàng và thanh toán riêng",
  description: "Học cách đặt món, yêu cầu dịch vụ và thanh toán riêng tại nhà hàng Nhật Bản. Bài học này giúp bạn giao tiếp hiệu quả khi ăn uống cùng bạn bè tại các nhà hàng ở Nhật.",
  
  objectives: [
    "Học từ vựng về món ăn và đồ uống trong nhà hàng Nhật Bản",
    "Nắm vững cách gọi món và yêu cầu dịch vụ từ nhân viên",
    "Hiểu cách sử dụng các biểu thức lịch sự khi dùng bữa",
    "Học cách yêu cầu thanh toán riêng hoặc chia hóa đơn",
    "Phát triển khả năng đọc thực đơn và hiểu các thuật ngữ ẩm thực Nhật Bản"
  ],
  
  introduction: [
    new LessonSection(
      "Giới thiệu", 
      ["Ăn uống tại nhà hàng Nhật Bản không chỉ là trải nghiệm ẩm thực tuyệt vời mà còn là cơ hội để hiểu thêm về văn hóa và phép tắc của người Nhật. Từ việc được chào đón với tiếng 'いらっしゃいませ' (irasshaimase - xin mời) khi bước vào, đến khi ra về với lời cảm ơn 'ごちそうさまでした' (gochisousama deshita - cảm ơn vì bữa ăn ngon), mọi chi tiết đều thể hiện sự tôn trọng và tinh tế trong văn hóa ẩm thực Nhật Bản. Trong bài học này, bạn sẽ học cách đặt món, yêu cầu dịch vụ đặc biệt, và đặc biệt là cách thanh toán riêng khi đi ăn cùng bạn bè - một điều không phổ biến ở Nhật nhưng ngày càng được chấp nhận, nhất là tại các nhà hàng phục vụ khách du lịch và người nước ngoài."],
      []
    )
  ],
  
  vocabulary: [
    new VocabularyItem("レストラン", "Resutoran", "Nhà hàng", "Danh từ"),
    new VocabularyItem("居酒屋", "Izakaya", "Quán rượu kiểu Nhật", "Danh từ"),
    new VocabularyItem("カフェ", "Kafe", "Quán cà phê", "Danh từ"),
    new VocabularyItem("メニュー", "Menyū", "Thực đơn", "Danh từ"),
    new VocabularyItem("注文", "Chūmon", "Đặt món", "Danh từ"),
    new VocabularyItem("料理", "Ryōri", "Món ăn", "Danh từ"),
    new VocabularyItem("飲み物", "Nomimono", "Đồ uống", "Danh từ"),
    new VocabularyItem("食事", "Shokuji", "Bữa ăn", "Danh từ"),
    new VocabularyItem("会計", "Kaikei", "Thanh toán", "Danh từ"),
    new VocabularyItem("お勘定", "O-kanjō", "Hóa đơn", "Danh từ"),
    new VocabularyItem("割り勘", "Warikan", "Chia đều tiền", "Danh từ"),
    new VocabularyItem("別々に", "Betsu betsu ni", "Thanh toán riêng", "Phó từ"),
    new VocabularyItem("席", "Seki", "Chỗ ngồi", "Danh từ"),
    new VocabularyItem("テーブル", "Tēburu", "Bàn", "Danh từ"),
    new VocabularyItem("予約", "Yoyaku", "Đặt chỗ", "Danh từ"),
    new VocabularyItem("店員", "Tenin", "Nhân viên", "Danh từ"),
    new VocabularyItem("ウェイター", "Weitā", "Bồi bàn nam", "Danh từ"),
    new VocabularyItem("ウェイトレス", "Weitoresu", "Bồi bàn nữ", "Danh từ"),
    new VocabularyItem("水", "Mizu", "Nước lọc", "Danh từ"),
    new VocabularyItem("お茶", "O-cha", "Trà", "Danh từ"),
    new VocabularyItem("ビール", "Bīru", "Bia", "Danh từ"),
    new VocabularyItem("日本酒", "Nihonshu", "Rượu sake", "Danh từ"),
    new VocabularyItem("おすすめ", "Osusume", "Món được đề xuất", "Danh từ"),
    new VocabularyItem("定食", "Teishoku", "Set ăn cố định", "Danh từ"),
    new VocabularyItem("お箸", "O-hashi", "Đũa", "Danh từ"),
    new VocabularyItem("フォーク", "Fōku", "Nĩa", "Danh từ"),
    new VocabularyItem("スプーン", "Supūn", "Thìa", "Danh từ"),
    new VocabularyItem("ナイフ", "Naifu", "Dao", "Danh từ"),
    new VocabularyItem("おしぼり", "Oshibori", "Khăn lau tay ướt", "Danh từ"),
    new VocabularyItem("クレジットカード", "Kurejitto kādo", "Thẻ tín dụng", "Danh từ"),
    new VocabularyItem("現金", "Genkin", "Tiền mặt", "Danh từ"),
    new VocabularyItem("注文する", "Chūmon suru", "Đặt món", "Động từ nhóm 3"),
    new VocabularyItem("食べる", "Taberu", "Ăn", "Động từ nhóm 2"),
    new VocabularyItem("飲む", "Nomu", "Uống", "Động từ nhóm 1"),
    new VocabularyItem("支払う", "Shiharau", "Thanh toán", "Động từ nhóm 1"),
    new VocabularyItem("予約する", "Yoyaku suru", "Đặt chỗ", "Động từ nhóm 3"),
    new VocabularyItem("いただきます", "Itadakimasu", "Xin phép được ăn (nói trước khi ăn)", "Biểu thức"),
    new VocabularyItem("ごちそうさま", "Gochisousama", "Cảm ơn vì bữa ăn (nói sau khi ăn xong)", "Biểu thức"),
    new VocabularyItem("すみません", "Sumimasen", "Xin lỗi, xin phép", "Biểu thức")
  ],
  
  grammar: [
    new GrammarPoint(
      "〜をください",
      "Cấu trúc dùng để yêu cầu hoặc đặt món. '〜を' (~wo) là trợ từ chỉ đối tượng, 'ください' (kudasai) là 'làm ơn cho tôi'.",
      [
        new Example("ビールを一つください。", "Bīru wo hitotsu kudasai.", "Làm ơn cho tôi một bia."),
        new Example("メニューをください。", "Menyū wo kudasai.", "Làm ơn cho tôi xem thực đơn.")
      ]
    ),
    new GrammarPoint(
      "〜をお願いします",
      "Cấu trúc lịch sự hơn để yêu cầu hoặc đặt món. '〜を' (~wo) là trợ từ chỉ đối tượng, 'お願いします' (onegaishimasu) là 'xin vui lòng'.",
      [
        new Example("天ぷら定食をお願いします。", "Tenpura teishoku wo onegaishimasu.", "Xin vui lòng cho tôi set tempura."),
        new Example("お水をお願いします。", "O-mizu wo onegaishimasu.", "Xin vui lòng cho tôi nước lọc.")
      ]
    ),
    new GrammarPoint(
      "〜ていただけますか",
      "Cấu trúc rất lịch sự để yêu cầu dịch vụ. '〜て' (~te) là dạng liên kết, 'いただけますか' (itadakemasu ka) là 'có thể cho tôi nhận được không'.",
      [
        new Example("別々に会計していただけますか。", "Betsu betsu ni kaikei shite itadakemasu ka.", "Có thể cho chúng tôi thanh toán riêng được không?"),
        new Example("もう少し時間をいただけますか。", "Mō sukoshi jikan wo itadakemasu ka.", "Có thể cho chúng tôi thêm một chút thời gian không?")
      ]
    ),
    new GrammarPoint(
      "〜があります / 〜はありますか",
      "Cấu trúc để hỏi về sự sẵn có hoặc tồn tại của vật/dịch vụ. '〜が' (~ga) là trợ từ chỉ chủ ngữ, '〜は' (~wa) là trợ từ chỉ chủ đề, 'あります' (arimasu) là 'có', và 'ありますか' (arimasu ka) là 'có không'.",
      [
        new Example("ベジタリアンメニューはありますか。", "Bejitarian menyū wa arimasu ka.", "Có thực đơn chay không?"),
        new Example("クレジットカードが使えますか。", "Kurejitto kādo ga tsukaemasu ka.", "Có thể dùng thẻ tín dụng không?")
      ]
    ),
    new GrammarPoint(
      "〜がいいです",
      "Cấu trúc để diễn đạt sự ưa thích hoặc lựa chọn. '〜が' (~ga) là trợ từ chỉ chủ ngữ, 'いいです' (ii desu) là 'tốt, được'.",
      [
        new Example("私は寿司がいいです。", "Watashi wa sushi ga ii desu.", "Tôi thích sushi."),
        new Example("窓側の席がいいです。", "Madogawa no seki ga ii desu.", "Tôi muốn chỗ ngồi bên cửa sổ.")
      ]
    )
  ],
  
  dialogues: [
    new Dialogue(
      "Đặt món trong nhà hàng",
      [
        new DialogueExchange("店員 (Tenin)", "いらっしゃいませ。何名様ですか。", "Irasshaimase. Nan-mei-sama desu ka.", "Xin chào quý khách. Mấy vị ạ?"),
        new DialogueExchange("ハイ (Hai)", "3人です。", "San-nin desu.", "Ba người."),
        new DialogueExchange("店員", "こちらのお席へどうぞ。メニューをお持ちします。", "Kochira no o-seki e dōzo. Menyū wo o-mochi shimasu.", "Mời theo lối này. Tôi sẽ mang thực đơn."),
        new DialogueExchange("ハイ", "ありがとうございます。", "Arigatō gozaimasu.", "Cảm ơn."),
        new DialogueExchange("店員", "ご注文はお決まりですか。", "Go-chūmon wa o-kimari desu ka.", "Quý khách đã quyết định gọi món chưa?"),
        new DialogueExchange("ハイ", "はい。私は天ぷら定食をお願いします。", "Hai. Watashi wa tenpura teishoku wo onegaishimasu.", "Vâng. Tôi gọi set tempura."),
        new DialogueExchange("トム (Tomu)", "私は刺身定食をお願いします。", "Watashi wa sashimi teishoku wo onegaishimasu.", "Tôi gọi set sashimi."),
        new DialogueExchange("アン (An)", "私はカツ丼をお願いします。", "Watashi wa katsudon wo onegaishimasu.", "Tôi gọi katsudon."),
        new DialogueExchange("ハイ", "あと、ビールを3つください。", "Ato, bīru wo mittsu kudasai.", "Ngoài ra, cho chúng tôi 3 bia."),
        new DialogueExchange("店員", "かしこまりました。少々お待ちください。", "Kashikomarimashita. Shōshō o-machi kudasai.", "Vâng, đã hiểu. Xin chờ một chút.")
      ],
      "Tình huống đặt món trong nhà hàng. Chú ý cách sử dụng 'お願いします' (onegaishimasu) khi gọi món và cách nhân viên xác nhận với 'かしこまりました' (kashikomarimashita - tôi đã hiểu)."
    ),
    new Dialogue(
      "Thanh toán riêng",
      [
        new DialogueExchange("ハイ", "すみません、お会計をお願いします。", "Sumimasen, o-kaikei wo onegaishimasu.", "Xin lỗi, làm ơn cho chúng tôi thanh toán."),
        new DialogueExchange("店員", "はい、ただいま。お会計は一緒でよろしいですか。", "Hai, tadaima. O-kaikei wa issho de yoroshii desu ka.", "Vâng, ngay đây. Quý khách thanh toán chung được không?"),
        new DialogueExchange("ハイ", "いえ、別々にお願いできますか。", "Ie, betsu betsu ni onegai dekimasu ka.", "Không, có thể thanh toán riêng được không?"),
        new DialogueExchange("店員", "はい、承知いたしました。それでは、お一人ずつご注文を教えていただけますか。", "Hai, shōchi itashimashita. Sore dewa, o-hitori zutsu go-chūmon wo oshiete itadakemasu ka.", "Vâng, được ạ. Vậy, mỗi vị vui lòng cho biết những gì đã gọi?"),
        new DialogueExchange("ハイ", "私は天ぷら定食とビールです。", "Watashi wa tenpura teishoku to bīru desu.", "Tôi gọi set tempura và bia."),
        new DialogueExchange("店員", "天ぷら定食1,200円、ビール550円で、合計1,750円になります。", "Tenpura teishoku sen-ni-hyaku en, bīru go-hyaku-go-jū en de, gōkei sen-nana-hyaku-go-jū en ni narimasu.", "Set tempura 1,200 yên, bia 550 yên, tổng cộng là 1,750 yên."),
        new DialogueExchange("ハイ", "はい、カードで。", "Hai, kādo de.", "Vâng, tôi trả bằng thẻ."),
        new DialogueExchange("店員", "かしこまりました。こちらにサインをお願いします。", "Kashikomarimashita. Kochira ni sain wo onegaishimasu.", "Vâng. Xin vui lòng ký vào đây."),
        new DialogueExchange("ハイ", "はい、どうぞ。", "Hai, dōzo.", "Vâng, đây ạ."),
        new DialogueExchange("店員", "ありがとうございます。次の方は？", "Arigatō gozaimasu. Tsugi no kata wa?", "Cảm ơn quý khách. Vị tiếp theo?")
      ],
      "Tình huống thanh toán riêng trong nhà hàng. Chú ý cách sử dụng '別々に' (betsu betsu ni - thanh toán riêng) và cách nhân viên xử lý yêu cầu này."
    )
  ],
  
  exercises: [
    new Exercise(
      "multiple-choice",
      "レストランで食事の後、会計をするときに何と言いますか。",
      ["お会計をお願いします。", "いただきます。", "ごちそうさまでした。", "予約があります。"],
      "お会計をお願いします。",
      "Sau khi ăn xong tại nhà hàng, khi muốn thanh toán, bạn nên nói 'お会計をお願いします' (o-kaikei wo onegaishimasu - làm ơn cho tôi thanh toán)."
    ),
    new Exercise(
      "fill-in-blank",
      "友達と一緒に食事をしましたが、お金を＿＿＿に払いたいです。", 
      ["別々", "一緒", "速く"],
      "別々",
      "Điền từ thích hợp để hoàn thành câu 'Tôi ăn cùng bạn bè, nhưng muốn trả tiền ___ (riêng).'"
    ),
    new Exercise(
      "matching",
      "Nối các từ vựng nhà hàng với nghĩa tương ứng",
      [
        { japanese: "メニュー", english: "Thực đơn" },
        { japanese: "注文", english: "Đặt món" },
        { japanese: "会計", english: "Thanh toán" },
        { japanese: "席", english: "Chỗ ngồi" }
      ],
      "",
      "Hãy nối các từ vựng nhà hàng trong tiếng Nhật với nghĩa tiếng Việt tương ứng"
    ),
    new Exercise(
      "speaking",
      "Bạn đang ở nhà hàng với hai người bạn. Hãy tạo một đoạn hội thoại với nhân viên, trong đó bạn đặt món, yêu cầu thêm nước và cuối cùng yêu cầu thanh toán riêng.",
      [],
      "",
      "Sử dụng các mẫu câu như 'こちらをお願いします' (kochira wo onegaishimasu - tôi gọi món này), 'お水をもう一杯ください' (o-mizu wo mō ippai kudasai - xin cho thêm một ly nước), và '別々に会計をお願いします' (betsu betsu ni kaikei wo onegaishimasu - làm ơn cho thanh toán riêng)."
    )
  ],
  
  culturalNotes: [
    new LessonSection(
      "Văn hóa thanh toán tại Nhật Bản",
      ["Thanh toán tại nhà hàng ở Nhật Bản có một số điểm khác biệt so với nhiều quốc gia khác. Truyền thống, người Nhật thường không thanh toán riêng (割り勘 - warikan) mà thường một người sẽ thanh toán cho cả nhóm, đặc biệt là trong các tình huống công việc hoặc khi người lớn tuổi mời người trẻ tuổi đi ăn. Tuy nhiên, trong bối cảnh bạn bè, 'warikan' (chia đều hóa đơn) ngày càng phổ biến, đặc biệt là giữa những người trẻ. Yêu cầu thanh toán riêng (別々に - betsu betsu ni) vẫn chưa phổ biến trong các nhà hàng truyền thống nhưng đang dần được chấp nhận nhiều hơn, đặc biệt là tại các nhà hàng phục vụ khách du lịch. Một điểm khác là tại Nhật Bản, bạn thường thanh toán tại quầy thu ngân gần lối ra thay vì tại bàn, và việc trả tiền tip không phải là thông lệ. Ngoài ra, nhiều nhà hàng nhỏ vẫn chỉ nhận thanh toán bằng tiền mặt, mặc dù ngày càng nhiều nơi chấp nhận thanh toán bằng thẻ, đặc biệt là ở các thành phố lớn."],
      []
    ),
    new LessonSection(
      "Nghi thức ăn uống trong văn hóa Nhật Bản",
      ["Văn hóa ẩm thực Nhật Bản có nhiều nghi thức và phép tắc đặc trưng. Trước khi ăn, người Nhật thường nói 'いただきます' (itadakimasu), một biểu thức thể hiện lòng biết ơn đối với thực phẩm và những người đã chuẩn bị bữa ăn. Sau khi ăn xong, họ nói 'ごちそうさまでした' (gochisousama deshita) để bày tỏ sự hài lòng và biết ơn. Khi sử dụng đũa, có nhiều điều kiêng kỵ như không cắm đũa thẳng đứng vào cơm (nhìn giống nghi lễ tang ma), không chuyền thức ăn từ đũa này sang đũa khác, và không chỉ trỏ bằng đũa. Tại nhà hàng, bạn sẽ thường được phục vụ 'おしぼり' (oshibori - khăn lau tay ướt) trước bữa ăn để làm sạch tay. Ngoài ra, việc chạm ly khi nâng cốc chúc mừng và luôn rót đồ uống cho người khác thay vì tự rót cho mình cũng là những nghi thức xã hội quan trọng trong bữa ăn của người Nhật."],
      []
    )
  ],
  
  additionalResources: [
    {
      title: "Từ vựng nhà hàng tiếng Nhật mở rộng",
      url: "https://example.com/japanese-restaurant-vocabulary"
    },
    {
      title: "Hướng dẫn đọc thực đơn tiếng Nhật",
      url: "https://example.com/reading-japanese-menus"
    },
    {
      title: "Phép tắc khi dùng bữa ở các nhà hàng Nhật Bản",
      url: "https://example.com/dining-etiquette-japan"
    }
  ]
});

export default lesson12; 