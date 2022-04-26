import { Global, css } from '@emotion/react'

// const globalStyles = {

//     shadow: {
//         boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
//     },
//     colors: {
//         header: '#7b9eae',
//         background: '#fff',
//         container: '#fff',
//         button: '#fff',
//     }

// }

const htmlElements = {

    html: {
        backgroundColor: '#d7dfe4',
        height: '100%',
        width: '100%',
    },
    '.App': {
        height: '100%',
        width: '100%',
        textAlign: 'center',
        fontFamily: 'Roboto',
    },
    p: {
        margin: '3px 0 3px 0',
        fontSize: '14px',
        fontWeight: 'lighter',
    },
    h4: {
        margin: '5px 0 5px 0',
        fontSize: '18px',
        fontWeight: 'lighter',
    },
    h3: {
        margin: '5px 0 5px 0',
        textAlign: 'center',
        fonSize: '18px',
        fontWeight: 'lighter'
    },
    h1: {
        margin: 'unset',
        fontWeight: 'lighter',
        textAlign: 'center',
        fontSize: '45px',
        letterSpacing: '1px',
    },
}

export const GlobalStyles = () => {
    return (
        <div>
            <Global
                styles={{...htmlElements}}
            />
        </div>
    )
}
