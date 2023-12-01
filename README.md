# MULTI-STEP FORM

This project is for learning purpose.

## Table of content
[General Description](#general-description)

[Technologies](#technologies)

[Project Structure](#project-structure)

[Instruction](#instruction)

[React + Vite](#react--vite)

## General Description
<pre>
A React multi step form with multiple componenets including user & personal details, confirmation and success. We will use Material UI as well.
</pre>

## Technologies

- JavaScript
- React + Vite
- HTML
- Material UI

## Project Structure

* [src](./src)

    * [components/](./src/components)
        * [Confirm.jsx](./src/components/Confirm.jsx)
        * [FormPersonalDetails.jsx](./src/components/FormPersonalDetails.jsx)
        * [FormUserDetails.jsx](./src/components/FormUserDetails.jsx)
        * [MyAppBar.jsx](./src/components/MyAppBar.jsx)
        * [Success.jsx](./src/components/Success.jsx)
        * [UserForm.jsx](./src/components/UserForm.jsx)
    * [App.jsx](./src/App.jsx)
    * [main.jsx](./src/main.jsx)


## Instruction
1. Open your terminal and clone the repository with the following command: 
```
git clone https://github.com/TinNguyen01600/Muti-step-form
```
2. Install all the packages:
```
npm install
```
3. Start the application in your local machine:
```
npm run dev
```
4. Install Material UI:
```
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
```
** Or simply access the deployed version on Netlify (https://tin-nguyen-multi-step-form.netlify.app/).

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh