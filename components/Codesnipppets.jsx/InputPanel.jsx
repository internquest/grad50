"use client";
import { useCodeEditorStore } from "@/lib/store/useCodeEditorStore";
import React from "react";

const InputPanel = () => {
  const { setInput, input } = useCodeEditorStore();
  //   console.log(input);

  return (
    <div className="relative bg-[#181825] rounded-xl p-4 ring-1 ring-gray-800/50">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {/* <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-[#1e1e2e] ring-1 ring-gray-800/50">
            <Terminal className="w-4 h-4 text-blue-400" />
          </div> */}
          <span className="text-sm font-medium text-gray-300">Input</span>
        </div>
      </div>

      {/* Output Area */}
      <div className="relative">
        <div
          className="relative bg-[#1e1e2e]/50 backdrop-blur-sm border border-[#313244] 
    rounded-xl p-4  overflow-auto font-mono text-sm"
        >
          <textarea
            name="input"
            id="input"
            className="w-full bg-inherit text-blue-300 h-full"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default InputPanel;
