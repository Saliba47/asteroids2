#pragma strict
var speed:int;
var lives:int;

function Start () {
lives = 3;
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
	if(lives == 0)
	{
		Destroy(this.gameObject);
	
	}
}

function OnTriggerEnter(other:Collider)
	{
		if(other.gameObject.tag == "asteroidTag")
		{
			
			lives--;
			
		}
	}
	
function OnGUI()
{
	GUI.color = Color.white;
	
	GUI.Label(Rect(10,30,200,20), "Lives: " + lives);

}	