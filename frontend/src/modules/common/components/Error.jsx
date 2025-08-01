import {FormattedMessage} from 'react-intl';

const Error = ({type}) => {
    const messageId = `persiguebuses.common.error.${type}`;

    return(
        <div className="d-flex justify-content-center align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-exclamation-diamond" viewBox="0 0 16 16">
                <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z"/>
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
            </svg>
            <h3 className="text-white error ms-2"><FormattedMessage id={messageId}/></h3>
        </div>
    )
}

export default Error;