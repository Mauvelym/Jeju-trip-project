// console.log(document.querySelector("#header"))
// console.log(document.querySelector(".logo"))
// console.log(document.querySelector(".menu"))
// console.log(document.querySelector('ul'))

// // // menu class의 li를 가져오는 방법 1
// console.log(document.querySelectorAll('.menu li'))
// // // querySelectorAll()을 이용하여 가져 온 요소들은 NodeList라는 이름의 객체로 반환

// // //menu class의 li를 가져오는 방법 2
// console.log(document.querySelector('.menu ul').children)
// // // 부모 요소인 menu ul의 children 속성을 이용하여 탐색하는 방법
// // // 이 경우에도 똑같이 li 요소를 출력하였으나, NodeList가 아닌 HTMLCollection이 반환


// // // 로그인 버튼 색깔 바꾸기 연습
// 중간과정 확인 (중요) console 찍어보기
// const login_btn_color = document.getElementsByClassName('login_btn')
// for (let i = 0; i < login_btn_color.length; i++ ) {
//   login_btn_color[i].className = 'login_btn_change'
// }


// // // 로그인/사인업 버튼 이름 바꾸기 연습
// const login_btn = document.querySelector(".login_btn")
// console.log(login_btn.textContent)
// login_btn.textContent = "Login"

// const signup_btn = document.querySelector(".signup_btn")
// console.log(signup_btn.textContent)
// signup_btn.textContent = "Sign Up"

// // console.log(document.querySelector('li'))

// // add_div를 div 태그를 추가하는 상수로 설정하고
// // // append해야 실제 웹 페이지 상에 div 태그가 추가된 것이 보여짐
// const add_div = document.createElement('div');
// document.body.append(add_div);
// // footer 밑에 div 태그가 추가되어 구현됨

// // menu class 밑에 div/li 태그가 추가되게 하려면?
// const menu = document.querySelector('.menu');
// const add_div = document.createElement('div');
// const add_li = document.createElement('li');
// // // > 변수를 2개를 지정해줘야 하는데 아직 익숙하지 않아서 실수가 많이 일어남
// menu.append(add_div);
// menu.append(add_li);
// 
// // menu의 손자 li 추가하기 시도1
// const menu_ul = document.querySelector('.menu > ul');
// const menu_li = document.createElement('li')
// menu_ul.append('menu_li');
// // 여전히 ul태그가 있는데 무엇이 문제일까..

// // menu의 손자 li 추가하기 시도2
const menu_ul = document.querySelectorAll('.menu > ul')[0];
const menu_li = document.createElement('li')
document.querySelector('.menu_ul').appendChild('menu_li');
// // 여전히 ul태그가 있는데 무엇이 문제일까..


// // menu 태그 아래에 존재하는 ul 요소 제거하기 시도1

// // let menu = document.getElementsByClassName("menu")
// // let menu_ul = document.getElementsByTagName("menu ul")
// // let throw_away_ul_tag = menu.removeChild("menu_ul")
