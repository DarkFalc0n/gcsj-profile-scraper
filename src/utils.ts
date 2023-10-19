import { setMaxIdleHTTPParsers } from 'http'
import { requiredBadges } from './data/badgedata'
import { scraperPublicProfile } from './scraper'
export const getDateFromString = (badgeDate: string) => {
  badgeDate = badgeDate.trim()
  const regexPattern = /Earned (.*?) EDT/
  const matchedGroups = badgeDate.match(regexPattern)
  if (!matchedGroups) {
    throw new Error('Regex parsing error while trying to extract badge date')
  }
  const matchedText = matchedGroups[1]
  return new Date(matchedText)
}

export const validateBadge = (badgeName: string): string => {
  if (requiredBadges.courseBadges.includes(badgeName.trim())) {
    return 'course'
  } else if (requiredBadges.skillBadges.includes(badgeName.trim())) {
    return 'skill'
  } else if (requiredBadges.genAIbadges.includes(badgeName.trim())) {
    return 'genAI'
  } else {
    return 'invalid'
  }
}
export const sleep = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
