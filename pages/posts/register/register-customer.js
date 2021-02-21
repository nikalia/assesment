import Link from 'next/link'
import styles from '../../../styles/Home.module.css'
import { fetchDataAction } from './action'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
//import injectSaga from '../../utils/injectSaga'
import injectReducer from '../../utils/injectReducer'
import makeSelectUpdateCust from './selectors'
import reducer from './reducer'
//import saga from './saga'
import TextField from '@material-ui/core/TextField'
//import { render } from 'react-dom'


export class RegisterCust extends React.Component {

  render() {
    return (
    
      <div className={styles.container}>
        <h1>Register New Customer</h1>
          <TextField
            defaultValue={dataDetails.name}
            variant="outlined"
            label="Name"
          />
          <TextField
            defaultValue={dataDetails.email}
            variant="outlined"
            label="Email"
          />
          <TextField
            defaultValue={dataDetails.mobile}
            variant="outlined"
            label="Mobile"
          />
          <button type="button" onClick={handleOpen}>
              Next
          </button>
            <Modal />
        <footer>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </footer>
  
      </div>
    
    )
  }
}

const mapStateToPops = createStructuredSelector({
  RegisterCust: makeSelectRegisterCust(),
})

function mapDispatchToProps(dispatch) {
  return {
    fetchData: requestInfo => {
      dispatch(fetchDataAction(requestInfo))
    }
  }
}

const withConnect = connect (
  mapStateToPops,
  mapDispatchToProps
)

const withReducer = injectReducer({ key: 'registerCust', reducer });
//const withSaga = injectSaga({ key: 'updateCust', saga });

export default compose(
  withReducer,
  //withSaga,
  withConnect
)(RegisterCust);
    