import React, { useState } from 'react'

export function countEasyRoute(spot) {
  return (
    spot.routes.boulder.filter(
      boulder =>
        boulder.difficulty.includes('3') ||
        boulder.difficulty.includes('4') ||
        boulder.difficulty.includes('5')
    ).length +
    spot.routes.sport.filter(
      sportRoute =>
        sportRoute.difficulty.includes('3') ||
        sportRoute.difficulty.includes('4') ||
        sportRoute.difficulty.includes('5')
    ).length
  )
}

export function countMediumRoute(spot) {
  return (
    spot.routes.boulder.filter(
      boulder =>
        boulder.difficulty.includes('6') || boulder.difficulty.includes('7')
    ).length +
    spot.routes.sport.filter(
      sportRoute =>
        sportRoute.difficulty.includes('6') ||
        sportRoute.difficulty.includes('7')
    ).length
  )
}
export function countHardRoute(spot) {
  return (
    spot.routes.boulder.filter(
      boulder =>
        boulder.difficulty.includes('8') || boulder.difficulty.includes('9')
    ).length +
    spot.routes.sport.filter(
      sportRoute =>
        sportRoute.difficulty.includes('8') ||
        sportRoute.difficulty.includes('9')
    ).length
  )
}
