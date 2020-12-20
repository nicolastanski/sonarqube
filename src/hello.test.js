const hello = require('./hello')

test('it should return a message', () => {
    expect(hello.world()).toBe('Hello Dev FullCycle!')
})

test('it should return sum result as 3', () => {
    expect(hello.sum(1, 2)).toBe(3)
})

test('it should return sub result as 6', () => {
    expect(hello.sub(10, 4)).toBe(6)
})