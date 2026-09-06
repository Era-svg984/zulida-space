const params = new URLSearchParams(window.location.search);
const query = params.get("q");

document.getElementById("searchBox").value = query;

const welcomeMsg = document.getElementById("welcomeMsg");
const resultsDiv = document.getElementById("results");

if (query) {
  // ✨ Welcome message with emojis
  welcomeMsg.innerHTML = `🌸 Welcome Ziniya! You searched for <b>"${query}"</b> 💫<br>Hope you find something amazing today 💖`;

  // 🌐 Show styled result
  resultsDiv.innerHTML = `
    <div class="result-box">
      🌍 <a href="https://www.google.com/search?q=${query}" target="_blank">
      View full results on Google 🔗</a>
    </div>

    <div class="result-box">
      📚 <a href="https://www.youtube.com/results?search_query=${query}" target="_blank">
      Watch related videos on YouTube 🎥</a>
    </div>

    <div class="result-box">
      💡 <a href="https://en.wikipedia.org/wiki/${query}" target="_blank">
      Learn more on Wikipedia 📖</a>
    </div>
  `;
}