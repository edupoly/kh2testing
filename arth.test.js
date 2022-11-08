var {add,sub} = require('./arth');

test("test case for jest working....",()=>{
  expect(10+20).toBe(30)
})

test("test case for sum function...",()=>{
  expect(add(12,34)).toBe(46)
})

test("test case for substraction function",()=>{
  expect(sub(11,5)).toBe(6)
})
test("test case for substraction of strings to be NaN",()=>{
  expect(sub('praveen','ganesh')).toBeNaN()
})
test("test case for substraction of string Numbers not to be NaN",()=>{
  expect(sub('100','200')).not.toBeNaN()
})
