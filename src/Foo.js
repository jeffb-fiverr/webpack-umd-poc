class Foo {

  constructor() {

    ((name = "umd") => {
      console.info(`hi there, ${name}!`);
    })();

    this.render();

  }

  render() {
    document.getElementById('working').innerHTML = 'whoa, this is working!';
  }

}

export default Foo;