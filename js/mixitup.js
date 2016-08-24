$(function(){
  $('#mix-wrapper').mixItUp({
    load: {
      sort: 'order:asc' /* default: asc */
    },
    animation: {
      effects: 'translateZ(-50px) fade scale(0.87) stagger(20ms)',
      easing: 'ease',
      duration: 700 /* 600 */
    },
    selectors: {
      target: '.mix-target', /* .mix */
      filter: '.filter-btn', /* .filter */
      sort: '.sort-btn' /* .sort */
    },
    callbacks: {
      onMixEnd: function(state) {
        // console.log(state) /* null */
      }
    }
  });
});