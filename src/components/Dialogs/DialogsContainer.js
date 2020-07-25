import Dialogs from './Dialogs'
import { sendMessageCreator} from '../../redux/dialogs-reducer'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../hoc/withAuthRedirect'
import { compose } from 'redux'

let mapStateToProps = (state) => {
    return {
     dialogsPage: state.dialogsPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
};
//Compose
export default compose(
    connect(mapStateToProps, mapDispatchToProps),  
    withAuthRedirect
)(Dialogs)




// let AuthRedirectComponent = withAuthRedirect(Dialogs) //HOC REDIRECT
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent) //connect
// export default DialogsContainer