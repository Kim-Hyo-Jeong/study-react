# 🌐 React

## Index
- [Chapter 00. 공부 준비](#chapter-00-공부-준비)
- [Chapter 01. React 소개](#chapter-01-react-소개)
- [Chapter 02. JSX](#chapter-02-jsx)
- [Chapter 03. 컴포넌트](#chapter-03-컴포넌트)
---

## Chapter 00. 공부 준비
> 인프런 강의 : 🔗 [실무 중심! FE 입문자를 위한 React](https://www.inflearn.com/course/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%8B%A4%EB%AC%B4%EC%84%9C%EB%B9%84%EC%8A%A4-%EC%A0%9C%EC%9E%91%ED%95%98%EA%B8%B0/dashboard)

---

## Chapter 01. React 소개
### 1-1. React란?
#### 🔎 React
- 사용자 인터페이스를 만들기 위한 `JavaScript 라이브러리` (SPA 라이브러리)
  - 프레임워크 : 개발을 위한 기본 틀, 뼈대
  - 라이브러리 : 개발에 필요한 도구 또는 그 집합

- 리액트는 프레임워크가 아니라 라이브러리임

#### 🔎 React를 배워야 하는 이유
1 트렌드
- 대중적인 이용
- 수요가 많음
- 방대한 생태계

2 편리성
- SPA (Single Page Application)
- 화면을 여러 단위로 쪼개고, 재사용하는 식으로 코드 관리가 용이함
- 유용한 라이브러리들이 많음

#### 🔎 어떻게 트렌드가 될 수 있었는가?
- 전통적인 웹 서비스의 문제
  - 모든 페이지에 대한 네트워크 요청
  - 늘어나는 코드

- `SPA (Single Page Application)` 방식 등장
  - 클라이언트(브라우저)에서 화면을 그리는 방식
  - JavaScript를 통해 HTML 생성
  - React, Vue, Angular 등
  - 페이지를 이동했을 때 리소스를 새로 받는 것이 아니라 이미 받았던 리소스를 가지고 페이지를 생성함

### 1-2. React의 특징
#### 🔎 컴포넌트 기반 설계
- `컴포넌트`
  - 스스로 상태를 관리하는 `캡슐화된 코드 조각`
    - 의미단위로 컴포넌트 구성
    - 재사용성과 유지보수성 증가
    - 부모, 자식 관계를 가짐

#### 🔎 Virtual DOM (가상돔)
- 실제 `DOM의 복사본`으로 SPA에서의 동적인 변화를 효율적으로 관리하기 위해 사용됨

#### 🔎 CSR (Client Side Rendering)
- SPA 방식이기 때문에 JavaScript를 서버가 아닌 클라이언트 브라우저에서 화면을 렌더링함

#### 🔎 풍부한 생태계
- 단순 웹 개발뿐만 아니라 React Native와 같은 앱 개발을 위한 라이브러리도 있음

---

## Chapter 02. JSX
### 2-1. JSX란?
#### 🔎 `JSX` = HTML + JavaScript
- JavaScript를 확장한 문법 (JavaScript XML)
  - 모양은 HTML에 가까움
  - 내부적으로 JavaScript를 사용할 수 있음
  - React는 이 JSX를 이용하여 화면을 그림 (컴포넌트)

  ```jsx
  const element = <h1>Hello, World!</h1>
  ```

#### 🔎 JSX의 특징
- JSX에서 사용되는 태그의 속성 이름이 HTML과 조금 다름
  - class → className
  - for → htmlFor
  - onclick → onClick
- 태그를 명시적으로 닫아줘야 함 (`<input />`)
- 하나의 태그로 감싸져 있어야 함

```html
<!-- html -->
<button class="btn">Hello, World!</button>
<input type="text">
```

```jsx
{/* jsx */}
<div>
    <button className="btn">Hello, World!</button>
    <input type="text" />
</div>
```
- 🔗 [실습 코드 링크](https://codesandbox.io/p/sandbox/2-1-29k09)

---

### 2-2. JSX에서 JavaScript 사용하기
- 🔗 [실습 코드 링크](https://codesandbox.io/p/sandbox/2-2-d23bt)

---

### 2-3. JSX에서의 조건문
- 🔗 [실습 코드 링크](https://codesandbox.io/p/sandbox/2-3-qeb7z)

---

### 2-4. JSX에서의 반복문
- 🔗 [실습 코드 링크](https://codesandbox.io/s/2-4-uv16i)

---

### 2-5. JSX 스타일링
- 🔗 [실습 코드 링크](https://codesandbox.io/p/sandbox/2-5-tkgtq)

---

### 2-6. JSX로 구구단 출력하기
- 🔗 [실습 코드 링크](https://codesandbox.io/s/2-6-silseub-bjv3c)

---

## Chapter 03. 컴포넌트
### 3-1. 컴포넌트란?
#### 🔎 컴포넌트
- 스스로 상태를 관리하는 `캡슐화된 코드 조각`

#### 🔎 컴포넌트 만들기
- 지금까지 했던 JSX와의 차이
  - 컴포넌트는 기본적으로 함수이기 때문에 자신만의 고유한 로직이 들어갈 수 있음
  - 스스로 상태를 가질 수 있음 (상태가 변하면 알아서 반영됨)

- import, export
  - es6에서 모듈을 불러오고 내보내는 방법
  - 🔗 [실습 코드 링크](https://codesandbox.io/s/3-1-x5rc1)

#### 🔎 컴포넌트 생성 시 주의사항
- 컴포넌트 이름은 `PascalCase`로 만듦
  - PascalCase : 각 단어의 첫 문장을 대문자로 적는 규칙
    - ex. MyComponent, ArticlePage, UserProfile

- 컴포넌트는 의미 단위로 쪼개서 파일을 분리함

- 최상위 컴포넌트 이름은 일반적으로 App임
  - index.js : entry point. 최종 컴포넌트를 DOM에 render (ReactDOM.render)
  - App.js : 모든 컴포넌트들의 root 컴포넌트

---

### 3-2. Props
#### 🔎 Props란?
- 부모 컴포넌트에서 자식 컴포넌트로 내려주는 데이터
```js
function App() {
    return (
        <div>
            <MyComponent value={'test'}/>
        </div>
    );
}

function MyComponent(props) {
    return <div>{props.value}</div>;
}
```

#### 🔎 Props.children
- 컴포넌트 태그로 감싼 값이 props.children으로 전달됨
```js
function App() {
    return(
        <div>
            <MyComponent>
                <h1>value</h1>
            </MyComponent>
        </div>
    );
}

function MyComponent(props) {
    return <div>{props.children}</div>
}
```

#### 🔎 Props 활용 팁
- 구조분해할당 구문 활용
- 특정 Props에 기본값 지정 가능 (defaultProps)
- Props는 읽기 전용임
- 🔗 [실습 코드 링크](https://codesandbox.io/s/3-2-uiqd9)

---

### 3-3. State
#### 🔎 State란?
- 컴포넌트 내부에서 사용되는 변수
  - State 값이 변하면 컴포넌트가 리렌더링됨
  - 렌더링 사이클에서 값이 보존됨
```js
function App() {
    const [value, setValue] = useState(0);

    return (
        <div>{value}</div>
    );
}
```
- 🔗 [실습 코드 링크](https://codesandbox.io/p/sandbox/3-3-mcfei)