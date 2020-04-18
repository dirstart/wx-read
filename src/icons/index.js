import Vue from 'vue';
import IconSvg from '@/components/common/icon-svg.vue';

Vue.component('icon-svg', IconSvg);
const req = require.context('./svg', false, /\.svg$/)
const requireAll = (requireContext) => requireContext.keys().map(requireContext)
requireAll(req)
