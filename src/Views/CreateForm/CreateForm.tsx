import React, { useState, useContext } from 'react'
import { RouteComponentProps, useHistory } from 'react-router-dom'
import { context } from '../../App'
import logo from '../../Assets/logo-main.svg'
import './CreateForm.styles.css'
interface IUser {
    fullName: string;
    phoneNumber: string;
    age: string;
    email: string;
    date:Date
}
const CreateForm = (props: RouteComponentProps) => {
    const [input, setInput] = useState<IUser>({
        fullName: "",
        phoneNumber: "",
        age: "",
        email: "",
        date:new Date()
    })
    const {users, setUsers} = useContext<any>(context)
    const history = useHistory()
    const handleChange = (event: React.ChangeEvent) => {
        const data = event.target as HTMLInputElement;
        setInput({ ...input, [data.name]: data.value })
    }
    const handleClick = ()=>{
        setUsers([...users,{...input,date:new Date()}])
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
                    <strong>فرم زیر را پر کنید</strong>.
                </div>
                <div className="d-flex flex-column input-box">
                    <label className="input-label" htmlFor="">نام و نام خانوادگی</label>
                    <input
                        name="fullName"
                        onChange={handleChange}
                        className="p-2 input" type="text" placeholder="نام و نام خانوادگی شما" />
                </div>
                <div className="d-flex flex-column input-box">
                    <label className="input-label" htmlFor="">شماره موبایل</label>
                    <input
                        name="phoneNumber"
                        onChange={handleChange}
                        className="p-2 input" type="text" placeholder="شماره موبایل" />
                </div>
                <div className="d-flex flex-column input-box">
                    <label className="input-label" htmlFor="">سن</label>
                    <input
                        name="age"
                        onChange={handleChange}
                        className="p-2 input" type="text" placeholder="سن شما" />
                </div>
                <div className="d-flex flex-column input-box">
                    <label className="input-label" htmlFor="">ایمیل</label>
                    <input
                        name="email"
                        onChange={handleChange}
                        className="p-2 input" type="text" placeholder="ایمیل شما" />
                </div>
                <button
                 onClick = {handleClick}
                 className="btn create-button text-white">ساخت اکانت</button>
            </div>
        </div>
    )
}
export default CreateForm;