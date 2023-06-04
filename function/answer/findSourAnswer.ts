import { FormData } from "../../pages/api/answers";
import { Answer } from "./findAnswer";
import { findOtherAnswer } from "./findOtherAnswer";

export const findSourAnswer = (formData: FormData): Answer => {
  const { method, meat, spice } = formData;

  // 1から5問目の組み合わせによって分岐
  if (meat === "海鮮" && spice === "強い") {
    return {
      cuisine: "トムヤムクン",
      category: "タイ料理",
      imageUrl:
        "https://images.unsplash.com/photo-1628430043175-0e8820df47c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
      description:
        "タイ料理のスパイシーな酸味スープで、エビやハーブ、レモングラスなどの香りが特徴です。独特の風味と辛さが魅力です。",
    };
  } else if (meat === "鶏肉" && method === "揚げ物") {
    return {
      cuisine: "モホ・チキン",
      category: "キューバ料理",
      imageUrl:
        "https://img.freepik.com/free-photo/top-view-chicken-garlic-bottle-oil-lemon-sauce-chicken-with-herbs-lavash-fork-knife_140725-73680.jpg?w=740&t=st=1685896516~exp=1685897116~hmac=712758b9fa509cda69e19d9a8a517c5db6be821c7164e41b060ef8814724b09f",
      description:
        "キューバ料理で、スパイスの効いたマリネソースで焼かれた鶏肉の料理です。香ばしさとスパイシーさが楽しめます。",
    };
  } else if (meat === "海鮮") {
    return {
      cuisine: "セビーチェ",
      category: "ペルー料理",
      imageUrl:
        "https://cdn.pixabay.com/photo/2020/01/02/21/31/shrimp-4736867_1280.jpg",
      description:
        "ペルー料理の一つで、魚介や野菜をレモンやハーブでマリネしたサラダです。さっぱりとした味わいが特徴です。",
    };
  } else if (meat === "豚肉") {
    return {
      cuisine: "ザワークラウト",
      category: "ドイツ料理",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/03/01/18/01/sauerkraut-655062_1280.jpg",
      description:
        "ドイツ料理の一部で、発酵したキャベツを酸味と一緒に煮込んだ料理です。肉料理の付け合わせやソーセージと一緒に楽しまれます。",
    };
  } else if (method === "生食") {
    return {
      cuisine: "生春巻き",
      category: "ベトナム料理",
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/12/20/17/14/spring-rolls-4708877_1280.jpg",
      description:
        "ベトナム料理の一つで、米紙に野菜や新鮮なハーブ、エビや豚肉などの具材を包み込んだロールです。ピーナッツソースや甘酸っぱいダレと一緒に食べます。軽やかな食感とヘルシーさが特徴です。",
    };
  } else {
    return findOtherAnswer(formData);
  }
};
