import { describe, expect, test } from 'vitest'
import Ajv from "ajv"

import schema from './schema.json'
import questions from './questions.json'

const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}

const validate = ajv.compile(schema)

describe('the questions data', () => {

    test('should validate against the schema', () => {
        const valid = validate(questions)
        expect(valid).toBe(true)
    })

})
