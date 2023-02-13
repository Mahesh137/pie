import { Table, Card, Space } from 'antd';
import { useState, useEffect } from 'react';
import "./table.css";
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
    {
        title: 'Role Code',
        dataIndex: 'roleCode'
    }
];

const UserTable = (props) => {
    const [userData, setUserData] = useState([]);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_NONE,
            {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return false;
                        }
                        return true;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
            {
                key: 'even',
                text: 'Select Even Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return true;
                        }
                        return false;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
        ],
    };

    useEffect(() => {
        setUserData(props.data)
    }, [])

    const tableRow = {
        backgroundColor: "blue",
    }
    return (<Space
        direction="vertical"
        size="middle"
        style={{
            display: 'flex',
        }}
    >
        <Card size="small" className='cardClass'>
            <Table pagination={{
                position: ['bottomCenter'],
            }} size='large' rowClassName='antdTable' rowSelection={rowSelection} columns={columns} dataSource={userData} />
        </Card>
    </Space>
    );
};
export default UserTable;