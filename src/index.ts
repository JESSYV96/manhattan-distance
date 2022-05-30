export type Point = {
    x: number
    y: number
}

export function distanceBetweenTwoPoints(startPoint: Point, endPoint: Point): number {
    const horizontal: number = Math.abs(endPoint.x - startPoint.x)

    const vertical: number = Math.abs(endPoint.y - startPoint.y)

    return horizontal + vertical
}