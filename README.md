
[Create React App](https://github.com/facebook/create-react-app). Для знакомства
и настройки дополнительных возможностей
[обратись к документации](https://facebook.github.io/create-react-app/docs/getting-started).
 Перейди в браузере по адресу [http://localhost:3000]
### Маршрутизация

Если приложение использует библиотеку `react-router-dom` для маршрутизации,
необходимо дополнительно настроить компонент `<BrowserRouter>`, передав в пропе
`basename` точное название твоего репозитория. Слеши в начале и конце строки
обязательны.

```jsx
<BrowserRouter basename="/your_repo_name/">
  <App />
</BrowserRouter>
```
1) створюємо ключ та робимо запити для отримання данних щодо фільмів, папка сервіс згідно дз:
   API themoviedb.org Для бекенда используй themoviedb.org API. Необходимо
   зарегистриваться (можно ввести произвольные данные) и получить API-ключ. В
   этой работе будут использоваться следующие ендпоинты.

/trending/get-trending список самых популярных фильмов на сегодня для создания
коллекции на главной странице. /search/search-movies поиск кинофильма по
ключевому слову на странице фильмов. /movies/get-movie-details запрос полной
информации о фильме для страницы кинофильма. /movies/get-movie-credits запрос
информации о актёрском составе для страницы кинофильма.
/movies/get-movie-reviews запрос обзоров для страницы кинофильма.
2) створюємо компоненти для відображення сторінки.
Маршруты В приложении должны быть следующие маршруты. Если пользователь зашел по
несуществующему маршруту, его необходимо перенаправлять на домашнюю страницу.

'/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
'/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
'/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной
информацией о кинофильме. /movies/:movieId/cast - компонент <Cast>, информация о
актерском составе. Рендерится на странице <MovieDetailsPage>.
/movies/:movieId/reviews - компонент <Reviews>, информация об обзорах.
Рендерится на странице <MovieDetailsPage>. Code Splitting (разделение кода)
Добавь асинхронную загрузку JS-кода для маршрутов приложения используя
React.lazy() и Suspense.


