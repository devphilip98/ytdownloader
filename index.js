
const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
const PORT = 4000;

app.use(cors());


let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port ,() => {
	console.log(`Server running at port ${port}`);
});


app.get('/downloadmp3', async (req, res, next) => {
	try {
		var url = req.query.url;
		let title = 'audio';

		await ytdl.getBasicInfo(url, {
			format: 'mp4'
		}, (err, info) => {
			if (err) throw err;
			else{
			title = info.player_response.videoDetails.title.replace(/[^\x00-\x7F]/g, "");
			}
		});

		res.header('Content-Disposition', `attachment; filename="${title}.mp3"`);
		ytdl(url, {
			format: 'mp3',
			filter: 'audioonly',
		}).pipe(res);

	} catch (err) {
		console.error(err);
		res.status(404).sendFile('F:/Web/node-js-getting-started - Copy/404.png')

		
	}
});

app.get('/downloadmp4', async (req, res, next) => {
	try {
		let URL = req.query.url;
		let title = 'video';

		await ytdl.getBasicInfo(URL, {
			format: 'mp4'
		}, (err, info) => {
			//res.status('failed').send("video error ",err);
			

			if (err) throw err;
			else{
				title = info.player_response.videoDetails.title.replace(/[^\x00-\x7F]/g, "");
			}
			
		}
		
		);

		res.header('Content-Disposition', `attachment; filename="${title}.mp4"`);
		ytdl(URL, {
			format: 'mp4',
		}).pipe(res);

	} catch (err) {
		console.error(err);
		res.status(404).sendFile('F:/Web/node-js-getting-started - Copy/404.png')
		
	}
});


