import { compliance, setCompliance, progress, fairQueryParams } from './store'
import { nQuestions } from './read-questions'
import { describe, expect, test } from 'vitest'


describe('after changing the compliance', () => {

    const newCompliance = new Array(nQuestions.total).fill(9);
    setCompliance(newCompliance)

    test('compliance should have updated', () => {
        expect(compliance.value).toStrictEqual(newCompliance)
    })

    test.todo('badge should have updated', () => {
    })

    test.todo('fair query params should have updated', () => {
    })

})
