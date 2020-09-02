import React, { Fragment } from 'react'

import { connect } from 'react-redux'

import { Load_Transaksi_List, get_TransaksiId_Detail } from '../../../Store/Actions/Transaksi.Actions'

import { Short_Column_INT, Short_Column_STR, Short_Column_Money, Short_Column_Date } from '../Shorting'

import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'

import { DataTidakDitemukan } from '../Page404'
import { ConvertInttoMoney } from '../Formater'
import GenericModals from '../GenericModals'
import TransaksiDetail from './Transaksi.TransaksiDetail'

class ListTransaksi extends React.Component {
    componentDidMount() {
        if (this.props.DisableLoad !== true) {
            console.log('this.props.DisableLoad')
            this.props.Load_Transaksi_List()
        }
    }
    ButtonShortSTR(ColumnNumb) {
        Short_Column_STR('tabel_list_transaksi', ColumnNumb)
    }
    ButtonShortINT(ColumnNumb) {
        Short_Column_INT('tabel_list_transaksi', ColumnNumb)
    }
    ButtonShortMoney(ColumnNumb) {
        Short_Column_Money('tabel_list_transaksi', ColumnNumb)
    }
    ButtonShortDate(ColumnNumb) {
        Short_Column_Date('tabel_list_transaksi', ColumnNumb)
    }
    ConverNumberToMoneyFormat(OriginValue) {
        const MoneyFormate = ConvertInttoMoney(OriginValue ? OriginValue : 0)
        return MoneyFormate
    }
    onClick_get_TransaksiId_Detail(BarangID) {
        this.props.get_TransaksiId_Detail(BarangID)
    }
    render() {
        const data = this.props.TransaksiList
        return (
            <Fragment>
                {data && data.length > 0 ?
                    // {data ?
                    <Table stickyHeader id='tabel_list_transaksi'>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ width: '5%' }} align="center" onClick={() => this.ButtonShortINT(0)}>No</TableCell>
                                <TableCell style={{ width: '10%' }} align="center" onClick={() => this.ButtonShortDate(1)}>Tanggal</TableCell>
                                <TableCell style={{ width: '35%' }} align="center" onClick={() => this.ButtonShortSTR(2)}>Id</TableCell>
                                <TableCell style={{ width: '10%' }} align="center" onClick={() => this.ButtonShortSTR(3)}>User Name</TableCell>
                                <TableCell style={{ width: '5%' }} align="center" onClick={() => this.ButtonShortSTR(4)}>Jenis</TableCell>
                                <TableCell style={{ width: '10%' }} align="center" onClick={() => this.ButtonShortMoney(5)}>Total Transaksi&nbsp;(Rp)</TableCell>
                                <TableCell style={{ width: '5%' }} align='center'>Detail</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((item, index) => (
                                <TableRow hover key={index + 1}>
                                    <TableCell align="center">{index + 1}</TableCell>
                                    <TableCell align="left">{new Date(item.TanggalTransaksi).toLocaleString()}</TableCell>
                                    <TableCell align="left">{item._id}</TableCell>
                                    <TableCell align="left">{item.NamaKasir}</TableCell>
                                    <TableCell align="left">{item.Tipe}</TableCell>
                                    <TableCell align="right">{this.ConverNumberToMoneyFormat(item.TotalPembayaran)}</TableCell>
                                    <TableCell align='center'>
                                        <GenericModals
                                            size='l'
                                            header='Jenis Barang Detail'
                                            body={<TransaksiDetail />}
                                            Buttoncolor='primary'
                                            ButtononClickeven={() => this.onClick_get_TransaksiId_Detail(item._id)}
                                            Buttonlabel={'Detail'}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    :
                    <DataTidakDitemukan />
                }
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    User: state.KasirQu_Auth.User,
    TransaksiList: state.KasirQu_Transaksi.TransaksiList,
    idDetailTransaksi: state.KasirQu_Transaksi.idDetailTransaksi,
})

export default connect(mapStateToProps, { Load_Transaksi_List, get_TransaksiId_Detail })(ListTransaksi)