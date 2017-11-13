function Timer() {
    this.intervalList = [];
}

Timer.prototype.set = function(start, end) {
    var hours = moment.duration(moment(new Date(end)).diff(moment(new Date(start))));

    var _callback = arguments[arguments.length - 1];
    if(!_callback) return console.error('_callback not found');

    // start and end initialize
    console.log(start);
    end = moment(new Date(start)).add(hours, 'h');
    console.log(end);

    var interval = setInterval(function() {
        if(moment(new Date()).isBefore(end)) {
            var second = moment(end).diff(moment(new Date()), 's');
            var duration = moment.duration(second, 's');
            $('.jcounter__days').text(duration.days());
            $('.jcounter__hours').text(duration.hours());
            $('.jcounter__minutes').text(duration.minutes());
            $('.jcounter__seconds').text(duration.seconds());
        } else {
            _callback();
            clearInterval(this.interval);
        }
    }, 1000);

    this.intervalList.push(interval);
}

Timer.prototype.clear = function() {
    this.intervalList.forEach(function(interval) {
        clearInterval(interval);
        $('.jcounter__days').text('');
        $('.jcounter__hours').text('');
        $('.jcounter__minutes').text('');
        $('.jcounter__seconds').text('');
    });
};