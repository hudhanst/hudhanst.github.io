import React from 'react'

import { connect } from 'react-redux'

import { LoadPrestasiListofPrestasi, Button_PrestasiDetailView } from '../../../Store/Actions/Prestasi.Actions'
import { Short_Column_INT, Short_Column_STR } from '../Shorting'

import DataNotFound from '../DataNotFound'
import Loading from '../Loading'

class PrestasiTabelDataPrestasi extends React.Component {
    componentDidMount() {
        const { user } = this.props.auth
        if (user) {
            this.props.LoadPrestasiListofPrestasi(user.nomerinduk)
        }
    }
    ButtonPrestasiDetailView(ID) {
        this.props.Button_PrestasiDetailView(ID)
    }
    ButtonShortINT(ColumnNumb) {
        Short_Column_INT('tabelprestasidataprestasi', ColumnNumb)
    }
    ButtonShortSTR(ColumnNumb) {
        Short_Column_STR('tabelprestasidataprestasi', ColumnNumb)
    }
    render() {
        const { isPrestasiLoading, Prestasi_Prestasi } = this.props.prestasi
        // console.log(Prestasi_Prestasi)
        if (isPrestasiLoading === true) {
            return (
                <Loading />
            )
        } else {
            return (
                <div>
                    {(!Prestasi_Prestasi || Prestasi_Prestasi.length <= 0) ? <DataNotFound /> :
                        <div className="Biodata-section">
                            <div className='table-responsive'>
                                <table className="table table-striped table-hover table-custom position-center" id='tabelprestasidataprestasi'>
                                    <thead>
                                        <tr>
                                            <th scope="col" onClick={() => this.ButtonShortINT(0)}>Index</th>
                                            <th scope="col" onClick={() => this.ButtonShortINT(1)}>No Point Submision</th>
                                            <th scope="col" onClick={() => this.ButtonShortSTR(2)}>Nama Pengaju</th>
                                            <th scope="col" onClick={() => this.ButtonShortSTR(3)}>Nomer Induk Dituju</th>
                                            <th scope="col" onClick={() => this.ButtonShortSTR(4)}>Nama Dituju</th>
                                            <th scope="col" onClick={() => this.ButtonShortSTR(5)}>Nama Prestasi</th>
                                            <th scope="col" onClick={() => this.ButtonShortSTR(6)}>Tingkatan Prestasi</th>
                                            <th scope="col" onClick={() => this.ButtonShortSTR(7)}>Tanggal Diterima</th>
                                            <th scope="col" onClick={() => this.ButtonShortSTR(8)}>Status</th>
                                            <th scope="col" >View</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Prestasi_Prestasi.map((listdata, index) => (
                                            <tr key={listdata.id}>
                                                <td>{index + 1}</td>
                                                <td>{listdata.id}</td>
                                                <td>{listdata.Nama_Pengaju}</td>
                                                <td>{listdata.Nomer_Induk_Dituju}</td>
                                                <td>{listdata.Nama_Dituju}</td>
                                                <td>{listdata.Nama_Prestasi}</td>
                                                <td>{listdata.Tingkatan_Prestasi}</td>
                                                <td>{listdata.Tanggal_Diterima}</td>
                                                <td>{listdata.Status}</td>
                                                <td>
                                                    <button onClick={() => this.ButtonPrestasiDetailView(listdata.id)} data-toggle="modal" data-target="#ViewPrestasiSubmissionDetailModal" className='btn btn-table-colorize-green'>View</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    }
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    prestasi: state.PrestasiQu_Prestasi,
    auth: state.PrestasiQu_Auth,
})

export default connect(mapStateToProps, { LoadPrestasiListofPrestasi, Button_PrestasiDetailView })(PrestasiTabelDataPrestasi)
