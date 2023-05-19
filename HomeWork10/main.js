let btnTransition = document.getElementById("transition");
let container = document.getElementsByTagName("main")[0];
let inputVal = document.getElementById("input");
async function getData(url) {
  let data = await fetch(url);
  return data.json();
}
btnTransition.addEventListener("click", () => {
  if (inputVal.value.substring(0, 28) === "https://api.github.com/users") {
    getData(`${inputVal.value}`).then((data) => {
      console.log(inputVal.value);

      container.innerHTML = `
      <div class="logo">
              <div class="image">
                <img src="${data.avatar_url}" alt="steve" />
              </div>
            </div>
            <div class="info">
              <button class="icon">
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </button>
              <div class="info-all">
                <h1>${data.name}</h1>
                <p>${data.login}</p>
      
                <div class="follow">
                  <div class="followers">
                    <h1>${data.followers}</h1>
                    <p>Followers</p>
                  </div>
      
                  <div class="following">
                    <h1>${data.following}</h1>
                    <p>Following</p>
                  </div>
                </div>
                <button id="transition">Go To Profile</button>
                <p class="about">
                 ${data.bio}
                </p>
              </div>
            </div>
      `;
    });
  } else {
    alert("wrong API");
  }
});
