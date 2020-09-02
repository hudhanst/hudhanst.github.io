import React, { Fragment } from 'react'

import { connect } from 'react-redux'

import { Load_Barang_List } from '../../../Store/Actions/Barang.Actions'
import { Add_Barang_To_Belanja } from '../../../Store/Actions/Transaksi.Actions'
import { Create_Info_Messages, Create_Warning_Messages } from '../../../Store/Actions/Messages.Actions'

import { TextField, Button } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'


class AddBarangToBelanja extends React.Component {
    state = {
        NamaBarang: null,
        Barcode: '',
    }
    componentDidMount() {
        this.props.Load_Barang_List()
    }
    BarangonChange = (e, newNamaBarang) => {
        this.setState({ NamaBarang: newNamaBarang })
    }
    BarcodeonChange = (e, newBarcode) => {
        this.setState({ Barcode: newBarcode })
        this.setState({ NamaBarang: null })
    }
    onSubmit = e => {
        e.preventDefault()
        const { NamaBarang, Barcode, } = this.state
        const { Data_Barang, Belanja } = this.props
        // console.log('NamaBarang', NamaBarang)
        // console.log('Barcode', Barcode)
        if (NamaBarang !== null) {
            if (NamaBarang.Barcode) {
                const isBaranginBelanja = Belanja.find(belanja => belanja.Barcode === NamaBarang.Barcode)
                if (isBaranginBelanja) {
                    this.props.Create_Warning_Messages(null, `barcode ${NamaBarang.Barcode} sudah ada di list belanja`)
                } else {
                    this.props.Add_Barang_To_Belanja(NamaBarang)
                    this.setState({
                        NamaBarang: null,
                        Barcode: '',
                    })
                }
            } else {
                const barang = Data_Barang.find(data_barang => data_barang.Barcode === NamaBarang)
                if (barang) {
                    const isBaranginBelanja = Belanja.find(belanja => belanja.Barcode === barang.Barcode)
                    if (isBaranginBelanja) {
                        this.props.Create_Warning_Messages(null, `barcode ${barang.Barcode} sudah ada di list belanja`)
                    } else {
                        this.props.Add_Barang_To_Belanja(barang)
                        this.setState({
                            NamaBarang: null,
                            Barcode: '',
                        })
                    }
                } else {
                    this.props.Create_Info_Messages(null, 'barcode yang anda masukkan tidak sesuai')
                }
            }
        } else {
            const barang = Data_Barang.find(data_barang => data_barang.Barcode === Barcode)
            if (barang) {
                const isBaranginBelanja = Belanja.find(belanja => belanja.Barcode === barang.Barcode)
                if (isBaranginBelanja) {
                    this.props.Create_Warning_Messages(null, `barcode ${barang.Barcode} sudah ada di list belanja`)
                } else {
                    this.props.Add_Barang_To_Belanja(barang)
                    this.setState({
                        NamaBarang: null,
                        Barcode: '',
                    })
                }
            } else {
                this.props.Create_Info_Messages(null, 'barcode yang anda masukkan tidak sesuai')
            }
        }
    }
    render() {
        // console.log(this.state)
        // console.log(this.props)
        const User = this.props.User
        const Data_Barang = this.props.Data_Barang
        const isTransaksiLoading = this.props.isTransaksiLoading
        const {
            NamaBarang,
            Barcode,
        } = this.state
        return (
            <Fragment>
                {/* <Fragment>
                    <div>
                        {`NamaBarang: ${this.state.NamaBarang !== null ? `'${this.state.NamaBarang}'` : 'null'}`}
                    </div>
                    <div>
                        {`Barcode: '${this.state.Barcode}'`}
                    </div>
                </Fragment> */}
                <Fragment>
                    <form onSubmit={this.onSubmit}>
                        <Autocomplete
                            freeSolo
                            disableClearable

                            options={Data_Barang.sort((a, b) => (a.Jenis > b.Jenis) ? 1 : ((b.Jenis > a.Jenis) ? -1 : 0))}
                            // getOptionLabel={(option) => option.Name}
                            getOptionLabel={option => typeof option === 'string' ? option : option.Name}
                            groupBy={(option) => option.Jenis}

                            value={NamaBarang}
                            onChange={this.BarangonChange}

                            inputValue={Barcode}
                            onInputChange={this.BarcodeonChange}

                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Masukan Code Barcode atau Pilih Nama Barang"
                                    margin="normal"
                                    variant="outlined"
                                    style={{ width: '100%' }}
                                    InputProps={{ ...params.InputProps, type: 'search' }}
                                />
                            )}
                        />
                        <Button
                            type='submit'
                            variant="outlined"
                            color='primary'
                            size="large"
                            style={{ width: '100%' }}
                            disabled={((User) && (isTransaksiLoading === false)) ? false : true}
                        >
                            Tambah
                            </Button>
                    </form>
                </Fragment>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    User: state.KasirQu_Auth.User,
    Data_Barang: state.KasirQu_Barang.BarangList,
    Belanja: state.KasirQu_Transaksi.Belanja,
    isTransaksiLoading: state.KasirQu_Transaksi.isTransaksiLoading
})

export default connect(mapStateToProps, { Load_Barang_List, Add_Barang_To_Belanja, Create_Info_Messages, Create_Warning_Messages })(AddBarangToBelanja)