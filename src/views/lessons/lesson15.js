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

const lesson15 = new Lesson({
  id: 15,
  title: "Hiểu hướng dẫn sử dụng đơn giản",
  description:
    "Học cách hiểu và làm theo các hướng dẫn sử dụng đơn giản bằng tiếng Nhật. Bài học này giúp bạn nắm vững từ vựng và cấu trúc câu liên quan đến hướng dẫn sử dụng thiết bị, sản phẩm và dịch vụ thường gặp.",

  objectives: [
    "Học từ vựng liên quan đến hướng dẫn sử dụng và thiết bị thông dụng",
    "Hiểu cấu trúc câu mệnh lệnh và yêu cầu trong tiếng Nhật",
    "Nắm vững cách đọc và hiểu các biển báo, hướng dẫn công cộng",
    "Phát triển khả năng làm theo hướng dẫn bằng tiếng Nhật",
    "Học cách hỏi thêm thông tin khi không hiểu hướng dẫn",
  ],

  introduction: [
    new LessonSection(
      "Giới thiệu",
      [
        "Hiểu và làm theo hướng dẫn là một kỹ năng thiết yếu khi sống hoặc du lịch tại Nhật Bản. Từ việc sử dụng các thiết bị điện tử, đọc biển báo công cộng đến làm theo hướng dẫn của nhân viên dịch vụ, khả năng hiểu hướng dẫn đơn giản sẽ giúp bạn tự tin hơn trong cuộc sống hàng ngày. Trong bài học này, chúng ta sẽ tập trung vào từ vựng và cấu trúc câu thường gặp trong các hướng dẫn sử dụng, cũng như cách đặt câu hỏi khi bạn cần làm rõ thông tin.",
      ],
      []
    ),
  ],

  vocabulary: [
    // Từ vựng về thiết bị và đồ dùng
    new VocabularyItem("ボタン", "Botan", "Nút bấm", "Danh từ"),
    new VocabularyItem("スイッチ", "Suicchi", "Công tắc", "Danh từ"),
    new VocabularyItem("電源", "Dengen", "Nguồn điện", "Danh từ"),
    new VocabularyItem("画面", "Gamen", "Màn hình", "Danh từ"),
    new VocabularyItem("リモコン", "Rimokon", "Điều khiển từ xa", "Danh từ"),
    new VocabularyItem(
      "取扱説明書",
      "Toriatsukai setsumeisho",
      "Hướng dẫn sử dụng",
      "Danh từ"
    ),
    new VocabularyItem("機械", "Kikai", "Máy móc", "Danh từ"),
    new VocabularyItem("設定", "Settei", "Cài đặt", "Danh từ"),
    new VocabularyItem("操作", "Sōsa", "Vận hành, thao tác", "Danh từ"),

    // Từ vựng về hành động
    new VocabularyItem("押す", "Osu", "Nhấn, ấn", "Động từ nhóm 1"),
    new VocabularyItem("入れる", "Ireru", "Cho vào, đưa vào", "Động từ nhóm 2"),
    new VocabularyItem("出す", "Dasu", "Lấy ra", "Động từ nhóm 1"),
    new VocabularyItem("開ける", "Akeru", "Mở", "Động từ nhóm 2"),
    new VocabularyItem("閉める", "Shimeru", "Đóng", "Động từ nhóm 2"),
    new VocabularyItem("回す", "Mawasu", "Xoay, vặn", "Động từ nhóm 1"),
    new VocabularyItem("選ぶ", "Erabu", "Chọn", "Động từ nhóm 1"),
    new VocabularyItem(
      "確認する",
      "Kakunin suru",
      "Xác nhận",
      "Động từ nhóm 3"
    ),
    new VocabularyItem("使う", "Tsukau", "Sử dụng", "Động từ nhóm 1"),

    // Từ vựng về biển báo và chỉ dẫn
    new VocabularyItem("入口", "Iriguchi", "Lối vào", "Danh từ"),
    new VocabularyItem("出口", "Deguchi", "Lối ra", "Danh từ"),
    new VocabularyItem("非常口", "Hijōguchi", "Lối thoát hiểm", "Danh từ"),
    new VocabularyItem("禁止", "Kinshi", "Cấm", "Danh từ"),
    new VocabularyItem("注意", "Chūi", "Chú ý, cảnh báo", "Danh từ"),
    new VocabularyItem("案内", "Annai", "Hướng dẫn, chỉ dẫn", "Danh từ"),
    new VocabularyItem("順番", "Junban", "Thứ tự", "Danh từ"),
    new VocabularyItem("まず", "Mazu", "Trước tiên", "Phó từ"),
    new VocabularyItem("次に", "Tsugi ni", "Tiếp theo", "Phó từ"),
    new VocabularyItem("最後に", "Saigo ni", "Cuối cùng", "Phó từ"),
  ],

  grammar: [
    new GrammarPoint(
      "命令形 (Mệnh lệnh thức)",
      "Dạng mệnh lệnh của động từ được dùng trong hướng dẫn, biển báo và chỉ dẫn. Đây là dạng trực tiếp nhất của mệnh lệnh, thường thấy trong hướng dẫn sử dụng.",
      [
        new Example("ボタンを押せ。", "Botan wo ose.", "Hãy nhấn nút."),
        new Example(
          "ここに名前を書け。",
          "Koko ni namae wo kake.",
          "Hãy viết tên vào đây."
        ),
      ]
    ),
    new GrammarPoint(
      "〜てください (Hình thức yêu cầu lịch sự)",
      "Cấu trúc lịch sự để đưa ra yêu cầu hoặc hướng dẫn. Được tạo bằng cách thêm 'てください' (te kudasai) vào sau dạng て (te) của động từ.",
      [
        new Example(
          "このボタンを押してください。",
          "Kono botan wo oshite kudasai.",
          "Vui lòng nhấn nút này."
        ),
        new Example(
          "説明書を読んでください。",
          "Setsumeisho wo yonde kudasai.",
          "Vui lòng đọc hướng dẫn sử dụng."
        ),
      ]
    ),
    new GrammarPoint(
      "〜ないでください (Hình thức yêu cầu không làm gì)",
      "Cấu trúc lịch sự để yêu cầu không làm điều gì đó. Được tạo bằng cách thêm 'ないでください' (naide kudasai) vào sau gốc động từ.",
      [
        new Example(
          "ここで写真を撮らないでください。",
          "Koko de shashin wo toranaide kudasai.",
          "Vui lòng không chụp ảnh ở đây."
        ),
        new Example(
          "このボタンを押さないでください。",
          "Kono botan wo osanaide kudasai.",
          "Vui lòng không nhấn nút này."
        ),
      ]
    ),
    new GrammarPoint(
      "〜ましょう (Hình thức đề nghị)",
      "Cấu trúc dùng để đưa ra đề nghị hoặc gợi ý. Thường được dùng trong hướng dẫn nhóm hoặc hoạt động chung.",
      [
        new Example(
          "一緒にやりましょう。",
          "Issho ni yarimashou.",
          "Hãy cùng làm nào."
        ),
        new Example(
          "次のページを見ましょう。",
          "Tsugi no pēji wo mimashou.",
          "Hãy xem trang tiếp theo."
        ),
      ]
    ),
    new GrammarPoint(
      "〜ば〜 (Cấu trúc điều kiện)",
      "Cấu trúc diễn đạt điều kiện 'nếu... thì...'. Thường được dùng trong hướng dẫn để chỉ ra kết quả của một hành động.",
      [
        new Example(
          "このボタンを押せば、電源が入ります。",
          "Kono botan wo oseba, dengen ga hairimasu.",
          "Nếu bạn nhấn nút này, nguồn sẽ bật."
        ),
        new Example(
          "この説明書を読めば、使い方がわかります。",
          "Kono setsumeisho wo yomeba, tsukaikata ga wakarimasu.",
          "Nếu bạn đọc hướng dẫn này, bạn sẽ hiểu cách sử dụng."
        ),
      ]
    ),
  ],

  dialogues: [
    new Dialogue(
      "Hướng dẫn sử dụng máy bán hàng tự động",
      [
        new DialogueExchange(
          "ガイド (Hướng dẫn)",
          "自動販売機の使い方を説明します。",
          "Jidōhanbaiki no tsukaikata wo setsumei shimasu.",
          "Tôi sẽ hướng dẫn cách sử dụng máy bán hàng tự động."
        ),
        new DialogueExchange(
          "ガイド",
          "まず、お金を入れてください。硬貨か紙幣が使えます。",
          "Mazu, okane wo irete kudasai. Kōka ka shihei ga tsukaemasu.",
          "Trước tiên, hãy cho tiền vào. Bạn có thể dùng tiền xu hoặc tiền giấy."
        ),
        new DialogueExchange(
          "ガイド",
          "次に、飲み物を選んでください。光っているボタンを押してください。",
          "Tsugi ni, nomimono wo erande kudasai. Hikaitte iru botan wo oshite kudasai.",
          "Tiếp theo, hãy chọn đồ uống. Nhấn nút đang sáng."
        ),
        new DialogueExchange(
          "ガイド",
          "飲み物が出てきたら、下の取り出し口から取ってください。",
          "Nomimono ga detekitara, shita no toridashiguchi kara totte kudasai.",
          "Khi đồ uống ra, hãy lấy từ ngăn lấy hàng ở dưới."
        ),
        new DialogueExchange(
          "ガイド",
          "おつりがある場合は、おつり口からお受け取りください。",
          "Otsuri ga aru baai wa, otsuri-guchi kara o-uketori kudasai.",
          "Nếu có tiền thừa, hãy nhận từ ngăn trả tiền thừa."
        ),
      ],
      "Hướng dẫn sử dụng máy bán hàng tự động với các bước cơ bản. Chú ý cách sử dụng 'まず' (trước tiên), '次に' (tiếp theo) để chỉ thứ tự các bước."
    ),
    new Dialogue(
      "Hỏi cách sử dụng máy giặt",
      [
        new DialogueExchange(
          "ミン (Minh)",
          "すみません、この洗濯機の使い方がわかりません。",
          "Sumimasen, kono sentakuki no tsukaikata ga wakarimasen.",
          "Xin lỗi, tôi không biết cách sử dụng máy giặt này."
        ),
        new DialogueExchange(
          "スタッフ (Nhân viên)",
          "ご説明します。まず、洗濯物を入れてください。",
          "Go-setsumei shimasu. Mazu, sentakumono wo irete kudasai.",
          "Tôi sẽ hướng dẫn bạn. Trước tiên, hãy cho quần áo vào."
        ),
        new DialogueExchange(
          "スタッフ",
          "次に、洗剤をここに入れてください。",
          "Tsugi ni, senzai wo koko ni irete kudasai.",
          "Tiếp theo, hãy cho bột giặt vào đây."
        ),
        new DialogueExchange(
          "ミン",
          "どのぐらい入れればいいですか。",
          "Dono gurai ireba ii desu ka.",
          "Tôi nên cho bao nhiêu vào?"
        ),
        new DialogueExchange(
          "スタッフ",
          "この線まで入れてください。それから、このボタンを押して、コースを選んでください。",
          "Kono sen made irete kudasai. Sorekara, kono botan wo oshite, kōsu wo erande kudasai.",
          "Hãy cho đến vạch này. Sau đó, nhấn nút này và chọn chương trình giặt."
        ),
        new DialogueExchange(
          "ミン",
          "はい、わかりました。そして、スタートボタンを押せばいいですか。",
          "Hai, wakarimashita. Soshite, sutāto botan wo oseba ii desu ka.",
          "Vâng, tôi hiểu rồi. Và sau đó tôi nên nhấn nút khởi động phải không?"
        ),
        new DialogueExchange(
          "スタッフ",
          "そうです。スタートボタンを押してください。終わったらブザーが鳴ります。",
          "Sō desu. Sutāto botan wo oshite kudasai. Owattara buzā ga narimasu.",
          "Đúng vậy. Hãy nhấn nút khởi động. Khi xong, chuông sẽ kêu."
        ),
      ],
      "Tình huống hỏi và được hướng dẫn cách sử dụng máy giặt. Chú ý cách sử dụng 'わかりません' (không hiểu) và '〜ばいいですか' (nên làm gì) khi cần hỏi thêm thông tin."
    ),
  ],

  exercises: [
    new Exercise(
      "multiple-choice",
      "「このボタンを押してください」はどういう意味ですか。",
      [
        "Vui lòng nhấn nút này.",
        "Đừng nhấn nút này.",
        "Nút này không hoạt động.",
        "Bạn đã nhấn nút này.",
      ],
      "Vui lòng nhấn nút này.",
      "Câu này sử dụng cấu trúc 'てください' để đưa ra yêu cầu lịch sự."
    ),
    new Exercise(
      "fill-in-blank",
      "「写真を撮る___でください」と言いたい場合、「___」に入る言葉は何ですか。",
      ["ない", "ません", "なくて"],
      "ない",
      "Điền từ thích hợp để hoàn thành câu 'Vui lòng không chụp ảnh'."
    ),
    new Exercise(
      "matching",
      "Nối các biển báo với ý nghĩa tương ứng",
      [
        { japanese: "入口", english: "Lối vào" },
        { japanese: "出口", english: "Lối ra" },
        { japanese: "禁止", english: "Cấm" },
        { japanese: "非常口", english: "Lối thoát hiểm" },
      ],
      "",
      "Hãy nối các biển báo tiếng Nhật với ý nghĩa tiếng Việt tương ứng."
    ),
    new Exercise(
      "ordering",
      "Sắp xếp các bước sau theo thứ tự đúng để sử dụng máy ATM:",
      [
        "カードを入れる (Cho thẻ vào)",
        "暗証番号を入力する (Nhập mã PIN)",
        "金額を選ぶ (Chọn số tiền)",
        "お金を取る (Lấy tiền)",
        "カードを取る (Lấy thẻ)",
      ],
      "",
      "Sắp xếp các bước theo thứ tự đúng khi sử dụng máy ATM."
    ),
  ],

  culturalNotes: [
    new LessonSection(
      "Biển báo và ký hiệu tại Nhật Bản",
      [
        "Nhật Bản có nhiều biển báo và ký hiệu đặc trưng mà bạn sẽ thường xuyên gặp trong cuộc sống hàng ngày. Một số biển báo phổ biến bao gồm '非常口' (hijōguchi - lối thoát hiểm) thường được đánh dấu bằng màu xanh lá cây, '立入禁止' (tachiiri kinshi - cấm vào), và '撮影禁止' (satsuei kinshi - cấm chụp ảnh). Các nhà vệ sinh công cộng thường được đánh dấu bằng kanji '男' (otoko - nam) và '女' (onna - nữ), hoặc các biểu tượng. Trong các tòa nhà, thang máy thường hiển thị số tầng theo kiểu Nhật, với tầng 1 là tầng trệt, và các tầng hầm được đánh dấu là B1, B2, v.v.",
      ],
      []
    ),
    new LessonSection(
      "Văn hóa hướng dẫn chi tiết của Nhật Bản",
      [
        "Nhật Bản nổi tiếng với văn hóa hướng dẫn chi tiết và tỉ mỉ. Từ hướng dẫn sử dụng các thiết bị điện tử đến hướng dẫn phân loại rác, mọi thứ thường được giải thích rất cụ thể và rõ ràng, thường kèm theo hình ảnh minh họa. Điều này phản ánh sự chú trọng đến chi tiết và tính chính xác trong văn hóa Nhật Bản. Khi bạn mua một sản phẩm ở Nhật, hướng dẫn sử dụng thường rất dày và chi tiết, ngay cả với những sản phẩm đơn giản. Điều này có thể khác với nhiều nước khác, nơi hướng dẫn sử dụng thường ngắn gọn hơn. Văn hóa này giúp người dùng hiểu rõ cách sử dụng sản phẩm một cách chính xác và an toàn.",
      ],
      []
    ),
  ],

  additionalResources: [
    {
      title: "Từ vựng mở rộng về biển báo và chỉ dẫn công cộng tại Nhật Bản",
      url: "https://example.com/japanese-signs-vocabulary",
    },
    {
      title: "Hướng dẫn sử dụng các thiết bị công cộng phổ biến tại Nhật Bản",
      url: "https://example.com/japanese-public-equipment-guide",
    },
    {
      title: "Cách đọc hướng dẫn sử dụng sản phẩm bằng tiếng Nhật",
      url: "https://example.com/reading-japanese-manuals",
    },
  ],
});

export default lesson15;
