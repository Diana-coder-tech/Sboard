import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import polyfillNode from 'rollup-plugin-polyfill-node';

export default {
    input: 'src/App.ts',
    output: {
        file: 'build/bundle.js',
        format: 'iife', // или другой формат, подходящий для браузеров
        sourcemap: true,
    },
    plugins: [
        resolve({
            browser: true, // Указывает, что мы целимся на браузер
            preferBuiltins: false, // Отключает предпочтение встроенных модулей Node.js
        }),
        commonjs(),
        polyfillNode(), // Используем полифилы для Node.js модулей
        typescript(),
    ],
};
