import users from 'database/users'
import locations from 'database/locations'

function getRandom (arr, n) {
  const result = new Array(n)
  let len = arr.length
  const taken = new Array(len)
  if (n > len) { throw new RangeError('getRandom: more elements taken than available') }
  while (n--) {
    const x = Math.floor(Math.random() * len)
    result[n] = arr[x in taken ? taken[x] : x]
    taken[x] = --len in taken ? taken[len] : len
  }
  return result
}

function Api (req, res) {
  const response = []
  const randUsers = getRandom(users, 5)
  const randLocations = getRandom(locations, 5)

  for (let i = 0; i < 5; i++) {
    response[i] = {
      first: randUsers[i].first,
      last: randUsers[i].last,
      gender: randUsers[i].gender,
      location: randLocations[i]
    }
  }
  res.status(200).json(response)
}

export default Api
