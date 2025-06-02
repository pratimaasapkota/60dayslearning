async function createPost() {
  const post = {
    title: "Hello World",
    body: "This is my first post.",
    userId: 1
  };

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(post)
    });

    const data = await response.json();
    console.log("Created Post:", data);
  } catch (error) {
    console.error("Error creating post:", error);
  }
}

createPost();