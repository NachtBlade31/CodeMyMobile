import Link from 'next/link'
import Layout from '../../component/Layout'
import { useState, useEffect, Fragment } from 'react'
import { singleUser, listRelated } from '../../actions/user';
import { API } from '../../config'
import SmallCard from '../../component/user/SmallCard'

const SingleUser = ({ user, query }) => {

    const [related, setRelated] = useState([])
    const loadRelated = () => {
        listRelated(user).then(data => {
            if (data.error) {
                console.log(data.error)
            }
            else {
                setRelated(data)
            }
        })
    }

    useEffect(() => {
        loadRelated();
        setRelated([])
    }, [])

    const showFriends = user =>
        user.friends.map((f, i) => (
            <Link key={i} href={`/users/${f.firstName}`}>
                <a className="btn btn-primary mr-1 ml-1 mt-3"> Say Hi to {f.firstName}{" "}{f.lastName}</a>
            </Link>
        ))

    const showRelatedPeople = () => {
        return related.map((user, i) => (
            <div className="col-md-4" key={i}>
                <article>
                    <SmallCard user={user} />
                </article>
            </div>
        ))
    }

    return <Fragment>
        <Layout>
            <main>
                <article>
                    <div className="container-fluid">
                        <section>
                            <div className="row" style={{ marginTop: '-30px' }}>
                                <img src={`${API}/api/user/photo/${user.firstName}`} alt={user.firstName} className="img img-fluid featured-image" />
                            </div>
                        </section>
                        <section>
                            <div className="container">
                                <h1 className="display-2 pb-3 pt-3 text-center font-weight-strong">Welcome back {user.firstName}{" "}{user.lastName}</h1>
                                <hr />
                                <br />
                                <br />
                                <div className="pb-3">
                                    <h2 className="text-center">Miss Your Friends ?</h2>
                                    <p className="text-center">
                                        {showFriends(user)}
                                        <br />
                                        <br />
                                    </p>
                                    <br />
                                    <br />
                                </div></div>
                        </section>
                    </div>
                    <div className="container pb-5">
                        <hr />
                        <h4 className="text-center pt-5 pb-3 h2">People you may know.......</h4>
                        <div className="row">
                            {showRelatedPeople()}
                        </div>

                    </div>
                </article>
            </main>
        </Layout>
    </Fragment>

}

SingleUser.getInitialProps = ({ query }) => {
    return singleUser(query.firstName).then(data => {
        if (data.error) {
            console.log(data.error)
        }
        else {
            return { user: data, query }
        }
    })
}

export default SingleUser;