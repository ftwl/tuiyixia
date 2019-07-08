// Routers

import Find from '@/pages/find'
import Center from '@/pages/center'
import Details from '@/pages/details'
import Ensure from '@/pages/ensure'
import Order from '@/pages/order'
import OrderDetails from '@/pages/order-details'
import Setting from '@/pages/setting'
export default{
    routes: [
        { path: '/', component: Find },
        {path:'/center',component:Center},
        {path:'/details',component:Details},
        {path:'/ensure',component:Ensure},
        {path:'/order',component:Order},
        {path:'/orderDetails',component:OrderDetails},
        {path:'/setting',component:Setting}
    ]
}