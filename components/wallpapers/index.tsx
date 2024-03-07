"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Wallpaper } from "@/types/wallpaper";
import WallpaperList from "./WallpaperList";

interface Props {
  wallpapers: Wallpaper[];
}

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function ({ wallpapers}: Props) {
  return (
    <section className="max-w-6xl mx-auto">
      <WallpaperList wallpapers={wallpapers} />
    </section>
  );
}
