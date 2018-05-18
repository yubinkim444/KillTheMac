#pragma strict
private var transAnimationTime : float;
private var trans : boolean;
function Start () {
	trans = false;
	transAnimationTime =1;
}

function Update () {
		if(Input.GetButtonDown("Jump")){
			transAnimationTime = 0.5;
			trans = true;
			return ;
		}
		if(transAnimationTime <= 0.0){
		var helper : GameObject = GameObject.FindWithTag("Helper");
		helper.SendMessage("TransformObject",transform.position);
		Destroy(transform.parent.gameObject);
		}
		if(trans){
			transAnimationTime -= Time.deltaTime;
		}
}
