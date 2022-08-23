# Portfolio Page

[Link to hosted page](https://ngaritagoitia.herokuapp.com/)

This is my portfolio page made with the MEAN stack, but principally it's an Angular project. I made this page over the course of ~three weeks while learning to use the Angular framework. Various components from [Angular Material](https://material.angular.io/components/categories) are used. The colours of the page are customized, and implemented with Angular Material's theming system. Additionally, the page layout is optimized for mobile viewing.

The portfolio is available in two languages, English and Spanish. The language may be changed whithout reloading by clicking the globe icon in the navigation bar and choosing a language option. This functionality is implemented with [The internationalization (i18n) library for Angular](https://github.com/ngx-translate/core)

Dark and Light modes are also available by toggling the Sun/Moon icon in the navigation bar. 

Various features of this page implement the [RxJS library](https://rxjs.dev/), such as:

- The Dark/Light mode toggle uses a Behaviour Subject with the default value set to true, so that dark mode is the default.

- The progress bar that advances according to how far the user has scrolled down the page, also used a behaviour subject, which receives input from a directive that tracks the scroll event on the page.

- The HTTP GET request to download the curriculum when the Curriculum button is clicked.

- The HTTP POST request, sent once the send message form is completed and submitted. In the subscribe method, the callback receives a success or error message which is presented in a Snackbar Component at the bottom of the page, once the form is submitted.



 
