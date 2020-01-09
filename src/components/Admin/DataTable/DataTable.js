import React from 'react';

const DataTable = props => {
    return (<div className="col-md-12 push-xl-8 col-lg-5 push-lg-7">
        <div className="shadow bg-white stick-to-content mb-4">
            <div className="bg-dark dark p-4"><h5 className="mb-0">{props.type}</h5></div>
            <table className="table-cart">
                {
                    props.data.map(item => <tr>
                            {
                                Object.keys(item).map(key => <td key={item.id + key} className="price">{item[key]}</td>)
                            }
                </tr>)
                }
            </table>
        </div>
    </div>
)
};

export default DataTable;