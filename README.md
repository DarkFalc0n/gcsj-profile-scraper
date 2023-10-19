# Google Cloud Study Jam Profile Scraper

![Typescript](https://img.shields.io/badge/Typescript-yellow?style=for-the-badge&logo=typescript)

## About

![Study Jam Banner](https://lh3.googleusercontent.com/uu8RsBaxJVLl5pXc4O3y8SukFWWBMJJECEd_0K01uKKMRzCn3DjrHmElSnhJd96ap8OUVDzvJ8XdHK3KFhRW8g=w02400)

#### This project was aimed at scraping the public badge profiles of the Google Cloud Study Jam participants. This data can then be used in any project through a MongoDB database. This is especially helpful for creating a leaderboard for the program.

## How to use

- Clone the repository in your desired directory
- Store the public profile URLs in the `./src/data` directory as `input.csv` _<br>(Don't worry, you only need to do this once, this is required to fetch the public badge profile URLs)_
- **(IMPORTANT!)** The CSV must be formatted as below with the two fields: `Student Name` and `Profile URL`  <br>
  ![image](https://github.com/DarkFalc0n/gcsj-profile-scraper/assets/59203815/26fa5e5f-ff67-4ed6-afb0-4ac120365bc6)
- Create your own `.env` and store your own MongoDB Atlas URI there. _(See `.env.example`)_
- Install the `node_modules` with
  ```
  npm install
  ```
  or
  ```
  yarn install
  ```
  or
  ```
  pnpm install
  ```
- Run locally using
  ```
  npm run dev
  ```
  or
  ```
  yarn dev
  ```
  or
  ```
  pnpm dev
  ```

## ![MIT License](https://img.shields.io/badge/MIT-License-green?style=for-the-badge)
