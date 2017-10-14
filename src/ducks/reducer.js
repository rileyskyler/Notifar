const initialState = {
	userName:'',
	email:'',
	profilePhoto:'',
	deviceSerial:'',
	locationId:'',
	universalLocator:'device123',
	defaultCoordinates:'33.449891,-112.074829',
	currentLocation:{},
	locationHistory:{},

}

const UPDATE_USER_NAME = "UPDATE_USER_NAME";
const UPDATE_EMAIL = "UPDATE_EMAIL";
const UPDATE_PROFILE_PHOTO = "UPDATE_PROFILE_PHOTO";
const UPDATE_DEVICE_SERIAL = "UPDATE_DEVICE_SERIAL";
const UPDATE_LOCATION_ID = "UPDATE_LOCATION_ID";
const UPDATE_CURRENT_LOCATION = "UPDATE_USERNAME";
const UPDATE_LOCATION_HISTORY = "UPDATE_LOCATION_HISTORY";

export default 
function reducer(state=initialState, action){ 
	
		switch(action.type){

			case UPDATE_USER_NAME:
				return Object.assign({}, state, {userName: action.payload})
			case UPDATE_EMAIL:
				return Object.assign({}, state, {email: action.payload})
			case UPDATE_PROFILE_PHOTO:
				return Object.assign({}, state, {profilePhoto: action.payload})
			case UPDATE_DEVICE_SERIAL:
				return Object.assign({}, state, {deviceSerial: action.payload})
			case UPDATE_LOCATION_ID:
				return Object.assign({}, state, {locationId: action.payload})
			case UPDATE_CURRENT_LOCATION:
				return Object.assign({}, state, {currentLocation: action.payload})
			case UPDATE_LOCATION_HISTORY:
				return Object.assign({}, state, {locationHistory: action.payload})
			

			default:
				return state
		}
	
	} 

export function updateUserName(userName){
	return {
		type: UPDATE_USER_NAME,
		payload: userName
	}

}

export function updateEmail(email){
	return {
		type: UPDATE_EMAIL,
		payload: email
	}

}

export function updateProfilePhoto(profilePhoto){
	return {
		type: UPDATE_PROFILE_PHOTO,
		payload: profilePhoto
	}

}

export function updateDeviceSerial(deviceSerial){
	return {
		type: UPDATE_DEVICE_SERIAL,
		payload: deviceSerial
	}

}

export function updateLocationId(locationId){
	return {
		type: UPDATE_LOCATION_ID,
		payload: locationId
	}

}

export function updateCurrentLocation(currentLocation){
	return {
		type: UPDATE_CURRENT_LOCATION,
		payload: currentLocation
	}

}

export function updateLocationHistory(locationHistory){
	return {
		type: UPDATE_LOCATION_HISTORY,
		payload: locationHistory
	}

}

