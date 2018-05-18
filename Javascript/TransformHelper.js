#pragma strict
var particlePrefab  : GameObject;
var transformPrefab : GameObject;
var userPrefab : GameObject;
private var trans : boolean;
function Start () {
	trans = false;
}

function Update () {

}
function TransformObject(pos : Vector3){
	trans = !trans;
	if(trans){
		Instantiate(particlePrefab,pos,transform.rotation);
		Instantiate(transformPrefab,pos,Quaternion.identity);
	}
	else{
		Instantiate(particlePrefab,pos,transform.rotation);
		Instantiate(userPrefab,pos,Quaternion.identity);
	}
}