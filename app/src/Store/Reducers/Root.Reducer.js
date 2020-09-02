import { combineReducers } from 'redux'

import Generic_Blog from './Blog.Reducer'
import Generic_About from './About.Reducer'
import Generic_Display from './Display.Reducer'

import KasirQu_Auth from '../../Components/Cluster/KasirQu/src/Store/Reducers/Auth.Reducer'
import KasirQu_Account from '../../Components/Cluster/KasirQu/src/Store/Reducers/Account.Reducer'
import KasirQu_Transaksi from '../../Components/Cluster/KasirQu/src/Store/Reducers/Transaksi.Reducer'
import KasirQu_JenisBarang from '../../Components/Cluster/KasirQu/src/Store/Reducers/JenisBarang.Reducer'
import KasirQu_Barang from '../../Components/Cluster/KasirQu/src/Store/Reducers/Barang.Reducer'
import KasirQu_Help from '../../Components/Cluster/KasirQu/src/Store/Reducers/Help.Reducer'
import KasirQu_Messages from '../../Components/Cluster/KasirQu/src/Store/Reducers/Messages.Reducer'

const RootReducer = combineReducers({
    Generic_Blog,
    Generic_About,
    Generic_Display,

    KasirQu_Auth,
    KasirQu_Account,
    KasirQu_Transaksi,
    KasirQu_JenisBarang,
    KasirQu_Barang,
    KasirQu_Help,
    KasirQu_Messages,
})

export default RootReducer