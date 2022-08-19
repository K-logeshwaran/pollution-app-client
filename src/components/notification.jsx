import addNotification from 'react-push-notification';
import { Notifications } from 'react-push-notification';
function NotiComp() {
function buttonOnClick (){
    console.log("Clicked");
	addNotification({
	title: 'Warning',
    message:"Hello",
	native:true		
	})
};
return (
	<div className="App">
	<Notifications />
	<h1>Hey Geek!</h1>
	<button onClick={()=>buttonOnClick()}>
		Push Notification
	</button>
	</div>
);
}

export default NotiComp;
