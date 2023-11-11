const API_URL = "http://localhost:5000/api";

export const addComment = async (comment) => {
  const response = await fetch(`${API_URL}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  });

  if (!response.ok) {
    throw new Error("Failed to add comment");
  }

  return response.json();
};

// Similar functions for adding posts and users
// ...
