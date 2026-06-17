const repos = [
    { repo: "A", stars: 100 },
    { repo: "B", stars: 200 }
];

let totalStars = 0;

for(let i = 0; i < repos.length; i++) {
    totalStars += repos[i].stars;
}

console.log(totalStars);