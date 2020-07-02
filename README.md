[![Angular CI](https://github.com/ginomessmer/tmdm/workflows/Angular%20CI/badge.svg)](https://github.com/ginomessmer/tmdm/actions?query=workflow%3A%22Angular+CI%22)
[![Edge Store](https://img.shields.io/badge/Edge%20Store-v1-blue)](https://microsoftedge.microsoft.com/addons/detail/gjjchbkfeokfaifbcokbndccpogfjfpn)
[![Buy me a coffee](https://img.shields.io/badge/buy%20me%20a%20coffee-%E2%98%95-orange)](https://www.buymeacoffee.com/ginomessmer)


# The Missing Download Menu

> ⚠ **Heads up**: This is a major rewrite from v1 and includes some highly requested features from the community. As a design decision, I ditched FAST DNA and replaced React with Angular.

This plugin provides a menu in your Chromium based browser that shows all recent downloads in a non-obstrusive way. Not more or less, it's simple as that.

Built with [Angular](https://angular.io), uses [Fluent Icons](https://developer.microsoft.com/en-us/fluentui#/styles/web/icons).

## Features
- [x] Access your downloads from your menu bar
- [x] Automatic dark and light mode
- [x] Integrates well to Edge's design system
- [x] Search
- [x] Also works on Chrome
- [ ] Disables download shelf


---

Do you have any feature requests? Let me know or tweet [@ginomessmer](https://twitter.com/ginomessmer).  
Like what you're seeing? Feel free to spread the word and if you're feeling extra generous, [buy me a coffee](https://www.buymeacoffee.com/ginomessmer).

---

## Development Setup
- Install the `@angular/cli` npm package as a global tool: `npm install -g @angular/cli`
- Restore npm packages: `npm i`
- Build and watch the project while you are developing: `ng build --watch`
- Enable developer mode in Microsoft Edge and drop the dist folder to the extensions page
- Happy building
