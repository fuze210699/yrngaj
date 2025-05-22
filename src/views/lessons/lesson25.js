import { Lesson, LessonSection, Example, VocabularyItem, GrammarPoint, Dialogue, DialogueExchange, Exercise } from './LessonModel';

const lesson25 = new Lesson({
  id: 25,
  title: "Tổng kết và luyện tập hội thoại thực tế",
  description: "Ôn tập, củng cố các chủ đề đã học từ bài 1 đến 24, luyện tập hội thoại thực tế, phản xạ giao tiếp và ứng dụng kiến thức vào các tình huống đa dạng.",
  objectives: [
    "Ôn tập từ vựng, ngữ pháp và mẫu câu quan trọng từ các bài trước",
    "Luyện tập hội thoại thực tế với nhiều chủ đề khác nhau",
    "Phát triển kỹ năng phản xạ giao tiếp và ứng dụng kiến thức",
    "Tự tin giao tiếp trong các tình huống hàng ngày",
    "Hiểu sâu hơn về văn hóa và giao tiếp thực tế tại Nhật Bản"
  ],
  introduction: [
    new LessonSection(
      "Giới thiệu",
      ["Bài học này giúp bạn tổng kết, củng cố lại toàn bộ kiến thức đã học và luyện tập hội thoại thực tế. Bạn sẽ được thực hành các tình huống đa dạng, sử dụng từ vựng, ngữ pháp và mẫu câu đã học để giao tiếp tự nhiên và hiệu quả."],
      []
    )
  ],
  vocabulary: [
    new VocabularyItem("復習", "Fukushū", "Ôn tập", "Danh từ"),
    new VocabularyItem("会話", "Kaiwa", "Hội thoại", "Danh từ"),
    new VocabularyItem("練習", "Renshū", "Luyện tập", "Danh từ"),
    new VocabularyItem("実際", "Jissai", "Thực tế", "Danh từ"),
    new VocabularyItem("応用", "Ōyō", "Ứng dụng", "Danh từ"),
    new VocabularyItem("自信", "Jishin", "Tự tin", "Danh từ"),
    new VocabularyItem("挑戦", "Chōsen", "Thử thách", "Danh từ"),
    new VocabularyItem("成功", "Seikō", "Thành công", "Danh từ"),
    new VocabularyItem("失敗", "Shippai", "Thất bại", "Danh từ"),
    new VocabularyItem("改善", "Kaizen", "Cải thiện", "Danh từ"),
    new VocabularyItem("目標", "Mokuhyō", "Mục tiêu", "Danh từ"),
    new VocabularyItem("達成", "Tassei", "Đạt được", "Danh từ"),
    new VocabularyItem("経験", "Keiken", "Kinh nghiệm", "Danh từ"),
    new VocabularyItem("役に立つ", "Yaku ni tatsu", "Có ích", "Cụm từ"),
    new VocabularyItem("使う", "Tsukau", "Sử dụng", "Động từ nhóm 1"),
    new VocabularyItem("話す", "Hanasu", "Nói chuyện", "Động từ nhóm 1"),
    new VocabularyItem("聞く", "Kiku", "Nghe", "Động từ nhóm 1"),
    new VocabularyItem("読む", "Yomu", "Đọc", "Động từ nhóm 1"),
    new VocabularyItem("書く", "Kaku", "Viết", "Động từ nhóm 1")
  ],
  grammar: [
    new GrammarPoint(
      "Ôn tập các cấu trúc ngữ pháp quan trọng",
      "Tổng hợp các cấu trúc ngữ pháp đã học từ bài 1 đến 24, nhấn mạnh cách sử dụng trong hội thoại thực tế.",
      [
        new Example("〜たいです", "Muốn làm gì"),
        new Example("〜てもいいですか", "Có được phép làm gì không?"),
        new Example("〜と思います", "Tôi nghĩ rằng~"),
        new Example("〜たことがあります", "Đã từng làm gì"),
        new Example("〜し、〜し", "Liệt kê lý do")
      ]
    )
  ],
  dialogues: [
    new Dialogue(
      "Luyện tập hội thoại tổng hợp",
      [
        new DialogueExchange("ナム (Nam)", "最近、日本語の勉強はどうですか。", "Saikin, Nihongo no benkyō wa dō desu ka.", "Dạo này việc học tiếng Nhật của bạn thế nào?"),
        new DialogueExchange("アン (An)", "毎日練習しているので、少し自信がつきました。", "Mainichi renshū shite iru node, sukoshi jishin ga tsukimashita.", "Vì luyện tập mỗi ngày nên mình đã tự tin hơn một chút."),
        new DialogueExchange("ナム", "すごいですね。どんな方法で勉強していますか。", "Sugoi desu ne. Donna hōhō de benkyō shite imasu ka.", "Hay quá. Bạn học bằng cách nào?"),
        new DialogueExchange("アン", "会話の練習をたくさんしています。", "Kaiwa no renshū wo takusan shite imasu.", "Mình luyện tập hội thoại rất nhiều."),
        new DialogueExchange("ナム", "私ももっと練習しようと思います。", "Watashi mo motto renshū shiyō to omoimasu.", "Mình cũng sẽ cố gắng luyện tập nhiều hơn.")
      ],
      "Tình huống luyện tập hội thoại tổng hợp, sử dụng các mẫu câu đã học."
    ),
    new Dialogue(
      "Ứng dụng kiến thức vào thực tế",
      [
        new DialogueExchange("ハイ (Hai)", "今度、日本に旅行に行く予定です。", "Kondo, Nihon ni ryokō ni iku yotei desu.", "Sắp tới mình dự định đi du lịch Nhật Bản."),
        new DialogueExchange("リン (Linh)", "いいですね。日本で何をしたいですか。", "Ii desu ne. Nihon de nani wo shitai desu ka.", "Hay quá. Bạn muốn làm gì ở Nhật?"),
        new DialogueExchange("ハイ", "いろいろな場所を見たり、美味しいものを食べたりしたいです。", "Iroiro na basho wo mitari, oishii mono wo tabetari shitai desu.", "Mình muốn đi nhiều nơi, ăn nhiều món ngon."),
        new DialogueExchange("リン", "役に立つ表現をたくさん使ってみてくださいね。", "Yaku ni tatsu hyōgen wo takusan tsukatte mite kudasai ne.", "Hãy thử sử dụng nhiều mẫu câu hữu ích nhé."),
        new DialogueExchange("ハイ", "はい、頑張ります！", "Hai, ganbarimasu!", "Vâng, mình sẽ cố gắng!")
      ],
      "Tình huống ứng dụng kiến thức vào thực tế. Chú ý sử dụng các mẫu câu đã học để giao tiếp tự nhiên."
    )
  ],
  exercises: [
    new Exercise(
      "multiple-choice",
      "「会話の練習をたくさんしています」は gì?",
      ["Tôi luyện tập hội thoại rất nhiều.", "Tôi học từ vựng.", "Tôi đọc sách.", "Tôi viết thư."],
      "Tôi luyện tập hội thoại rất nhiều.",
      "Câu này sử dụng từ vựng và mẫu câu đã học để nói về luyện tập hội thoại."
    ),
    new Exercise(
      "fill-in-blank",
      "「もっと___しようと思います」と nói khi muốn luyện tập nhiều hơn. Điền từ thích hợp:",
      ["練習", "勉強", "会話"],
      "練習",
      "Điền từ thích hợp để hoàn thành câu nói về ý định luyện tập nhiều hơn."
    ),
    new Exercise(
      "matching",
      "Nối các từ về luyện tập, hội thoại với ý nghĩa tương ứng",
      [
        { japanese: "復習", english: "Ôn tập" },
        { japanese: "会話", english: "Hội thoại" },
        { japanese: "練習", english: "Luyện tập" },
        { japanese: "応用", english: "Ứng dụng" }
      ],
      "",
      "Nối các từ về luyện tập, hội thoại tiếng Nhật với nghĩa tiếng Việt tương ứng."
    ),
    new Exercise(
      "role-play",
      "Đóng vai hai người luyện tập hội thoại thực tế về một chủ đề tự chọn, sử dụng các mẫu câu đã học từ các bài trước.",
      [],
      "",
      "Sử dụng các mẫu câu, từ vựng và ngữ pháp đã học để giao tiếp tự nhiên."
    )
  ],
  culturalNotes: [
    new LessonSection(
      "Luyện tập hội thoại và ứng dụng thực tế tại Nhật Bản",
      ["Việc luyện tập hội thoại thực tế giúp bạn tự tin hơn khi giao tiếp tại Nhật Bản. Hãy tận dụng mọi cơ hội để nói chuyện với người Nhật, tham gia các câu lạc bộ, hoạt động ngoại khóa hoặc giao lưu với bạn bè. Việc sử dụng kiến thức đã học vào thực tế sẽ giúp bạn tiến bộ nhanh chóng và hiểu sâu hơn về văn hóa Nhật Bản."],
      []
    )
  ],
  additionalResources: [
    {
      title: "Tổng hợp các mẫu câu giao tiếp thực tế trong tiếng Nhật",
      url: "https://example.com/japanese-real-conversation"
    },
    {
      title: "Cách luyện tập hội thoại hiệu quả với người Nhật",
      url: "https://example.com/japanese-conversation-practice"
    },
    {
      title: "Kinh nghiệm học tiếng Nhật thực tế tại Nhật Bản",
      url: "https://example.com/japanese-learning-experience"
    }
  ]
});

export default lesson25; 