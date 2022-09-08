import { createRouter, createWebHashHistory } from 'vue-router'
import { setCompliance } from './store'
import metadata from '../package.json'
import RoutedData from './components/RoutedData.vue'
import RoutedHome from './components/RoutedHome.vue'
import RoutedSoftware from './components/RoutedSoftware.vue'


const routes = [
    {
        path: '/',
        component: RoutedHome
    },
    { 
        path: '/data',
        component: RoutedData
    },
    {
        path: '/software',
        component: RoutedSoftware
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})


const guard = async (to: any, from: any) => {
    const f = to.query.f ? to.query.f : '0'.repeat(6)
    const a = to.query.a ? to.query.a : '0'.repeat(4)
    const i = to.query.i ? to.query.i : '0'.repeat(2)
    const r = to.query.r ? to.query.r : '0'.repeat(6)
    setCompliance(f + a + i + r)
}

router.beforeEach(guard)

export const setQueryParams = (newCompliance: string) => {
    const [major, minor] = metadata.version.split('.').slice(0, 2)
    const query = {
        v: `${major}.${minor}`,
        f: newCompliance.slice(0, 6),
        a: newCompliance.slice(6, 10),
        i: newCompliance.slice(10, 12),
        r: newCompliance.slice(12, 18)
    }
    router.push({query})
}
