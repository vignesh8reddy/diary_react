import React from "react";
import { useState } from "react";

export function FormValidation() {

    const [users] = useState([
        {userId: 'john'},
        {userId: 'john12'},
        {userId: 'david'},
        {userId: 'john_nit'}
    ]);

    const[userMsg, setUserMsg] = useState('');
    const[isUserValid, setUserValid] = useState(false);
    const[pwdMsg, setPwdMsg] = useState('');
    const[capsStatus, setCapsStatus] = useState(false);

    function VerifyUser(e) {
        for(var user of users){
            if(user.userId == e.target.value) {
                setUserMsg('User Id Unavailable');
                break;
            }
            else {
                setUserMsg('User Id available');
            }
        }
    }

    function HideUserMsg(e) {
        setUserMsg('');
    }

    function VerifyPassword(e) {
        if(e.target.value.match(/^(?=.*[A-Z])\w{4,10}$/)) {
            setPwdMsg('Strong Password');
        }
        else {
            if(e.target.value.length<4) {
                setPwdMsg('Poor Password');
            }
            else {
                setPwdMsg('Weak Password');
            }
        }
    }

    function HidePwdMsg(e) {
        setPwdMsg('');
    }

    function VerifyCaps(e) {
        if(e.keyCode>=65 && e.keyCode<=90 || e.which>=65 && e.which<=90) {
            setCapsStatus=true;
        }
        else {
            setCapsStatus=false;
        }
    }

    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <dl>
                <dt>User Id</dt>
                <dd><input type="text" onKeyUp={VerifyUser} onBlur={HideUserMsg}/></dd>
                <dd className={(isUserValid==true)?'text-success':'text-danger'}>{userMsg}</dd>
            </dl>
            <dl>
                <dt>Password</dt>
                <dd><input type="password" onKeyUp={VerifyPassword} onBlur={HidePwdMsg}/></dd>
                <dd>{pwdMsg}</dd>
                <dd className={(capsStatus==true)?'d-block':'d-none'}>
                    <span className="text-warning">
                        <span className="bi bi-exclamation-triangle"> Caps ON</span>
                    </span>
                </dd>
            </dl>
        </div>
    );

}
