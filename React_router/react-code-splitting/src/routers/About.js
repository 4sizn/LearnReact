import React from 'react';

const About = ({location, match}) => {
    const query = (new URLSearchParams(location.search).get('keyword'));
    const admin = (query === 'admin')? query:'';
    console.log(admin);
    return(
        <div>
            <h2>
                About {match.params.username}
                <div className="user">
                {admin && 'Hello User'}
                {query}
                </div>
            </h2>
        </div>
    );
}
export default About;