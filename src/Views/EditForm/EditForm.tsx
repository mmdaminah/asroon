import React, { useState, useContext } from 'react'
import { RouteComponentProps, useHistory, useParams } from 'react-router-dom'
import { context } from '../../App'
import logo from '../../Assets/logo-main.svg'
import IUser from '../../Interfaces/IUser'
import './EditForm.styles.css'
const EditForm = (props: RouteComponentProps) => {
    const { users, setUsers } = useContext<any>(context)
    const { id } = useParams<{ id: string }>()
    const user = users.find(((item: IUser) => item.date.getTime() === +id))
    const [input, setInput] = useState<IUser>(user)
    const history = useHistory()
    const handleChange = (event: React.ChangeEvent) => {
        const data = event.target as HTMLInputElement;
        setInput({ ...input, [data.name]: data.value })
    }
    const handleClick = () => {
        const userTobeEdited:IUser = users.find((user: IUser) => {
            return user.date.getTime() === +id;
        })
        userTobeEdited.fullName = input.fullName;
        userTobeEdited.phoneNumber = input.phoneNumber;
        userTobeEdited.age = input.age;
        userTobeEdited.email = input.email;
        history.push("/showform")
    }
    return (
        <div className="
        w-100 h-100
        d-flex 
        flex-column
        justify-content-center
        align-items-center">
            <div className="text-center">
                <img className="logo" src={logo} alt="" />
            </div>
            <div className="bg-white d-flex flex-column  form-container">
                <div className="title">
                    <strong>ویرایش</strong>
                </div>
                <div className="d-flex flex-column input-box">
                    <label className="input-label" htmlFor="">نام و نام خانوادگی</label>
                    <input
                        name="fullName"
                        value={input?.fullName}
                        onChange={handleChange}
                        className="p-2 input" type="text" placeholder="نام و نام خانوادگی شما" />
                </div>
                <div className="d-flex flex-column input-box">
                    <label className="input-label" htmlFor="">شماره موبایل</label>
                    <input
                        name="phoneNumber"
                        value={input?.phoneNumber}
                        onChange={handleChange}
                        className="p-2 input" type="text" placeholder="شماره موبایل" />
                </div>
                <div className="d-flex flex-column input-box">
                    <label className="input-label" htmlFor="">سن</label>
                    <input
                        name="age"
                        value={input?.age}
                        onChange={handleChange}
                        className="p-2 input" type="text" placeholder="سن شما" />
                </div>
                <div className="d-flex flex-column input-box">
                    <label className="input-label" htmlFor="">ایمیل</label>
                    <input
                        name="email"
                        value={input?.email}
                        onChange={handleChange}
                        className="p-2 input" type="text" placeholder="ایمیل شما" />
                </div>
                <button
                    onClick={handleClick}
                    className="btn create-button text-white">ثبت اطلاعات</button>
            </div>
        </div>
    )
}
export default EditForm;