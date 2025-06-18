const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Chapter1_6() {
    return (
        <div style={{ display: "flex" }}>
            {/* 여기에 JSX를 활용하여 요구사항에 맞게 구구단을 완성시켜보세요! */}
            {num.map(
                (n) =>
                    n !== 1 &&
                    n !== 5 && (
                        <div
                            style={{
                                padding: 10,
                                color: n % 2 ? "blue" : "black",
                            }}
                        >
                            {num.map((m) => (
                                <div>
                                    {n} x {m} = {n * m}
                                </div>
                            ))}
                        </div>
                    )
            )}
        </div>
    );
}

export default Chapter1_6;
