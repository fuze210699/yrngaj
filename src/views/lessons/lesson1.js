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

const lesson1 = new Lesson({
  id: 1,
  title: "Chào hỏi và giới thiệu bản thân",
  description: "Học cách chào hỏi và giới thiệu bản thân trong tiếng Nhật. Bài học này bao gồm các lời chào phổ biến, cách tự giới thiệu tên, nghề nghiệp và quốc tịch.",
  
  objectives: [
    "Sử dụng các lời chào phổ biến vào đúng thời điểm trong ngày",
    "Tự giới thiệu bản thân bằng tiếng Nhật",
    "Hỏi và nói về tên, quốc tịch và nghề nghiệp",
    "Hiểu và sử dụng các cách kết thúc hội thoại phổ biến"
  ],
  
  introduction: [
    new LessonSection(
      "Giới thiệu", 
      ["Trong văn hóa Nhật Bản, chào hỏi và giới thiệu bản thân đúng cách rất quan trọng. Người Nhật thường cúi đầu khi chào nhau, đặc biệt là trong các tình huống trang trọng. Khi tự giới thiệu, người Nhật thường nói họ tên, tiếp theo là thông tin khác như công ty, trường học, hoặc nơi sinh sống."],
      []
    )
  ],
  
  vocabulary: [
    new VocabularyItem("おはようございます", "Ohayou gozaimasu", "Chào buổi sáng", "Lời chào", "Sử dụng buổi sáng đến khoảng 10h30"),
    new VocabularyItem("こんにちは", "Konnichiwa", "Xin chào", "Lời chào", "Sử dụng từ buổi trưa đến chiều tối"),
    new VocabularyItem("こんばんは", "Konbanwa", "Chào buổi tối", "Lời chào", "Sử dụng vào buổi tối"),
    new VocabularyItem("さようなら", "Sayounara", "Tạm biệt", "Lời chào", "Sử dụng khi chia tay lâu dài"),
    new VocabularyItem("ごめんなさい", "Gomennasai", "Xin lỗi", "Lời xin lỗi"),
    new VocabularyItem("ありがとうございます", "Arigatou gozaimasu", "Cảm ơn", "Lời cảm ơn"),
    new VocabularyItem("はじめまして", "Hajimemashite", "Rất vui được gặp bạn (lần đầu)", "Lời chào"),
    new VocabularyItem("よろしくおねがいします", "Yoroshiku onegaishimasu", "Rất mong được làm quen với bạn", "Cụm từ"),
    new VocabularyItem("私", "Watashi", "Tôi", "Đại từ"),
    new VocabularyItem("わたしのなまえは〜です", "Watashi no namae wa ... desu", "Tên tôi là ...", "Cụm từ"),
    new VocabularyItem("〜から来ました", "... kara kimashita", "Tôi đến từ ...", "Cụm từ"),
    new VocabularyItem("日本", "Nihon", "Nhật Bản", "Danh từ"),
    new VocabularyItem("アメリカ", "Amerika", "Mỹ", "Danh từ"),
    new VocabularyItem("ベトナム", "Betonamu", "Việt Nam", "Danh từ"),
    new VocabularyItem("学生", "Gakusei", "Học sinh/Sinh viên", "Danh từ"),
    new VocabularyItem("会社員", "Kaishain", "Nhân viên công ty", "Danh từ"),
    new VocabularyItem("教師", "Kyoushi", "Giáo viên", "Danh từ"),
    new VocabularyItem("医者", "Isha", "Bác sĩ", "Danh từ")
  ],
  
  grammar: [
    new GrammarPoint(
      "わたしは [Tên] です。",
      "Mẫu câu cơ bản để giới thiệu tên. 'わたし' (watashi) có nghĩa là 'tôi', 'は' (wa) là trợ từ chỉ chủ đề, và 'です' (desu) là 'là'. Khi bạn giới thiệu tên, bạn thường bắt đầu bằng 'わたし'.",
      [
        new Example("わたしはマイクです。", "Watashi wa Maiku desu.", "Tôi là Mike."),
        new Example("わたしはたなかです。", "Watashi wa Tanaka desu.", "Tôi là Tanaka.")
      ]
    ),
    new GrammarPoint(
      "わたしは [Quốc tịch/Nghề nghiệp] です。",
      "Cùng cấu trúc với giới thiệu tên, nhưng thay thế tên bằng quốc tịch hoặc nghề nghiệp.",
      [
        new Example("わたしはベトナム人です。", "Watashi wa Betonamu-jin desu.", "Tôi là người Việt Nam."),
        new Example("わたしは学生です。", "Watashi wa gakusei desu.", "Tôi là sinh viên.")
      ]
    ),
    new GrammarPoint(
      "わたしは [Quốc gia] から来ました。",
      "'から' (kara) có nghĩa là 'từ', '来ました' (kimashita) là thì quá khứ của 'đến'. Dùng để nói mình đến từ đâu.",
      [
        new Example("わたしはベトナムから来ました。", "Watashi wa Betonamu kara kimashita.", "Tôi đến từ Việt Nam.")
      ]
    ),
    new GrammarPoint(
      "はじめまして。どうぞよろしくおねがいします。",
      "Cụm từ này sử dụng khi lần đầu gặp ai đó. 'はじめまして' (Hajimemashite) nghĩa là 'rất vui được gặp bạn' và 'どうぞよろしくおねがいします' (Douzo yoroshiku onegaishimasu) nghĩa là 'rất mong được làm quen'.",
      [
        new Example("はじめまして。わたしはマリアです。どうぞよろしくおねがいします。", "Hajimemashite. Watashi wa Maria desu. Douzo yoroshiku onegaishimasu.", "Rất vui được gặp bạn. Tôi là Maria. Rất mong được làm quen.")
      ]
    )
  ],
  
  dialogues: [
    new Dialogue(
      "Giới thiệu bản thân trong lớp học",
      [
        new DialogueExchange("先生 (Giáo viên)", "みなさん、おはようございます。", "Minna-san, ohayou gozaimasu.", "Chào buổi sáng các em."),
        new DialogueExchange("学生たち (Học sinh)", "おはようございます、先生。", "Ohayou gozaimasu, sensei.", "Chào buổi sáng, thầy/cô."),
        new DialogueExchange("先生", "新しい学生を紹介します。リンさん、どうぞ。", "Atarashii gakusei wo shoukai shimasu. Rin-san, douzo.", "Tôi giới thiệu một học sinh mới. Rin, mời em."),
        new DialogueExchange("リン (Linh)", "はじめまして。わたしはリンです。ベトナムから来ました。わたしは学生です。どうぞよろしくおねがいします。", "Hajimemashite. Watashi wa Rin desu. Betonamu kara kimashita. Watashi wa gakusei desu. Douzo yoroshiku onegaishimasu.", "Rất vui được gặp mọi người. Tôi là Linh. Tôi đến từ Việt Nam. Tôi là sinh viên. Rất mong được làm quen."),
        new DialogueExchange("学生たち", "よろしくおねがいします。", "Yoroshiku onegaishimasu.", "Rất vui được làm quen.")
      ],
      "Đây là một tình huống điển hình khi một học sinh mới giới thiệu bản thân trong lớp học. Chú ý cách sử dụng các từ và cụm từ lịch sự."
    ),
    new Dialogue(
      "Gặp gỡ lần đầu tại công ty",
      [
        new DialogueExchange("田中 (Tanaka)", "こんにちは。", "Konnichiwa.", "Xin chào."),
        new DialogueExchange("ナム (Nam)", "こんにちは。", "Konnichiwa.", "Xin chào."),
        new DialogueExchange("田中", "はじめまして。わたしは田中です。", "Hajimemashite. Watashi wa Tanaka desu.", "Rất vui được gặp bạn. Tôi là Tanaka."),
        new DialogueExchange("ナム", "はじめまして。わたしはナムです。ベトナムから来ました。", "Hajimemashite. Watashi wa Namu desu. Betonamu kara kimashita.", "Rất vui được gặp bạn. Tôi là Nam. Tôi đến từ Việt Nam."),
        new DialogueExchange("田中", "ベトナム人ですか。日本語が上手ですね。", "Betonamu-jin desuka. Nihongo ga jouzu desune.", "Bạn là người Việt Nam à? Tiếng Nhật của bạn giỏi quá."),
        new DialogueExchange("ナム", "いいえ、まだまだです。どうぞよろしくおねがいします。", "Iie, mada mada desu. Douzo yoroshiku onegaishimasu.", "Không đâu, tôi còn kém lắm. Rất mong được làm quen."),
        new DialogueExchange("田中", "こちらこそ、よろしくおねがいします。", "Kochira koso, yoroshiku onegaishimasu.", "Tôi cũng rất mong được làm quen.")
      ],
      "Tình huống hai người gặp nhau lần đầu tại công ty. Chú ý cách người Nhật thường khiêm tốn khi được khen (まだまだです)."
    )
  ],
  
  exercises: [
    new Exercise(
      "multiple-choice",
      "Bạn gặp giáo viên của mình vào buổi sáng, bạn nên nói gì?",
      ["おはようございます", "こんにちは", "こんばんは", "さようなら"],
      "おはようございます",
      "Buổi sáng nên dùng おはようございます (ohayou gozaimasu)"
    ),
    new Exercise(
      "fill-in-blank",
      "わたしは__________です。", 
      ["から来ました", "学生", "はじめまして"],
      "学生",
      "Điền từ thích hợp để hoàn thành câu 'Tôi là học sinh'"
    ),
    new Exercise(
      "matching",
      "Nối các từ với nghĩa tương ứng",
      [
        { japanese: "はじめまして", english: "Rất vui được gặp bạn" },
        { japanese: "ありがとうございます", english: "Cảm ơn" },
        { japanese: "よろしくおねがいします", english: "Rất mong được làm quen" },
        { japanese: "ごめんなさい", english: "Xin lỗi" }
      ],
      "",
      "Hãy nối các từ/cụm từ tiếng Nhật với nghĩa tiếng Việt tương ứng"
    ),
    new Exercise(
      "speaking",
      "Hãy tự giới thiệu bản thân bằng tiếng Nhật, bao gồm: tên, quốc tịch và nghề nghiệp.",
      [],
      "",
      "Sử dụng mẫu: はじめまして。わたしは＿＿です。＿＿から来ました。わたしは＿＿です。どうぞよろしくおねがいします。"
    )
  ],
  
  culturalNotes: [
    new LessonSection(
      "Cúi chào trong văn hóa Nhật Bản",
      ["Người Nhật thường cúi đầu khi chào hỏi thay vì bắt tay. Độ sâu của việc cúi đầu thể hiện mức độ tôn trọng. Cúi đầu nhẹ (khoảng 15 độ) cho người cùng cấp, cúi sâu hơn (khoảng 30 độ) cho người lớn tuổi hoặc cấp trên, và cúi rất sâu (khoảng 45 độ hoặc hơn) trong các tình huống trang trọng hoặc xin lỗi."],
      []
    ),
    new LessonSection(
      "Meishi - Danh thiếp",
      ["Trong môi trường kinh doanh Nhật Bản, trao đổi danh thiếp (名刺 - meishi) là một nghi thức quan trọng khi gặp gỡ lần đầu. Bạn nên trao và nhận danh thiếp bằng hai tay, cúi đầu nhẹ, và dành thời gian đọc thông tin trên danh thiếp trước khi cất đi."],
      []
    )
  ],
  
  additionalResources: [
    {
      title: "Video: Cách chào hỏi trong tiếng Nhật",
      url: "https://example.com/japanese-greetings-video"
    },
    {
      title: "Thẻ ghi nhớ lời chào tiếng Nhật",
      url: "https://example.com/japanese-greetings-flashcards"
    },
    {
      title: "Bài tập thêm về tự giới thiệu",
      url: "https://example.com/japanese-self-introduction-exercises"
    }
  ]
});

export default lesson1; 