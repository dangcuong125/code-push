# Clevertube

## _Appcenter build status_
iOS: [![Build status](https://build.appcenter.ms/v0.1/apps/83199aa8-ac41-45a1-8789-fab9773fcfd6/branches/develop/badge)](https://appcenter.ms)

Android: [![Build status](https://build.appcenter.ms/v0.1/apps/50dec60a-111c-4628-bfa1-7e3a8ff70b81/branches/develop/badge)](https://appcenter.ms)

## _Localization guide_

Steps:
Link google sheet: [Clevertube localization](https://docs.google.com/spreadsheets/d/1VML0tn0VLtMWqWyZU-vZov2-wWW29eN0aTOct65sITo/edit#gid=0)
- Add new word that needs localized with key to google sheet
- Run `yarn localize` from root
- Apply localization by using `useTranslation` hook

Example:

> import { useTranslation } from 'react-i18next';
> const { t } = useTranslation();
> t('viewAll')
> viewAll -> key

## Installation

Install the dependencies, devDependencies, pod, husky hook.

```sh
cd Clevertube
yarn
yarn prepare
cd ios
pod install (Mac intel) / arch -x86_64 pod install
```

Run app

```sh
yarn start
yarn ios / yarn android (other tab)
```

