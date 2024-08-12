import { jest, it, expect } from "@jest/globals";
import { test } from "./index";

const mockFn = jest.fn();

it("should be 1", () => {
    expect(test).toEqual("22")
})

it("should be called", () => {
  mockFn();
  expect(mockFn).toBeCalledTimes(1)

});