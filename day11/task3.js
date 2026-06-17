const text = "The fox is quick. The fox is smart.";

const lowerText = text.toLowerCase();

const words = lowerText.split(" ");

let count = 0;

for(let i = 0; i < words.length; i++) {
    if(words[i] === "fox") {
        count++;
    }
}

console.log("Fox appears:", count, "times");