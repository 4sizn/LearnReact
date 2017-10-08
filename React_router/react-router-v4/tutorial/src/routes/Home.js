import React from 'react'

function Home({history}) {
    return (
        <div>
            <p>Home</p>
            <button onClick = {()=>{history.push('/posts')}}>
                버튼
                </button>
        </div>
    )
}

export default Home;