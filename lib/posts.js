import { readFile } from "fs/promises";

async function getPost(slug) {
  const data = await readFile(`content/posts/${slug}.json`, "utf-8");
  return JSON.parse(data);
}

export default getPost