// Validate new post form
function validateForm() {
    let form = document.getElementById("article"); 

    let title = document.getElementById("title").value.trim();
    let content = document.getElementById("content").value.trim();
    let author = document.getElementById("author").value.trim();
    let tags = document.getElementById("tags").value.trim();
    let imageUrl = document.getElementById("imageUrl").value.trim();

    if (title === "" || content === "" || author === "" || tags === "" || imageUrl === "") {
        alert("Please fill in all required fields.");
        return false;
    }

    return true;
}

// Store post in local storage
document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("article");

    if (form) { 
        form.addEventListener("submit", function (event) {
            if (!validateForm()) { 
                event.preventDefault(); 
                return;
            }

            let post = {
                title: document.getElementById("title").value.trim(),
                content: document.getElementById("content").value.trim(),
                author: document.getElementById("author").value.trim(),
                tags: document.getElementById("tags").value.trim(),
                imageUrl: document.getElementById("imageUrl").value.trim()
            };

            localStorage.setItem("newPost", JSON.stringify(post)); 
            window.location.href = "index.html"; 
        });
    } else {
        console.error("Form not found. Check the form ID.");
    }
});

// Get post from local storage and display it
document.addEventListener("DOMContentLoaded", function () {
    let post = JSON.parse(localStorage.getItem("newPost")); 

    if (post) {
        let postHTML = `
            <div class="post">
                <h3>${post.title}</h3>
                <p><strong>Author:</strong> ${post.author}</p>
                <p><strong>Tags:</strong> ${post.tags}</p>
                <p>${post.content}</p>
                ${post.imageUrl ? `<img src="${post.imageUrl}" alt="Post Image" style="max-width:300px;">` : ""}
            </div>
        `;

        let postDisplay = document.getElementById("postDisplay");
        if (postDisplay) {
            postDisplay.innerHTML = postHTML;
        } else {
            console.error("Post display container not found.");
        }
    } else {
        let postDisplay = document.getElementById("postDisplay");
        if (postDisplay) {
            postDisplay.innerHTML = "<p>No posts available.</p>";
        }
    }
});
