// Replace with your actual Google Bard API access details
const apiKey = "g.a000gghUJknR-OVJIfS-79htXa8ljgk1MGDYNYh0O5oDHBA5-_0pzwfj6XBsue51a0EBO60aRwACgYKAQwSAQASFQHGX2MiJpIBIIK63_-WV24RCNe-gRoVAUF8yKrGZpXxg1n5JWws1JAHb_hQ0076";
const endpoint = "https://language.googleapis.com/v1/documents:analyzeEntities";

function sendMessage() {
    const userInput = document.getElementById("userInput").value;

    // Validate input (if needed)
    if (!userInput.trim()) {
        alert("Please enter a message.");
        return;
    }

    // Show user message in the chat history
    const userMessageElement = document.createElement("div");
    userMessageElement.classList.add("message", "user-message");
    userMessageElement.textContent = userInput;
    document.querySelector(".message-box").appendChild(userMessageElement);

    // Clear input field
    document.getElementById("userInput").value = "";

    // Call Google Bard API
    fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            document: {
                content: userInput,
                type: "PLAIN_TEXT",
            },
            encodingType: "UTF8",
        }),
    })
    .then(response => response.json())
    .then(data => {
        const bardResponse = data.entities[0].text; // Extract relevant response from API output

        // Show Bard's message in the chat history
        
