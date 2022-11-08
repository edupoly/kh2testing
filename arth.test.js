var sum = require('./arth');

test("test case for jest working....",()=>{
  expect(10+20).toBe(30)
})

test("test case for sum function...",()=>{
  expect(sum(12,34)).toBe(46)
})