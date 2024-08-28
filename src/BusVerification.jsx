import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import './Requests.css';
export default function Verify() {
    return(
        <Table responsive="sm" className="request-table">
            <thead>
                <tr>
                    <th>Business Name</th>
                    <th>GSTIn</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Geetansh gandhi</td>
                    <td>AAA</td>
                    <td>
                        <button className="request-approve">Approve
                        </button>
                        <button className="request-reject">Reject
                        </button>
                    </td>
                </tr>
                <tr>
                <td>Geetansh gandhi</td>
                    <td>AAA</td>
                    <td>
                        <button className="request-approve">Approve
                        </button>
                        <button className="request-reject">Reject
                        </button>
                    </td>
                </tr>
                <tr>
                <td>Geetansh gandhi</td>
                    <td>AAA</td>
                    <td>
                        <button className="request-approve">Approve
                        </button>
                        <button className="request-reject">Reject
                        </button>
                    </td>
                </tr>
                <tr>
                <td>Geetansh gandhi</td>
                    <td>AAA</td>
                    <td>
                        <button className="request-approve">Approve
                        </button>
                        <button className="request-reject">Reject
                        </button>
                    </td>
                </tr>
                <tr>
                <td>Geetansh gandhi</td>
                    <td>AAA</td>
                    <td>
                        <button className="request-approve">Approve
                        </button>
                        <button className="request-reject">Reject
                        </button>
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}