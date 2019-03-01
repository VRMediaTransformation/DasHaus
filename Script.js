AFRAME.registerComponent('event', {
    schema: {
        target: {type: 'selector'},
        target2: {type: 'selector'},
        aevent: {default: 'animation'},
        triggeraction: {default: 'click' }
    },

    init: function() {

        var data = this.data;

        this.el.addEventListener(data.triggeraction, function () {
            data.target.emit(data.anevent);
            data.target2.emit(data.anevent);
        });
        var entity = document.querySelector('[sound]');
        entity.components.sound.playSound();

    }

});

