/** @type {import('tailwindcss').Config} */

function withOpacityValue(variable) {
    return ({ opacityValue }) => {
        if (opacityValue === undefined) {
            return `hsl(var(${variable}))`;
        }
        return `hsl(var(${variable}) / ${opacityValue})`;
    };
}

module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "color-car": withOpacityValue("--color-car")({
                    opacityValue: 0.05,
                }),
                "color-content": withOpacityValue("--color-content"),
            },
        },
        fontFamily: {
            rubik: ["Rubik", "sans-serif"],
            amaranth: ["Amaranth", "sans-serif"],
        },
        animation: {
            gradient: "mymove 4s ease infinite",
        },
        keyframes: {
            mymove: {
                "0%, 100%": {
                    "background-size": "300% 300%",
                    "background-position": "left center",
                },
                "50%": {
                    "background-size": "300% 300%",
                    "background-position": "right center",
                },
            },
            gradient: {
                "0%": {
                    "background-position": "0% 50%",
                },
                "50%": {
                    "background-position": "100% 50%",
                },
                "100%": {
                    "background-position": "0% 50%",
                },
            },
            shine: {
                to: {
                    "background-position": "200% center",
                },
            },
            tilt: {
                "0%, 50%, 100%": {
                    transform: "rotate(0deg)",
                },
                "50%": {
                    transform: "rotate(1deg)",
                },
                "75%": {
                    transform: "rotate(-1deg)",
                },
            },
        },
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        themes: [
            {
                night: {
                    ...require("daisyui/src/colors/themes")[
                        "[data-theme=night]"
                    ],
                    "accent-focus": "#1D2536",
                    "--color-car": "220 14% 96% ",
                    "--color-content": "222 65% 82%",
                },
            },
            {
                light: {
                    ...require("daisyui/src/colors/themes")[
                        "[data-theme=light]"
                    ],
                    primary: "#0CA5E9",
                    "base-100": "#f1f5f9",
                    "accent-focus": "#f3f4f6",
                    secondary: "#617BBD",
                    "secondary-focus": "#4662AD",
                    "--color-car": "217 33% 17%",
                    "--color-content": "215 19% 35%",
                },
            },
        ],
    },
};
