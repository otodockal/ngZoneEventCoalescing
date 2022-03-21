# ngZoneEventCoalescing

Turn on/off ngZoneEventCoalescing in main.ts and watch Angular CD cycles in devtools Profiler.

This option isn't 100% built-in replacement and has a few differences:
- It hinders source events in Devtools, so instead of seeing <i>Source:HTMLDocument.addEventListener:click</i>, you see <i>Source:fakeTopEventTask</i> in current version of Angular/Zone.js.
- CD is no longer synchronous, but asynchronous using requestAnimationFrame.

Even tho source events are swallowed, I think it's still worth the trouble.
