import postcss from 'rollup-plugin-postcss'
import nodeResolve from "@rollup/plugin-node-resolve";
import copy from "rollup-plugin-copy";
import {render} from "./build/gen/index.js";
import purgeCSSPlugin from "@fullhuman/postcss-purgecss";

const memoizedRender = (() => {
    let last = undefined;
    return () => {
        if (typeof last === "undefined") {
            last = render();
        }
        return last;
    };
})();

function jsxEcstaticRendered() {
    return {
        name: "jsxEcstaticRendered",
        buildStart() {
            this.emitFile({
                type: "asset",
                fileName: "index.html",
                source: memoizedRender(),
            });
        }
    };
}

export default {
    input: 'src/css.js',
    output: {
        dir: 'build/site',
        format: 'es',
    },
    plugins: [
        jsxEcstaticRendered(),
        nodeResolve(),
        copy({
            targets: [
                {
                    src: "src/img",
                    dest: "build/site",
                },
                {
                    src: "src/downloads",
                    dest: "build/site",
                },
            ],
        }),
        postcss({
            extract: true,
            minimize: true,
            plugins: [
                purgeCSSPlugin({
                    content: [
                        {
                            raw: memoizedRender(),
                            extension: "html",
                        },
                    ],
                })
            ],
        }),
    ],
}
