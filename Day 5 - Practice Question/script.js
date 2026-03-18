const BlogApp = (function () {

    const POSTS_API = "https://jsonplaceholder.typicode.com/posts";
    const TODOS_API = "https://jsonplaceholder.typicode.com/todos";

    async function fetchData(url) {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Server error occurred.");
        }

        return await response.json();
    }

    function displayPosts(posts) {
        const container = document.getElementById("posts");
        container.innerHTML = "";

        posts.slice(0, 5).forEach(post => {
            const div = document.createElement("div");
            div.className = "card";
            div.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;
            container.appendChild(div);
        });
    }

    function displayTodos(todos) {
        const container = document.getElementById("todos");
        container.innerHTML = "";

        todos.slice(0, 5).forEach(todo => {
            const div = document.createElement("div");
            div.className = "card";
            div.innerHTML = `
                <p>
                    ${todo.title} -
                    <span class="${todo.completed ? "completed" : "pending"}">
                        ${todo.completed ? "Completed" : "Pending"}
                    </span>
                </p>
            `;
            container.appendChild(div);
        });
    }

    async function createPost(title, body) {

        const response = await fetch(POSTS_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 1
            })
        });

        if (!response.ok) {
            throw new Error("Failed to publish post.");
        }

        return await response.json();
    }

    function showError(containerId, message) {
        document.getElementById(containerId).innerHTML =
            `<p class="error">${message}</p>`;
    }

    async function init() {

        // Load posts
        try {
            const posts = await fetchData(POSTS_API);
            displayPosts(posts);
        } catch (error) {
            showError("posts", error.message);
        }

        // Load todos
        try {
            const todos = await fetchData(TODOS_API);
            displayTodos(todos);
        } catch (error) {
            showError("todos", error.message);
        }

        // Publish post
        document.getElementById("publishPost")
            .addEventListener("click", async () => {

                const title = document.getElementById("title").value;
                const body = document.getElementById("body").value;

                if (!title || !body) {
                    alert("Please fill all fields.");
                    return;
                }

                try {
                    const newPost = await createPost(title, body);

                    const container = document.getElementById("posts");

                    const div = document.createElement("div");
                    div.className = "card";
                    div.innerHTML = `
                        <h3>${newPost.title}</h3>
                        <p>${newPost.body}</p>
                    `;

                    container.prepend(div);

                    alert("Post published successfully!");

                } catch (error) {
                    alert(error.message);
                }
            });
    }

    return {
        init: init
    };

})();

BlogApp.init();
