"use client";
import Link from "next/link";
// import { Blocks, Code2, Sparkles } from "lucide-react";
// import { SignedIn } from "@clerk/nextjs";
// import ThemeSelector from "./ThemeSelector";
import LanguageSelector from "./LanguageSelector";
import RunButton from "./RunButton";
import UrlparaCompo from "./UrlparaCompo";
import { useCodeEditorStore } from "@/lib/store/useCodeEditorStore";
import { useEffect } from "react";
import { getsnippet } from "@/lib/datafunctions";
import { LANGUAGE_CONFIG } from "@/lib/constants";
// import RunButton from "./RunButton";
// import HeaderProfileBtn from "./HeaderProfileBtn";

function Header({ id }) {
  const {
    language,
    theme,
    fontSize,
    editor,
    setFontSize,
    setEditor,
    urlparam,
    snippetid,
    setUrlparam,
    setLanguage,
    setInput,
    setOutput,
    setSnippetid,
  } = useCodeEditorStore();
  useEffect(() => {
    const setData = async () => {
      let newCode;
      if (id) {
        const snippetdata = await getsnippet(id[0]); // Await the promise from getData
        setLanguage(snippetdata[0].language);
        setInput(snippetdata[0].input);
        setOutput(snippetdata[0].output);
        setSnippetid(snippetdata[0].snippetid);
        setUrlparam(snippetdata[0].snippetid);
        // console.log(snippetdata);
        newCode = snippetdata[0].content;
      } else {
        newCode = LANGUAGE_CONFIG[language].defaultCode;
        // console.log(language, LANGUAGE_CONFIG[language]);
      }
      if (editor) editor.setValue(newCode);
    };
    setData();
  }, [language, editor]);
  return (
    <div className="relative z-10">
      <div
        className="flex items-center lg:justify-between justify-center 
        bg-[#0a0a0f]/80 backdrop-blur-xl p-6 mb-4 rounded-lg"
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            {/* <ThemeSelector /> */}
            <LanguageSelector />
          </div>

          {/* {!convexUser?.isPro && (
            <Link
              href="/pricing"
              className="flex items-center gap-2 px-4 py-1.5 rounded-lg border border-amber-500/20 hover:border-amber-500/40 bg-gradient-to-r from-amber-500/10 
                to-orange-500/10 hover:from-amber-500/20 hover:to-orange-500/20 
                transition-all duration-300"
            >
              <Sparkles className="w-4 h-4 text-amber-400 hover:text-amber-300" />
              <span className="text-sm font-medium text-amber-400/90 hover:text-amber-300">
                Pro
              </span>
            </Link>
          )} */}

          {/* <SignedIn> */}
          <RunButton />
          {/* </SignedIn> */}
          <UrlparaCompo />
          {/* <div className="pl-3 border-l border-gray-800">
            <HeaderProfileBtn />
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default Header;
