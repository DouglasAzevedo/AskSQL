import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
    ],    
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-inter)"],
                mono: ["var(--font-ubuntu-mono)"],
            },
            colors: {
                candy: {
                    50: "#f0fbfd",
                    100: "#d0f3fa",
                    200: "#b9eef8",
                    300: "#98e6f4",
                    400: "#85e1f2",
                    500: "#66d9ef",
                    600: "#5dc5d9",
                    700: "#489aaa",
                    800: "#387783",
                    900: "#2b5d64",
                },
                lime: {
                    50: "#eaffe7",
                    100: "#beffb3",
                    200: "#9eff8f",
                    300: "#72ff5c",
                    400: "#57ff3c",
                    500: "#57ff3c",
                    600: "#2dff8b",
                    700: "#29e88a",
                    800: "#28b588",
                    900: "#136b05",
                },
                gum: {
                    50: "#fff2f9",
                    100: "#fed5ed",
                    200: "#fecle4",
                    300: "#fea5d7",
                    400: "#fd93d0",
                    500: "#fd78c4",
                    600: "#e66db2",
                    700: "#b4558b",
                    800: "#8b426c",
                    900: "#6a3252",
                },
                blueberry: {
                    300: '#323842',
                    600: '#151A2A',
                    900: '#07061D',
                },
                background: '#030712',
                pistachio: '#D3FFCC',
                cream: '#E2DFCD',
                foam: '#D7DAE2',
                snow: '#FFFFFF',
            },
        },
    },
    plugins: [],
}

export default config;