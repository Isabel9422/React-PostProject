const api = "https://postproject-deploy.herokuapp.com/api/articulos"; // AHI VAN MIS APIS
const url_categories =
  "https://postproject-deploy.herokuapp.com/api/categories";

export async function getPosts() {
  try {
    const response = await fetch(api, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer MQ.Z2sRts6PL2ZiEoPAQ9kT4UCBUk45CbH_WaTVj5K3CAnIO6cjHdcj0W6c2dzk",
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
        "Bearer MQ.Z2sRts6PL2ZiEoPAQ9kT4UCBUk45CbH_WaTVj5K3CAnIO6cjHdcj0W6c2dzk",
    },
    body: JSON.stringify(data),
  };
  await fetch(api, response).then((response) => response.json());
}

export async function registro(data) {
  const response = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer MQ.Z2sRts6PL2ZiEoPAQ9kT4UCBUk45CbH_WaTVj5K3CAnIO6cjHdcj0W6c2dzk",
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
