import { compliance, setCompliance, progress, fairQueryParams, nQuestions } from './store'
import { beforeEach, describe, expect, test } from 'vitest'

const zeros = new Array(nQuestions.total).fill(0);
const ones = new Array(nQuestions.total).fill(1);


describe('initial compliance', () => {
    test('compliance should be all zeros', () => {
        expect(compliance.value).toStrictEqual(zeros)
    })
    test('progress should be all zeros', () => {
        expect(progress.value.f).toBe('0%')
        expect(progress.value.a).toBe('0%')
        expect(progress.value.i).toBe('0%')
        expect(progress.value.r).toBe('0%')
        expect(progress.value.overall).toBe('0%')
    })
    test('fairQueryParams should be all zeros', () => {
        expect(fairQueryParams.value).toContain('&f=' + '0'.repeat(nQuestions.f))
        expect(fairQueryParams.value).toContain('&a=' + '0'.repeat(nQuestions.a))
        expect(fairQueryParams.value).toContain('&i=' + '0'.repeat(nQuestions.i))
        expect(fairQueryParams.value).toContain('&r=' + '0'.repeat(nQuestions.r))
        expect(fairQueryParams.value.length).toBe(nQuestions.total + 3 * 4)
    })
})

describe('compliance', () => {
    beforeEach(() => {
        setCompliance(ones)
    })
    test('compliance getter should update after using compliance setter', () => {
        expect(compliance.value).toStrictEqual(ones)
    })
    test('progress should update after compliance is updated', () => {
        expect(progress.value).toBeTypeOf('object')
        expect(Object.keys(progress.value)).toStrictEqual(['f', 'a', 'i', 'r', 'overall'])
        expect(progress.value.f).toBeTypeOf('string')
        expect(progress.value.f.slice(-1)).toBe('%')
        expect(parseFloat(progress.value.f.slice(0, -1))).toBeGreaterThan(0)
        expect(progress.value.a).toBeTypeOf('string')
        expect(progress.value.a.slice(-1)).toBe('%')
        expect(parseFloat(progress.value.a.slice(0, -1))).toBeGreaterThan(0)
        expect(progress.value.i).toBeTypeOf('string')
        expect(progress.value.i.slice(-1)).toBe('%')
        expect(parseFloat(progress.value.i.slice(0, -1))).toBeGreaterThan(0)
        expect(progress.value.r).toBeTypeOf('string')
        expect(progress.value.r.slice(-1)).toBe('%')
        expect(parseFloat(progress.value.r.slice(0, -1))).toBeGreaterThan(0)
        expect(progress.value.overall).toBeTypeOf('string')
        expect(progress.value.overall.slice(-1)).toBe('%')
        expect(parseFloat(progress.value.overall.slice(0, -1))).toBeGreaterThan(0)

    })
    test('fairQueryParams should update after compliance is updated', () => {
        expect(fairQueryParams.value).toBeTypeOf('string')
        expect(fairQueryParams.value).toContain('&f=' + '1'.repeat(nQuestions.f))
        expect(fairQueryParams.value).toContain('&a=' + '1'.repeat(nQuestions.a))
        expect(fairQueryParams.value).toContain('&i=' + '1'.repeat(nQuestions.i))
        expect(fairQueryParams.value).toContain('&r=' + '1'.repeat(nQuestions.r))
        expect(fairQueryParams.value.length).toBe(nQuestions.total + 3 * 4)
    })
})
