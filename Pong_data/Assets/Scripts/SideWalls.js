#pragma strict

function OnTriggerEnter2D (hitInfo : Collider2D) {
	if (hitInfo.name == "Ball") {
		var wallName = transform.name;
		GetComponent.<AudioSource>().pitch = Random.Range(1.0f, 1.05f);
		GetComponent.<AudioSource>().Play();
		GameManager.Score (wallName);
		hitInfo.gameObject.SendMessage ("ResetBall");
	}
}