import React from 'react'

import { connect } from 'react-redux'

import {DeletePelanggaran} from '../../../Store/Actions/Point.Actions'

import DataNotFound from '../DataNotFound'
import PelanggaraDetail from '../Detail/PelanggaranDetail'

class PelanggaranDelete extends React.Component {
    Delete_Pelanggaran(PelanggaranID){
        const { user } = this.props.auth
        const authdata = {
            siswa: user.siswa,
            staff: user.staff,
            admin: user.admin,
            supervisor: user.supervisor,
            superuser: user.superuser,
        }
        this.props.DeletePelanggaran(PelanggaranID, authdata)
    }
    render() {
        const {Pelanggaran} = this.props.point
        return (
            <div>
                {Pelanggaran?(
                    <div>
                     <div>
                     <h3><b>This Pelanggaran Will Deleted, Are This Ok?</b></h3><br />
                     <PelanggaraDetail />
                 </div>
                 <div className="modal-footer">
                     <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                     <button type="submit" onClick={() => this.Delete_Pelanggaran(Pelanggaran.id)} className="btn btn-danger">Yes, Delete</button>
                 </div>
                 </div>
                ):<DataNotFound />}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    point: state.PrestasiQu_Point,
    auth: state.PrestasiQu_Auth
})

export default connect(mapStateToProps, {DeletePelanggaran})(PelanggaranDelete)