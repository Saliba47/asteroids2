#pragma strict

function Start () {

}

function Update () {

	
	transform.Rotate(Vector3.forward * 50 * Time.deltaTime);
/*transform.Translate(Vector3.up * Input.GetAxis("Vertical") * Time.deltaTime);
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
	*/
}