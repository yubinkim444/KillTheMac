#pragma strict
var movieObject : GameObject;
var movieClip : MovieTexture;

function Start () {
movieObject.renderer.material.mainTexture = movieClip;
movieClip.Play();
}

function Update () {

}