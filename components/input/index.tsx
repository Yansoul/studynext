"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Wallpaper } from "@/types/wallpaper";

interface Props {
  setWallpapers: Dispatch<SetStateAction<Wallpaper[]>>;
}

export default function InputDemo({ setWallpapers }: Props) {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [wallpaper, setWallpaper] = useState<Wallpaper | null>(null);

  const generateWallpaper = async function () {
    const params = {
      description: description,
    };

    setLoading(true);
    const result = await fetch("/api/gen-wallpaper", {
      method: "POST",
      body: JSON.stringify(params),
    });
    const { data } = await result.json();
    setLoading(false);

    if (data) {
      console.log("new wallpaper: ", data);
      setWallpaper(wallpaper);

      if (wallpaper) {
        setWallpapers((wallpapers: Wallpaper[]) => [wallpaper, ...wallpapers]);
      }
    }
  };

  const handleSubmit = async function () {
    console.log("current desc: ", description);
    if (!description) {
      alert("请输入壁纸描述！");
      return;
    }

    await generateWallpaper();
  };

  return (
    <div className="max-w-xl mx-auto flex items-center">
      <Input
        type="text"
        placeholder="请描述你要生成的壁纸"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        disabled={loading}
      />
      <Button className="ml-4" onClick={handleSubmit} disabled={loading}>
        {loading ? "生成中..." : "生成壁纸"}
      </Button>
    </div>
  );
}
