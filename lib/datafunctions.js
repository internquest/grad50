import { supabase } from "./supabaseClient";

const getData = async () => {
  const { data: jobs, error } = await supabase
    .from("snap")
    .select()
    .eq("dream_job", false);
  //   console.log(jobs);

  //   console.log(alljobs);

  if (error) {
    console.error("Error fetching post:", error);
    // setError(error.message)
  } else {
    // setPost(post)
  }
  // const undreamedjobs = jobs.filter((job) => !job.dream_job);
  return jobs;
};
const getDreamjobs = async () => {
  const { data: jobs, error } = await supabase
    .from("snap")
    .select()
    .eq("dream_job", true);
  //   console.log(jobs);

  //   console.log(alljobs);

  if (error) {
    console.error("Error fetching post:", error);
    // setError(error.message)
  } else {
    // setPost(post)
  }
  // const dreamjobs = jobs.filter((job) => job.dream_job);
  return jobs;
};

const getessentialjobs = async () => {
  const { data: jobs, error } = await supabase
    .from("essentials")
    .select("company_name, role, id, snap_view, dream_job")
    .eq("dream_job", false);
  //   console.log(jobs);

  //   console.log(alljobs);

  if (error) {
    console.error("Error fetching post:", error);
    // setError(error.message)
  } else {
    // setPost(post)
  }
  // console.log(jobs);

  // const undreamedjobs = jobs.filter((job) => !job.dream_job);
  return jobs;
};
const getessentialdreamjobs = async () => {
  const { data: jobs, error } = await supabase
    .from("essentials")
    .select("company_name, role, id, snap_view, dream_job")
    .eq("dream_job", true);
  //   console.log(jobs);

  //   console.log(alljobs);

  if (error) {
    console.error("Error fetching post:", error);
    // setError(error.message)
  } else {
    // setPost(post)
  }
  // console.log(jobs);

  // const undreamedjobs = jobs.filter((job) => !job.dream_job);
  return jobs;
};
const getessentialspecificjob = async ({ id }) => {
  const { data: jobs, error } = await supabase
    .from("essentials")
    .select("company_name, role, id, essentials, dream_job")
    .eq("id", id);
  //   console.log(jobs);

  //   console.log(alljobs);

  if (error) {
    console.error("Error fetching post:", error);
    // setError(error.message)
  } else {
    // setPost(post)
  }
  // console.log(jobs);

  // const undreamedjobs = jobs.filter((job) => !job.dream_job);
  return jobs;
};

const getyoejobs = async () => {
  const { data: jobs, error } = await supabase
    .from("YOE_Insights")
    .select("company_name, job_title, id, yoe, dream_job");
  //   console.log(jobs);

  //   console.log(alljobs);

  if (error) {
    console.error("Error fetching post:", error);
    // setError(error.message)
  } else {
    // setPost(post)
  }
  // console.log(jobs);

  // const undreamedjobs = jobs.filter((job) => !job.dream_job);
  return jobs;
};
const getsnippet = async (id) => {
  const snipid = id;
  // console.log(snipid);
  const { data: codesnippets, error: sniperror } = await supabase
    .from("codesnippets")
    .select("snippetid, content, language, output, input")
    .eq("snippetid", snipid);
  // console.log(codesnippets);
  //   console.log(jobs);

  //   console.log(alljobs);

  if (sniperror) {
    console.error("Error fetching post:", sniperror);
    // setError(error.message)
  } else {
    // setPost(post)
  }
  // console.log(jobs);

  // const undreamedjobs = jobs.filter((job) => !job.dream_job);
  return codesnippets;
};
export {
  getData,
  getDreamjobs,
  getessentialjobs,
  getessentialdreamjobs,
  getessentialspecificjob,
  getyoejobs,
  getsnippet,
};
