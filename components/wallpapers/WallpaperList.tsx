/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import { Wallpaper } from "@/types/wallpaper";

interface Props {
  wallpapers: Wallpaper[];
}
export default function ({ wallpapers }: Props) {
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <div className="mb-8 text-center md:mb-12 ">
          <h2 className="text-3xl font-bold md:text-5xl text-primary">全部壁纸</h2>
          <p className="mt-4 text-[#636262] sm:text-sm md:text-base">
            一共 100 条由 AI 生成的壁纸
          </p>
        </div>
        <div className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mb-16 md:grid-cols-3 md:gap-4 ">
          {wallpapers &&
            wallpapers.map((wallpaper: Wallpaper, idx: number) => {
              return (
                <div
                  key={idx}
                  className="rounded-xl overflow-hidden mb-4 inline-block border border-solid border-[#cdcdcd] md:mb-8 lg:mb-10"
                >
                  <img
                    src={wallpaper.img_url}
                    alt={wallpaper.img_description || "图片加载失败"}
                    width={350}
                    height={200}
                    loading="lazy"
                  />
                  <div className="px-5 py-8 sm:px-6">
                    <p className="flex-col text-[#808080]">
                      {wallpaper.img_description}
                    </p>
                    <div className="flex items-center mb-5 mt-6 flex-wrap gap-2 md:mb-6 lg:mb-8">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <a
                          href={wallpaper.img_url}
                          className="flex items-center max-w-full gap-2.5 text-sm font-bold uppercase text-black"
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
