import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import './Requests.css';
export default function Request() {
    return(
        <div className="content">
        <Table responsive="sm" className="request-table">
            <thead>
                <tr>
                    <th>PIN CODE</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>450100</td>
                    <td>AAA</td>
                    <td>CGDg</td>
                    <td>
                        <button className="request-approve">Resolved
                        </button>
                        <button className="request-reject">Unresolved
                        </button>
                    </td>
                </tr>
                <tr>
                <td>123141</td>
                    <td>AAA</td>
                    <td>CGDg</td>
                    <td>
                        <button className="request-approve">Resolved
                        </button>
                        <button className="request-reject">Unresolved
                        </button>
                    </td>
                </tr>
                <tr>
                <td>123421</td>
                    <td>AAA</td>
                    <td>CGDg</td>
                    <td>
                        <button className="request-approve">Resolved
                        </button>
                        <button className="request-reject">Unresolved
                        </button>
                    </td>
                </tr>
                <tr>
                <td>343222</td>
                    <td>AAA</td>
                    <td>CGDg</td>
                    <td>
                        <button className="request-approve">Resolved
                        </button>
                        <button className="request-reject">Unresolved
                        </button>
                    </td>
                </tr>
                <tr>
                <td>443123</td>
                    <td>AAA</td>
                    <td>CGDg</td>
                    <td>
                        <button className="request-approve">Resolved
                        </button>
                        <button className="request-reject">Unresolved
                        </button>
                    </td>
                </tr>
            </tbody>
        </Table>
        </div>
    )
}