import React from 'react'

//쿼리파라미터를 다루기 위해선 location 객체를 분석하자
function Search({location}) {
    return (
        <div>
            {new URLSearchParams(location.search).get('keyword')}검색
        </div>
    )
}

export default Search;
