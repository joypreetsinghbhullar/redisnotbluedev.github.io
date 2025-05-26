const chatHistoryElement = document.getElementById("chat-history");

async function ask() {
    const promptElement = document.getElementById("prompt");
    const userMessage = promptElement.value.trim();

    if (!userMessage) return;

    // Escape HTML injection for the user's input
    const escapedUserMessage = escapeHTML(userMessage);

    // Add the escaped user's message to the chat history
    addMessageToChat("user", escapedUserMessage);

    // Clear the input field
    promptElement.value = "";

    // Send the request to the API
    const response = await fetch("https://nodex-3bel.onrender.com/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: escapedUserMessage, chat_id: "test" }),
    });

    // Parse the response as plaintext
    const result = await response.text();

    // Render the AI's response with Markdown
    const renderedMarkdown = renderMarkdown(result);

    // Add the rendered Markdown to the chat history
    addMessageToChat("ai", renderedMarkdown);

    // Scroll to the bottom of the chat history
    scrollToBottom();
}

function addMessageToChat(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.innerHTML = message; // Rendered HTML is directly added
    chatHistoryElement.appendChild(messageElement);

    // Scroll to the bottom after adding the message
    scrollToBottom();
}

// Function to scroll to the bottom of the chat history
function scrollToBottom() {
    chatHistoryElement.scrollTop = chatHistoryElement.scrollHeight;
}

// Function to escape HTML to prevent injection
function escapeHTML(str) {
    const div = document.createElement("div");
    div.innerText = str;
    return div.innerHTML;
}

// Function to render Markdown to HTML
function renderMarkdown(markdown) {
    // Convert Markdown to HTML
    const formattedText = markdown
        .replace(/```(\w+)?\n([\s\S]*?)```/g, (_, lang, code) => {
            const language = lang ? Prism.languages[lang] || Prism.languages.javascript : Prism.languages.javascript;
            const highlightedCode = Prism.highlight(code, language, lang || 'javascript');
            return `<pre><code id="multiline" class="language-${lang || 'plaintext'}">${highlightedCode}</code></pre>`;
        })
        .replace(/`([^`]+)`/g, "<code>$1</code>") // Inline code
        .replace(/\*\*\*(.*?)\*\*\*/g, "<b><i>$1</i></b>") // Bold + Italic
        .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") // Bold
        .replace(/\*(.*?)\*/g, "<i>$1</i>") // Italic
        .replace(/__(.*?)__/g, "<u>$1</u>") // Underlined text
        .replace(/~~(.*?)~~/g, "<s>$1</s>") // Strikethrough
        .replace(/^> (.*?)(\n|$)/gm, "<blockquote>$1</blockquote>") // Blockquotes
        .replace(/^-{3,}$/gm, "<hr>") // Horizontal rules
        .replace(/^\s*[-*]\s+(.*?)(\n|$)/gm, "<ul><li>$1</li></ul>") // Unordered lists
        .replace(/^\s*\d+\.\s+(.*?)(\n|$)/gm, "<li>$1</li>") // Ordered list items
        .replace(/(<li>.*?<\/li>)(?!\s*<li>)/g, "<ol>$1</ol>") // Wrap consecutive <li> in <ol>
        .replace(/<\/ol>\s*<ol>/g, "") // Merge adjacent <ol> elements
        .replace(/(#+)\s*(.*?)(\n|$)/g, (_, hashes, text) => `<h${hashes.length}>${text}</h${hashes.length}>`) // Headings
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>'); // Links

    return formattedText;
}

// Add event listener for Enter key
document.getElementById("prompt").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        ask();
    }
});