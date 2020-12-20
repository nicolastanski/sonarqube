const hello = require('./hello')


test('it should return a message', () => {
    expect(hello.index()).toBe('Hello Dev FullCycle!')
})