export default function promiseInit() {

  /* Задание 1 */
  // function fetchData() {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve('Данные загружены')
  //       // reject('Ошибка загрузки данных')
  //     }, 2000)
  //   })
  // }

  // const p = fetchData()

  // p.then(value => {
  //   console.log(value)
  // })
  //   .catch(value => {
  //     console.error(value)
  //   })
  //   .finally(() => {
  //     console.log('Данные были запрошены')
  //   })

  /* Задание 2 */

  function firstFn() {
    let res = 0
    console.log(res)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        ++res
        resolve(res)
      }, 1000);
    })
  }

  function secondFn(res) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        ++res
        resolve(res)
      }, 1000);
    })
  }

  function thirdFn(res) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        ++res
        resolve(res)
      }, 1000);
    })
  }

  let p1 = firstFn()
  p1.then(value => {
    console.log(value)
    return secondFn(value)
  })
    .then(value => {
      console.log(value)
      return thirdFn(value)
    })
    .then(value => {
      console.log(value)
    })

    /* Задание 3 */

    function fetchData() {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
          for (let i = 0; i < json.length; i++) {
            console.log(json[i].title)
          }
        })
    }

    fetchData()
}