function timer(start, end) {
    var _callback = arguments[arguments.length - 1];
    if(!_callback) return console.error('_callback not found');

    // start and end initialize
    end = moment(start).add(end, 'h');

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
            clearInterval(interval);
        }
    }, 1000);
}