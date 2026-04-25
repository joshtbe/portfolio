import { defineConfig, presetWind3, transformerCompileClass } from "unocss";

export default defineConfig({
    theme: {
        colors: {
            bg: "var(--bg-color)",
            chip: "var(--chip-color)",
        },
    },
    presets: [presetWind3()],
    transformers: [transformerCompileClass()],
});
