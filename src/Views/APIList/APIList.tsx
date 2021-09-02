import { useState, useEffect } from 'react'
import { RouteComponentProps, useHistory } from 'react-router-dom'
import './APIList.styles.css'
import logo from '../../Assets/logo-main.svg'
import { Table } from 'react-bootstrap'
import axios from 'axios'
const APIList = (props: RouteComponentProps) => {
    const history = useHistory()
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                setUsers(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className="
        w-100 h-100
        d-flex 
        flex-column
        align-items-center">
            <div className="show-form-container">
                <div className="text-center">
                    <img className="logo-in-show-form" src={logo} alt="" />
                </div>
                <Table className="bg-white table-in-show-form">
                    <thead>
                        <tr className="table-head-row">
                            <th>نام و نام خانوادگی</th>
                            <th>شماره موبایل</th>
                            <th>سن</th>
                            <th>ایمیل</th>
                            <th>وبسایت</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user: any, index) => {
                                if (index < 4)
                                    return (
                                        <tr key={user.phone}>
                                            <td>{user.name}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.id}</td>
                                            <td>{user.email}</td>
                                            <td>{user.website}</td>
                                        </tr>
                                    )
                            })
                        }
                    </tbody>
                </Table>
            </div>
            <div className="align-self-end mx-3"
                style={{ color: "rgba(102, 100, 100, 1)", cursor: "pointer" }}
                onClick={()=>history.push("/showform")}>
                بازگشت به صفحه قبلی
            </div>
        </div>
    )
}
export default APIList;