import getData from '../utils/getData'

describe("fetch api", () => {
    beforeEach(() => {
        fetch.resetMocks()
    })

    test("llamada a la api y return data", () => {
        fetch.mockResponseOnce(JSON.stringify({data: "12345"}))

        getData("https://google.com")
        .then(res => {
            expect(res.data).toEqual("12345")
        })
    })
})
