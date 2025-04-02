// "use client";
import React from "react";
import EditorPanel from "@/components/Codesnipppets.jsx/EditorPanel";
import Header from "@/components/Codesnipppets.jsx/Header";
import OutputPanel from "@/components/Codesnipppets.jsx/OutputPanel";
import InputPanel from "@/components/Codesnipppets.jsx/InputPanel";
// import { getsnippet } from "@/lib/datafunctions";

const page = async ({ params }) => {
  const { id } = await params;
  // console.log(id);

  // useEffect(() = > {
  //   const fetchData = async (id) => {
  //     try {
  //       const snippetdata = await getsnippet(id); // Await the promise from getData
  //       // console.log(data);

  //       // setJobs(jobsdata); // Set the jobs state with the fetched data
  //       // console.log(data); // Log the fetched data
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     } finally {
  //       setLoading(false); // Set loading to false after data is fetched
  //     }
  //   };

  //   fetchData(); // Call the fetchData function
  // }, []);
  return (
    <div className="min-h-[730px] mt-20">
      <div className="max-w-[1800px] mx-auto p-4">
        <Header id={id} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <EditorPanel />
          <div className="grid-rows-2 grid-cols-1 grid h-full gap-4">
            <OutputPanel />
            <InputPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
