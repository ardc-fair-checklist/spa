import { compliance, setCompliance, progress, fairQueryParams, nQuestions, setQuestions, QuestionType } from './store'
import { beforeEach, describe, expect, test } from 'vitest'
import { questions } from './test-data.json'


setQuestions(questions as QuestionType[]);

describe('initial state', () => {
   test('compliance should be all zeros', () => {
      expect(compliance.value).toStrictEqual([0, 0, 0, 0]);
   })
   test('progress should be zero', () => {
      expect(progress.value.f).toStrictEqual("0%");
      expect(progress.value.a).toStrictEqual("0%");
      expect(progress.value.i).toStrictEqual("0%");
      expect(progress.value.r).toStrictEqual("0%");
      expect(progress.value.overall).toStrictEqual("0%");
   })
   test('fairQueryParams should be zeros', () => {
      expect(fairQueryParams.value).toBeTypeOf('string')
      const expected = ['f=' + '0'.repeat(nQuestions.value.f),
                        'a=' + '0'.repeat(nQuestions.value.a),
                        'i=' + '0'.repeat(nQuestions.value.i),
                        'r=' + '0'.repeat(nQuestions.value.r)].join('&');
      expect(fairQueryParams.value).toContain(expected);
   })
})

describe('progress', () => {
   beforeEach(() => {
      setCompliance([0, 0, 0, 0]);
   })
   test('F score should update after compliance updates', () => {
      const newCompliance = [1, 0, 0, 0];
      setCompliance(newCompliance);
      expect(progress.value.f).toStrictEqual("100%");
      expect(progress.value.a).toStrictEqual("0%");
      expect(progress.value.i).toStrictEqual("0%");
      expect(progress.value.r).toStrictEqual("0%");
      expect(progress.value.overall).toStrictEqual("25%");
   });
   test('A score should update after compliance updates', () => {
      const newCompliance = [0, 1, 0, 0];
      setCompliance(newCompliance);
      expect(progress.value.f).toStrictEqual("0%");
      expect(progress.value.a).toStrictEqual("100%");
      expect(progress.value.i).toStrictEqual("0%");
      expect(progress.value.r).toStrictEqual("0%");
      expect(progress.value.overall).toStrictEqual("25%");
   });
   test('I score should update after compliance updates', () => {
      const newCompliance = [0, 0, 1, 0];
      setCompliance(newCompliance);
      expect(progress.value.f).toStrictEqual("0%");
      expect(progress.value.a).toStrictEqual("0%");
      expect(progress.value.i).toStrictEqual("100%");
      expect(progress.value.r).toStrictEqual("0%");
      expect(progress.value.overall).toStrictEqual("25%");
   });
   test('R score should update after compliance updates', () => {
      const newCompliance = [0, 0, 0, 1];
      setCompliance(newCompliance);
      expect(progress.value.f).toStrictEqual("0%");
      expect(progress.value.a).toStrictEqual("0%");
      expect(progress.value.i).toStrictEqual("0%");
      expect(progress.value.r).toStrictEqual("100%");
      expect(progress.value.overall).toStrictEqual("25%");
   });
})

describe('fairQueryParams', () => {
   beforeEach(() => {
      setCompliance([0, 0, 0, 0]);
   })
   test('F value should update after compliance updates', () => {
      const newCompliance = [1, 0, 0, 0];
      setCompliance(newCompliance);
      expect(fairQueryParams.value).toContain('f=1');
      expect(fairQueryParams.value).toContain('a=0');
      expect(fairQueryParams.value).toContain('i=0');
      expect(fairQueryParams.value).toContain('r=0');
   });
   test('A value should update after compliance updates', () => {
      const newCompliance = [0, 1, 0, 0];
      setCompliance(newCompliance);
      expect(fairQueryParams.value).toContain('f=0');
      expect(fairQueryParams.value).toContain('a=1');
      expect(fairQueryParams.value).toContain('i=0');
      expect(fairQueryParams.value).toContain('r=0');
   });
   test('I value should update after compliance updates', () => {
      const newCompliance = [0, 0, 1, 0];
      setCompliance(newCompliance);
      expect(fairQueryParams.value).toContain('f=0');
      expect(fairQueryParams.value).toContain('a=0');
      expect(fairQueryParams.value).toContain('i=1');
      expect(fairQueryParams.value).toContain('r=0');
   });
   test('R value should update after compliance updates', () => {
      const newCompliance = [0, 0, 0, 1];
      setCompliance(newCompliance);
      expect(fairQueryParams.value).toContain('f=0');
      expect(fairQueryParams.value).toContain('a=0');
      expect(fairQueryParams.value).toContain('i=0');
      expect(fairQueryParams.value).toContain('r=1');
   });
})
