import fs from 'fs'
import Papa from 'papaparse'
import { scrapeMultipleProfiles, scraperPublicProfile } from './scraper'
import mongoClient from './mongoClient'
import { ObjectId } from 'mongodb'

const file = fs.readFileSync('./src/data/input.csv')
console.log('Reading the csv file')

Papa.parse(file.toString('utf8', 0), {
  header: true,
  complete: function (res) {
    console.log('Parsing the csv file')
    const entries: any = res.data
    scrapeMultipleProfiles(entries).then((allProfilesInfo) => {
      console.log('Scraping complete')
      mongoClient.connect().then(() => {
        console.log('Connected to MongoDB')
        const db = mongoClient.db('badges')
        const collection = db.collection('students')
        allProfilesInfo.forEach((profileInfo) => {
          collection.updateOne(
            {
              name: profileInfo.name,
              _id: profileInfo._id as any,
            },
            { $set: profileInfo },
            { upsert: true }
          )
        })
        console.log('Stored all the students data')
      })
    })
  },
})
