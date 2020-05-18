import Layout from '../../component/Layout';
import CreateUser from '../../component/crud/CreateUser';
import Link from 'next/link';

const User = () => {
    return <Layout>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 pt-5 pb-5">
                    <h2>Add a new User </h2>
                </div>

                <div className="col-md-12">
                    <CreateUser />
                </div>
            </div>

        </div>


    </Layout>
}

export default User;

