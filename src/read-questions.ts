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
    F: deriveNumberOfQuestions("F"),
    A: deriveNumberOfQuestions("A"),
    I: deriveNumberOfQuestions("I"),
    R: deriveNumberOfQuestions("R"),
    total: questionData.length
}

export const slices = {
    F: [0, nQuestions.F],
    A: [nQuestions.F, nQuestions.F + nQuestions.A],
    I: [nQuestions.F + nQuestions.A, nQuestions.F + nQuestions.A + nQuestions.I],
    R: [nQuestions.F + nQuestions.A + nQuestions.I, nQuestions.total],
}

export const nPointsMax = {
    F: derivePointsMax("F"),
    A: derivePointsMax("A"),
    I: derivePointsMax("I"),
    R: derivePointsMax("R"),
    total: derivePointsMax("*")
}


export const questions = questionData.map((q, i) => {
    return { ...q, index:i }
})
