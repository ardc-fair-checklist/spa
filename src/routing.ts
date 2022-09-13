import { createRouter, createWebHashHistory } from 'vue-router'
import { setCompliance } from './store'
import metadata from '../package.json'
import RoutedData from './components/RoutedData.vue'
import RoutedHome from './components/RoutedHome.vue'
import RoutedSoftware from './components/RoutedSoftware.vue'
import { slices, nQuestions } from './read-questions'


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


const guard = async (to: any, _: any) => {
    const f: string = to.query.f ? to.query.f : '0'.repeat(nQuestions.F)
    const a: string = to.query.a ? to.query.a : '0'.repeat(nQuestions.A)
    const i: string = to.query.i ? to.query.i : '0'.repeat(nQuestions.I)
    const r: string = to.query.r ? to.query.r : '0'.repeat(nQuestions.R)
    setCompliance((f + a + i + r).split('').map(elem => parseInt(elem, 10)))
}

router.beforeEach(guard)

export const setQueryParams = (newCompliance: number[]) => {
    const [major, minor] = metadata.version.split('.').slice(0, 2)
    const query = {
        v: `${major}.${minor}`,
        f: newCompliance.slice(...slices.F).map(elem => elem.toString()).join(''),
        a: newCompliance.slice(...slices.A).map(elem => elem.toString()).join(''),
        i: newCompliance.slice(...slices.I).map(elem => elem.toString()).join(''),
        r: newCompliance.slice(...slices.R).map(elem => elem.toString()).join('')
    }
    router.push({query})
}
