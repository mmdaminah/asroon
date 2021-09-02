import { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { RouteComponentProps } from 'react-router-dom'
import { context } from '../../App'
import logo from '../../Assets/logo-main.svg'
import {FaRegTrashAlt} from 'react-icons/fa'
import {BsPencilSquare} from 'react-icons/bs'
import './ShowFrom.styles.css'
const ShowForm = (props: RouteComponentProps) => {
    const {users, setUsers} = useContext<any>(context)
    return (
        <div className="
        w-100 h-100
        d-flex 
        flex-column
        align-items-center">{console.log(users)}
            <div className="show-form-container">
                <div className="text-center">
                    <img className="logo-in-show-form" src={logo} alt="" />
                </div>
                <div className="d-flex justify-content-between">
                    <div>داده ها</div>
                    <div>
                        <button>دریافت اطلاعات از سرور</button>
                        <button>ساخت اکانت جدید</button>
                    </div>
                </div>
                <Table className="bg-white table-in-show-form">
                    <thead> 
                        <tr className="table-head">
                            <th>نام و نام خانوادگی</th>
                            <th>شماره موبایل</th>
                            <th>سن</th>
                            <th>ایمیل</th>
                            <th>تاریخ ایجاد</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>1399/10/12</td>
                            <td className="text-center"><FaRegTrashAlt/></td>
                            <td className="text-center"><BsPencilSquare/></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
export default ShowForm;