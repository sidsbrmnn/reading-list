import React, { Component } from 'react';

class TableHead extends Component {
    state = {};

    render() {
        const { columns } = this.props;

        return (
            <thead>
                <tr>
                    {columns.map(column => (
                        <th key={column.path || column.key}>{column.label}</th>
                    ))}
                </tr>
            </thead>
        );
    }
}

export default TableHead;
