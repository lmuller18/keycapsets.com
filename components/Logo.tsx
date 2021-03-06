import React from 'react';

interface LogoPropsInterface {
    width?: number;
    height?: number;
}

function Logo(props: LogoPropsInterface): JSX.Element {
    const {
        width = 106,
        height, // TODO
    } = props;

    return (
        <svg fill="none" viewBox="0 0 106 47" width={width} xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#g)">
                <rect width="106" height="42" rx="2" fill="#595959" />
            </g>
            <g filter="url(#f)">
                <rect x="3" y="2" width="32" height="38" rx="2" fill="#E2E2E2" />
            </g>
            <g filter="url(#e)">
                <rect x="37" y="2" width="32" height="38" rx="2" fill="#E2E2E2" />
            </g>
            <g filter="url(#d)">
                <rect x="71" y="2" width="32" height="38" rx="2" fill="#E2E2E2" />
            </g>
            <rect x="72" y="3" width="30" height="35" rx="2" fill="#fff" />
            <rect x="38" y="3" width="30" height="35" rx="2" fill="#fff" />
            <rect x="4" y="3" width="30" height="35" rx="2" fill="#fff" />
            <g filter="url(#c)">
                <path
                    d="m12.04 32c-0.2133 0-0.4053-0.0747-0.576-0.224-0.1493-0.1707-0.224-0.3627-0.224-0.576v-20.8c0-0.2347 0.0747-0.42669 0.224-0.57602 0.1707-0.14934 0.3627-0.224 0.576-0.224h4.032c0.2347 0 0.4267 0.07466 0.576 0.224 0.1493 0.14933 0.224 0.34132 0.224 0.57602v7.104l5.92-7.296c0.256-0.40536 0.672-0.60802 1.248-0.60802h4.608c0.192 0 0.352 0.07466 0.48 0.224 0.128 0.128 0.192 0.27732 0.192 0.44802 0 0.1493-0.032 0.2773-0.096 0.384l-7.68 9.664 8.256 10.624c0.0853 0.0853 0.128 0.2133 0.128 0.384 0 0.1706-0.064 0.3306-0.192 0.48-0.128 0.128-0.288 0.192-0.48 0.192h-4.768c-0.512 0-0.9387-0.2134-1.28-0.64l-6.336-7.904v7.744c0 0.2346-0.0747 0.4266-0.224 0.576-0.1493 0.1493-0.3413 0.224-0.576 0.224h-4.032z"
                    fill="#242424"
                />
            </g>
            <g filter="url(#b)">
                <path
                    d="m53.424 32.32c-3.0507 0-5.44-0.736-7.168-2.208-1.7067-1.4933-2.6133-3.648-2.72-6.464-0.0213-0.576-0.032-1.5146-0.032-2.816 0-1.3226 0.0107-2.2826 0.032-2.88 0.1067-2.7733 1.0347-4.9066 2.784-6.4 1.7493-1.5146 4.1173-2.272 7.104-2.272 1.8773 0 3.5627 0.32 5.056 0.95997 1.4933 0.6187 2.6667 1.5147 3.52 2.688 0.8747 1.152 1.3227 2.5067 1.344 4.064v0.064c0 0.1707-0.0747 0.32-0.224 0.448-0.128 0.1067-0.2773 0.16-0.448 0.16h-4.32c-0.2773 0-0.4907-0.0533-0.64-0.16-0.1493-0.128-0.2773-0.352-0.384-0.672-0.2987-1.088-0.768-1.8453-1.408-2.272-0.64-0.448-1.4827-0.672-2.528-0.672-2.5173 0-3.8187 1.408-3.904 4.224-0.0213 0.576-0.032 1.4614-0.032 2.656 0 1.1947 0.0107 2.1014 0.032 2.72 0.0853 2.816 1.3867 4.224 3.904 4.224 1.0453 0 1.8987-0.224 2.56-0.672 0.6613-0.4693 1.12-1.2266 1.376-2.272 0.0853-0.32 0.2027-0.5333 0.352-0.64 0.1493-0.128 0.3733-0.192 0.672-0.192h4.32c0.192 0 0.352 0.064 0.48 0.192 0.1493 0.128 0.2133 0.288 0.192 0.48-0.0213 1.5574-0.4693 2.9227-1.344 4.096-0.8533 1.152-2.0267 2.048-3.52 2.688-1.4933 0.6187-3.1787 0.928-5.056 0.928z"
                    fill="#242424"
                />
            </g>
            <g filter="url(#a)">
                <path
                    d="m86.592 32.32c-2.0267 0-3.7653-0.2986-5.216-0.896-1.4507-0.5973-2.5493-1.376-3.296-2.336-0.7253-0.9813-1.1093-2.048-1.152-3.2 0-0.1706 0.064-0.32 0.192-0.448 0.1493-0.1493 0.32-0.224 0.512-0.224h4.032c0.256 0 0.4587 0.0534 0.608 0.16 0.1707 0.0854 0.3413 0.224 0.512 0.416 0.2773 0.5547 0.7253 1.0134 1.344 1.376 0.6187 0.3627 1.44 0.544 2.464 0.544 1.216 0 2.144-0.192 2.784-0.576s0.96-0.9066 0.96-1.568c0-0.4693-0.1707-0.8533-0.512-1.152-0.32-0.2986-0.832-0.5653-1.536-0.8-0.704-0.2346-1.7493-0.5013-3.136-0.8-2.56-0.5333-4.48-1.312-5.76-2.336-1.2587-1.0453-1.888-2.528-1.888-4.448 0-1.3013 0.3627-2.464 1.088-3.488s1.76-1.824 3.104-2.4c1.344-0.57597 2.912-0.86397 4.704-0.86397 1.856 0 3.4667 0.32 4.832 0.95997 1.3653 0.64 2.4 1.4507 3.104 2.432 0.7253 0.96 1.1093 1.9094 1.152 2.848 0 0.192-0.064 0.352-0.192 0.48s-0.288 0.192-0.48 0.192h-4.224c-0.256 0-0.4693-0.0426-0.64-0.128-0.1493-0.0853-0.288-0.224-0.416-0.416-0.128-0.4906-0.48-0.9066-1.056-1.248-0.5547-0.3413-1.248-0.512-2.08-0.512-0.96 0-1.696 0.1707-2.208 0.512-0.512 0.3414-0.768 0.8427-0.768 1.504 0 0.448 0.1387 0.8214 0.416 1.12 0.2987 0.2987 0.768 0.576 1.408 0.832 0.6613 0.2347 1.6 0.48 2.816 0.736 1.984 0.3627 3.5627 0.8214 4.736 1.376 1.1947 0.5334 2.0693 1.2374 2.624 2.112 0.5547 0.8534 0.832 1.9307 0.832 3.232 0 1.4294-0.416 2.6774-1.248 3.744-0.8107 1.0454-1.952 1.856-3.424 2.432-1.4507 0.5547-3.1147 0.832-4.992 0.832z"
                    fill="#242424"
                />
            </g>
            <defs>
                <filter
                    id="g"
                    x="-3"
                    y="-3"
                    width="114"
                    height="50"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dx="1" dy="1" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter
                    id="f"
                    x="0"
                    y="-1"
                    width="40"
                    height="46"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dx="1" dy="1" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter
                    id="e"
                    x="34"
                    y="-1"
                    width="40"
                    height="46"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dx="1" dy="1" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter
                    id="d"
                    x="68"
                    y="-1"
                    width="40"
                    height="46"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dx="1" dy="1" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter
                    id="c"
                    x="11.24"
                    y="9.6"
                    width="18.688"
                    height="23.4"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="1" />
                    <feColorMatrix values="0 0 0 0 0.561707 0 0 0 0 0.561707 0 0 0 0 0.561707 0 0 0 0.493034 0" />
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter
                    id="b"
                    x="43.504"
                    y="9.28"
                    width="19.844"
                    height="24.04"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="1" />
                    <feColorMatrix values="0 0 0 0 0.561707 0 0 0 0 0.561707 0 0 0 0 0.561707 0 0 0 0.493034 0" />
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter
                    id="a"
                    x="76.928"
                    y="9.28"
                    width="19.328"
                    height="24.04"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="1" />
                    <feColorMatrix values="0 0 0 0 0.561707 0 0 0 0 0.561707 0 0 0 0 0.561707 0 0 0 0.493034 0" />
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
            </defs>
        </svg>
    );
}

export default Logo;
