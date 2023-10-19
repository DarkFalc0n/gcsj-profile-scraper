interface BadgeData {
  badgeName: string
  earnedOn: Date
}

interface BadgesInfo {
  _id: number
  name: string
  skillBadges: number
  courseBadges: number
  genAIbadges: number
  lastBadgeDate: Date
  allCompleted: boolean
}

interface StudentEntry {
  'Student Name': string
  'Profile URL': string
}
