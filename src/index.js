
import { createApp } from 'vue'

import 'bootstrap'

import example from './components/example.vue'

import "./styles/index.scss";

const app = createApp(example)

app.mount('#app')
