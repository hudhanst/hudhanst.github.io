import React from 'react'

import { connect } from 'react-redux'

import { LoadListofInstansi, PrestasiSubmit } from '../../../Store/Actions/Prestasi.Actions'

import Loading from '../Loading'
import DataNotFound from '../DataNotFound'

class PrestasiSubmission extends React.Component {
    state = {
        Nama_Prestasi: '',
        No_Sertifikat: '',
        Katagori_Prestasi: '',
        Tingkatan_Prestasi: '',
        Nama_Instansi: '',
        Prestasi_Point: '',
        Keterangan: '',
        Lampiran: null,
    }
    componentDidMount() {
        this.props.LoadListofInstansi()
    }
    Form_OnChange = E => {
        this.setState({ [E.target.name]: E.target.value })
    }
    File_OnChange = E => {
        this.setState({ [E.target.name]: E.target.files[0] })
    }
    Form_OnSubmit = E => {
        E.preventDefault()
        const { Biodata_ID } = this.props.biodata
        const { user } = this.props.auth
        const prestasidata = {
            Nama_Prestasi: this.state.Nama_Prestasi,
            No_Sertifikat: this.state.No_Sertifikat,
            Katagori_Prestasi: this.state.Katagori_Prestasi,
            Tingkatan_Prestasi: this.state.Tingkatan_Prestasi,
            Nama_Instansi: this.state.Nama_Instansi,
            Prestasi_Point: this.state.Prestasi_Point,
            Keterangan: this.state.Keterangan,
            Lampiran: this.state.Lampiran,
        }
        const authdata = {
            siswa: user.siswa,
            staff: user.staff,
            admin: user.admin,
            supervisor: user.supervisor,
            superuser: user.superuser,
        }
        this.props.PrestasiSubmit(user.nomerinduk, Biodata_ID, prestasidata, authdata)
    }
    render() {
        const { isPrestasiLoading, Data_Instansi } = this.props.pestasi
        const { isBiodataLoading, Biodata_ID } = this.props.biodata
        const {
            Nama_Prestasi,
            No_Sertifikat,
            Katagori_Prestasi,
            Tingkatan_Prestasi,
            Nama_Instansi,
            Prestasi_Point,
            Keterangan,
            // Lampiran,
        } = this.state
        const Tingkatan_Prestasi_Choices = ['Remisi', 'RT/RW/Kelurahan', 'Sekolah', 'Kota', 'Provinsi', 'Nasional', 'Internasional']
        if ((isPrestasiLoading === true) || (isBiodataLoading === true)) {
            return (
                <Loading />
            )
        } else {
            return (
                <div>
                    <h1>Prestasi Submission Detail</h1>
                    {(Data_Instansi && Biodata_ID) ? (
                        <form onSubmit={this.Form_OnSubmit}>
                            <div>
                                <label>Nama Prestasi:</label><br />
                                <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Nama_Prestasi' value={Nama_Prestasi} placeholder='Masukkan nama prestasi' required /><br />
                                <label>No Sertifikat:</label><br />
                                <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='No_Sertifikat' value={No_Sertifikat} placeholder='Masukkan no sertifikat jika ada' /><br />
                                <label>Katagori Prestasi:</label><br />
                                <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Katagori_Prestasi' value={Katagori_Prestasi} placeholder='Masukkan katagori prestasi' /><br />
                                <label>Tingkatan Prestasi:</label><br />
                                <select className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Tingkatan_Prestasi' value={Tingkatan_Prestasi} required>
                                    <option value="" disabled> -- select an option -- </option>
                                    {Tingkatan_Prestasi_Choices.map((listdata) =>
                                        <option key={listdata} value={listdata}>{listdata}</option>
                                    )}
                                </select>
                                <label>Nama Instansi:</label><br />
                                <select className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Nama_Instansi' value={Nama_Instansi} required>
                                    <option value="" disabled> -- select an option -- </option>
                                    {Data_Instansi.map((listdata) =>
                                        <option key={listdata.id} value={listdata.Nama_Instansi}>{listdata.Nama_Instansi}, {listdata.Jenis_Instansi}</option>
                                    )}
                                </select>
                                <label>Prestasi Point:</label><br />
                                <input type='number' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Prestasi_Point' value={Prestasi_Point} placeholder='Masukkan jumlah point penambahan karna prestasi yang didapat' required /><br />
                                <label>Keterangan:</label><br />
                                <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Keterangan' value={Keterangan} placeholder='Masukkan keterangan tambahan jika ada' /><br />
                                <label>Lampiran:</label><br />
                                <input type='file' accept='image/*' onChange={this.File_OnChange} name='Lampiran' /><br />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Save changes</button>
                            </div>
                        </form>
                    ) : <DataNotFound />}
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    biodata: state.PrestasiQu_Biodata,
    pestasi: state.PrestasiQu_Prestasi,
    auth: state.PrestasiQu_Auth
})

export default connect(mapStateToProps, { LoadListofInstansi, PrestasiSubmit })(PrestasiSubmission)