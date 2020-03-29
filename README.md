# Mesto - [https://novikkov.github.io/mesto/]

## Проектная работа 11_v0.0.1

## Webpack

### Краткая информация о проекте
В работе используется программа-сборщик Webpack и библиотека пакетов NPM для сборки кода проекта "Место" и публикации на сервере gh-pages.
Актуальная версия проекта (v0.0.1) доступна по этой [ссылке](https://novikkov.github.io/mesto/)

###  ПО для выполнения работы:
<li>
Git
<li>
Node.js
<li>
Webpack
<li>
NPM-пакеты:
- #### сборка develop
@babel/cli @babel/core @babel/preset-env autoprefixer babel-loader cross-env css-loader cssnano file-loader gh-pages html-loader html-webpack-plugin@3.2.0 image-webpack-loader lodash mini-css-extract-plugin postcss-loader resolve-url resolve-url-loader style-loader url-loader webpack webpack-cli webpack-dev-server webpack-md5-hash
- #### сборка build:
babel-polyfill core-js optimize-css-assets-webpack-plugin resolve-cwd
### Инструкция по сборке:
<li>
точка входа: index.js
<li>
команда npm run build запускает сборку build и собирает проект в папке dist
<li>
команда npm run dev запускает сборку develop и открывает проект на локальном сервере по адресу localhost:8080
<li>
команда npm run deploy развёртывает проект на сервере gh-pages
### Результат проектной работы:
<li>
Репозиторий Git состоит из веток master и develop
<li>
Webpack и NPM использован для сборки кода
<li>
CSS-код минимизирован, JS-код переведен бабелем из ES6 в ES5, оптимизированы картинки и шрифты
<li>
Сайт проекта "Место" опубликован на хостинге gh-pages