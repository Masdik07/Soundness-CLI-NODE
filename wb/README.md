# Whiteboard animation engines

`page.js` is the engine the current video prompt loads through jsDelivr.
It is the engine from the working 01 prompt (cream paper pages, poses,
page camera, paper transitions, acting helpers) with these additions:

- It loads from the link on the first line of each video file, so the AI
  only writes the scenes.
- `PUT(...)` layout boxes measure each drawing after the font loads and keep
  it inside its box, so nothing spills over or off the page.
- `WT`/`PILL` text is measured for real, so letters are never cut off, and an
  optional max width shrinks long text to fit.
- Scene end times and every animation time are read straight off the
  transcribe.
- Each scene runs in its own `<script>`, so a broken scene is skipped instead
  of stopping the whole video.

Each prompt links to one exact commit of the file. Editing it later never
changes videos that already use an older link.

`wb.js` is the earlier engine. The current prompt does not use it.
