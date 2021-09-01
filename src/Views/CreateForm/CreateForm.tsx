import { useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import logo from './logo-main.svg'
import './CreateForm.styles.css'
interface IInput {
    fullName: string;
    phoneNumber: string;
    age: number;
    email: string;
}
const CreateForm = (props: RouteComponentProps) => {
    const [input, setInput] = useState<IInput>()
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
                    <input className="p-2 input" type="text" placeholder="نام و نام خانوادگی شما" />
                </div>
                <div className="d-flex flex-column input-box">
                    <label className="input-label" htmlFor="">شماره موبایل</label>
                    <input className="p-2 input" type="text" placeholder="شماره موبایل" />
                </div>
                <div className="d-flex flex-column input-box">
                    <label className="input-label" htmlFor="">سن</label>
                    <input className="p-2 input" type="text" placeholder="سن شما" />
                </div>
                <div className="d-flex flex-column input-box">
                    <label className="input-label" htmlFor="">ایمیل</label>
                    <input className="p-2 input" type="text" placeholder="ایمیل شما" />
                </div>
                <button className="btn create-button text-white">ساخت اکانت</button>
            </div>
        </div>
    )
}
export default CreateForm;