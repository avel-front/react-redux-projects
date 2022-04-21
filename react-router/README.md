# React Router App - npm install react-router-dom@6
  
![Alt-Router](https://github.com/dragndroper/reactProjects/blob/main/react-router/src/img/Router.gif?raw=true)


React Router – это библиотека маршрутизации, которая предназначена для создания пользовательского интерфейса, а именно для создания навигации, обработки ошибки неверного адреса, подсветки активной ссылки в навигации и пр.
1.	настройка маршрутов, 
2.	навигация по ссылкам,
3.	подсветка активной ссылки,
4.	вложенные маршруты для макета,
5.	запрограммированная навигация,
6.	использование параметров URL для загрузки данных,
7.	использование параметров поиска url,
8.	серверный рендеринг,
9.	создание собственного поведения через композицию
Роутер работает везде, где может быть запущен React: web,  сервер с Node.js или React Native.
	
```
Структура маршрутизациии для index.js. Родительский маршрут нужен для того, чтобы не было перехода на другую страницу.

<BrowserRouter>
<Routes>
  <Route path="" element={} >
  <Route path=":invoiceId" element={} />
  <Route path="" element={} />
  </Route>
  </Routes>
</BrowserRouter>
```

```
<Outlet/> - нужен для того, чтобы по клику на элемент навигации происходил рендеринг нужного компонента без обновления страницы. 
```


```
useParams() - нужен для того, чтобы можно было рендерить компонент с данными из файла, передаваемого сервером (нужна функция с find и parseInt).  
```

```
useLocation() - нужен для того, чтобы получить доступ к location.search для сохранения ссылки поиска после какого-либо действия (например, удаление элемента навигации).
```
```
useNavigate() - нужен для переадресации по наступлению события, обычно в связке с useLocation(). 
```

 ```
 const [searchParams, setSearchParams] = useSearchParams() - что-то вроде пользовательского хука, который дает возможность быстро подключить поиск в приложении. 
 ```
 
 ```
 Функция для того, чтобы сохранялась ссылка по клику на элемент навигации, NavLink предусматривает использование активной ссылки.
 
 export function QueryNavLink() {
   let location = useLocation();
   return <NavLink to={to + location.search} {...props} />
 }
 ```

```
Инициализация приложения теперь работает так:

import ReactDOM from "react-dom/client"

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(</App>)
```






