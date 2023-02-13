const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];


function lolAge35Upper (streamer) {
    if (streamer.gameMorePlayed.includes("Legends")  && streamer.age >= 35) {
        streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase()
        return streamer.gameMorePlayed
    } else if (streamer.gameMorePlayed.includes("Legends")) {
        return streamer.gameMorePlayed
    }
}

const streamersLol35 = streamers.filter(lolAge35Upper)

console.log(streamersLol35)

