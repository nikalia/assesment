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

export class UpdateCust extends React.Component {

  handleRowClick = item => {
    console.log(item)
  }

  render() {
    const { dataDetails } = this.props.location.state

    return (
      <div className={styles.container}>
        <h1>Customer Information</h1>
          <TextField
            defaultValue={dataDetails.name}
            disable={true}
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
  UpdateCust: makeSelectUpdateCust(),
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

const withReducer = injectReducer({ key: 'updateCust', reducer });
//const withSaga = injectSaga({ key: 'updateCust', saga });

export default compose(
  withReducer,
  //withSaga,
  withConnect
)(UpdateCust);
    