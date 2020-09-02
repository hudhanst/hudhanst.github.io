import React, { Fragment } from 'react'

import { connect } from 'react-redux'

import { Load_JenisBarang_List, get_JenisBarangId_Detail, get_JenisBarangId_Update, Delete_a_JenisBarang } from '../../../Store/Actions/JenisBarang.Actions'

import { Short_Column_INT, Short_Column_STR } from '../Shorting'

import { Table, TableHead, TableBody, TableRow, TableCell, Button } from '@material-ui/core'

import { MUI_FullWidth, MUI_VerticalMargin } from '../../../MUI_theme'

import { DataTidakDitemukan } from '../Page404'
import GenericModals from '../GenericModals'
import JenisBarangDetail from './Barang.JenisBarangDetail'
import ListJenisBarang from './Barang.BarangList'
import JenisBarangUpdate from './Barang.JenisBarangUpdate'

class KatagoriBarangList extends React.Component {
    componentDidMount() {
        this.props.Load_JenisBarang_List()
    }
    ButtonShortSTR(ColumnNumb) {
        Short_Column_STR('tabel_jenisbarang', ColumnNumb)
    }
    ButtonShortINT(ColumnNumb) {
        Short_Column_INT('tabel_jenisbarang', ColumnNumb)
    }
    onClick_get_JenisBarangId_Detail(JenisBarangID) {
        this.props.get_JenisBarangId_Detail(JenisBarangID)
    }
    onClick_get_JenisBarangId_Update(JenisBarangID) {
        this.props.get_JenisBarangId_Update(JenisBarangID)
    }
    onClick_get_Delete_a_JenisBarang(JenisBarangID) {
        const { User } = this.props
        const authdata = {
            isKasir: User.isKasir,
            isAdmin: User.isAdmin,
            isSuperUser: User.isSuperUser,
        }
        this.props.Delete_a_JenisBarang(JenisBarangID, authdata)
    }
    render() {
        const data = this.props.JenisBarangList
        const { User, idDetailJenisBarang } = this.props
        const DeleteButton = () => {
            return (
                <Fragment>
                    <Button
                        style={{ ...MUI_FullWidth, MUI_VerticalMargin }}
                        variant='contained'
                        color='secondary'
                        onClick={() => this.onClick_get_Delete_a_JenisBarang(idDetailJenisBarang)}
                    >
                        Delete
                        </Button>
                </Fragment>
            )
        }
        return (
            <Fragment>
                {data ?
                    <Table stickyHeader id='tabel_jenisbarang'>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ width: '5%' }} align='center' onClick={() => this.ButtonShortINT(0)}>No</TableCell>
                                <TableCell style={{ width: '45%' }} align='center' onClick={() => this.ButtonShortSTR(1)}>Nama Jenis Barang</TableCell>
                                <TableCell style={{ width: '10%' }} align='center' onClick={() => this.ButtonShortSTR(2)}>Tipe Kepemilikan</TableCell>
                                <TableCell style={{ width: '10%' }} align='center'>Detail</TableCell>
                                <TableCell style={{ width: '10%' }} align='center'>List</TableCell>
                                {User ? ((User.isSuperUser || User.isAdmin) ?
                                    <Fragment>
                                        <TableCell style={{ width: '10%' }} align='center'>Edit</TableCell>
                                        <TableCell style={{ width: '10%' }} align='center'>Delete</TableCell>
                                    </Fragment>
                                    : null)
                                    : null
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((item, index) => (
                                <TableRow hover key={index + 1}>
                                    <TableCell align='center'>{index + 1}</TableCell>
                                    <TableCell align='left'>{item.NamaJenisBarang}</TableCell>
                                    <TableCell align='left'>{item.Kepemilikan}</TableCell>
                                    <TableCell align='center'>
                                        <GenericModals
                                            size='s'
                                            header='Jenis Barang Detail'
                                            body={<JenisBarangDetail />}
                                            Buttoncolor='primary'
                                            ButtononClickeven={() => this.onClick_get_JenisBarangId_Detail(item._id)}
                                            Buttonlabel={'Detail'}
                                        />
                                    </TableCell>
                                    <TableCell align='center'>
                                        <GenericModals
                                            size='xl'
                                            header='List dari Jenis Barang'
                                            body={<ListJenisBarang LoadBarangListBaseOnJenis={item._id} />}
                                            Buttoncolor='default'
                                            ButtononClickeven={() => null}
                                            Buttonlabel={'List'}
                                        />
                                    </TableCell>
                                    {User ? ((User.isSuperUser || User.isAdmin) ?
                                        <Fragment>
                                            <TableCell align='center'>
                                                <GenericModals
                                                    size='m'
                                                    header='Update Jenis Barang'
                                                    body={<JenisBarangUpdate />}
                                                    Buttoncolor='inherit'
                                                    ButtononClickeven={() => this.onClick_get_JenisBarangId_Update(item._id)}
                                                    Buttonlabel={'Edit'}
                                                />
                                            </TableCell>
                                            <TableCell align='center'>
                                                <GenericModals
                                                    size='s'
                                                    header='Delete Jenis Barang'
                                                    massagestype='warning'
                                                    massages='Jika Jenis Barang Dihapus Semua Barang Terkait Akan Ikut Terhapu'
                                                    body={<JenisBarangDetail />}
                                                    footer={<DeleteButton />}
                                                    Buttoncolor='secondary'
                                                    ButtononClickeven={() => this.onClick_get_JenisBarangId_Detail(item._id)}
                                                    Buttonlabel={'Delete'}
                                                />
                                            </TableCell>
                                        </Fragment>
                                        : null)
                                        : null
                                    }
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
    JenisBarangList: state.KasirQu_JenisBarang.JenisBarangList,
    idDetailJenisBarang: state.KasirQu_JenisBarang.idDetailJenisBarang,
})

export default connect(mapStateToProps, { Load_JenisBarang_List, get_JenisBarangId_Detail, get_JenisBarangId_Update, Delete_a_JenisBarang })(KatagoriBarangList)