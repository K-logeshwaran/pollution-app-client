import addNotification from 'react-push-notification';
import { Notifications } from 'react-push-notification';
function NotiComp() {
function buttonOnClick (){
    console.log("Clicked");
	addNotification({
	title: 'Finr',
    message:`Fine`,
	native:true		
	})
};
return (
	<div className="App">
		<Notifications />
	</div>
);
}

export default NotiComp;
