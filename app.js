//create a Vue instance
new Vue({
  //which element will this instance be shown on
  el: `#vue-app`,
  data: {
    name: 'Henryyy',
    job:`developerrr`,
  },
  methods: {
    //if using arrow functions, will not get this. this will not be the method.
    welcome: function(hi){
      return `${hi} welcome to my page. I'm ${this.name} and I'm a ${this.job}`;
    }
  }
});
