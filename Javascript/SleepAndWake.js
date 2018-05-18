#pragma strict
var sleepTimer : float;
var wakeTimer : float;
private var gravity : float = 20.0;
private var walkSpeed : float = 3.0;
private var velocity :Vector3;
private var wake :boolean;
function Start () {
	wake = false;
}
function Update () {
	var controller : CharacterController = GetComponent(CharacterController);
	if(controller.isGrounded){
		velocity = Vector3(0,-1,0);
		velocity *= walkSpeed;
		BroadcastMessage("Monitoring",wake);
		if(sleepTimer <= 0.0){
			wake = true;
			wakeTimer -= Time.deltaTime;
			animation.CrossFade("Wake",0.1);
				if(wakeTimer <=0.0){
					wake = !wake;
					sleepTimer = Random.Range(4.0,8.0);
				}
			}
		else {
			sleepTimer -= Time.deltaTime;
			if(sleepTimer <= 2.5 && sleepTimer >0){ BroadcastMessage("Warning",sleepTimer);}
			animation.CrossFade("Sleep",0.1);	
			if(wakeTimer <=0.0){
				wakeTimer = Random.Range(4.0,8.0);
			}						
		}
	
	}
	velocity.y -= gravity * Time.deltaTime;
	controller.Move(velocity* Time.deltaTime);
}
