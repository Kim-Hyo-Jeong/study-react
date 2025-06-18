import Heading from "./components/Heading";

// Heading 이라는 컴포넌트를 만들고 Hello, World 컴포넌트를 통합하기
export default function Chapter2_2() {
    return (
        <div>
            {/* <Hello /> */}
            <Heading type="h1">Hello</Heading>
            <Heading type="h2">World</Heading>
        </div>
    );
}
