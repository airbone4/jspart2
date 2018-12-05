var canvas, ctx;
window.onload = function (e) {
    imgtarget.src = "0001.jpg";
    imgtarget.onload = function (e) {
        canvas = document.getElementById('canvas');
        ctx = canvasTarget.getContext('2d');
        canvasTarget.width = imgtarget.width;
        //canvas.crossOrigin = "Anonymous";
        canvasTarget.height = imgtarget.height;

        ctx.drawImage(imgtarget, 0, 0);
    }

    /*
	onchange
	onblur
	onfocus
	*/
    inp.onblur = function (e) {
        ctx.font = "36pt Verdana";
        var txt = e.target.value;
        if (txt.length > 0) {
            //redraw image
            ctx.clearRect(0, 0, canvasTarget.width, canvasTarget.height);
            ctx.drawImage(imgtarget, 0, 0);
            //refill text
            ctx.fillStyle = "red";
            ctx.fillText(e.target.value, 40, 80);
        }
    }
}