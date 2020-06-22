import React from 'react';
import SongsList from './SongsList'

const App = () => {
    return (
    <div className="ui container grid" style={{marginTop : '2px'}}>
        <div className="ui row">
        <div className="column eight wide">
        <SongsList />
        </div>
        </div>
    </div>)
}

export default App