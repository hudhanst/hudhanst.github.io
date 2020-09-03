import React from 'react'

import { connect } from 'react-redux'

import { LoadListofUnconfirmPoint, Button_PointDetailView } from '../../../Store/Actions/Point.Actions'
import { Short_Column_INT, Short_Column_STR } from '../Shorting'

import DataNotFound from '../DataNotFound'
import Loading from '../Loading'

class PointTabelDataUnconfirmPoint extends React.Component {
    componentDidMount() {
        this.props.LoadListofUnconfirmPoint()
    }
    ButtonPointDetailView(ID) {
        this.props.Button_PointDetailView(ID)
    }
    ButtonShortINT(ColumnNumb) {
        Short_Column_INT('tabeldataunconfirmpoint', ColumnNumb)
    }
    ButtonShortSTR(ColumnNumb) {
        Short_Column_STR('tabeldataunconfirmpoint', ColumnNumb)
    }
    render() {
        const { isPelanggaranLoading, Point_PointUnconfirm } = this.props.point
        if (isPelanggaranLoading === true) {
            return (
                <Loading />
            )
        } else {
            return (
                <div>
                    {(!Point_PointUnconfirm || Point_PointUnconfirm.length <= 0) ? <DataNotFound /> :
                        <div className="Biodata-section">
                            <div className='table-responsive'>
                                <table className="table table-striped table-hover table-custom position-center" id='tabeldataunconfirmpoint'>
                                    <thead>
                                        <tr>
                                            <th scope="col" onClick={() => this.ButtonShortINT(0)}>Index</th>
                                            <th scope="col" onClick={() => this.ButtonShortINT(1)}>No Point Submision</th>
                                            <th scope="col" onClick={() => this.ButtonShortSTR(2)}>Nama Pengaju</th>
                                            <th scope="col" onClick={() => this.ButtonShortSTR(3)}>Nomer Induk Dituju</th>
                                            <th scope="col" onClick={() => this.ButtonShortSTR(4)}>Nama Dituju</th>
                                            <th scope="col" onClick={() => this.ButtonShortSTR(5)}>Nama Pelanggaran</th>
                                            <th scope="col" onClick={() => this.ButtonShortSTR(6)}>Tanggal Pengajuan</th>
                                            <th scope="col" >View</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Point_PointUnconfirm.map((listdata, index) => (
                                            <tr key={listdata.id}>
                                                <td>{index + 1}</td>
                                                <td>{listdata.id}</td>
                                                <td>{listdata.Nama_Pengaju}</td>
                                                <td>{listdata.Nomer_Induk_Dituju}</td>
                                                <td>{listdata.Nama_Dituju}</td>
                                                <td>{listdata.Nama_Pelanggaran}</td>
                                                <td>{listdata.Tanggal_Pengajuan}</td>
                                                <td>
                                                    {this.props.ConfirmingPoint ?
                                                        <button onClick={() => this.ButtonPointDetailView(listdata.id)} data-toggle="modal" data-target="#AcceptingPointSubmissionModal" className='btn btn-table-colorize-green'>Accept</button>
                                                        :
                                                        <button onClick={() => this.ButtonPointDetailView(listdata.id)} data-toggle="modal" data-target="#ViewPointSubmissionDetailModal" className='btn btn-table-colorize-green'>View</button>
                                                    }
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
    point: state.PrestasiQu_Point,
    auth: state.PrestasiQu_Auth,
})

export default connect(mapStateToProps, { LoadListofUnconfirmPoint, Button_PointDetailView })(PointTabelDataUnconfirmPoint)
