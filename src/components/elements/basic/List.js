import React from 'react';

const List = () => {
    return (
        <div className="mb-10">
            <h4 className="mb-5">Basic List</h4>
            <ul className="list-group" style={{ width: '300px' }}>
                <li className="list-group-item">Featured</li>
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
            </ul>

            <ul className="list-group list-group-horizontal">
                <li className="list-group-item">Featured</li>
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
            </ul>

            <ul className="list-group" style={{ width: '300px' }}>
                <li className="list-group-item">Featured </li>
                <li className="list-group-item">Cras justo odio <span className="badge badge-pill">16</span> </li>
                <li className="list-group-item">Dapibus ac facilisis in <span className="badge badge-pill">22</span></li>
                <li className="list-group-item">Vestibulum at eros<span className="badge badge-pill">12</span> </li>
            </ul>
        </div>
    )
}

export default List;
