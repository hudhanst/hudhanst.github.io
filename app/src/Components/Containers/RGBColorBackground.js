import React, { Fragment } from 'react'

const RGBColorBackground = (props) => {
    const DefaultBackgroundColor = props.BackgroundColor ? props.BackgroundColor : '#000000'
    return (
        <Fragment>
            {/* RED */}
            <svg
                viewBox="0 0 1440 320"
                style={{ position: 'relative', zIndex: 0, backgroundColor: DefaultBackgroundColor }}
            >
                <path
                    fill="#ff0000"
                    fillOpacity='1'
                    d="M0,96L48,117.3C96,139,192,181,288,202.7C384,224,480,224,576,224C672,224,768,224,864,202.7C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                >
                </path>
            </svg>
            <svg
                viewBox="0 0 1440 320"
                style={{ marginTop: '-2%', position: 'relative', zIndex: 0, backgroundColor: DefaultBackgroundColor }}
            >
                <path
                    fill="#ff0000"
                    fillOpacity='1'
                    d="M0,320L48,288C96,256,192,192,288,149.3C384,107,480,85,576,101.3C672,117,768,171,864,208C960,245,1056,267,1152,245.3C1248,224,1344,160,1392,128L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                >
                </path>
            </svg>
            {/* GREEN */}
            <svg
                viewBox="0 0 1440 320"
                style={{ marginTop: '-100%', position: 'relative', zIndex: 0 }}
            >
                <path
                    fill="#00ff00"
                    fillOpacity='1'
                    d="M0,320L48,288C96,256,192,192,288,149.3C384,107,480,85,576,101.3C672,117,768,171,864,208C960,245,1056,267,1152,245.3C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                >
                </path>
            </svg>
            <svg
                viewBox="0 0 1440 320"
                style={{ marginTop: '-2%', position: 'relative', zIndex: 0, backgroundColor: DefaultBackgroundColor }}
            >
                <path
                    fill="#00ff00"
                    fillOpacity='1'
                    d="M0,320L48,288C96,256,192,192,288,149.3C384,107,480,85,576,101.3C672,117,768,171,864,208C960,245,1056,267,1152,245.3C1248,224,1344,160,1392,128L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                >
                </path>
            </svg>
            {/* BLUE */}
            <svg
                viewBox="0 0 1440 320"
                style={{ marginTop: '-100%', position: 'relative', zIndex: 0 }}
            >
                <path
                    fill="#0000ff"
                    fillOpacity='1'
                    d="M0,320L48,288C96,256,192,192,288,149.3C384,107,480,85,576,101.3C672,117,768,171,864,208C960,245,1056,267,1152,245.3C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                >
                </path>
            </svg>
            <svg
                viewBox="0 0 1440 320"
                style={{ marginTop: '-2%', position: 'relative', zIndex: 0, backgroundColor: DefaultBackgroundColor }}
            >
                <path
                    fill="#0000ff"
                    fillOpacity='1'
                    d="M0,256L48,224C96,192,192,128,288,133.3C384,139,480,213,576,240C672,267,768,245,864,229.3C960,213,1056,203,1152,213.3C1248,224,1344,256,1392,272L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                >
                </path>
            </svg>
        </Fragment>
    )
}

export default RGBColorBackground