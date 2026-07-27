import { expect, test } from '@jest/globals'
import { isShallowObjEq } from '../isShallowObjEq'

test('same reference is equal', () => {
  const a = { x: 1 }
  expect(isShallowObjEq(a, a)).toBe(true)
})

test('distinct objects with equal shallow values are equal', () => {
  expect(isShallowObjEq({ x: 1, y: 2 }, { x: 1, y: 2 })).toBe(true)
})

test('objects with differing values are not equal', () => {
  expect(isShallowObjEq({ x: 1 }, { x: 2 })).toBe(false)
})

test('objects with differing keys are not equal', () => {
  expect(isShallowObjEq({ x: 1 }, { y: 1 } as any)).toBe(false)
  expect(isShallowObjEq({ x: 1 }, { x: 1, y: 2 } as any)).toBe(false)
})

test('shallow (not deep) comparison of nested references', () => {
  const nested = { n: 1 }
  expect(isShallowObjEq({ a: nested }, { a: nested })).toBe(true)
  expect(isShallowObjEq({ a: { n: 1 } }, { a: { n: 1 } })).toBe(false)
})

test('arrays with equal element references are equal', () => {
  const el = { key: 'x' }
  expect(isShallowObjEq([el], [el])).toBe(true)
  expect(isShallowObjEq([el], [{ key: 'x' }])).toBe(false)
})

test('null and non-object operands', () => {
  expect(isShallowObjEq(null as any, null as any)).toBe(true)
  expect(isShallowObjEq({ x: 1 }, null as any)).toBe(false)
  expect(isShallowObjEq({ x: 1 }, undefined as any)).toBe(false)
})
