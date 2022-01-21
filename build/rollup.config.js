// 请先安装 rollup-plugin-esbuild rollup-plugin-vue rollup-plugin-scss sass rollup-plugin-terser
// 为了保证版本一致，请复制我的 package.json 到你的项目，并把 name 改成你的库名
import esbuild from 'rollup-plugin-esbuild'
import vue from 'rollup-plugin-vue'
// import scss from 'rollup-plugin-scss'
// import dartSass from 'sass';
import { terser } from "rollup-plugin-terser"
import postcss from "rollup-plugin-postcss";

export default {
  input: 'packages/index.ts',
  output: {
    globals: {
      vue: 'Vue'
    },
    name: 'Vue3EasySwiper',
    file: 'dist/lib/index.js',
    format: 'umd',
    plugins: [terser()]
  },
  plugins: [
    // scss({ include: /\.scss$/, sass: dartSass }),
    postcss(),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015'
    }),
    vue({
      include: /\.vue$/,
      // 把单文件组件中的样式，插入到html中的style标签
        css: true,
        // 把组件转换成 render 函数
        compileTemplate: true,
    })
  ],
}