import React from 'react';

const Grid = () => {
    return (
        <div className="mb-10 container">
            <h4 className="mb-10">Grid</h4>

            {/* First Row */}
            <div className="row">
                <div className="col" style={{ backgroundColor: 'honeydew' }}>
                    col #1 
                </div>

                <div className="col" style={{ backgroundColor: 'lavender' }}>
                    col #2
                </div>

                <div className="col" style={{ backgroundColor: 'lavenderblush' }}>
                    col #3
                </div>

                <div className="col" style={{ backgroundColor: 'aliceblue' }}>
                    col #4
                </div>

                <div className="col" style={{ backgroundColor: 'honeydew' }}>
                    col #5
                </div>

                <div className="col" style={{ backgroundColor: 'lavender' }}>
                    col #6
                </div>

                <div className="col" style={{ backgroundColor: 'aliceblue' }}>
                    col #7
                </div>
            </div>


            {/* Second Row */}
            <div className="row">
                <div className="col-2" style={{ backgroundColor: 'honeydew', height: '300px' }}>col #1</div>
                <div className="col-8" style={{ backgroundColor: 'lavenderblush', height: '300px' }}>col #2</div>
                <div className="col-2 hide-sm" style={{ backgroundColor: 'lavender', height: '300px' }}>col #3</div>
            </div>


        </div>
    )
}

export default Grid;