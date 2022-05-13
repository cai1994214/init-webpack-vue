import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

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
      // viteCompression(),
    ],
    build: {
      target: "es2020", //指定es版本,浏览器的兼容性
      outDir: "dist", //指定打包输出路径
      assetsDir: "assets", //指定静态资源存放路径
      cssCodeSplit: true, //css代码拆分,禁用则所有样式保存在一个css里面
      sourcemap: false, //是否构建source map 文件

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

