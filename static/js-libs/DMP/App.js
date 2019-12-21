DMP.App = Bricks.inherit(Botex.Widget, {
    params: {
        name: new Quantum.Quant('')
    },

    _render: function($) {
        return {
            content: Botex.zen('h1', Botex.format('Hello, #{0}!', $.name))
        };
    }
});
