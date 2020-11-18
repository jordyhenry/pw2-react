# ⚡ PW² - React

A React Application that easilly allow you to re-scale your images to the right power of two dimensions.

This application was developed as an usage example of [⚡PW²](https://www.npmjs.com/package/pw2) library.


You can check it live, and use it [right here](https://pw2-react.vercel.app/)

## Motivation

Games and real-time applications, in general, tend to prefer images and textures with power-of-two dimensions, they make it easier to generate eventual mipmaps, consume less GPU memory, and increase the overall performance.

But it's time-consuming to find the right power-of-two dimensions for that 1200x612 texture and resize it yourself, that's where [⚡PW²](https://www.npmjs.com/package/pw2) comes in handy.

But if you're not a developer/tech person, don't worry. 

⚡PW² - React lets you upload you textures directly to the browser, resize them anyway you may want and download the result textures either individually or packed in a zip file.


This project was done for the cs50 Final Project assignment.

## License

[MIT](https://github.com/jordyhenry/pw2-react/blob/master/LICENSE)

## TODO
- Update pw2 and refactor for compatibility
- Remove Buffer casting on LandingPage readFile function on [./src/pages/LandingPage/index.ts](https://github.com/jordyhenry/pw2-react/blob/master/src/pages/LandingPage/index.tsx#L187) (this item depends directly from the pw2 update)
- Add [pw2-cli](https://www.npmjs.com/package/pw2-cli) link to [./src/utils/RelatedLinks.ts](https://github.com/jordyhenry/pw2-react/blob/master/src/utils/RelatedLinks.ts)
- Add snack message for rejected files due to limitations on [./src/utils/UploadConfiguration.ts](https://github.com/jordyhenry/pw2-react/blob/master/src/utils/UploadConfiguration.ts)
- Fix any English misspells (sorry guys, it's not my mother language  🤷‍♂️ )