## Приложение "Sort App" на React + Redux

Приложение представляет собой интерфейс, позволяющий сортировать работников по их специальности.
В случае медленного интернета в панели навигации сработает лоудер.

Для отслеживания state подключил код:

```
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
```

Использованные библиотеки:

- redux-saga (библиотека с функциями-генераторами, которая позволяет работать с асинхронными функциями так, как будто они синхронные.)
- material-ui


### `Скриншот проекта`

![sortApp](https://i.ibb.co/D5d2kFd/Filter-App.png")


