import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Ranking from '@/components/Ranking/Ranking'
import Recommend from '@/components/Recommend/Recommend'
import Search from '@/components/Search/Search'
import Songer from '@/components/Songer/Songer'
import MusicInterface from '@/components/MusicInterface/MusicInterface'
import SongerDetail from '@/components/SongerDetail/SongerDetail'
import SongerList from '@/components/Songer/SongerList'
import RankingList from '@/components/Ranking/RankList'
import RecommendDetail from '@/components/Recommend/RecommendDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'recommend' }
    },
    {
      path: '/Ranking',
      name: 'ranking',
      component: Ranking
    },
    {
      path: '/Recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/Search',
      name: 'search',
      component: Search
    },
    {
      path: '/Songer',
      name: 'songer',
      component: Songer
    },
    {
      path: '/MusicInterface',
      name: 'musicInterface',
      component: MusicInterface
    },
    {
      path: '/SongerDetail',
      name: 'songerdetail',
      component: SongerDetail
    },
    {
      path: '/Songer/SongerList',
      name: 'songerlist',
      component: SongerList
    },
    {
      path: '/Ranking/RankingList',
      name: 'ranklist',
      component: RankingList
    },
    {
      path: '/Recommend/RecommendDetail',
      name: 'recommenddetail',
      component: RecommendDetail
    }
  ]
})
