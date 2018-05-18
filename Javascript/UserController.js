#pragma strict
var walkSpeed : float = 3.0;
var gravity : float = 20.0;
var trans : boolean;
private var velocity :Vector3;
function Start () {
	animation["Walk"].speed = 2.0;
}

function Update () {
	var controller : CharacterController = GetComponent(CharacterController);
	if(controller.isGrounded){
		velocity = Vector3(Input.GetAxis("Horizontal"),0,Input.GetAxis("Vertical"));
		velocity *= walkSpeed;
		if(Input.GetButtonDown("Jump")){
			trans = !trans;
			animation.Play("Transform");
			return ;
		}
		else if(velocity.magnitude > 0.5){
			animation.CrossFade("Walk",0.1);
			transform.LookAt(transform.position + velocity);
		}
		else{
			if(!trans){
				animation.CrossFade("Idle",0.1);
			}
		}
	}
	velocity.y -= gravity * Time.deltaTime;
	controller.Move(velocity * Time.deltaTime);
}
