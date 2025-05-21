import {
  Lesson,
  LessonSection,
  Example,
  VocabularyItem,
  GrammarPoint,
  Dialogue,
  DialogueExchange,
  Exercise,
} from "./LessonModel";

const lesson4 = new Lesson({
  id: 4,
  title: "Phương tiện giao thông và chỉ đường",
  description:
    "Học cách nói về các phương tiện giao thông, hỏi và chỉ đường trong tiếng Nhật. Bạn sẽ học cách đi lại ở Nhật Bản, sử dụng phương tiện công cộng và tìm đường đến điểm đến.",

  objectives: [
    "Biết tên các phương tiện giao thông bằng tiếng Nhật",
    "Học cách hỏi và chỉ đường",
    "Hiểu cách sử dụng hệ thống giao thông công cộng ở Nhật Bản",
    "Biết cách mua vé và sử dụng thẻ IC",
    "Học cách diễn đạt khoảng cách và vị trí",
  ],

  introduction: [
    new LessonSection(
      "Giới thiệu",
      [
        "Nhật Bản nổi tiếng với hệ thống giao thông công cộng hiện đại, tiện lợi và đúng giờ. Khi du lịch hoặc sinh sống tại Nhật, việc hiểu biết về các phương tiện đi lại và cách tìm đường là vô cùng quan trọng. Trong bài học này, chúng ta sẽ học từ vựng và cấu trúc ngữ pháp liên quan đến phương tiện giao thông, cách hỏi và chỉ đường, cũng như hiểu về văn hóa đi lại ở Nhật Bản.",
      ],
      []
    ),
  ],

  vocabulary: [
    new VocabularyItem("電車", "Densha", "Tàu điện", "Danh từ"),
    new VocabularyItem("新幹線", "Shinkansen", "Tàu cao tốc", "Danh từ"),
    new VocabularyItem("バス", "Basu", "Xe buýt", "Danh từ"),
    new VocabularyItem("地下鉄", "Chikatetsu", "Tàu điện ngầm", "Danh từ"),
    new VocabularyItem("タクシー", "Takushii", "Taxi", "Danh từ"),
    new VocabularyItem("自転車", "Jitensha", "Xe đạp", "Danh từ"),
    new VocabularyItem("バイク", "Baiku", "Xe máy", "Danh từ"),
    new VocabularyItem("車", "Kuruma", "Xe hơi", "Danh từ"),
    new VocabularyItem("駅", "Eki", "Ga", "Danh từ"),
    new VocabularyItem("バス停", "Basu tei", "Trạm xe buýt", "Danh từ"),
    new VocabularyItem("空港", "Kuukou", "Sân bay", "Danh từ"),
    new VocabularyItem("出口", "Deguchi", "Lối ra", "Danh từ"),
    new VocabularyItem("入口", "Iriguchi", "Lối vào", "Danh từ"),
    new VocabularyItem("切符", "Kippu", "Vé", "Danh từ"),
    new VocabularyItem(
      "IC カード",
      "IC kaado",
      "Thẻ IC (Suica, Pasmo)",
      "Danh từ"
    ),
    new VocabularyItem("道", "Michi", "Đường", "Danh từ"),
    new VocabularyItem("交差点", "Kousaten", "Giao lộ", "Danh từ"),
    new VocabularyItem("信号", "Shingou", "Đèn giao thông", "Danh từ"),
    new VocabularyItem("橋", "Hashi", "Cầu", "Danh từ"),
    new VocabularyItem("右", "Migi", "Phải", "Danh từ"),
    new VocabularyItem("左", "Hidari", "Trái", "Danh từ"),
    new VocabularyItem("前", "Mae", "Trước", "Danh từ"),
    new VocabularyItem("後ろ", "Ushiro", "Sau", "Danh từ"),
    new VocabularyItem("近く", "Chikaku", "Gần", "Danh từ"),
    new VocabularyItem("遠い", "Tooi", "Xa", "Tính từ -i"),
    new VocabularyItem("曲がる", "Magaru", "Rẽ", "Động từ nhóm 1"),
    new VocabularyItem("行く", "Iku", "Đi", "Động từ nhóm 1"),
    new VocabularyItem("乗る", "Noru", "Lên (xe, tàu)", "Động từ nhóm 1"),
    new VocabularyItem("降りる", "Oriru", "Xuống (xe, tàu)", "Động từ nhóm 2"),
    new VocabularyItem("着く", "Tsuku", "Đến nơi", "Động từ nhóm 1"),
  ],

  grammar: [
    new GrammarPoint(
      "〜はどこですか。",
      "Cấu trúc hỏi về vị trí của một địa điểm. '〜は' (~wa) là trợ từ chỉ chủ đề, 'どこ' (doko) có nghĩa là 'ở đâu', và 'ですか' (desuka) là trợ từ nghi vấn.",
      [
        new Example(
          "トイレはどこですか。",
          "Toire wa doko desuka.",
          "Nhà vệ sinh ở đâu?"
        ),
        new Example("駅はどこですか。", "Eki wa doko desuka.", "Ga tàu ở đâu?"),
      ]
    ),
    new GrammarPoint(
      "〜へ行きます。",
      "Cấu trúc diễn tả việc đi đến một nơi nào đó. '〜へ' (~e) là trợ từ chỉ hướng (đến), và '行きます' (ikimasu) là động từ 'đi' ở thể lịch sự.",
      [
        new Example(
          "学校へ行きます。",
          "Gakkou e ikimasu.",
          "Tôi đi đến trường."
        ),
        new Example(
          "東京へ行きます。",
          "Tokyo e ikimasu.",
          "Tôi đi đến Tokyo."
        ),
      ]
    ),
    new GrammarPoint(
      "〜で行きます。",
      "Cấu trúc diễn tả phương tiện đi lại. '〜で' (~de) là trợ từ chỉ phương tiện.",
      [
        new Example(
          "電車で行きます。",
          "Densha de ikimasu.",
          "Tôi đi bằng tàu điện."
        ),
        new Example(
          "タクシーで行きます。",
          "Takushii de ikimasu.",
          "Tôi đi bằng taxi."
        ),
      ]
    ),
    new GrammarPoint(
      "〜を右/左に曲がってください。",
      "Cấu trúc chỉ đường rẽ phải hoặc trái. '〜を' (~wo) là trợ từ chỉ đối tượng, '右/左に' (migi/hidari ni) là 'bên phải/trái', và '曲がってください' (magatte kudasai) là 'hãy rẽ' ở dạng lịch sự.",
      [
        new Example(
          "次の角を右に曲がってください。",
          "Tsugi no kado wo migi ni magatte kudasai.",
          "Hãy rẽ phải ở góc tiếp theo."
        ),
        new Example(
          "信号を左に曲がってください。",
          "Shingou wo hidari ni magatte kudasai.",
          "Hãy rẽ trái ở đèn giao thông."
        ),
      ]
    ),
    new GrammarPoint(
      "〜は〜の前/後ろ/隣/近くです。",
      "Cấu trúc diễn tả vị trí tương đối. '前' (mae) là 'trước', '後ろ' (ushiro) là 'sau', '隣' (tonari) là 'bên cạnh', và '近く' (chikaku) là 'gần'.",
      [
        new Example(
          "郵便局は銀行の隣です。",
          "Yuubinkyoku wa ginkou no tonari desu.",
          "Bưu điện ở bên cạnh ngân hàng."
        ),
        new Example(
          "公園は駅の近くです。",
          "Kouen wa eki no chikaku desu.",
          "Công viên ở gần ga tàu."
        ),
      ]
    ),
    new GrammarPoint(
      "〜から〜まで〜で行きます。",
      "Cấu trúc diễn tả việc đi từ một nơi đến một nơi khác bằng một phương tiện. '〜から' (~kara) là 'từ', '〜まで' (~made) là 'đến', và '〜で' (~de) là trợ từ chỉ phương tiện.",
      [
        new Example(
          "家から学校まで自転車で行きます。",
          "Ie kara gakkou made jitensha de ikimasu.",
          "Tôi đi từ nhà đến trường bằng xe đạp."
        ),
        new Example(
          "渋谷から新宿まで電車で行きます。",
          "Shibuya kara Shinjuku made densha de ikimasu.",
          "Tôi đi từ Shibuya đến Shinjuku bằng tàu điện."
        ),
      ]
    ),
  ],

  dialogues: [
    new Dialogue(
      "Hỏi đường đến ga tàu",
      [
        new DialogueExchange(
          "トゥアン (Tuan)",
          "すみません。駅はどこですか。",
          "Sumimasen. Eki wa doko desuka.",
          "Xin lỗi. Ga tàu ở đâu?"
        ),
        new DialogueExchange(
          "山田 (Yamada)",
          "駅ですか。ここから歩いて10分ぐらいです。",
          "Eki desuka. Koko kara aruite juppun gurai desu.",
          "Ga tàu à? Khoảng 10 phút đi bộ từ đây."
        ),
        new DialogueExchange(
          "トゥアン",
          "歩いて行くとき、どう行けばいいですか。",
          "Aruite iku toki, dou ikeba ii desuka.",
          "Khi đi bộ, tôi nên đi như thế nào?"
        ),
        new DialogueExchange(
          "山田",
          "この道をまっすぐ行って、二つ目の信号を右に曲がってください。それから、コンビニの前を通って、少し歩くと駅が見えます。",
          "Kono michi wo massugu itte, futatsume no shingou wo migi ni magatte kudasai. Sorekara, konbini no mae wo tootte, sukoshi aruku to eki ga miemasu.",
          "Đi thẳng con đường này, rẽ phải ở đèn giao thông thứ hai. Sau đó, đi qua trước cửa hàng tiện lợi, đi thêm một chút nữa là sẽ thấy ga."
        ),
        new DialogueExchange(
          "トゥアン",
          "二つ目の信号を右ですね。わかりました。ありがとうございます。",
          "Futatsume no shingou wo migi desu ne. Wakarimashita. Arigatou gozaimasu.",
          "Rẽ phải ở đèn giao thông thứ hai, đúng không? Tôi hiểu rồi. Cảm ơn nhiều."
        ),
        new DialogueExchange(
          "山田",
          "いいえ、どういたしまして。",
          "Iie, dou itashimashite.",
          "Không có gì."
        ),
      ],
      "Tình huống hỏi đường đến ga tàu. Chú ý cách sử dụng 'まっすぐ' (massugu) có nghĩa là 'đi thẳng' và '曲がる' (magaru) có nghĩa là 'rẽ'."
    ),
    new Dialogue(
      "Mua vé tàu",
      [
        new DialogueExchange(
          "アン (An)",
          "すみません。東京駅までの切符はいくらですか。",
          "Sumimasen. Tokyo eki made no kippu wa ikura desuka.",
          "Xin lỗi. Vé đến ga Tokyo giá bao nhiêu?"
        ),
        new DialogueExchange(
          "駅員 (Ekiin)",
          "東京駅ですね。片道で210円です。往復だと420円になります。",
          "Tokyo eki desu ne. Katamichi de nihyaku juu en desu. Oufuku dato yonhyaku nijuu en ni narimasu.",
          "Ga Tokyo phải không? Một chiều là 210 yên. Nếu khứ hồi thì sẽ là 420 yên."
        ),
        new DialogueExchange(
          "アン",
          "片道でお願いします。",
          "Katamichi de onegaishimasu.",
          "Một chiều ạ."
        ),
        new DialogueExchange(
          "駅員",
          "210円になります。",
          "Nihyaku juu en ni narimasu.",
          "210 yên."
        ),
        new DialogueExchange(
          "アン",
          "はい、どうぞ。東京駅まで何分ぐらいかかりますか。",
          "Hai, douzo. Tokyo eki made nanpun gurai kakarimasu ka.",
          "Vâng, đây ạ. Mất khoảng bao nhiêu phút để đến ga Tokyo?"
        ),
        new DialogueExchange(
          "駅員",
          "そうですね、急行で20分ぐらいです。各駅停車だと35分ぐらいかかります。",
          "Sou desu ne, kyuukou de nijuppun gurai desu. Kakueki teisha dato sanjuugofun gurai kakarimasu.",
          "Để xem, khoảng 20 phút nếu đi tàu nhanh. Nếu đi tàu dừng tất cả các ga thì mất khoảng 35 phút."
        ),
        new DialogueExchange(
          "アン",
          "わかりました。ありがとうございます。",
          "Wakarimashita. Arigatou gozaimasu.",
          "Tôi hiểu rồi. Cảm ơn nhiều."
        ),
      ],
      "Tình huống mua vé tàu. Chú ý từ '片道' (katamichi) có nghĩa là 'một chiều', '往復' (oufuku) là 'khứ hồi', '急行' (kyuukou) là 'tàu nhanh', và '各駅停車' (kakueki teisha) là 'tàu dừng tất cả các ga'."
    ),
  ],

  exercises: [
    new Exercise(
      "multiple-choice",
      "友達の家はどこですか。「友達の家は銀行の___です。」",
      ["前", "後ろ", "隣", "中"],
      "隣",
      "Chọn từ thích hợp để hoàn thành câu 'Nhà bạn tôi ở ___ ngân hàng.'"
    ),
    new Exercise(
      "fill-in-blank",
      "渋谷から新宿まで＿＿＿＿で行きます。",
      ["電車", "バス", "タクシー"],
      "電車",
      "Điền phương tiện giao thông thích hợp vào chỗ trống"
    ),
    new Exercise(
      "matching",
      "Nối các từ chỉ phương hướng với nghĩa tương ứng",
      [
        { japanese: "右", english: "Phải" },
        { japanese: "左", english: "Trái" },
        { japanese: "前", english: "Trước" },
        { japanese: "後ろ", english: "Sau" },
      ],
      "",
      "Hãy nối các từ chỉ phương hướng tiếng Nhật với nghĩa tiếng Việt tương ứng"
    ),
    new Exercise(
      "speaking",
      "Bạn đang ở trường và một người Nhật hỏi đường đến bưu điện gần nhất. Hãy chỉ đường cho họ bằng tiếng Nhật.",
      [],
      "",
      "Sử dụng cụm từ như 'まっすぐ行ってください' (Hãy đi thẳng), '右に曲がってください' (Hãy rẽ phải), '〜の前/隣です' (Ở trước/bên cạnh...)."
    ),
  ],

  culturalNotes: [
    new LessonSection(
      "Hệ thống giao thông công cộng ở Nhật Bản",
      [
        "Nhật Bản có một trong những hệ thống giao thông công cộng tốt nhất thế giới, đặc biệt là ở các thành phố lớn như Tokyo, Osaka và Kyoto. Tàu điện và tàu điện ngầm là phương tiện di chuyển phổ biến nhất trong thành phố, trong khi tàu cao tốc Shinkansen nối liền các thành phố lớn với tốc độ lên đến 320 km/h. Hệ thống này nổi tiếng với sự đúng giờ, sạch sẽ và hiệu quả. Ở Nhật, nếu tàu đến trễ hơn 5 phút, công ty đường sắt sẽ cấp giấy chứng nhận cho hành khách để giải thích lý do đi trễ với công ty hoặc trường học.",
      ],
      []
    ),
    new LessonSection(
      "Thẻ IC và hệ thống thanh toán",
      [
        "Ở Nhật Bản, thẻ IC như Suica, Pasmo (Tokyo), ICOCA (Osaka) là phương tiện thanh toán tiện lợi cho giao thông công cộng. Thay vì mua vé riêng cho mỗi chuyến đi, bạn có thể nạp tiền vào thẻ IC và chỉ cần quẹt thẻ khi vào và ra khỏi ga. Thẻ này cũng có thể dùng để mua đồ ăn, đồ uống ở máy bán hàng tự động, cửa hàng tiện lợi và nhiều cửa hàng khác. Đây là cách thuận tiện để du khách tránh phải mang nhiều tiền mặt và tiết kiệm thời gian mua vé.",
      ],
      []
    ),
  ],

  additionalResources: [
    {
      title: "Bản đồ hệ thống tàu điện Tokyo",
      url: "https://example.com/tokyo-train-map",
    },
    {
      title: "Hướng dẫn sử dụng thẻ Suica và Pasmo",
      url: "https://example.com/suica-pasmo-guide",
    },
    {
      title: "Ứng dụng Google Maps với chỉ đường tiếng Nhật",
      url: "https://example.com/google-maps-japan",
    },
  ],
});

export default lesson4;
