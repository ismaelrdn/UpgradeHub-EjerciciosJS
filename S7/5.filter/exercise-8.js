const input$$ = document.querySelector("input")
const btn$$ = document.querySelector("button")

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

function streamerSearch (streamer) {
    if (streamer.includes(input$$.value)){
        return streamer.name
    }
}

const streamerFiltered = streamers.filter(streamerSearch)

btn$$.addEventListener("click", () => {
    console.log(streamerSearch)
})