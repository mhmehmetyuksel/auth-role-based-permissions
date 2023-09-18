# Authentication and Role-based Permissions

A sample project for how to authenticate users and create protected rouse based on roles.

## Installation
Clone to project to your device.
```bash
git clone https://github.com/mhmehmetyuksel/auth-role-based-permissions.git
```
Install required packages
```bash
npm install
```
Run the project on your device
```bash
npm run dev
```

## Sample Users to Login

You can use that credentials to log in.

```bash
    {
        username: "Mehmet",
        password: 'Mm123456',
        role: 'Admin'
    },
    {
        username: "Ahmet",
        password: 'Aa123456',
        role: 'User'
    },
    {
        username: "Enes",
        password: 'Ee123456',
        role: 'User'
    },
    {
        username: "Hasan",
        password: 'Hh123456',
        role: 'User'
    }
```


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
# auth-role-based-permissions
