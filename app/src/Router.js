import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from './Components/Layouts/Home'
import Blog from './Components/Layouts/Blog'
import About from './Components/Layouts/About'
import Preview from './Components/Containers/Preview'
import { PageNotFound } from './Components/Containers/404'



import BlogLearning from './Components/Layouts/Blog/Blog.Learning'





import BlogKasirQu from './Components/Layouts/Blog/Blog.KasirQu'

import KasirQuPrivateRoute from './Components/Cluster/KasirQu/src/Security/PrivateRoute'

import KasirQu_Login from './Components/Cluster/KasirQu/src/Components/Layouts/Account/Login'
import KasirQu_FirsTimeUse from './Components/Cluster/KasirQu/src/Components/Layouts/FirsTimeUse'
import KasirQu_Logout from './Components/Cluster/KasirQu/src/Components/Layouts/Account/Logout'
// import { KasirQu_HalamanTidakDitemukan } from './Components/Cluster/KasirQu/src/Components/Containers/Page404'

import KasirQu_Home from './Components/Cluster/KasirQu/src/Components/Layouts/Home'

import KasirQu_Transaksi from './Components/Cluster/KasirQu/src/Components/Layouts/Transaksi/Transaksi'
import KasirQu_TransaksiImportExport from './Components/Cluster/KasirQu/src/Components/Layouts/Transaksi/TransaksiImportExport'
import KasirQu_Belanja from './Components/Cluster/KasirQu/src/Components/Layouts/Transaksi/Belanja'
import KasirQu_TransaksiList from './Components/Cluster/KasirQu/src/Components/Layouts/Transaksi/TransaksiList'

import KasirQu_Barang from './Components/Cluster/KasirQu/src/Components/Layouts/Barang/Barang'
import KasirQu_KatagoriBarang from './Components/Cluster/KasirQu/src/Components/Layouts/Barang/katagoribarang'
import KasirQu_KatagoriBarangImportExport from './Components/Cluster/KasirQu/src/Components/Layouts/Barang/KatagoriBarangImportExport'
import KasirQu_KonfigurasiBarang from './Components/Cluster/KasirQu/src/Components/Layouts/Barang/KonfigurasiBarang'
import KasirQu_BarangImportExport from './Components/Cluster/KasirQu/src/Components/Layouts/Barang/BarangImportExport'

import KasirQu_Help from './Components/Cluster/KasirQu/src/Components/Layouts/Help/Help'
import KasirQu_IncomeReport from './Components/Cluster/KasirQu/src/Components/Layouts/Help/IncomeReport'
import KasirQu_OutcomeReport from './Components/Cluster/KasirQu/src/Components/Layouts/Help/OutcomeReport'
import KasirQu_Graph from './Components/Cluster/KasirQu/src/Components/Layouts/Help/Graph'

import {
    ////// USER
    KasirQuHelp_TingkatanAkun,
    KasirQuHelp_PerbedaanTingkatanAkun,
    KasirQuHelp_TambahUser,
    KasirQuHelp_UpdateUser,
    KasirQuHelp_DeleteUser,
    KasirQuHelp_UpdateToko,
    KasirQuHelp_History,
    ////// HELP
    KasirQuHelp_IncomeReport,
    KasirQuHelp_OutcomeReport,
    KasirQuHelp_Graph,
    ////// BARANG
    KasirQuHelp_BarangList,
    KasirQuHelp_Barang,
    KasirQuHelp_SatuanJualBarang,
    KasirQuHelp_JenisBarang,
    ////// TRANSAKSI
    KasirQuHelp_Transaksi,
    KasirQuHelp_Belanja,
    KasirQuHelp_Stok,
    KasirQuHelp_TransaksiDetail,
    ////// GENERAL||NAVIGASI
    KasirQuHelp_ImportExport,
    KasirQuHelp_LightDark,
    KasirQuHelp_PanduanPenggunaan,
    KasirQuHelp_PanduanTampilan,
    KasirQuHelp_PanduanMenu,
    KasirQuHelp_FirstTimeUse,
    KasirQuHelp_Login,
} from './Components/Cluster/KasirQu/src/Components/Layouts/Help/Help.Help'

import KasirQu_Account from './Components/Cluster/KasirQu/src/Components/Layouts/Account/Account'
import KasirQu_UserList from './Components/Cluster/KasirQu/src/Components/Layouts/Account/UserList'
import KasirQu_TokoDetail from './Components/Cluster/KasirQu/src/Components/Layouts/Account/TokoDetail'
import KasirQu_History from './Components/Cluster/KasirQu/src/Components/Layouts/Account/History'





import BlogPrestasiQu from './Components/Layouts/Blog/Blog.PrestasiQu'

import PrestasiQuPrivateRoute from './Components/Cluster/PrestasiQu/src/Security/PrivateRoute'

import PrestasiQuLogin from './Components/Cluster/PrestasiQu/src/Components/Layout/Account/login'
import PrestasiQuLogout from './Components/Cluster/PrestasiQu/src/Components/Layout/Account/logout'

import PrestasiQuHome from './Components/Cluster/PrestasiQu/src/Components/Layout/Home'

import PrestasiQuBiodata from './Components/Cluster/PrestasiQu/src/Components/Layout/Biodata/Biodata'
import PrestasiQuDataAdmin from './Components/Cluster/PrestasiQu/src/Components/Layout/Biodata/Biodata.data_admin'
import PrestasiQuDataGuru from './Components/Cluster/PrestasiQu/src/Components/Layout/Biodata/Biodata.data_guru'
import PrestasiQuDataInstansi from './Components/Cluster/PrestasiQu/src/Components/Layout/Biodata/Biodata.data_instansi'
import PrestasiQuDataPelanggaran from './Components/Cluster/PrestasiQu/src/Components/Layout/Biodata/Biodata.data_pelanggaran'
import PrestasiQuDataSiswa from './Components/Cluster/PrestasiQu/src/Components/Layout/Biodata/Biodata.data_siswa'

import PrestasiQuPoint from './Components/Cluster/PrestasiQu/src/Components/Layout/Point/Point'
import PrestasiQuPointPenerimaan from './Components/Cluster/PrestasiQu/src/Components/Layout/Point/Point.penerimaan_pengajuan_point'
import PrestasiQuPointPengajuan from './Components/Cluster/PrestasiQu/src/Components/Layout/Point/Point.pengajuan_point'

import PrestasiQuPrestasi from './Components/Cluster/PrestasiQu/src/Components/Layout/Prestasi/Prestasi'
import PrestasiQuPrestasiPenerimaan from './Components/Cluster/PrestasiQu/src/Components/Layout/Prestasi/Prestasi.penerimaan_pengajuan_prestasi'
import PrestasiQuPrestasiPengajuan from './Components/Cluster/PrestasiQu/src/Components/Layout/Prestasi/Prestasi.pengajuan_prestasi'

const BaseRouter = () => {
    return (
        <Switch>

            <Route exact path="/" component={Home} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/about" component={About} />
            <Route exact path="/blog/preview" component={Preview} />


            <Route exact path="/blog/blog/learning" component={BlogLearning} />





            <Route exact path="/blog/blog/kasirqu" component={BlogKasirQu} />
            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu" component={KasirQu_Home} />

            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/transaksi" component={KasirQu_Transaksi} />
            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/transaksi/belanja" component={KasirQu_Belanja} SecurityType={'Privacry'} />
            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/transaksi/transaksilist" component={KasirQu_TransaksiList} SecurityType={'Privacry'} />
            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/transaksi/importexport" component={KasirQu_TransaksiImportExport} SecurityType={'SuperPrivacry'} />

            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/barang" component={KasirQu_Barang} />
            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/barang/katagoribarang" component={KasirQu_KatagoriBarang} SecurityType={'Privacry'} />
            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/barang/konfigurasibarang" component={KasirQu_KonfigurasiBarang} SecurityType={'Privacry'} />
            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/barang/katagoribarang/importexport" component={KasirQu_KatagoriBarangImportExport} SecurityType={'SuperPrivacry'} />
            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/barang/konfigurasibarang/importexport" component={KasirQu_BarangImportExport} SecurityType={'SuperPrivacry'} />

            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/help" component={KasirQu_Help} />
            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/help/incomereport" component={KasirQu_IncomeReport} SecurityType={'Privacry'} />
            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/help/outcomereport" component={KasirQu_OutcomeReport} SecurityType={'Privacry'} />
            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/help/graph" component={KasirQu_Graph} SecurityType={'Privacry'} />


            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/help/tingkatan_akun" component={KasirQuHelp_TingkatanAkun} />
            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/help/perbedaan_tingkatan_akun" component={KasirQuHelp_PerbedaanTingkatanAkun} />
            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/help/tambah_user" component={KasirQuHelp_TambahUser} />
            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/help/update_user" component={KasirQuHelp_UpdateUser} />
            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/help/delete_user" component={KasirQuHelp_DeleteUser} />
            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/help/update_toko" component={KasirQuHelp_UpdateToko} />
            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/help/history" component={KasirQuHelp_History} />

            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/help/incomereport_help" component={KasirQuHelp_IncomeReport} />
            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/help/outcomereport_help" component={KasirQuHelp_OutcomeReport} />
            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/help/graph_help" component={KasirQuHelp_Graph} />

            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/help/barang_list" component={KasirQuHelp_BarangList} />
            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/help/barang" component={KasirQuHelp_Barang} />
            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/help/satuan_jual_barang" component={KasirQuHelp_SatuanJualBarang} />
            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/help/jenisbarang" component={KasirQuHelp_JenisBarang} />

            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/help/transaksi" component={KasirQuHelp_Transaksi} />
            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/help/belanja" component={KasirQuHelp_Belanja} />
            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/help/stok" component={KasirQuHelp_Stok} />
            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/help/transaksi_detail" component={KasirQuHelp_TransaksiDetail} />

            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/help/import-export" component={KasirQuHelp_ImportExport} />
            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/help/light-dark" component={KasirQuHelp_LightDark} />
            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/help/penggunaan_help" component={KasirQuHelp_PanduanPenggunaan} />
            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/help/tampilan_help" component={KasirQuHelp_PanduanTampilan} />
            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/help/menu_help" component={KasirQuHelp_PanduanMenu} />
            <Route exact path="/blog/preview/kasirqu/help/first_time_use" component={KasirQuHelp_FirstTimeUse} />
            <Route exact path="/blog/preview/kasirqu/help/login" component={KasirQuHelp_Login} />


            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/account" component={KasirQu_Account} />
            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/account/userlist" component={KasirQu_UserList} SecurityType={'Privacry'} />
            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/account/tokodetail" component={KasirQu_TokoDetail} SecurityType={'Privacry'} />
            <KasirQuPrivateRoute exact path="/blog/preview/kasirqu/account/tokodetail/history" component={KasirQu_History} SecurityType={'SuperPrivacry'} />

            <Route exact path="/blog/preview/kasirqu/firsttimeuse" component={KasirQu_FirsTimeUse} />
            <Route exact path="/blog/preview/kasirqu/login" component={KasirQu_Login} />
            <Route exact path="/blog/preview/kasirqu/logout" component={KasirQu_Logout} />
            {/* <Route path="*" component={KasirQu_HalamanTidakDitemukan} /> */}





            <Route exact path="/blog/blog/prestasiqu" component={BlogPrestasiQu} />
            <PrestasiQuPrivateRoute exact path="/blog/preview/prestasiqu" component={PrestasiQuHome} />

            <PrestasiQuPrivateRoute exact path="/blog/preview/prestasiqu/biodata" component={PrestasiQuBiodata} />
            <PrestasiQuPrivateRoute exact path="/blog/preview/prestasiqu/biodata/data-siswa" component={PrestasiQuDataSiswa} />
            <PrestasiQuPrivateRoute exact path="/blog/preview/prestasiqu/biodata/data-guru" component={PrestasiQuDataGuru} />
            <PrestasiQuPrivateRoute exact path="/blog/preview/prestasiqu/biodata/data-admin" component={PrestasiQuDataAdmin} />
            <PrestasiQuPrivateRoute exact path="/blog/preview/prestasiqu/biodata/data-instansi" component={PrestasiQuDataInstansi} />
            <PrestasiQuPrivateRoute exact path="/blog/preview/prestasiqu/biodata/data-pelanggaran" component={PrestasiQuDataPelanggaran} />

            <PrestasiQuPrivateRoute exact path="/blog/preview/prestasiqu/prestasi" component={PrestasiQuPrestasi} />
            <PrestasiQuPrivateRoute exact path="/blog/preview/prestasiqu/prestasi/pengajuan-prestasi" component={PrestasiQuPrestasiPengajuan} />
            <PrestasiQuPrivateRoute exact path="/blog/preview/prestasiqu/prestasi/penerimaan-pengajuan-prestasi" component={PrestasiQuPrestasiPenerimaan} />

            <PrestasiQuPrivateRoute exact path="/blog/preview/prestasiqu/point" component={PrestasiQuPoint} />
            <PrestasiQuPrivateRoute exact path="/blog/preview/prestasiqu/point/pengajuan-point" component={PrestasiQuPointPengajuan} />
            <PrestasiQuPrivateRoute exact path="/blog/preview/prestasiqu/point/penerimaan-pengajuan-point" component={PrestasiQuPointPenerimaan} />
            <Route exact path="/blog/preview/prestasiqu/login" component={PrestasiQuLogin} />
            <Route exact path="/blog/preview/prestasiqu/logout" component={PrestasiQuLogout} />



            <Route path="*" component={PageNotFound} />
        </Switch>
    )
}

export default BaseRouter