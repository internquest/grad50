"use client";
import React from "react";
import { useCodeEditorStore } from "@/lib/store/useCodeEditorStore";

const UrlparaCompo = () => {
  const { urlparam, language } = useCodeEditorStore();
  return (
    <div className="ml-10">
      <h1 className="text-md text-gray-400">
        {urlparam ? urlparam : `${language} example`}
      </h1>
    </div>
  );
};

export default UrlparaCompo;
