const AccountDataBase = [
    {
        UserName: 'superuser',
        Password: '123',
        token: '1dAqz',
    },
    {
        UserName: 'admin',
        Password: '123',
        token: '2AxxE',
    },
    {
        UserName: 'guru',
        Password: '123',
        token: '3WsdA',
    },
    {
        UserName: 'guru1',
        Password: '1234',
        token: '4ZadA',
    },
    {
        UserName: 'siswa',
        Password: '123',
        token: '5Kol3',
    },
    {
        UserName: 'siswa1',
        Password: '1234',
        token: '6aZQ3',
    },
    {
        UserName: 'siswa2',
        Password: '12345',
        token: '7LaQ1',
    },
]

// let TokenDataBase = []
const TokenDataBase = [
    {
        UserName: 'superuser',
        ExpiredDate: null,
        token: '1dAqz',
    },
    {
        UserName: 'admin',
        ExpiredDate: null,
        token: '2AxxE',
    },
    {
        UserName: 'guru',
        ExpiredDate: null,
        token: '3WsdA',
    },
    {
        UserName: 'guru1',
        ExpiredDate: null,
        token: '4ZadA',
    },
    {
        UserName: 'siswa',
        ExpiredDate: null,
        token: '5Kol3',
    },
    {
        UserName: 'siswa1',
        ExpiredDate: null,
        token: '6aZQ3',
    },
    {
        UserName: 'siswa2',
        ExpiredDate: null,
        token: '7LaQ1',
    },
]

const UsersDataBase = [
    {
        id: '13579',
        nomerinduk: 'superuser',
        active: true,
        siswa: true,
        staff: true,
        admin: true,
        supervisor: true,
        superuser: true,
        profile: '97531',
    },
    {
        id: '24680',
        nomerinduk: 'admin',
        active: true,
        siswa: true,
        staff: true,
        admin: true,
        supervisor: false,
        superuser: false,
        profile: '86420',
    },
    {
        id: '35791',
        nomerinduk: 'guru',
        active: true,
        siswa: true,
        staff: true,
        admin: false,
        supervisor: false,
        superuser: false,
        profile: '75319',
    },
    {
        id: '46802',
        nomerinduk: 'guru1',
        active: true,
        siswa: true,
        staff: true,
        admin: false,
        supervisor: false,
        superuser: false,
        profile: '64208',
    },
    {
        id: '57913',
        nomerinduk: 'siswa',
        active: true,
        siswa: true,
        staff: false,
        admin: false,
        supervisor: false,
        superuser: false,
        profile: '53197',
    },
    {
        id: '68024',
        nomerinduk: 'siswa1',
        active: true,
        siswa: true,
        staff: false,
        admin: false,
        supervisor: false,
        superuser: false,
        profile: '42086',
    },
    {
        id: '79135',
        nomerinduk: 'siswa2',
        active: true,
        siswa: true,
        staff: false,
        admin: false,
        supervisor: false,
        superuser: false,
        profile: '31975',
    },
]

const BiodatasDataBase = [
    {
        id: '97531',
        NomerInduk: 'superuser',
        Nama: 'superuser',
        Agama: 'Lainnya',
        TempatLahir: 'Indonesia',
        TanggalLahir: new Date(),
        Alamat: 'Woodlea Ridgeway',
        NomerTLP: '+625391729312',
        Email: 'woodlearidgeway@xyz.com',
        PendidikanTerakhir: 'S3',
        InstansiPendidikanTerakhir: 'Woodlea Ridgeway',
        Point: 300,
        Status: 'Staf Aktif',
        Profilepicture: null,
    },
    {
        id: '86420',
        NomerInduk: 'admin',
        Nama: 'admin',
        Agama: 'Lainnya',
        TempatLahir: 'Indonesia',
        TanggalLahir: new Date(),
        Alamat: 'Woodlea Ridgeway',
        NomerTLP: '+625391729312',
        Email: 'woodlearidgeway@xyz.com',
        PendidikanTerakhir: 'S1',
        InstansiPendidikanTerakhir: 'Woodlea Ridgeway',
        Point: 300,
        Status: 'Staf Aktif',
        Profilepicture: null,
    },
    {
        id: '75319',
        NomerInduk: 'guru',
        Nama: 'guru',
        Agama: 'Lainnya',
        TempatLahir: 'Indonesia',
        TanggalLahir: new Date(),
        Alamat: 'Woodlea Ridgeway',
        NomerTLP: '+625391729312',
        Email: 'woodlearidgeway@xyz.com',
        PendidikanTerakhir: 'S2',
        InstansiPendidikanTerakhir: 'Woodlea Ridgeway',
        Point: 300,
        Status: 'Guru Aktif',
        Profilepicture: null,
    },
    {
        id: '64208',
        NomerInduk: 'guru1',
        Nama: 'guru1',
        Agama: 'Lainnya',
        TempatLahir: 'Indonesia',
        TanggalLahir: new Date(),
        Alamat: 'Woodlea Ridgeway',
        NomerTLP: '+625391729312',
        Email: 'woodlearidgeway@xyz.com',
        PendidikanTerakhir: 'S2',
        InstansiPendidikanTerakhir: 'Woodlea Ridgeway',
        Point: 300,
        Status: 'Guru Aktif',
        Profilepicture: null,
    },
    {
        id: '53197',
        NomerInduk: 'siswa',
        Nama: 'siswa',
        Agama: 'Lainnya',
        TempatLahir: 'Indonesia',
        TanggalLahir: new Date(),
        Alamat: 'Woodlea Ridgeway',
        NomerTLP: '+625391729312',
        Email: 'woodlearidgeway@xyz.com',
        PendidikanTerakhir: 'SMP',
        InstansiPendidikanTerakhir: 'Woodlea Ridgeway',
        Point: 300,
        Status: 'Siswa Aktif',
        Profilepicture: null,
    },
    {
        id: '42086',
        NomerInduk: 'siswa1',
        Nama: 'siswa1',
        Agama: 'Lainnya',
        TempatLahir: 'Indonesia',
        TanggalLahir: new Date(),
        Alamat: 'Woodlea Ridgeway',
        NomerTLP: '+625391729312',
        Email: 'woodlearidgeway@xyz.com',
        PendidikanTerakhir: 'SMP',
        InstansiPendidikanTerakhir: 'Woodlea Ridgeway',
        Point: 280,
        Status: 'Siswa Aktif',
        Profilepicture: null,
    },
    {
        id: '31975',
        NomerInduk: 'siswa2',
        Nama: 'siswa2',
        Agama: 'Lainnya',
        TempatLahir: 'Indonesia',
        TanggalLahir: new Date(),
        Alamat: 'Woodlea Ridgeway',
        NomerTLP: '+625391729312',
        Email: 'woodlearidgeway@xyz.com',
        PendidikanTerakhir: 'SMP',
        InstansiPendidikanTerakhir: 'Woodlea Ridgeway',
        Point: 350,
        Status: 'Siswa Aktif',
        Profilepicture: null,
    },
]

const PelanggaransDataBase = [
    {
        id: '19',
        Nama_Pelanggaran: 'Late',
        Jenis_Pelanggaran: 'Ringan',
        Keterangan_Pelanggaran: 'Late for school',
        Pelanggaran_Point: 10,
    },
    {
        id: '28',
        Nama_Pelanggaran: 'not doing homework',
        Jenis_Pelanggaran: 'Ringan',
        Keterangan_Pelanggaran: '',
        Pelanggaran_Point: 20,
    },
    {
        id: '37',
        Nama_Pelanggaran: 'Fight',
        Jenis_Pelanggaran: 'Sedang',
        Keterangan_Pelanggaran: 'Fighting',
        Pelanggaran_Point: 90,
    },
    {
        id: '46',
        Nama_Pelanggaran: 'Cheat',
        Jenis_Pelanggaran: 'Sedang',
        Keterangan_Pelanggaran: '',
        Pelanggaran_Point: 100,
    },
    {
        id: '55',
        Nama_Pelanggaran: 'Late',
        Jenis_Pelanggaran: 'Berat',
        Keterangan_Pelanggaran: 'Late for school',
        Pelanggaran_Point: 250,
    },
]

const PointsDataBase = [
    {
        id: '91',
        Nomer_Induk_Pengaju: 'guru',
        Nama_Pengaju: 'guru',
        Tanggal_Pengajuan: JSON.stringify(new Date()),
        Nomer_Induk_Dituju: 'siswa',
        Nama_Dituju: 'siswa',
        Point_Awal_Dituju: 300,
        Nama_Pelanggaran: 'not doing homework',
        Jenis_Pelanggaran: 'Ringan',
        Point_Pengurang: 20,
        Lampiran: null,
        Keterangan: '',
        Status: 'Accepted',
        Nomer_Induk_Assessor: 'superuser',
        Nama_Assessor: 'superuser',
        Tanggal_Diterima: JSON.stringify(new Date()),
        Point_Akhir: 300 - 20
    },
    {
        id: '82',
        Nomer_Induk_Pengaju: 'guru',
        Nama_Pengaju: 'guru',
        Tanggal_Pengajuan: JSON.stringify(new Date()),
        Nomer_Induk_Dituju: 'siswa',
        Nama_Dituju: 'siswa',
        Point_Awal_Dituju: 300 - 20,
        Nama_Pelanggaran: 'Fight',
        Jenis_Pelanggaran: 'Sedang',
        Point_Pengurang: 90,
        Lampiran: null,
        Keterangan: '',
        Status: 'Menunggu',
        Nomer_Induk_Assessor: null,
        Nama_Assessor: null,
        Tanggal_Diterima: null,
        Point_Akhir: 300 - 20 - 90
    },
    {
        id: '73',
        Nomer_Induk_Pengaju: 'guru1',
        Nama_Pengaju: 'guru1',
        Tanggal_Pengajuan: JSON.stringify(new Date()),
        Nomer_Induk_Dituju: 'siswa1',
        Nama_Dituju: 'siswa1',
        Point_Awal_Dituju: 300,
        Nama_Pelanggaran: 'Berat',
        Jenis_Pelanggaran: 'Berat',
        Point_Pengurang: 250,
        Lampiran: null,
        Keterangan: '',
        Status: 'Menunggu',
        Nomer_Induk_Assessor: null,
        Nama_Assessor: null,
        Tanggal_Diterima: null,
        Point_Akhir: 300 - 250
    },
    {
        id: '64',
        Nomer_Induk_Pengaju: 'guru1',
        Nama_Pengaju: 'guru1',
        Tanggal_Pengajuan: JSON.stringify(new Date()),
        Nomer_Induk_Dituju: 'siswa1',
        Nama_Dituju: 'siswa1',
        Point_Awal_Dituju: 300,
        Nama_Pelanggaran: 'not doing homework',
        Jenis_Pelanggaran: 'Ringan',
        Point_Pengurang: 20,
        Lampiran: null,
        Keterangan: '',
        Status: 'Rejected',
        Nomer_Induk_Assessor: 'superuser',
        Nama_Assessor: 'superuser',
        Tanggal_Diterima: JSON.stringify(new Date()),
        Point_Akhir: 300 - 20
    },
]

const InstansisDataBase = [
    {
        id: '01',
        Nama_Instansi: 'KasirQu',
        Jenis_Instansi: 'Education',
        Keterangan_Instansi: '',
    },
    {
        id: '02',
        Nama_Instansi: 'PrestasiQu',
        Jenis_Instansi: 'Goverment',
        Keterangan_Instansi: '',
    },
]

const PrestasisDataBase = [
    {
        id: '90',
        Nomer_Induk_Pengaju: 'guru',
        Nama_Pengaju: 'guru',
        Tanggal_Pengajuan: JSON.stringify(new Date()),
        Nomer_Induk_Dituju: 'siswa2',
        Nama_Dituju: 'siswa2',
        Point_Awal_Dituju: 300,
        Nama_Prestasi: 'Speech Contest',
        No_Sertifikat: '02693128312',
        Katagori_Prestasi: 'Education',
        Tingkatan_Prestasi: 'City',
        Prestasi_Point: 50,
        Nama_Instansi: 'PrestasiQu',
        Lampiran: null,
        Keterangan: '',
        Status: 'Accepted',
        Nomer_Induk_Assessor: 'superuser',
        Nama_Assessor: 'superuser',
        Tanggal_Diterima: JSON.stringify(new Date()),
        Point_Akhir: 300 + 50,
    },
    {
        id: '80',
        Nomer_Induk_Pengaju: 'guru1',
        Nama_Pengaju: 'guru1',
        Tanggal_Pengajuan: JSON.stringify(new Date()),
        Nomer_Induk_Dituju: 'siswa2',
        Nama_Dituju: 'siswa2',
        Point_Awal_Dituju: 350,
        Nama_Prestasi: 'Business Idea Contest',
        No_Sertifikat: '86123976',
        Katagori_Prestasi: 'Business',
        Tingkatan_Prestasi: 'National',
        Prestasi_Point: 150,
        Nama_Instansi: 'KasirQu',
        Lampiran: null,
        Keterangan: '',
        Status: 'Menunggu',
        Nomer_Induk_Assessor: null,
        Nama_Assessor: null,
        Tanggal_Diterima: null,
        Point_Akhir: 350 + 150,
    },
    {
        id: '70',
        Nomer_Induk_Pengaju: 'guru',
        Nama_Pengaju: 'guru',
        Tanggal_Pengajuan: JSON.stringify(new Date()),
        Nomer_Induk_Dituju: 'siswa',
        Nama_Dituju: 'siswa',
        Point_Awal_Dituju: 280,
        Nama_Prestasi: 'esay',
        No_Sertifikat: '96298321',
        Katagori_Prestasi: 'Education',
        Tingkatan_Prestasi: 'City',
        Prestasi_Point: 50,
        Nama_Instansi: 'PrestasiQu',
        Lampiran: null,
        Keterangan: '',
        Status: 'Menunggu',
        Nomer_Induk_Assessor: null,
        Nama_Assessor: null,
        Tanggal_Diterima: null,
        Point_Akhir: 280 + 50,
    },
]

// const ExpiredInHour = 12

export const Error_Messages_Standardization = (ErrorCode, MSG) => {
    const ErrorResponse = {
        response: {
            status: ErrorCode ? ErrorCode : 400,
            data: {
                msg: MSG ? MSG : ''
            }
        }
    }
    return ErrorResponse
}
export const Action_Denied = () => {
    const ActionDenied = {
        status: 200,
        data: {
            msg: 'Cant Perform this Action on a Preview Page'
        }
    }
    return ActionDenied
}
// export const CreateToken = () => {
//     try {
//         const VariableRandomaizer = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
//         let Token = ''
//         let i = 0
//         const Itteration = 10
//         while (i < Itteration) {
//             Token += VariableRandomaizer[Math.floor(Math.random() * VariableRandomaizer.length)]
//             i = i + 1
//         }
//         return Token
//     } catch (err) {
//         console.log('Log: CreateToken -> err', err)
//     }
// }
export const Database_Log_In = async (UserName, Password) => {
    try {
        if (!UserName || !Password) {
            const ErrorResponse = Error_Messages_Standardization(400, 'Data tidak lengkap')
            throw ErrorResponse
        }
        const CorrectUserName = AccountDataBase.findIndex((item) => item.UserName === UserName)
        const CorrectPassword = AccountDataBase.findIndex((item) => item.Password === Password)

        if (CorrectUserName === CorrectPassword && CorrectUserName >= 0) {
            // const Token = CreateToken()
            // const ThisTime = new Date()
            // const newTokenDataBase = {
            //     token: Token,
            //     ExpiredDate: ThisTime.setHours(ThisTime.getHours() + ExpiredInHour),
            //     UserName: UserName,
            // }
            // TokenDataBase.push(newTokenDataBase)
            const User = UsersDataBase.find((item) => item.UserName === AccountDataBase[CorrectUserName].UserName)
            const Data = {
                // token: Token,
                token: AccountDataBase[CorrectUserName].token,
                user: User
            }

            return Data
        } else {
            const ErrorResponse = Error_Messages_Standardization(400, 'UserName/Password Salah')
            throw ErrorResponse
        }
    } catch (err) {
        console.log('Log: Log_In -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

const Cek_for_Token = async (Token) => {
    try {
        if (!Token) {
            const ErrorResponse = Error_Messages_Standardization(400, 'No Token')
            throw ErrorResponse
        }
        // const ThisTIme = new Date()
        // const CorrectToken = TokenDataBase.findIndex((item) => item.token === Token)
        const CorrectToken = TokenDataBase.find((item) => item.token === Token)
        // if (CorrectToken >= 0) {
        if (CorrectToken) {
            // if (TokenDataBase[CorrectToken].ExpiredDate > ThisTIme) {
            //     const Data = {

            //     }
            //     return Data
            // } else {
            //     TokenDataBase.splice(CorrectToken, 1)
            //     const ErrorResponse = Error_Messages_Standardization(400, 'Token Expired')
            //     throw ErrorResponse
            // }
            return CorrectToken
        } else {
            const ErrorResponse = Error_Messages_Standardization(400, 'Token Send are Unregister')
            throw ErrorResponse
        }
    } catch (err) {
        console.log('Log: Cek_for_Token -> err', err)
    }
}

export const Database_Load_User = async (Token) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        const User = UsersDataBase.find((item) => item.nomerinduk === CorrectToken.UserName)
        return User
    } catch (err) {
        console.log('Log: Database_Load_User -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_Biodata = async (Token, BiodataId) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const Biodata = BiodatasDataBase.find((item) => item.id === BiodataId)
            return Biodata
        }
    } catch (err) {
        console.log('Log: Database_Load_User -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_Biodata_Account = async (Token, BiodataId) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const BiodataAccount = UsersDataBase.find((item) => item.profile === BiodataId)
            return BiodataAccount
        }
    } catch (err) {
        console.log('Log: Database_Load_Biodata_Account -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_List_of_Siswa = async (Token) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const ListofSiswa = BiodatasDataBase.filter((item) => item.Status === 'Siswa Aktif' || item.Status === 'Siswa Lulus' || item.Status === 'Siswa Diberhentikan')
            return ListofSiswa
        }
    } catch (err) {
        console.log('Log: Database_Biodata_Account -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_List_of_Staff = async (Token) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const ListofStaff = BiodatasDataBase.filter((item) => item.Status === 'Guru Aktif' || item.Status === 'Guru Pensiun' || item.Status === 'Guru Diberhentikan')
            return ListofStaff
        }
    } catch (err) {
        console.log('Log: Database_Biodata_Account -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_List_of_Admin = async (Token) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const ListofAdmin = BiodatasDataBase.filter((item) => item.Status === 'Staf Aktif' || item.Status === 'Staf Pensiun' || item.Status === 'Staf Diberhentikan')
            return ListofAdmin
        }
    } catch (err) {
        console.log('Log: Database_Biodata_Account -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_List_of_All = async (Token) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const ListofAll = BiodatasDataBase
            return ListofAll
        }
    } catch (err) {
        console.log('Log: Database_Biodata_Account -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_List_of_Pelanggaran = async (Token) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const ListofPelanggaran = PelanggaransDataBase
            return ListofPelanggaran
        }
    } catch (err) {
        console.log('Log: Database_Load_List_of_Pelanggaran -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_Pelanggaran_Detail = async (Token, PelanggaranId) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const PelanggaranDetail = PelanggaransDataBase.find((item) => item.id === PelanggaranId)
            return PelanggaranDetail
        }
    } catch (err) {
        console.log('Log: Database_Load_List_of_Pelanggaran -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_Point_List_of_Point = async (Token, NomerIndukDituju) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const PelanggaranDetail = PointsDataBase.filter((item) => item.Nomer_Induk_Dituju === NomerIndukDituju)
            return PelanggaranDetail
        }
    } catch (err) {
        console.log('Log: Database_Load_List_of_Pelanggaran -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_List_of_Unconfirm_Point = async (Token) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const ListofUnconfirmPoint = PointsDataBase.filter((item) => item.Status === 'Menunggu')
            return ListofUnconfirmPoint
        }
    } catch (err) {
        console.log('Log: Database_Load_List_of_Pelanggaran -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_List_of_Confirm_Point = async (Token) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const ListofConfirmPoint = PointsDataBase.filter((item) => item.Status === 'Accepted')
            return ListofConfirmPoint
        }
    } catch (err) {
        console.log('Log: Database_Load_List_of_Confirm_Point -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_Point_Submission_Detail = async (Token, PointSubmissionId) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const PointSubmissionDetail = PointsDataBase.find((item) => item.id === PointSubmissionId)
            return PointSubmissionDetail
        }
    } catch (err) {
        console.log('Log: Database_Load_Point_Submission_Detail -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_List_of_Instansi = async (Token) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const ListofInstansi = InstansisDataBase
            return ListofInstansi
        }
    } catch (err) {
        console.log('Log: Database_Load_List_of_Instansi -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_Instansi_Detail = async (Token, InstansiId) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const InstansiDetail = InstansisDataBase.find((item) => item.id === InstansiId)
            return InstansiDetail
        }
    } catch (err) {
        console.log('Log: Database_Load_Instansi_Detail -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_Prestasi_List_of_Prestasi = async (Token, BiodataId) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const PrestasiListofPrestasi = PrestasisDataBase.find((item) => item.Nomer_Induk_Dituju === BiodataId)
            return PrestasiListofPrestasi
        }
    } catch (err) {
        console.log('Log: Database_Load_PrestasiListofPrestasi -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_List_of_Unconfirm_Prestasi = async (Token) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const ListofUnconfirmPrestasi = PrestasisDataBase.filter((item) => item.Status === 'Menunggu')
            return ListofUnconfirmPrestasi
        }
    } catch (err) {
        console.log('Log: Database_Load_List_of_Unconfirm_Prestasi -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_List_of_Confirm_Prestasi = async (Token) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const ListofConfirmPrestasi = PrestasisDataBase.filter((item) => item.Status === 'Accepted')
            return ListofConfirmPrestasi
        }
    } catch (err) {
        console.log('Log: Database_Load_List_of_Confirm_Prestasi -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_Prestasi_Submission_Detail = async (Token, PrestasiSubmissionId) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const PrestasiSubmissionDetail = PrestasisDataBase.find((item) => item.id === PrestasiSubmissionId)
            return PrestasiSubmissionDetail
        }
    } catch (err) {
        console.log('Log: Database_Load_Prestasi_Submission_Detail -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}