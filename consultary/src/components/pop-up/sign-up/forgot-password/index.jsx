import React from "react";
import "../style.scss"

export const Forgot = ()=>{


    return <div className="P-sign-up-place">
        <div className="P-forgot-password">
            <p>To reset your password, enter the email address you use to sign in to VBK Consultancy</p>
            <div>
                <p>Email</p>
                <label>
                    <input type="text"/>
                </label>
            </div>
            <button>Send Reset Link</button>
        </div>
    </div>
}