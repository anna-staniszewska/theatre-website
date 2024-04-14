document.addEventListener('DOMContentLoaded', function () {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();

    function updateSelector() {
        document.getElementById('year').innerText = currentYear;
        document.getElementById('month').innerText = new Date(currentYear, currentMonth).toLocaleString('pl-PL', { month: 'long' });
    }

    function updateInfo(){
        var displayedYear = document.getElementById('year');
        var displayedMonth = document.getElementById('month');
        
        for(var i = 0; i < events.length; i++){
            events[i].style.display = "block";
            var curMonth = events[i].innerText.split(' ')[1];
            var curYear = events[i].innerText.split(' ')[2];

            if (curMonth == "stycznia"){
                curMonth = "styczeń";
            }
            else if (curMonth == "lutego") {
                curMonth = "luty";
            } 
            else if (curMonth == "marca") {
                curMonth = "marzec";
            } 
            else if (curMonth == "kwietnia") {
                curMonth = "kwiecień";
            } 
            else if (curMonth == "maja") {
                curMonth = "maj";
            } 
            else if (curMonth == "czerwca") {
                curMonth = "czerwiec";
            } 
            else if (curMonth == "lipca") {
                curMonth = "lipiec";
            } 
            else if (curMonth == "sierpnia") {
                curMonth = "sierpień";
            } 
            else if (curMonth == "września") {
                curMonth = "wrzesień";
            } 
            else if (curMonth == "października") {
                curMonth = "październik";
            } 
            else if (curMonth == "listopada") {
                curMonth = "listopad";
            } 
            else {
                curMonth = "grudzień";
            }

            if (curMonth != displayedMonth.innerText){
                events[i].style.display = "none";
            }

        }
    }

    function updateMonth(direction) {
        if (direction === 'next') {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        } else {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        }

        updateSelector();
        updateInfo();
    }

    document.getElementById('prev').addEventListener('click', function () {
        updateMonth('prev');
    });

    document.getElementById('next').addEventListener('click', function () {
        updateMonth('next');
    });

    updateSelector();
    updateInfo();
});

function searchEvent(input){
    for(var i = 0; i < events.length; i++){
        var title = events[i].innerText.split('\n')[0];
        console.log(events);
        if (!title.toLowerCase().includes(input)){
            events[i].style.display = "none";
        }
        else{
            events[i].style.display = "block";
        }
    }
}