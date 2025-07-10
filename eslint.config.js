import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs}"],
        plugins: { js },
        extends: ["js/recommended"],
        languageOptions: {
            globals: globals.browser
        },
        rules: {
            // Відступи: 2 пробіли (SwitchCase: 1 = для case в switch теж відступ)
            indent: ["error", 4, { SwitchCase: 2 }],
            // Які лапки використовувати: подвійні (""), попередження, дозволяє шаблонні строки та екранування
            quotes: ["warn", "double", { avoidEscape: true, allowTemplateLiterals: true }],
            // Дужки у стрілочних функціях: завжди потрібні
            "arrow-parens": ["error", "always"],
            // Крапка з комою: обов'язково наприкінці кожного рядка
            semi: ["error", "always"],
            // Не використовувати змінні, які не були використані (попередження)
            "no-unused-vars": ["warn"],
            // Попередження, якщо є console.log та інші консольні методи
            "no-console": ["warn"],
            // Використовувати тільки суворе порівняння === та !==
            eqeqeq: ["error", "always"],
            // Не ставити кому після останнього елемента у масивах/об'єктах
            "comma-dangle": ["error", "never"],
            // Не більше однієї порожньої строки підряд
            "no-multiple-empty-lines": ["error", { max: 1 }],
            // Пробіли всередині фігурних дужок в об'єктах: { foo: bar }
            "object-curly-spacing": ["error", "always"],
            // Без пробілів всередині квадратних дужок у масивах: [1, 2, 3]
            "array-bracket-spacing": ["error", "never"],
            // Пробіл перед фігурними дужками у функціях, if, for тощо
            "space-before-blocks": ["error", "always"],
            // Пробіли до і після ключових слів (if, else, return тощо)
            "keyword-spacing": ["error", { before: true, after: true }],
            // Заборонити пробіли наприкінці рядка
            "no-trailing-spaces": ["error"],
            // Завжди новий рядок наприкінці файлу
            "eol-last": ["error", "always"]
        }
    }
]);
