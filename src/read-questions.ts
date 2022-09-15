import questionData from './assets/0.1/questions.json'

const derivePointsMax = (aspect: "F" | "A" | "I" | "R" | "*") => {
    let selectedQuestions = questionData;
    if (aspect !== "*") {
        selectedQuestions = questionData.filter(question => question.aspect === aspect)
    }
    return selectedQuestions.map(question => Math.max(...question.answers.map(answer => answer.score)))
                            .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
}

const deriveNumberOfQuestions = (aspect: "F" | "A" | "I" | "R") => {
    return questionData.filter(question => question.aspect === aspect).length
}

export const nQuestions = {
    f: deriveNumberOfQuestions("F"),
    a: deriveNumberOfQuestions("A"),
    i: deriveNumberOfQuestions("I"),
    r: deriveNumberOfQuestions("R"),
    total: questionData.length
}

type Slices = {
    f: [number, number]
    a: [number, number]
    i: [number, number]
    r: [number, number]
}

export const slices: Slices = {
    f: [0, nQuestions.f],
    a: [nQuestions.f, nQuestions.f + nQuestions.a],
    i: [nQuestions.f + nQuestions.a, nQuestions.f + nQuestions.a + nQuestions.i],
    r: [nQuestions.f + nQuestions.a + nQuestions.i, nQuestions.total],
}

export const nPointsMax = {
    f: derivePointsMax("F"),
    a: derivePointsMax("A"),
    i: derivePointsMax("I"),
    r: derivePointsMax("R"),
    total: derivePointsMax("*")
}


export const questions = questionData.map((q, i) => {
    return { ...q, index:i }
})
