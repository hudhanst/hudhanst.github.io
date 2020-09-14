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
        UserName: 'kasir',
        Password: '123',
        token: '3WsdA',
    },
    {
        UserName: 'kasir1',
        Password: '12345',
        token: '4Kol3',
    },
]

////// TODO find solution for database, localstorage may be a good idea but i just not sure about it

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
        UserName: 'kasir',
        ExpiredDate: null,
        token: '3WsdA',
    },
    {
        UserName: 'kasir1',
        ExpiredDate: null,
        token: '4Kol3',
    },
]

const UsersDataBase = [
    {
        _id: '13579',
        UserName: 'superuser',
        Name: 'superuser',
        isActive: true,
        isKasir: true,
        isAdmin: true,
        isSuperUser: true,
        LastActive: new Date(),
        RegisterDate: new Date(),
        ProfilePicture: null,
    },
    {
        _id: '24680',
        UserName: 'admin',
        Name: 'admin',
        isActive: true,
        isKasir: true,
        isAdmin: true,
        isSuperUser: false,
        LastActive: new Date(),
        RegisterDate: new Date(),
        ProfilePicture: null,
    },
    {
        _id: '35791',
        UserName: 'kasir',
        Name: 'kasir',
        isActive: true,
        isKasir: true,
        isAdmin: false,
        isSuperUser: false,
        LastActive: new Date(),
        RegisterDate: new Date(),
        ProfilePicture: null,
    },
    {
        _id: '46802',
        UserName: 'kasir1',
        Name: 'kasir1',
        isActive: true,
        isKasir: true,
        isAdmin: false,
        isSuperUser: false,
        LastActive: new Date(),
        RegisterDate: new Date(),
        ProfilePicture: null,
    },
]

const BarangsDataBase = [
    {
        _id: '1',
        Barcode: '1323144320',
        Name: 'Water',
        Jenis: 'Drinks',
        Stok: 3400,
        isDecimal: true,
        HargaModal: 300,
        HargaJual: 500,
        SatuanJual: [
            {
                NamaSatuan: "Pcs",
                MinBarang: 1,
                HargaJual: 500
            },
            {
                NamaSatuan: "Box",
                MinBarang: 40,
                HargaJual: 400
            },
        ],
        Ket: '',
        BarangPic: null,
    },
    {
        _id: '2',
        Barcode: '1243163710',
        Name: 'Cake',
        Jenis: 'Foods',
        Stok: 34,
        isDecimal: true,
        HargaModal: 30000,
        HargaJual: 40000,
        SatuanJual: [
            {
                NamaSatuan: "Pcs",
                MinBarang: 1,
                HargaJual: 40000
            },
        ],
        Ket: '',
        BarangPic: null,
    },
    {
        _id: '3',
        Barcode: '8726141223',
        Name: 'Vanilla',
        Jenis: 'Ice Cream',
        Stok: 300,
        isDecimal: true,
        HargaModal: 2000,
        HargaJual: 2500,
        SatuanJual: [
            {
                NamaSatuan: "Pcs",
                MinBarang: 1,
                HargaJual: 2500
            },
            {
                NamaSatuan: "Mini Box",
                MinBarang: 12,
                HargaJual: 2400
            },
            {
                NamaSatuan: "Box",
                MinBarang: 24,
                HargaJual: 2200
            },
        ],
        Ket: '',
        BarangPic: null,
    },
    {
        _id: '4',
        Barcode: '8221459620',
        Name: 'Marker',
        Jenis: 'Office Stationery',
        Stok: 56,
        isDecimal: true,
        HargaModal: 6000,
        HargaJual: 8000,
        SatuanJual: [
            {
                NamaSatuan: "Pcs",
                MinBarang: 1,
                HargaJual: 8000
            },
            {
                NamaSatuan: "Box",
                MinBarang: 12,
                HargaJual: 7500
            },
        ],
        Ket: '',
        BarangPic: null,
    },
    {
        _id: '5',
        Barcode: '1132451672',
        Name: 'Tea',
        Jenis: 'Drinks',
        Stok: 80,
        isDecimal: true,
        HargaModal: 6000,
        HargaJual: 7000,
        SatuanJual: [
            {
                NamaSatuan: "Pcs",
                MinBarang: 1,
                HargaJual: 7000
            },
        ],
        Ket: '',
        BarangPic: null,
    },
    {
        _id: '6',
        Barcode: '1323148112',
        Name: 'Chocolate',
        Jenis: 'Foods',
        Stok: 40,
        isDecimal: true,
        HargaModal: 10000,
        HargaJual: 12000,
        SatuanJual: [
            {
                NamaSatuan: "Pcs",
                MinBarang: 1,
                HargaJual: 12000
            },
            {
                NamaSatuan: "Box",
                MinBarang: 12,
                HargaJual: 11000
            },
        ],
        Ket: '',
        BarangPic: null,
    },
    {
        _id: '7',
        Barcode: '1323345720',
        Name: 'Cars',
        Jenis: 'etc',
        Stok: 2,
        isDecimal: true,
        HargaModal: 100000000,
        HargaJual: 300000000,
        SatuanJual: [
            {
                NamaSatuan: "Pcs",
                MinBarang: 1,
                HargaJual: 300000000
            },
        ],
        Ket: '',
        BarangPic: null,
    },
]
const HistorysDataBase = [
    {
        _id: '123',
        UserName: 'superuser',
        Tanggal: new Date(),
        Location: 'JenisBarang',
        Action: 'Add',
        Change: `{ "NamaJenisBarang": "11", "Kepemilikan": "pribadi", "Ket": null }`,
        Status: true,
    },
    {
        _id: '234',
        UserName: 'superuser',
        Tanggal: new Date(),
        Location: 'JenisBarang',
        Action: 'Update',
        Change: `{ "_id": "5f1217cb3d62e3420043a51c", "NamaJenisBarang": "11", "Kepemilikan": "nonpribadi", "Ket": null, "__v": 0 }`,
        Status: true,
    },
]
const JenisBarangsDataBase = [
    {
        _id: '124',
        NamaJenisBarang: 'Drinks',
        Kepemilikan: 'Personal',
        Ket: '',
    },
    {
        _id: '235',
        NamaJenisBarang: 'Foods',
        Kepemilikan: 'Personal',
        Ket: '',
    },
    {
        _id: '346',
        NamaJenisBarang: 'Ice Cream',
        Kepemilikan: 'Deposit',
        Ket: '',
    },
    {
        _id: '457',
        NamaJenisBarang: 'Office Stationery',
        Kepemilikan: 'Personal',
        Ket: '',
    },
    {
        _id: '568',
        NamaJenisBarang: 'etc',
        Kepemilikan: 'Personal',
        Ket: '',
    },
]
const TokosDataBase = [
    {
        // Identitas: 'asd',
        NamaToko: 'KasirQu',
        Alamat: 'Woodlea Ridgeway',
        Kontak: '+625391729312',
        Logo: null,
    },
]
const TransaksisDataBase = [
    {
        _id: '0199',
        NamaKasir: 'superuser',
        TanggalTransaksi: new Date(),
        Tipe: 'Belanja',
        DetailTransaksi: [
            {
                Barcode: '1323144320',
                NamaBarang: 'Water',
                Jumlah: 3000,
                HargaModal: 300,
                HargaJual: 500,
                TotalModal: 300 * 3000
            },
        ],
        Diskon: 0,
        PotonganHarga: 0,
        TotalPembayaran: 300 * 3000,
        Ket: '',
    },
    {
        _id: '0298',
        NamaKasir: 'superuser',
        TanggalTransaksi: new Date(),
        Tipe: 'Belanja',
        DetailTransaksi: [
            {
                Barcode: '8726141223',
                NamaBarang: 'Vanilla',
                Jumlah: 250,
                HargaModal: 2000,
                HargaJual: 2500,
                TotalModal: 250 * 2000
            },
            {
                Barcode: '1323345720',
                NamaBarang: 'Cars',
                Jumlah: 2,
                HargaModal: 100000000,
                HargaJual: 300000000,
                TotalModal: 2 * 100000000
            },
        ],
        Diskon: 0,
        PotonganHarga: 0,
        TotalPembayaran: (250 * 2000) + (2 * 100000000),
        Ket: '',
    },
    {
        _id: '0397',
        NamaKasir: 'superuser',
        TanggalTransaksi: new Date(),
        Tipe: 'Transaksi',
        DetailTransaksi: [
            {
                Barcode: '1323345720',
                NamaBarang: 'Cars',
                Satuan: 'Pcs',
                Jumlah: 1,
                HargaSatuan: 300000000,
                TotalBarang: 1,
                HargaTotal: 1 * 300000000
            },
        ],
        Diskon: 10,
        PotonganHarga: 0,
        TotalPembayaran: (1 * 300000000) - ((300000000 * 10) / 100),
        Ket: '',
    },
    {
        _id: '0496',
        NamaKasir: 'superuser',
        TanggalTransaksi: new Date(),
        Tipe: 'Transaksi',
        DetailTransaksi: [
            {
                Barcode: '8221459620',
                NamaBarang: 'Marker',
                Satuan: 'Box',
                Jumlah: 4,
                HargaSatuan: 7500,
                TotalBarang: 4 * 12,
                HargaTotal: 4 * 12 * 7500
            },
        ],
        Diskon: 0,
        PotonganHarga: 0,
        TotalPembayaran: 4 * 12 * 7500,
        Ket: '',
    },
    {
        _id: '0595',
        NamaKasir: 'superuser',
        TanggalTransaksi: new Date(),
        Tipe: 'Transaksi',
        DetailTransaksi: [
            {
                Barcode: '8726141223',
                NamaBarang: 'Vanilla',
                Satuan: 'Pcs',
                Jumlah: 4,
                HargaSatuan: 2500,
                TotalBarang: 4,
                HargaTotal: 4 * 2500
            },
        ],
        Diskon: 0,
        PotonganHarga: 0,
        TotalPembayaran: 4 * 2500,
        Ket: '',
    },
    {
        _id: '0694',
        NamaKasir: 'superuser',
        TanggalTransaksi: new Date(),
        Tipe: 'Transaksi',
        DetailTransaksi: [
            {
                Barcode: '8726141223',
                NamaBarang: 'Vanilla',
                Satuan: 'Box',
                Jumlah: 10,
                HargaSatuan: 2200,
                TotalBarang: 10 * 24,
                HargaTotal: 10 * 24 * 2200
            },
            {
                Barcode: '8726141223',
                NamaBarang: 'Vanilla',
                Satuan: 'Pcs',
                Jumlah: 4,
                HargaSatuan: 2500,
                TotalBarang: 4,
                HargaTotal: 4 * 2500
            },
        ],
        Diskon: 0,
        PotonganHarga: 0,
        TotalPembayaran: (10 * 24 * 2200) + (4 * 2500),
        Ket: '',
    },
    {
        _id: '0793',
        NamaKasir: 'superuser',
        TanggalTransaksi: new Date(),
        Tipe: 'Transaksi',
        DetailTransaksi: [
            {
                Barcode: '1243163710',
                NamaBarang: 'Cake',
                Satuan: 'Pcs',
                Jumlah: 2,
                HargaSatuan: 40000,
                TotalBarang: 2,
                HargaTotal: 2 * 40000
            },
            {
                Barcode: '1323144320',
                NamaBarang: 'Water',
                Satuan: 'Box',
                Jumlah: 20,
                HargaSatuan: 400,
                TotalBarang: 20 * 40,
                HargaTotal: 20 * 40 * 400,
            },
        ],
        Diskon: 0,
        PotonganHarga: 5000,
        TotalPembayaran: (2 * 40000) + (20 * 40 * 400) - 5000,
        Ket: '',
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
        const User = UsersDataBase.find((item) => item.UserName === CorrectToken.UserName)
        return User
    } catch (err) {
        console.log('Log: Database_Load_User -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_Account_Detail = async (Token, AccountId) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const Account = UsersDataBase.find((item) => item._id === AccountId)
            if (Account) {
                return Account
            } else {
                const ErrorResponse = Error_Messages_Standardization(404, 'Account Not Found')
                throw ErrorResponse
            }
        }
    } catch (err) {
        console.log('Log: Database_Load_User -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_Account_List = async (Token) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const AccountList = UsersDataBase
            return AccountList
        }
    } catch (err) {
        console.log('Log: Database_Load_User -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_Toko_Detail = async (Token) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const TokoDetail = TokosDataBase[0]
            return TokoDetail
        }
    } catch (err) {
        console.log('Log: Database_Load_User -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_History_List = async (Token) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const HistoryList = HistorysDataBase
            return HistoryList
        }
    } catch (err) {
        console.log('Log: Database_Load_User -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_History_Detail = async (Token, HistoryId) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const HistoryDetail = HistorysDataBase.find((item) => item._id === HistoryId)
            if (HistoryDetail) {
                return HistoryDetail
            } else {
                const ErrorResponse = Error_Messages_Standardization(404, 'History Detail not Found')
                throw ErrorResponse
            }
        }
    } catch (err) {
        console.log('Log: Database_Load_User -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_Barang_List = async (Token) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const BarangList = BarangsDataBase
            return BarangList
        }
    } catch (err) {
        console.log('Log: Database_Load_User -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_Barang_Detail = async (Token, BarangID) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const BarangDetail = BarangsDataBase.find((item) => item._id === BarangID)
            if (BarangDetail) {
                return BarangDetail
            } else {
                const ErrorResponse = Error_Messages_Standardization(404, 'Barang Detail not Found')
                throw ErrorResponse
            }
        }
    } catch (err) {
        console.log('Log: Database_Load_User -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_Barang_Base_on_JenisBarang = async (Token, JenisBarangId) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const JenisBarangDetail = JenisBarangsDataBase.find((item) => item._id === JenisBarangId)
            if (JenisBarangDetail) {
                const BarangBaseonJenisBarang = []
                BarangsDataBase.forEach(element => {
                    if (element.Jenis === JenisBarangDetail.NamaJenisBarang) {
                        const newBarang = element
                        BarangBaseonJenisBarang.push(newBarang)
                    }
                })
                return BarangBaseonJenisBarang ? BarangBaseonJenisBarang : []
            } else {
                const ErrorResponse = Error_Messages_Standardization(404, 'Barang Detail not Found')
                throw ErrorResponse
            }
        }
    } catch (err) {
        console.log('Log: Database_Load_User -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_JenisBarang_List = async (Token) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const JenisBarangList = JenisBarangsDataBase
            return JenisBarangList
        }
    } catch (err) {
        console.log('Log: Database_Load_User -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_JenisBarang_Detail = async (Token, JenisBarangId) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const JenisBarangDetail = JenisBarangsDataBase.find((item) => item._id === JenisBarangId)
            if (JenisBarangDetail) {
                return JenisBarangDetail
            } else {
                const ErrorResponse = Error_Messages_Standardization(404, 'JenisBarang Detail not Found')
                throw ErrorResponse
            }
        }
    } catch (err) {
        console.log('Log: Database_Load_User -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_Transaksi_List = async (Token) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const TransaksiList = TransaksisDataBase
            return TransaksiList
        }
    } catch (err) {
        console.log('Log: Database_Load_User -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_Transaksi_Detail = async (Token, TransaksiId) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const TransaksiDetail = TransaksisDataBase.find((item) => item._id === TransaksiId)
            if (TransaksiDetail) {
                return TransaksiDetail
            } else {
                const ErrorResponse = Error_Messages_Standardization(404, 'Transaksi Detail not Found')
                throw ErrorResponse
            }
        }
    } catch (err) {
        console.log('Log: Database_Load_User -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_IncomeReport_Barang_List = async (Token) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const TransaksiLists = TransaksisDataBase.filter((item) => item.Tipe === 'Transaksi')
            const IncomeReportBarangList = []
            TransaksiLists.forEach(element => {
                const DetailTransaksi = element.DetailTransaksi
                DetailTransaksi.forEach(element_element => {
                    const DetailTransaksi_Barcode = element_element.Barcode
                    const DetailTransaksi_NamaBarang = element_element.NamaBarang
                    const DetailTransaksi_TotalBarang = element_element.TotalBarang ? Number(element_element.TotalBarang) : 0
                    const DetailTransaksi_HargaTotal = element_element.HargaTotal ? Number(element_element.HargaTotal) : 0

                    const IncomeReportBarangListIndex = IncomeReportBarangList.findIndex((item) => item.Barcode === DetailTransaksi_Barcode)
                    if (IncomeReportBarangListIndex >= 0) {
                        IncomeReportBarangList[IncomeReportBarangListIndex].TotalBarang = IncomeReportBarangList[IncomeReportBarangListIndex].TotalBarang + DetailTransaksi_TotalBarang
                        IncomeReportBarangList[IncomeReportBarangListIndex].HargaTotal = IncomeReportBarangList[IncomeReportBarangListIndex].HargaTotal + DetailTransaksi_HargaTotal
                    } else {
                        const newIncomeReportBarangList = {
                            Barcode: DetailTransaksi_Barcode,
                            NamaBarang: DetailTransaksi_NamaBarang,
                            // JenisBarang: DetailBarang_JenisBarang,
                            // ModalBarang: DetailBarang_HargaModal,
                            TotalBarang: DetailTransaksi_TotalBarang,
                            HargaTotal: DetailTransaksi_HargaTotal,
                        }
                        IncomeReportBarangList.push(newIncomeReportBarangList)
                    }
                })
            })
            return IncomeReportBarangList
        }
    } catch (err) {
        console.log('Log: Database_Load_User -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_IncomeReport_Keuangan_List = async (Token) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const IncomeReportKeuanganList = []
            const date = new Date()
            const dd = date.getDate()
            // console.log(dd)
            const mm = date.getMonth()
            const yyyy = date.getFullYear()
            let i = 1
            while (i <= dd) {
                const now = new Date(yyyy, mm, i)
                const next = new Date(yyyy, mm, i + 1)
                let KeuntunganHarian = 0
                let DiskonHarian = 0
                let PotonganHargaHarian = 0
                const ListTransaksiHarian = TransaksisDataBase.filter((item) => item.Tipe === 'Transaksi' && item.TanggalTransaksi >= now && item.TanggalTransaksi <= next)
                ListTransaksiHarian.forEach(element => {
                    KeuntunganHarian = KeuntunganHarian + (element.TotalPembayaran ? Number(element.TotalPembayaran) : 0)
                    DiskonHarian = DiskonHarian + (element.Diskon ? Number(element.Diskon) : 0)
                    PotonganHargaHarian = PotonganHargaHarian + (element.PotonganHarga ? Number(element.PotonganHarga) : 0)
                })
                const newIncomeReportKeuanganList = {
                    Tanggal: now.toLocaleDateString(),
                    KeuntunganHarian: KeuntunganHarian,
                    DiskonHarian: DiskonHarian,
                    PotonganHargaHarian: PotonganHargaHarian,
                }
                IncomeReportKeuanganList.push(newIncomeReportKeuanganList)
                i = i + 1
            }
            return IncomeReportKeuanganList
        }
    } catch (err) {
        console.log('Log: Database_Load_User -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_OutcomeReport_Barang_List = async (Token) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const OutcomeReportBarangList = []
            const TransaksiLists = TransaksisDataBase.filter((item) => item.Tipe === 'Belanja')
            TransaksiLists.forEach(element => {
                const DetailTransaksi = element.DetailTransaksi
                DetailTransaksi.forEach(element_element => {
                    const DetailTransaksi_Barcode = element_element.Barcode
                    const DetailTransaksi_NamaBarang = element_element.NamaBarang
                    const DetailTransaksi_Jumlah = element_element.Jumlah ? Number(element_element.Jumlah) : 0
                    const DetailTransaksi_TotalModal = element_element.TotalModal ? Number(element_element.TotalModal) : 0

                    const OutcomeReportBarangListIndex = OutcomeReportBarangList.findIndex((item) => item.Barcode === DetailTransaksi_Barcode)
                    if (OutcomeReportBarangListIndex >= 0) {
                        OutcomeReportBarangList[OutcomeReportBarangListIndex].Jumlah = OutcomeReportBarangList[OutcomeReportBarangListIndex].Jumlah + DetailTransaksi_Jumlah
                        OutcomeReportBarangList[OutcomeReportBarangListIndex].TotalModal = OutcomeReportBarangList[OutcomeReportBarangListIndex].TotalModal + DetailTransaksi_TotalModal
                    } else {
                        const newOutcomeReportBarangList = {
                            Barcode: DetailTransaksi_Barcode,
                            NamaBarang: DetailTransaksi_NamaBarang,
                            JenisBarang: '',
                            // ModalBarang: DetailBarang_HargaModal,
                            Jumlah: DetailTransaksi_Jumlah,
                            TotalModal: DetailTransaksi_TotalModal,
                        }
                        OutcomeReportBarangList.push(newOutcomeReportBarangList)
                    }
                })
            })
            return OutcomeReportBarangList
        }
    } catch (err) {
        console.log('Log: Database_Load_User -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_OutcomeReport_Modal_List = async (Token) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const OutcomeReportModalList = []
            const date = new Date()
            const dd = date.getDate()
            // console.log(dd)
            const mm = date.getMonth()
            const yyyy = date.getFullYear()
            let i = 1
            while (i <= dd) {
                const now = new Date(yyyy, mm, i)
                const next = new Date(yyyy, mm, i + 1)
                let ModalHarian = 0
                const ListTransaksiHarian = TransaksisDataBase.filter((item) => item.Tipe === 'Belanja' && item.TanggalTransaksi >= now && item.TanggalTransaksi <= next)
                ListTransaksiHarian.forEach(element => {
                    ModalHarian = ModalHarian + (element.TotalPembayaran ? Number(element.TotalPembayaran) : 0)
                })
                const newOutcomeReportModalList = {
                    Tanggal: now.toLocaleDateString(),
                    ModalHarian: ModalHarian,
                }
                OutcomeReportModalList.push(newOutcomeReportModalList)
                i = i + 1
            }
            return OutcomeReportModalList
        }
    } catch (err) {
        console.log('Log: Database_Load_User -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_Aset_List = async (Token) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const AsetList = BarangsDataBase
            return AsetList
        }
    } catch (err) {
        console.log('Log: Database_Load_User -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_UangMasuk_List = async (Token) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const UangMasukList = []
            const date = new Date()
            const dd = date.getDate()
            const mm = date.getMonth()
            const yyyy = date.getFullYear()
            let i = 1
            while (i <= dd) {
                const thisDay = new Date(yyyy, mm, i)
                const nextDay = new Date(yyyy, mm, i + 1)
                let UangMasukHarian = 0
                const ListTransaksi = TransaksisDataBase.filter((item) => item.Tipe === 'Transaksi' && item.TanggalTransaksi >= thisDay && item.TanggalTransaksi <= nextDay)
                ListTransaksi.forEach(element => {
                    const ListTransaksi_TotalPembayaran = element.TotalPembayaran ? Number(element.TotalPembayaran) : 0
                    UangMasukHarian = UangMasukHarian + ListTransaksi_TotalPembayaran
                })
                const newUangMasukList = {
                    Tanggal: thisDay.toLocaleDateString(),
                    UangMasuk: UangMasukHarian
                }
                UangMasukList.push(newUangMasukList)
                i = i + 1
            }
            return UangMasukList
        }
    } catch (err) {
        console.log('Log: Database_Load_User -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_UangKeluar_List = async (Token) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const UangKeluarList = []
            const date = new Date()
            const dd = date.getDate()
            const mm = date.getMonth()
            const yyyy = date.getFullYear()
            let i = 1
            while (i <= dd) {
                const thisDay = new Date(yyyy, mm, i)
                const nextDay = new Date(yyyy, mm, i + 1)
                let UangKeluarHarian = 0
                const ListTransaksi = TransaksisDataBase.filter((item) => item.Tipe === 'Belanja' && item.TanggalTransaksi >= thisDay && item.TanggalTransaksi <= nextDay)
                ListTransaksi.forEach(element => {
                    const ListTransaksi_TotalPembayaran = element.TotalPembayaran ? Number(element.TotalPembayaran) : 0
                    UangKeluarHarian = UangKeluarHarian + ListTransaksi_TotalPembayaran
                })
                const newUangKeluarList = {
                    Tanggal: thisDay.toLocaleDateString(),
                    UangKeluar: UangKeluarHarian
                }
                UangKeluarList.push(newUangKeluarList)
                i = i + 1
            }

            return UangKeluarList
        }
    } catch (err) {
        console.log('Log: Database_Load_User -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_UangLose_List = async (Token) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const UangLoseList = []
            const date = new Date()
            const dd = date.getDate()
            const mm = date.getMonth()
            const yyyy = date.getFullYear()
            let i = 1
            while (i <= dd) {
                const thisDay = new Date(yyyy, mm, i)
                const nextDay = new Date(yyyy, mm, i + 1)
                let UangLoseHarian = 0
                const ListTransaksi = TransaksisDataBase.filter((item) => item.Tipe === 'Transaksi' && item.TanggalTransaksi >= thisDay && item.TanggalTransaksi <= nextDay)
                ListTransaksi.forEach(element => {
                    const ListTransaksi_TotalPembayaran = element.TotalPembayaran ? Number(element.TotalPembayaran) : 0
                    let TotalTagihan = 0
                    const ListTransaksi_DetailTransaksi = element.DetailTransaksi ? element.DetailTransaksi : []
                    ListTransaksi_DetailTransaksi.forEach(element_element => {
                        const DetailTransaksi_HargaTotal = element_element.HargaTotal ? Number(element_element.HargaTotal) : 0
                        TotalTagihan = TotalTagihan + DetailTransaksi_HargaTotal
                    })
                    const DivinTransaksi = TotalTagihan - ListTransaksi_TotalPembayaran
                    if (DivinTransaksi > 0) {
                        UangLoseHarian = UangLoseHarian + DivinTransaksi
                    } else {
                        UangLoseHarian = UangLoseHarian + 0
                    }
                })
                const newUangLoseList = {
                    Tanggal: thisDay.toLocaleDateString(),
                    UangLose: UangLoseHarian
                }
                UangLoseList.push(newUangLoseList)
                i = i + 1
            }
            return UangLoseList
        }
    } catch (err) {
        console.log('Log: Database_Load_User -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_IntensitasTransaksi_List = async (Token) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const IntensitasTransaksiList = []
            const date = new Date()
            const dd = date.getDate()
            const mm = date.getMonth()
            const yyyy = date.getFullYear()
            let i = 1
            while (i <= dd) {
                const thisDay = new Date(yyyy, mm, i)
                const nextDay = new Date(yyyy, mm, i + 1)
                let IntensitasTransaksiHarian = 0
                const ListTransaksi = TransaksisDataBase.filter((item) => item.Tipe === 'Transaksi' && item.TanggalTransaksi >= thisDay && item.TanggalTransaksi <= nextDay)
                ListTransaksi.forEach(element => {
                    IntensitasTransaksiHarian = IntensitasTransaksiHarian + 1
                })
                const newIntensitasTransaksiList = {
                    Tanggal: thisDay.toLocaleDateString(),
                    IntensitasTransaksi: IntensitasTransaksiHarian
                }
                IntensitasTransaksiList.push(newIntensitasTransaksiList)
                i = i + 1
            }
            return IntensitasTransaksiList
        }
    } catch (err) {
        console.log('Log: Database_Load_User -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const Database_Load_IntensitasBarangTransaksi_List = async (Token) => {
    try {
        const CorrectToken = await Cek_for_Token(Token)
        if (CorrectToken) {
            const IntensitasBarangTransaksiList = []
            const date = new Date()
            const dd = date.getDate()
            const mm = date.getMonth()
            const yyyy = date.getFullYear()
            let i = 1
            while (i <= dd) {
                const thisDay = new Date(yyyy, mm, i)
                const nextDay = new Date(yyyy, mm, i + 1)
                let IntensitasBarang = []
                const ListTransaksi = TransaksisDataBase.filter((item) => item.Tipe === 'Transaksi' && item.TanggalTransaksi >= thisDay && item.TanggalTransaksi <= nextDay)
                ListTransaksi.forEach(element => {
                    const ListTransaksi_DetailTransaksi = element.DetailTransaksi
                    ListTransaksi_DetailTransaksi.forEach(element_element => {
                        const DetailTransaksi_Barcode = element_element.Barcode
                        const DetailTransaksi_NamaBarang = element_element.NamaBarang

                        const IndexBarang = IntensitasBarang.findIndex(item => item.Barcode === DetailTransaksi_Barcode)

                        if (IndexBarang >= 0) {
                            IntensitasBarang[IndexBarang].IntensitasBarangTransaksi = IntensitasBarang[IndexBarang].IntensitasBarangTransaksi + 1
                        } else {
                            const newBarangTransaksiHarian = {
                                Barcode: DetailTransaksi_Barcode,
                                NamaBarang: DetailTransaksi_NamaBarang,
                                IntensitasBarangTransaksi: 1
                            }
                            IntensitasBarang.push(newBarangTransaksiHarian)
                        }
                    })
                })
                const newIntensitasBarangTransaksiList = {
                    Tanggal: thisDay.toLocaleDateString(),
                    IntensitasBarangTransaksi: IntensitasBarang
                }
                IntensitasBarangTransaksiList.push(newIntensitasBarangTransaksiList)
                i = i + 1
            }
            return IntensitasBarangTransaksiList
        }
    } catch (err) {
        console.log('Log: Database_Load_User -> err', err)
        const ErrorResponse = err
        throw ErrorResponse
    }
}

export const KasirQu_Database_Load_Useable_User_List = async () => {
    try {
        // const TokenDataBaseList = TokenDataBase
        const UseableUserList = UsersDataBase.map((item) => ({ ...item, ...AccountDataBase.find((item_item) => item_item.UserName === item.UserName) }))
        return UseableUserList
    } catch (err) {
        const ErrorResponse = err
        throw ErrorResponse
    }
}