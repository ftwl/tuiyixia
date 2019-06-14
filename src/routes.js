// Routers

import Find from '@/pages/find'
import Center from '@/pages/center'
import Details from '@/pages/details'

export default{
    routes: [
        { path: '/', component: Find },
        {path:'/center',component:Center},
        {path:'/details',component:Details}
    ]
}