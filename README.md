# Potato Flickr

> A small practical assignment for Potato built on Vue by Michael Pumo

## Demo

[http://potato-flickr.netlify.com/](http://potato-flickr.netlify.com/)

## About

This small app will fetch a feed of posts from a Flickr API endpoint, passing with it 'tags' by which to search for. The default tag when first opening the app is 'potato'.

I have add the ability to pass your own tags so the feed can be updated based on these. Due to the nature of free-typing the tags, input will be cleaned and formatted in a way that Flickr will understand.

To get a better understanding of what role Vue plays, it might help to [download the Vue.js dev tools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en) extension for Chrome.

## NPM Dependencies for the browser

#### date-fns
A small library used for formatting dates and times.

#### fetch-jsonp
Used for fetching JSONP data in the browser.

#### vue
The main JavaScript framework in use.

#### vue-router
Used for routing the application.

#### vuex
State management tool for Vue where we store all information.

#### vuex-persistedstate
A plugin built on top of Vuex to persist the store on hard refresh or tab close etc.


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
