import React from 'react';
import {Redirect} from 'react-router-dom';

const logged = false;

function MyPage() {
    return (
        <div>
            {
                !logged && <Redirect to= "/login"/>
            }
            <p>마이페이지</p>
        </div>
    )
}

export default MyPage;
