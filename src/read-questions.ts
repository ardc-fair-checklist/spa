import questions from './assets/0.1/questions.json'

const derivePointsMax = (aspect: "F" | "A" | "I" | "R") => {
    return questions.filter(question => question.aspect === aspect)
                    .map(question => Math.max(...question.answers.map(answer => answer.score)))
                    .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
}

const nPointsMaxF = derivePointsMax("F")
const nPointsMaxA = derivePointsMax("A")
const nPointsMaxI = derivePointsMax("I")
const nPointsMaxR = derivePointsMax("R")


export const nPointsMax = {
    "F": nPointsMaxF,
    "A": nPointsMaxA,
    "I": nPointsMaxI,
    "R": nPointsMaxR,
    "overall": nPointsMaxF + nPointsMaxA + nPointsMaxI + nPointsMaxR
}

export { questions }
