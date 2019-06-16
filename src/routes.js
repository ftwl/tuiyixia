// Routers

import Find from '@/pages/find'
import Center from '@/pages/center'
import Details from '@/pages/details'
import Ensure from '@/pages/ensure'

export default{
    routes: [
        { path: '/', component: Find },
        {path:'/center',component:Center},
        {path:'/details',component:Details},
        {path:'/ensure',component:Ensure}
    ]
}