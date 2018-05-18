#pragma strict
function Start () {

}

function Update () {
	if(Input.GetButtonDown("Jump")){
		var helper : GameObject = GameObject.FindWithTag("Helper");
		helper.SendMessage("TransformObject",transform.position);	
		Destroy(gameObject);	
		return ;
	}
}