import Link from 'next/link'
import { API } from '../../config';

const Card = ({ user }) => {

    return (
        <div className="lead pb-4">
            <header>
                <Link href={`/users/${user.firstName}`}>
                    <a>
                        <h2 className=" pt-3 pb-3 font-weight-bold ">
                            {user.firstName} {' '}{user.lastName}
                        </h2>
                    </a>
                </Link>
            </header>
            <div className="row">
                <div className="col-md-4">
                    <section>
                        <img className="img img-fluid" style={{ maxHeight: '150px', width: 'auto' }} src={`${API}/api/user/photo/${user.firstName}`} alt={user.firstName} />
                    </section>
                </div>
            </div>
        </div>)
}

export default Card;