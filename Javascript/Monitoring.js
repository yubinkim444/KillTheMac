#pragma strict
var bbungsaCheck : boolean;
private var user : GameObject;
private var respawnTime : float;
private var respawnCheck : boolean;
private var originalColor : Color;
private var warning : boolean;
private var warningMutex : boolean;
function Start () {
	originalColor = renderer.material.color;
	respawnTime = 1.5;
	respawnCheck = false;
	warningMutex = true;
	warning = false;
}

function Update () {
	if(warning){
		renderer.material.color = Color.blue * Mathf.Abs(Mathf.Sin(40.0 * Time.deltaTime));
	}
	if(respawnCheck){
			respawnTime -= Time.deltaTime;
	}
	if(respawnTime <= 0){
	    var respawn : GameObject = GameObject.FindWithTag("Respawn");
		user.gameObject.transform.position = respawn.transform.position;
		respawnCheck = false;
		respawnTime = 1.5;
	}
	
}
function OnTriggerStay(other : Collider){
	try{
		if(other.gameObject.tag == "User" && bbungsaCheck){	
			user = GameObject.FindWithTag("User");		
			respawnCheck = true;
			}
		}
	catch(e){
	 	return;
	}

}
function Monitoring( check : boolean){
	bbungsaCheck = check;
}
function Warning(time : float){
	if(warningMutex){
		warningMutex = false;
		warning = true;
		yield WaitForSeconds(time);
		warning = false;
		renderer.material.color = originalColor;
		warningMutex = true;
	}
}