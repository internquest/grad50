"use client";

import {
  getExecutionResult,
  useCodeEditorStore,
} from "@/lib/store/useCodeEditorStore";
import { supabase } from "@/lib/supabaseClient";

import { motion } from "framer-motion";
import { Loader2, Play } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

function RunButton() {
  //   const { user } = useUser();
  const router = useRouter();
  const {
    runCode,
    language,
    isRunning,
    urlparam,
    snippetid,
    editor,
    setEditor,
  } = useCodeEditorStore();
  //   const { id } = useParams();
  //   console.log(id);

  //   const saveExecution = useMutation(api.codeExecutions.saveExecution);
  //   console.log(urlparam, snippetid, urlparam === snippetid);
  const handleRun = async () => {
    await runCode();
    const result = getExecutionResult();
    // console.log(result);
    // if (id) {
    //   console.log(id);
    // }
    // console.log(urlparam, snippetid, urlparam === snippetid);

    if (urlparam && urlparam === snippetid) {
      //   console.log("sjgs");
      const upinput = `${urlparam}`;
      try {
        const { data, error } = await supabase
          .from("codesnippets")
          .update({
            content: result.code,
            language: language,
            output: result.output,
            input: result.inputval,
            snippetid: urlparam,
          })
          .eq("snippetid", upinput)
          .select();
        // console.log(data);
      } catch (error) {
        console.log("error", error);
      } finally {
      }
    } else {
      const { data, error } = await supabase
        .from("codesnippets")
        .insert([
          {
            content: result.code,
            language: language,
            output: result.output,
            input: result.inputval,
            snippetid: urlparam,
          },
        ])
        .select();
    }

    // const { data: codesnippets, error: sniperror } = await supabase
    //   .from("codesnippets")
    //   .select("snippetid, content, language, output, input")
    //   .eq("snippetid", urlparam);
    // console.log(codesnippets);

    // if (codesnippets) {
    //   editor.setValue(codesnippets[0].content);
    //   setEditor(editor);
    if (urlparam === snippetid) {
      return;
    } else {
      router.push(`/compiler/${urlparam}`);
    }
    // }
    // if (data) {
    // }
    // if (user && result) {
    //   await saveExecution({
    //     language,
    //     code: result.code,
    //     output: result.output || undefined,
    //     error: result.error || undefined,
    //   });
    //   };
  };

  return (
    <motion.button
      onClick={handleRun}
      disabled={isRunning}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        group relative inline-flex items-center gap-2.5 px-5 py-2.5
        disabled:cursor-not-allowed
        focus:outline-none
      `}
    >
      {/* bg wit gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl opacity-100 transition-opacity group-hover:opacity-90" />

      <div className="relative flex items-center gap-2.5">
        {isRunning ? (
          <>
            <div className="relative">
              <Loader2 className="w-4 h-4 animate-spin text-white/70" />
              <div className="absolute inset-0 blur animate-pulse" />
            </div>
            <span className="text-sm font-medium text-white/90">
              Executing...
            </span>
          </>
        ) : (
          <>
            <div className="relative flex items-center justify-center w-4 h-4">
              <Play className="w-4 h-4 text-white/90 transition-transform group-hover:scale-110 group-hover:text-white" />
            </div>
            <span className="text-sm font-medium text-white/90 group-hover:text-white">
              Run Code
            </span>
          </>
        )}
      </div>
    </motion.button>
  );
}

export default RunButton;
