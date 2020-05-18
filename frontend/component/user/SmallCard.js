import Link from 'next/link'
import { API } from '../../config';

const SmallCard = ({ user }) => {
    return (
        <div className="card">
            <section>
                <Link href={`/users/${user.firstName}`}>
                    <a>
                        <img className="img img-fluid" style={{ maxHeight: 'auto', width: '100%' }} src={`${API}/api/user/photo/${user.firstName}`} alt={user.firstName} />
                    </a>
                </Link>
            </section>
            <div className="card-body">

                <section>
                    <Link href={`/users/${user.firstName}`}>
                        <a>
                            <h5 className="card-title" >{user.firstName}</h5>
                        </a>

                    </Link>
                    <p className="card-text">{user.firstName}{' '}{user.lastName}</p>
                </section>
            </div>
        </div>)
}

export default SmallCard;