### Как пользоваться Валидатором:**

*В контейнере с инпутом должен быть контейнер с атрибутом data-error-container (если его не будет, то передать инпуту этот атрибутом с айдишником)

**Пример верстки для инпута под валидатор (на примере кастомный инпут с плавающим плейсхолдером)**

```
mixin ui-input(mods)
  .ui-input.custom-placeholder(data-input-parent='')
    input(data-input='' name=name?name:'')&attributes(attributes)
    .custom-placeholder__service
      span
        |#{attributes.placeholder}
    .ui-input__error(data-error-container)
```

Пример формы 

```
form( data-form-id="cooperation-form").cooperation-form__form
      .cooperation-form__row
        .cooperation-form__item
          +ui-input(data-input="" placeholder="Имя *" name="fio" minlength="3" required data-validate="text" data-error-message="Заполните поле" id="1")
      .cooperation-form__row
        .cooperation-form__item
          +ui-input(data-input="" placeholder="Email *" name="email" minlength="3" required data-validate="email" data-error-message="Заполните поле" id="2")
      .cooperation-form__row
        .cooperation-form__item
          +ui-input(data-input="" data-mask-phone placeholder="Телефон *" name="phone" required data-validate="tel" data-error-message="Заполните поле" id="3")

```

- Валидатор собирает все формы по тегу form

- Обязательный атрибут у инпута - data-validate='text' (вместо text пишите свой типа инпута)
-- Варианты data-validate='text' data-validate='tel' data-validate='email'
- Обязательный атрибут у инпута - data-error-message (текст ошибки)
- Обязательный атрибут для телефона (помимо data-validate='tel') - data-mask-phone
- minlength='3'. указывает на минимальную длину поля
- Если нужен контейнер под ошибку не в оболочке с инпутом, то указываем контейнеру data-error-container="айди контейнера под ошибку" (если не указать, будет искать контейнер внутри родителя инпута)

*Валидация на самих инпутах на ввод символов начнет работать только после первой попытки отправки формы, до первого сабмита ошибки не будут подсвечиваться, чтобы не мешать пользователю


**Все базовые типы для data-validate**


| Тип              | Описание                                                      | Метод валидации                | Сообщение об ошибке         |


|------------------|--------------------------------------------------------------|---------------------------------|-----------------------------|


| email          | Проверяет, является ли значение корректным email-адресом.   | validator.isEmail(this.value) | errorMessages.email       |


| text           | Общий текст, всегда валиден.                                 | true                         | -                           |


| name           | Проверяет, что значение состоит только из букв.             | validator.isAlpha(textValue)  | errorMessages.name        |


| name-ru       | Проверяет, что значение состоит только из букв кириллицы.   | validator.isAlpha(textValue, 'ru-RU') | errorMessages.nameRu     |


| name-en       | Проверяет, что значение состоит только из букв латиницы.    | validator.isAlpha(textValue, 'en-EN') | errorMessages.nameEn     |


| tel            | Проверяет, что значение является корректным номером телефона. | validator.isMobilePhone(phoneValue) | errorMessages.phone       |

Примечания:

В случае с типом tel, дополнительно проверяется длина номера телефона: если длина меньше 11 символов, то валидация считается неуспешной без выполнения метода валидации.

Для типов name, name-ru, name-en проверяется, что текст состоит только из букв, соответствующих указанному языку.

Сообщения об ошибках (например, errorMessages.email, errorMessages.phone) должны быть определены в вашем коде, чтобы пользователи могли видеть, что именно было неправильно.


**Как Бэкенду слушать валидацию формы пример:**
```
 const form = document.querySelector('-contacts-form__form')
  form.addEventListener('submit', e => {
  const valid = window.isValidFormByElement(form)
  console.log('Form send e', valid)
  }
```





### Настройка config для форматирования scss

- установить расширение Prettier
- добавить в `.settings.json` следующий код:

```
"stylelint.validate": ["css", "less", "postcss", "scss"],
"prettier.singleQuote": true,
"prettier.jsxSingleQuote": true,
"prettier.semi": false,
"[less]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
"[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
"editor.formatOnSave": true,
"editor.codeActionsOnSave": {
    "source.fixAll.stylelint": "explicit"
  },
```
