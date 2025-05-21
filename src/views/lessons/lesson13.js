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

const lesson13 = new Lesson({
  id: 13,
  title: "Gọi taxi và chỉ đường đơn giản",
  description: "Học cách gọi taxi và chỉ dẫn địa điểm bằng tiếng Nhật. Bài học này giúp bạn giao tiếp hiệu quả khi di chuyển bằng taxi ở Nhật Bản và cung cấp những biểu thức cần thiết để chỉ đường đơn giản.",
  
  objectives: [
    "Học từ vựng liên quan đến việc gọi và sử dụng dịch vụ taxi",
    "Nắm vững các biểu thức cần thiết để chỉ dẫn địa điểm",
    "Hiểu cách sử dụng các trợ từ chỉ hướng và vị trí trong tiếng Nhật",
    "Phát triển khả năng giao tiếp với tài xế taxi",
    "Học cách hỏi và trả lời về chi phí, thời gian di chuyển"
  ],
  
  introduction: [
    new LessonSection(
      "Giới thiệu", 
      ["Taxi là một phương tiện giao thông thuận tiện ở Nhật Bản, đặc biệt khi bạn di chuyển với hành lý nhiều hoặc ở những nơi khó tiếp cận bằng phương tiện công cộng. Tuy nhiên, để sử dụng dịch vụ taxi hiệu quả, bạn cần biết cách giao tiếp với tài xế và chỉ dẫn địa điểm đến. Trong bài học này, chúng ta sẽ học các từ vựng và biểu thức quan trọng để gọi taxi, chỉ dẫn đường đi, và nói chuyện đơn giản với tài xế. Những kỹ năng này không chỉ giúp bạn di chuyển dễ dàng hơn mà còn tăng sự tự tin khi giao tiếp trong tình huống thực tế tại Nhật Bản."],
      []
    )
  ],
  
  vocabulary: [
    new VocabularyItem("タクシー", "Takushī", "Taxi", "Danh từ"),
    new VocabularyItem("運転手", "Untenshu", "Tài xế", "Danh từ"),
    new VocabularyItem("行き先", "Ikisaki", "Điểm đến", "Danh từ"),
    new VocabularyItem("住所", "Jūsho", "Địa chỉ", "Danh từ"),
    new VocabularyItem("目的地", "Mokutekichi", "Điểm đến, mục tiêu", "Danh từ"),
    new VocabularyItem("駅", "Eki", "Ga tàu", "Danh từ"),
    new VocabularyItem("ホテル", "Hoteru", "Khách sạn", "Danh từ"),
    new VocabularyItem("レストラン", "Resutoran", "Nhà hàng", "Danh từ"),
    new VocabularyItem("空港", "Kūkō", "Sân bay", "Danh từ"),
    new VocabularyItem("交差点", "Kōsaten", "Ngã tư", "Danh từ"),
    new VocabularyItem("信号", "Shingō", "Đèn giao thông", "Danh từ"),
    new VocabularyItem("一方通行", "Ippō tsūkō", "Đường một chiều", "Danh từ"),
    new VocabularyItem("右", "Migi", "Phải", "Danh từ"),
    new VocabularyItem("左", "Hidari", "Trái", "Danh từ"),
    new VocabularyItem("まっすぐ", "Massugu", "Thẳng", "Phó từ"),
    new VocabularyItem("角", "Kado", "Góc đường", "Danh từ"),
    new VocabularyItem("曲がる", "Magaru", "Rẽ", "Động từ nhóm 1"),
    new VocabularyItem("止まる", "Tomaru", "Dừng lại", "Động từ nhóm 1"),
    new VocabularyItem("ここ", "Koko", "Ở đây", "Đại từ chỉ nơi chốn"),
    new VocabularyItem("そこ", "Soko", "Ở đó", "Đại từ chỉ nơi chốn"),
    new VocabularyItem("あそこ", "Asoko", "Ở đằng kia", "Đại từ chỉ nơi chốn"),
    new VocabularyItem("この辺", "Kono hen", "Vùng này, khu vực này", "Cụm từ"),
    new VocabularyItem("近く", "Chikaku", "Gần", "Danh từ"),
    new VocabularyItem("遠く", "Tōku", "Xa", "Danh từ"),
    new VocabularyItem("料金", "Ryōkin", "Phí, giá", "Danh từ"),
    new VocabularyItem("メーター", "Mētā", "Đồng hồ tính tiền", "Danh từ"),
    new VocabularyItem("領収書", "Ryōshūsho", "Hóa đơn", "Danh từ"),
    new VocabularyItem("お釣り", "O-tsuri", "Tiền thừa", "Danh từ"),
    new VocabularyItem("呼ぶ", "Yobu", "Gọi", "Động từ nhóm 1"),
    new VocabularyItem("乗る", "Noru", "Lên xe", "Động từ nhóm 1"),
    new VocabularyItem("降りる", "Oriru", "Xuống xe", "Động từ nhóm 2"),
    new VocabularyItem("行く", "Iku", "Đi", "Động từ nhóm 1"),
    new VocabularyItem("着く", "Tsuku", "Đến nơi", "Động từ nhóm 1"),
    new VocabularyItem("かかる", "Kakaru", "Mất (thời gian, tiền)", "Động từ nhóm 1"),
    new VocabularyItem("どのぐらい", "Dono gurai", "Bao nhiêu (thời gian, khoảng cách)", "Cụm từ"),
    new VocabularyItem("すみません", "Sumimasen", "Xin lỗi, làm ơn", "Biểu thức"),
    new VocabularyItem("お願いします", "Onegaishimasu", "Xin vui lòng", "Biểu thức"),
    new VocabularyItem("ここで止めてください", "Koko de tomete kudasai", "Xin dừng ở đây", "Biểu thức")
  ],
  
  grammar: [
    new GrammarPoint(
      "〜に行きたいです",
      "Cấu trúc diễn đạt mong muốn đi đến một nơi nào đó. '〜に' (~ni) là trợ từ chỉ điểm đến, 'いきたいです' (ikitai desu) là 'muốn đi'.",
      [
        new Example("東京駅に行きたいです。", "Tōkyō-eki ni ikitai desu.", "Tôi muốn đi đến ga Tokyo."),
        new Example("このホテルに行きたいです。", "Kono hoteru ni ikitai desu.", "Tôi muốn đi đến khách sạn này.")
      ]
    ),
    new GrammarPoint(
      "〜を右／左に曲がってください",
      "Cấu trúc chỉ dẫn rẽ phải hoặc trái. '〜を' (~wo) là trợ từ chỉ đối tượng, '右/左に' (migi/hidari ni) là 'sang phải/trái', '曲がってください' (magatte kudasai) là 'xin hãy rẽ'.",
      [
        new Example("次の交差点を右に曲がってください。", "Tsugi no kōsaten wo migi ni magatte kudasai.", "Xin hãy rẽ phải ở ngã tư tiếp theo."),
        new Example("あの信号を左に曲がってください。", "Ano shingō wo hidari ni magatte kudasai.", "Xin hãy rẽ trái ở đèn giao thông kia.")
      ]
    ),
    new GrammarPoint(
      "〜までどのぐらいかかりますか",
      "Cấu trúc để hỏi về thời gian hoặc chi phí. '〜まで' (~made) là 'đến', 'どのぐらい' (dono gurai) là 'bao nhiêu', 'かかりますか' (kakarimasu ka) là 'mất không'.",
      [
        new Example("空港までどのぐらいかかりますか。", "Kūkō made dono gurai kakarimasu ka.", "Mất bao lâu để đến sân bay?"),
        new Example("駅までどのぐらいかかりますか。", "Eki made dono gurai kakarimasu ka.", "Mất bao nhiêu tiền để đến ga?")
      ]
    ),
    new GrammarPoint(
      "〜を過ぎてすぐです",
      "Cấu trúc chỉ dẫn vị trí ngay sau khi đi qua một điểm mốc. '〜を' (~wo) là trợ từ chỉ đối tượng, '過ぎて' (sugite) là 'đi qua', 'すぐです' (sugu desu) là 'ngay lập tức'.",
      [
        new Example("そのコンビニを過ぎてすぐです。", "Sono konbini wo sugite sugu desu.", "Ngay sau khi đi qua cửa hàng tiện lợi đó."),
        new Example("大きな交差点を過ぎてすぐ左です。", "Ōkina kōsaten wo sugite sugu hidari desu.", "Ngay bên trái sau khi đi qua ngã tư lớn.")
      ]
    ),
    new GrammarPoint(
      "〜の前／隣／近くです",
      "Cấu trúc chỉ dẫn vị trí liên quan đến một điểm mốc. '〜の' (~no) là trợ từ chỉ sở hữu, '前' (mae) là 'trước', '隣' (tonari) là 'bên cạnh', '近く' (chikaku) là 'gần'.",
      [
        new Example("銀行の前で降ろしてください。", "Ginkō no mae de oroshite kudasai.", "Xin hãy cho tôi xuống trước ngân hàng."),
        new Example("郵便局の隣のビルです。", "Yūbinkyoku no tonari no biru desu.", "Là tòa nhà bên cạnh bưu điện.")
      ]
    )
  ],
  
  dialogues: [
    new Dialogue(
      "Gọi taxi qua điện thoại",
      [
        new DialogueExchange("受付 (Uketsuke)", "はい、○○タクシーでございます。", "Hai, XX takushī de gozaimasu.", "Vâng, đây là taxi XX."),
        new DialogueExchange("リン (Linh)", "もしもし、タクシーを呼びたいのですが。", "Moshimoshi, takushī wo yobitai no desu ga.", "Xin chào, tôi muốn gọi một chiếc taxi."),
        new DialogueExchange("受付", "はい、お客様のお名前とご住所をお願いいたします。", "Hai, o-kyaku-sama no o-namae to go-jūsho wo onegai itashimasu.", "Vâng, xin vui lòng cho biết tên và địa chỉ của quý khách."),
        new DialogueExchange("リン", "リンと申します。住所は東京都新宿区西新宿1-2-3、○○ホテルです。", "Rin to mōshimasu. Jūsho wa Tōkyō-to Shinjuku-ku Nishi-Shinjuku 1-2-3, XX hoteru desu.", "Tôi là Linh. Địa chỉ là khách sạn XX, 1-2-3 Nishi-Shinjuku, quận Shinjuku, Tokyo."),
        new DialogueExchange("受付", "かしこまりました。何時にタクシーをご希望ですか。", "Kashikomarimashita. Nanji ni takushī wo go-kibō desu ka.", "Vâng, đã hiểu. Quý khách muốn taxi đến lúc mấy giờ?"),
        new DialogueExchange("リン", "今から30分後にお願いします。", "Ima kara sanjuppun go ni onegaishimasu.", "Xin 30 phút nữa kể từ bây giờ."),
        new DialogueExchange("受付", "承知いたしました。○○ホテルの正面玄関でお待ちください。車が到着しましたら、お電話いたします。", "Shōchi itashimashita. XX hoteru no shōmen genkan de o-machi kudasai. Kuruma ga tōchaku shimashitara, o-denwa itashimasu.", "Vâng, đã hiểu. Xin hãy đợi ở cửa chính của khách sạn XX. Chúng tôi sẽ gọi điện khi xe đến.")
      ],
      "Tình huống gọi taxi qua điện thoại. Chú ý cách cung cấp thông tin về tên, địa chỉ và thời gian khi muốn đặt taxi."
    ),
    new Dialogue(
      "Chỉ dẫn địa điểm cho tài xế taxi",
      [
        new DialogueExchange("タクシー運転手 (Takushī untenshu)", "いらっしゃいませ。どちらまでですか。", "Irasshaimase. Dochira made desu ka.", "Xin chào. Quý khách muốn đi đến đâu?"),
        new DialogueExchange("ナム (Nam)", "上野駅までお願いします。", "Ueno-eki made onegaishimasu.", "Làm ơn đưa tôi đến ga Ueno."),
        new DialogueExchange("タクシー運転手", "かしこまりました。上野駅の正面口でよろしいですか。", "Kashikomarimashita. Ueno-eki no shōmenguchi de yoroshii desu ka.", "Vâng, đã hiểu. Quý khách muốn xuống ở cửa chính của ga Ueno phải không?"),
        new DialogueExchange("ナム", "はい、そうです。あの、上野駅まで、だいたいどのぐらいかかりますか。", "Hai, sō desu. Ano, Ueno-eki made, daitai dono gurai kakarimasu ka.", "Vâng, đúng vậy. À, đến ga Ueno mất khoảng bao lâu?"),
        new DialogueExchange("タクシー運転手", "今の時間ですと、20分ぐらいです。", "Ima no jikan desu to, nijuppun gurai desu.", "Vào thời điểm này, khoảng 20 phút."),
        new DialogueExchange("ナム", "料金はだいたいいくらですか。", "Ryōkin wa daitai ikura desu ka.", "Giá vé khoảng bao nhiêu?"),
        new DialogueExchange("タクシー運転手", "2,000円から2,500円くらいになると思います。", "Ni-sen en kara ni-sen-go-hyaku en kurai ni naru to omoimasu.", "Tôi nghĩ sẽ khoảng từ 2,000 đến 2,500 yên."),
        new DialogueExchange("ナム", "わかりました、ありがとうございます。", "Wakarimashita, arigatō gozaimasu.", "Tôi hiểu rồi, cảm ơn.")
      ],
      "Tình huống chỉ dẫn địa điểm đến và hỏi thông tin từ tài xế taxi. Chú ý cách sử dụng 'まで' (made - đến) khi nói về điểm đến, và cách hỏi về thời gian và chi phí."
    ),
    new Dialogue(
      "Yêu cầu dừng xe và trả tiền",
      [
        new DialogueExchange("タクシー運転手", "まもなく上野駅に到着します。", "Mamonaku Ueno-eki ni tōchaku shimasu.", "Chúng ta sắp đến ga Ueno rồi."),
        new DialogueExchange("ナム", "あ、すみません。あの赤い建物の前で止めていただけますか。", "A, sumimasen. Ano akai tatemono no mae de tomete itadakemasu ka.", "Xin lỗi. Có thể dừng xe trước tòa nhà màu đỏ kia được không?"),
        new DialogueExchange("タクシー運転手", "かしこまりました。こちらでよろしいですか。", "Kashikomarimashita. Kochira de yoroshii desu ka.", "Vâng, đã hiểu. Dừng ở đây được không?"),
        new DialogueExchange("ナム", "はい、ありがとうございます。料金はいくらですか。", "Hai, arigatō gozaimasu. Ryōkin wa ikura desu ka.", "Vâng, cảm ơn. Chi phí là bao nhiêu?"),
        new DialogueExchange("タクシー運転手", "2,300円です。", "Ni-sen-sambyaku en desu.", "2,300 yên."),
        new DialogueExchange("ナム", "3,000円からお願いします。領収書もいただけますか。", "San-zen en kara onegaishimasu. Ryōshūsho mo itadakemasu ka.", "Đây là 3,000 yên. Tôi có thể xin hóa đơn được không?"),
        new DialogueExchange("タクシー運転手", "はい、こちらがお釣りの700円と領収書です。", "Hai, kochira ga o-tsuri no nana-hyaku en to ryōshūsho desu.", "Vâng, đây là tiền thừa 700 yên và hóa đơn của quý khách."),
        new DialogueExchange("ナム", "どうもありがとうございました。", "Dōmo arigatō gozaimashita.", "Cảm ơn rất nhiều.")
      ],
      "Tình huống yêu cầu dừng xe ở một địa điểm cụ thể và thanh toán. Chú ý cách sử dụng '〜の前で止めていただけますか' (~no mae de tomete itadakemasu ka - có thể dừng trước ~ được không) và cách thức thanh toán và xin hóa đơn."
    )
  ],
  
  exercises: [
    new Exercise(
      "multiple-choice",
      "タクシーに乗って、目的地を伝えるとき、何と言いますか。",
      ["○○までお願いします。", "これはいくらですか。", "私はタクシーです。", "右に曲がってください。"],
      "○○までお願いします。",
      "Khi lên taxi và muốn nói điểm đến, bạn nên nói '○○までお願いします' (○○ made onegaishimasu - Làm ơn đến ○○)."
    ),
    new Exercise(
      "fill-in-blank",
      "「次の交差点を＿＿＿に曲がってください」は右折の指示です。", 
      ["右", "左", "まっすぐ"],
      "右",
      "Điền từ thích hợp để hoàn thành câu 'Xin hãy rẽ ___ ở ngã tư tiếp theo' để chỉ dẫn rẽ phải."
    ),
    new Exercise(
      "matching",
      "Nối các biểu thức chỉ đường với nghĩa tương ứng",
      [
        { japanese: "まっすぐ行ってください", english: "Xin hãy đi thẳng" },
        { japanese: "次の角を右に曲がってください", english: "Xin hãy rẽ phải ở góc đường tiếp theo" },
        { japanese: "ここで止めてください", english: "Xin hãy dừng ở đây" },
        { japanese: "あの建物の前でお願いします", english: "Xin dừng trước tòa nhà kia" }
      ],
      "",
      "Hãy nối các biểu thức chỉ đường trong tiếng Nhật với nghĩa tiếng Việt tương ứng"
    ),
    new Exercise(
      "speaking",
      "Bạn đang ở trong taxi và muốn đến một khách sạn. Hãy tạo một đoạn hội thoại với tài xế taxi, trong đó bạn nói điểm đến, hỏi về thời gian và chi phí, và cuối cùng yêu cầu dừng xe ở một điểm cụ thể.",
      [],
      "",
      "Sử dụng các mẫu câu như '○○ホテルまでお願いします' (○○ hoteru made onegaishimasu - Làm ơn đến khách sạn ○○), 'どのぐらいかかりますか' (dono gurai kakarimasu ka - mất bao lâu/bao nhiêu tiền), và 'ここで止めてください' (koko de tomete kudasai - xin dừng ở đây)."
    )
  ],
  
  culturalNotes: [
    new LessonSection(
      "Văn hóa taxi ở Nhật Bản",
      ["Taxi ở Nhật Bản nổi tiếng với chất lượng dịch vụ cao và sự chuyên nghiệp. Các tài xế thường mặc đồng phục chỉnh tề, đeo găng tay trắng, và cửa xe taxi mở đóng tự động. Khác với nhiều quốc gia, ở Nhật Bản hành khách không cần mở cửa xe taxi - tài xế sẽ điều khiển cửa xe từ xa. Một đặc điểm nữa là taxi Nhật thường có giá cao hơn so với nhiều nước, với giá khởi điểm khoảng 400-700 yên (tùy khu vực) và tăng theo quãng đường. Giá sẽ tăng vào ban đêm và sáng sớm (thường từ 22:00 đến 5:00). Việc gọi taxi có thể thực hiện qua điện thoại, ứng dụng, hoặc tại các điểm đón taxi (タクシー乗り場 - takushī noriba). Đáng chú ý là không cần tip cho tài xế taxi ở Nhật, thực tế họ có thể từ chối nhận. Để tiết kiệm, nhiều người Nhật sử dụng dịch vụ 'taxi chia sẻ' (相乗りタクシー - ainori takushī) ở một số tuyến cố định."],
      []
    ),
    new LessonSection(
      "Hệ thống địa chỉ của Nhật Bản",
      ["Hệ thống địa chỉ của Nhật Bản có thể gây khó khăn cho người nước ngoài vì nó khác biệt hoàn toàn so với hầu hết các quốc gia khác. Thay vì sử dụng tên đường và số nhà, địa chỉ Nhật Bản dựa trên khu vực hành chính và các khối nhà được đánh số. Cấu trúc tiêu chuẩn là: tỉnh/thành phố (都道府県 - todōfuken), quận/thành phố (市区町村 - shikuchōson), khu vực (地域 - chiiki), khối (丁目 - chōme), số khối nhà (番地 - banchi), và số tòa nhà (号 - gō). Ví dụ: Tokyo-to, Shinjuku-ku, Nishi-Shinjuku 1-2-3. Hệ thống này làm cho việc tìm kiếm địa chỉ trở nên khó khăn ngay cả đối với người Nhật, đặc biệt ở những khu vực không phải là nơi họ quen thuộc. Vì vậy, khi đi taxi, nhiều người thường cung cấp tên địa danh nổi tiếng hoặc tòa nhà gần đó thay vì địa chỉ đầy đủ. Nếu có thể, việc chuẩn bị địa chỉ bằng tiếng Nhật (trên giấy hoặc điện thoại) là cách tốt nhất để đảm bảo tài xế hiểu chính xác nơi bạn muốn đến."],
      []
    )
  ],
  
  additionalResources: [
    {
      title: "Ứng dụng gọi taxi tại Nhật Bản",
      url: "https://example.com/japan-taxi-apps"
    },
    {
      title: "Từ vựng và biểu thức chỉ đường mở rộng",
      url: "https://example.com/japanese-direction-vocabulary"
    },
    {
      title: "Hướng dẫn sử dụng taxi ở các thành phố lớn của Nhật Bản",
      url: "https://example.com/using-taxis-in-japan"
    }
  ]
});

export default lesson13; 