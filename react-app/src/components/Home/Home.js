import React, { useEffect, useState } from 'react'
import LogoutButton from '../auth/LogoutButton'
import './Home.css'
const Home = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function allUsers() {
            const response = await fetch('/api/users/owner');
            const responseData = await response.json();
            setUsers(responseData.users);
        }
        allUsers()
    }, [])

    return (
        <div className='home'>
            <div className="home__left">
                <LogoutButton />

            </div>

            <div className='home__middle'>
            </div>

            <div className="home__right">
                <div className="home__suggestions">
                    <p>Suggestions For You</p>
                    {users.map(developers => (
                        <div className="home__developers">
                            <div className="home__developerLabel">
                                <div className="home__avatar">
                                    {developers?.profile_pic ?
                                        <img className='home__displayPic' src={developers?.profile_pic} alt='' /> :
                                        <div className='home__default'>{developers?.first_name[0]}</div>

                                    }
                                </div>
                                <div className="developers__info">
                                    {developers?.first_name} {developers?.last_name}
                                </div>
                                <div className="developers__contacts">
                                    <ul className='developers__links'>
                                        {developers?.github &&
                                            <li><a target='_blank' href={developers?.github}><i class="fa-brands fa-github"></i></a></li>
                                        }
                                        {developers?.linkedin &&
                                            <li><a target='_blank' href={developers?.linkedin}><i class="fa-brands fa-linkedin"></i></a></li>
                                        }
                                    </ul>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Home
