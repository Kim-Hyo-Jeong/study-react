let text = "Hello, world!";
const num = 15;
const obj = { key: 0, a: 1, b: 2 };
const arr = ["a", "b", "c"];
const imageUrl =
    "https://dst6jalxvbuf5.cloudfront.net/static/img/logo/logo.svg";

function Chapter1_2() {
    return (
        <div>
            <h1>변수 넣기</h1>
            <ul>
                <li>{text}</li>
                <li>{text + "test"}</li>
            </ul>
            <h1>숫자 및 계산식 넣기</h1>
            <ul>
                <li>{num}</li>
                <li>{num + 15}</li>
            </ul>
            <h1>Boolean, Nullish 값 넣기</h1>
            <ul>
                <li>{true}</li>
                <li>{false}</li>
                <li>{undefined}</li>
                <li>{null}</li>
            </ul>
            <h1>Object, Array 넣기</h1>
            <ul>
                {/* <li>{obj}</li> */}
                <li>{arr}</li>
            </ul>
            <h1>주석 넣기</h1>
            <ul>
                <li>{/* 주석입니다. */}</li>
            </ul>
            <h1>태그 속성에 넣기</h1>
            <ul>
                <li>
                    <img src={imageUrl} alt="logo" />
                </li>
            </ul>
        </div>
    );
}
export default Chapter1_2;
