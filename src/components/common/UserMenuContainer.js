import {connect} from 'react-redux'
import UserMenu from './UserMenu'

const mapStateToProps = function (store) {
    return {
        userEmail: store.authData.userEmail
    }
}

export default connect(mapStateToProps)(UserMenu)