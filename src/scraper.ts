import axios from 'axios'
import * as cheerio from 'cheerio'
import { validateBadge, getDateFromString, sleep } from './utils'

export const scraperPublicProfile = async (
  profileURL: string,
  studentName: string,
  index: number
) => {
  let badgesInfo: BadgesInfo = {
    _id: index,
    name: studentName,
    courseBadges: 0,
    skillBadges: 0,
    genAIbadges: 0,
    lastBadgeDate: new Date(0),
    allCompleted: false,
  }
  const profilePage = await axios.request({ method: 'GET', url: profileURL })
  const $ = cheerio.load(profilePage.data)
  $('.profile-badges')
    .find('.profile-badge')
    .each((i, badge) => {
      const badgeName = $(badge).find('.ql-subhead-1').text().trim()
      const earnedOn = getDateFromString($(badge).find('.ql-body-2').text())
      const badgeType = validateBadge(badgeName)
      if (badgeType === 'course') {
        badgesInfo.courseBadges += 1
      }
      if (badgeType === 'skill') {
        badgesInfo.skillBadges += 1
      }
      if (badgeType === 'genAI') {
        badgesInfo.genAIbadges += 1
      }
      if (earnedOn > badgesInfo.lastBadgeDate) {
        badgesInfo.lastBadgeDate = earnedOn
      }
      if (
        badgesInfo.courseBadges +
          badgesInfo.skillBadges +
          badgesInfo.genAIbadges >=
        9
      ) {
        badgesInfo.allCompleted = true
      }
    })
  return badgesInfo
}

export const scrapeMultipleProfiles = async (entries: StudentEntry[]) => {
  let allProfilesInfo: BadgesInfo[] = []
  let index = 0
  for (const entry of entries) {
    console.log(
      `Scraping ${entry['Student Name']} (${index + 1}/${entries.length})`
    )
    const badgesInfo = await scraperPublicProfile(
      entry['Profile URL'],
      entry['Student Name'],
      index + 1
    )
    allProfilesInfo.push(badgesInfo)
    console.log(badgesInfo)
    await sleep(200)
    index += 1
  }
  return allProfilesInfo
}
