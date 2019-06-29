
## Just dropping the Quicklink default code(inside window onload event) into the index.html

In SPA, window-onload-event is just called one time when the website is loaded or only when you refresh the website(F5) (I double checked it by testing).

And when routing, it's not called which means that it does not prefetches in-viewport links in that route component.
So I think we should implement quicklink for it to be called once a new route has completed.
Just dropping in the one-line code inside window-onload-event might not be effective for all routes but just one which is the loaded page.

## Just calling quicklink in componentDidMount of root component(App.js in create react app based project) i.e. after the component tree rendered.

I think it is the same as the above case.
According to testing, componentDidMount is called before window-onload-event.
The effect is componentDidMount is called once when the website is loaded or only when you refresh the websites(F5). Similar to window-onload-event case.

## Calling quicklink() once a navigation to a new route has completed
i.e. according to SPA quicklink usage in README, we can call quicklink in componentDidUpdate as well as in ComponentDidMount since just one route is rendered at one time and componentDidMount is just called once while componentDidUpdate is called when a new route is rendered.


The workflow from quicklink README is "Detects links within the viewport".

In MPA(multi page application - traditional website) quicklink is called inside window-onload-event so every time url is changed, it's called but not in SPA.

https://glitch.com/~anton-karlovskiy-quicklink-react-router
https://anton-karlovskiy-quicklink-react-router.glitch.me
