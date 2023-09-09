import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import ElementPlus, { ElMessage } from 'element-plus'
import i18n from '@/language/i18n'
import 'element-plus/theme-chalk/index.css'
const app = createApp(App);
app.config.globalProperties.$message = ElMessage;
app.use(router)
app.use(ElementPlus)
app.use(i18n)
app.mount('#app')
