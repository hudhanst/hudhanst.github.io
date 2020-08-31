export const Inverting_Color = (OriginalColor) => {
    console.log('Log: Inverting_Color -> OriginalColor', OriginalColor)
    try {
        if (!OriginalColor) {
            const newErrorMsg = {
                msg: 'OriginalColor null'
            }
            throw (newErrorMsg)
        }
        const RedCode = OriginalColor.slice(1,3)
        const GreenCode = OriginalColor.slice(3,5)
        const BlueCode = OriginalColor.slice(5,7)
        if(RedCode!==BlueCode){
            return `#${BlueCode}${GreenCode}${RedCode}`
        }
    } catch (err) {
        console.log('Log: Inverting_Color -> err', err)
        return '#ffffff'
    }
} 