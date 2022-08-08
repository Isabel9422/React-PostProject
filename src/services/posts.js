const api = "https://post-project-dep.herokuapp.com/api/articulos"; // AHI VAN MIS APIS
const url_categories =
  "https://post-project-dep.herokuapp.com/api/categories";

export async function getPosts() {
  try {
    const response = await fetch(api, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer MQ._5vnI0TOOGlVmCJQVwO_Bd6vTlkQwxlWesxReyvYEtUs7vYl8jR43sXcbZag",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function getCategories() {
  try {
    const response = await fetch(url_categories);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function createBlogPost(data) {
  const response = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer MQ._5vnI0TOOGlVmCJQVwO_Bd6vTlkQwxlWesxReyvYEtUs7vYl8jR43sXcbZag",
    },
    body: JSON.stringify(data),
  };
  await fetch(api, response).then((response) => response.json());
}

function completePost(post) {
  console.log("Complete this Task:", post);
  const index = post.indexOf(post);
  const tempTasks = [...post];
  tempTasks[index].completed = !tempTasks[index].completed;
  // We update the state of the component with the new list of tasks and it will update the
  // Iteration of the tasks in order to show the task updated
  setPosts(tempPosts);
}
