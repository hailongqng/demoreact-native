# CampusX

![React logo](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K)

This is a mobile application build on React Native

## Start

```
yarn
yarn start
```

If your computer doesn't have nodejs and yarn:

- Install [Nodejs](https://nodejs.org/en/)
- Install [Yarn](https://yarnpkg.com/lang/en/)

If your computer doesn't not setup react native environment:

- Install [React Native CLI](https://reactnative.dev/docs/environment-setup)

## Coding Convention

This project already config eslint, if use VSCode, install these two extensions for automate styling:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

And add these to `settings.json` of VSCode

```
{
  "window.zoomLevel": 0,
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "eslint.autoFixOnSave": true,
  "prettier.eslintIntegration": true
}
```

## Project Structure

We intend to make this project a library which serves . Therefore, the project structured as below:

```
src
 ├── navigations
 ├── components
 ├── scenes
 ├── services
 ├── store
 ├── styles
 └── utils
```
