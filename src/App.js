import React, { useState } from "react";
import Chapter1_1 from "./pages/Chapter1/Chapter1_1";
import Chapter1_2 from "./pages/Chapter1/Chapter1_2";
import Chapter1_3 from "./pages/Chapter1/Chapter1_3";

import "./App.css"; // CSS import 추가

function App() {
    const [openMainChapter, setOpenMainChapter] = useState(null);
    const [openSubChapter, setOpenSubChapter] = useState(null);

    const handleMainToggle = (chapterNumber) => {
        setOpenMainChapter(
            openMainChapter === chapterNumber ? null : chapterNumber
        );
        setOpenSubChapter(null);
    };

    const handleSubToggle = (chapterKey) => {
        setOpenSubChapter(openSubChapter === chapterKey ? null : chapterKey);
    };

    return (
        <div className="container">
            <h1 className="title">🌐 STUDY React 🌐</h1>
            <ul style={{ listStyle: "none", padding: 0 }}>
                <li>
                    <button
                        onClick={() => handleMainToggle(1)}
                        className="mainBtn"
                    >
                        Chapter 01 : JSX
                    </button>

                    {openMainChapter === 1 && (
                        <ul className="subList">
                            <li>
                                <button
                                    onClick={() => handleSubToggle("1-1")}
                                    className="subBtn"
                                >
                                    1-1: JSX란?
                                </button>
                                {openSubChapter === "1-1" && (
                                    <div className="resultBox">
                                        <Chapter1_1 />
                                    </div>
                                )}
                            </li>
                            <li>
                                <button
                                    onClick={() => handleSubToggle("1-2")}
                                    className="subBtn"
                                >
                                    1-2: JSX에서 Javascript 사용하기
                                </button>
                                {openSubChapter === "1-2" && (
                                    <div className="resultBox">
                                        <Chapter1_2 />
                                    </div>
                                )}
                            </li>
                            <li>
                                <button
                                    onClick={() => handleSubToggle("1-3")}
                                    className="subBtn"
                                >
                                    1-3: JSX에서의 조건문
                                </button>
                                {openSubChapter === "1-3" && (
                                    <div className="resultBox">
                                        <Chapter1_3 />
                                    </div>
                                )}
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
}

export default App;
