import { mount } from "@vue/test-utils";
import Question from './Question.vue'
import { describe, expect, test } from 'vitest'


describe('after mounting a Question component', () => {

    const props = {
        question: {
            answers: [{
                    id: "answer0",
                    score: 0,
                    text: "answer0 text"
                }, {
                    id: "answer1",
                    score: 1,
                    text: "answer1 text"
                }],
            guidance: "the guidance text",
            index: 0,
            text: "question0 text"
        }
    }
    const wrapper = mount(Question, { props });

    test('it has a property named question', () => {
        expect(wrapper.vm.question).toBeDefined()
        expect(wrapper.vm.question).toBeTypeOf('object')
    })

    test('it has the correct question answers array', () => {
        expect(wrapper.vm.question.answers).toBeDefined()
        expect(wrapper.vm.question.answers).toBeInstanceOf(Array)
        expect(wrapper.vm.question.answers).toStrictEqual(props.question.answers)
    })

    test('it has the correct question guidance string', () => {
        expect(wrapper.vm.question.guidance).toBeDefined()
        expect(wrapper.vm.question.guidance).toBeTypeOf('string')
        expect(wrapper.vm.question.guidance).toBe(props.question.guidance)
    })

    test('it has the correct question index', () => {
        expect(wrapper.vm.question.index).toBeDefined()
        expect(wrapper.vm.question.index).toBeTypeOf('number')
        expect(wrapper.vm.question.index).toBe(props.question.index)
    })

    test('it has the correct question text', () => {
        expect(wrapper.vm.question.text).toBeDefined()
        expect(wrapper.vm.question.text).toBeTypeOf('string')
        expect(wrapper.vm.question.text).toBe(props.question.text)
    })

})
