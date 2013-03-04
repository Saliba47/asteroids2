#pragma strict
var speed:int;

function Start () {

}

function Update () {

	transform.Translate(Vector3.up * speed * Input.GetAxis("Vertical") * Time.deltaTime);
	transform.Rotate(Vector3.forward * -10 * speed * Input.GetAxis("Horizontal") * Time.deltaTime);

	if(transform.position.x > borderScript.rightmost)
	{
		transform.position.x = borderScript.leftmost;
	}
	else if(transform.position.x < borderScript.leftmost)
	{
		transform.position.x = borderScript.rightmost;
	}
	if(transform.position.y > borderScript.topmost)
	{
		transform.position.y = borderScript.bottommost;
	}
	else if(transform.position.y < borderScript.bottommost)
	{
		transform.position.y = borderScript.topmost;
	}
}