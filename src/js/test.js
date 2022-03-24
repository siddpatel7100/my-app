import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert} from 'react-bootstrap';

function Test() {
        return (
            <div className="changeAlert">
                <Alert variant="success" className="changeAlertBox" >
                <h2>Hello This is your Test Page</h2>
                </Alert>
            </div>
        )
    
}
export default Test