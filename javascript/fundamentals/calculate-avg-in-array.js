function betterThanAverage(classPoints, yourPoints) {
  const avg= classPoints.reduce((sum, num) => sum+num, 0) / classPoints.length
  if(yourPoints>avg)
    return true
  return false
}
