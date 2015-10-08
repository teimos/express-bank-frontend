# README #

Фронтенд Восточный Экспресс Банк 0.2.9

Внимание! При локальном запуске .html файла не будет работать смена url в hash-навигации, из-за ограничений политики безопасности браузеров (на боевом сервере и домене все должно работать корректно).


## Versions ##

v0.2.9

- Исправлен баг с подключением шрифта в less (вынесено в html)
- Размер шрифта плейсхолдеров в некоторых формах уменьшен на ширине экрана 320px
- Изменено "по номеру телефона" на "по номеру договора"

v0.2.8

- Изменена форма на вкладке "Онлайн платеж с карты"

v0.2.7

- Добавлены стили и изменена разметка под адаптив 320px

v0.2.6

- Исправлена разметка в .map__sub
- Поправлены отступы и изменена разметка на некоторых формах ("Онлайн платеж с карты" и "Оплата с телефона")

v0.2.5

- Поправлен баг с masonry

v0.2.4

- Изменена разметка и стили блока .map__sub
- Добавлен плагин masonry.js
- Длительность анимации уменьшена с 0.3s до 0.2s

v0.2.3

- Добавлены дополнительные поля в формы оплаты

v0.2.2

- В поле поиска по карте иконка становится синей
- В radiobutton-ах при наведении появляется синий border
- Каждый первый элемент аккордеонов теперь активен изначально (т.е. открыт)
- Табличка выбора города теперь закрывается при клике за ее пределами
- В radiobutton-ах изменен текст, связанная разметка плейсхолдеров и логика их работы
- Исправлен баг с "мигающим" курсором в selectize
- В формы оплаты добавлены анимированные плейсхолдеры
- Добавлен функционал запоминания и открытия блоков основного меню
- Добавлено модальное окно с ошибкой, можно вызвать стандартным методом: $('#errorModal').modal();
- Добавлен блок с ошибкой поиска адреса (блок .map__search__error сейчас сделан видимым, просто уберите у него класс .opened и добавляйте когда нужно показать этот блок)
- Исправлен баг с сабмитом в почте россии на некоторых адаптивных брейкпоинтах
- Мелкие фиксы и улучшения

v0.2.1

- Добавлены недостающие блоки
- Подправлена работа selectize
- Прочие мелкие изменения и фиксы

v0.1.1

- Добавлен раздел с картой (без адаптивности)
- Изменена версификация проекта

v0.0.3

- Добавлена адаптивность
- Поправлены баги

v0.0.2

- Исправлены некоторые баги
- Изменены зависимости для более корректной работы gulpfile.js
- Изменены тени и бэкграунд некоторых элементов

v0.0.1

- Инициализация проекта