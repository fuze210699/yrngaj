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

const lesson7 = new Lesson({
  id: 7,
  title: "Hỏi về cuộc sống hàng ngày khi thăm nhà",
  description:
    "Học cách trò chuyện về cuộc sống hàng ngày khi thăm nhà người khác ở Nhật Bản. Bài học này giúp bạn duy trì cuộc đối thoại thân thiện và thể hiện sự quan tâm đến cuộc sống của chủ nhà.",

  objectives: [
    "Học cách hỏi thăm về cuộc sống hàng ngày bằng tiếng Nhật",
    "Hiểu cách đáp lại câu hỏi về thói quen và sinh hoạt",
    "Học từ vựng liên quan đến hoạt động thường ngày",
    "Nắm vững cách diễn đạt thời gian và tần suất của các hoạt động",
    "Phát triển khả năng duy trì cuộc trò chuyện lịch sự ở nhà người khác",
  ],

  introduction: [
    new LessonSection(
      "Giới thiệu",
      [
        "Khi đến thăm nhà ai đó ở Nhật Bản, việc trò chuyện về cuộc sống hàng ngày là cách tự nhiên để thể hiện sự quan tâm và xây dựng mối quan hệ. Tuy nhiên, cần lưu ý về mức độ cá nhân của các câu hỏi để tránh sự khiếm nhã. Trong bài học này, chúng ta sẽ học các cách hỏi thăm và đáp lại phù hợp về các chủ đề như công việc, sở thích, thói quen hàng ngày, và các hoạt động thường làm khi ở nhà. Những cuộc trò chuyện này giúp tạo bầu không khí thoải mái và thân thiện khi bạn là khách đến thăm nhà người Nhật.",
      ],
      []
    ),
  ],

  vocabulary: [
    new VocabularyItem("生活", "Seikatsu", "Cuộc sống", "Danh từ"),
    new VocabularyItem("仕事", "Shigoto", "Công việc", "Danh từ"),
    new VocabularyItem(
      "通勤",
      "Tsuukin",
      "Đi làm (việc đi lại hàng ngày)",
      "Danh từ"
    ),
    new VocabularyItem("通学", "Tsuugaku", "Đi học", "Danh từ"),
    new VocabularyItem("趣味", "Shumi", "Sở thích", "Danh từ"),
    new VocabularyItem("習慣", "Shuukan", "Thói quen", "Danh từ"),
    new VocabularyItem("平日", "Heijitsu", "Ngày thường", "Danh từ"),
    new VocabularyItem("週末", "Shuumatsu", "Cuối tuần", "Danh từ"),
    new VocabularyItem("休日", "Kyuujitsu", "Ngày nghỉ", "Danh từ"),
    new VocabularyItem("毎日", "Mainichi", "Hàng ngày", "Danh từ"),
    new VocabularyItem("毎週", "Maishuu", "Hàng tuần", "Danh từ"),
    new VocabularyItem("時間", "Jikan", "Thời gian", "Danh từ"),
    new VocabularyItem("家族", "Kazoku", "Gia đình", "Danh từ"),
    new VocabularyItem("子供", "Kodomo", "Con cái, trẻ em", "Danh từ"),
    new VocabularyItem("料理", "Ryouri", "Nấu ăn, món ăn", "Danh từ"),
    new VocabularyItem("掃除", "Souji", "Dọn dẹp", "Danh từ"),
    new VocabularyItem("買い物", "Kaimono", "Mua sắm", "Danh từ"),
    new VocabularyItem("散歩", "Sanpo", "Đi dạo", "Danh từ"),
    new VocabularyItem("起きる", "Okiru", "Thức dậy", "Động từ nhóm 2"),
    new VocabularyItem("寝る", "Neru", "Đi ngủ", "Động từ nhóm 2"),
    new VocabularyItem("働く", "Hataraku", "Làm việc", "Động từ nhóm 1"),
    new VocabularyItem("勉強する", "Benkyou suru", "Học", "Động từ nhóm 3"),
    new VocabularyItem("料理する", "Ryouri suru", "Nấu ăn", "Động từ nhóm 3"),
    new VocabularyItem("掃除する", "Souji suru", "Dọn dẹp", "Động từ nhóm 3"),
    new VocabularyItem("忙しい", "Isogashii", "Bận rộn", "Tính từ -i"),
    new VocabularyItem("大変", "Taihen", "Vất vả, khó khăn", "Tính từ -na"),
    new VocabularyItem("楽しい", "Tanoshii", "Vui vẻ", "Tính từ -i"),
    new VocabularyItem("よく", "Yoku", "Thường xuyên", "Phó từ"),
    new VocabularyItem("時々", "Tokidoki", "Thỉnh thoảng", "Phó từ"),
    new VocabularyItem("だいたい", "Daitai", "Đại khái, khoảng", "Phó từ"),
  ],

  grammar: [
    new GrammarPoint(
      "〜は何時に〜ますか",
      "Cấu trúc để hỏi về thời gian của một hoạt động. '〜は' (~wa) là trợ từ chỉ chủ đề, '何時に' (nanji ni) là 'mấy giờ', và '〜ますか' (~masuka) là trợ từ nghi vấn ở thể lịch sự.",
      [
        new Example(
          "毎日何時に起きますか。",
          "Mainichi nanji ni okimasu ka.",
          "Hàng ngày bạn thức dậy lúc mấy giờ?"
        ),
        new Example(
          "週末は何時に寝ますか。",
          "Shuumatsu wa nanji ni nemasu ka.",
          "Cuối tuần bạn đi ngủ lúc mấy giờ?"
        ),
      ]
    ),
    new GrammarPoint(
      "どのぐらい〜ますか",
      "Cấu trúc để hỏi về khoảng thời gian hoặc tần suất của một hoạt động. 'どのぐらい' (dono gurai) có nghĩa là 'bao lâu/bao nhiêu'.",
      [
        new Example(
          "毎日どのぐらい働きますか。",
          "Mainichi dono gurai hatarakimasu ka.",
          "Mỗi ngày bạn làm việc trong bao lâu?"
        ),
        new Example(
          "週末はどのぐらい勉強しますか。",
          "Shuumatsu wa dono gurai benkyou shimasu ka.",
          "Cuối tuần bạn học trong bao lâu?"
        ),
      ]
    ),
    new GrammarPoint(
      "どうやって〜ますか",
      "Cấu trúc để hỏi về cách thức thực hiện một hoạt động. 'どうやって' (dou yatte) có nghĩa là 'bằng cách nào'.",
      [
        new Example(
          "どうやって会社へ行きますか。",
          "Dou yatte kaisha e ikimasu ka.",
          "Bạn đi đến công ty bằng cách nào?"
        ),
        new Example(
          "どうやって日本語を勉強しますか。",
          "Dou yatte nihongo wo benkyou shimasu ka.",
          "Bạn học tiếng Nhật bằng cách nào?"
        ),
      ]
    ),
    new GrammarPoint(
      "〜はどうですか",
      "Cấu trúc để hỏi ý kiến hoặc cảm nhận về một chủ đề. '〜は' (~wa) là trợ từ chỉ chủ đề, và 'どうですか' (dou desu ka) có nghĩa là 'thế nào'.",
      [
        new Example(
          "日本の生活はどうですか。",
          "Nihon no seikatsu wa dou desu ka.",
          "Cuộc sống ở Nhật thế nào?"
        ),
        new Example(
          "新しい仕事はどうですか。",
          "Atarashii shigoto wa dou desu ka.",
          "Công việc mới thế nào?"
        ),
      ]
    ),
    new GrammarPoint(
      "よく/時々/たまに〜ます",
      "Cấu trúc diễn tả tần suất của một hoạt động. 'よく' (yoku) là 'thường xuyên', '時々' (tokidoki) là 'thỉnh thoảng', 'たまに' (tamani) là 'hiếm khi'.",
      [
        new Example(
          "週末によく公園へ行きます。",
          "Shuumatsu ni yoku kouen e ikimasu.",
          "Cuối tuần tôi thường đi công viên."
        ),
        new Example(
          "時々レストランで食べます。",
          "Tokidoki resutoran de tabemasu.",
          "Thỉnh thoảng tôi ăn ở nhà hàng."
        ),
      ]
    ),
  ],

  dialogues: [
    new Dialogue(
      "Trò chuyện về công việc và thói quen hàng ngày",
      [
        new DialogueExchange(
          "田中 (Tanaka)",
          "リンさんは普段何時に起きますか。",
          "Rin-san wa fudan nanji ni okimasu ka.",
          "Chị Linh thường thức dậy lúc mấy giờ?"
        ),
        new DialogueExchange(
          "リン (Linh)",
          "平日は6時に起きて、8時に家を出ます。",
          "Heijitsu wa rokuji ni okite, hachiji ni ie wo demasu.",
          "Ngày thường tôi thức dậy lúc 6 giờ và rời nhà lúc 8 giờ."
        ),
        new DialogueExchange(
          "田中",
          "会社までどのぐらいかかりますか。",
          "Kaisha made dono gurai kakarimasu ka.",
          "Mất bao lâu để đến công ty?"
        ),
        new DialogueExchange(
          "リン",
          "電車で30分ぐらいです。田中さんは？",
          "Densha de sanjuppun gurai desu. Tanaka-san wa?",
          "Khoảng 30 phút bằng tàu điện. Còn anh Tanaka?"
        ),
        new DialogueExchange(
          "田中",
          "私は家から近いので、自転車で15分ぐらいです。",
          "Watashi wa ie kara chikai node, jitensha de juugofun gurai desu.",
          "Vì nhà tôi gần nên mất khoảng 15 phút đi xe đạp."
        ),
        new DialogueExchange(
          "リン",
          "いいですね。仕事は忙しいですか。",
          "Ii desu ne. Shigoto wa isogashii desu ka.",
          "Tốt quá nhỉ. Công việc có bận không?"
        ),
        new DialogueExchange(
          "田中",
          "ええ、最近はとても忙しいです。でも楽しいですよ。リンさんの仕事はどうですか。",
          "Ee, saikin wa totemo isogashii desu. Demo tanoshii desu yo. Rin-san no shigoto wa dou desu ka.",
          "Vâng, gần đây rất bận. Nhưng mà vui. Công việc của chị Linh thế nào?"
        ),
        new DialogueExchange(
          "リン",
          "私の仕事も忙しいですが、やりがいがありますよ。",
          "Watashi no shigoto mo isogashii desu ga, yarigai ga arimasu yo.",
          "Công việc của tôi cũng bận, nhưng mà có ý nghĩa."
        ),
      ],
      "Tình huống trò chuyện về thói quen hàng ngày và công việc. Chú ý cách sử dụng '普段' (fudan) có nghĩa là 'thường ngày', và cách hỏi đáp về thời gian và khoảng cách."
    ),
    new Dialogue(
      "Nói về cuộc sống gia đình và thời gian rảnh",
      [
        new DialogueExchange(
          "鈴木 (Suzuki)",
          "ナムさんは週末に何をしますか。",
          "Namu-san wa shuumatsu ni nani wo shimasu ka.",
          "Anh Nam làm gì vào cuối tuần?"
        ),
        new DialogueExchange(
          "ナム (Nam)",
          "土曜日は子供と公園へ行くことが多いです。日曜日は家族と買い物に行きます。",
          "Doyoubi wa kodomo to kouen e iku koto ga ooi desu. Nichiyoubi wa kazoku to kaimono ni ikimasu.",
          "Thứ bảy tôi thường đưa con đi công viên. Chủ nhật tôi đi mua sắm với gia đình."
        ),
        new DialogueExchange(
          "鈴木",
          "お子さんは何歳ですか。",
          "Okosan wa nansai desu ka.",
          "Con của anh mấy tuổi?"
        ),
        new DialogueExchange(
          "ナム",
          "息子は7歳で、娘は4歳です。",
          "Musuko wa nanasai de, musume wa yonsai desu.",
          "Con trai 7 tuổi, con gái 4 tuổi."
        ),
        new DialogueExchange(
          "鈴木",
          "かわいい盛りですね。趣味は何ですか。",
          "Kawaii sakari desu ne. Shumi wa nan desu ka.",
          "Đúng là độ tuổi dễ thương nhỉ. Sở thích của anh là gì?"
        ),
        new DialogueExchange(
          "ナム",
          "料理が好きなので、よく家で料理します。鈴木さんは趣味がありますか。",
          "Ryouri ga suki nanode, yoku ie de ryouri shimasu. Suzuki-san wa shumi ga arimasu ka.",
          "Tôi thích nấu ăn, nên thường nấu ở nhà. Chị Suzuki có sở thích gì không?"
        ),
        new DialogueExchange(
          "鈴木",
          "私は写真を撮ることが好きです。時々カメラを持って散歩します。",
          "Watashi wa shashin wo toru koto ga suki desu. Tokidoki kamera wo motte sanpo shimasu.",
          "Tôi thích chụp ảnh. Thỉnh thoảng tôi mang máy ảnh đi dạo."
        ),
      ],
      "Tình huống trò chuyện về cuộc sống gia đình và sở thích. Chú ý cách sử dụng '〜ことが多い' (~koto ga ooi) có nghĩa là 'thường xuyên làm gì', và các từ chỉ thành viên gia đình như '息子' (musuko - con trai) và '娘' (musume - con gái)."
    ),
  ],

  exercises: [
    new Exercise(
      "multiple-choice",
      "「毎日何時に起きますか」の答えとして最も適切なのはどれですか。",
      [
        "私は6時に起きます。",
        "私は公園に行きます。",
        "私は電車で行きます。",
        "私はよく寝ます。",
      ],
      "私は6時に起きます。",
      "Khi được hỏi 'Hàng ngày bạn thức dậy lúc mấy giờ?', câu trả lời phù hợp nhất là 'Tôi thức dậy lúc 6 giờ.'"
    ),
    new Exercise(
      "fill-in-blank",
      "週末は家族と＿＿＿＿ことが多いです。",
      ["買い物する", "通勤する", "仕事する"],
      "買い物する",
      "Điền từ thích hợp để hoàn thành câu 'Cuối tuần tôi thường ___ với gia đình.'"
    ),
    new Exercise(
      "matching",
      "Nối các từ chỉ tần suất với nghĩa tương ứng",
      [
        { japanese: "よく", english: "Thường xuyên" },
        { japanese: "時々", english: "Thỉnh thoảng" },
        { japanese: "たまに", english: "Hiếm khi" },
        { japanese: "毎日", english: "Hàng ngày" },
      ],
      "",
      "Hãy nối các từ chỉ tần suất trong tiếng Nhật với nghĩa tiếng Việt tương ứng"
    ),
    new Exercise(
      "speaking",
      "Hãy mô tả thói quen hàng ngày của bạn bằng tiếng Nhật, bao gồm giờ thức dậy, đi làm/học, và các hoạt động thường làm.",
      [],
      "",
      "Sử dụng các từ như '起きる' (okiru - thức dậy), '通勤/通学する' (tsuukin/tsuugaku suru - đi làm/đi học), '食べる' (taberu - ăn) và mô tả thời gian bằng '〜時に' (~ji ni - lúc ... giờ)."
    ),
  ],

  culturalNotes: [
    new LessonSection(
      "Chủ đề phù hợp khi trò chuyện tại nhà người Nhật",
      [
        "Khi trò chuyện tại nhà người Nhật, có một số chủ đề được coi là an toàn và phù hợp, như công việc, sở thích, thời tiết, món ăn yêu thích, hay du lịch. Tuy nhiên, nên tránh các câu hỏi quá cá nhân như thu nhập, tình trạng hôn nhân (trừ khi đã thân thiết), tôn giáo, hay chính trị. Người Nhật thường ngại ngùng khi nói về những vấn đề cá nhân với người mới quen. Nếu bạn không chắc chắn, hãy để chủ nhà dẫn dắt cuộc trò chuyện và theo những chủ đề họ đưa ra. Đặc biệt, khi được mời đến nhà, lời khen ngợi về ngôi nhà hoặc đồ đạc trong nhà thường được đánh giá cao.",
      ],
      []
    ),
    new LessonSection(
      "Work-life balance trong xã hội Nhật Bản",
      [
        "Xã hội Nhật Bản truyền thống được biết đến với nền văn hóa làm việc chăm chỉ, thường dẫn đến hiện tượng 'karoshi' (過労死) - tử vong do làm việc quá sức. Tuy nhiên, trong những năm gần đây, chính phủ và các công ty Nhật Bản đã có nhiều nỗ lực để cải thiện cân bằng giữa công việc và cuộc sống (work-life balance). Các chính sách như 'Premium Friday' (cho phép nhân viên kết thúc công việc sớm vào thứ Sáu cuối mỗi tháng) và các luật hạn chế làm thêm giờ đã được đưa ra. Dù vậy, với nhiều người Nhật, đặc biệt là thế hệ lớn tuổi, công việc vẫn chiếm một phần quan trọng trong cuộc sống và bản sắc cá nhân. Khi trò chuyện về công việc, nên thể hiện sự tôn trọng với đạo đức làm việc của người Nhật và hiểu rằng với họ, đóng góp cho công việc là một giá trị đáng tự hào.",
      ],
      []
    ),
  ],

  additionalResources: [
    {
      title: "Từ vựng về hoạt động hàng ngày",
      url: "https://example.com/japanese-daily-activities-vocabulary",
    },
    {
      title: "Video: Một ngày của người Nhật",
      url: "https://example.com/day-in-life-japanese-video",
    },
    {
      title: "Hướng dẫn trò chuyện lịch sự với người Nhật",
      url: "https://example.com/polite-conversation-japanese-guide",
    },
  ],
});

export default lesson7;
