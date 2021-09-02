import { useContext, useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import { RouteComponentProps, useHistory } from 'react-router-dom'
import { context } from '../../App'
import logo from '../../Assets/logo-main.svg'
import { FaRegTrashAlt } from 'react-icons/fa'
import { BsPencilSquare } from 'react-icons/bs'
import { BiPlusCircle } from 'react-icons/bi'
import './ShowFrom.styles.css'
interface IUser {
    fullName: string;
    phoneNumber: string;
    age: string;
    email: string;
    date: Date
}
const ShowForm = (props: RouteComponentProps) => {
    const history = useHistory()
    const { users, setUsers } = useContext<any>(context)
    const handleDelete = () => {
        setUsers(users.filter((item: IUser) => item.date.getTime() !== dateId.getTime()))
        handleClose()
    }
    //modal
    const [show, setShow] = useState(false);
    const [dateId, setDateId] = useState(new Date())
    const handleClose = () => setShow(false);
    const handleShow = (date: Date) => {
        setDateId(date)
        setShow(true);
    }
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
                <div className="d-flex justify-content-between">
                    <div className="my-auto display-6">داده ها</div>
                    <div>
                        <Button className="mx-3 my-3" variant="outline-danger">
                            دریافت اطلاعات از سرور
                        </Button>
                        <Button
                            onClick={() => history.push("/")}
                            variant="danger"><BiPlusCircle className="mx-2" />
                            ساخت اکانت جدید
                        </Button>
                    </div>
                </div>
                <Table className="bg-white table-in-show-form">
                    <thead>
                        <tr className="table-head-row">
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
                        {
                            users.map((user: any) => {
                                return (
                                    <tr key={user.date}>
                                        <td>{user.fullName}</td>
                                        <td>{user.phoneNumber}</td>
                                        <td>{user.age}</td>
                                        <td>{user.email}</td>
                                        <td>{user.date.toLocaleDateString('fa-IR')}</td>
                                        <td className="text-center">
                                            <BsPencilSquare 
                                            onClick={()=>history.push(`/editform/${user.date.getTime()}`)}
                                            style={{ cursor: "pointer" }} />
                                        </td>
                                        <td className="text-center" style={{ color: "rgba(222, 45, 38, 1)", cursor: "pointer" }}><FaRegTrashAlt
                                            onClick={() => handleShow(user.date)}
                                        /></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <Modal centered={true} show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>حذف ردیف</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            آیا از حذف این ردیف مطمئن  هستید؟
                        </div>
                        <div className="d-flex justify-content-end">
                            <Button className="px-4" variant="danger" onClick={handleDelete}>
                                حذف
                            </Button>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}
export default ShowForm;