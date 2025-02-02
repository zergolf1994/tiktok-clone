<h2 align='center'>TikTok clone | video sharing web app</h2>

![](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8ia7odl3vkqcurq6v91s.png)

<p align='center'>
  <img  src='https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6z1029fv99zdmni361i3.png' />
</p>

### Features

- [x] Authentication 🔑 - (login | logout with google auth provider)
- [x] Upload Video 🎞
- [x] Delete (videos | comments) by author 🤔🫣
- [x] Video Detail ✨
- [x] Different Topic page 👀✨
- [x] Search (by topic | by keywords) 👀🔎
- [x] User Profile 🧸👩🏿‍💻 (editable bio)
- [x] Follow | Unfollow 👥
- [x] Like | Comment ❤️‍🔥💬
- [x] Social share 🌍🚀 (native sharing mechanism on mobile device)
- [x] Theme 🌞🌙 (light | dark)
- [x] Progressive web app (PWA) 🚀🔥
- [x] Fully Responsive 📱💻

### Tech stack

- [x] **Frontend** - [Nextjs](https://nextjs.org/)
- [x] **Type checking** - [Typescript](https://www.typescriptlang.org/)
- [x] **Backend** - [Sanity](https://www.sanity.io/)
- [x] **Styling** - [Tailwindcss](https://tailwindcss.com/)
- [x] **UI Component** - [HeadlessUI](https://headlessui.com/)
- [x] **Auto play on scroll** - [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [x] **Authentication** - [Nextauth](https://next-auth.js.org/)
- [x] **State management** - [Zustand](https://zustand-demo.pmnd.rs/)

<!-- Run Locally -->

### :running: Run Locally

#### Clone the project

```bash
  git@github.com:zwelhtetyan/tiktok-clone.git
```

#### Go to the project directory

```bash
  cd tiktok-clone
```

#### Remove remote origin

```bash
  git remote remove origin
```

#### Install dependencies

```bash
  yarn
```

#### :key: Environment Variables

To run this project, you will need to add the following environment variables to your .env.local file

`GOOGLE_CLIENT_ID` - (`your google client id`)

`GOOGLE_CLIENT_SECRET` - (`your google client secret`)

`NEXTAUTH_URL` - (`http://localhost:3000`)

#### Start the server

```bash
  yarn dev
```

And then, you can view client version on [http://localhosts:3000](http://localhosts:3000)

### Create sanity studio

Firstly, follow the instructions from sanity's official documentation
[here.](https://www.sanity.io/get-started/create-project?originUrl=https%3A%2F%2Fwww.sanity.io%2Fdocs%2Fgetting-started-with-sanity)

After creating sanity account from above instructions, you will get create command to install sanity studio like this `npm create sanity@latest -- --template get-started --project PROJECTID --dataset production --provider PROVIDER_NAME`

And then, create a new folder under the root folder

```bash
  mkdir sanity-backend
```

#### Install sanity studio

```bash
  cd sanity-backend
  npm create sanity@latest -- --template get-started --project `YOUR_PROJECTID` --dataset production --provider `YOUR_PROVIDERNAME`
```

And then, replace your `schemas` folder with mine (`from sanity/schemas`)

#### Run sanity studio

```bash
  yarn dev
```

And then, you can view sanity studio on [http://localhosts:3333](http://localhosts:3333)

Get your sanity token from sanity studio to add to env

`NEXT_PUBLIC_SANITY_TOKEN` - (`your sanity token`)

<!-- Contributing -->

<br />

### :wave: Contributing

<a href="https://github.com/Louis3797/awesome-readme-template/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Louis3797/awesome-readme-template" />
</a>

#### Contributions are always welcome!

<br />

<!-- Contact -->

### Author

- [@zwelhtetyan](https://www.linkedin.com/in/zwelhtetyan/)
