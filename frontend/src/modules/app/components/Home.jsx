import { FormattedMessage } from 'react-intl';

const Home = () => {
    return(
        <div className="m-height d-flex flex-column align-items-center justify-content-center gap-3">
            <div className='d-flex flex-column flex-md-row align-items-center gap-2'>
                <h1 className="text-white text-center display-3"><FormattedMessage id="persiguebuses.home.text"/></h1>
                <a className="btn btn-outline-danger mb-3 btn-lg" href="/bus" role="button" style={{ fontSize: '4.5rem', lineHeight: '1', paddingTop: '1rem', paddingBottom: '1rem'}}>
                    <FormattedMessage id="persiguebuses.home.button"/>
                </a>
            </div>
            <div>
                <a href="https://t.me/persiguebuses">
                    <button type="button" class="btn btn-outline-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
                        </svg>
                    </button>
                </a>
            </div>
            
        </div>
        
    );
};

export default Home;