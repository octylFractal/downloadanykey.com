import postcss from 'rollup-plugin-postcss'
import nodeResolve from "@rollup/plugin-node-resolve";
import copy from "rollup-plugin-copy";

export default {
    input: 'src/css.js',
    output: {
        dir: 'build',
        format: 'es',
    },
    plugins: [
        nodeResolve(),
        postcss({
            extract: true,
            minimize: true,
        }),
        copy({
            targets: [
                {
                    src: "src/index.html",
                    dest: "build",
                },
                {
                    src: "src/img",
                    dest: "build",
                },
            ],
        }),
    ],
}
