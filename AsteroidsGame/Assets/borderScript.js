#pragma strict

static var leftmost:float;
static var bottommost:float;
static var topmost:float;
static var rightmost:float;


function Start () {

}

function Update () {

	rightmost = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,0,0)).x;
	leftmost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).x;
	topmost = Camera.main.ScreenToWorldPoint(Vector3(0,Screen.height,0)).y;
	bottommost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).y;
	
}