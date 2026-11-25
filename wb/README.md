# WB engine (hand-drawn whiteboard explainer)

`wb.js` is the animation engine loaded by the video prompts through jsDelivr.
Each prompt links to one exact commit of this file, so editing it later never
changes videos that already use an older link.

It draws the cream paper, camera, hand-drawn pen tools, write-on text,
characters, layout boxes that keep things from overlapping, and the playback
controls. The AI only writes the `SCENE(...)` calls.
