import * as yup from 'yup'

declare module 'yup' {
	interface StringSchema {
		sampleTest(): StringSchema
	}
}

yup.addMethod(yup.string, 'sampleTest', () => {
	return yup.string().test('sampleTest', 'error message', async (value) => {
		if (!value) return true

		// return true if OK
		return value === 'ok'
	})
})

export default yup
