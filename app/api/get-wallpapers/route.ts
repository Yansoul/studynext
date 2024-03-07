import { Wallpaper } from "@/types/wallpaper";

export function GET(req: Request) {
  const wallpapers: Wallpaper[] = [
    {
      img_description: "happy new year 1",
      img_url:
        "https://img.3dmgame.com/uploads/images/news/20201120/1605832424_347063.jpg",
      img_size: "3840x2160",
      user_avatar:
        "https://tse4-mm.cn.bing.net/th/id/OIP-C.TIUJj5e55C4xh0dSgpxeyAAAAA?rs=1&pid=ImgDetMain",
      user_nickname: "yansoul",
    },
    {
      img_description: "happy new year 1",
      img_url:
        "https://img.3dmgame.com/uploads/images/news/20201120/1605832424_347063.jpg",
      img_size: "3840x2160",
      user_avatar:
        "https://tse4-mm.cn.bing.net/th/id/OIP-C.TIUJj5e55C4xh0dSgpxeyAAAAA?rs=1&pid=ImgDetMain",
      user_nickname: "yansoul",
    },
    {
      img_description: "happy new year 1",
      img_url:
        "https://img.3dmgame.com/uploads/images/news/20201120/1605832424_347063.jpg",
      img_size: "3840x2160",
      user_avatar:
        "https://tse4-mm.cn.bing.net/th/id/OIP-C.TIUJj5e55C4xh0dSgpxeyAAAAA?rs=1&pid=ImgDetMain",
      user_nickname: "yansoul",
    },
    {
      img_description: "happy new year 1",
      img_url:
        "https://img.3dmgame.com/uploads/images/news/20201120/1605832424_347063.jpg",
      img_size: "3840x2160",
      user_avatar:
        "https://tse4-mm.cn.bing.net/th/id/OIP-C.TIUJj5e55C4xh0dSgpxeyAAAAA?rs=1&pid=ImgDetMain",
      user_nickname: "yansoul",
    },
  ];
  return Response.json({
    code: 0,
    message: "ok",
    data: wallpapers,
  });
}
