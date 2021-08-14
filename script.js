var quotes = [
	`"Yo Ndak Tau Kok Tanya Saya." - Orang Tidak Dikenal`,
	`"Koh, saya mau ngutang." - Penghoetank`,
	`"Ahh... Gura-cwhan wangy-wangy~" - Orang stres`,
	`"Tolong saya dikejar penjahat mau dicul" - Unknown`,
	`"Ada kesyirikan di lagu 'Ya thaybah'." - Wahabi gblk`,
	`"P, bang." - Abang2 milenial`,
	`"Hari ini kok kayak sikap kamu. Dingin banget." - Saya`,
	`"Apa saat kita sakit kalo sedang di kamar mandi jadi sikat." - Mba2 FB `,
	`"Kok bisa ya orang2 pacarnya bukan aku" - Gwh`,
	`"Wisuda itu H-1 pengangguran." - Mas2 sarjana`,
	`"?C?t? t? s?l!t d,m?9rt!,trk?d??9 mbw?t k!t? kc?w?,m???9!z,sd!h & mr???. ?C?t? j9 mbw?t k!t? trt?w?,9mb!r?,& bh?9!?. ?C?t? bk?? t?k sl!?9 M?y?k!t!,tp sl!?9 m?9!s! & ?rb?9!. ?C?t? t?k mm??d?9, Kd?d?k??,?s!? & st?t?z. ?C?t? t? ?dlh kc!h cy?9,p?9rt!??,kt?l?s" - Dinda Cyank Reiyma`,
	`"Cerita sini..." - Badut `,
	`"Belajar itu harus, pintar itu bonus." - Irwansyah Saputra`,
];

function newQuote() {
	var randomNumber = Math.floor(Math.random() * quotes.length);
	console.log(randomNumber);
	document.getElementById(`quoteDisplay`).innerHTML = quotes[randomNumber];
}
