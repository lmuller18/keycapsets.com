'use strict'

import React, { useEffect, useRef } from "react";

import '../assets/styles/loading-keyboard.scss';

interface LoadingKeyboardIllustrationProps {
    scale?: number;
}

function LoadingKeyboardIllustration(props: LoadingKeyboardIllustrationProps): JSX.Element {
    const { scale = 1 } = props;
    const IDS: string[] = ['L', 'O', 'A', 'D', 'I', 'N', 'G', 'ENTER']
    const L = useRef(null);
    const O = useRef(null);
    const A = useRef(null);
    const D = useRef(null);
    const I = useRef(null);
    const N = useRef(null);
    const G = useRef(null);
    const ENTER = useRef(null);
    const refs = [L, O, A, D, I, N, G, ENTER]

    function toggleFillClass(ref, i) {
        const KEY_DOWN = 400 * i;
        const KEY_UP = 1000 + KEY_DOWN;

        setTimeout(() => { ref.classList.add('fill'); }, KEY_DOWN)
        setTimeout(() => { ref.classList.remove('fill'); }, KEY_UP)
    }

    function startLoadingAnimation() {
        refs.forEach((ref, i) => {
            toggleFillClass(ref.current, i)
        });
    }

    useEffect(() => {
        startLoadingAnimation();
        const interval = setInterval(() => {
            startLoadingAnimation();
        }, IDS.length * 650)

        return () => clearInterval(interval);
    }, [])

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="432"
            height="179"
            viewBox="0 0 432 179"
            id="loading-keyboard-illu"
            style={{
                transform: `scale(${scale})`
            }}
        >
            <g
                id="Page-1"
                fill="none"
                fillOpacity="0.299"
                fillRule="evenodd"
                stroke="none"
                strokeWidth="1"
            >
                <g
                    id="empty-base-kit-illu-copy"
                    fill="#B2C1D5"
                    stroke="#6F7A88"
                    strokeWidth="0.8"
                    transform="translate(-198 -175)"
                >
                    <g id="small-keeb-illu" transform="translate(199 176)">
                        <rect
                            className="key"
                            id="Rectangle"
                            width="27.2"
                            height="26.4"
                            x="0"
                            y="0"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-16"
                            width="27.2"
                            height="26.4"
                            x="0"
                            y="36"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy"
                            width="27.2"
                            height="26.4"
                            x="57.6"
                            y="0"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-17"
                            width="27.2"
                            height="26.4"
                            x="57.6"
                            y="36"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-37"
                            width="27.2"
                            height="26.4"
                            x="44"
                            y="64.8"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-46"
                            width="42.4"
                            height="26.4"
                            x="0"
                            y="64.8"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-32"
                            width="27.2"
                            height="26.4"
                            x="28.8"
                            y="36"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-5"
                            width="27.2"
                            height="26.4"
                            x="187.2"
                            y="0"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-18"
                            width="27.2"
                            height="26.4"
                            x="172.8"
                            y="36"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-38"
                            width="27.2"
                            height="26.4"
                            x="159.2"
                            y="64.8"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="G"
                            ref={G}
                            width="27.2"
                            height="26.4"
                            x="165.6"
                            y="93.6"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-64"
                            width="27.2"
                            height="26.4"
                            x="151.2"
                            y="122.4"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-76"
                            width="34.4"
                            height="26.4"
                            x="72"
                            y="151.2"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-79"
                            width="178.4"
                            height="26.4"
                            x="108"
                            y="151.2"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-61"
                            width="27.2"
                            height="26.4"
                            x="79.2"
                            y="93.6"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-65"
                            width="27.2"
                            height="26.4"
                            x="64.8"
                            y="122.4"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-72"
                            width="63.2"
                            height="26.4"
                            x="0"
                            y="122.4"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-9"
                            width="27.2"
                            height="26.4"
                            x="316.8"
                            y="0"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-19"
                            width="27.2"
                            height="26.4"
                            x="288"
                            y="36"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="O"
                            ref={O}
                            width="27.2"
                            height="26.4"
                            x="274.4"
                            y="64.8"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            ref={L}
                            id="L"
                            width="27.2"
                            height="26.4"
                            x="280.8"
                            y="93.6"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-66"
                            width="27.2"
                            height="26.4"
                            x="266.4"
                            y="122.4"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-80"
                            width="35.2"
                            height="26.4"
                            x="324"
                            y="151.2"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-73"
                            width="27.2"
                            height="26.4"
                            x="324"
                            y="122.4"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-81"
                            width="33.6"
                            height="26.4"
                            x="396.8"
                            y="151.2"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-75"
                            width="77.6"
                            height="26.4"
                            x="352.8"
                            y="122.4"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-47"
                            width="40.8"
                            height="26.4"
                            x="389.6"
                            y="64.8"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-2"
                            width="27.2"
                            height="26.4"
                            x="86.4"
                            y="0"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-21"
                            width="27.2"
                            height="26.4"
                            x="86.4"
                            y="36"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-40"
                            width="27.2"
                            height="26.4"
                            x="72.8"
                            y="64.8"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-6"
                            width="27.2"
                            height="26.4"
                            x="216"
                            y="0"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-22"
                            width="27.2"
                            height="26.4"
                            x="201.6"
                            y="36"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-41"
                            width="27.2"
                            height="26.4"
                            x="188"
                            y="64.8"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-53"
                            width="27.2"
                            height="26.4"
                            x="194.4"
                            y="93.6"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-67"
                            width="27.2"
                            height="26.4"
                            x="180"
                            y="122.4"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-48"
                            width="27.2"
                            height="26.4"
                            x="303.2"
                            y="64.8"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-54"
                            width="27.2"
                            height="26.4"
                            x="309.6"
                            y="93.6"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-10"
                            width="27.2"
                            height="26.4"
                            x="345.6"
                            y="0"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-23"
                            width="27.2"
                            height="26.4"
                            x="316.8"
                            y="36"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-3"
                            width="27.2"
                            height="26.4"
                            x="115.2"
                            y="0"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-25"
                            width="27.2"
                            height="26.4"
                            x="115.2"
                            y="36"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-42"
                            width="27.2"
                            height="26.4"
                            x="101.6"
                            y="64.8"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="D"
                            ref={D}
                            width="27.2"
                            height="26.4"
                            x="108"
                            y="93.6"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-68"
                            width="27.2"
                            height="26.4"
                            x="93.6"
                            y="122.4"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-77"
                            width="34.4"
                            height="26.4"
                            x="0"
                            y="151.2"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-62"
                            width="48.8"
                            height="26.4"
                            x="0"
                            y="93.6"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-7"
                            width="27.2"
                            height="26.4"
                            x="244.8"
                            y="0"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-26"
                            width="27.2"
                            height="26.4"
                            x="230.4"
                            y="36"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-43"
                            width="27.2"
                            height="26.4"
                            x="216.8"
                            y="64.8"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-56"
                            width="27.2"
                            height="26.4"
                            x="223.2"
                            y="93.6"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="N"
                            ref={N}
                            width="27.2"
                            height="26.4"
                            x="208.8"
                            y="122.4"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-49"
                            width="27.2"
                            height="26.4"
                            x="332"
                            y="64.8"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-57"
                            width="27.2"
                            height="26.4"
                            x="338.4"
                            y="93.6"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="ENTER"
                            ref={ENTER}
                            width="63.2"
                            height="26.4"
                            x="367.2"
                            y="93.6"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-11"
                            width="27.2"
                            height="26.4"
                            x="374.4"
                            y="0"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-27"
                            width="27.2"
                            height="26.4"
                            x="345.6"
                            y="36"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-4"
                            width="27.2"
                            height="26.4"
                            x="144"
                            y="0"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-29"
                            width="27.2"
                            height="26.4"
                            x="144"
                            y="36"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-44"
                            width="27.2"
                            height="26.4"
                            x="130.4"
                            y="64.8"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-58"
                            width="27.2"
                            height="26.4"
                            x="136.8"
                            y="93.6"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-70"
                            width="27.2"
                            height="26.4"
                            x="122.4"
                            y="122.4"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-78"
                            width="34.4"
                            height="26.4"
                            x="36"
                            y="151.2"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="A"
                            ref={A}
                            width="27.2"
                            height="26.4"
                            x="50.4"
                            y="93.6"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-8"
                            width="27.2"
                            height="26.4"
                            x="273.6"
                            y="0"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-30"
                            width="27.2"
                            height="26.4"
                            x="259.2"
                            y="36"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="I"
                            ref={I}
                            width="27.2"
                            height="26.4"
                            x="245.6"
                            y="64.8"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-59"
                            width="27.2"
                            height="26.4"
                            x="252"
                            y="93.6"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-71"
                            width="27.2"
                            height="26.4"
                            x="237.6"
                            y="122.4"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-82"
                            width="34.4"
                            height="26.4"
                            x="288"
                            y="151.2"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-74"
                            width="27.2"
                            height="26.4"
                            x="295.2"
                            y="122.4"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-83"
                            width="34.4"
                            height="26.4"
                            x="360.8"
                            y="151.2"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-50"
                            width="27.2"
                            height="26.4"
                            x="360.8"
                            y="64.8"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-12"
                            width="27.2"
                            height="26.4"
                            x="403.2"
                            y="0"
                            rx="1.6"
                        ></rect>
                        <rect
                            className="key"
                            id="Rectangle-Copy-31"
                            width="56"
                            height="26.4"
                            x="374.4"
                            y="36"
                            rx="1.6"
                        ></rect>
                    </g>
                </g>
            </g>
        </svg>
    );
}

export default LoadingKeyboardIllustration;
