#pragma strict

var ballSpeed : float = 100;

function Start () {
	yield WaitForSeconds(2);
	GoBall();
}

function Update () {
	var xVel : float = GetComponent.<Rigidbody2D>().velocity.x;
	// Debug.Log ("Velocity = " + xVel);
	if (xVel < 8 && xVel > -8 && xVel != 0) {
		if (xVel > 0) {
			GetComponent.<Rigidbody2D>().velocity.x = 10;
		} else {
			GetComponent.<Rigidbody2D>().velocity.x = -10;
		}
	// Debug.Log ("Velocity before " + xVel);
	// Debug.Log ("Velocity after " + GetComponent.<Rigidbody2D>().velocity.x);
	}
}

function OnCollisionEnter2D (colInfo : Collision2D) {
	var randomVelocity = Random.Range(0, 2);
	if (colInfo.collider.tag == "Player") {
		GetComponent.<Rigidbody2D>().velocity.y = GetComponent.<Rigidbody2D>().velocity.y / 2 +
		colInfo.collider.GetComponent.<Rigidbody2D>().velocity.y / 3 + randomVelocity;
		GetComponent.<AudioSource>().pitch = Random.Range(0.8f, 1.2f);
		GetComponent.<AudioSource>().Play();
	}
}

function ResetBall() {
	GetComponent.<Rigidbody2D>().velocity.y = 0;
	GetComponent.<Rigidbody2D>().velocity.x = 0;
	transform.position.x = 0;
	transform.position.y = 0;
	
	yield WaitForSeconds (0.5);
	GoBall();
}

function GoBall () {
	var randomNumber = Random.Range(0, 2);
	if (randomNumber <= 0.5) {
		GetComponent.<Rigidbody2D>().AddForce (new Vector2 (ballSpeed,10));
	} else {
		GetComponent.<Rigidbody2D>().AddForce (new Vector2 (-ballSpeed,-10));
	}
}