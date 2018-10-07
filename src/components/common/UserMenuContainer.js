import {connect} from 'react-redux'
import UserMenu from './UserMenu'

const mapStateToProps = function (state) {
    return {
        userEmail: state.authData.userEmail
    }
}

export default connect(mapStateToProps)(UserMenu)