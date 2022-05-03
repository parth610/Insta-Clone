import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allPosts } from '../../store/posts'
import LogoutButton from '../auth/LogoutButton'
import LoadPosts from '../LoadPosts/LoadPosts'
import './Home.css'
const Home = () => {
    const [users, setUsers] = useState([])
    const dispatch = useDispatch()
    const posts = Object.values(useSelector(state => state.posts))

    useEffect(() => {
        dispatch(allPosts())
    }, [dispatch])


    console.log(posts);

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
                    <LoadPosts posts={posts} />
            </div>

            <div className="home__right">
                <div className="home__suggestions">
                    <p>Suggestions For You</p>
                            <div className="home__developerLabel">
                                <div className="home__avatar">
                                    {developer?.profile_pic ?
                                        <img className='home__displayPic' src={developer?.profile_pic} alt='' /> :
                                        <div className='home__default'>{developer?.first_name[0]}</div>

                                    }
                                </div>
                                <div className="developers__info">
                                    {developer?.first_name} {developer?.last_name}
                                </div>
                                <div className="developers__contacts">
                                    <ul className='developers__links'>
                                        {developer?.github &&
                                            <li><a target='_blank' href={developer?.github}><i className="fa-brands fa-github"></i></a></li>
                                        }
                                        {developer?.linkedin &&
                                            <li><a target='_blank' href={developer?.linkedin}><i className="fa-brands fa-linkedin"></i></a></li>
                                        {developers?.github &&
                                            <li><a target='_blank' href={developers?.github}><i className="fa-brands fa-github"></i></a></li>
                                        }
                                        {developers?.linkedin &&
                                            <li><a target='_blank' href={developers?.linkedin}><i className="fa-brands fa-linkedin"></i></a></li>
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
