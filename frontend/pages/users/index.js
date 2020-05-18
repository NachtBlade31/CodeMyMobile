import Link from 'next/link'
import { withRouter } from 'next/router'
import Layout from '../../component/Layout'
import { useState, Fragment } from 'react'
import { listUserWithPagination } from '../../actions/user';
import Card from '../../component/user/Card'
const Users = ({ users, totalUsers, userLimit, userSkip, router }) => {
    const [limit, setLimit] = useState(userLimit)
    const [skip, setSkip] = useState(0)
    const [size, setSize] = useState(totalUsers)
    const [loadedUser, setLoadedUser] = useState([])

    const loadMore = () => {
        let toSkip = skip + limit
        listUserWithPagination(toSkip, limit).then(data => {
            if (data.error) {
                console.log(data.error)
            }
            else {
                setLoadedUser([...loadedUser, ...data])
                setSize(data.length)
                setSkip(toSkip)
            }
        })
    }

    const loadMoreButton = () => {
        return (
            size > 0 && size >= limit && (<button onClick={loadMore} className="btn btn-primary btn-lg">Load more</button>)
        )
    }

    const showAllUsers = () => {
        return users.map((user, i) => {

            return <article key={i}>
                <Card user={user} />
                <hr />
            </article>
        })
    }
    const showLoadedUsers = () => {
        return loadedUser.map((user, i) => {
            return <article key={i}>
                <Card user={user} />
            </article>
        })
    }

    return <Fragment>
        <Layout>
            <main>
                <div className="container-fluid">
                    <header>
                        <div className="col-md-12 pt-3">
                            <h1 className="display-4 font-weigth-bold text-center">
                                Meet our Users
                     </h1>
                        </div>
                    </header>
                </div>
                <div className="container-fluid">
                    {showAllUsers()}
                </div>
                <div className="container-fluid">
                    {showLoadedUsers()}
                </div>
                <div className="text-center pt-5 pb-5">
                    {loadMoreButton()}
                </div>
            </main>
        </Layout>
    </Fragment>
}

Users.getInitialProps = () => {
    let skip = 0
    let limit = 5
    return listUserWithPagination(skip, limit).then(data => {
        if (data.error) {
            console.log(data.error)
        } else {
            return {
                users: data, totalUsers: data.length, userLimit: limit, userSkip: skip
            }
        }

    })
}

export default withRouter(Users);