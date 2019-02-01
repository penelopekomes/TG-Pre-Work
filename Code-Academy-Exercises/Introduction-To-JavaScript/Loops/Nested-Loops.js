// Write your code below

const bobsFollowers = ['Linda', 'Gene', 'Louise', 'Teddy']
const tinasFollowers = ['Jimmy', 'Gene', 'Louise']
const mutualFollowers = []

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i])
    }
  }
}

console.log(mutualFollowers)
