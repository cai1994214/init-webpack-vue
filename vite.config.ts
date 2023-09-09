import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

import legacy from "@vitejs/plugin-legacy";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import postcsspxtoviewport8plugin from 'postcss-px-to-viewport-8-plugin'

export default ({ mode }) => {
  const env = mode === "development" ? "development" : "production";
  return defineConfig({
    // 设置相对路径
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      legacy({
        targets: [
          "> 1%, last 1 version, ie >= 11",
          "safari >= 10",
          "Android > 39",
          "Chrome >= 60",
          "Safari >= 10.1",
          "iOS >= 10.3",
          "Firefox >= 54",
          "Edge >= 15"
        ]
      })
      // viteCompression(),
    ],
    base: "./", // 设置打包路径
    build: {
      index: "index.html", //指定入口文件
      outDir: "dist", //指定打包输出路径
      target: ['es2015'], // 这一段必填
      assetsDir: "assets", //指定静态资源存放路径
      cssCodeSplit: true, //css代码拆分,禁用则所有样式保存在一个css里面
      sourcemap: false, //是否构建source map 文件
      assetsPublicPath: "./", //指定资源的引用路径
      // 生产环境取消 console
      minify: env == "production",
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },

      //会打包出 css js 等文件夹 目录显得清晰
      // rollupOptions: {
      //   output: {
      //     chunkFileNames: "js/[name]-[hash].js",
      //     entryFileNames: "js/[name]-[hash].js",
      //     assetFileNames: "[ext]/[name]-[hash].[ext]",
      //   },
      // },
    },
    // 样式相关规则
    css: {
      preprocessorOptions: {
        scss: {
          // 加载全局样式
          additionalData: '@import "@/assets/common.scss";',
        },
      },
      postcss: {
        plugins: [
          postcsspxtoviewport8plugin({
            unitToConvert: 'px',
            viewportWidth: (file) => {
              const designWidth = file.includes('qzd-h5-ui') ? 375 : 750
              return designWidth
            },
            unitPrecision: 5, // 单位转换后保留的精度
            propList: ['*'], // 能转化为vw的属性列表
            viewportUnit: 'vw', // 希望使用的视口单位
            fontViewportUnit: 'vw', // 字体使用的视口单位
            selectorBlackList: ['ignore-vw', '.van-qLoading'], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
            minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
            mediaQuery: false, // 媒体查询里的单位是否需要转换单位
            replace: true, //  是否直接更换属性值，而不添加备用属性
            exclude: [], // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
            include: [], // 如果设置了include，那将只有匹配到的文件才会被转换
            landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
            landscapeUnit: 'vw', // 横屏时使用的单位
            landscapeWidth: 1024, // 横屏时使用的视口宽度
          }),
        ],
      },
    },

    server: {
      host: "0.0.0.0", // 指定服务器主机名
      port: 3000, // 指定服务端口号
      open: false, // 运行自动打开浏览器
      // https: false, // 关闭https
    },
    resolve: {
      alias:{
        '@':resolve(__dirname, 'src'),
        '@coms': resolve(__dirname, 'src/components')
      },
      extensions: ['.ts', '.js', '.json', '.vue'],
  },
  });
};

