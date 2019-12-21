(function() {
    var names = ['World', 'Russia', 'Yaroslavl'];
    var name = new Quantum.Quant(names[0]);
    var i = 0;
    setInterval(function() {
        name.setValue(names[i++ % names.length]);
    }, 1000);

    new DMP.App({name: name}).mount(document.body);
})();
