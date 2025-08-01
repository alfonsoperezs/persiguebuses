import {Route, Routes} from 'react-router-dom';
import { ActiveBus, BusDetails } from '../../bus';
import Home from './Home';

const Body = () => {
    return(
        <main className='mt-3 mb-3'>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/bus' element={<ActiveBus/>}/>
                <Route path='/details/:id' element={<BusDetails/>}/>
            </Routes>
        </main>
    )
}

export default Body;