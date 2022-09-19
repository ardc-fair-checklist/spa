import { mount } from "@vue/test-utils";
import Answer from './Answer.vue'
import { describe, expect, test } from 'vitest'


describe('after mounting an Answer component', () => {

    const props = {
        answer: {
            id: "answer0",
            score: 0,
            text: "answer0 text"
        },
        isChecked: true,
        onClick: () => {}
    }
    const wrapper = mount(Answer, { props });

    test('it has a property named answer', () => {
        expect(wrapper.vm.answer).toBeDefined()
        expect(wrapper.vm.answer).toBeTypeOf('object')
    })

    test('it has the correct answer id', () => {
        expect(wrapper.vm.answer.id).toBeDefined()
        expect(wrapper.vm.answer.id).toBe(props.answer.id)
    })

    test('it has the correct answer score', () => {
        expect(wrapper.vm.answer.score).toBeDefined()
        expect(wrapper.vm.answer.score).toBe(props.answer.score)
    })

    test('it has the correct answer text', () => {
        expect(wrapper.vm.answer.text).toBeDefined()
        expect(wrapper.vm.answer.text).toBe(props.answer.text)
    })

    test('it has the correct isChecked value', () => {
        expect(wrapper.vm.isChecked).toBeDefined()
        expect(wrapper.vm.isChecked).toBe(props.isChecked)
    })

    test('it has the correct onClick method', () => {
        expect(wrapper.vm.onClick).toBeDefined()
        expect(wrapper.vm.onClick).toBe(props.onClick)
    })
})
