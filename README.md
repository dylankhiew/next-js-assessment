# NextJS Assessment

This project is made using [Next.js](https://nextjs.org/) bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

---

## About this Project

This project contains two screens. We will be diving deep into both of the screens and what it does:

#### First Screen (Login Screen)
The first screen consists of the login screen, where both the name and email are hard-coded and disabled.
User are only allowed to enter their password.
The password field is hidden at first, but will be made visible if the user clicks on the eye icon.
There are several checks/requirements for the password before the user is allowed to continue:

1. Contains at least 8 characters.
2. Contains both lowercase and uppercase characters.
3. Contains at least 1 symbol.

There is a strength indicator that will dynamnically update based on the input by the user.
Once the criterias are fuffilled, the Continue button will be enabled and the user are allowed to proceed.


#### Second Screen (Risk Graph Screen)
In this screen, the user are presented with a set of labels (which can be added under riskGraphConstants.ts), where they are allowed to drag-and-drop the labels onto the graph/image/element presented. Upon dragging, the user will be prompted a floating banner which tells the user the coordinates of which the label has been placed.

---

### Showcase

The showcase can be found on [Google Drive](https://drive.google.com/file/d/1AxB3EdkaKvxjhF-JhC7dlJgsIxMtnoEg/view?usp=share_link) (tried to upload to GitHub but file is too large).


You may also visit the live demo [here](https://dylan-next-js-assessment.vercel.app/).

| UI Illustration  | Development |
| ------------- | ------------- |
| <img src="https://user-images.githubusercontent.com/16792330/221594820-ad06b037-5c2b-4d48-aa3d-73fac7a2375d.png" width=400 /> | <img src="https://user-images.githubusercontent.com/16792330/221595473-2739eb0b-7814-4dff-812e-8d7ea22090e2.png" width=400 /> |
| <img src="https://user-images.githubusercontent.com/16792330/221596539-a68418c2-327c-4a23-ad7b-b25dc5934882.png" width=400 /> | <img src="https://user-images.githubusercontent.com/16792330/221596589-60b839f4-e656-40df-baee-043ff0f283cd.png" width=400 /> |

---

## Checking Out Locally

First, let's run the following to ensure all libaries are retrieved and up-to-date:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Findings and Thought Process

1. To ensure the similarity to the UI Illustration screens, I did some Googling to make sure the background image, logo and font was similar. I did reference from the login from GIFT.ed directly.
2. Researched on the libraries that will be revelant to the tasks.
4. I decided to go with NextJS as it would be a good oppurtunity to get hands on with this framework.
5. I've added test specs for the login screens, mainly to ensure that the password strength indiciator styling and password requirements check goes as expected.
6. The designs were added first, and the logic comes later.

## Limitations

1. The fonts declaration can be imported better. Right now it's declared in every file and its becoming tedious to declare the same type every screen. I have not explore on this limitation yet, but I've tried to include it in a separate file but it did not work.
2. The requirement for the second question (When user drop the label into one of the boxes, an unique message that mapped to the
box will be displayed) was not met since the element of the middle area could be an image, so there was no proper way to map each boxes when it's an image.



