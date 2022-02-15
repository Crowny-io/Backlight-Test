# Vue.js v3.x Tech Sample

This is a simple Vue.js-based Design System sample.

## Tutorial: Use it as a Design System for your Vue.js + NuxtJS project

In this quick and guided tutorial, you'll use this Design System in your local NuxtJS 3 project.

### Pre-requisites (in your local environment)

1. Create a new NuxtJS app
   ```sh
   $ npx nuxi init nuxt3-app
   ```
   and validate default choices.
2. Enter your project and install dependencies
   ```sh
   $ cd nuxt3-app
   $ npm install
   ```
3. Add `sass` package to your dependencies as the Design System rely on it for its styles:
   ```sh
   $ npm install --save-dev sass
   ```

### In Backlight

Get the command to link your Design System in your local project. To so, click the top-right button next to your avatar. You get a modal named Link, showing a npx backlight command. Copy it.

### In your local project

ℹ️ In the following instructions, keep in mind to use the right path to your Design System as set in the _npm_ registry (e.g. `@backlight-dev/john.design-system`) . Have a look at the `node_modules` folder.

1. Paste and execute the previously copied command. Validate default choices.
2. Run your local project
   ```sh
   $ npm run dev -- -o
   ```
   Your browser will open the URL given by the command. You'll see the default NuxtJS starting page.
3. Open your project in your IDE, and go to the file `~/app.vue`
4. Add a `<script>` tag, add the following lines to import the Design System `Button` component
   ```html
   <script setup lang="ts">
     import MyButton from '@backlight-dev/john.design-system/button/src/Button.vue';
   </script>
   ```
5. Add a `<style>` tag to import the Design System Sass primitives at `app` level
   ```html
   <style lang="scss">
     @use '@backlight-dev/john.design-system/theme/src/theme.scss';
   </style>
   ```
6. Finally, replace the `app.vue`'s `<template>` tag content with a `Button` component instance. Your final `app.vue` file will look like:

   ```html
   <template>
     <div>
       <MyButton outlined name="Rioters 🤘" />
     </div>
   </template>

   <script setup lang="ts">
     import MyButton from '@backlight-dev/john.design-system/button/src/Button.vue';
   </script>

   <style lang="scss">
     @use '@backlight-dev/john.design-system/theme/src/theme.scss';
   </style>
   ```

Have a look at your browser: your page was updated and you should see the Design System's `Button` component welcoming you, using the internal Design Tokens and Theme.
