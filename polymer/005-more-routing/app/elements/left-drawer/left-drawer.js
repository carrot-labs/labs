Polymer('left-drawer', {
  created: function() {
    this.items = [
      {name: 'Home', url: '/'},
      {name: 'About', url: '/about'},
      {name: 'Contact', url: '/contact'},
      {name: 'First User', url: '/users/2'}
    ];
  }
});