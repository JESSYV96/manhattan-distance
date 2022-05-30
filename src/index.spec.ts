// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import * as matchers from "jest-extended";
import { distanceBetweenTwoPoints, Point } from ".";

expect.extend(matchers);

describe('one dimensional distance', () => {
  test("Distance beetween himseft should return 0", function () {
    const startPoint: Point = {
      x: 0,
      y: 0,
    }

    const expectedValue: number = 0

    expect(distanceBetweenTwoPoints(startPoint, startPoint)).toEqual(expectedValue);
  });

  test("Distance beetween himseft should return 0", function () {
    const startPoint: Point = {
      x: 0,
      y: 1,
    }

    const expectedValue: number = 0

    expect(distanceBetweenTwoPoints(startPoint, startPoint)).toEqual(expectedValue);
  });

  test("[Triangulation] Distance beetween himseft should return 0", function () {
    const startPoint: Point = {
      x: -3,
      y: 0,
    }

    const expectedValue: number = 0

    expect(distanceBetweenTwoPoints(startPoint, startPoint)).toEqual(expectedValue);
  });

  test("Distance is substration of endPoint - startPoint", function () {
    const startPoint: Point = {
      x: 0,
      y: 0,
    }

    const endPoint: Point = {
      x: 3,
      y: 0,
    }

    const expectedValue: number = 3

    expect(distanceBetweenTwoPoints(startPoint, endPoint)).toEqual(expectedValue);
  });

  test("[Triangulation] Distance is substration of endPoint - startPoint", () => {
    const startPoint: Point = {
      x: -5,
      y: 0,
    }

    const endPoint: Point = {
      x: 8,
      y: 0,
    }

    const expectedValue: number = 13

    expect(distanceBetweenTwoPoints(startPoint, endPoint)).toEqual(expectedValue);
  })

  test("Distance can't return negative value", function () {
    const startPoint: Point = {
      x: 6,
      y: 0,
    }

    const endPoint: Point = {
      x: 1,
      y: 0,
    }

    const expectedValue: number = 5

    expect(distanceBetweenTwoPoints(startPoint, endPoint)).toEqual(expectedValue);
  })

  test("Distance can't return negative value", function () {
    const startPoint: Point = {
      x: 2,
      y: 0,
    }

    const endPoint: Point = {
      x: 0,
      y: 0,
    }

    const expectedValue: number = 2

    expect(distanceBetweenTwoPoints(startPoint, endPoint)).toEqual(expectedValue);
  })

  test("[Triangulation] Distance can't return negative value", function () {
    const startPoint: Point = {
      x: 9,
      y: 0,
    }

    const endPoint: Point = {
      x: 2,
      y: 0,
    }

    const expectedValue: number = 7

    expect(distanceBetweenTwoPoints(startPoint, endPoint)).toEqual(expectedValue);
  })
})


describe('Two dimensional distance', () => {
  test("Distance between two points 2D should return 4", () => {
    const startPoint: Point = {
      x: 0,
      y: 0,
    }

    const endPoint: Point = {
      x: 3,
      y: 1,
    }

    const expectedValue: number = 4

    expect(distanceBetweenTwoPoints(startPoint, endPoint)).toEqual(expectedValue);
  })

  test("Distance between two points 2D should return 3", () => {
    const startPoint: Point = {
      x: 1,
      y: 1,
    }

    const endPoint: Point = {
      x: 3,
      y: 2,
    }

    const expectedValue: number = 3

    expect(distanceBetweenTwoPoints(startPoint, endPoint)).toEqual(expectedValue);
  })

  test("[Triangulation] Distance between two points 2D should return", () => {
    const startPoint: Point = {
      x: -1,
      y: 0,
    }

    const endPoint: Point = {
      x: 1,
      y: 0,
    }

    const expectedValue: number = 2

    expect(distanceBetweenTwoPoints(startPoint, endPoint)).toEqual(expectedValue);
  })
})


