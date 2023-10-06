function ifElse() {
	let output = document.getElementById("output-if-else")
	let input = parseInt(document.getElementById("input-if-else").value)

	if (input >= 80) {
		output.innerHTML = ""
		output.innerHTML += `Nilai Anda ${input}, Nilai Mutu A<br>`
	} else if (input >= 70) {
		output.innerHTML = ""
		output.innerHTML += `Nilai Anda ${input}, Nilai Mutu B<br>`
	} else if (input >= 0) {
		output.innerHTML = ""
		output.innerHTML += `Nilai Anda ${input}, Nilai Mutu C<br>`
	} else {
		output.innerHTML = ""
		output.innerHTML += `Mohon masukan nilai terlebih dahulu<br>`
		if (input < 0) {
			output.innerHTML += `Pastikan nilai lebih dari 0<br>`
		}
	}
}

function switchCase() {
	let output = document.getElementById("output-switch")
	let input = document.getElementById("input-switch").value.toLowerCase()

	switch (input) {
		case "senin":
			output.innerHTML = ""
			output.innerHTML += "Selamat! Senin merupakan nama hari"
			break
		case "selasa":
			output.innerHTML = ""
			output.innerHTML += "Selamat! Selasa merupakan nama hari"
			break
		case "rabu":
			output.innerHTML = ""
			output.innerHTML += "Selamat! Rabu merupakan nama hari"
			break
		case "kamis":
			output.innerHTML = ""
			output.innerHTML += "Selamat! Kamis merupakan nama hari"
			break
		case "jumat":
			output.innerHTML = ""
			output.innerHTML += "Selamat! Jumat merupakan nama hari"
			break
		case "sabut":
			output.innerHTML = ""
			output.innerHTML += "Selamat! Sabtu merupakan nama hari"
			break
		case "minggu":
			output.innerHTML = ""
			output.innerHTML += "Selamat! Minggu merupakan nama hari"
			break
		default:
			output.innerHTML = ""
			output.innerHTML += `Mohon maaf! ${input} bukan merupakan nama hari`
	}
}

function forLoop() {
	let output = document.getElementById("output-for")
	let input = document.getElementById("input-for").value
	let iteration = parseInt(document.getElementById("input-for-iteration").value)

	output.innerHTML = ""

	for (i = 0; i < iteration; i++) {
		output.innerHTML += `${input} <br>`
	}
}

function whileLoop() {
	let output = document.getElementById("output-while")
	let input = document.getElementById("input-while").value
	let iteration = parseInt(
		document.getElementById("input-while-iteration").value
	)
	let count = 0

	output.innerHTML = ""

	while (count < iteration) {
		output.innerHTML += `${input} <br>`
		count++
	}
}

function doWhileLoop() {
	let output = document.getElementById("output-do-while")
	let iteration = parseInt(document.getElementById("input-do-while").value)
	let count = 1

	output.innerHTML = ""

	do {
		output.innerHTML += `${count} <br>`
		count++
	} while (count <= iteration)

	if (isNaN(iteration)) {
		output.innerHTML += "Anda tidak memasukan input angka > 0"
	}
}
