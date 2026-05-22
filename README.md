# TripleTen web_project_around_es

**Around The U.S.** is a photo gallery web application built at TripleTen with **HTML**, **CSS**, and **vanilla JavaScript**. The project uses **BEM**, **responsive design**, and a modular JavaScript structure for popups, cards, and form validation.

## Live Demo

<https://ricardotrejosanjuan.github.io/web_project_around_es/>

![Around The U.S. Screenshot](./images/Screenshot.png)

## Current Features

- Edit profile information through a popup.
- Create new cards through a form.
- Dynamically render the initial cards.
- Like and delete cards.
- Open images in an enlarged popup view.
- Close modals with the close button, overlay click, and `Escape` key.
- Real-time form validation.
- Disabled submit buttons when a form is invalid.
- Clear validation errors when reopening forms.

## Technologies

- HTML5
- CSS3
- JavaScript ES6 Modules
- BEM
- Responsive Design

## Project Structure

```text
├── blocks
│   ├── card.css
│   ├── cards.css
│   ├── content.css
│   ├── footer.css
│   ├── header.css
│   ├── page.css
│   ├── popup.css
│   └── profile.css
├── images
│   ├── Screenshot.png
│   ├── add-icon.svg
│   ├── avatar.jpg
│   ├── close.svg
│   ├── delete-icon.svg
│   ├── edit-icon.svg
│   ├── like-active.svg
│   ├── like-inactive.svg
│   ├── logo.svg
│   └── placeholder.jpg
├── pages
│   └── index.css
├── scripts
│   ├── cards.js
│   ├── const.js
│   ├── index.js
│   ├── features
│   │   ├── card.js
│   │   ├── events.js
│   │   ├── profile.js
│   │   └── validate.js
│   ├── selectors
│   │   ├── card.elements.js
│   │   ├── popup.elements.js
│   │   └── profile.elements.js
│   └── utils
│       └── modal.js
├── vendor
│   ├── fonts
│   │   ├── Inter-Black.woff2
│   │   ├── Inter-Medium.woff2
│   │   └── Inter-Regular.woff2
│   ├── fonts.css
│   └── normalize.css
├── .editorconfig
├── .prettierignore
├── .gitignore
├── .prettierrc.json
├── README.md
└── index.html
```

## Recent Changes

### Version 1.0.4 - 2026-05-21

- Refactored `scripts/index.js` into a modular, responsibility-based architecture.
- Added separate modules for cards, profile, events, validation, and modal utilities.
- Moved DOM selectors into dedicated files.
- Added native form validation with visible UI error messages.
- Disabled `Save` and `Create` buttons when fields are invalid.
- Reset validation state when opening forms.
- Added global popup closing with overlay click and `Escape` key.
- Updated `index.html` and `blocks/popup.css` to support validation and visual states.

## Versions

| Version | Date       | Description                                               |
| ------- | ---------- | --------------------------------------------------------- |
| 1.0.0   | 2026-04-28 | Initial version                                           |
| 1.0.2   | 2026-04-28 | Added JavaScript and profile popup functionality          |
| 1.0.3   | 2026-04-30 | Added initial cards, image popup, like and delete actions |
| 1.0.4   | 2026-05-21 | Modularized JavaScript and added form validation          |

## Author

Ricardo Trejo
