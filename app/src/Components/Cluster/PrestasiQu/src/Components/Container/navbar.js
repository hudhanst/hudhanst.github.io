import React from 'react'

import { connect } from 'react-redux'

import { LogOut } from '../../Store/Actions/Auth.Actions'

import Logo from '../../IMG/Logo.png'

class Navbar extends React.Component {
    render() {
        const { isAuthenticated } = this.props.auth
        const NavForGuest = (
            <div>
            </div>
        )
        if (isAuthenticated === false || isAuthenticated === null) {
            return (
                NavForGuest
            )
        } else {
            return (
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
                        <a className="navbar-brand nav-logo" href="/blog/preview/prestasiqu">
                            <img src={Logo} className="d-inline-block align-top imgnavbarlogo" alt="logo" />
                            <label className="navbartextlogo">Prestasi Qu</label>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav custom-nav-menu">
                                <li className="nav-item dropdown active custom-nav-item">
                                    <a className="nav-link" href="/blog/preview/prestasiqu/biodata">
                                        Biodata
                                    </a>
                                    <div className="dropdown-menu custom-dropdown-menu" id="biodatadropdown">
                                        <a className="dropdown-item custom-dropdown-item" href="/blog/preview/prestasiqu/biodata/data-siswa">Data Siswa</a>
                                        <a className="dropdown-item custom-dropdown-item" href="/blog/preview/prestasiqu/biodata/data-guru">Data Guru</a>
                                        <a className="dropdown-item custom-dropdown-item" href="/blog/preview/prestasiqu/biodata/data-admin">Data Admin</a>
                                        <a className="dropdown-item custom-dropdown-item" href="/blog/preview/prestasiqu/biodata/data-instansi">Data Instansi</a>
                                        <a className="dropdown-item custom-dropdown-item" href="/blog/preview/prestasiqu/biodata/data-pelanggaran">Data Pelanggaran</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown active custom-nav-item">
                                    <a className="nav-link" href="/blog/preview/prestasiqu/prestasi">
                                        Prestasi
                                    </a>
                                    <div className="dropdown-menu custom-dropdown-menu">
                                        <a className="dropdown-item custom-dropdown-item" href="/blog/preview/prestasiqu/prestasi/pengajuan-prestasi">Pengajuan Prestasi</a>
                                        <a className="dropdown-item custom-dropdown-item" href="/blog/preview/prestasiqu/prestasi/penerimaan-pengajuan-prestasi">ACC Pengajuan Prestasi</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown active custom-nav-item">
                                    <a className="nav-link" href="/blog/preview/prestasiqu/point">
                                        Point
                                    </a>
                                    <div className="dropdown-menu custom-dropdown-menu">
                                        <a className="dropdown-item custom-dropdown-item" href="/blog/preview/prestasiqu/point/pengajuan-point">Pengajuan Point</a>
                                        <a className="dropdown-item custom-dropdown-item" href="/blog/preview/prestasiqu/point/penerimaan-pengajuan-point">ACC Pengajuan Point</a>
                                    </div>
                                </li>
                                <li className="nav-item active custom-nav-item">
                                    <a className="nav-link" href="/blog/preview/prestasiqu/logout">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            )
        }
    }
}
const mapStateToProps = state => ({
    auth: state.PrestasiQu_Auth
})
export default connect(mapStateToProps, { LogOut })(Navbar)