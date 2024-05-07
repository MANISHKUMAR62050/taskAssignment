function sendRequest() {
    var apiUrl = document.getElementById("apiUrl").value;
    
    // Perform API request using fetch or XMLHttpRequest
    // Replace this with your actual API request handling code
    
    // For demonstration purposes, let's assume we have a dummy JSON response
    var dummyJsonResponse = {
        "name": "John",
        "age": 30,
        "city": "New York"
    };

    // Display the JSON response in the designated section
    var jsonResponseElement = document.getElementById("jsonResponse");
    jsonResponseElement.textContent = JSON.stringify(dummyJsonResponse, null, 2);
}


function showHtmlResponse() {
    // Replace this with your actual HTML response
    var htmlResponse = "<h2>This is an HTML response</h2><p>This is some HTML content.</p>";

    // Display the HTML response in the designated section
    var responseSection = document.getElementById("responseSectionHtml");
    responseSection.innerHTML = htmlResponse;
}

function showMarkdownResponse() {
    // Replace this with your actual Markdown response
    var markdownResponse = "## This is a Markdown response\n\nThis is some *Markdown* content.";

    // Display the Markdown response in the designated section
    var responseSection = document.getElementById("responseSectionMark");
    responseSection.innerHTML = convertMarkdownToHtml(markdownResponse);
}

//Function to convert Markdown to HTML (You can use a library like Showdown.js for this purpose)
function convertMarkdownToHtml(markdown) {
    // For demonstration purpose, let's assume a simple conversion
    // Replace this with your actual Markdown to HTML conversion logic
    return "<div>" + markdown.replace(/\n\n/g, "</p><p>").replace(/\n/g, "<br>") + "</div>";
}
function generateHtmlPage() {
    var response = document.getElementById("responseSection").textContent;
    var htmlContent = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Generated HTML Page</title>\n</head>\n<body>\n" + response + "\n</body>\n</html>";

    var renderedContent = document.getElementById("renderedContent");
    renderedContent.textContent = ""; // Clear any previous content
    renderedContent.innerHTML = htmlContent;
}

function renderMarkdown() {
    var response = document.getElementById("responseSection").textContent;
    var markdownContent = response; // Assuming the response is already in Markdown format

    // Convert Markdown to HTML (You can use a library like Showdown.js for this purpose)
    var htmlContent = convertMarkdownToHtml(markdownContent);

    var renderedContent = document.getElementById("renderedContent");
    renderedContent.innerHTML = htmlContent;
}

